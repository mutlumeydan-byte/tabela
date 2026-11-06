// Localized App Store listing for Tabela. Generates store.config.json.
// Limits: title ≤30, subtitle ≤30, keywords total ≤100 chars (comma-joined), promo ≤170.
const URL = 'https://tabela-mutlumeydan-bytes-projects.vercel.app';
const PRIVACY = URL + '/privacy.html';

const L = {
  'en-US': {
    title: 'Tabela: Big Text Sign',
    subtitle: 'Type it. Flip it. Show it.',
    promo: 'Turn your phone into a giant sign in one tap. No account, no ads, works offline.',
    keywords: 'led,banner,marquee,scroll,text,sign,board,display,big,font,concert,airport,pickup,noise,deaf',
    description: `Type a few words and your phone becomes a giant, bright sign.

Loud bar? Show "WANNA LEAVE?" across the room.
Airport pickup? Hold up the name, no paper needed.
Traffic? Tell the car next to you "YOUR BLINKER'S ON".
Concert? Let your friends find you: "I'M HERE".

• Huge text that fills the whole screen automatically
• Static, scrolling or blinking text
• 12 ready color combos plus any color you like
• Rotates to landscape for maximum size
• Screen stays on and goes full brightness while showing
• Remembers your last sign
• 14 languages, works with any alphabet and emoji
• No account, no ads, no tracking, works offline

Buy once, keep it forever.`,
    notes: 'First release.',
  },
  tr: {
    title: 'Tabela: Dev Yazı Ekranı',
    subtitle: 'Yaz. Çevir. Göster.',
    promo: 'Telefonunu tek dokunuşla dev bir tabelaya çevir. Hesap yok, reklam yok, internetsiz çalışır.',
    keywords: 'led,kayan yazı,pankart,yazı,ekran,büyük,konser,havalimanı,karşılama,gürültü,işitme,sinyal',
    description: `Birkaç kelime yaz, telefonun kocaman, parlak bir tabelaya dönüşsün.

Gürültülü bar mı? Salonun öbür ucuna "ÇIKALIM MI?" göster.
Havalimanında karşılama mı? İsmi kâğıtsız tut.
Trafikte mi? Yandaki arabaya "SİNYALİN AÇIK" de.
Konserde mi? Arkadaşların seni bulsun: "BURADAYIM".

• Ekranı otomatik dolduran dev yazı
• Sabit, kayan ya da yanıp sönen yazı
• 12 hazır renk + istediğin her renk
• Maksimum boyut için yatay mod
• Gösterirken ekran kapanmaz, parlaklık sonuna kadar açılır
• Son yazdığını hatırlar
• 14 dil, her alfabe ve emoji ile çalışır
• Hesap yok, reklam yok, takip yok, internetsiz çalışır

Bir kere al, hep senin olsun.`,
    notes: 'İlk sürüm.',
  },
  'es-ES': {
    title: 'Tabela: Cartel de Texto',
    subtitle: 'Escribe. Gira. Muestra.',
    promo: 'Convierte tu móvil en un cartel gigante con un toque. Sin cuenta, sin anuncios, sin conexión.',
    keywords: 'led,letrero,marquesina,texto,cartel,pantalla,grande,concierto,aeropuerto,ruido,sordo,banner',
    description: `Escribe unas palabras y tu móvil se convierte en un cartel enorme y brillante.

¿Bar ruidoso? Muestra "¿NOS VAMOS?" al otro lado del local.
¿Recoger a alguien en el aeropuerto? Muestra su nombre sin papel.
¿En el tráfico? Avisa al coche de al lado: "LLEVAS EL INTERMITENTE".
¿Concierto? Que tus amigos te encuentren: "ESTOY AQUÍ".

• Texto enorme que llena la pantalla automáticamente
• Texto fijo, en movimiento o parpadeante
• 12 combinaciones de color y cualquier color que quieras
• Modo horizontal para el tamaño máximo
• La pantalla no se apaga y sube al máximo brillo
• Recuerda tu último cartel
• 14 idiomas, cualquier alfabeto y emoji
• Sin cuenta, sin anuncios, sin rastreo, funciona sin conexión

Compra una vez, tuyo para siempre.`,
    notes: 'Primera versión.',
  },
  'de-DE': {
    title: 'Tabela: Großes Textschild',
    subtitle: 'Tippen. Drehen. Zeigen.',
    promo: 'Mach dein Handy mit einem Tipp zum riesigen Schild. Kein Konto, keine Werbung, offline.',
    keywords: 'led,laufschrift,banner,text,schild,anzeige,groß,konzert,flughafen,abholung,laut,gehörlos',
    description: `Ein paar Worte tippen – und dein Handy wird zum riesigen, hellen Schild.

Laute Bar? Zeig quer durch den Raum: "GEHEN WIR?"
Abholung am Flughafen? Namen hochhalten, ganz ohne Papier.
Im Verkehr? Sag dem Auto neben dir: "DEIN BLINKER IST AN".
Konzert? Lass dich finden: "ICH BIN HIER".

• Riesiger Text, der den Bildschirm automatisch füllt
• Fest, als Laufschrift oder blinkend
• 12 fertige Farbkombinationen plus jede Wunschfarbe
• Querformat für maximale Größe
• Bildschirm bleibt an, volle Helligkeit beim Anzeigen
• Merkt sich dein letztes Schild
• 14 Sprachen, jedes Alphabet und Emoji
• Kein Konto, keine Werbung, kein Tracking, offline

Einmal kaufen, für immer behalten.`,
    notes: 'Erste Version.',
  },
  'fr-FR': {
    title: 'Tabela : Panneau Géant',
    subtitle: 'Écris. Retourne. Montre.',
    promo: 'Transforme ton téléphone en panneau géant en un geste. Sans compte, sans pub, hors ligne.',
    keywords: 'led,défilant,banderole,texte,panneau,écran,grand,concert,aéroport,bruit,sourd,affiche',
    description: `Tape quelques mots et ton téléphone devient un panneau géant et lumineux.

Bar bruyant ? Montre "ON Y VA ?" à l'autre bout de la salle.
Accueil à l'aéroport ? Affiche le nom, sans papier.
Dans les bouchons ? Préviens la voiture d'à côté : "TON CLIGNOTANT EST ALLUMÉ".
Concert ? Que tes amis te trouvent : "JE SUIS LÀ".

• Texte géant qui remplit automatiquement l'écran
• Texte fixe, défilant ou clignotant
• 12 combinaisons de couleurs + toutes les couleurs
• Mode paysage pour une taille maximale
• L'écran reste allumé, luminosité au maximum
• Se souvient de ton dernier panneau
• 14 langues, tous les alphabets et emoji
• Sans compte, sans pub, sans pistage, hors ligne

Un seul achat, pour toujours.`,
    notes: 'Première version.',
  },
  it: {
    title: 'Tabela: Cartello Gigante',
    subtitle: 'Scrivi. Gira. Mostra.',
    promo: 'Trasforma il telefono in un cartello gigante con un tocco. Niente account, niente pubblicità.',
    keywords: 'led,scorrevole,striscione,testo,cartello,schermo,grande,concerto,aeroporto,rumore,sordo',
    description: `Scrivi qualche parola e il telefono diventa un cartello enorme e luminoso.

Bar rumoroso? Mostra "ANDIAMO?" dall'altra parte della sala.
Accoglienza in aeroporto? Il nome, senza carta.
Nel traffico? Avvisa l'auto accanto: "HAI LA FRECCIA ACCESA".
Concerto? Fatti trovare: "SONO QUI".

• Testo enorme che riempie lo schermo da solo
• Fisso, scorrevole o lampeggiante
• 12 combinazioni di colori + qualsiasi colore
• Modalità orizzontale per la massima grandezza
• Lo schermo resta acceso alla massima luminosità
• Ricorda l'ultimo cartello
• 14 lingue, ogni alfabeto ed emoji
• Niente account, pubblicità o tracciamento, offline

Compri una volta, tuo per sempre.`,
    notes: 'Prima versione.',
  },
  'pt-BR': {
    title: 'Tabela: Placa de Texto',
    subtitle: 'Escreva. Vire. Mostre.',
    promo: 'Transforme seu celular numa placa gigante com um toque. Sem conta, sem anúncios, offline.',
    keywords: 'led,letreiro,faixa,texto,placa,tela,grande,show,aeroporto,barulho,surdo,cartaz,rolando',
    description: `Digite algumas palavras e seu celular vira uma placa enorme e brilhante.

Bar barulhento? Mostre "VAMOS EMBORA?" do outro lado do salão.
Buscar alguém no aeroporto? Mostre o nome sem papel.
No trânsito? Avise o carro do lado: "SEU PISCA ESTÁ LIGADO".
Show? Seus amigos te acham: "ESTOU AQUI".

• Texto gigante que preenche a tela sozinho
• Fixo, rolando ou piscando
• 12 combinações de cores + qualquer cor
• Modo paisagem para tamanho máximo
• A tela não apaga e fica no brilho máximo
• Lembra sua última placa
• 14 idiomas, qualquer alfabeto e emoji
• Sem conta, sem anúncios, sem rastreamento, offline

Compre uma vez, é seu para sempre.`,
    notes: 'Primeira versão.',
  },
  ru: {
    title: 'Табела: Большая надпись',
    subtitle: 'Напиши. Переверни. Покажи.',
    promo: 'Превратите телефон в огромную табличку одним касанием. Без аккаунта, без рекламы, офлайн.',
    keywords: 'led,бегущая строка,баннер,текст,табличка,экран,крупный,концерт,аэропорт,шум,глухой',
    description: `Напишите пару слов — и телефон станет огромной яркой табличкой.

Шумный бар? Покажите через весь зал: "ПОЙДЁМ?"
Встречаете в аэропорту? Имя на экране, без бумаги.
В пробке? Подскажите соседу: "У ВАС ПОВОРОТНИК".
Концерт? Пусть друзья вас найдут: "Я ЗДЕСЬ".

• Огромный текст сам заполняет весь экран
• Статичный, бегущий или мигающий текст
• 12 готовых сочетаний цветов и любой свой цвет
• Горизонтальный режим для максимального размера
• Экран не гаснет, яркость на максимум
• Запоминает последнюю надпись
• 14 языков, любой алфавит и эмодзи
• Без аккаунта, рекламы и слежки, работает офлайн

Купите один раз — навсегда.`,
    notes: 'Первая версия.',
  },
  'ar-SA': {
    title: 'تابيلا: لافتة نص كبيرة',
    subtitle: 'اكتب. اقلب. اعرض.',
    promo: 'حوّل هاتفك إلى لافتة عملاقة بلمسة واحدة. بلا حساب، بلا إعلانات، يعمل دون إنترنت.',
    keywords: 'led,لافتة,نص,شاشة,كبير,متحرك,حفلة,مطار,استقبال,ضجيج,صم,إعلان',
    description: `اكتب بضع كلمات ويتحول هاتفك إلى لافتة ضخمة ومضيئة.

مقهى صاخب؟ اعرض "نخرج؟" إلى الطرف الآخر من القاعة.
استقبال في المطار؟ اعرض الاسم دون ورق.
في الزحام؟ نبّه السيارة المجاورة: "إشارتك مضاءة".
في حفلة؟ دع أصدقاءك يجدونك: "أنا هنا".

• نص ضخم يملأ الشاشة تلقائيًا
• نص ثابت أو متحرك أو وامض
• 12 مزيجًا جاهزًا من الألوان وأي لون تريده
• وضع أفقي لأكبر حجم
• الشاشة تبقى مضاءة بأقصى سطوع
• يتذكر لافتتك الأخيرة
• 14 لغة، يعمل مع أي أبجدية ورموز تعبيرية
• بلا حساب ولا إعلانات ولا تتبع، يعمل دون إنترنت

اشترِ مرة واحدة، ولك إلى الأبد.`,
    notes: 'الإصدار الأول.',
  },
  hi: {
    title: 'तबेला: बड़ा टेक्स्ट साइन',
    subtitle: 'लिखो। घुमाओ। दिखाओ।',
    promo: 'एक टैप में फ़ोन को बड़ा साइनबोर्ड बनाइए। न अकाउंट, न विज्ञापन, ऑफ़लाइन चलता है।',
    keywords: 'led,साइन,बोर्ड,टेक्स्ट,बैनर,स्क्रीन,बड़ा,कॉन्सर्ट,एयरपोर्ट,शोर,स्क्रॉल',
    description: `कुछ शब्द लिखिए और आपका फ़ोन एक बड़ा, चमकदार साइनबोर्ड बन जाएगा।

शोर भरी जगह? हॉल के उस पार दिखाइए: "चलें?"
एयरपोर्ट पर किसी को लेने? बिना कागज़ के नाम दिखाइए।
ट्रैफ़िक में? बगल वाली गाड़ी को बताइए: "आपका इंडिकेटर ऑन है"।
कॉन्सर्ट में? दोस्त आपको ढूँढ लें: "मैं यहाँ हूँ"।

• स्क्रीन भरने वाला बड़ा टेक्स्ट, अपने आप
• स्थिर, चलता या ब्लिंक करता टेक्स्ट
• 12 तैयार रंग जोड़े और कोई भी रंग
• सबसे बड़े आकार के लिए लैंडस्केप मोड
• दिखाते समय स्क्रीन बंद नहीं होती, पूरी ब्राइटनेस
• आपका पिछला साइन याद रखता है
• 14 भाषाएँ, हर लिपि और इमोजी
• न अकाउंट, न विज्ञापन, न ट्रैकिंग, ऑफ़लाइन

एक बार खरीदें, हमेशा के लिए।`,
    notes: 'पहला संस्करण।',
  },
  id: {
    title: 'Tabela: Papan Teks Besar',
    subtitle: 'Ketik. Balik. Tunjukkan.',
    promo: 'Ubah ponselmu jadi papan raksasa dengan satu sentuhan. Tanpa akun, tanpa iklan, offline.',
    keywords: 'led,teks berjalan,spanduk,teks,papan,layar,besar,konser,bandara,jemput,bising,tuli',
    description: `Ketik beberapa kata dan ponselmu jadi papan tulisan raksasa yang terang.

Kafe berisik? Tunjukkan "PULANG YUK?" ke seberang ruangan.
Jemput di bandara? Tunjukkan namanya tanpa kertas.
Di jalan? Beri tahu mobil sebelah: "LAMPU SEIN KAMU NYALA".
Konser? Biar temanmu menemukanmu: "AKU DI SINI".

• Teks raksasa yang otomatis memenuhi layar
• Teks diam, berjalan, atau berkedip
• 12 kombinasi warna siap pakai + warna apa saja
• Mode lanskap untuk ukuran maksimal
• Layar tetap menyala dengan kecerahan penuh
• Mengingat tulisan terakhirmu
• 14 bahasa, semua aksara dan emoji
• Tanpa akun, iklan, atau pelacakan, offline

Beli sekali, milikmu selamanya.`,
    notes: 'Versi pertama.',
  },
  ja: {
    title: 'タベラ：大きな文字ボード',
    subtitle: '書く。向ける。見せる。',
    promo: 'ワンタップでスマホが巨大な掲示板に。アカウント不要、広告なし、オフラインで使えます。',
    keywords: 'led,電光掲示板,テロップ,文字,大きい,看板,ライブ,空港,出迎え,騒音,筆談,スクロール',
    description: `言葉を入力するだけで、スマホが大きく明るい掲示板に。

騒がしいお店で？ 部屋の向こうに「帰る？」と見せる。
空港のお出迎えに？ 紙なしで名前を表示。
渋滞中に？ 隣の車に「ウインカー点いてます」。
ライブで？ 友だちに見つけてもらう「ここにいるよ」。

• 画面いっぱいに自動で大きく表示
• 固定・スクロール・点滅の3モード
• 12種類の配色＋好きな色
• 横向き表示で最大サイズ
• 表示中は画面が消えず、明るさ最大
• 前回の文字を記憶
• 14言語対応、あらゆる文字と絵文字
• アカウント・広告・トラッキングなし、オフライン

一度の購入で、ずっと使えます。`,
    notes: '最初のリリース。',
  },
  ko: {
    title: '타벨라: 큰 글씨 전광판',
    subtitle: '쓰고. 돌리고. 보여주세요.',
    promo: '한 번의 터치로 휴대폰이 거대한 전광판으로. 계정·광고 없이 오프라인에서도 작동합니다.',
    keywords: 'led,전광판,글씨,큰글씨,배너,스크롤,콘서트,공항,마중,응원,소음,필담',
    description: `몇 글자만 입력하면 휴대폰이 크고 밝은 전광판이 됩니다.

시끄러운 술집에서? 반대편에 "나갈까?"를 보여주세요.
공항 마중? 종이 없이 이름을 띄우세요.
차 안에서? 옆 차에 "깜빡이 켜져 있어요".
콘서트에서? 친구가 찾을 수 있게 "나 여기 있어".

• 화면을 자동으로 가득 채우는 큰 글씨
• 고정·흐르는·깜빡이는 글씨
• 12가지 색 조합 + 원하는 모든 색
• 최대 크기를 위한 가로 모드
• 표시 중 화면 꺼짐 방지, 최대 밝기
• 마지막 문구를 기억
• 14개 언어, 모든 문자와 이모지 지원
• 계정·광고·추적 없음, 오프라인

한 번 구매로 평생 사용.`,
    notes: '첫 번째 출시.',
  },
  'zh-Hans': {
    title: '牌子：大字屏幕',
    subtitle: '输入。翻转。展示。',
    promo: '一键把手机变成巨型告示牌。无需账号，没有广告，离线可用。',
    keywords: 'led,滚动字幕,手持弹幕,大字,横幅,告示牌,演唱会,接机,应援,噪音,屏幕',
    description: `输入几个字，手机就变成又大又亮的告示牌。

酒吧太吵？ 隔着整个大厅亮出"走吗？"
去机场接人？ 不用纸也能举名字。
堵车时？ 提醒旁边的车："你的转向灯亮着"。
演唱会？ 让朋友找到你："我在这里"。

• 文字自动铺满整个屏幕
• 静止、滚动、闪烁三种模式
• 12 种现成配色，另可自选任意颜色
• 横屏显示，字号最大
• 展示时屏幕常亮、亮度拉满
• 记住你上次的内容
• 支持 14 种语言、任何文字和表情
• 无账号、无广告、无追踪，离线可用

一次购买，永久使用。`,
    notes: '首个版本。',
  },
};
// Extra storefront locales mirroring a base language
const MIRRORS = { 'en-GB': 'en-US', 'en-AU': 'en-US', 'en-CA': 'en-US', 'es-MX': 'es-ES', 'pt-PT': 'pt-BR', 'fr-CA': 'fr-FR' };

function info(x) {
  return {
    title: x.title, subtitle: x.subtitle, description: x.description, promoText: x.promo,
    keywords: x.keywords.split(','), releaseNotes: x.notes,
    marketingUrl: URL, supportUrl: PRIVACY, privacyPolicyUrl: PRIVACY,
  };
}
const out = { configVersion: 0, apple: {
  copyright: `${new Date().getFullYear()} Mutlu Meydan`,
  categories: ['UTILITIES', 'ENTERTAINMENT'],
  advisory: {},
  release: { automaticRelease: true },
  review: { firstName: 'Mutlu', lastName: 'Meydan', email: 'mutlumeydan01@gmail.com', phone: '+905452218733', demoRequired: false,
    notes: 'Single-screen big-text sign app. Type text, pick colors and mode, tap SHOW to display it full screen. No sign-in, no network.' },
  info: {},
} };
for (const [k, v] of Object.entries(L)) out.apple.info[k] = info(v);
for (const [k, base] of Object.entries(MIRRORS)) out.apple.info[k] = info(L[base]);

// validate
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
