// Framed, localized store screenshots for Tesbih. Inner screens are captured from the real app's web build (localhost:8766).
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const C = require('./content');
const FONTDIR = '/home/claude/shots/node_modules/@fontsource/';
const FONT_LINKS = ['noto-sans', 'noto-sans-arabic', 'noto-sans-devanagari', 'noto-sans-jp', 'noto-sans-kr', 'noto-sans-sc']
  .map(p => `<link rel="stylesheet" href="file://${FONTDIR}${p}/900.css"><link rel="stylesheet" href="file://${FONTDIR}${p}/700.css">`).join('');
const FAMILY = `"Noto Sans","Noto Sans Arabic","Noto Sans Devanagari","Noto Sans JP","Noto Sans KR","Noto Sans SC",sans-serif`;
function page({ W, H, slogan, accent, tablet, rtl, inner }) {
  const phoneW = tablet ? W * 0.62 : W * 0.78;
  const phoneH = phoneW * (tablet ? 1.33 : 2.17);
  const radius = tablet ? phoneW * 0.07 : phoneW * 0.13;
  const bezel = tablet ? phoneW * 0.035 : phoneW * 0.03;
  const sw = phoneW - 2 * bezel; // screen width
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${FONT_LINKS}<style>
  html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:${FAMILY};font-weight:900}
  body{background:radial-gradient(120% 90% at 50% 0%, ${accent}33 0%, #0d0b09 60%), #0d0b09;display:flex;flex-direction:column;align-items:center}
  .slogan{color:#fff;font-size:${Math.round(W * (tablet ? 0.06 : 0.085))}px;line-height:1.15;text-align:center;padding:${Math.round(H * 0.06)}px ${Math.round(W * 0.07)}px 0;min-height:${Math.round(H * 0.17)}px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%}
  .slogan em{color:${accent};font-style:normal}
  .frame{position:absolute;left:${(W - phoneW) / 2}px;top:${Math.round(H * 0.2)}px;width:${phoneW}px;height:${phoneH}px;border-radius:${radius}px;background:#1a1a1a;box-shadow:0 ${W * 0.03}px ${W * 0.08}px rgba(0,0,0,.7), inset 0 0 0 ${bezel * 0.25}px #333}
  .screen{position:absolute;inset:${bezel}px;border-radius:${radius - bezel}px;overflow:hidden;background:#0d0b09}
  .island{position:absolute;left:50%;top:${bezel * 1.6}px;transform:translateX(-50%);width:${phoneW * 0.3}px;height:${phoneW * 0.085}px;border-radius:999px;background:#000;z-index:5}
  .ring{position:absolute;border-radius:50%}
  .ring b{position:absolute;inset:0;border-radius:50%;border-style:solid;border-color:currentColor}
  .ring i{position:absolute;inset:26%;border-radius:50%;background:currentColor;opacity:.9}
  .ring span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#0d0b09;font-weight:900;z-index:2}
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
const ACC = ['#e3a03a', '#4fae7a', '#3cc3b3', '#e2533d', '#f4efe4'];
const SCENES = [
  { mat: 0, goal: 33, count: 16, lamp: [0.3, 0.66] },
  { mat: 6, goal: 33, count: 32, lamp: [0.72, 0.6], wait: 160 },
  { mat: 2, goal: 99, count: 47, lamp: [0.28, 0.58] },
  { mat: 5, goal: 108, count: 21, picker: true },
  { mat: 4, goal: 0, count: 250, lamp: [0.7, 0.68] },
];
async function capture(browser, lang, sc, tablet) {
  const vw = tablet ? 820 : 390, vh = tablet ? 1093 - 44 : 846 - 59 - 34; // leave room for status bar / home indicator like the real safe area
  const ctx = await browser.newContext({ viewport: { width: vw, height: vh }, deviceScaleFactor: tablet ? 2 : 3, hasTouch: true, isMobile: true });
  const pg = await ctx.newPage();
  await pg.goto('http://localhost:8766/');
  await pg.evaluate(([lang, sc]) => localStorage.setItem('tesbih', JSON.stringify({ lang, goal: sc.goal, count: sc.count, total: sc.count + 70, day: new Date().toDateString(), mat: sc.mat, custom: '#8a2be2', snd: false })), [lang, sc]);
  await pg.reload(); await pg.waitForTimeout(900);
  if (sc.picker) { await pg.mouse.click(vw / 2 + 152, vh - 29); await pg.waitForTimeout(600); }
  if (sc.lamp) {
    const cdp = await ctx.newCDPSession(pg);
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: sc.lamp[0] * vw, y: sc.lamp[1] * vh }] });
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
    await pg.waitForTimeout(sc.wait || 110);
  }
  const buf = await pg.screenshot({ type: 'png' });
  await ctx.close();
  return 'data:image/png;base64,' + buf.toString('base64');
}
(async () => {
  const browser = await chromium.launch();
  const out = path.join(__dirname, 'screenshots'); fs.mkdirSync(out, { recursive: true });
  const langs = Object.keys(C).filter(k => (process.argv[2] ? process.argv[2].split(',').includes(k) : true));
  for (const lang of langs) {
    const rtl = lang === 'ar';
    const shots = {};
    for (const tablet of [false, true]) shots[tablet] = await Promise.all(SCENES.map(sc => capture(browser, lang, sc, tablet)));
    for (const [sizeName, [W, H, tablet]] of Object.entries(SIZES)) {
      const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
      const pg = await ctx.newPage();
      for (let i = 0; i < SCENES.length; i++) {
        const img = shots[tablet][i];
        const inner = (sw, sh) => { const t = tablet ? 24 / 1093 : 59 / 846, b = tablet ? 20 / 1093 : 34 / 846; return `<img src="${img}" style="position:absolute;left:0;width:100%;top:${t * 100}%;height:${(1 - t - b) * 100}%;object-fit:fill">`; };
        const tmp = path.join(out, '_tmp.html');
        fs.writeFileSync(tmp, page({ W, H, slogan: C[lang][i], accent: ACC[i], tablet, rtl, inner }));
        await pg.goto('file://' + tmp); await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(100);
        await pg.screenshot({ path: path.join(out, `${lang}-${sizeName}-${i + 1}.jpg`), type: 'jpeg', quality: 90 });
      }
      await ctx.close();
    }
    console.log('done', lang);
  }
  fs.rmSync(path.join(out, '_tmp.html'), { force: true });
  await browser.close();
})();
