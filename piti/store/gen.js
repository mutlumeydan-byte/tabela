// Generates framed, localized store screenshots for Piti Piti.
// Run from /home/claude/shots (has playwright + @fontsource): node /home/claude/piti-app/store/gen.js [langs]
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const C = require('./content');
const { L } = requireI18n();
function requireI18n() { const src = fs.readFileSync(path.join(__dirname, '..', 'i18n.js'), 'utf8').replace(/export const /g, 'const ') + '\nmodule.exports={L,LANGS};'; const m = { exports: {} }; new Function('module', src)(m); return m.exports; }

const FONTDIR = '/home/claude/shots/node_modules/@fontsource/';
const FONT_LINKS = ['noto-sans', 'noto-sans-arabic', 'noto-sans-devanagari', 'noto-sans-jp', 'noto-sans-kr', 'noto-sans-sc']
  .map(p => `<link rel="stylesheet" href="file://${FONTDIR}${p}/900.css"><link rel="stylesheet" href="file://${FONTDIR}${p}/700.css">`).join('');
const FAMILY = `"Noto Sans","Noto Sans Arabic","Noto Sans Devanagari","Noto Sans JP","Noto Sans KR","Noto Sans SC",sans-serif`;
const COL = ['#ffe600', '#ff2d95', '#5ac8fa', '#34c759', '#ff9500', '#bf5af2'];
const A = '#ff2d95', B = '#5ac8fa';

// ring: [xFrac, yFrac, color, state, rank]
function ring(r, d, W, H) {
  const [x, y, c, st, rank] = r;
  const s = { dim: 'opacity:.22;transform:scale(.9)', hot: 'transform:scale(1.12)', champ: 'transform:scale(1.15)', idle: '', ranked: '' }[st] || '';
  const glow = st === 'hot' || st === 'champ' || st === 'ranked' || st === 'win';
  const g = glow ? `filter:drop-shadow(0 0 ${d * .13}px ${c})${st === 'champ' ? ` drop-shadow(0 0 ${d * .33}px ${c})` : ''};` : '';
  return `<div class="ring" style="left:${x * W - d / 2}px;top:${y * H - d / 2}px;width:${d}px;height:${d}px;color:${c};${s};${g}">
    <b style="border-width:${d * .08}px"></b><i></i>${rank ? `<span style="font-size:${d * .25}px">${rank}</span>` : ''}</div>`;
}
const POS5 = [[.25, .24], [.74, .27], [.5, .5], [.27, .74], [.72, .77]];
const POS6 = [[.26, .22], [.74, .24], [.24, .5], [.76, .52], [.28, .78], [.72, .8]];
function scene(i, lang) {
  const t = L[lang];
  if (i === 0) return { rings: POS5.map((p, k) => [...p, COL[k], k === 1 ? 'hot' : 'dim']), top: `5 ${t[7]}`, accent: '#ffe600' };
  if (i === 1) return { rings: [[.5, .45, COL[1], 'champ']], top: '', accent: '#ff2d95' };
  if (i === 2) return { rings: POS6.map((p, k) => [...p, [A, B, B, A, A, B][k], 'win']), top: '', accent: '#5ac8fa' };
  return { rings: POS5.map((p, k) => [...p, COL[k], 'ranked', [3, 1, 4, 2, 5][k]]), top: '', accent: '#34c759' };
}
function home(lang, sw) {
  const t = L[lang];
  return `<div class="home"><div class="pill l">🔊</div><div class="pill r">${lang.toUpperCase()}</div>
   <div class="mid"><div class="h1">${t[0]}</div><div class="msg">${t[1]}</div></div>
   <div class="subs"><b class="on">${t[8]}</b><b>${t[9]}</b></div>
   <div class="modes"><b class="on">${t[3]}</b><b>${t[4]}</b><b>${t[5]}</b></div></div>`;
}

function page({ W, H, slogan, accent, tablet, rtl, inner }) {
  const phoneW = tablet ? W * 0.62 : W * 0.78;
  const phoneH = phoneW * (tablet ? 1.33 : 2.17);
  const radius = tablet ? phoneW * 0.07 : phoneW * 0.13;
  const bezel = tablet ? phoneW * 0.035 : phoneW * 0.03;
  const sw = phoneW - 2 * bezel; // screen width
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${FONT_LINKS}<style>
  html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:${FAMILY};font-weight:900}
  body{background:radial-gradient(120% 90% at 50% 0%, ${accent}33 0%, #0b0b0b 60%), #0b0b0b;display:flex;flex-direction:column;align-items:center}
  .slogan{color:#fff;font-size:${Math.round(W * (tablet ? 0.06 : 0.085))}px;line-height:1.15;text-align:center;padding:${Math.round(H * 0.06)}px ${Math.round(W * 0.07)}px 0;min-height:${Math.round(H * 0.17)}px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%}
  .slogan em{color:${accent};font-style:normal}
  .frame{position:absolute;left:${(W - phoneW) / 2}px;top:${Math.round(H * 0.2)}px;width:${phoneW}px;height:${phoneH}px;border-radius:${radius}px;background:#1a1a1a;box-shadow:0 ${W * 0.03}px ${W * 0.08}px rgba(0,0,0,.7), inset 0 0 0 ${bezel * 0.25}px #333}
  .screen{position:absolute;inset:${bezel}px;border-radius:${radius - bezel}px;overflow:hidden;background:#0b0b0b}
  .island{position:absolute;left:50%;top:${bezel * 1.6}px;transform:translateX(-50%);width:${phoneW * 0.3}px;height:${phoneW * 0.085}px;border-radius:999px;background:#000;z-index:5}
  .ring{position:absolute;border-radius:50%}
  .ring b{position:absolute;inset:0;border-radius:50%;border-style:solid;border-color:currentColor}
  .ring i{position:absolute;inset:26%;border-radius:50%;background:currentColor;opacity:.9}
  .ring span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#0b0b0b;font-weight:900;z-index:2}
  .top{position:absolute;top:${sw * (tablet ? .05 : .16)}px;left:0;right:0;text-align:center;color:#eee;opacity:.6;font-size:${sw * .038}px;letter-spacing:.3em;font-weight:700}
  .home{position:absolute;inset:0;color:#eee}
  .pill{position:absolute;top:${sw * (tablet ? .04 : .15)}px;border:2px solid #333;border-radius:999px;padding:${sw * .015}px ${sw * .03}px;font-size:${sw * .032}px;color:#aaa;letter-spacing:.15em;font-weight:700}
  .pill.l{left:${sw * .05}px}.pill.r{right:${sw * .05}px}
  .mid{position:absolute;left:6%;right:6%;top:50%;transform:translateY(-50%);text-align:center}
  .h1{font-size:${sw * .04}px;letter-spacing:.4em;opacity:.5;font-weight:700}
  .msg{margin-top:${sw * .04}px;font-size:${sw * .07}px;font-weight:800;line-height:1.2}
  .subs,.modes{position:absolute;left:0;right:0;display:flex;justify-content:center;gap:${sw * .022}px;flex-wrap:nowrap}
  .subs{bottom:${sw * (tablet ? .14 : .25)}px}.modes{bottom:${sw * (tablet ? .05 : .1)}px}
  .subs b{flex-shrink:0;border:2px solid #2a2a2a;color:#888;border-radius:999px;padding:${sw * .018}px ${sw * .032}px;font-size:${sw * .029}px;letter-spacing:.1em;white-space:nowrap}
  .subs b.on{color:#fff;border-color:#fff}
  .modes b{flex-shrink:0;background:#161616;border:2px solid #2a2a2a;color:#ddd;border-radius:999px;padding:${sw * .028}px ${sw * .04}px;font-size:${sw * .034}px;letter-spacing:.1em;white-space:nowrap}
  .modes b.on{background:#fff;color:#000;border-color:#fff}
  </style></head><body>
  <div class="slogan" dir="${rtl ? 'rtl' : 'ltr'}"><span>${slogan}</span></div>
  <div class="frame">${tablet ? '' : '<div class="island"></div>'}<div class="screen" id="scr">${inner(sw, phoneH - 2 * bezel)}</div></div>
  <script>
  (function(){var el=document.querySelector('.slogan'),sp=el.firstChild;sp.style.display='inline-block';var fs=parseFloat(getComputedStyle(el).fontSize),maxH=${Math.round(H * 0.125)};
   for(var i=0;i<40;i++){ if(sp.scrollWidth<=el.clientWidth*0.92 && sp.offsetHeight<=maxH) break; fs*=0.94; el.style.fontSize=fs+'px'; }})();
  document.querySelectorAll('.subs,.modes').forEach(function(row){var bs=row.querySelectorAll('b');function tw(){var w=0;bs.forEach(function(b){w+=b.offsetWidth});return w+bs.length*12;}for(var i=0;i<30&&tw()>row.clientWidth*0.94;i++){bs.forEach(function(b){b.style.fontSize=(parseFloat(getComputedStyle(b).fontSize)*0.94)+'px'});}});
  </script></body></html>`;
}

const SIZES = {
  ios61: [1206, 2622, false], ios69: [1320, 2868, false], ipad13: [2064, 2752, true],
  android: [1080, 2340, false], androidtab: [1600, 2560, true],
};

(async () => {
  const browser = await chromium.launch();
  const out = path.join(__dirname, 'screenshots'); fs.mkdirSync(out, { recursive: true });
  const langs = Object.keys(C).filter(k => (process.argv[2] ? process.argv[2].split(',').includes(k) : true));
  for (const lang of langs) {
    const rtl = lang === 'ar';
    for (const [sizeName, [W, H, tablet]] of Object.entries(SIZES)) {
      const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
      const pg = await ctx.newPage();
      for (let i = 0; i < 5; i++) {
        let accent, inner;
        if (i === 4) { accent = '#bf5af2'; inner = (sw) => home(lang, sw); }
        else {
          const s = scene(i, lang); accent = s.accent;
          inner = (sw, sh) => {
            const d = sw * (tablet ? 0.2 : 0.3);
            return (s.top ? `<div class="top">${s.top}</div>` : '') + s.rings.map(r => ring(r, d, sw, sh)).join('');
          };
        }
        const slogan = C[lang][i];
        const tmp = path.join(out, '_tmp.html');
        fs.writeFileSync(tmp, page({ W, H, slogan, accent, tablet, rtl, inner }));
        await pg.goto('file://' + tmp);
        await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(120);
        await pg.screenshot({ path: path.join(out, `${lang}-${sizeName}-${i + 1}.jpg`), type: 'jpeg', quality: 90 });
      }
      await ctx.close();
    }
    console.log('done', lang);
  }
  fs.rmSync(path.join(out, '_tmp.html'), { force: true });
  await browser.close();
})();
