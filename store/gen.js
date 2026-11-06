// Generates framed, localized store screenshots for Tabela.
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const C = require('./content');

const FONT_LINKS = ['noto-sans','noto-sans-arabic','noto-sans-devanagari','noto-sans-jp','noto-sans-kr','noto-sans-sc']
  .map(p => `<link rel="stylesheet" href="file://${path.resolve('node_modules/@fontsource/'+p+'/900.css')}">`).join('');
const FAMILY = `"Noto Sans","Noto Sans Arabic","Noto Sans Devanagari","Noto Sans JP","Noto Sans KR","Noto Sans SC",sans-serif`;

const L = require('/home/claude/tabela-expo/i18n.js').L; // UI strings

const PAL = [['#000000', '#ffe600'], ['#000000', '#ffffff'], ['#000000', '#ff3b30'], ['#000000', '#34c759'], ['#000000', '#5ac8fa'], ['#ffffff', '#000000'], ['#ff3b30', '#ffffff'], ['#1e40ff', '#ffffff'], ['#000000', '#ff2d95'], ['#000000', '#ff9500'], ['#7c3aed', '#ffffff'], ['#ffe600', '#000000']];

// Phone screen content (what's "inside" the phone)
function screenDisplay(text, bg, fg, mode, rtl) {
  return `<div class="scr" style="background:${bg};color:${fg}">
    <div class="big ${mode}" dir="${rtl ? 'rtl' : 'ltr'}"><span>${text}</span></div>
    <div class="hintline" style="color:${fg}"></div>
  </div>`;
}
function screenSetup(lang, text, colorIdx, rtl) {
  const t = L[lang]; const [bg, fg] = PAL[colorIdx];
  const sw = PAL.map((p, i) => `<div class="sw ${i === colorIdx ? 'on' : ''}"><i style="background:${p[0]}"></i><i style="background:${p[1]}"></i></div>`).join('');
  return `<div class="scr setup" dir="${rtl ? 'rtl' : 'ltr'}">
    <div class="langpill">${lang.toUpperCase()}</div>
    <div class="h1">TABELA</div>
    <div class="input">${text}</div>
    <div class="sws">${sw}</div>
    <div class="opts"><b class="on">${t[1]}</b><b>${t[2]}</b><b>${t[3]}</b></div>
    <div class="opts"><b>${t[4]}</b></div>
    <div class="go" style="background:${fg === '#000000' ? '#ffe600' : fg}">${t[5]}</div>
    <div class="prev" style="background:${bg};color:${fg}">${text}</div>
  </div>`;
}

function page({ W, H, slogan, inner, accent, tablet, rtl, landscapeInner }) {
  // Frame geometry
  const phoneW = tablet ? W * 0.62 : W * 0.78;
  const ratio = tablet ? 1.33 : 2.17; // screen aspect H/W
  const phoneH = phoneW * ratio;
  const radius = tablet ? phoneW * 0.07 : phoneW * 0.13;
  const bezel = tablet ? phoneW * 0.035 : phoneW * 0.03;
  const sloganSize = Math.round(W * (tablet ? 0.07 : 0.1));
  return `<!DOCTYPE html><html><head><meta charset="utf-8">${FONT_LINKS}<style>
  html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:${FAMILY};font-weight:900}
  body{background:radial-gradient(120% 90% at 50% 0%, ${accent}33 0%, #0b0b0b 60%), #0b0b0b;display:flex;flex-direction:column;align-items:center}
  .slogan{color:#fff;font-size:${sloganSize}px;line-height:1.1;text-align:center;padding:${Math.round(H * 0.07)}px ${Math.round(W * 0.07)}px 0;letter-spacing:-0.01em;min-height:${Math.round(H * 0.17)}px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:100%}
  .slogan em{color:${accent};font-style:normal}
  .frame{position:relative;margin-top:${Math.round(H * 0.035)}px;width:${phoneW}px;height:${phoneH}px;border-radius:${radius}px;background:#1a1a1a;box-shadow:0 ${W * 0.03}px ${W * 0.08}px rgba(0,0,0,.7), inset 0 0 0 ${bezel * 0.25}px #333;}
  .frame .screen{position:absolute;inset:${bezel}px;border-radius:${radius - bezel}px;overflow:hidden;background:#000}
  .island{position:absolute;left:50%;top:${bezel * 1.6}px;transform:translateX(-50%);width:${phoneW * 0.3}px;height:${phoneW * 0.085}px;border-radius:999px;background:#000;z-index:5}
  .scr{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;overflow:hidden}
  .big{font-size:${(landscapeInner ? phoneW : phoneW) * 0.19}px;line-height:1;white-space:nowrap;text-align:center;letter-spacing:.01em;transform:rotate(90deg)}
  .big.wrap{white-space:normal;transform:none;padding:0 6%;font-size:${phoneW * 0.17}px}
  .hintline{position:absolute;bottom:4%;left:0;right:0;height:2px;opacity:.2}
  .setup{flex-direction:column;justify-content:center;gap:${phoneW * 0.035}px;padding:${phoneW * 0.08}px;box-sizing:border-box;background:#0b0b0b;color:#eee}
  .langpill{position:absolute;top:${phoneW * 0.16}px;right:${phoneW * 0.06}px;border:2px solid #333;border-radius:999px;padding:${phoneW * 0.014}px ${phoneW * 0.025}px;font-size:${phoneW * 0.028}px;color:#aaa;letter-spacing:.15em}
  .h1{color:#777;font-size:${phoneW * 0.03}px;letter-spacing:.4em;text-align:center}
  .input{background:#161616;border:2px solid #2a2a2a;border-radius:${phoneW * 0.045}px;padding:${phoneW * 0.05}px;font-size:${phoneW * 0.068}px;text-align:center;color:#fff;min-height:${phoneW * 0.14}px;display:flex;align-items:center;justify-content:center}
  .sws{display:flex;flex-wrap:wrap;justify-content:center;gap:${phoneW * 0.03}px}
  .sw{width:${phoneW * 0.085}px;height:${phoneW * 0.085}px;border-radius:50%;overflow:hidden;display:flex;transform:rotate(45deg);border:${phoneW * 0.008}px solid transparent}
  .sw.on{border-color:#fff;transform:rotate(45deg) scale(1.15)}
  .sw i{flex:1;display:block}
  .opts{display:flex;justify-content:center;gap:${phoneW * 0.025}px;flex-wrap:wrap}
  .opts b{font-weight:900;background:#161616;border:2px solid #2a2a2a;color:#ddd;border-radius:999px;padding:${phoneW * 0.025}px ${phoneW * 0.04}px;font-size:${phoneW * 0.032}px;letter-spacing:.1em}
  .opts b.on{background:#fff;color:#000;border-color:#fff}
  .go{border-radius:999px;padding:${phoneW * 0.045}px;text-align:center;color:#000;font-size:${phoneW * 0.045}px;letter-spacing:.25em}
  .prev{border-radius:${phoneW * 0.035}px;border:2px solid #2a2a2a;height:${phoneW * 0.17}px;display:flex;align-items:center;justify-content:center;font-size:${phoneW * 0.075}px;overflow:hidden;white-space:nowrap;padding:0 4%}
  </style></head><body>
  <div class="slogan" dir="${rtl ? 'rtl' : 'ltr'}">${slogan}</div>
  <div class="frame">${tablet ? '' : '<div class="island"></div>'}<div class="screen">${inner}</div></div>
  <script>
  (function(){var el=document.querySelector('.slogan');var fs=parseFloat(getComputedStyle(el).fontSize);var maxH=${Math.round(H*0.15)};
   var span=document.createElement('span');span.innerHTML=el.innerHTML;el.innerHTML='';el.appendChild(span);span.style.display='inline-block';span.style.maxWidth='100%';
   for(var i=0;i<40;i++){ if(span.scrollWidth<=el.clientWidth*0.92 && span.offsetHeight<=maxH) break; fs*=0.94; el.style.fontSize=fs+'px'; }})();
  (function(){var big=document.querySelector('.big'); if(!big) return; var scr=big.parentElement; var sp=big.querySelector('span'); sp.style.display='inline-block';
   var rotated=!big.classList.contains('wrap'); var fs=parseFloat(getComputedStyle(big).fontSize);
   var maxW = rotated ? scr.clientHeight*0.9 : scr.clientWidth*0.88; var maxH = rotated ? scr.clientWidth*0.85 : scr.clientHeight*0.7; if(rotated){ sp.style.whiteSpace='nowrap'; }
   for(var i=0;i<60;i++){ var w=sp.scrollWidth, h=sp.offsetHeight; if(w<=maxW && h<=maxH) break; fs*=0.94; big.style.fontSize=fs+'px'; }})();
  </script></body></html>`;
}

const SIZES = {
  ios61: [1206, 2622, false], ios69: [1320, 2868, false], ipad13: [2064, 2752, true],
  android: [1080, 2340, false], androidtab: [1600, 2560, true],
};

(async () => {
  const browser = await chromium.launch();
  const out = path.resolve('out'); fs.mkdirSync(out, { recursive: true });
  for (const [lang, c] of Object.entries(C).filter(([k])=>process.argv[2]? process.argv[2].split(",").includes(k) : true)) {
    const rtl = lang === 'ar';
    const scenes = [
      { slogan: c.slogans[0], inner: screenDisplay(c.signs[0], '#000000', '#ffe600', '', rtl), accent: '#ffe600' },
      { slogan: c.slogans[1], inner: screenDisplay(c.signs[1], '#000000', '#ff2d95', '', rtl), accent: '#ff2d95' },
      { slogan: c.slogans[2], inner: screenDisplay(c.signs[2], '#1e40ff', '#ffffff', '', rtl), accent: '#5ac8fa' },
      { slogan: c.slogans[3], inner: screenSetup(lang, c.signs[3], 3, rtl), accent: '#34c759' },
    ];
    for (const [sizeName, [W, H, tablet]] of Object.entries(SIZES)) {
      const ctx = await browser.newContext({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
      const pg = await ctx.newPage();
      for (let i = 0; i < scenes.length; i++) {
        const s = scenes[i];
        let inner = s.inner;
        if (tablet) inner = inner.replace('class="big ', 'class="big wrap '); // no rotation on tablet
        // long signs: wrap instead of rotate on phones when too long
        const sign = c.signs[i] || '';
        
        fs.writeFileSync(path.join(out,'_tmp.html'), page({ W, H, slogan: s.slogan, inner, accent: s.accent, tablet, rtl })); await pg.goto('file://'+path.join(out,'_tmp.html'));
        await pg.evaluate(() => document.fonts.ready);
        await pg.waitForTimeout(150);
        await pg.screenshot({ path: path.join(out, `${lang}-${sizeName}-${i + 1}.png`) });
      }
      await ctx.close();
    }
    console.log('done', lang);
  }
  await browser.close();
})();
