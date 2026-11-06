// Localized App Store listing for Piti Piti. Generates store.config.json.
// Limits: title ≤30, subtitle ≤30, keywords total ≤100 chars (comma-joined), promo ≤170.
const URL = 'https://piti-mutlumeydan-bytes-projects.vercel.app';
const PRIVACY = URL + '/privacy.html';

const L = {
  'en-US': {
    title: 'Piti Piti: Finger Chooser',
    subtitle: 'Everyone puts a finger down',
    promo: 'Who goes first? Who pays? Everyone puts a finger on the screen and the wheel decides. No account, no ads, works offline.',
    keywords: 'chooser,picker,random,decide,who,first,team,maker,party,game,tap,wheel,spin,eeny,meeny,draw,lots',
    description: `Who goes first? Who pays? Who does the dishes?

Everyone puts a finger on the screen. Hold still for two seconds. The lights spin around like a wheel, slow down… and stop on one person. No arguing, no cheating, it's the phone's fault.

THREE WAYS TO PLAY
• 1 WINNER – First out: one spin, one winner.
• 1 WINNER – Last left: each spin knocks someone out until one is left.
• 2 TEAMS – Colors flash pink and blue until the very last moment, then split fairly.
• ORDER – Spin after spin, everyone gets a number: 1st, 2nd, 3rd…

• Works with 2 to 10+ fingers, counts them automatically
• Every finger gets its own color
• Ticking sound and vibration like a real wheel (sound can be turned off)
• 14 languages
• No account, no ads, no tracking, works offline

Buy once, keep it forever.`,
    notes: 'First release.',
  },
  tr: {
    title: 'Piti Piti: Parmak Seçici',
    subtitle: 'Herkes parmağını koysun',
    promo: 'Kim başlayacak? Hesabı kim ödeyecek? Herkes parmağını ekrana koysun, çark karar versin. Hesap yok, reklam yok, internetsiz çalışır.',
    keywords: 'seçici,rastgele,kura,çark,kim,ilk,takım,oyun,parti,ebe,sayışma,tekerleme,karar,çekiliş',
    description: `Kim başlayacak? Hesabı kim ödeyecek? Bulaşığı kim yıkayacak?

Herkes parmağını ekrana koysun. İki saniye kıpırdamayın. Işıklar çark gibi döner, yavaşlar… ve birinde durur. Tartışma yok, hile yok, suç telefonda.

ÜÇ OYUN
• 1 KİŞİ – İlk çıkan: tek tur, tek kazanan.
• 1 KİŞİ – Sona kalan: her turda biri elenir, sona kalan kazanır.
• 2 TAKIM – Renkler son ana kadar pembe-mavi yanıp söner, sonra adil bölünür.
• SIRALA – Tur tur herkes numarasını alır: 1., 2., 3.…

• 2'den 10'dan fazla parmağa kadar, kaç kişi olduğunu kendi sayar
• Her parmağa ayrı renk
• Gerçek çark gibi tık tık sesi ve titreşim (ses kapatılabilir)
• 14 dil
• Hesap yok, reklam yok, takip yok, internetsiz çalışır

Bir kere al, hep senin olsun.`,
    notes: 'İlk sürüm.',
  },
  'es-ES': {
    title: 'Piti Piti: Elige con el Dedo',
    subtitle: 'Todos ponen un dedo',
    promo: '¿Quién empieza? ¿Quién paga? Todos ponen un dedo en la pantalla y la ruleta decide. Sin cuenta, sin anuncios, sin conexión.',
    keywords: 'elegir,azar,sorteo,ruleta,quién,primero,equipos,juego,fiesta,dedo,decidir,tin,marín,aleatorio',
    description: `¿Quién empieza? ¿Quién paga? ¿Quién friega los platos?

Todos ponen un dedo en la pantalla. Quietos dos segundos. Las luces giran como una ruleta, frenan… y se detienen en una persona. Sin discusiones, sin trampas: la culpa es del móvil.

TRES FORMAS DE JUGAR
• 1 GANADOR – El primero: una vuelta, un ganador.
• 1 GANADOR – El último: cada vuelta elimina a uno hasta que queda uno.
• 2 EQUIPOS – Los colores parpadean rosa y azul hasta el final y se reparten de forma justa.
• ORDEN – Vuelta a vuelta, cada uno recibe su número: 1.º, 2.º, 3.º…

• De 2 a más de 10 dedos, los cuenta solo
• Cada dedo tiene su color
• Sonido de clic y vibración como una ruleta real (el sonido se puede quitar)
• 14 idiomas
• Sin cuenta, sin anuncios, sin rastreo, funciona sin conexión

Cómpralo una vez, tuyo para siempre.`,
    notes: 'Primera versión.',
  },
  'de-DE': {
    title: 'Piti Piti: Finger Auswahl',
    subtitle: 'Alle einen Finger drauf',
    promo: 'Wer fängt an? Wer zahlt? Alle legen einen Finger aufs Display und das Glücksrad entscheidet. Kein Konto, keine Werbung, offline.',
    keywords: 'auswahl,zufall,auslosen,glücksrad,wer,zuerst,teams,spiel,party,finger,entscheiden,abzählen',
    description: `Wer fängt an? Wer zahlt? Wer spült ab?

Alle legen einen Finger aufs Display. Zwei Sekunden stillhalten. Die Lichter drehen sich wie ein Glücksrad, werden langsamer… und bleiben bei einer Person stehen. Kein Streit, kein Schummeln – das Handy ist schuld.

DREI SPIELARTEN
• 1 GEWINNER – Erster raus: eine Runde, ein Gewinner.
• 1 GEWINNER – Letzter bleibt: jede Runde scheidet jemand aus, bis einer übrig ist.
• 2 TEAMS – Die Farben blinken bis zum Schluss pink und blau, dann faire Aufteilung.
• REIHENFOLGE – Runde für Runde bekommt jeder seine Nummer: 1., 2., 3.…

• 2 bis über 10 Finger, zählt automatisch
• Jeder Finger bekommt eine eigene Farbe
• Klickgeräusch und Vibration wie ein echtes Glücksrad (Ton abschaltbar)
• 14 Sprachen
• Kein Konto, keine Werbung, kein Tracking, funktioniert offline

Einmal kaufen, für immer behalten.`,
    notes: 'Erste Version.',
  },
  'fr-FR': {
    title: 'Piti Piti: Choisir au Doigt',
    subtitle: 'Chacun pose un doigt',
    promo: 'Qui commence ? Qui paie ? Chacun pose un doigt sur l’écran et la roue décide. Sans compte, sans pub, hors ligne.',
    keywords: 'choisir,hasard,tirage,roue,qui,premier,équipes,jeu,fête,doigt,décider,am,stram,gram,aléatoire',
    description: `Qui commence ? Qui paie ? Qui fait la vaisselle ?

Chacun pose un doigt sur l’écran. On ne bouge plus pendant deux secondes. Les lumières tournent comme une roue, ralentissent… et s’arrêtent sur une personne. Pas de dispute, pas de triche : c’est la faute du téléphone.

TROIS FAÇONS DE JOUER
• 1 GAGNANT – Premier sorti : un tour, un gagnant.
• 1 GAGNANT – Dernier restant : chaque tour élimine quelqu’un jusqu’au dernier.
• 2 ÉQUIPES – Les couleurs clignotent rose et bleu jusqu’au bout, puis partage équitable.
• ORDRE – Tour après tour, chacun reçoit son numéro : 1er, 2e, 3e…

• De 2 à plus de 10 doigts, comptés automatiquement
• Chaque doigt a sa couleur
• Clics et vibrations comme une vraie roue (son désactivable)
• 14 langues
• Sans compte, sans pub, sans suivi, fonctionne hors ligne

Achetez une fois, gardez-le pour toujours.`,
    notes: 'Première version.',
  },
  it: {
    title: 'Piti Piti: Scegli col Dito',
    subtitle: 'Tutti un dito sullo schermo',
    promo: 'Chi inizia? Chi paga? Tutti mettono un dito sullo schermo e la ruota decide. Niente account, niente pubblicità, offline.',
    keywords: 'scegli,caso,sorteggio,ruota,chi,primo,squadre,gioco,festa,dito,decidere,ambarabà,conta',
    description: `Chi inizia? Chi paga? Chi lava i piatti?

Tutti mettono un dito sullo schermo. Fermi per due secondi. Le luci girano come una ruota, rallentano… e si fermano su una persona. Niente litigi, niente trucchi: è colpa del telefono.

TRE MODI DI GIOCARE
• 1 VINCITORE – Il primo: un giro, un vincitore.
• 1 VINCITORE – L’ultimo: ogni giro elimina qualcuno finché ne resta uno.
• 2 SQUADRE – I colori lampeggiano rosa e blu fino all’ultimo, poi divisione equa.
• ORDINE – Giro dopo giro, ognuno riceve il suo numero: 1°, 2°, 3°…

• Da 2 a più di 10 dita, contate in automatico
• Ogni dito ha il suo colore
• Tic-tic e vibrazione come una vera ruota (audio disattivabile)
• 14 lingue
• Niente account, niente pubblicità, nessun tracciamento, funziona offline

Compralo una volta, tuo per sempre.`,
    notes: 'Prima versione.',
  },
  'pt-BR': {
    title: 'Piti Piti: Escolha no Dedo',
    subtitle: 'Todo mundo põe um dedo',
    promo: 'Quem começa? Quem paga? Todo mundo põe um dedo na tela e a roleta decide. Sem conta, sem anúncios, funciona offline.',
    keywords: 'escolher,sorteio,roleta,aleatório,quem,primeiro,times,jogo,festa,dedo,decidir,uni,duni,tê',
    description: `Quem começa? Quem paga? Quem lava a louça?

Todo mundo põe um dedo na tela. Ninguém se mexe por dois segundos. As luzes giram como uma roleta, desaceleram… e param em uma pessoa. Sem briga, sem trapaça: a culpa é do celular.

TRÊS JEITOS DE JOGAR
• 1 VENCEDOR – O primeiro: uma volta, um vencedor.
• 1 VENCEDOR – O último: cada volta elimina alguém até sobrar um.
• 2 TIMES – As cores piscam rosa e azul até o fim e dividem de forma justa.
• ORDEM – Volta a volta, cada um recebe seu número: 1º, 2º, 3º…

• De 2 a mais de 10 dedos, conta sozinho
• Cada dedo tem sua cor
• Som de clique e vibração como uma roleta de verdade (som pode ser desligado)
• 14 idiomas
• Sem conta, sem anúncios, sem rastreamento, funciona offline

Compre uma vez, é seu para sempre.`,
    notes: 'Primeira versão.',
  },
  ru: {
    title: 'Piti Piti: Выбор пальцем',
    subtitle: 'Все кладут палец',
    promo: 'Кто первый? Кто платит? Все кладут палец на экран, и колесо решает. Без аккаунта, без рекламы, без интернета.',
    keywords: 'выбор,случайно,жребий,колесо,кто,первый,команды,игра,вечеринка,палец,считалка,решить',
    description: `Кто начинает? Кто платит? Кто моет посуду?

Все кладут палец на экран. Две секунды не двигаться. Огоньки бегут по кругу, как колесо, замедляются… и останавливаются на одном. Никаких споров и хитростей — виноват телефон.

ТРИ РЕЖИМА
• 1 ПОБЕДИТЕЛЬ – Первый: один круг, один победитель.
• 1 ПОБЕДИТЕЛЬ – Последний: каждый круг кто-то выбывает, пока не останется один.
• 2 КОМАНДЫ – Цвета мигают розовым и синим до самого конца, потом честное деление.
• ПОРЯДОК – Круг за кругом каждый получает номер: 1, 2, 3…

• От 2 до 10+ пальцев, считает сам
• У каждого пальца свой цвет
• Щелчки и вибрация, как у настоящего колеса (звук можно выключить)
• 14 языков
• Без аккаунта, без рекламы, без слежки, работает офлайн

Купите один раз — навсегда ваше.`,
    notes: 'Первая версия.',
  },
  'ar-SA': {
    title: 'Piti Piti: اختيار بالإصبع',
    subtitle: 'الكل يضع إصبعه',
    promo: 'من يبدأ؟ من يدفع؟ الكل يضع إصبعه على الشاشة والعجلة تقرر. بلا حساب، بلا إعلانات، يعمل دون إنترنت.',
    keywords: 'اختيار,عشوائي,قرعة,عجلة,من,أول,فرق,لعبة,حفلة,إصبع,قرار,حادي,بادي',
    description: `من يبدأ؟ من يدفع؟ من يغسل الصحون؟

الكل يضع إصبعه على الشاشة. لا تتحركوا لثانيتين. تدور الأضواء كالعجلة، تبطئ… وتتوقف عند شخص واحد. بلا جدال ولا غش، الذنب ذنب الهاتف.

ثلاث طرق للعب
• فائز واحد – الأول: دورة واحدة، فائز واحد.
• فائز واحد – الأخير: كل دورة تُخرج شخصًا حتى يبقى واحد.
• فريقان – تومض الألوان وردي وأزرق حتى آخر لحظة، ثم تقسيم عادل.
• ترتيب – دورة بعد دورة، يحصل كل واحد على رقمه: 1، 2، 3…

• من إصبعين إلى أكثر من 10، يعدّها تلقائيًا
• لكل إصبع لون خاص
• صوت نقر واهتزاز كعجلة حقيقية (يمكن إيقاف الصوت)
• 14 لغة
• بلا حساب، بلا إعلانات، بلا تتبع، يعمل دون إنترنت

اشترِه مرة واحدة، لك إلى الأبد.`,
    notes: 'الإصدار الأول.',
  },
  hi: {
    title: 'Piti Piti: उंगली से चुनें',
    subtitle: 'सब एक उंगली रखें',
    promo: 'पहले कौन? पैसे कौन देगा? सब स्क्रीन पर उंगली रखें और पहिया फ़ैसला करे। न अकाउंट, न विज्ञापन, ऑफ़लाइन चलता है।',
    keywords: 'चुनें,रैंडम,पहिया,कौन,पहले,टीम,खेल,पार्टी,उंगली,फ़ैसला,अक्कड़,बक्कड़,picker',
    description: `पहले कौन? पैसे कौन देगा? बर्तन कौन धोएगा?

सब स्क्रीन पर एक उंगली रखें। दो सेकंड हिलना मत। रोशनी पहिये की तरह घूमती है, धीमी होती है… और एक पर रुक जाती है। कोई बहस नहीं, कोई चीटिंग नहीं — फ़ोन की गलती।

खेलने के तीन तरीके
• 1 विजेता – पहला: एक चक्कर, एक विजेता।
• 1 विजेता – आख़िरी: हर चक्कर में कोई बाहर, जब तक एक न बचे।
• 2 टीमें – रंग आख़िर तक गुलाबी-नीले चमकते हैं, फिर बराबर बँटवारा।
• क्रम – चक्कर दर चक्कर सबको नंबर मिलता है: 1, 2, 3…

• 2 से 10+ उंगलियाँ, अपने आप गिनता है
• हर उंगली का अपना रंग
• असली पहिये जैसी टिक-टिक और कंपन (आवाज़ बंद कर सकते हैं)
• 14 भाषाएँ
• न अकाउंट, न विज्ञापन, न ट्रैकिंग, ऑफ़लाइन चलता है

एक बार खरीदें, हमेशा के लिए आपका।`,
    notes: 'पहला संस्करण।',
  },
  id: {
    title: 'Piti Piti: Pilih Pakai Jari',
    subtitle: 'Semua taruh satu jari',
    promo: 'Siapa duluan? Siapa yang bayar? Semua taruh jari di layar dan roda yang memutuskan. Tanpa akun, tanpa iklan, offline.',
    keywords: 'pilih,acak,undian,roda,siapa,duluan,tim,game,pesta,jari,putuskan,hompimpa,kocok',
    description: `Siapa duluan? Siapa yang bayar? Siapa yang cuci piring?

Semua taruh satu jari di layar. Diam dua detik. Lampu berputar seperti roda, melambat… dan berhenti di satu orang. Tanpa debat, tanpa curang — salahkan ponselnya.

TIGA CARA MAIN
• 1 PEMENANG – Pertama: satu putaran, satu pemenang.
• 1 PEMENANG – Terakhir: tiap putaran satu orang gugur sampai tersisa satu.
• 2 TIM – Warna berkedip pink dan biru sampai akhir, lalu dibagi adil.
• URUTAN – Putaran demi putaran, semua dapat nomor: 1, 2, 3…

• 2 sampai 10+ jari, dihitung otomatis
• Tiap jari punya warna sendiri
• Bunyi klik dan getar seperti roda sungguhan (suara bisa dimatikan)
• 14 bahasa
• Tanpa akun, tanpa iklan, tanpa pelacakan, berfungsi offline

Beli sekali, milikmu selamanya.`,
    notes: 'Rilis pertama.',
  },
  ja: {
    title: 'Piti Piti: 指で決める',
    subtitle: 'みんな指を置いて',
    promo: '誰が先？誰が払う？みんなで画面に指を置けば、ルーレットが決めてくれます。アカウント不要、広告なし、オフラインOK。',
    keywords: 'ルーレット,決める,抽選,くじ,ランダム,順番,チーム分け,パーティー,ゲーム,指,じゃんけん,どれにしようかな',
    description: `誰が先？誰が払う？誰がお皿を洗う？

みんなで画面に指を1本置いて、2秒じっとしていてください。光がルーレットのように回って、だんだんゆっくりになって…1人の上で止まります。ケンカもズルもなし。決めたのはスマホです。

3つの遊び方
• 1人 – 最初の1人：1回まわして1人決定。
• 1人 – 最後の1人：1回ごとに1人ずつ脱落、最後に残った人が勝ち。
• 2チーム – 最後の瞬間までピンクと青が点滅し、公平に分かれます。
• 順番 – 1回ずつまわして、全員に番号がつきます：1番、2番、3番…

• 2本から10本以上まで、自動でカウント
• 指ごとに違う色
• 本物のルーレットのようなカチカチ音と振動（音はオフにできます）
• 14言語対応
• アカウント不要、広告なし、追跡なし、オフラインで動作

一度買えばずっと使えます。`,
    notes: '最初のリリース。',
  },
  ko: {
    title: 'Piti Piti: 손가락 뽑기',
    subtitle: '모두 손가락을 올려요',
    promo: '누가 먼저? 누가 계산? 모두 화면에 손가락을 올리면 룰렛이 정해줘요. 계정 없음, 광고 없음, 오프라인 사용.',
    keywords: '뽑기,랜덤,룰렛,제비뽑기,순서,팀나누기,게임,파티,손가락,결정,복불복,술게임',
    description: `누가 먼저? 누가 계산? 누가 설거지?

모두 화면에 손가락 하나씩 올리고 2초만 가만히 있어요. 불빛이 룰렛처럼 돌다가 천천히… 한 사람에게서 멈춰요. 다툼도 반칙도 없어요. 폰이 정한 거예요.

세 가지 방법
• 1명 – 처음 뽑힘: 한 번 돌려 한 명.
• 1명 – 마지막 남은: 돌릴 때마다 한 명씩 탈락, 마지막까지 남은 사람.
• 2팀 – 마지막 순간까지 핑크와 파랑이 깜빡이다 공평하게 나뉘어요.
• 순서 – 한 번씩 돌려 모두 번호를 받아요: 1, 2, 3…

• 2개부터 10개 이상 손가락까지 자동으로 세요
• 손가락마다 다른 색
• 진짜 룰렛 같은 딸깍 소리와 진동 (소리 끌 수 있음)
• 14개 언어
• 계정 없음, 광고 없음, 추적 없음, 오프라인 작동

한 번 사면 평생 내 것.`,
    notes: '첫 출시.',
  },
  'zh-Hans': {
    title: 'Piti Piti: 手指抽签',
    subtitle: '大家都放一根手指',
    promo: '谁先来？谁买单？大家把手指放在屏幕上，转盘来决定。无需账号，无广告，离线可用。',
    keywords: '抽签,随机,转盘,选人,谁先,分组,游戏,聚会,手指,决定,点兵点将,真心话',
    description: `谁先来？谁买单？谁洗碗？

大家各放一根手指在屏幕上，别动两秒。灯光像转盘一样转起来，越转越慢……停在一个人身上。不吵架，不作弊，怪手机就行。

三种玩法
• 1人 – 第一个：转一次，选出一人。
• 1人 – 最后剩下：每转一次淘汰一人，直到只剩一个。
• 分2队 – 粉色和蓝色一直闪到最后一刻，再公平分队。
• 排序 – 一轮一轮转，每人得到自己的号码：1、2、3……

• 支持 2 到 10 根以上手指，自动计数
• 每根手指一种颜色
• 像真转盘一样的咔嗒声和振动（可关闭声音）
• 14 种语言
• 无账号、无广告、无追踪，离线可用

一次购买，永久使用。`,
    notes: '首个版本。',
  },
};
// Extra storefront locales mirroring a base language (es-MX needs its own name)
const MIRRORS = { 'en-GB': 'en-US', 'en-AU': 'en-US', 'en-CA': 'en-US', 'es-MX': 'es-ES', 'pt-PT': 'pt-BR', 'fr-CA': 'fr-FR' };
const OVERRIDE = { 'es-MX': { title: 'Piti Piti: Elige al Azar' } };

function info(x) {
  return {
    title: x.title, subtitle: x.subtitle, description: x.description, promoText: x.promo,
    keywords: x.keywords.split(','), releaseNotes: x.notes,
    marketingUrl: URL, supportUrl: PRIVACY, privacyPolicyUrl: PRIVACY,
  };
}
const out = { configVersion: 0, apple: {
  copyright: `${new Date().getFullYear()} Mutlu Meydan`,
  categories: ['ENTERTAINMENT', 'UTILITIES'],
  advisory: {},
  release: { automaticRelease: true },
  review: { firstName: 'Mutlu', lastName: 'Meydan', email: 'mutlumeydan01@gmail.com', phone: '+905452218733', demoRequired: false,
    notes: 'Finger chooser. Two or more people each put one finger on the screen and hold still for 2 seconds; the app then picks a winner, splits two teams, or ranks everyone (mode buttons at the bottom). To test alone, use two or more fingers of your own hands. No sign-in, no network.' },
  info: {},
} };
for (const [k, v] of Object.entries(L)) out.apple.info[k] = info(v);
for (const [k, base] of Object.entries(MIRRORS)) out.apple.info[k] = info({ ...L[base], ...(OVERRIDE[k] || {}) });

// validate
const errs = [];
for (const [k, v] of Object.entries(out.apple.info)) {
  if ([...v.title].length > 30) errs.push(`${k} title ${[...v.title].length}`);
  if ([...v.subtitle].length > 30) errs.push(`${k} subtitle ${[...v.subtitle].length}`);
  if ([...v.keywords.join(',')].length > 100) errs.push(`${k} keywords ${[...v.keywords.join(',')].length}`);
  if ([...v.promoText].length > 170) errs.push(`${k} promo ${[...v.promoText].length}`);
  if ([...v.description].length > 4000) errs.push(`${k} desc`);
}
if (errs.length) { console.error('LIMIT ERRORS:\n' + errs.join('\n')); process.exit(1); }
require('fs').writeFileSync(require('path').join(__dirname, '..', 'store.config.json'), JSON.stringify(out, null, 2));
console.log('store.config.json written:', Object.keys(out.apple.info).length, 'locales');
