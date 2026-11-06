// Localized App Store listing for Tesbih. Generates store.config.json.
// Limits: title ≤30, subtitle ≤30, keywords ≤100 chars, promo ≤170.
const URL = 'https://tesbih-mutlumeydan-bytes-projects.vercel.app';
const PRIVACY = URL + '/privacy.html';

const D = (o) => o; // readability
const L = {
  'en-US': D({
    title: 'Tesbih: Bead Counter',
    subtitle: 'Tasbih, rosary and mala beads',
    promo: 'Prayer beads that feel real: a soft click and a tiny vibration on every bead. No ads, no account, works offline.',
    keywords: 'tasbih,dhikr,zikr,rosary,mala,japa,misbaha,tally,counter,prayer,beads,islamic,meditation,count',
    description: `Prayer beads on your phone that feel like the real thing.

Tap anywhere or swipe down: one bead drops with a soft wooden click and a tiny vibration. You can count without looking at the screen.

• 33, 99, 59 or 108 beads, or count without limit
• A stronger vibration and a chime at the end of every round
• Round counter and today's total, kept automatically
• 8 bead materials (amber, jet, turquoise, walnut, pearl, coral, jade, lapis) or any color you like
• A small light glows where your finger touches
• Reset the counter or today's total with one tap
• Screen stays on while you count
• 14 languages
• No ads, no account, no tracking, works offline

For tasbih and dhikr, the rosary, mala and japa meditation, or any count you keep.

Buy once, keep it forever.`,
    notes: 'First release.',
  }),
  tr: D({
    title: 'Tesbih: Dijital Zikirmatik',
    subtitle: 'Gerçek tesbih hissi',
    promo: 'Her tanede yumuşak bir tık ve hafif bir titreşim. Gerçek tesbih gibi. Reklam yok, hesap yok, internetsiz çalışır.',
    keywords: 'tesbih,zikirmatik,zikir,tespih,sayaç,esma,dua,namaz,kehribar,oltu,33,99,ilahi,sayıcı',
    description: `Telefonunda gerçek gibi hissettiren bir tesbih.

Ekranın herhangi bir yerine dokun ya da aşağı kaydır: bir tane yumuşak bir tık sesiyle ve hafif bir titreşimle düşer. Ekrana bakmadan sayabilirsin.

• 33, 99, 59 ya da 108 tane, istersen sınırsız
• Her tur sonunda daha güçlü titreşim ve zil sesi
• Tur sayısı ve bugünün toplamı otomatik tutulur
• 8 taş: kehribar, oltu, turkuaz, ceviz, inci, mercan, yeşim, lacivert ya da istediğin renk
• Parmağının değdiği yerde küçük bir ışık yanar
• Sayacı ya da bugünün toplamını tek dokunuşla sıfırla
• Sayarken ekran kapanmaz
• 14 dil
• Reklam yok, hesap yok, takip yok, internetsiz çalışır

Zikir, esma, tesbihat ya da tutmak istediğin her sayım için.

Bir kere al, hep senin olsun.`,
    notes: 'İlk sürüm.',
  }),
  'es-ES': D({
    title: 'Tesbih: Contador de Cuentas',
    subtitle: 'Rosario, tasbih y mala',
    promo: 'Cuentas de oración que se sienten reales: un clic suave y una ligera vibración en cada cuenta. Sin anuncios, sin cuenta.',
    keywords: 'rosario,tasbih,mala,japa,contador,oración,cuentas,dhikr,meditación,rezar,misbaha,conteo',
    description: `Cuentas de oración en tu móvil que se sienten como las de verdad.

Toca cualquier parte o desliza hacia abajo: una cuenta cae con un suave clic de madera y una ligera vibración. Puedes contar sin mirar la pantalla.

• 33, 99, 59 o 108 cuentas, o sin límite
• Vibración más fuerte y una campanita al final de cada vuelta
• Número de vuelta y total de hoy guardados automáticamente
• 8 materiales (ámbar, azabache, turquesa, nogal, perla, coral, jade, lapislázuli) o el color que quieras
• Una pequeña luz brilla donde tocas
• Reinicia el contador o el total de hoy con un toque
• La pantalla no se apaga mientras cuentas
• 14 idiomas
• Sin anuncios, sin cuenta, sin rastreo, funciona sin conexión

Para el rosario, el tasbih, la mala o cualquier conteo.

Cómpralo una vez, tuyo para siempre.`,
    notes: 'Primera versión.',
  }),
  'de-DE': D({
    title: 'Tesbih: Gebetsperlen-Zähler',
    subtitle: 'Rosenkranz, Tasbih und Mala',
    promo: 'Gebetsperlen, die sich echt anfühlen: ein sanfter Klick und eine leichte Vibration bei jeder Perle. Keine Werbung, kein Konto.',
    keywords: 'rosenkranz,tasbih,mala,japa,zähler,gebet,perlen,dhikr,meditation,beten,gebetskette,zählen',
    description: `Gebetsperlen auf dem Handy, die sich wie echte anfühlen.

Tippe irgendwo oder wische nach unten: Eine Perle fällt mit einem sanften Holzklick und einer leichten Vibration. Du kannst zählen, ohne hinzusehen.

• 33, 99, 59 oder 108 Perlen oder ohne Grenze
• Stärkere Vibration und ein Glockenton am Ende jeder Runde
• Rundenzahl und Tagessumme werden automatisch gespeichert
• 8 Materialien (Bernstein, Gagat, Türkis, Nussbaum, Perlmutt, Koralle, Jade, Lapislazuli) oder jede Farbe
• Ein kleines Licht leuchtet, wo du tippst
• Zähler oder Tagessumme mit einem Tipp zurücksetzen
• Der Bildschirm bleibt beim Zählen an
• 14 Sprachen
• Keine Werbung, kein Konto, kein Tracking, offline nutzbar

Für Rosenkranz, Tasbih, Mala oder jede andere Zählung.

Einmal kaufen, für immer behalten.`,
    notes: 'Erste Version.',
  }),
  'fr-FR': D({
    title: 'Tesbih : Compteur de Perles',
    subtitle: 'Chapelet, tasbih et mala',
    promo: 'Des perles de prière qui semblent réelles : un clic doux et une légère vibration à chaque perle. Sans pub, sans compte.',
    keywords: 'chapelet,tasbih,mala,japa,compteur,prière,perles,dhikr,méditation,prier,misbaha,compter',
    description: `Des perles de prière sur votre téléphone, comme les vraies.

Touchez n’importe où ou glissez vers le bas : une perle tombe avec un doux clic de bois et une légère vibration. Vous pouvez compter sans regarder l’écran.

• 33, 99, 59 ou 108 perles, ou sans limite
• Vibration plus forte et carillon à la fin de chaque tour
• Numéro du tour et total du jour enregistrés automatiquement
• 8 matières (ambre, jais, turquoise, noyer, perle, corail, jade, lapis) ou la couleur de votre choix
• Une petite lumière brille sous votre doigt
• Remettez le compteur ou le total du jour à zéro d’un geste
• L’écran reste allumé pendant le comptage
• 14 langues
• Sans pub, sans compte, sans suivi, fonctionne hors ligne

Pour le chapelet, le tasbih, le mala ou tout autre comptage.

Achetez une fois, gardez-le pour toujours.`,
    notes: 'Première version.',
  }),
  it: D({
    title: 'Tesbih: Contatore di Grani',
    subtitle: 'Rosario, tasbih e mala',
    promo: 'Grani di preghiera che sembrano veri: un clic leggero e una piccola vibrazione a ogni grano. Niente pubblicità, niente account.',
    keywords: 'rosario,tasbih,mala,japa,contatore,preghiera,grani,dhikr,meditazione,pregare,coroncina,contare',
    description: `Grani di preghiera sul telefono che sembrano veri.

Tocca ovunque o scorri in basso: un grano scende con un leggero clic di legno e una piccola vibrazione. Puoi contare senza guardare lo schermo.

• 33, 99, 59 o 108 grani, o senza limite
• Vibrazione più forte e un rintocco alla fine di ogni giro
• Numero del giro e totale di oggi salvati automaticamente
• 8 materiali (ambra, giaietto, turchese, noce, perla, corallo, giada, lapislazzuli) o qualsiasi colore
• Una piccola luce si accende dove tocchi
• Azzera il contatore o il totale di oggi con un tocco
• Lo schermo resta acceso mentre conti
• 14 lingue
• Niente pubblicità, niente account, nessun tracciamento, funziona offline

Per il rosario, il tasbih, la mala o qualsiasi conteggio.

Compralo una volta, tuo per sempre.`,
    notes: 'Prima versione.',
  }),
  'pt-BR': D({
    title: 'Tesbih: Contador de Contas',
    subtitle: 'Terço, tasbih e japamala',
    promo: 'Contas de oração que parecem reais: um clique suave e uma leve vibração a cada conta. Sem anúncios, sem conta, offline.',
    keywords: 'terço,rosário,tasbih,japamala,mala,contador,oração,contas,dhikr,meditação,rezar,contar',
    description: `Contas de oração no celular que parecem de verdade.

Toque em qualquer lugar ou deslize para baixo: uma conta cai com um clique suave de madeira e uma leve vibração. Dá para contar sem olhar a tela.

• 33, 99, 59 ou 108 contas, ou sem limite
• Vibração mais forte e um sininho no fim de cada volta
• Número da volta e total de hoje salvos automaticamente
• 8 materiais (âmbar, azeviche, turquesa, nogueira, pérola, coral, jade, lápis-lazúli) ou a cor que quiser
• Uma pequena luz acende onde você toca
• Zere o contador ou o total de hoje com um toque
• A tela fica ligada enquanto você conta
• 14 idiomas
• Sem anúncios, sem conta, sem rastreamento, funciona offline

Para o terço, o tasbih, o japamala ou qualquer contagem.

Compre uma vez, é seu para sempre.`,
    notes: 'Primeira versão.',
  }),
  ru: D({
    title: 'Tesbih: Счётчик чёток',
    subtitle: 'Чётки, тасбих и мала',
    promo: 'Чётки, которые ощущаются как настоящие: мягкий щелчок и лёгкая вибрация на каждой бусине. Без рекламы, без аккаунта.',
    keywords: 'чётки,тасбих,мала,джапа,счётчик,молитва,зикр,бусины,медитация,розарий,четки,счет',
    description: `Чётки в телефоне, которые ощущаются как настоящие.

Коснитесь в любом месте или проведите вниз: бусина падает с мягким деревянным щелчком и лёгкой вибрацией. Можно считать, не глядя на экран.

• 33, 99, 59 или 108 бусин, или без ограничения
• Сильная вибрация и звон в конце каждого круга
• Номер круга и итог за день сохраняются автоматически
• 8 материалов (янтарь, гагат, бирюза, орех, жемчуг, коралл, нефрит, лазурит) или любой цвет
• Под пальцем вспыхивает маленький огонёк
• Сброс счётчика или итога за день одним касанием
• Экран не гаснет, пока вы считаете
• 14 языков
• Без рекламы, без аккаунта, без слежки, работает офлайн

Для тасбиха и зикра, розария, малы или любого счёта.

Купите один раз — навсегда ваше.`,
    notes: 'Первая версия.',
  }),
  'ar-SA': D({
    title: 'Tesbih: مسبحة إلكترونية',
    subtitle: 'إحساس المسبحة الحقيقية',
    promo: 'مسبحة تشعر بها كالحقيقية: نقرة خفيفة واهتزاز بسيط مع كل حبة. بلا إعلانات، بلا حساب، تعمل دون إنترنت.',
    keywords: 'مسبحة,سبحة,تسبيح,ذكر,عداد,أذكار,استغفار,صلاة,تهليل,حبات,إلكترونية,عد',
    description: `مسبحة على هاتفك تشعر بها كالحقيقية.

المس أي مكان أو اسحب للأسفل: تسقط حبة مع نقرة خشبية خفيفة واهتزاز بسيط. يمكنك العد دون النظر إلى الشاشة.

• 33 أو 99 أو 59 أو 108 حبة، أو بلا حد
• اهتزاز أقوى ورنين عند نهاية كل دورة
• رقم الدورة ومجموع اليوم يُحفظان تلقائيًا
• 8 خامات (كهرمان، يسر، فيروز، جوز، لؤلؤ، مرجان، يشم، لازورد) أو أي لون تحبه
• يضيء ضوء صغير حيث تلمس
• صفّر العداد أو مجموع اليوم بلمسة واحدة
• تبقى الشاشة مضاءة أثناء العد
• 14 لغة
• بلا إعلانات، بلا حساب، بلا تتبع، تعمل دون إنترنت

للتسبيح والأذكار والاستغفار أو أي عدّ تريده.

اشترِها مرة واحدة، لك إلى الأبد.`,
    notes: 'الإصدار الأول.',
  }),
  hi: D({
    title: 'Tesbih: जप माला काउंटर',
    subtitle: 'असली माला जैसा एहसास',
    promo: 'हर मनके पर हल्की टिक और हल्का कंपन, बिल्कुल असली माला जैसा। न विज्ञापन, न अकाउंट, ऑफ़लाइन चलता है।',
    keywords: 'माला,जप,जाप,मंत्र,काउंटर,नाम,गिनती,108,ध्यान,तस्बीह,रोज़री,mala,japa',
    description: `फ़ोन पर माला, जो असली जैसी लगती है।

कहीं भी छुएँ या नीचे स्वाइप करें: एक मनका हल्की लकड़ी जैसी टिक और हल्के कंपन के साथ गिरता है। स्क्रीन देखे बिना गिन सकते हैं।

• 33, 99, 59 या 108 मनके, या बिना सीमा
• हर चक्र के अंत में तेज़ कंपन और घंटी
• चक्र संख्या और आज का कुल अपने आप सेव
• 8 सामग्री (अंबर, काला, फ़िरोज़ा, अखरोट, मोती, मूंगा, जेड, लाजवर्द) या कोई भी रंग
• जहाँ छूते हैं वहाँ छोटी रोशनी जलती है
• एक टैप में काउंटर या आज का कुल रीसेट
• गिनते समय स्क्रीन चालू रहती है
• 14 भाषाएँ
• न विज्ञापन, न अकाउंट, न ट्रैकिंग, ऑफ़लाइन चलता है

जप, मंत्र, नाम स्मरण या किसी भी गिनती के लिए।

एक बार खरीदें, हमेशा के लिए आपका।`,
    notes: 'पहला संस्करण।',
  }),
  id: D({
    title: 'Tesbih: Tasbih Digital',
    subtitle: 'Rasanya seperti tasbih asli',
    promo: 'Klik lembut dan getaran halus di setiap butir, seperti tasbih asli. Tanpa iklan, tanpa akun, bisa offline.',
    keywords: 'tasbih,dzikir,zikir,penghitung,doa,sholat,istighfar,wirid,asmaul,husna,counter,butir',
    description: `Tasbih di ponselmu yang terasa seperti aslinya.

Ketuk di mana saja atau geser ke bawah: satu butir jatuh dengan bunyi klik kayu yang lembut dan getaran halus. Kamu bisa menghitung tanpa melihat layar.

• 33, 99, 59 atau 108 butir, atau tanpa batas
• Getaran lebih kuat dan bunyi lonceng di akhir setiap putaran
• Nomor putaran dan total hari ini tersimpan otomatis
• 8 bahan (amber, kokka, pirus, kayu, mutiara, koral, giok, lapis) atau warna apa pun
• Cahaya kecil menyala di tempat jarimu menyentuh
• Ulang hitungan atau total hari ini dengan satu ketukan
• Layar tetap menyala saat menghitung
• 14 bahasa
• Tanpa iklan, tanpa akun, tanpa pelacakan, berfungsi offline

Untuk dzikir, wirid, istighfar atau hitungan apa pun.

Beli sekali, milikmu selamanya.`,
    notes: 'Rilis pertama.',
  }),
  ja: D({
    title: 'Tesbih: 数珠カウンター',
    subtitle: '本物の数珠のような手ざわり',
    promo: '一粒ごとにやさしいカチッという音と小さな振動。本物の数珠のように数えられます。広告なし、アカウント不要。',
    keywords: '数珠,念珠,カウンター,数える,お経,念仏,瞑想,マントラ,ロザリオ,108,数取り,タスビーフ',
    description: `本物の数珠のような感覚で数えられるアプリ。

画面のどこかをタップするか下にスワイプすると、一粒がやさしい木の音と小さな振動とともに落ちます。画面を見ずに数えられます。

• 33・99・59・108粒、または無制限
• 一周ごとに強めの振動とチャイム
• 周回数と今日の合計を自動で記録
• 8種類の素材（琥珀・黒玉・トルコ石・くるみ・真珠・珊瑚・翡翠・ラピス）や好きな色
• 触れた場所に小さな光がともる
• カウンターや今日の合計をワンタップでリセット
• 数えている間は画面が消えません
• 14言語対応
• 広告なし、アカウント不要、追跡なし、オフラインで動作

念仏、お経、マントラ、どんな数取りにも。

一度買えばずっと使えます。`,
    notes: '最初のリリース。',
  }),
  ko: D({
    title: 'Tesbih: 염주 카운터',
    subtitle: '진짜 염주 같은 손맛',
    promo: '알마다 부드러운 딸깍 소리와 작은 진동. 진짜 염주처럼 셀 수 있어요. 광고 없음, 계정 없음, 오프라인 사용.',
    keywords: '염주,묵주,카운터,세기,기도,명상,만트라,108배,절,염불,로사리오,타스비',
    description: `진짜 염주처럼 느껴지는 휴대폰 염주.

아무 곳이나 탭하거나 아래로 밀면 한 알이 부드러운 나무 소리와 작은 진동과 함께 내려갑니다. 화면을 보지 않고도 셀 수 있어요.

• 33, 99, 59, 108알 또는 무제한
• 한 바퀴가 끝나면 더 강한 진동과 차임
• 바퀴 수와 오늘 합계를 자동 저장
• 8가지 재질(호박, 흑옥, 터키석, 호두, 진주, 산호, 비취, 청금석) 또는 원하는 색
• 손가락이 닿는 곳에 작은 빛이 켜져요
• 카운터나 오늘 합계를 한 번에 초기화
• 세는 동안 화면이 꺼지지 않아요
• 14개 언어
• 광고 없음, 계정 없음, 추적 없음, 오프라인 작동

염불, 108배, 묵주 기도, 만트라 또는 어떤 셈에도.

한 번 사면 평생 내 것.`,
    notes: '첫 출시.',
  }),
  'zh-Hans': D({
    title: 'Tesbih: 念珠计数器',
    subtitle: '真实念珠般的手感',
    promo: '每一颗都有轻柔的咔嗒声和细微振动，就像真正的念珠。无广告，无需账号，离线可用。',
    keywords: '念珠,佛珠,计数器,念佛,数珠,冥想,咒语,108,玫瑰经,赞念,计数,手串',
    description: `手机里的念珠，手感就像真的一样。

轻点任意位置或向下滑动，一颗珠子随着轻柔的木质咔嗒声和细微振动落下。无需看屏幕也能计数。

• 33、99、59 或 108 颗，或不限次数
• 每圈结束时更强的振动和提示音
• 自动记录圈数和今日总数
• 8 种材质（琥珀、煤玉、绿松石、胡桃木、珍珠、珊瑚、翡翠、青金石）或任意颜色
• 手指触碰处亮起一点微光
• 一键重置计数或今日总数
• 计数时屏幕保持常亮
• 支持 14 种语言
• 无广告、无账号、无追踪，离线可用

适合念佛、持咒、玫瑰经或任何计数。

一次购买，永久使用。`,
    notes: '首个版本。',
  }),
};
const MIRRORS = { 'en-GB': 'en-US', 'en-AU': 'en-US', 'en-CA': 'en-US', 'es-MX': 'es-ES', 'pt-PT': 'pt-BR', 'fr-CA': 'fr-FR' };
const OVERRIDE = { 'es-MX': { title: 'Tesbih: Rosario Digital' }, 'pt-PT': { subtitle: 'Terço, tasbih e mala' } };

function info(x) {
  return {
    title: x.title, subtitle: x.subtitle, description: x.description, promoText: x.promo,
    keywords: x.keywords.split(','), releaseNotes: x.notes,
    marketingUrl: URL, supportUrl: PRIVACY, privacyPolicyUrl: PRIVACY,
  };
}
const out = { configVersion: 0, apple: {
  copyright: `${new Date().getFullYear()} Mutlu Meydan`,
  categories: ['LIFESTYLE', 'UTILITIES'],
  advisory: {},
  release: { automaticRelease: true },
  review: { firstName: 'Mutlu', lastName: 'Meydan', email: 'mutlumeydan01@gmail.com', phone: '+905452218733', demoRequired: false,
    notes: 'Digital prayer-bead counter. Tap anywhere or swipe down to count one bead (sound + haptic). Choose 33/99/59/108/unlimited at the bottom; a round end gives a stronger haptic and chime. Bead colors at the bottom (last one opens a color grid). RESET at the top offers counter-only or counter + today. No sign-in, no network.' },
  info: {},
} };
for (const [k, v] of Object.entries(L)) out.apple.info[k] = info(v);
for (const [k, base] of Object.entries(MIRRORS)) out.apple.info[k] = info({ ...L[base], ...(OVERRIDE[k] || {}) });

const errs = [];
for (const [k, v] of Object.entries(out.apple.info)) {
  if ([...v.title].length > 30) errs.push(`${k} title ${[...v.title].length}`);
  if ([...v.subtitle].length > 30) errs.push(`${k} subtitle ${[...v.subtitle].length}`);
  if ([...v.keywords.join(',')].length > 100) errs.push(`${k} keywords ${[...v.keywords.join(',')].length}`);
  if ([...v.promoText].length > 170) errs.push(`${k} promo ${[...v.promoText].length}`);
}
if (errs.length) { console.error('LIMIT ERRORS:\n' + errs.join('\n')); process.exit(1); }
require('fs').writeFileSync(require('path').join(__dirname, '..', 'store.config.json'), JSON.stringify(out, null, 2));
console.log('store.config.json written:', Object.keys(out.apple.info).length, 'locales');
