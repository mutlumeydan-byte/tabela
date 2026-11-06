// Pushes localized App Store metadata from store.config.json via the App Store Connect API.
// - App info localizations: name, subtitle, privacy policy URL
// - Version localizations: description, keywords, promotional text, support/marketing URL
// Env: ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY, ASC_APP_ID
import crypto from 'node:crypto';
import fs from 'node:fs';

const { ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY, ASC_APP_ID } = process.env;
if (!ASC_KEY_ID || !ASC_ISSUER_ID || !ASC_PRIVATE_KEY || !ASC_APP_ID) throw new Error('Missing ASC_* env');
let PK = ASC_PRIVATE_KEY.replace(/\r/g, '').trim();
if (!PK.includes('BEGIN')) PK = `-----BEGIN PRIVATE KEY-----\n${PK.replace(/\s+/g, '').match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----`;

const API = 'https://api.appstoreconnect.apple.com/v1';
const b64url = (b) => Buffer.from(b).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
function jwt() {
  const now = Math.floor(Date.now() / 1000);
  const h = b64url(JSON.stringify({ alg: 'ES256', kid: ASC_KEY_ID, typ: 'JWT' }));
  const p = b64url(JSON.stringify({ iss: ASC_ISSUER_ID, iat: now, exp: now + 600, aud: 'appstoreconnect-v1' }));
  const s = crypto.sign('sha256', Buffer.from(`${h}.${p}`), { key: PK, dsaEncoding: 'ieee-p1363' });
  return `${h}.${p}.${b64url(s)}`;
}
async function api(method, url, body) {
  const res = await fetch(url.startsWith('http') ? url : API + url, {
    method, headers: { Authorization: `Bearer ${jwt()}`, 'Content-Type': 'application/json' }, body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${url.split('?')[0]} -> ${res.status}: ${text.slice(0, 400)}`);
  return text ? JSON.parse(text) : null;
}

const cfg = JSON.parse(fs.readFileSync('store.config.json', 'utf8')).apple;
const info = cfg.info;
let ok = 0, fail = 0;
const log = (s) => console.log(s);

// ---- App info (name, subtitle, privacy URL) ----
const appInfos = (await api('GET', `/apps/${ASC_APP_ID}/appInfos`)).data;
const appInfo = appInfos.find(a => !['READY_FOR_SALE', 'REPLACED_WITH_NEW_INFO'].includes(a.attributes.appStoreState || a.attributes.state)) || appInfos[0];
const infoLocs = (await api('GET', `/appInfos/${appInfo.id}/appInfoLocalizations?limit=50`)).data;

for (const [locale, v] of Object.entries(info)) {
  const attrs = { name: v.title, subtitle: v.subtitle, privacyPolicyUrl: v.privacyPolicyUrl };
  const existing = infoLocs.find(l => l.attributes.locale === locale);
  try {
    if (existing) await api('PATCH', `/appInfoLocalizations/${existing.id}`, { data: { type: 'appInfoLocalizations', id: existing.id, attributes: attrs } });
    else await api('POST', '/appInfoLocalizations', { data: { type: 'appInfoLocalizations', attributes: { locale, ...attrs }, relationships: { appInfo: { data: { type: 'appInfos', id: appInfo.id } } } } });
    ok++; log(`✓ info ${locale}: ${v.title}`);
  } catch (e) {
    // Name taken? retry without changing name
    if (/name/i.test(e.message) && /(already|use|taken|ENTITY_ERROR)/i.test(e.message)) {
      try {
        const alt = { subtitle: v.subtitle, privacyPolicyUrl: v.privacyPolicyUrl, name: `${v.title.split(/[:：]/)[0].trim()} ${locale.toUpperCase()}`.slice(0, 30) };
        if (existing) await api('PATCH', `/appInfoLocalizations/${existing.id}`, { data: { type: 'appInfoLocalizations', id: existing.id, attributes: { subtitle: alt.subtitle, privacyPolicyUrl: alt.privacyPolicyUrl } } });
        log(`~ info ${locale}: name rejected (${e.message.slice(0, 160)})`); fail++;
      } catch (e2) { fail++; log(`✗ info ${locale}: ${e2.message.slice(0, 250)}`); }
    } else { fail++; log(`✗ info ${locale}: ${e.message.slice(0, 250)}`); }
  }
}

// ---- Version (description, keywords, promo, urls) ----
const versions = (await api('GET', `/apps/${ASC_APP_ID}/appStoreVersions?filter[platform]=IOS&limit=10`)).data;
const version = versions.find(v => ['PREPARE_FOR_SUBMISSION', 'DEVELOPER_REJECTED', 'REJECTED', 'METADATA_REJECTED'].includes(v.attributes.appStoreState));
if (!version) throw new Error('No editable version');
if (cfg.copyright) { try { await api('PATCH', `/appStoreVersions/${version.id}`, { data: { type: 'appStoreVersions', id: version.id, attributes: { copyright: cfg.copyright } } }); log('✓ copyright'); } catch (e) { log('✗ copyright ' + e.message.slice(0, 200)); } }
const verLocs = (await api('GET', `/appStoreVersions/${version.id}/appStoreVersionLocalizations?limit=50`)).data;

for (const [locale, v] of Object.entries(info)) {
  const attrs = { description: v.description, keywords: v.keywords.join(','), promotionalText: v.promoText, supportUrl: v.supportUrl, marketingUrl: v.marketingUrl };
  const existing = verLocs.find(l => l.attributes.locale === locale);
  try {
    if (existing) await api('PATCH', `/appStoreVersionLocalizations/${existing.id}`, { data: { type: 'appStoreVersionLocalizations', id: existing.id, attributes: attrs } });
    else await api('POST', '/appStoreVersionLocalizations', { data: { type: 'appStoreVersionLocalizations', attributes: { locale, ...attrs }, relationships: { appStoreVersion: { data: { type: 'appStoreVersions', id: version.id } } } } });
    ok++; log(`✓ version ${locale}`);
  } catch (e) { fail++; log(`✗ version ${locale}: ${e.message.slice(0, 250)}`); }
}

// ---- Review contact ----
if (cfg.review) {
  const r = cfg.review;
  const attrs = { contactFirstName: r.firstName, contactLastName: r.lastName, contactEmail: r.email, contactPhone: r.phone, demoAccountRequired: !!r.demoRequired, notes: r.notes };
  try {
    const cur = await api('GET', `/appStoreVersions/${version.id}/appStoreReviewDetail`).catch(() => null);
    if (cur && cur.data) await api('PATCH', `/appStoreReviewDetails/${cur.data.id}`, { data: { type: 'appStoreReviewDetails', id: cur.data.id, attributes: attrs } });
    else await api('POST', '/appStoreReviewDetails', { data: { type: 'appStoreReviewDetails', attributes: attrs, relationships: { appStoreVersion: { data: { type: 'appStoreVersions', id: version.id } } } } });
    log('✓ review contact');
  } catch (e) { log('✗ review contact ' + e.message.slice(0, 200)); }
}
console.log(`Done. ok=${ok} failed=${fail}`);
