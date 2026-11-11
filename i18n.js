// English lives in the markup; this file is the Arabic layer.
// Elements opt in with data-i18n (textContent) or data-i18n-html (innerHTML).

const AR = {
  "skip": "تخطَّ إلى المحتوى",
  "nav.name": "محمد المالكي",
  "nav.work": "الأعمال",
  "nav.about": "نبذة",
  "nav.certs": "الشهادات",
  "nav.ach": "الإنجازات",
  "nav.contact": "تواصل",

  "hero.eyebrow": "متاح للعمل · 2026",
  "hero.name": "محمد المالكي",
  "hero.role": "مهندس ذكاء اصطناعي و<em>باني أنظمة تعلّم آلي</em>",
  "hero.lead": "أبني أنظمة ذكية من البداية إلى النهاية — خطوط بيانات، وتدريب نماذج، ومنتجات مدعومة بالنماذج اللغوية الكبيرة تصل إلى الإنتاج. مقيم في الرياض.",
  "hero.cta1": "استعرض أعمالي",
  "hero.cta2": "تواصل معي",

  "work.title": "أعمال مختارة",
  "work.all": "كل المشاريع",
  "w1.name": "معمار",
  "w1.desc": "يخبرك إن كان سعر العقار المطلوب في السعودية منصفًا، وما الذي يحيط به.",
  "w1.short": "معرفة ما إذا كان سعر العقار منصفًا.",
  "w2.name": "PreCheck",
  "w2.desc": "يخبر عميل البنك مبكرًا إن كان مؤهلًا على الأرجح للحصول على قرض.",
  "w2.short": "معرفة ما إذا كان العميل مؤهلًا للقرض.",
  "w3.name": "mlguard-lint",
  "w3.desc": "يجد الأخطاء الصامتة في شيفرات التعلّم الآلي التي تجعل النتائج تبدو أفضل مما هي عليه.",
  "w3.short": "يجد الأخطاء الصامتة في شيفرات التعلّم الآلي.",
  "w4.name": "اتزان",
  "w4.desc": "يبيّن كيف يؤثر وقت الشاشة على تركيزك ونومك، دون أن ترسل أي بيانات.",
  "w4.short": "كيف يؤثر وقت الشاشة على التركيز والنوم.",
  "w5.name": "EarlyMed لمخاطر القلب",
  "w5.short": "التنبؤ بمخاطر أمراض القلب من الأعراض.",
  "w6.name": "تحليل استكشافي لقطار الحرمين",
  "w6.short": "كيف يستخدم الناس قطار الحرمين.",
  "w7.name": "Person Finder",
  "w7.desc": "اكتب جملة واحدة فيعثر على الشخص، في معرض صور أو مباشرةً وسط حشد.",
  "w7.short": "العثور على شخص في الصور أو الفيديو المباشر من جملة واحدة.",
  "work.more": "المستودعات السبعة كاملة على GitHub",

  "pj.github": "عرض على GitHub",
  "pj.demo": "تجربة مباشرة",
  "p1.about": "بحث عقاري للسعودية يجيب عن سؤال واحد: هل هذا السعر منصف؟ يقارن كل إعلان بعقارات مشابهة قريبة منه، ويعرض ما يقع على مسافة مشي. يغطي نحو 780,000 إعلان في 97 مدينة، ويقدّم تقديرًا لمعظمها.",
  "p2.about": "مساعد بنكي يخبر العميل مبكرًا إن كان مؤهلًا على الأرجح للحصول على قرض. يسأل بضعة أسئلة، ويقارن الإجابات بقواعد ثابتة، ثم يحيل الحالة إلى موظف بشري لاتخاذ القرار النهائي. الذكاء الاصطناعي لا يقرر أبدًا — دوره جمع المعلومات فقط، ليبقى كل قرار قابلًا للتفسير والتتبّع.",
  "p3.about": "قد تفشل شيفرات التعلّم الآلي بصمت: تعمل دون خطأ، وتعطيك نتيجة أفضل من الحقيقة. تقرأ هذه الأداة الشيفرة وتشير إلى موضع الخطأ وسبب أهميته. ترصد 21 خطأً من هذا النوع.",
  "p4.about": "فحص سريع لأثر عاداتك مع الشاشة على تركيزك ونومك. تجيب عن بضعة أسئلة فتحصل على تقدير، مع خطوة عملية واحدة تجرّبها. كل شيء يعمل داخل جهازك، فلا يُرسل ما تكتبه إلى أي مكان.",
  "p5.about": "دراسة للتنبؤ بمخاطر أمراض القلب انطلاقًا من الأعراض وعوامل الخطر. دُرّبت ثمانية نماذج وقُورنت على 70,000 سجل. حقق أفضلها نتيجة عالية جدًا — لكن البيانات مُولّدة لا مأخوذة من مرضى حقيقيين، فهذا تمرين تعليمي لا أداة طبية.",
  "p6.about": "نظرة على الطريقة التي يستخدم بها الناس قطار الحرمين السريع فعلًا. يستعرض 1,350 رحلة — أسعار التذاكر، والمسارات، والتوقيت، ومدى امتلاء القطارات. وأوضح نمط فيها أن السفر يبلغ ذروته بحدة في مايو ويونيو.",
  "p7.about": "اكتب جملة واحدة تصف ملابس شخص ومظهره، فيعثر عليه — في معرض من صور الأشخاص، أو مباشرةً في فيديو لحشد من الناس. نموذج تضمين واحد، EmbeddingGemma-2، يقرأ الكلمات والصور معًا في الفضاء نفسه، وقد ضبطتُه بالتعلّم التبايني على 37,010 أزواج من الجمل والصور. وفي الفيديو يرصد YOLO26 الأشخاص، ويتتبّعهم ByteTrack، ويُحاط الأكثر مطابقةً بإطار، بنحو 26 إطارًا في الثانية على بطاقة رسومية واحدة.",
  "p7.results": "على 200 شخص لم يرهم النموذج أثناء التدريب، رفع الضبط الدقيق دقة التخمين الأول من 40.1% إلى 71.4%، وظهر الشخص الصحيح ضمن أول عشر نتائج في 93.2% من الحالات — متقدمًا على طرق منشورة مثل APTM وRDE وIRRA على مجموعة اختبار RSTPReid نفسها. واختُبر كذلك على لقطات حقيقية من مركز تجاري تضم حتى 53 شخصًا في الإطار الواحد. هذه شيفرة بحثية على بيانات عامة، والبحث في لقطات حقيقية يتطلب الموافقة ومراجعًا بشريًا يتحقق من كل مطابقة.",

  "about.title": "نبذة",
  "about.meta": "النهج والمهارات",
  "about.quote": "”النماذج هي الجزء السهل — أنا أبني الأنظمة من حولها التي تجعل الذكاء مفيدًا.“",
  "about.bio1": "أنا مهندس ذكاء اصطناعي مقيم في الرياض. من اكتشاف الأنماط في البيانات إلى بناء أدوات يستخدمها الآخرون، يربط عملي بين الفضول والتنفيذ — أجمع فيه بين التعلّم الآلي والأتمتة الذكية وهندسة البرمجيات لأحوّل الأفكار الطموحة إلى تطبيقات ذات غاية واضحة.",
  "about.bio2": "وقد تجسّد ذلك مؤخرًا في نظام يعثر على الأشخاص من وصف مكتوب، ضبطتُ فيه EmbeddingGemma-2 ليتفوّق على طرق منشورة مع أشخاص لم يرهم من قبل، ووكيل ثنائي اللغة لفحص الأهلية للتمويل قدتُ فريقه في هاكاثون أمد للتقنية المالية، وخريطة لأسعار العقارات في السعودية، وتطبيق يعمل على الجهاز يربط عادات الشاشة بالتركيز والنوم. وأدرس حاليًا ضمن الدفعة الثانية من برنامج علوم البيانات والذكاء الاصطناعي في أكاديمية طويق، بعد بكالوريوس نظم المعلومات من جامعة أم القرى.",
  "edu.title": "التعليم",
  "edu.diploma": "دبلوم علوم البيانات والذكاء الاصطناعي",
  "edu.academy": "أكاديمية طويق، الرياض · أبريل 2026 – حتى الآن",
  "edu.degree": "بكالوريوس نظم المعلومات",
  "edu.meta": "جامعة أم القرى، مكة المكرمة · 2020 – 2025",
  "lang.title": "اللغات",
  "lang.ar": "العربية · اللغة الأم",
  "lang.en": "الإنجليزية · ممتازة",
  "caps.ml.title": "التعلّم الآلي",
  "caps.ml.1": "PyTorch · الضبط الدقيق",
  "caps.ml.2": "scikit-learn · XGBoost",
  "caps.ml.3": "Python · Pandas · NumPy",
  "caps.ml.4": "تقييم النماذج",
  "caps.cv.title": "الرؤية واللغة",
  "caps.cv.1": "YOLO · CNNs",
  "caps.cv.2": "Transformers · التضمينات",
  "caps.cv.3": "تصنيف الصور",
  "caps.cv.4": "النمذجة اللغوية",
  "caps.agent.title": "الذكاء الاصطناعي الوكيلي",
  "caps.agent.1": "LangGraph · Ollama",
  "caps.agent.2": "MCP · استدعاء الأدوات",
  "caps.agent.3": "مسارات عمل قائمة على القواعد",
  "caps.agent.4": "Claude Code · Codex",
  "caps.ship.title": "النشر",
  "caps.ship.1": "FastAPI · Streamlit",
  "caps.ship.2": "ONNX · داخل المتصفح",
  "caps.ship.3": "Git · GitHub",
  "caps.ship.4": "Matplotlib · Seaborn",

  "certs.title": "الشهادات",
  "certs.meta": "اعتمادات موثّقة · 2026",
  "c1.name": "بناء تطبيقات معالجة اللغة الطبيعية المبنية على Transformer",
  "c1.issuer": "NVIDIA Deep Learning Institute",
  "c2.name": "هاكاثون التدريب على الذكاء الاصطناعي",
  "c2.issuer": "كنز AI · LAU ACE",

  "ach.title": "الإنجازات",
  "ach.meta": "أبرز المحطات",
  "a1.title": "هاكاثون أمد 2026",
  "a1.desc": "بنيتُ PreCheck ضمن مسار الذكاء الاصطناعي التوليدي للتقنية المالية — مساعد إقراض قابل للتدقيق، مع فريق MMYR.",
  "a2.title": "هاكاثون التدريب على الذكاء الاصطناعي",
  "a2.desc": "أتممتُ برنامج كنز AI مع LAU ACE ووزارة الموارد البشرية والتنمية الاجتماعية، وأطلقتُ خلاله مشروع ذكاء اصطناعي من تصميمي.",

  "contact.eyebrow": "تواصل",
  "contact.title": "لنبنِ<br>شيئًا ذكيًا.",

  "footer.name": "محمد المالكي",
  "footer.type": "صُفّ بخط",
  "footer.font": "ثمانية",
  "footer.top": "العودة إلى الأعلى",
};

const META = {
  en: {
    title: "Mohammad Almalke — AI Engineer",
    desc: "Mohammad Almalke — AI engineer building machine-learning and LLM systems, from data to production.",
  },
  ar: {
    title: "محمد المالكي — مهندس ذكاء اصطناعي",
    desc: "محمد المالكي — مهندس ذكاء اصطناعي يبني أنظمة تعلّم آلي ونماذج لغوية كبيرة، من البيانات إلى الإنتاج.",
  },
};

// English snapshot, captured from the DOM before the first swap to Arabic.
let EN = null;

function snapshotEnglish() {
  const dict = {};
  for (const el of document.querySelectorAll("[data-i18n]")) dict[el.getAttribute("data-i18n")] = el.textContent;
  for (const el of document.querySelectorAll("[data-i18n-html]")) dict[el.getAttribute("data-i18n-html")] = el.innerHTML;
  return dict;
}

function applyLang(lang) {
  if (!EN) EN = snapshotEnglish();
  const dict = lang === "ar" ? AR : EN;
  for (const el of document.querySelectorAll("[data-i18n]")) {
    const v = dict[el.getAttribute("data-i18n")];
    if (v != null) el.textContent = v;
  }
  for (const el of document.querySelectorAll("[data-i18n-html]")) {
    const v = dict[el.getAttribute("data-i18n-html")];
    if (v != null) el.innerHTML = v;
  }
  const root = document.documentElement;
  root.lang = lang;
  root.dir = lang === "ar" ? "rtl" : "ltr";
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').setAttribute("content", META[lang].desc);
  const btn = document.getElementById("lang-toggle");
  btn.textContent = lang === "ar" ? "EN" : "عربي";
  btn.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل إلى العربية");
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = document.documentElement.lang === "ar" ? "en" : "ar";
  applyLang(next);
  try { localStorage.setItem("lang", next); } catch (e) {}
});

// The pre-paint <head> script only flips lang/dir; swap the text once the DOM is ready.
if (document.documentElement.lang === "ar") applyLang("ar");
