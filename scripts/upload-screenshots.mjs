// Uploads localized App Store screenshots for every locale and device class
// via the App Store Connect API. Safe to re-run: skips files already uploaded.
// Env: ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY (.p8 contents), ASC_APP_ID
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const { ASC_KEY_ID, ASC_ISSUER_ID, ASC_PRIVATE_KEY, ASC_APP_ID } = process.env;
if (!ASC_KEY_ID || !ASC_ISSUER_ID || !ASC_PRIVATE_KEY || !ASC_APP_ID) throw new Error('Missing ASC_* env');

let PK = ASC_PRIVATE_KEY.replace(/\r/g, '').trim();
if (!PK.includes('BEGIN')) PK = `-----BEGIN PRIVATE KEY-----\n${PK.replace(/\s+/g, '').match(/.{1,64}/g).join('\n')}\n-----END PRIVATE KEY-----`;
crypto.createPrivateKey(PK); // throws if malformed

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
  if (!res.ok) throw new Error(`${method} ${url} -> ${res.status}: ${text.slice(0, 600)}`);
  return text ? JSON.parse(text) : null;
}

// Source language prefix -> App Store locales it feeds
const LOCALES = {
  en: ['en-US', 'en-GB', 'en-AU', 'en-CA'], tr: ['tr'], es: ['es-ES', 'es-MX'], de: ['de-DE'], fr: ['fr-FR', 'fr-CA'],
  it: ['it'], pt: ['pt-BR', 'pt-PT'], ru: ['ru'], ar: ['ar-SA'], hi: ['hi'], id: ['id'], ja: ['ja'], ko: ['ko'], zh: ['zh-Hans'],
};
// Our file size tag -> App Store display type
const DEVICES = { ios69: 'APP_IPHONE_67', ios61: 'APP_IPHONE_61', ipad13: 'APP_IPAD_PRO_3GEN_129' };
const DIR = path.resolve('store/screenshots');

const versions = await api('GET', `/apps/${ASC_APP_ID}/appStoreVersions?filter[platform]=IOS&limit=10`);
const version = versions.data.find(v => ['PREPARE_FOR_SUBMISSION', 'DEVELOPER_REJECTED', 'REJECTED', 'METADATA_REJECTED'].includes(v.attributes.appStoreState));
if (!version) throw new Error('No editable App Store version found');
console.log('Version', version.attributes.versionString, version.attributes.appStoreState);

const locs = (await api('GET', `/appStoreVersions/${version.id}/appStoreVersionLocalizations?limit=50`)).data;
let ok = 0, fail = 0;

for (const [lang, ascLocales] of Object.entries(LOCALES)) {
  for (const locale of ascLocales) {
    let loc = locs.find(l => l.attributes.locale === locale);
    if (!loc) {
      try {
        loc = (await api('POST', '/appStoreVersionLocalizations', { data: { type: 'appStoreVersionLocalizations', attributes: { locale }, relationships: { appStoreVersion: { data: { type: 'appStoreVersions', id: version.id } } } } })).data;
      } catch (e) { console.log(`! ${locale}: cannot create localization (${e.message.slice(0, 120)})`); continue; }
    }
    const sets = (await api('GET', `/appStoreVersionLocalizations/${loc.id}/appScreenshotSets`)).data;
    for (const [tag, displayType] of Object.entries(DEVICES)) {
      const files = [1, 2, 3, 4, 5].map(i => `${lang}-${tag}-${i}.jpg`).filter(f => fs.existsSync(path.join(DIR, f)));
      try {
        let set = sets.find(s => s.attributes.screenshotDisplayType === displayType);
        if (!set) set = (await api('POST', '/appScreenshotSets', { data: { type: 'appScreenshotSets', attributes: { screenshotDisplayType: displayType }, relationships: { appStoreVersionLocalization: { data: { type: 'appStoreVersionLocalizations', id: loc.id } } } } })).data;
        const existing = new Set((await api('GET', `/appScreenshotSets/${set.id}/appScreenshots`)).data.map(s => s.attributes.fileName));
        for (const file of files) {
          if (existing.has(file)) continue;
          const buf = fs.readFileSync(path.join(DIR, file));
          const shot = (await api('POST', '/appScreenshots', { data: { type: 'appScreenshots', attributes: { fileName: file, fileSize: buf.length }, relationships: { appScreenshotSet: { data: { type: 'appScreenshotSets', id: set.id } } } } })).data;
          for (const op of shot.attributes.uploadOperations) {
            const headers = Object.fromEntries(op.requestHeaders.map(h => [h.name, h.value]));
            const r = await fetch(op.url, { method: op.method, headers, body: buf.subarray(op.offset, op.offset + op.length) });
            if (!r.ok) throw new Error(`chunk ${r.status}`);
          }
          await api('PATCH', `/appScreenshots/${shot.id}`, { data: { type: 'appScreenshots', id: shot.id, attributes: { uploaded: true, sourceFileChecksum: crypto.createHash('md5').update(buf).digest('hex') } } });
          ok++;
        }
        console.log(`✓ ${locale} ${displayType} (${files.length})`);
      } catch (e) { fail++; console.log(`✗ ${locale} ${displayType}: ${e.message.slice(0, 200)}`); }
    }
  }
}
console.log(`Done. uploaded=${ok} failedSets=${fail}`);
if (fail) process.exitCode = 1;
