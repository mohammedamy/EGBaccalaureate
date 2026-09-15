import type { ChapterDatabank } from '../../../types/curriculum';

export const physCh6Databank: ChapterDatabank = {
  easy: [
  {
    "id": "phys_ch6_db_easy_01",
    "titleEn": "Bohr Hydrogen Energy Level Expression",
    "titleAr": "صيغة طاقة مستويات ذرة الهيدروجين لبور",
    "difficulty": "easy",
    "questionEn": "According to Niels Bohr's atomic model, the energy $E_n$ of the $n$-th stationary orbit in a hydrogen atom is given in electron-volts by:",
    "questionAr": "وفقاً لنموذج بور لذرة الهيدروجين، تعطى طاقة المستوى الرئيسي رقم $n$ بوحدة الإلكترون فولت بالعلاقة:",
    "optionsEn": [
      "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$",
      "$E_n = -\\frac{13.6}{n}\\text{ eV}$",
      "$E_n = -13.6 \\times n^2\\text{ eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\text{ eV}$"
    ],
    "optionsAr": [
      "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$",
      "$E_n = -\\frac{13.6}{n}\\text{ eV}$",
      "$E_n = -13.6 \\times n^2\\text{ eV}$",
      "$E_n = +\\frac{13.6}{n^2}\\text{ eV}$"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "Ground state ($n=1$) energy is $-13.6\\text{ eV}$.",
    "hintAr": "طاقة المستوى الأول هي $-13.6\\text{ eV}$ وتتناسب عكسياً مع مربع رقم المستوى.",
    "stepByStepSolutionEn": [
      "Bohr's formula specifies that electron bound energy is $E_n = -\\frac{13.6}{n^2}\\text{ eV}$. The negative sign indicates that the electron is bound by the Coulomb attractive field of the nucleus."
    ],
    "stepByStepSolutionAr": [
      "طاقة المستوى في ذرة الهيدروجين هي $E_n = -\\frac{13.6}{n^2}\\text{ eV}$، والإشارة السالبة تدل على أن الإلكترون مقيد بقوة جذب النواة ويلزم بذل شغل لتحريره."
    ],
    "teacherTipEn": "To liberate the electron from ground state ($n=1$) to infinity requires the ionization energy $+13.6\\text{ eV}$.",
    "teacherTipAr": "طاقة التأين اللازمة لتحرير الإلكترون نهائياً من المستوى الأول هي $+13.6\\text{ eV}$."
  },
  {
    "id": "phys_ch6_db_easy_02",
    "titleEn": "Lyman Series Spectral Region",
    "titleAr": "المنطقة الطيفية لمتسلسلة ليمان",
    "difficulty": "easy",
    "questionEn": "In the emission spectrum of the hydrogen atom, the Lyman series of spectral lines lies entirely in the:",
    "questionAr": "في طيف انبعاث ذرة الهيدروجين، تقع خطوط متسلسلة ليمان بالكامل في نطاق:",
    "optionsEn": [
      "Visible light region, resulting from transitions down to the second level ($n = 2$)",
      "Ultraviolet (UV) region, resulting from electronic transitions down to the first level ($n = 1$)",
      "Infrared region, resulting from transitions down to the third level ($n = 3$)",
      "X-ray region, resulting from transitions down to the nucleus"
    ],
    "optionsAr": [
      "منطقة الضوء المرئي، وتنتج عن الهبوط للمستوى الثاني ($n = 2$)",
      "منطقة الأشعة فوق البنفسجية، وتنتج عن هبوط الإلكترونات إلى المستوى الأول ($n = 1$)",
      "منطقة الأشعة تحت الحمراء، وتنتج عن الهبوط للمستوى الثالث ($n = 3$)",
      "منطقة الأشعة السينية، وتنتج عن السقوط داخل النواة"
    ],
    "correctAnswer": "Ultraviolet (UV) region, resulting from electronic transitions down to the first level ($n = 1$)",
    "correctIndex": 1,
    "hintEn": "Lyman transitions end at the lowest level $n=1$, releasing highest photon energy.",
    "hintAr": "متسلسلة ليمان تهبط إلى المستوى الأول ($n=1$) وتمتلك أعلى طاقة وتردد في أطياف الهيدروجين.",
    "stepByStepSolutionEn": [
      "Transitions from upper levels ($n = 2, 3, 4, \\dots$) to $n = 1$ release the largest energy differences in hydrogen, producing photons with frequencies in the ultraviolet region."
    ],
    "stepByStepSolutionAr": [
      "تنتج متسلسلة ليمان عند عودة الإلكترونات المثارة من المستويات العليا إلى المستوى الأول ($n=1$)، وتكون فرق الطاقة كبيراً فينتج إشعاع عالي التردد يقع في نطاق الأشعة فوق البنفسجية."
    ],
    "teacherTipEn": "Lyman series has the highest frequencies and shortest wavelengths among all hydrogen series.",
    "teacherTipAr": "متسلسلة ليمان هي أعلى متسلسلات الهيدروجين في الطاقة والتردد وأقصرها في الطول الموجي."
  },
  {
    "id": "phys_ch6_db_easy_03",
    "titleEn": "Balmer Series Spectral Region",
    "titleAr": "المنطقة الطيفية لمتسلسلة بالمر",
    "difficulty": "easy",
    "questionEn": "The ONLY hydrogen spectral series whose lines fall in the visible light spectrum detectable by the human eye is:",
    "questionAr": "المتسلسلة الوحيدة في طيف ذرة الهيدروجين التي تقع خطوطها في نطاق الضوء المرئي وتراها العين هي:",
    "optionsEn": [
      "Lyman series (transitions down to $n = 1$)",
      "Paschen series (transitions down to $n = 3$)",
      "Balmer series (transitions down to $n = 2$)",
      "Pfund series (transitions down to $n = 5$)"
    ],
    "optionsAr": [
      "متسلسلة ليمان (الانتقال إلى المستوى الأول $n = 1$)",
      "متسلسلة باشن (الانتقال إلى المستوى الثالث $n = 3$)",
      "متسلسلة بالمر (الانتقال إلى المستوى الثاني $n = 2$)",
      "متسلسلة بفوند (الانتقال إلى المستوى الخامس $n = 5$)"
    ],
    "correctAnswer": "Balmer series (transitions down to $n = 2$)",
    "correctIndex": 2,
    "hintEn": "Transitions to $n=2$ produce visible lines: red, blue-green, blue, violet.",
    "hintAr": "الانتقالات إلى المستوى الثاني تعطي الخطوط المرئية الأربعة المشهورة.",
    "stepByStepSolutionEn": [
      "Balmer series lines correspond to electronic de-excitations to the second orbit ($n = 2$). The resulting transitions ($3 \\to 2$ red, $4 \\to 2$ green-blue, $5 \\to 2$ blue, $6 \\to 2$ violet) fall in the visible spectrum ($400-700\\text{ nm}$)."
    ],
    "stepByStepSolutionAr": [
      "تنتج متسلسلة بالمر عند عودة الإلكترونات إلى المستوى الثاني ($n=2$). وتشمل الخطوط الأربعة المرئية لطيف الهيدروجين: الأحمر والأخضر المزرق والأزرق والبنفسجي."
    ],
    "teacherTipEn": "The $3 \\to 2$ transition is known as the $\\text{H}_\\alpha$ red line ($656.3\\text{ nm}$).",
    "teacherTipAr": "الانتقال من $3 \\to 2$ يسمى خط ألفا الأحمر وهو أشهر خطوط طيف الهيدروجين المرئي."
  },
  {
    "id": "phys_ch6_db_easy_04",
    "titleEn": "Paschen Series Classification",
    "titleAr": "تصنيف متسلسلة باشن",
    "difficulty": "easy",
    "questionEn": "Transitions of excited electrons in a hydrogen atom down to the third principal energy level ($n = 3$) form:",
    "questionAr": "انتقال الإلكترونات المثارة في ذرة الهيدروجين إلى المستوى الرئيسي الثالث ($n = 3$) يكون:",
    "optionsEn": [
      "Brackett series, located in the microwave region",
      "Lyman series, located in the ultraviolet region",
      "Balmer series, located in the gamma-ray region",
      "Paschen series, located in the infrared region"
    ],
    "optionsAr": [
      "متسلسلة براكت، وتقع في نطاق الموجات الميكروية",
      "متسلسلة ليمان، وتقع في نطاق الأشعة فوق البنفسجية",
      "متسلسلة بالمر، وتقع في نطاق أشعة جاما",
      "متسلسلة باشن، وتقع في نطاق الأشعة تحت الحمراء"
    ],
    "correctAnswer": "Paschen series, located in the infrared region",
    "correctIndex": 3,
    "hintEn": "Transitions to $n=3$ lie in the near infrared.",
    "hintAr": "الهبوط إلى المستوى الثالث باشن يقع في الأشعة تحت الحمراء القريبة.",
    "stepByStepSolutionEn": [
      "Electrons de-exciting to $n = 3$ emit photons with energy $\\Delta E = E_n - E_3$. These moderate energy differences place Paschen series in the near-infrared spectrum."
    ],
    "stepByStepSolutionAr": [
      "عودة الإلكترونات من المستويات العليا إلى المستوى الثالث ($n=3$) تطلق فوتونات طاقتها تقع في نطاق الأشعة تحت الحمراء وتسمى متسلسلة باشن."
    ],
    "teacherTipEn": "Series sequence by level: Lyman ($n=1$), Balmer ($n=2$), Paschen ($n=3$), Brackett ($n=4$), Pfund ($n=5$).",
    "teacherTipAr": "ترتيب المتسلسلات حسب المستوى النهائي: ليمان (1)، بالمر (2)، باشن (3)، براكت (4)، بفوند (5)."
  },
  {
    "id": "phys_ch6_db_easy_05",
    "titleEn": "Pfund Series Characteristic Energy and Wavelength",
    "titleAr": "خصائص متسلسلة بفوند من حيث الطاقة والتردد",
    "difficulty": "easy",
    "questionEn": "Among all five spectral series of the hydrogen atom, the series with the LOWEST photon frequencies and LONGEST wavelengths is:",
    "questionAr": "من بين متسلسلات طيف ذرة الهيدروجين الخمس، المتسلسلة التي تمتلك أقل ترددات وأطول أطوال موجية هي:",
    "optionsEn": [
      "Pfund series (transitions down to $n = 5$ in the far infrared)",
      "Lyman series (transitions down to $n = 1$)",
      "Balmer series (transitions down to $n = 2$)",
      "Brackett series (transitions down to $n = 4$)"
    ],
    "optionsAr": [
      "متسلسلة بفوند (الانتقال إلى المستوى الخامس $n = 5$ في الأشعة تحت الحمراء البعيدة)",
      "متسلسلة ليمان (الانتقال إلى المستوى الأول $n = 1$)",
      "متسلسلة بالمر (الانتقال إلى المستوى الثاني $n = 2$)",
      "متسلسلة براكت (الانتقال إلى المستوى الرابع $n = 4$)"
    ],
    "correctAnswer": "Pfund series (transitions down to $n = 5$ in the far infrared)",
    "correctIndex": 0,
    "hintEn": "Upper levels are close together, releasing smallest energy differences.",
    "hintAr": "المستويات العليا متقاربة في الطاقة فتكون فروق الطاقة المنبعثة صغيرة جداً.",
    "stepByStepSolutionEn": [
      "Because the energy levels of hydrogen converge as $n$ increases, energy differences terminating at $n = 5$ are the smallest of all series. Small $\\Delta E = h\\nu$ means lowest frequencies $\\nu$ and longest wavelengths $\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "كلما ابتعدنا عن النواة تقاربت طاقات المستويات، ولذلك فإن الانتقالات الهابطة للمستوى الخامس ($n=5$) تطلق أصغر كمات طاقة وأقل ترددات وأطول أطوال موجية (متسلسلة بفوند في الأشعة تحت الحمراء البعيدة)."
    ],
    "teacherTipEn": "Summary: Lyman has maximum energy/frequency; Pfund has minimum energy/frequency.",
    "teacherTipAr": "ملخص: ليمان تمتلك أعلى طاقة وتردد، وبفوند تمتلك أقل طاقة وتردد."
  },
  {
    "id": "phys_ch6_db_easy_06",
    "titleEn": "Bohr Orbit Circumference and de Broglie Standing Wave",
    "titleAr": "محيط مدار بور والأمواج الموقوفة لدي برولي",
    "difficulty": "easy",
    "questionEn": "According to de Broglie's standing wave condition applied to Bohr orbits, the circumference of the $n$-th electron orbit is related to wavelength $\\lambda$ by:",
    "questionAr": "وفقاً لفرض دي برولي للأمواج الموقوفة المصاحبة لإلكترون في مدارات بور، فإن محيط المدار رقم $n$ يرتبط بالطول الموجي $\\lambda$ بالعلاقة:",
    "optionsEn": [
      "$2\\pi r = \\frac{\\lambda}{n}$",
      "$2\\pi r = n \\lambda$",
      "$\\pi r^2 = n \\lambda$",
      "$2\\pi r = n^2 \\lambda$"
    ],
    "optionsAr": [
      "$2\\pi r = \\frac{\\lambda}{n}$",
      "$2\\pi r = n \\lambda$",
      "$\\pi r^2 = n \\lambda$",
      "$2\\pi r = n^2 \\lambda$"
    ],
    "correctAnswer": "$2\\pi r = n \\lambda$",
    "correctIndex": 1,
    "hintEn": "Circumference contains an integral number of wavelengths.",
    "hintAr": "محيط المدار المستقر يساوي عدداً صحيحاً من أطوال موجات دي برولي.",
    "stepByStepSolutionEn": [
      "For a stable standing wave in an electron orbit, the circumference must fit an integer number of de Broglie wavelengths ($2\\pi r = n\\lambda$). This provides physical justification for Bohr's quantization condition $m v r = n \\frac{h}{2\\pi}$."
    ],
    "stepByStepSolutionAr": [
      "لكي يكون المدار مستقراً، يجب أن تتكون موجة موقوفة يكون فيها محيط المدار مساوياً لعدد صحيح من أطوال موجات دي برولي المصاحبة لحركة الإلكترون: $2\\pi r = n\\lambda$."
    ],
    "teacherTipEn": "The integer $n$ equals both the principal quantum number and the number of wave loops divided by 2 (or total complete waves).",
    "teacherTipAr": "العدد $n$ يمثل في نفس الوقت رقم المدار وعدد الموجات الموقوفة الكاملة في المدار."
  },
  {
    "id": "phys_ch6_db_easy_07",
    "titleEn": "Collimator Function in a Spectrometer",
    "titleAr": "وظيفة المجمع في جهاز المطياف (الاسبكترومتر)",
    "difficulty": "easy",
    "questionEn": "The collimator of a prism spectrometer consists of an adjustable slit at the focal plane of an achromatic convex lens. Its primary function is to:",
    "questionAr": "يتكون مجمع المطياف (الاسبكترومتر) من فتحة مستطيلة ضيقة قابلة للضبط تقع في بؤرة عدسة محدبة. وظيفته الأساسية هي:",
    "optionsEn": [
      "Magnify the spectrum image for human viewing",
      "Convert light directly into electric current",
      "Produce a parallel beam of light rays that falls upon the prism face",
      "Reflect 100% of light back to the source"
    ],
    "optionsAr": [
      "تكبير صورة الطيف لرؤيتها بالعين",
      "تحويل الضوء مباشرة إلى تيار كهربي",
      "إنتاج حزمة من الأشعة الضوئية المتوازية تسقط على وجه المنشور",
      "عكس كل الضوء وإعادته للمصدر"
    ],
    "correctAnswer": "Produce a parallel beam of light rays that falls upon the prism face",
    "correctIndex": 2,
    "hintEn": "A source at the focus of a convex lens produces parallel emergent rays.",
    "hintAr": "وضع المصدر في بؤرة العدسة المحدبة يجعل الأشعة تنفذ منها متوازية.",
    "stepByStepSolutionEn": [
      "When the slit is positioned at the principal focus of the collimator's convex lens, the emergent light rays become parallel. A parallel beam entering the prism is essential to obtain a pure, sharply dispersed spectrum."
    ],
    "stepByStepSolutionAr": [
      "بوضع الفتحة الضيقة في بؤرة العدسة المحدبة للمجمع، تخرج الأشعة الضوئية منها متوازية وتسقط على وجه المنشور، وهو شرط أساسي للحصول على طيف نقي."
    ],
    "teacherTipEn": "Three main parts of a spectrometer: Collimator (produces parallel rays), Prism Table (disperses colors), Telescope (focuses each color to a line).",
    "teacherTipAr": "المطياف يتكون من 3 أجزاء رئيسية: المجمع (يوازي الأشعة)، منضدة المنشور (تشتت الألوان)، والتلسكوب (يركز كل لون في بؤرة خاصة)."
  },
  {
    "id": "phys_ch6_db_easy_08",
    "titleEn": "Condition for Obtaining a Pure Spectrum",
    "titleAr": "شرط الحصول على طيف نقي بواسطة الاسبكترومتر",
    "difficulty": "easy",
    "questionEn": "A spectrum is defined as 'pure' when its colors are completely separated without overlapping. This requires that:",
    "questionAr": "يوصف الطيف بأنه 'طيف نقي' عندما تنفصل ألوانه تماماً دون تداخل. ويتحقق ذلك عندما:",
    "optionsEn": [
      "The light source is monochromatic laser light only",
      "The slit is made as wide as possible to let in maximum light",
      "The prism is coated with black paint",
      "The prism is in the position of minimum deviation, and each color is focused by the telescope objective at a separate point in its focal plane"
    ],
    "optionsAr": [
      "يكون مصدر الضوء ليزراً أحادي اللون فقط",
      "فتح الفتحة الضيقة لأقصى اتساع ممكن لإدخال أكبر قدر من الضوء",
      "طلاء المنشور بلون أسود معتم",
      "يكون المنشور في وضع النهاية الصغرى للانحراف، وتركز عدسة التلسكوب كل لون في بؤرة خاصة به في مستواها البؤري"
    ],
    "correctAnswer": "The prism is in the position of minimum deviation, and each color is focused by the telescope objective at a separate point in its focal plane",
    "correctIndex": 3,
    "hintEn": "Prism in minimum deviation + parallel rays focused separately = pure spectrum.",
    "hintAr": "وضع النهاية الصغرى للانحراف + تركيز كل لون في بؤرة مستقلة = طيف نقي.",
    "stepByStepSolutionEn": [
      "To obtain a pure spectrum: (1) Rays from the collimator must be parallel; (2) The prism must be adjusted to the position of minimum deviation; (3) The objective lens of the telescope must focus the parallel rays of each color into a distinct monochromatic line image of the slit at its focal plane."
    ],
    "stepByStepSolutionAr": [
      "شروط الحصول على طيف نقي: 1- خروج الأشعة متوازية من المجمع، 2- ضبط المنشور في وضع النهاية الصغرى للانحراف، 3- تجميع أشعة كل لون متوازية بواسطة عدسة التلسكوب الشيئية في بؤرة خاصة بها."
    ],
    "teacherTipEn": "In a pure spectrum, spectral lines do not overlap, allowing precise measurement of wavelengths and chemical identification.",
    "teacherTipAr": "في الطيف النقي تنفصل الخطوط الطيفية تماماً دون أي تداخل في ألوانها مما يسهل تحليلها."
  },
  {
    "id": "phys_ch6_db_easy_09",
    "titleEn": "Continuous Emission Spectrum Characteristics",
    "titleAr": "خصائص ومصدر الطيف المستمر",
    "difficulty": "easy",
    "questionEn": "Which of the following sources produces a continuous emission spectrum containing an unbroken distribution of all wavelengths?",
    "questionAr": "أي المصادر التالية يبعث طيف انبعاث مستمر يحتوي على توزيع متصل لجميع الأطوال الموجية دون فواصل؟",
    "optionsEn": [
      "A glowing solid tungsten filament lamp or the core of the Sun",
      "A neon discharge tube at low pressure",
      "A hydrogen gas discharge lamp",
      "A helium-neon laser beam"
    ],
    "optionsAr": [
      "مصباح فتيلة التنجستن المتوهج أو باطن الشمس المتوهج",
      "أنبوبة تفريغ غاز النيون تحت ضغط منخفض",
      "مصباح تفريغ غاز الهيدروجين",
      "شعاع ليزر الهيليوم-نيون"
    ],
    "correctAnswer": "A glowing solid tungsten filament lamp or the core of the Sun",
    "correctIndex": 0,
    "hintEn": "Dense, heated solids, liquids, or dense gases radiate continuous spectra.",
    "hintAr": "الأجسام الصلبة المتوهجة تشع طيفاً مستمراً لجميع الألوان متصلة.",
    "stepByStepSolutionEn": [
      "Heated incandescent solids (like tungsten filaments) emit continuous spectra because dense atomic packing causes discrete atomic energy levels to broaden into continuous energy bands, radiating all wavelengths smoothly."
    ],
    "stepByStepSolutionAr": [
      "الأجسام الصلبة أو السائلة المتوهجة تبعث طيفاً مستمراً يتضمن توزيعاً متصلاً لجميع الترددات والأطوال الموجية دون فواصل، مثل فتيلة مصباح التنجستن المتوهجة."
    ],
    "teacherTipEn": "A rainbow produced by white light dispersion is a classic example of a continuous spectrum.",
    "teacherTipAr": "قوس قزح الناتج عن تحلل ضوء الشمس الأبيض مثال كلاسيكي للطيف المستمر."
  },
  {
    "id": "phys_ch6_db_easy_10",
    "titleEn": "Line Emission Spectrum Characteristics",
    "titleAr": "خصائص ومصدر طيف الانبعاث الخطي",
    "difficulty": "easy",
    "questionEn": "A line emission spectrum consisting of sharp, discrete bright lines separated by dark spaces is emitted by:",
    "questionAr": "طيف الانبعاث الخطي المكون من خطوط مضيئة حادة ومحددة تفصلها مساحات مظلمة ينبعث من:",
    "optionsEn": [
      "Incandescent solid metals at high temperatures",
      "Gases and atomic vapors in an excited state under low pressure",
      "Molten iron in a blast furnace",
      "Liquid water boiling in a transparent beaker"
    ],
    "optionsAr": [
      "المعادن الصلبة المتوهجة عند درجات حرارة عالية",
      "الغازات والأبخرة الذرية في حالة إثارة تحت ضغط منخفض",
      "الحديد المنصهر في الأفران العالية",
      "الماء السائل المغلي في دورق شفاف"
    ],
    "correctAnswer": "Gases and atomic vapors in an excited state under low pressure",
    "correctIndex": 1,
    "hintEn": "Isolated atoms under low pressure de-excite between discrete quantum levels.",
    "hintAr": "الغازات المتوهجة تحت ضغط منخفض تشع طيفاً خطياً مميزاً لنوع ذراتها.",
    "stepByStepSolutionEn": [
      "When a gas or vapor at low pressure is excited (by electric discharge or heating), its isolated atoms undergo transitions between discrete quantum energy levels. Each de-excitation emits a photon of characteristic frequency, appearing as a sharp bright line."
    ],
    "stepByStepSolutionAr": [
      "عند إثارة الغازات أو الأبخرة الذرية تحت ضغط منخفض (بالتفريغ الكهربي مثلاً)، تعود الإلكترونات بين مستويات الطاقة المنفصلة فتطلق فوتونات ذات ترددات محددة تظهر كخطوط ملونة مضيئة على أرضية مظلمة."
    ],
    "teacherTipEn": "A line emission spectrum is the unique 'atomic fingerprint' of each chemical element.",
    "teacherTipAr": "الطيف الخطي خاصية مميزة للعنصر الذري، ويعتبر بمثابة بصمة الإصبع المميزة للذرة."
  },
  {
    "id": "phys_ch6_db_easy_11",
    "titleEn": "Fraunhofer Lines Nature and Origin",
    "titleAr": "طبيعة وأصل خطوط فرانهوفر في طيف الشمس",
    "difficulty": "easy",
    "questionEn": "Fraunhofer lines observed in the solar spectrum are scientifically classified as:",
    "questionAr": "خطوط فرانهوفر المظلمة التي تم رصدها في طيف ضوء الشمس تصنف علمياً بأنها:",
    "optionsEn": [
      "Line emission spectra from volcanic eruptions on Mercury",
      "Continuous emission spectra from sunspots",
      "Line absorption spectra produced when continuous solar core radiation passes through cooler gases (mainly Hydrogen and Helium) in the solar atmosphere",
      "Diffraction artifacts caused by moisture in Earth's clouds"
    ],
    "optionsAr": [
      "أطياف انبعاث خطية من ثورات بركانية على كوكب عطارد",
      "أطياف انبعاث مستمرة من البقع الشمسية",
      "أطياف امتصاص خطية نتجت عن مرور إشعاع الشمس المستمر عبر غازات أبرد (الهيدروجين والهيليوم أساساً) في جو الشمس",
      "عيوب حيود ناتجة عن رطوبة السحب في الغلاف الجوي الأرضي"
    ],
    "correctAnswer": "Line absorption spectra produced when continuous solar core radiation passes through cooler gases (mainly Hydrogen and Helium) in the solar atmosphere",
    "correctIndex": 2,
    "hintEn": "Cool gas absorbs the exact same wavelengths that it would emit when excited.",
    "hintAr": "خطوط امتصاص خطية للعناصر الموجودة في الغلاف الخارجي للشمس (الهيدروجين والهيليوم).",
    "stepByStepSolutionEn": [
      "The solar interior emits a continuous spectrum. As this light passes through the cooler outer solar atmosphere (photosphere/chromosphere), elements such as Hydrogen and Helium absorb the exact characteristic wavelengths that they emit when excited, leaving dark lines in the transmitted spectrum."
    ],
    "stepByStepSolutionAr": [
      "باطن الشمس يشع طيفاً مستمراً، وأثناء مروره خلال جو الشمس الخارجي الأقل حرارة، تمتص الغازات الموجودة فيه (الهيدروجين والهيليوم أساساً) الأطوال الموجية الخاصة بها والتي تميز طيف انبعاثها الخطي، فتظهر خطوط معتمة تسمى خطوط فرانهوفر."
    ],
    "teacherTipEn": "Fraunhofer lines enabled scientists to discover Helium on the Sun before it was ever discovered on Earth.",
    "teacherTipAr": "أتاحت خطوط فرانهوفر للعلماء اكتشاف وجود عنصر الهيليوم في الشمس قبل عزله واكتشافه على الأرض."
  },
  {
    "id": "phys_ch6_db_easy_12",
    "titleEn": "Components of the Coolidge X-Ray Tube",
    "titleAr": "المكونات الأساسية لأنبوبة كولدج لتوليد الأشعة السينية",
    "difficulty": "easy",
    "questionEn": "In a Coolidge tube used to produce X-rays, the fast electrons are emitted by:",
    "questionAr": "في أنبوبة كولدج المستخدمة لتوليد الأشعة السينية، تنبعث الإلكترونات السريعة من:",
    "optionsEn": [
      "A cold uranium block via spontaneous radioactive decay",
      "A laser beam focused on a glass mirror",
      "A piezoelectric quartz crystal vibrating at ultrasound frequencies",
      "A heated tungsten filament cathode via thermionic emission, then accelerated toward a heavy metal target anode"
    ],
    "optionsAr": [
      "كتلة يورانيوم باردة بالانحلال الإشعاعي التلقائي",
      "حزمة ليزر مركزة على مرآة زجاجية",
      "بلورة كوارتز تتذبذب بترددات فوق صوتية",
      "فتيلة تنجستن ساخنة (المهبط) بالانبعاث الكهروحراري، ثم تعجل نحو هدف معدني ثقيل (المصعد)"
    ],
    "correctAnswer": "A heated tungsten filament cathode via thermionic emission, then accelerated toward a heavy metal target anode",
    "correctIndex": 3,
    "hintEn": "Filament emits electrons; high voltage accelerates them; heavy target stops them.",
    "hintAr": "الفتيلة تطلق الإلكترونات بالتسخين وفرق الجهد العالي يعجلها لتصطدم بمعدن الهدف.",
    "stepByStepSolutionEn": [
      "The Coolidge tube has three vital parts: (1) A heated tungsten filament emitting electrons thermionically; (2) A high DC potential difference ($10-100\\text{ kV}$) accelerating the electrons; (3) A target made of a high melting-point, high-Z metal (like tungsten) that halts the electrons, converting kinetic energy into X-rays and heat."
    ],
    "stepByStepSolutionAr": [
      "تتكون أنبوبة كولدج من: 1- فتيلة تنجستن تبعث إلكترونات بالتسخين (الانبعاث الكهروحراري)، 2- فرق جهد عالٍ جداً يعجل الإلكترونات، 3- هدف من التنجستن ذو عدد ذري كبير ودرجة انصهار عالية يصطدم به الإلكترونات لتوليد الأشعة السينية."
    ],
    "teacherTipEn": "Over 98% of the electron kinetic energy in a Coolidge tube is converted into waste heat, requiring copper cooling fins.",
    "teacherTipAr": "أكثر من 98% من طاقة الإلكترونات تتحول إلى حرارة تفقد في الهدف، لذلك يزود بريش تبريد نحاسية."
  },
  {
    "id": "phys_ch6_db_easy_13",
    "titleEn": "Origin of Continuous X-Ray Radiation (Bremsstrahlung)",
    "titleAr": "أصل وطبيعة الطيف المستمر للأشعة السينية (إشعاع الكبح)",
    "difficulty": "easy",
    "questionEn": "The continuous spectrum of X-rays (known as Bremsstrahlung or deceleration radiation) is produced when:",
    "questionAr": "ينتج الطيف المستمر للأشعة السينية (المعروف بإشعاع الكبح أو الإشعاع اللين) عندما:",
    "optionsEn": [
      "Fast projectile electrons pass near heavy target nuclei and decelerate due to strong electric repulsion/attraction, releasing their lost kinetic energy as photons",
      "An electron falls from an outer orbit to an inner shell in the target atom",
      "Target atoms undergo spontaneous nuclear fission",
      "Visible light reflects off the tube glass wall"
    ],
    "optionsAr": [
      "تمر الإلكترونات السريعة المقذوفة قرب أنوية ذرات الهدف وتتباطأ سرعتها نتيجة قوى التنافر والتجاذب الكهربي، فتشع طاقتها المفقودة في صورة فوتونات",
      "يهبط إلكترون من مستوى خارجي إلى مستوى داخلي شاغر في ذرة الهدف",
      "تتعرض ذرات الهدف لانشطار نووي تلقائي",
      "ينعكس الضوء المرئي عن الجدار الزجاجي للأنبوبة"
    ],
    "correctAnswer": "Fast projectile electrons pass near heavy target nuclei and decelerate due to strong electric repulsion/attraction, releasing their lost kinetic energy as photons",
    "correctIndex": 0,
    "hintEn": "Deceleration of charges produces electromagnetic radiation.",
    "hintAr": "تباطؤ حركة الإلكترونات السريعة عند اقترابها من ذرات الهدف يطلق طاقة كهرومغناطيسية مستمرة.",
    "stepByStepSolutionEn": [
      "When high-speed electrons penetrate the target, the intense Coulomb field of target nuclei decelerates them. According to Maxwell's electromagnetic theory, any decelerating charge must radiate electromagnetic energy. Because electrons lose varying amounts of kinetic energy in multiple collisions, a continuous spectrum of wavelengths is emitted."
    ],
    "stepByStepSolutionAr": [
      "عند مرور الإلكترونات السريعة قرب المجال الكهربي لأنوية ذرات مادة الهدف، تتناقص سرعتها وتفقد طاقتها تدريجياً نتيجة التصادمات والاحتكاك، وتخرج الطاقة المفقودة في صورة إشعاع كهرومغناطيسي مستمر الأطوال الموجية يسمى إشعاع الكبح أو الفرملة."
    ],
    "teacherTipEn": "The minimum wavelength $\\lambda_{\\min} = \\frac{hc}{eV}$ occurs when an electron loses 100% of its kinetic energy in a single collision.",
    "teacherTipAr": "أقصر طول موجي $\\lambda_{\\min} = \\frac{hc}{eV}$ ينتج عندما يفقد الإلكترون كل طاقة حركته دفعة واحدة في تصادم واحد."
  },
  {
    "id": "phys_ch6_db_easy_14",
    "titleEn": "Origin of Characteristic X-Ray Spectrum",
    "titleAr": "أصل وطبيعة الطيف الخطي المميز للأشعة السينية",
    "difficulty": "easy",
    "questionEn": "The characteristic (line) spectrum of X-rays consists of sharp spectral peaks whose wavelengths depend EXCLUSIVELY on:",
    "questionAr": "يتكون الطيف الخطي المميز للأشعة السينية من خطوط حادة تعتمد أطوالها الموجية حصرياً على:",
    "optionsEn": [
      "The potential difference between cathode and anode",
      "The atomic number ($Z$) and chemical nature of the target material",
      "The temperature of the cooling water surrounding the tube",
      "The brightness of the room in which the tube operates"
    ],
    "optionsAr": [
      "فرق الجهد المطبق بين الكاثود والأنود",
      "العدد الذري ($Z$) والنوع الكيميائي لمادة الهدف",
      "درجة حرارة ماء التبريد المحيط بالأنبوبة",
      "شدة إضاءة الغرفة التي تعمل بها الأنبوبة"
    ],
    "correctAnswer": "The atomic number ($Z$) and chemical nature of the target material",
    "correctIndex": 1,
    "hintEn": "Characteristic X-rays come from inner-shell atomic electronic transitions in the target.",
    "hintAr": "الطيف المميز ينتج عن انتقالات إلكترونية بين المستويات الذرية الداخلية لمادة الهدف فيعتمد على العدد الذري.",
    "stepByStepSolutionEn": [
      "When an incident high-speed electron knocks out an inner-shell electron (from the K or L shell) of a target atom, an outer-shell electron drops into the vacancy, emitting a photon with energy $\\Delta E = E_2 - E_1 = h\\nu$. Because atomic energy levels are determined solely by atomic number $Z$, these wavelengths are characteristic of that target material."
    ],
    "stepByStepSolutionAr": [
      "عند تصادم إلكترون سريع بإلكترون قريب من نواة ذرة مادة الهدف وطرده خارج الذرة، يهبط إلكترون من مستوى طاقة أعلى ليحل محله، ويطلق فوتوناً طاقته تساوي فرق الطاقة بين المستويين ($\\Delta E = h\\nu$). وبما أن طاقات المستويات خاصية مميزة للعنصر وتعتمد على العدد الذري $Z$، فإن هذا الطيف يسمى الطيف المميز لمادة الهدف."
    ],
    "teacherTipEn": "Increasing the target's atomic number $Z$ shifts characteristic X-ray peaks to shorter wavelengths ($\\nu \\propto Z^2$).",
    "teacherTipAr": "زيادة العدد الذري لمادة الهدف $Z$ تؤدي إلى زيادة فرق الطاقة بين المستويات وبالتالي إزاحة الطيف المميز نحو أطوال موجية أقصر."
  },
  {
    "id": "phys_ch6_db_easy_15",
    "titleEn": "Minimum Wavelength Formula for X-Rays (Duane-Hunt Law)",
    "titleAr": "علاقة أقصر طول موجي للأشعة السينية وفرق الجهد المعجل",
    "difficulty": "easy",
    "questionEn": "The minimum wavelength ($\\lambda_{\\min}$) of the continuous X-ray spectrum produced by a tube operating at potential difference $V$ is given by:",
    "questionAr": "أقصر طول موجي ($\\lambda_{\\min}$) للطيف المستمر للأشعة السينية المتولدة من أنبوبة تعمل بفرق جهد $V$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{eV}{hc}$",
      "$\\lambda_{\\min} = \\frac{h}{eV c}$",
      "$\\lambda_{\\min} = \\frac{hc}{eV}$",
      "$\\lambda_{\\min} = \\frac{hc e}{V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{eV}{hc}$",
      "$\\lambda_{\\min} = \\frac{h}{eV c}$",
      "$\\lambda_{\\min} = \\frac{hc}{eV}$",
      "$\\lambda_{\\min} = \\frac{hc e}{V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{hc}{eV}$",
    "correctIndex": 2,
    "hintEn": "Maximum photon energy equals maximum electron kinetic energy: $E_{\\max} = hc/\\lambda_{\\min} = eV$.",
    "hintAr": "أقصى طاقة فوتون تساوي أقصى طاقة حركة للإلكترون: $\\frac{hc}{\\lambda_{\\min}} = eV$.",
    "stepByStepSolutionEn": [
      "When a projectile electron loses its entire kinetic energy $KE = eV$ in a single decisive braking collision, it creates a single photon of maximum energy $E_{\\max} = h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}} = eV$. Solving for $\\lambda_{\\min}$ yields $\\lambda_{\\min} = \\frac{hc}{eV}$."
    ],
    "stepByStepSolutionAr": [
      "عندما يفقد الإلكترون طاقة حركته $eV$ بالكامل دفعة واحدة في تصادم واحد، ينبعث فوتون يحمل أقصى طاقة وأعلى تردد وأقصر طول موجي $\\frac{hc}{\\lambda_{\\min}} = eV$ ومنها $\\lambda_{\\min} = \\frac{hc}{eV}$."
    ],
    "teacherTipEn": "Crucial rule: $\\lambda_{\\min}$ depends ONLY on the accelerating potential difference $V$, completely independent of the target material.",
    "teacherTipAr": "قاعدة هامة: $\\lambda_{\\min}$ تعتمد فقط على فرق الجهد المعجل $V$ ولا تتأثر إطلاقاً بنوع مادة الهدف."
  },
  {
    "id": "phys_ch6_db_easy_16",
    "titleEn": "Spontaneous vs Stimulated Emission Fundamental Distinction",
    "titleAr": "الفارق الجوهري بين الانبعاث التلقائي والانبعاث المستحث",
    "difficulty": "easy",
    "questionEn": "In stimulated emission, an excited atom is induced to drop to a lower energy state by an incident photon. The emitted photon is characterized by being:",
    "questionAr": "في الانبعاث المستحث، يُحث إلكترون الذرة المثارة على الهبوط إلى مستوى أدنى بفعل فوتون ساقط. يتميز الفوتون المنبعث بأنه:",
    "optionsEn": [
      "Emitted in a completely random direction with arbitrary phase",
      "Carrying half the energy of the incident photon",
      "Having a speed twice the speed of light",
      "Strictly identical to the incident photon in frequency, phase, polarization, and direction of propagation"
    ],
    "optionsAr": [
      "ينبعث في اتجاه عشوائي وبطور غير متفق مع الفوتون الساقط",
      "يحمل نصف طاقة الفوتون الساقط فقط",
      "يتحرك بضعف سرعة الضوء",
      "مطابق تماماً للفوتون الساقط في التردد، الطور، الاستقطاب، واتجاه الانتشار"
    ],
    "correctAnswer": "Strictly identical to the incident photon in frequency, phase, polarization, and direction of propagation",
    "correctIndex": 3,
    "hintEn": "Stimulated emission clones the incident photon: two identical coherent photons emerge.",
    "hintAr": "الانبعاث المستحث ينتج عنه فوتونان متماثلان تماماً في كل الخصائص الفيزيائية.",
    "stepByStepSolutionEn": [
      "In spontaneous emission, an atom decays on its own after its lifetime, emitting a photon in a random direction with random phase. In stimulated emission, an external photon of matching energy ($h\\nu = E_2 - E_1$) triggers de-excitation before the lifetime expires, producing an identical clone photon in perfect phase, direction, and polarization."
    ],
    "stepByStepSolutionAr": [
      "في الانبعاث التلقائي تهبط الذرة المثارة تلقائياً بعد انتهاء فترة العمر فتشع فوتوناً عشوائي الاتجاه والطور. أما في الانبعاث المستحث فيمر فوتون طاقته تساوي فرق الطاقة بالذرة قبل انتهاء فترة العمر فيحثها على الهبوط، فيخرج فوتونان متطابقان تماماً في التردد والطور والاتجاه (مترابطان)."
    ],
    "teacherTipEn": "Stimulated emission is the physical engine that makes optical laser amplification possible (Light Amplification by Stimulated Emission of Radiation).",
    "teacherTipAr": "الانبعاث المستحث هو الأساس الفيزيائي لتكبير الضوء في أجهزة الليزر."
  },
  {
    "id": "phys_ch6_db_easy_17",
    "titleEn": "Metastable State Characteristics in Laser Media",
    "titleAr": "خصائص ومفهوم مستوى الطاقة شبه المستقر",
    "difficulty": "easy",
    "questionEn": "A metastable energy level in an atomic laser medium is defined by having a lifetime of approximately:",
    "questionAr": "يتميز مستوى الطاقة شبه المستقر في ذرات الوسط الفعال لليزر بأن فترة العمر له تكون في حدود:",
    "optionsEn": [
      "$\\sim 10^{-3}\\text{ s}$ (about $10^5$ times longer than an ordinary excited state $\\sim 10^{-8}\\text{ s}$)",
      "$\\sim 10^{-15}\\text{ s}$ (infinitely fleeting)",
      "$\\sim 100\\text{ years}$",
      "Zero seconds"
    ],
    "optionsAr": [
      "$\\sim 10^{-3}\\text{ s}$ (أطول بنحو مئة ألف مرة من فترة عمر المستويات المثارة العادية $\\sim 10^{-8}\\text{ s}$)",
      "$\\sim 10^{-15}\\text{ s}$ (متناهية الصغر)",
      "$\\sim 100\\text{ سنة}$",
      "صفر ثانية"
    ],
    "correctAnswer": "$\\sim 10^{-3}\\text{ s}$ (about $10^5$ times longer than an ordinary excited state $\\sim 10^{-8}\\text{ s}$)",
    "correctIndex": 0,
    "hintEn": "Long lifetime allows atoms to accumulate, producing population inversion.",
    "hintAr": "فترة العمر الطويلة نسبياً تسمح بتراكم الذرات المثارة وتحقيق وضع الإسكان المعكوس.",
    "stepByStepSolutionEn": [
      "Ordinary excited states have a fleeting lifetime of $\\sim 10^{-8}\\text{ s}$. A metastable level has a relatively long lifetime of $\\sim 10^{-3}\\text{ s}$. This long survival time allows pumped atoms to accumulate in large numbers in the excited state before spontaneously decaying."
    ],
    "stepByStepSolutionAr": [
      "المستويات المثارة العادية فترة عمرها قصيرة جداً ($\\sim 10^{-8}\\text{ s}$). أما المستوى شبه المستقر فتتميز فترة عمره بأنها طويلة نسبياً ($\\sim 10^{-3}\\text{ s}$)، مما يتيح للذرات المثارة التراكم فيه بأعداد غفيرة قبل أن تهبط تلقائياً."
    ],
    "teacherTipEn": "Achieving a metastable state is an absolute prerequisite for population inversion.",
    "teacherTipAr": "وجود مستوى شبه مستقر هو الشرط الجوهري للوصول إلى حالة الإسكان المعكوس."
  },
  {
    "id": "phys_ch6_db_easy_18",
    "titleEn": "Population Inversion Definition",
    "titleAr": "مفهوم حالة الإسكان المعكوس",
    "difficulty": "easy",
    "questionEn": "The operational state of 'Population Inversion' in a laser medium means that:",
    "questionAr": "تعرف حالة 'الإسكان المعكوس' في الوسط الفعال لليزر بأنها الحالة التي يكون فيها:",
    "optionsEn": [
      "All electrons have escaped from their parent atoms completely",
      "The number of atoms in higher excited metastable states exceeds the number of atoms in lower energy states",
      "The atoms are completely frozen at absolute zero temperature",
      "The medium absorbs 100% of all incident light without emission"
    ],
    "optionsAr": [
      "تحرر جميع الإلكترونات من ذراتها تماماً وتأين الغاز",
      "عدد الذرات في مستويات الإثارة العليا شبه المستقرة أكبر من عددها في المستويات الأدنى في الطاقة",
      "سكون الذرات التام عند درجة حرارة الصفر المطلق",
      "امتصاص الوسط لكل الضوء الساقط عليه بنسبة 100% دون انبعاث"
    ],
    "correctAnswer": "The number of atoms in higher excited metastable states exceeds the number of atoms in lower energy states",
    "correctIndex": 1,
    "hintEn": "Normally $N_1 > N_2$; population inversion means $N_2 > N_1$.",
    "hintAr": "في الحالة الطبيعية $N_1 > N_2$، وفي الإسكان المعكوس ينعكس الوضع ليصبح $N_2 > N_1$.",
    "stepByStepSolutionEn": [
      "Under thermal equilibrium (Boltzmann distribution), lower states always have more atoms than higher states ($N_1 > N_2$). By applying an external pumping source, population inversion is achieved when the upper metastable state accumulates more atoms than the lower state ($N_2 > N_1$), ensuring stimulated emission dominates over absorption."
    ],
    "stepByStepSolutionAr": [
      "في الاتزان الحراري الطبيعي يكون عدد الذرات في المستويات الأدنى أكبر دائماً من المستويات العليا. وتتحقق حالة الإسكان المعكوس عندما تتراكم الذرات في مستوى الإثارة الأعلى شبه المستقر بحيث يزيد عددها عن مستويات الطاقة الأدنى، فيسود الانبعاث المستحث على الامتصاص."
    ],
    "teacherTipEn": "Without population inversion, incoming photons would be absorbed rather than amplified.",
    "teacherTipAr": "بدون الإسكان المعكوس، يكون الامتصاص هو السائد وتتلاشى الحزمة الضوئية بدلاً من أن تتضخم."
  },
  {
    "id": "phys_ch6_db_easy_19",
    "titleEn": "Monochromaticity of Laser Light",
    "titleAr": "خاصية النقاء الطيفي لأشعة الليزر",
    "difficulty": "easy",
    "questionEn": "Laser light possesses extreme 'monochromaticity' (spectral purity), which means that:",
    "questionAr": "تتميز أشعة الليزر بخاصية 'النقاء الطيفي' (أحادية الطول الموجي)، والتي تعني أن:",
    "optionsEn": [
      "It contains all colors of the rainbow simultaneously",
      "Its speed changes continuously from ultraviolet to infrared",
      "Its emission line has an extremely narrow spectral linewidth ($\\Delta\\lambda \\to 0$), concentrated at a single precise wavelength",
      "Its wavelength increases linearly with distance traveled"
    ],
    "optionsAr": [
      "يحتوي على جميع ألوان قوس قزح في نفس الوقت",
      "تتغير سرعته باستمرار من الأشعة فوق البنفسجية إلى تحت الحمراء",
      "خط انبعاثه يمتلك اتساعاً طيفياً ضيقاً للغاية ($\\Delta\\lambda \\to 0$)، وتتركز طاقته عند طول موجي واحد دقيق",
      "يزداد طوله الموجي طردياً مع المسافة المقطوعة"
    ],
    "correctAnswer": "Its emission line has an extremely narrow spectral linewidth ($\\Delta\\lambda \\to 0$), concentrated at a single precise wavelength",
    "correctIndex": 2,
    "hintEn": "Narrow wavelength spread $\\Delta\\lambda$ means high spectral purity.",
    "hintAr": "الاتساع الطيفي الضيق جداً $\\Delta\\lambda$ يعني أن الضوء أحادي الطول الموجي تقريباً.",
    "stepByStepSolutionEn": [
      "Ordinary light sources have broad spectral bands containing a range of wavelengths ($\\Delta\\lambda$). Laser light, generated through stimulated transitions between two sharp quantum levels, produces radiation confined to an exceptionally narrow wavelength spread ($\\Delta\\lambda \\sim 10^{-3}\\text{ nm}$)."
    ],
    "stepByStepSolutionAr": [
      "مصادر الضوء العادية تطلق مدى كبيراً من الأطوال الموجية المتفاوتة ($\\Delta\\lambda$). أما الليزر فينتج عن انتقال مستحث بين مستويي طاقة محددين بدقة، مما يجعل اتساعه الطيفي بالغ الضآلة ويظهر كخط طيفي رفيع جداً يكاد يكون طوله الموجي واحداً."
    ],
    "teacherTipEn": "Monochromaticity makes lasers invaluable in spectroscopy, interferometry, and fiber-optic telecommunications.",
    "teacherTipAr": "النقاء الطيفي يجعل الليزر مثالياً في التحليل الطيفي الدقيق والاتصالات عبر الألياف الضوئية."
  },
  {
    "id": "phys_ch6_db_easy_20",
    "titleEn": "Collimation and Negligible Beam Divergence in Lasers",
    "titleAr": "خاصية توازي الحزمة وانعدام الانفراجية في أشعة الليزر",
    "difficulty": "easy",
    "questionEn": "Laser beams travel over vast astronomical distances without spreading significantly because they have:",
    "questionAr": "تنتشر حزمة أشعة الليزر لمسافات هائلة دون أن تعاني تشتتاً أو اتساعاً ملحوظاً في قطرها بفضل:",
    "optionsEn": [
      "A speed much faster than the speed of light in vacuum",
      "Zero photon momentum",
      "A circular magnetic field that pulls light rays together",
      "Virtually zero angular divergence, maintaining a parallel beam of constant cross-section that does NOT obey the inverse square law over ordinary distances"
    ],
    "optionsAr": [
      "سرعة فائقة تفوق سرعة الضوء في الفراغ",
      "انعدام كمية تحرك فوتوناته",
      "مجال مغناطيسي دائري يجذب الأشعة لبعضها البعض",
      "انفراجية زاوية شبه منعدمة، فتحافظ على حزمة متوازية ثابتة القطر ولا تخضع لقانون التربيع العكسي في المسافات العادية"
    ],
    "correctAnswer": "Virtually zero angular divergence, maintaining a parallel beam of constant cross-section that does NOT obey the inverse square law over ordinary distances",
    "correctIndex": 3,
    "hintEn": "Parallel rays remain collimated; intensity does not drop with distance.",
    "hintAr": "أشعة الليزر متوازية ولا تتفرق، لذلك تظل شدتها ثابتة تقريباً ولا تتبع قانون التربيع العكسي.",
    "stepByStepSolutionEn": [
      "Ordinary light radiates in all spherical directions from a point source, obeying the inverse square law ($I \\propto 1/d^2$). Laser photons are aligned by the resonant optical cavity to travel strictly parallel to the tube axis, giving the beam negligible divergence and preserving its intensity over vast distances."
    ],
    "stepByStepSolutionAr": [
      "الضوء العادي ينبعث في جميع الاتجاهات الفراغية وتتباعد أشعته وتخضع شدته لقانون التربيع العكسي ($I \\propto 1/d^2$). أما أشعة الليزر فتخرج متوازية تماماً وموجهة في اتجاه واحد بفعل التجويف الرنيني، فلا تعاني انفراجية وتحتفظ بشدتها لمسافات طويلة."
    ],
    "teacherTipEn": "Because of this parallelism, laser pulses bounced off retroreflectors on the Moon were detected back on Earth with centimeter precision.",
    "teacherTipAr": "بفضل هذه الخاصية، أمكن إرسال نبضات ليزر إلى عواكس على سطح القمر ورصد ارتدادها بدقة سنتيمترية."
  },
  {
    "id": "phys_ch6_db_easy_21",
    "titleEn": "Helium-Neon Laser Gas Ratio and Active Medium",
    "titleAr": "نسبة الغازين في ليزر الهيليوم-نيون والوسط الفعال",
    "difficulty": "easy",
    "questionEn": "In a standard Helium-Neon (He-Ne) gas laser, the active medium consists of a mixture of Helium and Neon enclosed in a quartz tube at low pressure in the ratio of approximately:",
    "questionAr": "في ليزر الهيليوم-نيون، يتكون الوسط الفعال من خليط من غازي الهيليوم والنيون داخل أنبوبة من الكوارتز تحت ضغط منخفض بنسبة تقارب:",
    "optionsEn": [
      "$10\\text{ Helium} : 1\\text{ Neon}$",
      "$1\\text{ Helium} : 10\\text{ Neon}$",
      "$1\\text{ Helium} : 1\\text{ Neon}$",
      "$100\\text{ Helium} : 1\\text{ Argon}$"
    ],
    "optionsAr": [
      "$10\\text{ هيليوم} : 1\\text{ نيون}$",
      "$1\\text{ هيليوم} : 10\\text{ نيون}$",
      "$1\\text{ هيليوم} : 1\\text{ نيون}$",
      "$100\\text{ هيليوم} : 1\\text{ أرجون}$"
    ],
    "correctAnswer": "$10\\text{ Helium} : 1\\text{ Neon}$",
    "correctIndex": 0,
    "hintEn": "Helium is abundant ($10:1$) to maximize electrical excitation collisions.",
    "hintAr": "الهيليوم هو الغاز الأكثر وفرة بنسبة 10 إلى 1 لزيادة كفاءة الإثارة بالكهرباء.",
    "stepByStepSolutionEn": [
      "The mixture contains roughly 10 parts Helium to 1 part Neon at a total pressure of about $0.6\\text{ Torr}$. Helium atoms are readily excited by electron collisions from the electric discharge and subsequently transfer their energy to Neon via resonant inelastic collisions."
    ],
    "stepByStepSolutionAr": [
      "يحتوي الأنبوب على خليط بنسبة 10 ذرات هيليوم إلى ذرة نيون واحدة تحت ضغط منخفض ($\\approx 0.6\\text{ Torr}$). كثرة ذرات الهيليوم تضمن اصطدام إلكترونات التفريغ الكهربي بها بكفاءة عالية ثم نقل الطاقة إلى ذرات النيون بالتصادم غير المرن."
    ],
    "teacherTipEn": "Neon atoms are the actual emitters of the laser radiation; Helium acts as an energy-transfer mediator.",
    "teacherTipAr": "ذرات النيون هي التي ينبعث منها فوتونات الليزر في النهاية، بينما يعمل الهيليوم كوسيط لنقل طاقة الإثارة."
  },
  {
    "id": "phys_ch6_db_easy_22",
    "titleEn": "Energy Transfer Mechanism in He-Ne Laser",
    "titleAr": "آلية نقل الطاقة بين ذرات الهيليوم والنيون بالتصادم",
    "difficulty": "easy",
    "questionEn": "Why are Helium and Neon uniquely paired together in a gas laser?",
    "questionAr": "لماذا يتم الجمع تحديداً بين غازي الهيليوم والنيون في هذا الليزر الغازي؟",
    "optionsEn": [
      "Because both gases react chemically to form a stable crystal",
      "Because their metastable excited energy levels are remarkably close ($20.61\\text{ eV}$ for He and $20.66\\text{ eV}$ for Ne), enabling efficient resonant non-elastic collisional energy transfer",
      "Because Helium absorbs red light while Neon reflects it",
      "Because Neon has zero electrons in its outer shell"
    ],
    "optionsAr": [
      "لأن الغازين يتفاعلان كيميائياً لتكوين بلورة مستقرة",
      "لأن مستويات الطاقة شبه المستقرة للغازين متقاربة جداً ($20.61\\text{ eV}$ للهيليوم و $20.66\\text{ eV}$ للنيون)، مما يتيح نقلاً كفؤاً للطاقة بالتصادم غير المرن",
      "لأن الهيليوم يمتص الضوء الأحمر والنيون يعكسه",
      "لأن ذرة النيون لا تحتوي على إلكترونات في غلافها الخارجي"
    ],
    "correctAnswer": "Because their metastable excited energy levels are remarkably close ($20.61\\text{ eV}$ for He and $20.66\\text{ eV}$ for Ne), enabling efficient resonant non-elastic collisional energy transfer",
    "correctIndex": 1,
    "hintEn": "Resonant energy transfer occurs between nearly equal energy levels.",
    "hintAr": "تقارب طاقتي المستويين شبه المستقرين ($20.61\\text{ eV}$ و $20.66\\text{ eV}$) يحقق شرط الرنين في التصادم غير المرن.",
    "stepByStepSolutionEn": [
      "Helium atoms are excited by discharge electrons to their metastable state at $20.61\\text{ eV}$. When excited Helium atoms collide inelastically with ground-state Neon atoms, the near-exact energy match with Neon's $20.66\\text{ eV}$ metastable state causes resonant energy transfer, exciting Neon into population inversion."
    ],
    "stepByStepSolutionAr": [
      "عند إثارة ذرات الهيليوم بالتفريغ الكهربي إلى مستواها شبه المستقر ($20.61\\text{ eV}$)، تصطدم بذرات نيون غير مثارة تصادماً غير مرن. ولتقارب طاقتي المستويين شبه المستقرين للغازين، تنتقل طاقة الإثارة من الهيليوم إلى النيون بكفاءة عالية، مما يحقق الإسكان المعكوس في ذرات النيون."
    ],
    "teacherTipEn": "This resonant collisional transfer is a quintessential example of quantum energy resonance in physics.",
    "teacherTipAr": "هذا الانتقال الرنيني للطاقة من أروع تطبيقات ميكانيكا الكم في الأجهزة التكنولوجية الحديثة."
  },
  {
    "id": "phys_ch6_db_easy_23",
    "titleEn": "Helium-Neon Laser Emission Wavelength",
    "titleAr": "الطول الموجي واللون لشعاع ليزر الهيليوم-نيون",
    "difficulty": "easy",
    "questionEn": "The famous red beam emitted by a standard Helium-Neon laser has a wavelength of approximately:",
    "questionAr": "الشعاع الأحمر الشهير المنبعث من ليزر الهيليوم-نيون يمتلك طولاً موجياً يقارب:",
    "optionsEn": [
      "$\\lambda = 10.6\\,\\mu\\text{m}$ (invisible infrared)",
      "$\\lambda = 250\\text{ nm}$ (ultraviolet radiation)",
      "$\\lambda = 632.8\\text{ nm}$ (bright red visible light)",
      "$\\lambda = 5000\\text{ nm}$ (far infrared heat)"
    ],
    "optionsAr": [
      "$\\lambda = 10.6\\,\\mu\\text{m}$ (أشعة تحت حمراء غير مرئية)",
      "$\\lambda = 250\\text{ nm}$ (أشعة فوق بنفسجية)",
      "$\\lambda = 632.8\\text{ nm}$ (ضوء أحمر مرئي ناصع)",
      "$\\lambda = 5000\\text{ nm}$ (حرارة تحت حمراء بعيدة)"
    ],
    "correctAnswer": "$\\lambda = 632.8\\text{ nm}$ (bright red visible light)",
    "correctIndex": 2,
    "hintEn": "He-Ne laser emits the classic red line at $632.8\\text{ nm}$.",
    "hintAr": "ليزر الهيليوم نيون يطلق الخط الطيفي الأحمر الشهير عند $632.8\\text{ nm}$.",
    "stepByStepSolutionEn": [
      "The transition in Neon between energy levels $E_3$ and $E_2$ produces photons of energy $\\Delta E \\approx 1.96\\text{ eV}$. This corresponds to the visible wavelength $\\lambda = \\frac{hc}{\\Delta E} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.96\\text{ eV}} \\approx 632.8\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "هبوط إلكترون ذرة النيون المثارة من المستوى شبه المستقر $E_3$ إلى المستوى الأدنى $E_2$ يطلق فوتوناً فرق طاقته $\\approx 1.96\\text{ eV}$، ويقابله طول موجي في نطاق الضوء الأحمر يساوي $632.8\\text{ نانومتر}$."
    ],
    "teacherTipEn": "632.8 nm is one of the most widely memorized constants in ministerial physics exams.",
    "teacherTipAr": "الرقم 632.8 نانومتر من الثوابت الأساسية التي يجب حفظها في منهج الثانوية العامة."
  },
  {
    "id": "phys_ch6_db_easy_24",
    "titleEn": "Resonant Optical Cavity Mirror Reflectivities",
    "titleAr": "معاملات انعكاس مرآتي التجويف الرنيني في الليزر",
    "difficulty": "easy",
    "questionEn": "In a typical laser resonant optical cavity, the two mirrors at the ends of the tube consist of:",
    "questionAr": "في التجويف الرنيني لليزر، تتكون المرآتان العاكستان عند طرفي الأنبوب من:",
    "optionsEn": [
      "Two fully transparent glass windows with zero reflection",
      "Two completely absorbing black plates",
      "Two concave lenses that diverge the beam outward",
      "A fully reflecting mirror (reflectivity $\\sim 99.5\\%$) and a semi-transparent output coupler mirror (reflectivity $\\sim 98\\%$) through which the laser beam exits"
    ],
    "optionsAr": [
      "نافذتين زجاجيتين شفافتين تماماً بدون أي انعكاس",
      "لوحين أسودين تامّي الامتصاص بنسبة 100%",
      "عدستين مقعرتين تشتتان الضوء للخارج",
      "مرآة عاكسة تماماً (معامل انعكاسها $\\sim 99.5\\%$) ومرآة شبه منفذة (معامل انعكاسها $\\sim 98\\%$) يخرج من خلالها شعاع الليزر"
    ],
    "correctAnswer": "A fully reflecting mirror (reflectivity $\\sim 99.5\\%$) and a semi-transparent output coupler mirror (reflectivity $\\sim 98\\%$) through which the laser beam exits",
    "correctIndex": 3,
    "hintEn": "One mirror reflects 99.5% to amplify light; the other transmits ~2% as output beam.",
    "hintAr": "إحدى المرآتين عاكسة تماماً والأخرى شبه منفذة تسمح بخروج جزء من الحزمة المكبرة كشعاع ليزر.",
    "stepByStepSolutionEn": [
      "The rear mirror reflects almost 100% of photons back through the active medium to trigger further stimulated emission. The front mirror is semi-transparent, reflecting $\\approx 98\\%$ of photons for continuous feedback while allowing $\\approx 2\\%$ to emerge as the useful, highly collimated output laser beam."
    ],
    "stepByStepSolutionAr": [
      "المرآة الخلفية تعكس 99.5% من الفوتونات لتعود داخل الوسط الفعال وتحدث مزيداً من الانبعاث المستحث والتكبير. أما المرآة الأمامية فشبه منفذة تعكس حوالي 98% وتنفذ حوالي 2% فقط، وهو الجزء الذي يمثل شعاع الليزر الخارج عالي الكثافة."
    ],
    "teacherTipEn": "The resonant cavity acts as an optical amplifier and spatial filter, ensuring only parallel photons in phase survive.",
    "teacherTipAr": "التجويف الرنيني هو وعاء التكبير الحقيقي، ويضمن أن الفوتونات الموازية للمحور فقط هي التي تتضخم."
  },
  {
    "id": "phys_ch6_db_easy_25",
    "titleEn": "Holography Principles and Information Recorded",
    "titleAr": "مفهوم الهولوجرام والمعلومات المسجلة في التصوير ثلاثي الأبعاد",
    "difficulty": "easy",
    "questionEn": "Ordinary 2D photography records only the intensity (amplitude squared) of reflected light waves. Holography (3D photography invented by Dennis Gabor) records:",
    "questionAr": "التصوير الفوتوغرافي العادي يسجل فقط شدة الضوء (مربع السعة). بينما التصوير التجسيمي ثلاثي الأبعاد (الهولوجرافي) يسجل:",
    "optionsEn": [
      "Both the amplitude (intensity) AND phase of light waves reflected from the object, using interference with a coherent reference laser beam",
      "The temperature and mass of the photographed object directly",
      "Sound waves reflected from the object's surface",
      "Only black and white shadow outlines without depth"
    ],
    "optionsAr": [
      "كلاً من سعة الموجة (الشدة) وطورها (فروق المسار) للأمواج المنعكسة من الجسم، باستخدام تداخلها مع حزمة ليزر مرجعية مترابطة",
      "درجة حرارة وكتلة الجسم المصور بشكل مباشر",
      "الموجات الصوتية المنعكسة من سطح الجسم",
      "الظلال الثنائية الأبعاد فقط بالأبيض والأسود دون أي عمق"
    ],
    "correctAnswer": "Both the amplitude (intensity) AND phase of light waves reflected from the object, using interference with a coherent reference laser beam",
    "correctIndex": 0,
    "hintEn": "Phase difference $=$ Path difference $\\times \\frac{2\\pi}{\\lambda}$. Hologram captures 3D depth.",
    "hintAr": "الهولوجرام يسجل فرق الطور وفرق السعة معاً، وفرق الطور = فرق المسار × $\\frac{2\\pi}{\\lambda}$.",
    "stepByStepSolutionEn": [
      "Light reflecting from a 3D object has varying path lengths, encoding depth as phase differences ($\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\Delta x$). Holography superimposes this scattered wave with a coherent reference laser beam on a photographic plate. The resulting microscopic interference pattern preserves both wave amplitude and phase, reconstructing a realistic 3D image when re-illuminated."
    ],
    "stepByStepSolutionAr": [
      "التصوير العادي يفقد فروق التضاريس والعمق لأن اللوح الفوتوغرافي يسجل الشدة فقط (السعة). أما في الهولوجرافي فتتداخل الأشعة المنعكسة من الجسم (الحاملة لفروق المسار والطور) مع أشعة مرجعية لها نفس الطور والطول الموجي من نفس الليزر، فيسجل هدب التداخل التي تحتوي على السعة والطور معاً مجسدة الأبعاد الثلاثية."
    ],
    "teacherTipEn": "Reconstructing the 3D virtual image requires illuminating the developed hologram with a laser beam identical to the reference beam.",
    "teacherTipAr": "لرؤية الصورة المجسمة ثلاثية الأبعاد، يضاء الهولوجرام بنفس حزمة الأشعة المرجعية المستخدمة في تسجيله."
  },
  {
    "id": "phys_ch6_db_easy_26",
    "titleEn": "Pure Silicon Crystal Structure and Valence",
    "titleAr": "تركيب بلورة السيليكون النقي ورابطتها التساهمية",
    "difficulty": "easy",
    "questionEn": "In a pure crystalline silicon lattice, each silicon atom shares its four valence electrons with four neighboring silicon atoms by forming:",
    "questionAr": "في بلورة السيليكون النقي، تشارك كل ذرة سيليكون بإلكترونات تكافؤها الأربعة مع أربع ذرات سيليكون مجاورة عن طريق تكوين:",
    "optionsEn": [
      "Ionic bonds where silicon becomes a $+4$ cation",
      "Four covalent bonds, forming a stable tetrahedral crystal structure",
      "Metallic bonds with completely free sea of electrons",
      "Hydrogen bonds that melt at room temperature"
    ],
    "optionsAr": [
      "روابط أيونية يتحول فيها السيليكون إلى كاتيون موجب",
      "أربع روابط تساهمية أحادية، مكونة بناءً بلورياً رباعي الأوجه منتظماً ومستقراً",
      "روابط فلزية تحتوي على بحر حر من الإلكترونات",
      "روابط هيدروجينية تنصهر عند درجة حرارة الغرفة"
    ],
    "correctAnswer": "Four covalent bonds, forming a stable tetrahedral crystal structure",
    "correctIndex": 1,
    "hintEn": "Group IV element has 4 valence electrons and forms 4 covalent bonds.",
    "hintAr": "السيليكون عنصر رباعي التكافؤ يكون أربع روابط تساهمية مع جيرانه الأربعة.",
    "stepByStepSolutionEn": [
      "Silicon belongs to Group IV of the periodic table. In the diamond-cubic lattice, each silicon atom is tetrahedrally bonded to four neighboring atoms via single covalent electron pairs, achieving a full octet in its outer shell."
    ],
    "stepByStepSolutionAr": [
      "يقع السيليكون في المجموعة الرابعة وله 4 إلكترونات تكافؤ، وتشارك كل ذرة مع 4 ذرات مجاورة بأربع روابط تساهمية ليكتمل غلافها الخارجي بثمانية إلكترونات وتصل للاستقرار البلوري."
    ],
    "teacherTipEn": "At absolute zero ($0\\text{ K}$), all bonds are 100% intact and no free electrons exist.",
    "teacherTipAr": "عند الصفر المطلق تكون جميع الروابط مكتملة وسليمة تماماً ولا توجد أي إلكترونات حرة."
  },
  {
    "id": "phys_ch6_db_easy_27",
    "titleEn": "Pure Semiconductor Electrical Conductivity at Absolute Zero",
    "titleAr": "التوصيل الكهربي لشبه الموصل النقي عند الصفر المطلق",
    "difficulty": "easy",
    "questionEn": "At absolute zero temperature ($0\\text{ K} = -273.15^\\circ\\text{C}$), a pure crystal of silicon or germanium acts as:",
    "questionAr": "عند درجة حرارة الصفر المطلق ($0\\text{ K} = -273.15^\\circ\\text{C}$)، تسلك بلورة السيليكون أو الجرمانيوم النقي سلوك:",
    "optionsEn": [
      "A superconductor with zero electrical resistance",
      "A metallic conductor with infinite conductivity",
      "A perfect electrical insulator, because all covalent bonds are completely intact and zero free charge carriers exist",
      "A battery generating steady direct current"
    ],
    "optionsAr": [
      "موصل فائق التوصيل تنعدم مقاومته تماماً",
      "موصل فلزي جيد جداً ذو توصيلية لانهائية",
      "عازل كهربي تام التوصيل، لأن جميع الروابط التساهمية تكون سليمة تماماً ولا توجد أي حاملات شحنة حرة",
      "بطارية تولد تياراً مستمراً ثابتاً"
    ],
    "correctAnswer": "A perfect electrical insulator, because all covalent bonds are completely intact and zero free charge carriers exist",
    "correctIndex": 2,
    "hintEn": "No thermal energy $\\implies$ no broken bonds $\\implies$ no electrons or holes $\\implies$ insulator.",
    "hintAr": "عند الصفر المطلق تنعدم الطاقة الحرارية وتكون جميع الروابط سليمة ومقاومته لانهائية.",
    "stepByStepSolutionEn": [
      "At $0\\text{ K}$, thermal vibrational energy is completely absent. No covalent bonds are broken, so the conduction band is completely empty ($n = 0$) and the valence band is completely full ($p = 0$). The crystal cannot conduct electric current at all."
    ],
    "stepByStepSolutionAr": [
      "عند الصفر المطلق تنعدم الطاقة الحرارية وتكون جميع الروابط التساهمية سليمة ومكتملة تماماً، ولا توجد أي إلكترونات حرة أو فجوات، وتصبح المقاومة لانهائية وتصبح البلورة عازلة تماماً للكهرباء."
    ],
    "teacherTipEn": "Contrast: metals become BETTER conductors at lower temperatures, while semiconductors become INSULATORS.",
    "teacherTipAr": "فارق جوهري: تبريد الفلزات يزيد توصيلها الكهربي، بينما تبريد أشباه الموصلات ينقص توصيلها حتى تنعدم عند الصفر المطلق."
  },
  {
    "id": "phys_ch6_db_easy_28",
    "titleEn": "Temperature Effect on Semiconductor Conductivity",
    "titleAr": "أثر رفع درجة الحرارة على التوصيلية الكهربية لشبه الموصل النقي",
    "difficulty": "easy",
    "questionEn": "When the temperature of a pure silicon crystal is raised above absolute zero, its electrical conductivity increases because:",
    "questionAr": "عند رفع درجة حرارة بلورة السيليكون النقي، تزداد توصيليتها الكهربية بسبب:",
    "optionsEn": [
      "Silicon atoms turn into copper atoms",
      "The atomic radius shrinks to zero",
      "Electrons lose their mass and move at the speed of light",
      "Thermal energy breaks some covalent bonds, generating equal concentrations of free electrons and holes ($n = p$)"
    ],
    "optionsAr": [
      "تحول ذرات السيليكون إلى ذرات نحاس موصلة",
      "انكماش نصف القطر الذري لذرات السيليكون للصفر",
      "فقد الإلكترونات لكتلتها وتحركها بسرعة الضوء",
      "الطاقة الحرارية تكسر بعض الروابط التساهمية، فتتحرر إلكترونات وتترك مكانها فجوات موجبة بأعداد متساوية ($n = p$)"
    ],
    "correctAnswer": "Thermal energy breaks some covalent bonds, generating equal concentrations of free electrons and holes ($n = p$)",
    "correctIndex": 3,
    "hintEn": "Breaking one bond creates ONE free electron AND ONE positive hole.",
    "hintAr": "كسر الرابطة التساهمية يحرر إلكتروناً ويخلف فجوة موجبة فيزيد التوصيل.",
    "stepByStepSolutionEn": [
      "Thermal agitation breaks covalent bonds. Each broken bond frees one valence electron into the conduction band and leaves behind a vacant orbital space called a 'hole' behaving as a positive mobile charge. As temperature rises, carrier concentrations $n$ and $p$ rise exponentially, increasing electrical conductivity."
    ],
    "stepByStepSolutionAr": [
      "بارتفاع درجة الحرارة تكتسب البلورة طاقة حرارية تكفي لكسر بعض الروابط التساهمية، فيتحرر إلكترون تاركاً مكانه فجوة موجبة (حاملة شحنة موجبة). زيادة تركيز الإلكترونات والفجوات تزيد من شدة التيار والتوصيلية الكهربية للبلورة."
    ],
    "teacherTipEn": "Semiconductors have a NEGATIVE temperature coefficient of resistance ($\\alpha < 0$): heating decreases resistance.",
    "teacherTipAr": "أشباه الموصلات لها معامل حراري سالب للمقاومة: ارتفاع درجة الحرارة يقلل المقاومة ويزيد التوصيلية عكس الفلزات."
  },
  {
    "id": "phys_ch6_db_easy_29",
    "titleEn": "Thermal Dynamic Equilibrium in Intrinsic Semiconductors",
    "titleAr": "حالة الاتزان الديناميكي الحراري في شبه الموصل النقي",
    "difficulty": "easy",
    "questionEn": "At any constant stable temperature, a pure semiconductor reaches a state of 'Dynamic Thermal Equilibrium' where:",
    "questionAr": "عند أي درجة حرارة ثابتة، تصل بلورة شبه الموصل النقي إلى حالة 'الاتزان الديناميكي الحراري' عندما:",
    "optionsEn": [
      "The rate of breaking of covalent bonds equals the rate of bond recombination, keeping carrier concentrations constant",
      "All covalent bonds in the entire crystal are permanently broken",
      "The crystal emits laser light in all directions",
      "The electric potential difference across the crystal becomes infinite"
    ],
    "optionsAr": [
      "يتساوى معدل كسر الروابط التساهمية مع معدل التئامها، فيثبت تركيز الإلكترونات والفجوات الحرة في البلورة",
      "تتكسر جميع الروابط التساهمية في البلورة بالكامل وتتحطم",
      "تشع البلورة ضوء ليزر في جميع الاتجاهات",
      "يصبح فرق الجهد الكهربي عبر البلورة لانهائياً"
    ],
    "correctAnswer": "The rate of breaking of covalent bonds equals the rate of bond recombination, keeping carrier concentrations constant",
    "correctIndex": 0,
    "hintEn": "Rate of bond breaking $=$ Rate of bond repair.",
    "hintAr": "الاتزان الحراري: معدل كسر الروابط = معدل التئام الروابط عند نفس درجة الحرارة.",
    "stepByStepSolutionEn": [
      "At thermal equilibrium, thermal bond breakage occurs continuously at rate $R_{\\text{break}}$. Simultaneously, free electrons are captured by vacant holes at recombination rate $R_{\\text{recomb}}$. Equilibrium is established when $R_{\\text{break}} = R_{\\text{recomb}}$, maintaining constant intrinsic carrier density $n = p = n_i$."
    ],
    "stepByStepSolutionAr": [
      "عند درجة حرارة معينة، يستمر كسر الروابط بمعدل ثابت ويتساوى معه معدل التئام الروابط (اقتناص الفجوات للإلكترونات الحرة)، فيثبت عدد الإلكترونات الحرة والفجوات ويوصف ذلك بحالة الاتزان الديناميكي الحراري."
    ],
    "teacherTipEn": "Raising temperature establishes a NEW equilibrium at a higher carrier concentration and higher conductivity.",
    "teacherTipAr": "رفع درجة الحرارة يرفع معدل الكسر حتى يتحقق اتزان جديد عند تركيز أعلى من الإلكترونات والفجوات."
  },
  {
    "id": "phys_ch6_db_easy_30",
    "titleEn": "Doping to Produce n-Type Semiconductor",
    "titleAr": "التطعيم لإنتاج شبه موصل من النوع السالب (n-type)",
    "difficulty": "easy",
    "questionEn": "To produce an n-type extrinsic semiconductor, a pure silicon crystal is doped with trace amounts of a pentavalent element such as:",
    "questionAr": "لإنتاج شبه موصل غير نقي من النوع السالب (n-type)، تُطعم بلورة السيليكون النقي بنسبة ضئيلة من عنصر خماسي التكافؤ مثل:",
    "optionsEn": [
      "Boron ($\\text{B}$) or Aluminium ($\\text{Al}$)",
      "Phosphorus ($\\text{P}$), Arsenic ($\\text{As}$), or Antimony ($\\text{Sb}$)",
      "Helium ($\\text{He}$) or Neon ($\\text{Ne}$)",
      "Copper ($\\text{Cu}$) or Silver ($\\text{Ag}$)"
    ],
    "optionsAr": [
      "البورون ($\\text{B}$) أو الألومنيوم ($\\text{Al}$)",
      "الفوسفور ($\\text{P}$)، الزرنيخ ($\\text{As}$)، أو الإثمد ($\\text{Sb}$)",
      "الهيليوم ($\\text{He}$) أو النيون ($\\text{Ne}$)",
      "النحاس ($\\text{Cu}$) أو الفضة ($\\text{Ag}$)"
    ],
    "correctAnswer": "Phosphorus ($\\text{P}$), Arsenic ($\\text{As}$), or Antimony ($\\text{Sb}$)",
    "correctIndex": 1,
    "hintEn": "Pentavalent donor impurity provides a 5th extra valence electron.",
    "hintAr": "عنصر خماسي التكافؤ (المانح) يشارك بأربعة إلكترونات ويفيض إلكترون خامس حر.",
    "stepByStepSolutionEn": [
      "Pentavalent impurities (Group V) have 5 valence electrons. Four electrons bond covalently with four neighboring silicon atoms. The fifth electron is weakly bound ($0.05\\text{ eV}$) and easily dissociates at room temperature into the conduction band, donating a free electron."
    ],
    "stepByStepSolutionAr": [
      "عند إضافة ذرة شائبة خماسية التكافؤ مثل الفوسفور، تشارك بأربعة إلكترونات مع أربع ذرات سيليكون مجاورة ويبقى الإلكترون الخامس حراً ضعيف الارتباط بالنواة، فيتحرر عند درجة حرارة الغرفة ويزيد من تركيز الإلكترونات الحرة."
    ],
    "teacherTipEn": "Because it donates an electron, the pentavalent atom is called a DONOR atom and becomes a positive immobile ion ($\\text{N}_D^+$).",
    "teacherTipAr": "تسمى الذرة الخماسية ذرة مانحة وتتحول بعد تحرر إلكترونها إلى أيون موجب ثابت ($\\text{N}_D^+$)."
  },
  {
    "id": "phys_ch6_db_easy_31",
    "titleEn": "Majority and Minority Carriers in n-Type Semiconductor",
    "titleAr": "حاملات الشحنة السائدة والأقلية في شبه الموصل نوع n",
    "difficulty": "easy",
    "questionEn": "In an n-type semiconductor at room temperature, the majority and minority charge carriers are:",
    "questionAr": "في شبه الموصل من النوع السالب (n-type) عند درجة حرارة الغرفة، تكون حاملات الشحنة السائدة والأقلية هي:",
    "optionsEn": [
      "Majority carriers are positive holes, and minority carriers are electrons",
      "Electrons and holes are present in strictly equal concentrations ($n = p$)",
      "Majority carriers are free electrons ($n$), and minority carriers are holes ($p$)",
      "Positive protons are the majority carriers"
    ],
    "optionsAr": [
      "حاملات الشحنة السائدة هي الفجوات، وحاملات الأقلية هي الإلكترونات",
      "الإلكترونات والفجوات متواجدة بنفس التركيز تماماً ($n = p$)",
      "حاملات الشحنة السائدة (الأغلبية) هي الإلكترونات الحرة ($n$)، وحاملات الأقلية هي الفجوات الموجبة ($p$)",
      "البروتونات الموجبة هي حاملات الشحنة السائدة"
    ],
    "correctAnswer": "Majority carriers are free electrons ($n$), and minority carriers are holes ($p$)",
    "correctIndex": 2,
    "hintEn": "n-type stands for negative: abundant free electrons.",
    "hintAr": "نوع n تعني سالب: وفرة الإلكترونات الحرة السالبة كحاملات شحنة سائدة.",
    "stepByStepSolutionEn": [
      "Doping with donor concentration $\\text{N}_D$ vastly multiplies the free electron population ($n \\approx \\text{N}_D \\gg p$). Thermally generated holes are the minority carriers, with concentration dictated by the Law of Mass Action: $p = n_i^2 / \\text{N}_D$."
    ],
    "stepByStepSolutionAr": [
      "بسبب وفرة الإلكترونات الناتجة عن تأين الذرات المانحة ($\\text{N}_D$)، تصبح الإلكترونات السالبة هي حاملات الشحنة السائدة ($n \\approx \\text{N}_D$)، بينما الفجوات الناتجة عن الكسر الحراري تكون قليلة جداً وتمثل حاملات الشحنة الأقلية."
    ],
    "teacherTipEn": "The electrical conductivity of an n-type semiconductor is dominated by the electron drift current.",
    "teacherTipAr": "التوصيل الكهربي في شبه الموصل نوع n يعتمد أساساً على حركة الإلكترونات الحرة."
  },
  {
    "id": "phys_ch6_db_easy_32",
    "titleEn": "Electrical Neutrality Condition of n-Type Semiconductor",
    "titleAr": "شرط التعادل الكهربي لشبه الموصل نوع n",
    "difficulty": "easy",
    "questionEn": "Even though an n-type semiconductor contains vastly more free electrons than holes, the crystal as a whole remains strictly:",
    "questionAr": "رغم أن شبه الموصل من النوع السالب (n-type) يحتوي على إلكترونات حرة أكثر بكثير من الفجوات، إلا أن البلورة ككل تظل:",
    "optionsEn": [
      "Positively charged by a high electrostatic voltage",
      "Negatively charged like an electron cloud",
      "Non-conductive under all conditions",
      "Electrically neutral, because total negative charge equals total positive charge ($n = p + \\text{N}_D^+$)"
    ],
    "optionsAr": [
      "موجبة الشحنة بجهد كهربي استاتيكي مرتفع",
      "سالبة الشحنة كالسحابة الإلكترونية",
      "غير موصلة للكهرباء تحت جميع الظروف",
      "متعادلة كهربياً تماماً، لأن مجموع الشحنات السالبة يساوي مجموع الشحنات الموجبة ($n = p + \\text{N}_D^+$)"
    ],
    "correctAnswer": "Electrically neutral, because total negative charge equals total positive charge ($n = p + \\text{N}_D^+$)",
    "correctIndex": 3,
    "hintEn": "Every free electron is counterbalanced by an immobile positive donor ion $\\text{N}_D^+$.",
    "hintAr": "كل إلكترون حر إضافي يقابله أيون مانح موجب ثابت داخل الهيكل البلوري.",
    "stepByStepSolutionEn": [
      "The semiconductor crystal was formed from initially neutral silicon and donor atoms. When a donor atom releases an electron into the conduction band, it leaves behind an unneutralized positive core fixed in the lattice ($\\text{N}_D^+$). Thus, the charge neutrality condition $n = p + \\text{N}_D^+$ ensures net charge is zero."
    ],
    "stepByStepSolutionAr": [
      "البلورة بدأت من ذرات متعادلة كهربياً. وعندما يترك الإلكترون الذرة المانحة، تصبح الذرة أيوناً موجباً ثابتاً ($\\text{N}_D^+$) مقيداً في البلورة. فيكون تركيز الشحنات السالبة مساوياً لتركيز الشحنات الموجبة ($n = p + \\text{N}_D^+$) وتظل البلورة متعادلة كهربياً."
    ],
    "teacherTipEn": "A classic trap: 'n-type' refers to the polarity of the majority mobile carriers, NOT to the net charge of the crystal.",
    "teacherTipAr": "خدعة امتحانات كلاسيكية: وصف البلورة بأنها من النوع السالب يعني أن حاملات الشحنة السائدة سالبة، لكن شحنة البلورة الكلية صفر (متعادلة)."
  },
  {
    "id": "phys_ch6_db_easy_33",
    "titleEn": "Doping to Produce p-Type Semiconductor",
    "titleAr": "التطعيم لإنتاج شبه موصل من النوع الموجب (p-type)",
    "difficulty": "easy",
    "questionEn": "To produce a p-type extrinsic semiconductor, a pure silicon crystal is doped with trace amounts of a trivalent element such as:",
    "questionAr": "لإنتاج شبه موصل غير نقي من النوع الموجب (p-type)، تُطعم بلورة السيليكون النقي بنسبة ضئيلة من عنصر ثلاثي التكافؤ مثل:",
    "optionsEn": [
      "Boron ($\\text{B}$), Aluminium ($\\text{Al}$), or Gallium ($\\text{Ga}$)",
      "Phosphorus ($\\text{P}$) or Arsenic ($\\text{As}$)",
      "Carbon ($\\text{C}$) or Lead ($\\text{Pb}$)",
      "Sodium ($\\text{Na}$) or Potassium ($\\text{K}$)"
    ],
    "optionsAr": [
      "البورون ($\\text{B}$)، الألومنيوم ($\\text{Al}$)، أو الجاليوم ($\\text{Ga}$)",
      "الفوسفور ($\\text{P}$) أو الزرنيخ ($\\text{As}$)",
      "الكربون ($\\text{C}$) أو الرصاص ($\\text{Pb}$)",
      "الصوديوم ($\\text{Na}$) أو البوتاسيوم ($\\text{K}$)"
    ],
    "correctAnswer": "Boron ($\\text{B}$), Aluminium ($\\text{Al}$), or Gallium ($\\text{Ga}$)",
    "correctIndex": 0,
    "hintEn": "Trivalent acceptor impurity lacks one electron, immediately creating a vacant hole.",
    "hintAr": "العنصر ثلاثي التكافؤ (المتقبل) ينقصه إلكترون لتكوين 4 روابط فيخلق فجوة موجبة فوراً.",
    "stepByStepSolutionEn": [
      "Trivalent impurities (Group III) have only 3 valence electrons. When substituting for a silicon atom, the trivalent atom bonds with three neighbors, leaving the fourth bond deficient by one electron. This vacant site acts as a positive hole that easily accepts an electron from an adjacent bond."
    ],
    "stepByStepSolutionAr": [
      "العناصر ثلاثية التكافؤ كالبورون تمتلك 3 إلكترونات تكافؤ. عند إحلالها محل ذرة سيليكون، تشارك بـ 3 إلكترونات مع 3 ذرات مجاورة وتبقى الرابطة الرابعة ناقصة إلكتروناً، فتمثل فجوة موجبة مستعدة لاقتناص أي إلكترون من رابطة مجاورة."
    ],
    "teacherTipEn": "Because it accepts an electron, the trivalent atom is called an ACCEPTOR atom and becomes a negative immobile ion ($\\text{N}_A^-$).",
    "teacherTipAr": "تسمى الذرة الثلاثية ذرة متقبلة، وتتحول بعد اقتناص الإلكترون إلى أيون سالب ثابت ($\\text{N}_A^-$)."
  },
  {
    "id": "phys_ch6_db_easy_34",
    "titleEn": "Majority and Minority Carriers in p-Type Semiconductor",
    "titleAr": "حاملات الشحنة السائدة والأقلية في شبه الموصل نوع p",
    "difficulty": "easy",
    "questionEn": "In a p-type semiconductor at room temperature, the majority and minority charge carriers are:",
    "questionAr": "في شبه الموصل من النوع الموجب (p-type) عند درجة حرارة الغرفة، تكون حاملات الشحنة السائدة والأقلية هي:",
    "optionsEn": [
      "Majority carriers are free electrons, and minority carriers are holes",
      "Majority carriers are positive holes ($p$), and minority carriers are free electrons ($n$)",
      "Neutrons are the majority carriers",
      "Electrons and holes are present in identical amounts"
    ],
    "optionsAr": [
      "حاملات الشحنة السائدة هي الإلكترونات، وحاملات الأقلية هي الفجوات",
      "حاملات الشحنة السائدة (الأغلبية) هي الفجوات الموجبة ($p$)، وحاملات الأقلية هي الإلكترونات الحرة ($n$)",
      "النيوترونات هي حاملات الشحنة السائدة",
      "الإلكترونات والفجوات متواجدة بأعداد متطابقة تماماً"
    ],
    "correctAnswer": "Majority carriers are positive holes ($p$), and minority carriers are free electrons ($n$)",
    "correctIndex": 1,
    "hintEn": "p-type stands for positive: abundant positive mobile holes.",
    "hintAr": "نوع p تعني موجب: وفرة الفجوات الموجبة كحاملات شحنة سائدة.",
    "stepByStepSolutionEn": [
      "Doping with acceptor atoms ($\\text{N}_A$) generates huge concentrations of positive holes ($p \\approx \\text{N}_A \\gg n$). The free electrons generated by rare thermal bond breakages are the minority carriers, given by $n = n_i^2 / \\text{N}_A$."
    ],
    "stepByStepSolutionAr": [
      "بسبب وفرة الفجوات الناتجة عن تأين الذرات المتقبلة ($\\text{N}_A$)، تصبح الفجوات الموجبة هي حاملات الشحنة السائدة ($p \\approx \\text{N}_A$)، بينما الإلكترونات الحرة الناتجة عن الكسر الحراري تمثل حاملات الشحنة الأقلية."
    ],
    "teacherTipEn": "Conduction in p-type semiconductors is carried out primarily by valence electrons hopping between holes.",
    "teacherTipAr": "التوصيل الكهربي في النوع الموجب يتم أساساً بحركة الفجوات في نطاق التكافؤ."
  },
  {
    "id": "phys_ch6_db_easy_35",
    "titleEn": "Electrical Neutrality Condition of p-Type Semiconductor",
    "titleAr": "شرط التعادل الكهربي لشبه الموصل نوع p",
    "difficulty": "easy",
    "questionEn": "The charge neutrality equation for a p-type semiconductor containing hole concentration $p$, electron concentration $n$, and ionized acceptor concentration $\\text{N}_A^-$ is:",
    "questionAr": "معادلة التعادل الكهربي لشبه الموصل من النوع الموجب (p-type) بدلالة تركيز الفجوات $p$ والإلكترونات $n$ والأيونات السالبة $\\text{N}_A^-$ هي:",
    "optionsEn": [
      "$p = n - \\text{N}_A^-$",
      "$p + n = \\text{N}_A^-$",
      "$p = n + \\text{N}_A^-$ (crystal is electrically neutral overall)",
      "$p = \\text{N}_A^- \\times n$"
    ],
    "optionsAr": [
      "$p = n - \\text{N}_A^-$",
      "$p + n = \\text{N}_A^-$",
      "$p = n + \\text{N}_A^-$ (البلورة متعادلة كهربياً ككل)",
      "$p = \\text{N}_A^- \\times n$"
    ],
    "correctAnswer": "$p = n + \\text{N}_A^-$ (crystal is electrically neutral overall)",
    "correctIndex": 2,
    "hintEn": "Total positive charges ($p$) $=$ Total negative charges ($n + \\text{N}_A^-$).",
    "hintAr": "مجموع الشحنات الموجبة (الفجوات) = مجموع الشحنات السالبة (الإلكترونات + الأيونات السالبة).",
    "stepByStepSolutionEn": [
      "Each created hole leaves an ionized acceptor atom with an extra negative electron, locked in the lattice as an immobile negative ion ($\\text{N}_A^-$). Setting total positive charge equal to total negative charge yields $p = n + \\text{N}_A^-$."
    ],
    "stepByStepSolutionAr": [
      "كل فجوة إضافية نتجت عن ذرة متقبلة يقابلها أيون متقبل سالب ثابت في الشبكة ($\\text{N}_A^-$). ولذلك تتساوى الشحنات الموجبة مع السالبة: $p = n + \\text{N}_A^-$، والبلورة ككل متعادلة الشحنة كهربياً."
    ],
    "teacherTipEn": "Just like n-type, a p-type crystal has ZERO net electrical charge.",
    "teacherTipAr": "مثل بلورة النوع السالب تماماً، بلورة النوع الموجب متعادلة كهربياً وصافي شحنتها صفر."
  },
  {
    "id": "phys_ch6_db_easy_36",
    "titleEn": "Law of Mass Action for Semiconductor Carriers",
    "titleAr": "قانون فعل الكتلة لحاملات الشحنة في أشباه الموصلات",
    "difficulty": "easy",
    "questionEn": "In any semiconductor (pure, n-type, or p-type) in thermal equilibrium at a constant temperature, the product of electron and hole concentrations is given by the Law of Mass Action as:",
    "questionAr": "في أي شبه موصل (نقي أو غير نقي من النوع n أو p) عند الاتزان الحراري عند ثبوت درجة الحرارة، يعطى حاصل ضرب تركيزي الإلكترونات والفجوات بقانون فعل الكتلة بالعلاقة:",
    "optionsEn": [
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n \\cdot p = 2n_i$",
      "$n \\cdot p = n_i^2 = \\text{constant}$"
    ],
    "optionsAr": [
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n \\cdot p = 2n_i$",
      "$n \\cdot p = n_i^2 = \\text{ثابت}$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2 = \\text{constant}$",
    "correctIndex": 3,
    "hintEn": "The product $n \\cdot p$ is invariant at a fixed temperature, equal to $n_i^2$.",
    "hintAr": "حاصل ضرب تركيز الإلكترونات الحرة في تركيز الفجوات مقدار ثابت يساوي $n_i^2$ عند ثبوت درجة الحرارة.",
    "stepByStepSolutionEn": [
      "The Law of Mass Action states that at a fixed temperature, the product of mobile carrier densities is strictly constant: $n \\cdot p = n_i^2$, where $n_i$ is the intrinsic carrier density. Doping increases one carrier while suppressing the other via recombination."
    ],
    "stepByStepSolutionAr": [
      "ينص قانون فعل الكتلة في أشباه الموصلات على أن حاصل ضرب تركيز الإلكترونات الحرة $n$ في تركيز الفجوات $p$ يساوي دائماً مقداراً ثابتاً هو $n_i^2$ عند ثبوت درجة الحرارة. فزيادة أحد التركيزين بالتطعيم تؤدي حتماً لنقصان الآخر لإبقاء حاصل ضربهما ثابتاً."
    ],
    "teacherTipEn": "If you double donor doping ($\\text{N}_D \\times 2$), electron concentration doubles ($n \\approx 2\\text{N}_D$) and hole concentration is halved ($p = n_i^2 / 2\\text{N}_D$).",
    "teacherTipAr": "إذا تضاعف تركيز الإلكترونات بالتطعيم، يقل تركيز الفجوات إلى النصف ليظل حاصل ضربهما ثابتاً."
  },
  {
    "id": "phys_ch6_db_easy_37",
    "titleEn": "Formation of Depletion Layer in PN Junction",
    "titleAr": "تكوين المنطقة القاحلة (منطقة النضوب) في الوصلة الثنائية",
    "difficulty": "easy",
    "questionEn": "When a p-type semiconductor is joined to an n-type semiconductor, free electrons and holes diffuse across the interface, creating a 'depletion region' characterized by:",
    "questionAr": "عند تلامس بلورة من النوع p مع بلورة من النوع n لتكوين وصلة ثنائية، تنتشر الإلكترونات والفجوات عبر موضع التلامس مكونة 'منطقة نضوب' تتميز بأنها:",
    "optionsEn": [
      "A thin boundary layer devoid of mobile charge carriers, containing fixed positive donor ions on the n-side and fixed negative acceptor ions on the p-side",
      "A region packed with thousands of free electrons and holes",
      "A region made entirely of pure copper metal",
      "A region that generates alternating current automatically"
    ],
    "optionsAr": [
      "طبقة فاصلة رقيقة تخلو تماماً من حاملات الشحنة المتحركة، وتحتوي على أيونات موجبة ثابتة في جانب n وأيونات سالبة ثابتة في جانب p",
      "منطقة ممتلئة بآلاف الإلكترونات والفجوات الحرة السريعة",
      "منطقة مصنوعة بالكامل من النحاس النقي",
      "منطقة تولد تياراً متردداً تلقائياً"
    ],
    "correctAnswer": "A thin boundary layer devoid of mobile charge carriers, containing fixed positive donor ions on the n-side and fixed negative acceptor ions on the p-side",
    "correctIndex": 0,
    "hintEn": "Recombination empties the boundary of mobile charges, leaving fixed ions.",
    "hintAr": "انتشار حاملات الشحنة يفرغ منطقة التلامس من الحوامل الحرة مخلفاً أيونات ثابتة غير متحركة.",
    "stepByStepSolutionEn": [
      "Electrons diffuse from n to p and holes from p to n. Near the junction, they recombine and annihilate. This leaves behind unneutralized, immobile donor ions ($\\text{N}_D^+$) on the n-side and acceptor ions ($\\text{N}_A^-$) on the p-side, depleting the region of mobile carriers."
    ],
    "stepByStepSolutionAr": [
      "تنتشر الإلكترونات من منطقة n إلى p وتنتشر الفجوات من p إلى n وتتحد بالقرب من موضع التلامس. هذا يترك أيونات موجبة ثابتة في بلورة n وأيونات سالبة ثابتة في بلورة p دون وجود أي حاملات شحنة حرة، فتسمى المنطقة الفاصلة بالمنطقة القاحلة أو منطقة النضوب."
    ],
    "teacherTipEn": "The depletion layer acts as an internal insulating barrier that resists further carrier diffusion.",
    "teacherTipAr": "تعمل منطقة النضوب كحاجز عازل داخلي يمنع استمرار انتشار الشحنات."
  },
  {
    "id": "phys_ch6_db_easy_38",
    "titleEn": "Internal Barrier Potential of PN Junction",
    "titleAr": "حاجز الجهد الداخلي (جهد الاتصال) للوصلة الثنائية",
    "difficulty": "easy",
    "questionEn": "The fixed positive and negative ions in the depletion region establish an internal electric field that produces a potential difference called the 'Barrier Potential' ($V_B$). Its function is to:",
    "questionAr": "تولد الأيونات الموجبة والسالبة الثابتة في منطقة النضوب مجالاً كهربياً داخلياً ينشأ عنه فرق جهد يسمى 'حاجز الجهد' ($V_B$). وظيفته الأساسية هي:",
    "optionsEn": [
      "Accelerate electrons until they leave the semiconductor completely",
      "Oppose and halt further diffusion of majority electrons and holes across the junction",
      "Cool the diode down to absolute zero",
      "Convert the diode into a nuclear reactor"
    ],
    "optionsAr": [
      "تعجيل الإلكترونات حتى تخرج خارج البلورة تماماً",
      "مقاومة وإيقاف استمرار انتشار حاملات الشحنة السائدة (الإلكترونات والفجوات) عبر موضع التلامس",
      "تبريد الوصلة الثنائية إلى الصفر المطلق",
      "تحويل الوصلة الثنائية إلى مفاعل نووي"
    ],
    "correctAnswer": "Oppose and halt further diffusion of majority electrons and holes across the junction",
    "correctIndex": 1,
    "hintEn": "Internal electric field directed from n (positive ions) to p (negative ions).",
    "hintAr": "المجال الكهربي الداخلي يتجه من الأيونات الموجبة (في n) إلى السالبة (في p) فيوقف الانتشار.",
    "stepByStepSolutionEn": [
      "The internal electric field points from the positive donor ions (n-side) to the negative acceptor ions (p-side). This field exerts forces opposing the diffusion of majority carriers. When the barrier potential reaches $\\sim 0.7\\text{ V}$ for Silicon ($\\sim 0.3\\text{ V}$ for Germanium), diffusion current balances drift current and equilibrium is achieved."
    ],
    "stepByStepSolutionAr": [
      "ينشأ مجال كهربي داخلي يتجه من الأيونات الموجبة في n إلى السالبة في p، ويولد فرق جهد يسمى حاجز الجهد (حوالي $0.7\\text{ V}$ في السيليكون). هذا المجال يولد تيار انسياق يعاكس تيار الانتشار، وعند تساويهما يتوقف الانتشار تماماً ويتحقق الاتزان."
    ],
    "teacherTipEn": "Silicon diodes require an external forward voltage of $\\ge 0.7\\text{ V}$ to overcome this barrier.",
    "teacherTipAr": "تحتاج وصلة السيليكون إلى جهد أمامي لا يقل عن 0.7 فولت للتغلب على حاجز الجهد وتمرير التيار."
  },
  {
    "id": "phys_ch6_db_easy_39",
    "titleEn": "Forward Bias Polarity Connection for PN Diode",
    "titleAr": "طريقة التوصيل الأمامي للوصلة الثنائية (الدايود)",
    "difficulty": "easy",
    "questionEn": "To connect a PN junction diode in 'Forward Bias', the external DC voltage source terminals must be connected such that:",
    "questionAr": "لتوصيل الوصلة الثنائية (الدايود) في حالة 'توصيل أمامي'، يجب توصيل أقطاب مصدر الجهد الخارجي بحيث يكون:",
    "optionsEn": [
      "The positive terminal is connected to the n-type, and negative to p-type",
      "Both regions are connected to the positive terminal simultaneously",
      "The positive terminal is connected to the p-type region, and the negative terminal is connected to the n-type region",
      "The diode is disconnected from all external power"
    ],
    "optionsAr": [
      "القطب الموجب متصلاً بـ n والسالب متصلاً بـ p",
      "توصيل كلا المنطقتين بالقطب الموجب معاً",
      "القطب الموجب متصلاً بالبلورة نوع p، والقطب السالب متصلاً بالبلورة نوع n",
      "فصل الدايود عن أي مصدر خارجي"
    ],
    "correctAnswer": "The positive terminal is connected to the p-type region, and the negative terminal is connected to the n-type region",
    "correctIndex": 2,
    "hintEn": "Positive to p, Negative to n: charges repel forward into the junction.",
    "hintAr": "الموجب مع الموجب (p) والسالب مع السالب (n) للتنافر مع الحوامل ودفعها نحو موضع التلامس.",
    "stepByStepSolutionEn": [
      "In forward bias, the battery's positive terminal connects to the p-type and negative terminal connects to the n-type. The positive terminal repels holes and the negative terminal repels electrons toward the junction, counteracting and collapsing the internal barrier potential."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل الأمامي يوصل القطب الموجب للبطارية بالبلورة p والقطب السالب بالبلورة n. فيتنافر القطب الموجب مع الفجوات والسالب مع الإلكترونات وتندفع الحوامل نحو موضع التلامس متغلبة على حاجز الجهد الداخلي."
    ],
    "teacherTipEn": "Forward bias mnemonic: P connects to Positive, N connects to Negative.",
    "teacherTipAr": "تذكر بسهولة: توصيل أمامي يعني P مع الموجب (Positive) و N مع السالب (Negative)."
  },
  {
    "id": "phys_ch6_db_easy_40",
    "titleEn": "Forward Bias Electrical Characteristics",
    "titleAr": "الخواص الكهربية للوصلة الثنائية في التوصيل الأمامي",
    "difficulty": "easy",
    "questionEn": "When a PN junction is forward biased with a voltage exceeding the barrier potential ($V > V_B$):",
    "questionAr": "عند توصيل الوصلة الثنائية توصيلاً أمامياً بجهد يتجاوز حاجز الجهد ($V > V_B$):",
    "optionsEn": [
      "The depletion region widens, and current is completely blocked",
      "The diode explodes immediately",
      "The current alternates back and forth without resistance",
      "The depletion region narrows, the barrier potential is overcome, diode resistance becomes very small, and a large forward current flows"
    ],
    "optionsAr": [
      "يتسع نطاق منطقة النضوب وينقطع التيار تماماً",
      "تنفجر الوصلة الثنائية فوراً",
      "يتردد التيار ذهاباً وإياباً دون أي مقاومة",
      "يضيق اتساع منطقة النضوب، وينهار حاجز الجهد، وتصبح مقاومة الوصلة صغيرة جداً، ويمر تيار كهربي أمامي كبير"
    ],
    "correctAnswer": "The depletion region narrows, the barrier potential is overcome, diode resistance becomes very small, and a large forward current flows",
    "correctIndex": 3,
    "hintEn": "External field opposes internal barrier field, collapsing the barrier.",
    "hintAr": "المجال الكهربي الخارجي يعاكس المجال الداخلي فيقلل اتساع منطقة النضوب وتمر الشحنات بسهولة.",
    "stepByStepSolutionEn": [
      "The external electric field opposes the internal barrier field. As forward voltage increases past $V_B$, the depletion layer thins dramatically, the internal barrier drops to zero, and majority carriers flood across the junction, yielding an exponential surge in forward current ($I$)."
    ],
    "stepByStepSolutionAr": [
      "المجال الكهربي الخارجي يعمل في عكس اتجاه المجال الداخلي لمنطقة النضوب، مما يقلل سمكها ويهدم حاجز الجهد. ونتيجة لذلك تنخفض مقاومة الوصلة بدرجة كبيرة وتتدفق حاملات الشحنة السائدة بسهولة ويمر تيار أمامي شديد."
    ],
    "teacherTipEn": "In forward bias, the diode acts approximately as an ideal closed switch with small forward resistance ($R_f \\approx 0$).",
    "teacherTipAr": "في التوصيل الأمامي تسلك الوصلة الثنائية سلوك مفتاح مغلق ذي مقاومة صغيرة جداً."
  },
  {
    "id": "phys_ch6_db_easy_41",
    "titleEn": "Reverse Bias Polarity and Diode Resistance",
    "titleAr": "طريقة التوصيل العكسي للوصلة الثنائية وخواصها",
    "difficulty": "easy",
    "questionEn": "When a PN junction diode is connected in 'Reverse Bias' (positive terminal to n-side, negative terminal to p-side):",
    "questionAr": "عند توصيل الوصلة الثنائية توصيلاً عكسياً (القطب الموجب مع البلورة n والقطب السالب مع البلورة p):",
    "optionsEn": [
      "The depletion region widens, the barrier potential increases, diode resistance becomes extremely high, and current drops to virtually zero",
      "A huge current flows because resistance drops to zero",
      "The diode turns into a laser beam source",
      "All covalent bonds in the diode heal permanently"
    ],
    "optionsAr": [
      "يزداد اتساع منطقة النضوب، ويزداد حاجز الجهد، وتصبح مقاومة الوصلة كبيرة جداً، وينعدم التيار تقريباً (صفر)",
      "يمر تيار هائل لانعدام المقاومة تماماً",
      "تتحول الوصلة الثنائية إلى مصدر ليزر ناصع",
      "تلتئم جميع الروابط التساهمية في البلورة نهائياً"
    ],
    "correctAnswer": "The depletion region widens, the barrier potential increases, diode resistance becomes extremely high, and current drops to virtually zero",
    "correctIndex": 0,
    "hintEn": "External field reinforces internal field, pulling carriers away from junction.",
    "hintAr": "المجال الخارجي يدعم المجال الداخلي وتنجذب الحوامل نحو أقطاب البطارية مبتعدة عن منطقة التلامس.",
    "stepByStepSolutionEn": [
      "The positive battery terminal attracts electrons away from the junction on the n-side, and the negative terminal attracts holes away on the p-side. The depletion layer widens and the barrier potential strengthens, completely blocking majority carriers. Only a negligible nanoampere leakage current of minority carriers flows."
    ],
    "stepByStepSolutionAr": [
      "يجذب القطب الموجب للبطارية الإلكترونات الحرة في البلورة n ويجذب القطب السالب الفجوات في البلورة p مبتعدة عن موضع التلامس. فيزداد سمك منطقة النضوب ويزداد حاجز الجهد بدرجة كبيرة وتصبح المقاومة هائلة، فينقطع تيار الأغلبية ولا يمر سوى تيار تسريب ضئيل جداً لحاملات الأقلية يناهز الصفر."
    ],
    "teacherTipEn": "In reverse bias, the diode behaves as an open switch ($R_r \\to \\infty$).",
    "teacherTipAr": "في التوصيل العكسي تسلك الوصلة الثنائية سلوك مفتاح كهربي مفتوح ذي مقاومة شبه لانهائية."
  },
  {
    "id": "phys_ch6_db_easy_42",
    "titleEn": "Half-Wave Rectification Using a PN Junction Diode",
    "titleAr": "تقويم التيار المتردد نصف موجي باستخدام الوصلة الثنائية",
    "difficulty": "easy",
    "questionEn": "A PN junction diode is widely used for 'rectification' in power supplies because it conducts current:",
    "questionAr": "تستخدم الوصلة الثنائية (الدايود) في عملية تقويم التيار المتردد في دوائر التغذية الكهربية لأنها تسمح بمرور التيار:",
    "optionsEn": [
      "Equally in both positive and negative directions without resistance",
      "In one direction only (during forward-biased half-cycles), blocking it during reverse-biased half-cycles",
      "Only when exposed to sunlight",
      "By doubling the frequency of alternating current without changing its shape"
    ],
    "optionsAr": [
      "في كلا الاتجاهين الموجب والسالب بالتساوي دون أي مقاومة",
      "في اتجاه واحد فقط (خلال أنصاف الدورات ذات التوصيل الأمامي)، وتمنع مروره في أنصاف الدورات العكسية",
      "فقط عند تعريضها لأشعة الشمس",
      "بمضاعفة تردد التيار المتردد دون تغيير شكله"
    ],
    "correctAnswer": "In one direction only (during forward-biased half-cycles), blocking it during reverse-biased half-cycles",
    "correctIndex": 1,
    "hintEn": "One-way electrical valve: conducts forward, blocks reverse.",
    "hintAr": "صمام كهربي أحادي الاتجاه: يمرر أنصاف الدورات الأمامية ويحجب العكسية.",
    "stepByStepSolutionEn": [
      "During positive half-cycles of AC, the diode is forward-biased and conducts with low resistance. During negative half-cycles, it is reverse-biased and blocks the current. The result is a pulsating, unidirectional output current (half-wave rectification)."
    ],
    "stepByStepSolutionAr": [
      "عند مرور التيار المتردد، يكون الدايود في وضع توصيل أمامي خلال النصف الأول من الدورة فيسمح بمرور التيار لانخفاض مقاومته. ويكون في وضع توصيل عكسي خلال النصف الثاني فيمنع مرور التيار لارتفاع مقاومته. فيخرج التيار في اتجاه واحد على شكل نبضات مقومة نصف موجياً."
    ],
    "teacherTipEn": "A bridge of 4 diodes produces full-wave rectification, converting both halves of the AC cycle into direct current.",
    "teacherTipAr": "باستخدام قنطرة مكونة من 4 دايودات، يمكن تحقيق تقويم موجي كامل للاستفادة من نصفي دورة التيار المتردد."
  },
  {
    "id": "phys_ch6_db_easy_43",
    "titleEn": "Three Regions of a Bipolar Junction Transistor",
    "titleAr": "المناطق الثلاث لترانزستور الوصلة ثنائي القطبية",
    "difficulty": "easy",
    "questionEn": "A bipolar junction transistor (BJT) consists of three distinct semiconductor regions named:",
    "questionAr": "يتكون ترانزستور الوصلة ثنائي القطبية (BJT) من ثلاث مناطق بلورية متتابعة تسمى:",
    "optionsEn": [
      "Anode, Cathode, and Grid",
      "North Pole, South Pole, and Core",
      "Emitter (E), Base (B), and Collector (C)",
      "Source, Drain, and Wire"
    ],
    "optionsAr": [
      "المصعد، المهبط، والشبكة",
      "القطب الشمالي، القطب الجنوبي، والقلب",
      "الباعث (Emitter - E)، القاعدة (Base - B)، والمجمع (Collector - C)",
      "المصدر، المصرف، والسلك"
    ],
    "correctAnswer": "Emitter (E), Base (B), and Collector (C)",
    "correctIndex": 2,
    "hintEn": "Transistor structure: Emitter (E), Base (B), Collector (C).",
    "hintAr": "أطراف الترانزستور: الباعث والقاعدة والمجمع.",
    "stepByStepSolutionEn": [
      "A BJT consists of two back-to-back PN junctions sharing a common middle layer. The three terminals are: Emitter (injects carriers), Base (controls transmission), and Collector (gathers carriers). Transistors exist as either NPN or PNP configurations."
    ],
    "stepByStepSolutionAr": [
      "يتكون الترانزستور من بلورتين من نفس النوع بينهما بلورة رقيقة من نوع مخالف (نوع NPN أو PNP). ومناطقه الثلاث هي: الباعث E (يطلق الشحنات)، القاعدة B (الطبقة الوسطى الرقيقة)، والمجمع C (يستقبل الشحنات)."
    ],
    "teacherTipEn": "NPN transistors are vastly preferred over PNP because electrons have higher mobility than holes.",
    "teacherTipAr": "ترانزستور NPN أكثر انتشاراً واستخداماً من PNP لأن حركة وسرعة الإلكترونات أعلى بكثير من الفجوات."
  },
  {
    "id": "phys_ch6_db_easy_44",
    "titleEn": "Base Region Physical Characteristics in Transistor",
    "titleAr": "الخصائص الفيزيائية لقاعدة الترانزستور",
    "difficulty": "easy",
    "questionEn": "In any properly designed junction transistor, the central Base region must be fabricated to be:",
    "questionAr": "في أي ترانزستور وظيفي مصمم بكفاءة، يجب أن تكون منطقة القاعدة الوسطى مصممة بحيث تكون:",
    "optionsEn": [
      "Extremely thick with the highest impurity doping concentration",
      "Made of liquid mercury",
      "Completely insulating glass",
      "Extremely thin and very lightly doped with impurities"
    ],
    "optionsAr": [
      "سميكة جداً وبأعلى تركيز تطعيم للشوائب",
      "مصنوعة من الزئبق السائل",
      "من الزجاج العازل تماماً",
      "رقيقة جداً في السمك وقليلة الشوائب (خفيفة التطعيم بدرجة كبيرة)"
    ],
    "correctAnswer": "Extremely thin and very lightly doped with impurities",
    "correctIndex": 3,
    "hintEn": "Thin + lightly doped $\\implies$ minimal carrier recombination in the base.",
    "hintAr": "رقة القاعدة وقلة شوائبها تضمن نفاذ أكثر من 95% من الشحنات للمجمع دون فقد.",
    "stepByStepSolutionEn": [
      "The base must be very thin (micrometers) and lightly doped so that only a tiny fraction ($\\sim 1-5\\%$) of carriers injected from the emitter recombine in the base. The remaining $>95\\%$ diffuse across into the collector, achieving a high current gain."
    ],
    "stepByStepSolutionAr": [
      "تصنع القاعدة رقيقة جداً وقليلة الشوائب حتى لا تلتقي فيها إلا نسبة ضئيلة جداً من الشحنات الآتية من الباعث (1% إلى 5% فقط)، بينما تنفذ النسبة العظمى (95% إلى 99%) عبرها إلى المجمع، مما يحقق كفاءة تكبير عالية."
    ],
    "teacherTipEn": "If the base were thick or heavily doped, all carriers would recombine in the base and no current would reach the collector, destroying transistor action.",
    "teacherTipAr": "لو كانت القاعدة سميكة أو كثيرة الشوائب لاتحدت كل الإلكترونات فيها ولم يصل أي تيار للمجمع ولتلاشى عمل الترانزستور."
  },
  {
    "id": "phys_ch6_db_easy_45",
    "titleEn": "Fundamental Transistor Current Equation",
    "titleAr": "المعادلة الأساسية لتيارات الترانزستور",
    "difficulty": "easy",
    "questionEn": "According to Kirchhoff's current law applied to any junction transistor, the relationship between Emitter current ($I_E$), Base current ($I_B$), and Collector current ($I_C$) is:",
    "questionAr": "وفقاً لقانون كيرشوف للتيار المطبق على الترانزستور، فإن العلاقة بين تيار الباعث ($I_E$) وتيار القاعدة ($I_B$) وتيار المجمع ($I_C$) هي:",
    "optionsEn": [
      "$I_E = I_B + I_C$",
      "$I_C = I_E + I_B$",
      "$I_B = I_E + I_C$",
      "$I_E = I_B \\times I_C$"
    ],
    "optionsAr": [
      "$I_E = I_B + I_C$",
      "$I_C = I_E + I_B$",
      "$I_B = I_E + I_C$",
      "$I_E = I_B \\times I_C$"
    ],
    "correctAnswer": "$I_E = I_B + I_C$",
    "correctIndex": 0,
    "hintEn": "All carriers originate from the Emitter: $I_E = I_B + I_C$.",
    "hintAr": "تيار الباعث هو المصدر الكلي وينقسم بين تيار القاعدة وتيار المجمع: $I_E = I_B + I_C$.",
    "stepByStepSolutionEn": [
      "All charge carriers enter the transistor through the Emitter. A tiny portion forms the Base current ($I_B \\approx 1-5\\%$), while the vast majority reaches the Collector ($I_C \\approx 95-99\\%$). Thus, conservation of charge dictates $I_E = I_B + I_C$."
    ],
    "stepByStepSolutionAr": [
      "جميع الشحنات تنطلق أصلاً من الباعث، ويتسرب جزء يسير منها عبر القاعدة مكوناً تيار القاعدة $I_B$، بينما تنجذب الأغلبية الساحقة للمجمع مكونة تيار المجمع $I_C$. وطبقاً لحفظ الشحنة: $I_E = I_B + I_C$."
    ],
    "teacherTipEn": "Emitter current is always the largest of all three currents ($I_E > I_C \\gg I_B$).",
    "teacherTipAr": "تيار الباعث هو الأكبر دائماً في الترانزستور ($I_E > I_C \\gg I_B$)."
  },
  {
    "id": "phys_ch6_db_easy_46",
    "titleEn": "Common-Emitter Current Amplification Factor Beta",
    "titleAr": "معامل تكبير التيار في الترانزستور في دائرة الباعث المشترك",
    "difficulty": "easy",
    "questionEn": "In a common-emitter transistor circuit, the current gain (current amplification factor $\\beta_e$) is mathematically defined as:",
    "questionAr": "في دائرة الترانزستور كباعث مشترك، يعرف معامل تكبير التيار ($\\beta_e$) رياضياً بأنه:",
    "optionsEn": [
      "$\\beta_e = \\frac{I_B}{I_C}$",
      "$\\beta_e = \\frac{I_C}{I_B}$ (or $\\frac{\\Delta I_C}{\\Delta I_B}$)",
      "$\\beta_e = \\frac{I_E}{I_C}$",
      "$\\beta_e = \\frac{I_B}{I_E}$"
    ],
    "optionsAr": [
      "$\\beta_e = \\frac{I_B}{I_C}$",
      "$\\beta_e = \\frac{I_C}{I_B}$ (أو $\\frac{\\Delta I_C}{\\Delta I_B}$)",
      "$\\beta_e = \\frac{I_E}{I_C}$",
      "$\\beta_e = \\frac{I_B}{I_E}$"
    ],
    "correctAnswer": "$\\beta_e = \\frac{I_C}{I_B}$ (or $\\frac{\\Delta I_C}{\\Delta I_B}$)",
    "correctIndex": 1,
    "hintEn": "Output is Collector current; Input is Base current: $\\beta_e = \\text{Output} / \\text{Input} = I_C / I_B$.",
    "hintAr": "معامل تكبير التيار = تيار الخرج (المجمع) مقسوماً على تيار الدخل (القاعدة).",
    "stepByStepSolutionEn": [
      "In the common-emitter configuration, the small input signal controls base current $I_B$, controlling a much larger collector current $I_C$. The ratio of collector current to base current is the current amplification factor $\\beta_e = \\frac{I_C}{I_B}$, typically ranging from $20$ to $500$."
    ],
    "stepByStepSolutionAr": [
      "في توصيل الباعث المشترك، تدخل الإشارة الصغيرة عبر دائرة القاعدة $I_B$ وتخرج مكبرة عبر دائرة المجمع $I_C$. والنسبة بين تيار المجمع وتيار القاعدة هي معامل تكبير التيار: $\\beta_e = \\frac{I_C}{I_B}$، وتتراوح قيمتها عادة بين 20 و 500 بدون وحدات قياس."
    ],
    "teacherTipEn": "Because $I_C \\gg I_B$, $\\beta_e$ is always vastly greater than 1.",
    "teacherTipAr": "بما أن تيار المجمع أكبر بكثير من تيار القاعدة، فإن $\\beta_e$ أكبر بكثير من الواحد الصحيح دائماً."
  },
  {
    "id": "phys_ch6_db_easy_47",
    "titleEn": "Current Transfer Ratio Alpha in Transistors",
    "titleAr": "نسبة التوزيع للتيار في الترانزستور (ألفا)",
    "difficulty": "easy",
    "questionEn": "The current transfer ratio (alpha $\\alpha_e$) of a transistor is defined as $\\alpha_e = \\frac{I_C}{I_E}$. Its numerical value is always:",
    "questionAr": "تعرف نسبة التوزيع للتيار ($\\alpha_e$) في الترانزستور بأنها $\\alpha_e = \\frac{I_C}{I_E}$. وتكون قيمتها العددية دائماً:",
    "optionsEn": [
      "Greater than 100",
      "Zero under all conditions",
      "Slightly less than 1 (typically $0.95 - 0.99$), having no units",
      "Negative because current flows backward"
    ],
    "optionsAr": [
      "أكبر من 100",
      "صفراً تحت جميع الظروف",
      "أقل قليلاً من الواحد الصحيح (تتراوح عادة بين 0.95 و 0.99) وليس لها وحدة قياس",
      "سالبة لأن التيار يتحرك للخلف"
    ],
    "correctAnswer": "Slightly less than 1 (typically $0.95 - 0.99$), having no units",
    "correctIndex": 2,
    "hintEn": "$I_C$ is slightly less than $I_E$ because $I_E = I_B + I_C$. Thus $\\alpha_e = I_C/I_E < 1$.",
    "hintAr": "تيار المجمع يمثل معظم تيار الباعث ولكن ينقصه تيار القاعدة، لذلك $\\alpha_e < 1$ دائماً.",
    "stepByStepSolutionEn": [
      "Since $I_E = I_B + I_C$, the collector current $I_C$ is slightly smaller than the emitter current $I_E$ due to the minor base recombination current $I_B$. Therefore, $\\alpha_e = \\frac{I_C}{I_E} = \\frac{\\beta_e}{\\beta_e + 1}$ is strictly less than 1, typically between $0.95$ and $0.99$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $I_E = I_B + I_C$ وتيار القاعدة يستهلك نسبة ضئيلة من الشحنات، فإن تيار المجمع يكون أقل قليلاً من تيار الباعث، وتكون النسبة $\\alpha_e = \\frac{I_C}{I_E}$ أقل دائماً من الواحد الصحيح (حوالي 0.95 إلى 0.99)."
    ],
    "teacherTipEn": "Relation between parameters: $\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e}$ and $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "teacherTipAr": "العلاقة بين المعاملين: $\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e}$ و $\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$."
  },
  {
    "id": "phys_ch6_db_easy_48",
    "titleEn": "Phase Inversion in Common-Emitter Voltage Amplifier",
    "titleAr": "انعكاس الطور بمقدار 180 درجة في مكبر الباعث المشترك",
    "difficulty": "easy",
    "questionEn": "When a transistor is operated as an AC voltage amplifier in the common-emitter configuration, the output voltage signal across the collector load resistor is:",
    "questionAr": "عند استخدام الترانزستور كمكبر للجهد المتردد في دائرة الباعث المشترك، فإن إشارة جهد الخرج عبر مقاومة المجمع تتميز بأنها:",
    "optionsEn": [
      "In identical phase ($0^\\circ$ shift) with half the input voltage",
      "Completely rectified into flat zero volts",
      "Shifted in phase by $90^\\circ$ clockwise",
      "Amplified with a $180^\\circ$ phase inversion (phase shift of $\\pi$ radians) relative to the input signal"
    ],
    "optionsAr": [
      "متفقة في الطور ($0^\\circ$) وبنصف جهد الدخل",
      "تتحول إلى جهد مستمر مساوٍ للصفر",
      "بها فرق طور قدره $90^\\circ$",
      "تكون مكبرة في الجهد وبها انعكاس في الطور بمقدار $180^\\circ$ (فرق طور قدره $\\pi$) بالنسبة لإشارة الدخل"
    ],
    "correctAnswer": "Amplified with a $180^\\circ$ phase inversion (phase shift of $\\pi$ radians) relative to the input signal",
    "correctIndex": 3,
    "hintEn": "$V_{CE} = V_{CC} - I_C R_C$. When input rises, $I_C \\uparrow \\implies V_{CE} \\downarrow$.",
    "hintAr": "معادلة الخرج: $V_{CE} = V_{CC} - I_C R_C$. زيادة جهد الدخل تزيد $I_C$ فتقلل جهد الخرج $V_{CE}$.",
    "stepByStepSolutionEn": [
      "The output voltage is given by the load line equation $V_{CE} = V_{CC} - I_C R_C$. When the input signal voltage increases, base current $I_B$ and collector current $I_C$ both increase, which increases the voltage drop $I_C R_C$, thereby decreasing the output voltage $V_{CE}$. Thus, a positive input half-cycle yields a negative output half-cycle ($180^\\circ$ inversion)."
    ],
    "stepByStepSolutionAr": [
      "معادلة جهد الخرج هي $V_{CE} = V_{CC} - I_C R_C$. عند زيادة جهد إشارة الدخل يزداد تيار القاعدة فيزداد تيار المجمع، وبالتالي يزداد هبوط الجهد عبر المقاومة ($I_C R_C$) فينخفض جهد الخرج $V_{CE}$. لذلك تنقلب إشارة الخرج بمقدار 180 درجة عن إشارة الدخل."
    ],
    "teacherTipEn": "This $180^\\circ$ phase inversion is a signature property of the common-emitter amplifier in electronics.",
    "teacherTipAr": "انعكاس الطور بمقدار $180^\\circ$ خاصية مميزة لمكبر الباعث المشترك في الدوائر الإلكترونية."
  },
  {
    "id": "phys_ch6_db_easy_49",
    "titleEn": "Transistor as an Electronic Inverter and Switch",
    "titleAr": "استخدام الترانزستور كمفتاح إلكتروني عاكس",
    "difficulty": "easy",
    "questionEn": "When a transistor is utilized as an electronic switch in digital logic circuits:",
    "questionAr": "عند استخدام الترانزستور كمفتاح إلكتروني في دوائر الإلكترونيات الرقمية:",
    "optionsEn": [
      "A high input voltage ($V_{\\text{in}} = 1$) drives the transistor into saturation, making output $V_{\\text{out}} \\approx 0$ (switch ON), while low input ($V_{\\text{in}} = 0$) places it in cutoff, making $V_{\\text{out}} \\approx V_{CC} = 1$ (switch OFF)",
      "It conducts current only when mechanically tapped with a hammer",
      "Output voltage is always equal to input voltage without change",
      "It can only be used once before being discarded"
    ],
    "optionsAr": [
      "جهد الدخل المرتفع ($V_{\\text{in}} = 1$) يجعل الترانزستور في حالة تشبع فيصبح جهد الخرج $V_{\\text{out}} \\approx 0$ (مفتاح مغلق ON)، والجهد المنخفض ($V_{\\text{in}} = 0$) يجعله في حالة قطع فيصبح الخرج مرتفعاً $V_{\\text{out}} \\approx V_{CC} = 1$ (مفتاح مفتوح OFF)",
      "يمرر التيار فقط عند طرقه ميكانيكياً بمطرقة",
      "جهد الخرج يساوي دائماً جهد الدخل دون أي تغيير",
      "يمكن استخدامه لمرة واحدة فقط ثم يتلف"
    ],
    "correctAnswer": "A high input voltage ($V_{\\text{in}} = 1$) drives the transistor into saturation, making output $V_{\\text{out}} \\approx 0$ (switch ON), while low input ($V_{\\text{in}} = 0$) places it in cutoff, making $V_{\\text{out}} \\approx V_{CC} = 1$ (switch OFF)",
    "correctIndex": 0,
    "hintEn": "Saturation state $=$ ON (output low); Cutoff state $=$ OFF (output high). Acting as a NOT gate.",
    "hintAr": "حالة التشبع: مفتاح مغلق وخرج منخفض، حالة القطع: مفتاح مفتوح وخرج مرتفع (بوابة العاكس NOT).",
    "stepByStepSolutionEn": [
      "When a large base current is applied ($V_{\\text{in}} = \\text{High} = 1$), the transistor turns fully ON in saturation: $I_C R_C \\approx V_{CC}$, so $V_{\\text{out}} = V_{CE} \\approx 0\\text{ V}$ (Low = 0). When base current is zero ($V_{\\text{in}} = \\text{Low} = 0$), the transistor is cut OFF: $I_C = 0$, so $V_{\\text{out}} = V_{CC}$ (High = 1). This performs the exact Boolean NOT function."
    ],
    "stepByStepSolutionAr": [
      "عند تطبيق جهد مرتفع على القاعدة (1)، يمر تيار قاعدة كبير يقود الترانزستور إلى التشبع، فيصبح هبوط الجهد $I_C R_C \\approx V_{CC}$ ويهبط جهد الخرج إلى الصفر (0). وعندما يكون الدخل منعدماً (0)، ينقطع تيار المجمع ($I_C = 0$) ويصبح جهد الخرج مساوياً لجهد المصدر $V_{CC}$ (1). وبذلك يعمل كعاكس وبوابة NOT."
    ],
    "teacherTipEn": "This binary switching action is the foundational building block of all modern computer microprocessors.",
    "teacherTipAr": "هذا العمل التبديل الثنائي السريع هو اللبنة الأساسية لجميع المعالجات الرقمية والحواسيب الحديثة."
  },
  {
    "id": "phys_ch6_db_easy_50",
    "titleEn": "NOT Logic Gate (Inverter) Operation",
    "titleAr": "عمل وجدول التحقيق لبوابة العاكس (NOT Gate)",
    "difficulty": "easy",
    "questionEn": "A NOT logic gate (inverter) has a single input $A$ and a single output $Y$. Its operational rule is:",
    "questionAr": "بوابة العاكس (NOT Gate) تمتلك مدخلاً واحداً $A$ ومخرجاً واحداً $Y$. قاعدتها المنطقية هي:",
    "optionsEn": [
      "Output is 1 only when input is 100 Volts",
      "Output is the inverse of input: if $A = 0$ then $Y = 1$, and if $A = 1$ then $Y = 0$ ($Y = \\bar{A}$)",
      "Output is always identical to input ($Y = A$)",
      "It requires three simultaneous inputs to produce an output"
    ],
    "optionsAr": [
      "الخرج 1 فقط عندما يكون الدخل 100 فولت",
      "الخرج هو معكوس الدخل دائماً: إذا كان $A = 0$ يكون $Y = 1$، وإذا كان $A = 1$ يكون $Y = 0$ ($Y = \\bar{A}$)",
      "الخرج مطابق للدخل دائماً ($Y = A$)",
      "تتطلب 3 مدخلات معاً لتعطي مخرجاً"
    ],
    "correctAnswer": "Output is the inverse of input: if $A = 0$ then $Y = 1$, and if $A = 1$ then $Y = 0$ ($Y = \\bar{A}$)",
    "correctIndex": 1,
    "hintEn": "Inversion: $0 \\to 1$ and $1 \\to 0$.",
    "hintAr": "العاكس يقلب الصفر إلى واحد والواحد إلى صفر.",
    "stepByStepSolutionEn": [
      "The NOT gate produces an output that is the logical negation (complement) of its input: $Y = \\bar{A}$. In digital electronics, low voltage ($0$) becomes high voltage ($1$), and vice versa."
    ],
    "stepByStepSolutionAr": [
      "بوابة NOT تعكس الحالة المنطقية لإشارة الدخل: $Y = \\bar{A}$. الدخل 0 يقابله خرج 1، والدخل 1 يقابله خرج 0."
    ],
    "teacherTipEn": "The circuit symbol is a triangle with a small inversion bubble at the output.",
    "teacherTipAr": "رمزها في الدوائر الإلكترونية مثلث بنهايته دائرة صغيرة تدل على العكس المنطقي."
  },
  {
    "id": "phys_ch6_db_easy_51",
    "titleEn": "AND Logic Gate Boolean Operation and Equivalent Circuit",
    "titleAr": "عمل والدائرة المكافئة لبوابة التوافق (AND Gate)",
    "difficulty": "easy",
    "questionEn": "An AND logic gate with two inputs $A$ and $B$ produces an output $Y = 1$ ONLY when:",
    "questionAr": "بوابة التوافق (AND Gate) ذات المدخلين $A$ و $B$ تعطي مخرجاً $Y = 1$ فقط عندما يكون:",
    "optionsEn": [
      "At least one input is 1 ($A = 1$ OR $B = 1$)",
      "Both inputs are 0",
      "Both inputs are simultaneously 1 ($A = 1$ AND $B = 1$), acting equivalently to two switches connected in series",
      "The inputs have opposite signs"
    ],
    "optionsAr": [
      "أحد المدخلين على الأقل يساوي 1",
      "كلا المدخلين يساوي صفراً",
      "كلا المدخلين 1 في نفس الوقت ($A = 1$ و $B = 1$)، وتكافئ دائرة مفتاحين متصلين على التوالي",
      "المدخلان مختلفان في الإشارة"
    ],
    "correctAnswer": "Both inputs are simultaneously 1 ($A = 1$ AND $B = 1$), acting equivalently to two switches connected in series",
    "correctIndex": 2,
    "hintEn": "AND gate: $Y = A \\cdot B$. Series switches: both must be closed for lamp to light.",
    "hintAr": "بوابة AND: الخرج 1 فقط عندما يكون $A=1$ و $B=1$، وتكافئ مفتاحين على التوالي.",
    "stepByStepSolutionEn": [
      "The Boolean expression is $Y = A \\cdot B$. Output is 1 only if input $A = 1$ AND input $B = 1$. In a circuit analogy, this corresponds to two electric switches connected in series with a lamp: current flows only when BOTH switches are closed."
    ],
    "stepByStepSolutionAr": [
      "التعبير البولياني لبوابة التوافق هو $Y = A \\cdot B$. لا تعطي الخرج 1 إلا إذا تحقق الشرطان معاً ($A=1$ و $B=1$). وتماثل دائرة كهربية تحتوي على مفتاحين متصلين على التوالي مع مصباح: لا يضيء المصباح إلا بغلق كلا المفتاحين معاً."
    ],
    "teacherTipEn": "Truth table for AND: $(0,0)\\to 0$, $(0,1)\\to 0$, $(1,0)\\to 0$, $(1,1)\\to 1$.",
    "teacherTipAr": "جدول تحقيق AND: يعطي صفراً لجميع الاحتمالات ما عدا احتمال (1 و 1) فيعطي 1."
  },
  {
    "id": "phys_ch6_db_easy_52",
    "titleEn": "OR Logic Gate Boolean Operation and Equivalent Circuit",
    "titleAr": "عمل والدائرة المكافئة لبوابة الاختيار (OR Gate)",
    "difficulty": "easy",
    "questionEn": "An OR logic gate with two inputs $A$ and $B$ produces an output $Y = 1$ when:",
    "questionAr": "بوابة الاختيار (OR Gate) ذات المدخلين $A$ و $B$ تعطي مخرجاً $Y = 1$ عندما يكون:",
    "optionsEn": [
      "Both inputs are strictly 0",
      "Both inputs must be 1 exclusively",
      "The temperature of the chip exceeds $100^\\circ\\text{C}$",
      "At least ONE of the inputs is 1 ($A = 1$ OR $B = 1$ OR both), acting equivalently to two switches connected in parallel"
    ],
    "optionsAr": [
      "كلا المدخلين يساوي صفراً فقط",
      "كلا المدخلين 1 حصرياً",
      "درجة حرارة الشريحة تتجاوز 100 درجة سيلزيوس",
      "أحد المدخلين على الأقل يساوي 1 (أو كلاهما)، وتكافئ دائرة مفتاحين متصلين على التوازي"
    ],
    "correctAnswer": "At least ONE of the inputs is 1 ($A = 1$ OR $B = 1$ OR both), acting equivalently to two switches connected in parallel",
    "correctIndex": 3,
    "hintEn": "OR gate: $Y = A + B$. Parallel switches: closing either switch lights the lamp.",
    "hintAr": "بوابة OR: الخرج 1 إذا كان أي من المدخلين 1، وتكافئ مفتاحين على التوازي.",
    "stepByStepSolutionEn": [
      "The Boolean expression is $Y = A + B$. The output is 1 if either input $A$ is 1 OR input $B$ is 1 (or both). In electrical analogy, this corresponds to two switches in parallel with a lamp: closing EITHER switch allows current to bypass and light the lamp."
    ],
    "stepByStepSolutionAr": [
      "التعبير المنطقي لبوابة الاختيار هو $Y = A + B$. تعطي الخرج 1 إذا كان أحد المدخلين أو كلاهما 1. وتماثل في الدوائر الكهربية مفتاحين متصلين على التوازي مع مصباح: يضيء المصباح بغلق أي من المفتاحين أو كليهما، ولا ينطفئ إلا بفتح كلا المفتاحين معاً."
    ],
    "teacherTipEn": "Truth table for OR: $(0,0)\\to 0$, $(0,1)\\to 1$, $(1,0)\\to 1$, $(1,1)\\to 1$.",
    "teacherTipAr": "جدول تحقيق OR: يعطي 1 إذا وجد 1 في أي مدخل، ولا يعطي صفراً إلا عند (0 و 0)."
  },
  {
    "id": "phys_ch6_db_easy_53",
    "titleEn": "Fundamental Distinction: Analog vs Digital Electronic Signals",
    "titleAr": "الفارق الجوهري بين الإشارات التناظرية والإشارات الرقمية",
    "difficulty": "easy",
    "questionEn": "In modern electronics, digital signals have largely replaced analog signals in transmission and processing because:",
    "questionAr": "في الإلكترونيات الحديثة، حلت الإشارات الرقمية محل الإشارات التناظرية في نقل ومعالجة البيانات لأن الإشارات الرقمية:",
    "optionsEn": [
      "Are expressed as binary discrete pulses ($0$ and $1$) that possess exceptional immunity against electrical noise and distortion",
      "Travel at speeds exceeding the speed of light in vacuum",
      "Do not require any electrical power or wires",
      "Can only be used to transmit audio sounds"
    ],
    "optionsAr": [
      "يُعبر عنها بنبضات ثنائية منفصلة (0 و 1) تتمتع بمناعة فائقة ضد الضوضاء الكهربية والتشويش أثناء النقل",
      "تتحرك بسرعة تفوق سرعة الضوء في الفراغ",
      "لا تتطلب أي طاقة كهربية أو أسلاك توصيل",
      "تقتصر على نقل الأصوات المسموعة فقط"
    ],
    "correctAnswer": "Are expressed as binary discrete pulses ($0$ and $1$) that possess exceptional immunity against electrical noise and distortion",
    "correctIndex": 0,
    "hintEn": "Binary 0/1 levels easily filter out random additive noise.",
    "hintAr": "الإشارات الرقمية تمثل بكود ثنائي (0 و 1) يسهل تنقيته من الضوضاء الكهربية المضافة.",
    "stepByStepSolutionEn": [
      "Analog signals vary continuously with time, meaning any stray electromagnetic noise alters the signal amplitude permanently. Digital signals encode information into discrete binary voltage levels (High = 1, Low = 0). Receivers easily discard additive noise by thresholding, preserving pristine signal fidelity."
    ],
    "stepByStepSolutionAr": [
      "الإشارات التناظرية تتغير سعتها بانتظام واستمرار مع الزمن، فتتأثر بأي ضوضاء كهرومغناطيسية عشوائية وتتشوه المعلومة. أما الإشارات الرقمية فتتعامل مع مستويين محددين (0 و 1)، ويسهل تنقية النبضات وإعادة توليدها بدقة كاملة وخالية من التشويش."
    ],
    "teacherTipEn": "ADC (Analog-to-Digital Converter) converts continuous physical data to binary; DAC converts it back.",
    "teacherTipAr": "محول ADC يحول الإشارة التناظرية لكود رقمي، ومحول DAC يعيد تحويلها لصورة تناظرية عند الاستقبال."
  },
  {
    "id": "phys_ch6_db_easy_54",
    "titleEn": "Medical Radiography Basis: X-Ray Differential Absorption",
    "titleAr": "الأساس الفيزيائي للتصوير الطبي بالأشعة السينية",
    "difficulty": "easy",
    "questionEn": "X-rays produce high-contrast radiographic shadow images of human bones on photographic film because:",
    "questionAr": "تنتج الأشعة السينية صوراً شعاعية واضحة ومتباينة لعظام الإنسان على الألواح الحساسة لأن:",
    "optionsEn": [
      "Bones emit their own laser light when irradiated",
      "Bones contain dense elements with high atomic number (Calcium and Phosphorus) that absorb X-rays strongly, while soft tissues let them pass through",
      "Soft tissues absorb 100% of all X-rays",
      "X-rays reflect off the skin like a mirror"
    ],
    "optionsAr": [
      "العظام تطلق أشعة ليزر ذاتية عند سقوط الإشعاع عليها",
      "العظام تحتوي على عناصر كثيفة ذات عدد ذري مرتفع (الكالسيوم والفوسفور) تمتص الأشعة السينية بشدة، بينما الأنسجة الرخوة تنفذها بسهولة",
      "الأنسجة الرخوة تمتص 100% من الأشعة السينية",
      "الأشعة السينية تنعكس عن الجلد كمرآة عاكسة"
    ],
    "correctAnswer": "Bones contain dense elements with high atomic number (Calcium and Phosphorus) that absorb X-rays strongly, while soft tissues let them pass through",
    "correctIndex": 1,
    "hintEn": "X-ray absorption probability increases rapidly with atomic number ($Z^3$).",
    "hintAr": "امتصاص الأشعة السينية يتناسب طردياً مع مكعب العدد الذري لمادة النسيج ($Z^3$).",
    "stepByStepSolutionEn": [
      "The photoelectric absorption of X-rays scales roughly as the cube of the atomic number ($Z^3$). Bone contains Calcium ($Z = 20$) and Phosphorus ($Z = 15$), absorbing X-rays far more than soft flesh composed of light elements ($H=1, C=6, N=7, O=8$). Bones cast clear white shadows on developed X-ray film."
    ],
    "stepByStepSolutionAr": [
      "قدرة المادة على امتصاص الأشعة السينية تتناسب طردياً مع مكعب العدد الذري لمادتها ($Z^3$). العظام غنية بالكالسيوم ($Z=20$) والفوسفور فتمتص الأشعة بشدة وتترك ظلاً أبيض، بينما اللحم والدهون عناصرها خفيفة (كربون وهيدروجين) وتنفذ الأشعة منها فتسود اللوح الحساس."
    ],
    "teacherTipEn": "Wilhelm Roentgen discovered this in 1895 when capturing the famous X-ray image of his wife's hand.",
    "teacherTipAr": "اكتشف رونتجن هذه الخاصية عام 1895 والتقط أول صورة أشعة سينية في التاريخ ليد زوجته."
  },
  {
    "id": "phys_ch6_db_easy_55",
    "titleEn": "Crystal Structure Analysis via X-Ray Diffraction (Bragg Law)",
    "titleAr": "دراسة التركيب البلوري بحيود الأشعة السينية وقانون براغ",
    "difficulty": "easy",
    "questionEn": "X-rays are widely utilized to determine the atomic arrangements and internal crystal structures of solids because:",
    "questionAr": "تستخدم الأشعة السينية بكفاءة عالية في دراسة التركيب البلوري وترتيب الذرات في المواد الصلبة لأن:",
    "optionsEn": [
      "They destroy all atoms upon contact",
      "They reflect off the crystal without entering it",
      "Their wavelengths ($\\lambda \\sim 0.1\\text{ nm}$) are comparable to the interatomic spacings of crystal planes, producing observable diffraction patterns",
      "They can only pass through liquids"
    ],
    "optionsAr": [
      "تقضي على جميع الذرات بمجرد ملامستها",
      "تنعكس كلياً عن سطح البلورة دون اختراقها",
      "أطوالها الموجية ($\\lambda \\sim 0.1\\text{ nm}$) تقارب المسافات البينية بين ذرات المستويات البلورية، مما يؤدي إلى حدوث حيود واضح للأشعة",
      "لا تنفذ إلا في المواد السائلة فقط"
    ],
    "correctAnswer": "Their wavelengths ($\\lambda \\sim 0.1\\text{ nm}$) are comparable to the interatomic spacings of crystal planes, producing observable diffraction patterns",
    "correctIndex": 2,
    "hintEn": "Diffraction occurs when wavelength $\\lambda$ matches aperture/grating spacing $d$.",
    "hintAr": "شرط حدوث الحيود بوضوح: الطول الموجي يقارب المسافات البينية بين ذرات البلورة.",
    "stepByStepSolutionEn": [
      "For wave diffraction to produce sharp interference peaks, the obstacle/grating spacing must be of the same order of magnitude as the wavelength ($d \\approx \\lambda$). Crystal atomic planes are spaced roughly $0.1-0.3\\text{ nm}$ apart, matching X-ray wavelengths and satisfying Bragg's law ($2d\\sin\\theta = n\\lambda$)."
    ],
    "stepByStepSolutionAr": [
      "لكي يحدث حيود واضح وتداخل بناء، يجب أن تكون المسافات البينية بين الفتحات في حدود الطول الموجي للموجة الساقطة. المسافات البينية بين ذرات البلورات تتراوح بين 0.1 إلى 0.3 نانومتر، وهي مقاربة تماماً لأطوال موجات الأشعة السينية، فتحيد وتنتج نمط حيود يحدد المسافات بين الذرات بدقة."
    ],
    "teacherTipEn": "This technique unlocked the double-helix structure of DNA (Rosalind Franklin, Watson, and Crick).",
    "teacherTipAr": "هذه التقنية هي التي كشفت التركيب الحلزوني المزدوج للحمض النووي DNA."
  },
  {
    "id": "phys_ch6_db_easy_56",
    "titleEn": "Why Laser Action Requires an External Pumping Energy Source",
    "titleAr": "ضرورة مصدر الطاقة الخارجي (الضخ) لعمل الليزر",
    "difficulty": "easy",
    "questionEn": "The 'Pumping System' in a laser device performs the essential role of:",
    "questionAr": "يقوم 'نظام الضخ' في جهاز الليزر بالدور الأساسي المتمثل في:",
    "optionsEn": [
      "Cooling the laser tube with ice water",
      "Splitting the laser beam into four colors",
      "Absorbing all emitted photons to prevent eye injury",
      "Supplying external energy to continuously excite atoms of the active medium to maintain population inversion"
    ],
    "optionsAr": [
      "تبريد أنبوبة الليزر بماء مثلج",
      "تقسيم شعاع الليزر إلى أربعة ألوان",
      "امتصاص جميع الفوتونات المنبعثة لمنع إصابة العين",
      "إمداد ذرات الوسط الفعال بالطاقة الخارجية باستمرار لإثارتها والحفاظ على حالة الإسكان المعكوس"
    ],
    "correctAnswer": "Supplying external energy to continuously excite atoms of the active medium to maintain population inversion",
    "correctIndex": 3,
    "hintEn": "Pumping supplies energy to pump atoms from ground state to metastable state.",
    "hintAr": "الضخ يمد الذرات بالطاقة لتنتقل من المستويات الأدنى إلى المستويات العليا شبه المستقرة.",
    "stepByStepSolutionEn": [
      "Because excited atoms constantly lose energy via spontaneous and stimulated emission, population inversion would immediately collapse without a continuous supply of excitation energy. The pumping source (optical flashlamps, electric discharge, chemical reaction) continuously raises atoms to excited states."
    ],
    "stepByStepSolutionAr": [
      "الذرات المثارة تفقد طاقتها باستمرار عند إطلاق الفوتونات. وبدون مصدر طاقة مستمر (نظام الضخ) ستهبط كل الذرات إلى المستوى الأرضي ويتوقف الليزر. نظام الضخ (كهربي أو ضوئي أو حراري أو كيميائي) يعيد إثارة الذرات بصفة مستمرة للحفاظ على وضع الإسكان المعكوس."
    ],
    "teacherTipEn": "Common pumping methods: Electric discharge (in He-Ne and $\\text{CO}_2$), Optical pumping (in Ruby and Nd:YAG).",
    "teacherTipAr": "طرق الضخ الشائعة: التفريغ الكهربي (في ليزر الهيليوم-نيون)، والضخ الضوئي (في ليزر الياقوت)."
  },
  {
    "id": "phys_ch6_db_easy_57",
    "titleEn": "Independence of Characteristic X-Rays from Tube Voltage",
    "titleAr": "استقلال الطول الموجي للطيف المميز عن فرق الجهد المعجل للأنبوبة",
    "difficulty": "easy",
    "questionEn": "If the accelerating voltage in a Coolidge X-ray tube is increased from $40\\text{ kV}$ to $60\\text{ kV}$ while keeping the tungsten target unchanged:",
    "questionAr": "إذا زاد فرق الجهد المعجل في أنبوبة كولدج من $40\\text{ kV}$ إلى $60\\text{ kV}$ مع بقاء مادة الهدف (التنجستن) كما هي دون تغيير:",
    "optionsEn": [
      "The minimum wavelength $\\lambda_{\\min}$ of continuous X-rays decreases, but the wavelengths of the characteristic peaks remain strictly unchanged",
      "Both the continuous minimum wavelength and characteristic peaks double",
      "The characteristic peaks disappear entirely",
      "The continuous spectrum shifts toward longer wavelengths"
    ],
    "optionsAr": [
      "يقل الطول الموجي الأدنى $\\lambda_{\\min}$ للطيف المستمر، بينما تظل الأطوال الموجية لخطوط الطيف المميز الحادة ثابتة دون تغير",
      "يتضاعف كل من أقصر طول موجي مستمر والقمم المميزة معاً",
      "تختفي القمم المميزة تماماً",
      "ينزاح الطيف المستمر نحو أطوال موجية أطول"
    ],
    "correctAnswer": "The minimum wavelength $\\lambda_{\\min}$ of continuous X-rays decreases, but the wavelengths of the characteristic peaks remain strictly unchanged",
    "correctIndex": 0,
    "hintEn": "Continuous $\\lambda_{\\min} \\propto 1/V$; Characteristic $\\lambda$ depends only on target $Z$.",
    "hintAr": "$\\lambda_{\\min}$ تتناسب عكسياً مع فرق الجهد $V$، بينما الطيف المميز يعتمد فقط على نوع مادة الهدف $Z$.",
    "stepByStepSolutionEn": [
      "The minimum continuous wavelength shifts to a shorter value ($\\lambda_{\\min} = \\frac{hc}{eV} \\downarrow$). However, the characteristic X-ray lines arise from internal transitions within target atoms ($\\Delta E = E_2 - E_1$), which depend only on target atomic number $Z$. Therefore, characteristic wavelengths remain completely fixed."
    ],
    "stepByStepSolutionAr": [
      "أقصر طول موجي للطيف المستمر يقل بزيادة فرق الجهد ($\\lambda_{\\min} = \\frac{hc}{eV}$). أما الطيف المميز فينتج عن انتقالات إلكترونية بين مستويات طاقة ذرات مادة الهدف نفسها، ولا تتغير طاقات هذه المستويات بتغير فرق الجهد الخارجي فيظل الطول الموجي المميز ثابتاً في مكانه."
    ],
    "teacherTipEn": "A staple graph question in Egyptian national exams: peaks stay fixed, base curve expands leftward.",
    "teacherTipAr": "سؤال بياني شهير جداً في امتحانات الثانوية العامة: القمم المميزة تثبت في مكانها، بينما يزحف المنحنى المستمر يساراً نحو الصفر."
  },
  {
    "id": "phys_ch6_db_easy_58",
    "titleEn": "Bohr Quantum Jump Frequency Condition",
    "titleAr": "شرط تردد القفزة الكمية لبور عند انبعاث الفوتون",
    "difficulty": "easy",
    "questionEn": "According to Niels Bohr's atomic postulates, when an electron undergoes a quantum jump from a higher stationary energy orbit $E_2$ to a lower stationary orbit $E_1$, the frequency $\\nu$ of the emitted photon is given by:",
    "questionAr": "وفقاً لفروض بور، عند هبوط إلكترون من مستوى طاقة أعلى $E_2$ إلى مستوى طاقة أدنى $E_1$، فإن تردد الفوتون المنبعث $\\nu$ يعطى بالعلاقة:",
    "optionsEn": [
      "$\\nu = \\frac{h}{E_2 - E_1}$",
      "$\\nu = \\frac{E_2 - E_1}{h}$",
      "$\\nu = \\frac{E_2 + E_1}{h}$",
      "$\\nu = h(E_2 - E_1)$"
    ],
    "optionsAr": [
      "$\\nu = \\frac{h}{E_2 - E_1}$",
      "$\\nu = \\frac{E_2 - E_1}{h}$",
      "$\\nu = \\frac{E_2 + E_1}{h}$",
      "$\\nu = h(E_2 - E_1)$"
    ],
    "correctAnswer": "$\\nu = \\frac{E_2 - E_1}{h}$",
    "correctIndex": 1,
    "hintEn": "Energy difference equals photon energy: $\\Delta E = h\\nu \\implies \\nu = \\frac{E_2 - E_1}{h}$.",
    "hintAr": "فرق الطاقة بين المستويين يشع في صورة فوتون واحد: $\\Delta E = h\\nu$.",
    "stepByStepSolutionEn": [
      "Bohr's third postulate states that an electron does not radiate energy while in a stationary stable orbit. Radiation occurs only when the electron transitions between orbits, emitting a single photon whose energy matches the difference: $\\Delta E = E_2 - E_1 = h\\nu \\implies \\nu = \\frac{E_2 - E_1}{h}$."
    ],
    "stepByStepSolutionAr": [
      "ينص فرض بور الثالث على أن الذرة لا تشع أي طاقة طالما كان الإلكترون في مداره المستقر، ولكنه يشع طاقة فقط عند الانتقال من مستوى أعلى $E_2$ إلى مستوى أدنى $E_1$، وينبعث فوتون واحد طاقته تساوي فرق الطاقة بين المستويين: $\\Delta E = E_2 - E_1 = h\\nu$ ومنها $\\nu = \\frac{E_2 - E_1}{h}$."
    ],
    "teacherTipEn": "This fundamental postulate successfully unified Planck's quantum theory with Rutherford's nuclear atom.",
    "teacherTipAr": "هذا الفرض العبقري لبور نجح في دمج نظرية الكم لبلانك مع نموذج رذرفورد للذرة النووية."
  }
],
  medium: [
  {
    "id": "phys_ch6_db_med_01",
    "titleEn": "Hydrogen Second Energy Level Calculation",
    "titleAr": "حساب طاقة المستوى الثاني في ذرة الهيدروجين",
    "difficulty": "medium",
    "questionEn": "According to Bohr's model, what is the energy of the second principal energy level ($n = 2$) in a hydrogen atom?",
    "questionAr": "وفقاً لنموذج بور، ما هي طاقة المستوى الرئيسي الثاني ($n = 2$) في ذرة الهيدروجين؟",
    "optionsEn": [
      "$E_2 = -3.4\\text{ eV}$",
      "$E_2 = -6.8\\text{ eV}$",
      "$E_2 = -1.51\\text{ eV}$",
      "$E_2 = -13.6\\text{ eV}$"
    ],
    "optionsAr": [
      "$E_2 = -3.4\\text{ eV}$",
      "$E_2 = -6.8\\text{ eV}$",
      "$E_2 = -1.51\\text{ eV}$",
      "$E_2 = -13.6\\text{ eV}$"
    ],
    "correctAnswer": "$E_2 = -3.4\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$. Substitute $n = 2$.",
    "hintAr": "$E_2 = -\\frac{13.6}{2^2} = -\\frac{13.6}{4}$.",
    "stepByStepSolutionEn": [
      "$E_2 = -\\frac{13.6}{2^2}\\text{ eV} = -\\frac{13.6}{4}\\text{ eV} = -3.4\\text{ eV}$. In Joules: $-3.4 \\times 1.6 \\times 10^{-19} = -5.44 \\times 10^{-19}\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "$E_2 = -\\frac{13.6}{4} = -3.4\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "Energies of first four levels in hydrogen: $E_1 = -13.6\\text{ eV}$, $E_2 = -3.4\\text{ eV}$, $E_3 = -1.51\\text{ eV}$, $E_4 = -0.85\\text{ eV}$.",
    "teacherTipAr": "احفظ طاقات المستويات الأربعة الأولى للهيدروجين: الأول -13.6، الثاني -3.4، الثالث -1.51، الرابع -0.85 إلكترون فولت."
  },
  {
    "id": "phys_ch6_db_med_02",
    "titleEn": "Hydrogen Third Energy Level Calculation",
    "titleAr": "حساب طاقة المستوى الثالث في ذرة الهيدروجين",
    "difficulty": "medium",
    "questionEn": "What is the energy of the third stationary energy level ($n = 3$) in a hydrogen atom?",
    "questionAr": "ما هي طاقة المستوى الرئيسي الثالث ($n = 3$) في ذرة الهيدروجين بوحدة الإلكترون فولت؟",
    "optionsEn": [
      "$E_3 \\approx -4.53\\text{ eV}$",
      "$E_3 \\approx -1.51\\text{ eV}$",
      "$E_3 \\approx -0.85\\text{ eV}$",
      "$E_3 \\approx -2.72\\text{ eV}$"
    ],
    "optionsAr": [
      "$E_3 \\approx -4.53\\text{ eV}$",
      "$E_3 \\approx -1.51\\text{ eV}$",
      "$E_3 \\approx -0.85\\text{ eV}$",
      "$E_3 \\approx -2.72\\text{ eV}$"
    ],
    "correctAnswer": "$E_3 \\approx -1.51\\text{ eV}$",
    "correctIndex": 1,
    "hintEn": "$E_3 = -\\frac{13.6}{3^2} = -\\frac{13.6}{9}$.",
    "hintAr": "$E_3 = -\\frac{13.6}{9}\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$E_3 = -\\frac{13.6}{3^2}\\text{ eV} = -\\frac{13.6}{9}\\text{ eV} \\approx -1.511\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_3 = -\\frac{13.6}{9} \\approx -1.51\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "Notice how rapidly level energies rise toward zero: from $-13.6$ to $-3.4$ to $-1.51\\text{ eV}$.",
    "teacherTipAr": "لاحظ التقارب السريع لمستويات الطاقة نحو الصفر: -13.6 ثم -3.4 ثم -1.51 إلكترون فولت."
  },
  {
    "id": "phys_ch6_db_med_03",
    "titleEn": "Photon Energy Emitted in Lyman First Line Transition",
    "titleAr": "طاقة فوتون أول خطوط متسلسلة ليمان",
    "difficulty": "medium",
    "questionEn": "An electron in a hydrogen atom drops from the second energy level ($n = 2$) to the ground level ($n = 1$). What is the energy of the emitted photon?",
    "questionAr": "هبط إلكترون في ذرة هيدروجين من المستوى الثاني ($n = 2$) إلى المستوى الأرضي الأول ($n = 1$). ما هي طاقة الفوتون المنبعث؟",
    "optionsEn": [
      "$\\Delta E = 13.6\\text{ eV}$",
      "$\\Delta E = 3.4\\text{ eV}$",
      "$\\Delta E = 10.2\\text{ eV} = 1.632 \\times 10^{-18}\\text{ J}$",
      "$\\Delta E = 17.0\\text{ eV}$"
    ],
    "optionsAr": [
      "$\\Delta E = 13.6\\text{ eV}$",
      "$\\Delta E = 3.4\\text{ eV}$",
      "$\\Delta E = 10.2\\text{ eV} = 1.632 \\times 10^{-18}\\text{ J}$",
      "$\\Delta E = 17.0\\text{ eV}$"
    ],
    "correctAnswer": "$\\Delta E = 10.2\\text{ eV} = 1.632 \\times 10^{-18}\\text{ J}$",
    "correctIndex": 2,
    "hintEn": "$\\Delta E = E_2 - E_1 = -3.4\\text{ eV} - (-13.6\\text{ eV})$.",
    "hintAr": "$\\Delta E = -3.4 - (-13.6) = 10.2\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_2 - E_1 = -3.4\\text{ eV} - (-13.6\\text{ eV}) = +10.2\\text{ eV}$. In Joules: $10.2 \\times 1.6 \\times 10^{-19}\\text{ J} = 1.632 \\times 10^{-18}\\text{ J}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E = E_2 - E_1 = -3.4 - (-13.6) = 10.2\\text{ إلكترون فولت} = 1.632 \\times 10^{-18}\\text{ جول}$."
    ],
    "teacherTipEn": "This transition emits the famous Lyman-$\\alpha$ ultraviolet line at wavelength $\\lambda \\approx 121.6\\text{ nm}$.",
    "teacherTipAr": "هذا الانتقال يطلق خط ليمان-ألفا الشهير في الأشعة فوق البنفسجية بطول موجي $121.6\\text{ نانومتر}$."
  },
  {
    "id": "phys_ch6_db_med_04",
    "titleEn": "Wavelength of the First Line in Lyman Series",
    "titleAr": "حساب الطول الموجي لأول خطوط متسلسلة ليمان",
    "difficulty": "medium",
    "questionEn": "Given $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ and $c = 3.0 \\times 10^8\\text{ m/s}$, the wavelength $\\lambda$ of the first line of the Lyman series ($n = 2 \\to n = 1$) is approximately:",
    "questionAr": "بمعلومية ثابت بلانك وسرعة الضوء، فإن الطول الموجي $\\lambda$ لأول خطوط متسلسلة ليمان ($n = 2 \\to n = 1$) يساوي تقريباً:",
    "optionsEn": [
      "$\\lambda \\approx 6.56 \\times 10^{-7}\\text{ m}$",
      "$\\lambda \\approx 9.12 \\times 10^{-8}\\text{ m}$",
      "$\\lambda \\approx 4.0 \\times 10^{-6}\\text{ m}$",
      "$\\lambda \\approx 1.216 \\times 10^{-7}\\text{ m} = 121.6\\text{ nm} = 1216\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$\\lambda \\approx 6.56 \\times 10^{-7}\\text{ m}$",
      "$\\lambda \\approx 9.12 \\times 10^{-8}\\text{ m}$",
      "$\\lambda \\approx 4.0 \\times 10^{-6}\\text{ m}$",
      "$\\lambda \\approx 1.216 \\times 10^{-7}\\text{ m} = 121.6\\text{ nm} = 1216\\text{ \\AA}$"
    ],
    "correctAnswer": "$\\lambda \\approx 1.216 \\times 10^{-7}\\text{ m} = 121.6\\text{ nm} = 1216\\text{ \\AA}$",
    "correctIndex": 3,
    "hintEn": "$\\lambda = \\frac{hc}{\\Delta E}$ where $\\Delta E = 10.2\\text{ eV} = 1.632 \\times 10^{-18}\\text{ J}$.",
    "hintAr": "$\\lambda = \\frac{hc}{\\Delta E}$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{hc}{\\Delta E} = \\frac{(6.625 \\times 10^{-34}) \\times (3 \\times 10^8)}{1.632 \\times 10^{-18}} = \\frac{1.9875 \\times 10^{-25}}{1.632 \\times 10^{-18}} \\approx 1.218 \\times 10^{-7}\\text{ m} \\approx 121.6\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{hc}{\\Delta E} \\approx 121.6\\text{ نانومتر}$."
    ],
    "teacherTipEn": "This wavelength lies in the vacuum ultraviolet region, invisible to human sight.",
    "teacherTipAr": "هذا الطول الموجي يقع في نطاق الأشعة فوق البنفسجية ولا تراه العين البشرية."
  },
  {
    "id": "phys_ch6_db_med_05",
    "titleEn": "Shortest Wavelength (Series Limit) of Lyman Series",
    "titleAr": "أقصر طول موجي (حد المتسلسلة) لمتسلسلة ليمان",
    "difficulty": "medium",
    "questionEn": "The shortest wavelength ($\\lambda_{\\min}$) in the Lyman series of hydrogen (corresponding to transition from $n = \\infty$ to $n = 1$) is:",
    "questionAr": "أقصر طول موجي ($\\lambda_{\\min}$) في متسلسلة ليمان لذرة الهيدروجين (المقابل للانتقال من $n = \\infty$ إلى $n = 1$) يساوي:",
    "optionsEn": [
      "$\\lambda_{\\min} \\approx 91.2\\text{ nm} = 912\\text{ \\AA}$",
      "$\\lambda_{\\min} \\approx 121.6\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 364.6\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 820.4\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} \\approx 91.2\\text{ nm} = 912\\text{ \\AA}$",
      "$\\lambda_{\\min} \\approx 121.6\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 364.6\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 820.4\\text{ nm}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} \\approx 91.2\\text{ nm} = 912\\text{ \\AA}$",
    "correctIndex": 0,
    "hintEn": "$\\Delta E_{\\max} = E_\\infty - E_1 = 0 - (-13.6) = 13.6\\text{ eV}$. $\\lambda_{\\min} = \\frac{hc}{\\Delta E_{\\max}}$.",
    "hintAr": "$\\lambda_{\\min} = \\frac{hc}{13.6\\text{ eV}}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = 13.6\\text{ eV} = 13.6 \\times 1.6 \\times 10^{-19}\\text{ J} = 2.176 \\times 10^{-18}\\text{ J}$. Then $\\lambda_{\\min} = \\frac{1.9875 \\times 10^{-25}}{2.176 \\times 10^{-18}} \\approx 9.13 \\times 10^{-8}\\text{ m} \\approx 91.2\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{1.9875 \\times 10^{-25}}{13.6 \\times 1.6 \\times 10^{-19}} \\approx 91.2\\text{ نانومتر}$."
    ],
    "teacherTipEn": "Series limit represents the transition from the ionization threshold ($E = 0$) to the base level of the series.",
    "teacherTipAr": "حد المتسلسلة يقابل انتقال الإلكترون من مالانهاية إلى المستوى الأساسي للمتسلسلة ويمثل أعلى طاقة وأقصر طول موجي."
  },
  {
    "id": "phys_ch6_db_med_06",
    "titleEn": "Balmer Alpha Visible Red Line Transition Energy",
    "titleAr": "طاقة فوتون خط ألفا الأحمر لمتسلسلة بالمر",
    "difficulty": "medium",
    "questionEn": "The visible red line ($\\text{H}_\\alpha$) of the hydrogen spectrum corresponds to transition from $n = 3$ to $n = 2$. What is the photon energy and wavelength?",
    "questionAr": "خط ألفا الأحمر ($\\text{H}_\\alpha$) في طيف الهيدروجين ينتج عن انتقال الإلكترون من المستوى الثالث ($n = 3$) إلى الثاني ($n = 2$). ما هي طاقة الفوتون وطوله الموجي؟",
    "optionsEn": [
      "$\\Delta E \\approx 3.4\\text{ eV}$, $\\lambda \\approx 365\\text{ nm}$",
      "$\\Delta E \\approx 1.89\\text{ eV}$, $\\lambda \\approx 656.3\\text{ nm}$ (red visible light)",
      "$\\Delta E \\approx 0.85\\text{ eV}$, $\\lambda \\approx 1450\\text{ nm}$",
      "$\\Delta E \\approx 10.2\\text{ eV}$, $\\lambda \\approx 121.6\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\Delta E \\approx 3.4\\text{ eV}$، $\\lambda \\approx 365\\text{ nm}$",
      "$\\Delta E \\approx 1.89\\text{ eV}$، $\\lambda \\approx 656.3\\text{ nm}$ (ضوء أحمر مرئي)",
      "$\\Delta E \\approx 0.85\\text{ eV}$، $\\lambda \\approx 1450\\text{ nm}$",
      "$\\Delta E \\approx 10.2\\text{ eV}$، $\\lambda \\approx 121.6\\text{ nm}$"
    ],
    "correctAnswer": "$\\Delta E \\approx 1.89\\text{ eV}$, $\\lambda \\approx 656.3\\text{ nm}$ (red visible light)",
    "correctIndex": 1,
    "hintEn": "$\\Delta E = E_3 - E_2 = -1.51 - (-3.4) = 1.89\\text{ eV}$. $\\lambda = \\frac{1240}{1.89}\\text{ nm}$.",
    "hintAr": "$\\Delta E = -1.51 - (-3.4) = 1.89\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = -1.51\\text{ eV} - (-3.4\\text{ eV}) = 1.89\\text{ eV}$. In Joules: $1.89 \\times 1.6 \\times 10^{-19} = 3.024 \\times 10^{-19}\\text{ J}$. Wavelength: $\\lambda = \\frac{1.9875 \\times 10^{-25}}{3.024 \\times 10^{-19}} \\approx 6.57 \\times 10^{-7}\\text{ m} \\approx 656.3\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E = 3.4 - 1.51 = 1.89\\text{ إلكترون فولت}$. وطوله الموجي $\\lambda = \\frac{hc}{\\Delta E} \\approx 656.3\\text{ نانومتر}$ (ضوء أحمر)."
    ],
    "teacherTipEn": "This red line gives excited hydrogen gas its characteristic glowing pink-crimson color in discharge tubes.",
    "teacherTipAr": "هذا الخط الأحمر هو المسؤول عن اللون الوردي المميز لأنبوبة تفريغ غاز الهيدروجين."
  },
  {
    "id": "phys_ch6_db_med_07",
    "titleEn": "Shortest Wavelength (Series Limit) of Balmer Series",
    "titleAr": "أقصر طول موجي لمتسلسلة بالمر",
    "difficulty": "medium",
    "questionEn": "What is the shortest wavelength ($\\lambda_{\\min}$) in the Balmer series of hydrogen (transition from $n = \\infty$ to $n = 2$)?",
    "questionAr": "ما هو أقصر طول موجي ($\\lambda_{\\min}$) في متسلسلة بالمر لطيف الهيدروجين (الانتقال من $n = \\infty$ إلى $n = 2$)؟",
    "optionsEn": [
      "$\\lambda_{\\min} \\approx 656.3\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 91.2\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 364.7\\text{ nm} = 3647\\text{ \\AA}$ (boundary of visible violet / near UV)",
      "$\\lambda_{\\min} \\approx 820.4\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} \\approx 656.3\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 91.2\\text{ nm}$",
      "$\\lambda_{\\min} \\approx 364.7\\text{ nm} = 3647\\text{ \\AA}$ (حد الضوء البنفسجي المرئي / فوق بنفسجي قريب)",
      "$\\lambda_{\\min} \\approx 820.4\\text{ nm}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} \\approx 364.7\\text{ nm} = 3647\\text{ \\AA}$ (boundary of visible violet / near UV)",
    "correctIndex": 2,
    "hintEn": "$\\Delta E = 0 - (-3.4) = 3.4\\text{ eV}$. $\\lambda = \\frac{1240}{3.4}\\text{ nm}$.",
    "hintAr": "$\\lambda = \\frac{hc}{3.4\\text{ eV}}$.",
    "stepByStepSolutionEn": [
      "Energy difference is $\\Delta E = E_\\infty - E_2 = 0 - (-3.4\\text{ eV}) = 3.4\\text{ eV} = 5.44 \\times 10^{-19}\\text{ J}$. Then $\\lambda_{\\min} = \\frac{1.9875 \\times 10^{-25}}{5.44 \\times 10^{-19}} \\approx 3.65 \\times 10^{-7}\\text{ m} \\approx 364.7\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{1.9875 \\times 10^{-25}}{3.4 \\times 1.6 \\times 10^{-19}} \\approx 364.7\\text{ نانومتر}$."
    ],
    "teacherTipEn": "All lines of the Balmer series lie between $656.3\\text{ nm}$ ($\\lambda_{\\max}$) and $364.7\\text{ nm}$ ($\\lambda_{\\min}$).",
    "teacherTipAr": "تنحصر جميع خطوط متسلسلة بالمر بين أطول طول موجي 656.3 نانومتر وأقصر طول موجي 364.7 نانومتر."
  },
  {
    "id": "phys_ch6_db_med_08",
    "titleEn": "Wavelength Extremes Ratio for Lyman Series",
    "titleAr": "نسبة أطول طول موجي إلى أقصر طول موجي في متسلسلة ليمان",
    "difficulty": "medium",
    "questionEn": "In the Lyman spectral series of hydrogen, the ratio of the longest wavelength ($\\lambda_{\\max}$, transition $2 \\to 1$) to the shortest wavelength ($\\lambda_{\\min}$, transition $\\infty \\to 1$) is:",
    "questionAr": "في متسلسلة ليمان لطيف الهيدروجين، النسبة بين أكبر طول موجي ($\\lambda_{\\max}$ من $2 \\to 1$) إلى أقل طول موجي ($\\lambda_{\\min}$ من $\\infty \\to 1$) تساوي:",
    "optionsEn": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{3}{4}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = 2$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{9}{5}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4}{3}$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{3}{4}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = 2$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{9}{5}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4}{3}$"
    ],
    "correctAnswer": "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4}{3}$",
    "correctIndex": 3,
    "hintEn": "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{\\Delta E_{\\max}}{\\Delta E_{\\min}} = \\frac{13.6}{10.2} = \\frac{4}{3}$.",
    "hintAr": "تناسب عكسي بين الطول الموجي وفرق الطاقة: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{\\Delta E_{\\max}}{\\Delta E_{\\min}}$.",
    "stepByStepSolutionEn": [
      "Wavelength is inversely proportional to energy: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{\\Delta E_{\\max}}{\\Delta E_{\\min}}$. Maximum energy is $\\Delta E_{\\max} = 13.6\\text{ eV}$. Minimum energy is $\\Delta E_{\\min} = 13.6 - 3.4 = 10.2\\text{ eV}$. Thus $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{13.6}{10.2} = \\frac{4}{3}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{E_{\\max}}{E_{\\min}} = \\frac{13.6}{10.2} = \\frac{4}{3}$."
    ],
    "teacherTipEn": "A classic recurring question in Egyptian ministerial physics exams.",
    "teacherTipAr": "من أكثر مسائل الامتحانات تكراراً: النسبة بين أكبر وأقل طول موجي في ليمان تساوي 4/3."
  },
  {
    "id": "phys_ch6_db_med_09",
    "titleEn": "Wavelength Extremes Ratio for Balmer Series",
    "titleAr": "نسبة أطول طول موجي إلى أقصر طول موجي في متسلسلة بالمر",
    "difficulty": "medium",
    "questionEn": "In the Balmer series of hydrogen, the ratio of the longest wavelength ($\\lambda_{\\max}$, transition $3 \\to 2$) to the shortest wavelength ($\\lambda_{\\min}$, transition $\\infty \\to 2$) is:",
    "questionAr": "في متسلسلة بالمر لطيف الهيدروجين، النسبة بين أكبر طول موجي ($\\lambda_{\\max}$ من $3 \\to 2$) إلى أقل طول موجي ($\\lambda_{\\min}$ من $\\infty \\to 2$) تساوي:",
    "optionsEn": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{9}{5} = 1.8$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4}{3}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{5}{9}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{16}{7}$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{9}{5} = 1.8$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4}{3}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{5}{9}$",
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{16}{7}$"
    ],
    "correctAnswer": "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{9}{5} = 1.8$",
    "correctIndex": 0,
    "hintEn": "$\\Delta E_{\\max} = 3.4\\text{ eV}$, $\\Delta E_{\\min} = 3.4 - 1.511 = 1.889\\text{ eV}$. Ratio: $\\frac{3.4}{1.889} = \\frac{9}{5}$.",
    "hintAr": "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{\\Delta E_{\\max}}{\\Delta E_{\\min}} = \\frac{3.4}{1.89} = \\frac{9}{5}$.",
    "stepByStepSolutionEn": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{\\Delta E_{\\max}}{\\Delta E_{\\min}} = \\frac{E_\\infty - E_2}{E_3 - E_2} = \\frac{3.4\\text{ eV}}{13.6(1/4 - 1/9)\\text{ eV}} = \\frac{1/4}{5/36} = \\frac{1}{4} \\times \\frac{36}{5} = \\frac{9}{5}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{1/4}{5/36} = \\frac{9}{5} = 1.8$."
    ],
    "teacherTipEn": "Useful rule for any series $n$: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{(n+1)^2}{2n+1}$. For $n=1$: $4/3$. For $n=2$: $9/5$. For $n=3$: $16/7$.",
    "teacherTipAr": "قاعدة عامة سريعة للمتسلسلة $n$: النسبة تساوي $\\frac{(n+1)^2}{2n+1}$. لليمان (4/3)، لبالمر (9/5)، لباشن (16/7)."
  },
  {
    "id": "phys_ch6_db_med_10",
    "titleEn": "Number of de Broglie Waves in Fourth Bohr Orbit",
    "titleAr": "عدد الموجات الموقوفة في المدار الرابع لبور",
    "difficulty": "medium",
    "questionEn": "If an electron moves in the fourth stationary Bohr orbit ($n = 4$) of a hydrogen atom, the number of complete de Broglie standing waves formed around the orbit is:",
    "questionAr": "إذا تحرك إلكترون في المدار الرابع المستقر ($n = 4$) لذرة الهيدروجين، فإن عدد الموجات الموقوفة الكاملة المتكونة حول محيط هذا المدار يساوي:",
    "optionsEn": [
      "$2\\text{ waves}$",
      "$4\\text{ complete waves } (2\\pi r_4 = 4\\lambda)$",
      "$8\\text{ waves}$",
      "$16\\text{ waves}$"
    ],
    "optionsAr": [
      "$2\\text{ موجة}$",
      "$4\\text{ موجات موقوفة كاملة } (2\\pi r_4 = 4\\lambda)$",
      "$8\\text{ موجات}$",
      "$16\\text{ موجة}$"
    ],
    "correctAnswer": "$4\\text{ complete waves } (2\\pi r_4 = 4\\lambda)$",
    "correctIndex": 1,
    "hintEn": "Condition: $2\\pi r_n = n\\lambda$. The number of waves equals the principal quantum number $n$.",
    "hintAr": "محيط المدار $2\\pi r = n\\lambda$، وعدد الموجات يساوي دائماً رقم المدار $n$.",
    "stepByStepSolutionEn": [
      "According to de Broglie's standing wave condition: $2\\pi r_n = n\\lambda$. For the fourth orbit ($n = 4$), the circumference exactly accommodates 4 complete wavelengths ($4$ crests and $4$ troughs, or 8 nodes/antinodes)."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لفرض دي برولي، محيط المدار المستقر يساوي عدداً صحيحاً من أطوال الموجات الموقوفة: $2\\pi r = n\\lambda$. ولذلك يحتوي المدار الرابع دائماً على 4 موجات موقوفة كاملة (8 قطاعات)."
    ],
    "teacherTipEn": "In exam diagrams, count the number of antinodes (crests + troughs) and divide by 2 to determine the orbit number $n$.",
    "teacherTipAr": "في رسومات الامتحانات: عد عدد البطون أو القطاعات واقسم على 2 لتعرف رقم المدار $n$ مباشرة."
  },
  {
    "id": "phys_ch6_db_med_11",
    "titleEn": "Minimum X-Ray Wavelength at 20 kV Operating Potential",
    "titleAr": "حساب أقصر طول موجي للأشعة السينية عند جهد 20 كيلو فولت",
    "difficulty": "medium",
    "questionEn": "A Coolidge X-ray tube operates under a potential difference of $V = 20\\text{ kV}$. What is the minimum wavelength ($\\lambda_{\\min}$) of the continuous X-rays emitted?",
    "questionAr": "تعمل أنبوبة كولدج بفرق جهد $V = 20\\text{ kV}$. ما هو أقصر طول موجي ($\\lambda_{\\min}$) للأشعة السينية المستمرة المنبعثة؟",
    "optionsEn": [
      "$\\lambda_{\\min} \\approx 1.24 \\times 10^{-9}\\text{ m}$",
      "$\\lambda_{\\min} \\approx 2.48 \\times 10^{-12}\\text{ m}$",
      "$\\lambda_{\\min} \\approx 6.2 \\times 10^{-11}\\text{ m} = 0.062\\text{ nm} = 0.62\\text{ \\AA}$",
      "$\\lambda_{\\min} \\approx 6.63 \\times 10^{-34}\\text{ m}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} \\approx 1.24 \\times 10^{-9}\\text{ m}$",
      "$\\lambda_{\\min} \\approx 2.48 \\times 10^{-12}\\text{ m}$",
      "$\\lambda_{\\min} \\approx 6.2 \\times 10^{-11}\\text{ m} = 0.062\\text{ nm} = 0.62\\text{ \\AA}$",
      "$\\lambda_{\\min} \\approx 6.63 \\times 10^{-34}\\text{ m}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} \\approx 6.2 \\times 10^{-11}\\text{ m} = 0.062\\text{ nm} = 0.62\\text{ \\AA}$",
    "correctIndex": 2,
    "hintEn": "$\\lambda_{\\min} = \\frac{hc}{eV}$. $V = 20 \\times 10^3\\text{ V}$.",
    "hintAr": "$\\lambda_{\\min} = \\frac{hc}{eV}$ مع التعويض عن الجهد بالفولت.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\min} = \\frac{(6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}) \\times (3.0 \\times 10^8\\text{ m/s})}{(1.6 \\times 10^{-19}\\text{ C}) \\times (20 \\times 10^3\\text{ V})} = \\frac{1.9875 \\times 10^{-25}}{3.2 \\times 10^{-15}} \\approx 6.21 \\times 10^{-11}\\text{ m} = 0.0621\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{1.9875 \\times 10^{-25}}{1.6 \\times 10^{-19} \\times 20 \\times 10^3} \\approx 0.062\\text{ نانومتر} = 0.62\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "Shortcut: $\\lambda_{\\min}\\text{ (in \\AA)} \\approx \\frac{12400}{V\\text{ (in Volts)}} = \\frac{12400}{20000} = 0.62\\text{ \\AA}$.",
    "teacherTipAr": "قاعدة سريعة للامتحانات: $\\lambda_{\\min}\\text{ (بالأنجستروم)} \\approx \\frac{12400}{V\\text{ (بالفولت)}} = 0.62\\text{ \\AA}$."
  },
  {
    "id": "phys_ch6_db_med_12",
    "titleEn": "Operating Voltage Calculation from Given Minimum X-Ray Wavelength",
    "titleAr": "حساب فرق جهد أنبوبة كولدج من أقصر طول موجي",
    "difficulty": "medium",
    "questionEn": "The continuous X-ray spectrum from a medical Coolidge tube has a cutoff minimum wavelength of $\\lambda_{\\min} = 0.40\\text{ \\AA} = 4.0 \\times 10^{-11}\\text{ m}$. What potential difference is applied across the tube?",
    "questionAr": "أظهر الطيف المستمر لأنبوبة كولدج طبية أن أقصر طول موجي هو $\\lambda_{\\min} = 0.40\\text{ \\AA} = 4.0 \\times 10^{-11}\\text{ m}$. ما هو فرق الجهد المطبق على الأنبوبة؟",
    "optionsEn": [
      "$V \\approx 12400\\text{ V}$",
      "$V \\approx 49600\\text{ V}$",
      "$V \\approx 8000\\text{ V}$",
      "$V \\approx 31000\\text{ V} = 31\\text{ kV}$"
    ],
    "optionsAr": [
      "$V \\approx 12400\\text{ V}$",
      "$V \\approx 49600\\text{ V}$",
      "$V \\approx 8000\\text{ V}$",
      "$V \\approx 31000\\text{ V} = 31\\text{ kV}$"
    ],
    "correctAnswer": "$V \\approx 31000\\text{ V} = 31\\text{ kV}$",
    "correctIndex": 3,
    "hintEn": "$V = \\frac{hc}{e\\lambda_{\\min}} = \\frac{12400}{\\lambda_{\\min}\\text{ (in \\AA)}}$.",
    "hintAr": "$V = \\frac{hc}{e\\lambda_{\\min}}$.",
    "stepByStepSolutionEn": [
      "$V = \\frac{hc}{e\\lambda_{\\min}} = \\frac{1.9875 \\times 10^{-25}\\text{ J}\\cdot\\text{m}}{(1.6 \\times 10^{-19}\\text{ C}) \\times (4.0 \\times 10^{-11}\\text{ m})} = \\frac{1.9875 \\times 10^{-25}}{6.4 \\times 10^{-30}} \\approx 31054\\text{ V} \\approx 31\\text{ kV}$."
    ],
    "stepByStepSolutionAr": [
      "$V = \\frac{hc}{e\\lambda_{\\min}} \\approx \\frac{12400}{0.4} = 31000\\text{ فولت} = 31\\text{ كيلو فولت}$."
    ],
    "teacherTipEn": "Higher tube voltages produce more penetrating 'harder' X-rays with shorter minimum wavelengths.",
    "teacherTipAr": "كلما زاد فرق الجهد المعجل كلما قل الطول الموجي وأصبحت الأشعة السينية أكثر قدرة على النفاذ (أشعة صلبة)."
  },
  {
    "id": "phys_ch6_db_med_13",
    "titleEn": "Final Velocity of Electrons Striking Target in Coolidge Tube",
    "titleAr": "سرعة اصطدام الإلكترونات بمعدن الهدف في أنبوبة كولدج",
    "difficulty": "medium",
    "questionEn": "In a Coolidge tube operating at potential difference $V = 30\\text{ kV}$, what is the final speed $v$ of electrons just before striking the target ($m_e = 9.1 \\times 10^{-31}\\text{ kg}$)?",
    "questionAr": "في أنبوبة كولدج تعمل بفرق جهد $V = 30\\text{ kV}$، ما هي سرعة الإلكترونات $v$ قبل اصطدامها بالهدف مباشرة؟",
    "optionsEn": [
      "$v \\approx 1.03 \\times 10^8\\text{ m/s}$ (about $34\\%$ of the speed of light)",
      "$v \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v \\approx 5.27 \\times 10^6\\text{ m/s}$",
      "$v \\approx 7.25 \\times 10^7\\text{ m/s}$"
    ],
    "optionsAr": [
      "$v \\approx 1.03 \\times 10^8\\text{ m/s}$ (حوالي ثلث سرعة الضوء)",
      "$v \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v \\approx 5.27 \\times 10^6\\text{ m/s}$",
      "$v \\approx 7.25 \\times 10^7\\text{ m/s}$"
    ],
    "correctAnswer": "$v \\approx 1.03 \\times 10^8\\text{ m/s}$ (about $34\\%$ of the speed of light)",
    "correctIndex": 0,
    "hintEn": "$v = \\sqrt{\\frac{2eV}{m_e}}$. $V = 30000\\text{ V}$.",
    "hintAr": "$v = \\sqrt{\\frac{2eV}{m_e}}$.",
    "stepByStepSolutionEn": [
      "$v = \\sqrt{\\frac{2 \\times (1.6 \\times 10^{-19}) \\times 30000}{9.1 \\times 10^{-31}}} = \\sqrt{\\frac{9.6 \\times 10^{-15}}{9.1 \\times 10^{-31}}} = \\sqrt{1.055 \\times 10^{16}} \\approx 1.027 \\times 10^8\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "$v = \\sqrt{\\frac{2 \\times 1.6 \\times 10^{-19} \\times 30000}{9.1 \\times 10^{-31}}} \\approx 1.03 \\times 10^8\\text{ م/ث}$."
    ],
    "teacherTipEn": "At 30 kV, electrons reach about one-third of the speed of light, carrying immense kinetic energy converted upon collision into X-rays and thermal heat.",
    "teacherTipAr": "تصل الإلكترونات إلى نحو ثلث سرعة الضوء وتتحول طاقتها الحركية الهائلة عند الاصطدام إلى إشعاع كهرومغناطيسي وحرارة."
  },
  {
    "id": "phys_ch6_db_med_14",
    "titleEn": "Heat Dissipation and Efficiency in Coolidge Tube Anode",
    "titleAr": "الطاقة الحرارية المتولدة في هدف أنبوبة كولدج",
    "difficulty": "medium",
    "questionEn": "A Coolidge tube operates at potential difference $V = 50\\text{ kV}$ and current $I = 4\\text{ mA}$. If only $1\\%$ of the electron kinetic energy is converted into X-rays, the rate of heat generated in the target is:",
    "questionAr": "تعمل أنبوبة كولدج بفرق جهد $V = 50\\text{ kV}$ وتيار $I = 4\\text{ mA}$. إذا تحول 1% فقط من طاقة حركة الإلكترونات إلى أشعة سينية، فإن معدل تولد الحرارة في الهدف يساوي:",
    "optionsEn": [
      "$P_{\\text{heat}} = 2\\text{ W}$",
      "$P_{\\text{heat}} = 198\\text{ W}$",
      "$P_{\\text{heat}} = 200\\text{ W}$",
      "$P_{\\text{heat}} = 50\\text{ W}$"
    ],
    "optionsAr": [
      "$P_{\\text{heat}} = 2\\text{ W}$",
      "$P_{\\text{heat}} = 198\\text{ W}$",
      "$P_{\\text{heat}} = 200\\text{ W}$",
      "$P_{\\text{heat}} = 50\\text{ W}$"
    ],
    "correctAnswer": "$P_{\\text{heat}} = 198\\text{ W}$",
    "correctIndex": 1,
    "hintEn": "Total power $P = VI$. Heat is $99\\%$ of total power.",
    "hintAr": "القدرة الكهربية الكلية $P = VI$. والحرارة تمثل 99% من القدرة الكلية.",
    "stepByStepSolutionEn": [
      "Total input electrical power: $P_{\\text{total}} = V \\times I = (50 \\times 10^3\\text{ V}) \\times (4 \\times 10^{-3}\\text{ A}) = 200\\text{ W}$. Since efficiency is $1\\%$, X-ray output power is $P_X = 0.01 \\times 200 = 2\\text{ W}$. The remaining $99\\%$ is dissipated as heat: $P_{\\text{heat}} = 0.99 \\times 200\\text{ W} = 198\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "القدرة الكلية للأنبوبة $P = VI = 50000 \\times 0.004 = 200\\text{ واط}$. قدرة الأشعة السينية 1% فقط وتساوي 2 واط، بينما 99% تفقد كحرارة في الهدف: $P_{\\text{heat}} = 198\\text{ واط}$."
    ],
    "teacherTipEn": "This enormous thermal dissipation requires heavy tungsten targets embedded in massive copper blocks cooled with circulating oil or cooling fins.",
    "teacherTipAr": "هذه الحرارة الهائلة تفسر لماذا يصنع الهدف من التنجستن عالي الانصهار ويثبت في ساق نحاسية ذات ريش تبريد لتشتيت الحرارة."
  },
  {
    "id": "phys_ch6_db_med_15",
    "titleEn": "Electron Collision Rate with Target in Coolidge Tube",
    "titleAr": "عدد الإلكترونات المصطدمة بالهدف في الثانية في أنبوبة كولدج",
    "difficulty": "medium",
    "questionEn": "If a Coolidge tube draws an operating beam current of $I = 3.2\\text{ mA}$, the number of electrons striking the target per second is:",
    "questionAr": "إذا كانت شدة التيار المار في أنبوبة كولدج $I = 3.2\\text{ mA}$، فإن عدد الإلكترونات التي تصطدم بالهدف في الثانية الواحدة يساوي:",
    "optionsEn": [
      "$N = 1.6 \\times 10^{19}\\text{ electrons/s}$",
      "$N = 3.2 \\times 10^{16}\\text{ electrons/s}$",
      "$N = 2.0 \\times 10^{16}\\text{ electrons/s}$",
      "$N = 5.0 \\times 10^{15}\\text{ electrons/s}$"
    ],
    "optionsAr": [
      "$N = 1.6 \\times 10^{19}\\text{ إلكترون/ثانية}$",
      "$N = 3.2 \\times 10^{16}\\text{ إلكترون/ثانية}$",
      "$N = 2.0 \\times 10^{16}\\text{ إلكترون/ثانية}$",
      "$N = 5.0 \\times 10^{15}\\text{ إلكترون/ثانية}$"
    ],
    "correctAnswer": "$N = 2.0 \\times 10^{16}\\text{ electrons/s}$",
    "correctIndex": 2,
    "hintEn": "$N = \\frac{I \\cdot t}{e} = \\frac{3.2 \\times 10^{-3}}{1.6 \\times 10^{-19}}$.",
    "hintAr": "$N = \\frac{I}{e}$.",
    "stepByStepSolutionEn": [
      "$N = \\frac{I}{e} = \\frac{3.2 \\times 10^{-3}\\text{ A}}{1.6 \\times 10^{-19}\\text{ C}} = 2.0 \\times 10^{16}\\text{ electrons/s}$."
    ],
    "stepByStepSolutionAr": [
      "$N = \\frac{I}{e} = \\frac{3.2 \\times 10^{-3}}{1.6 \\times 10^{-19}} = 2 \\times 10^{16}\\text{ إلكترون/ثانية}$."
    ],
    "teacherTipEn": "Filament current controls the rate of electron emission (beam intensity and X-ray intensity), while high voltage controls electron kinetic energy and penetration power.",
    "teacherTipAr": "تيار الفتيلة يتحكم في عدد الإلكترونات بالثانية (شدة الأشعة السينية)، بينما فرق الجهد العالي يتحكم في طاقة الإلكترون وقوة نفاذ الأشعة."
  },
  {
    "id": "phys_ch6_db_med_16",
    "titleEn": "Characteristic K-Alpha X-Ray Photon Energy in Tungsten",
    "titleAr": "طاقة فوتون الخط المميز K-ألفا في مادة التنجستن",
    "difficulty": "medium",
    "questionEn": "In a tungsten target atom ($Z = 74$), the binding energy of the K-shell is $E_K = -69.5\\text{ keV}$ and the L-shell is $E_L = -11.5\\text{ keV}$. What is the photon energy and wavelength of the characteristic $K_\\alpha$ line?",
    "questionAr": "في ذرة التنجستن ($Z = 74$)، طاقة ارتباط المستوى K هي $-69.5\\text{ keV}$ والمستوى L هي $-11.5\\text{ keV}$. ما هي طاقة الفوتون وطوله الموجي للخط المميز $K_\\alpha$؟",
    "optionsEn": [
      "$\\Delta E = 81.0\\text{ keV}$, $\\lambda \\approx 0.0153\\text{ nm}$",
      "$\\Delta E = 11.5\\text{ keV}$, $\\lambda \\approx 0.108\\text{ nm}$",
      "$\\Delta E = 3.4\\text{ keV}$, $\\lambda \\approx 0.365\\text{ nm}$",
      "$\\Delta E = 58.0\\text{ keV}$, $\\lambda \\approx 0.0214\\text{ nm} = 0.214\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$\\Delta E = 81.0\\text{ keV}$، $\\lambda \\approx 0.0153\\text{ nm}$",
      "$\\Delta E = 11.5\\text{ keV}$، $\\lambda \\approx 0.108\\text{ nm}$",
      "$\\Delta E = 3.4\\text{ keV}$، $\\lambda \\approx 0.365\\text{ nm}$",
      "$\\Delta E = 58.0\\text{ keV}$، $\\lambda \\approx 0.0214\\text{ nm} = 0.214\\text{ \\AA}$"
    ],
    "correctAnswer": "$\\Delta E = 58.0\\text{ keV}$, $\\lambda \\approx 0.0214\\text{ nm} = 0.214\\text{ \\AA}$",
    "correctIndex": 3,
    "hintEn": "$\\Delta E = E_L - E_K = -11.5 - (-69.5) = 58.0\\text{ keV}$. $\\lambda = \\frac{12400}{58000}\\text{ \\AA}$.",
    "hintAr": "$\\Delta E = 69.5 - 11.5 = 58.0\\text{ keV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_L - E_K = -11.5\\text{ keV} - (-69.5\\text{ keV}) = 58.0\\text{ keV} = 58000\\text{ eV} = 9.28 \\times 10^{-15}\\text{ J}$. Wavelength: $\\lambda = \\frac{hc}{\\Delta E} = \\frac{1.9875 \\times 10^{-25}}{9.28 \\times 10^{-15}} \\approx 2.14 \\times 10^{-11}\\text{ m} = 0.214\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون المنبعث $\\Delta E = 69.5 - 11.5 = 58\\text{ كيلو إلكترون فولت}$. وطوله الموجي $\\lambda = \\frac{hc}{\\Delta E} \\approx 0.214\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "Notice that for this characteristic line to appear, the tube voltage MUST be at least $69.5\\text{ kV}$ to eject the K-electron in the first place.",
    "teacherTipAr": "لكي يظهر هذا الخط المميز، يجب ألا يقل فرق جهد الأنبوبة عن 69.5 كيلو فولت حتى يتمكن الإلكترون المقذوف من نزع إلكترون المستوى K أصلاً."
  },
  {
    "id": "phys_ch6_db_med_17",
    "titleEn": "Photon Energy of Helium-Neon 632.8 nm Laser Line",
    "titleAr": "حساب طاقة فوتون ليزر الهيليوم-نيون ذي الطول الموجي 632.8 نانومتر",
    "difficulty": "medium",
    "questionEn": "What is the energy of a single photon emitted by a Helium-Neon laser ($\\lambda = 632.8\\text{ nm}$) in electron-volts?",
    "questionAr": "ما هي طاقة فوتون واحد منبعث من ليزر الهيليوم-نيون ($\\lambda = 632.8\\text{ nm}$) بوحدة الإلكترون فولت؟",
    "optionsEn": [
      "$E \\approx 1.96\\text{ eV} = 3.14 \\times 10^{-19}\\text{ J}$",
      "$E \\approx 3.14\\text{ eV}$",
      "$E \\approx 0.63\\text{ eV}$",
      "$E \\approx 4.85\\text{ eV}$"
    ],
    "optionsAr": [
      "$E \\approx 1.96\\text{ eV} = 3.14 \\times 10^{-19}\\text{ J}$",
      "$E \\approx 3.14\\text{ eV}$",
      "$E \\approx 0.63\\text{ eV}$",
      "$E \\approx 4.85\\text{ eV}$"
    ],
    "correctAnswer": "$E \\approx 1.96\\text{ eV} = 3.14 \\times 10^{-19}\\text{ J}$",
    "correctIndex": 0,
    "hintEn": "$E = \\frac{hc}{\\lambda} = \\frac{1240}{632.8}\\text{ eV}$.",
    "hintAr": "$E = \\frac{hc}{\\lambda}$ ثم اقسم على $1.6 \\times 10^{-19}$.",
    "stepByStepSolutionEn": [
      "$E = \\frac{hc}{\\lambda} = \\frac{1.9875 \\times 10^{-25}\\text{ J}\\cdot\\text{m}}{632.8 \\times 10^{-9}\\text{ m}} \\approx 3.141 \\times 10^{-19}\\text{ J}$. Dividing by $1.6 \\times 10^{-19}\\text{ J/eV}$ yields $E \\approx 1.963\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E = \\frac{hc}{\\lambda} = \\frac{1.9875 \\times 10^{-25}}{632.8 \\times 10^{-9}} \\approx 3.14 \\times 10^{-19}\\text{ جول} \\approx 1.96\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "This $1.96\\text{ eV}$ represents the exact energy separation between the $E_3$ metastable level and $E_2$ level in the Neon atom.",
    "teacherTipAr": "طاقة $1.96\\text{ eV}$ تمثل فرق الطاقة الدقيق بين المستوى شبه المستقر $E_3$ والمستوى الأدنى $E_2$ في ذرة النيون."
  },
  {
    "id": "phys_ch6_db_med_18",
    "titleEn": "Photon Emission Rate of a 5 mW He-Ne Laser",
    "titleAr": "معدل انبعاث الفوتونات من ليزر هيليوم-نيون قدرته 5 مللي واط",
    "difficulty": "medium",
    "questionEn": "A red Helium-Neon laser ($\\lambda = 632.8\\text{ nm}$) emits an output beam power of $P = 5.0\\text{ mW}$. How many photons does the laser emit per second?",
    "questionAr": "يبعث ليزر هيليوم-نيون أحمر ($\\lambda = 632.8\\text{ nm}$) حزمة قدرتها $P = 5.0\\text{ mW}$. كم فوتوناً يبعثه جهاز الليزر في الثانية الواحدة؟",
    "optionsEn": [
      "$\\Phi_L \\approx 3.18 \\times 10^{18}\\text{ photons/s}$",
      "$\\Phi_L \\approx 1.59 \\times 10^{16}\\text{ photons/s}$",
      "$\\Phi_L \\approx 6.32 \\times 10^{14}\\text{ photons/s}$",
      "$\\Phi_L \\approx 2.50 \\times 10^{12}\\text{ photons/s}$"
    ],
    "optionsAr": [
      "$\\Phi_L \\approx 3.18 \\times 10^{18}\\text{ فوتون/ثانية}$",
      "$\\Phi_L \\approx 1.59 \\times 10^{16}\\text{ فوتون/ثانية}$",
      "$\\Phi_L \\approx 6.32 \\times 10^{14}\\text{ فوتون/ثانية}$",
      "$\\Phi_L \\approx 2.50 \\times 10^{12}\\text{ فوتون/ثانية}$"
    ],
    "correctAnswer": "$\\Phi_L \\approx 1.59 \\times 10^{16}\\text{ photons/s}$",
    "correctIndex": 1,
    "hintEn": "$\\Phi_L = \\frac{P}{E_{\\text{photon}}} = \\frac{P}{hc/\\lambda}$.",
    "hintAr": "$\\Phi_L = \\frac{P}{E_{\\text{photon}}}$.",
    "stepByStepSolutionEn": [
      "Energy of one photon: $E = 3.14 \\times 10^{-19}\\text{ J}$. Rate: $\\Phi_L = \\frac{P}{E} = \\frac{5.0 \\times 10^{-3}\\text{ W}}{3.14 \\times 10^{-19}\\text{ J}} \\approx 1.59 \\times 10^{16}\\text{ photons/s}$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون الواحد $3.14 \\times 10^{-19}\\text{ جول}$. إذن معدل انبعاث الفوتونات $\\Phi_L = \\frac{P}{E} = \\frac{5 \\times 10^{-3}}{3.14 \\times 10^{-19}} \\approx 1.59 \\times 10^{16}\\text{ فوتون/ثانية}$."
    ],
    "teacherTipEn": "Even a small 5 mW laser pointer fires nearly 16 quadrillion coherent photons per second.",
    "teacherTipAr": "حتى مؤشر الليزر الصغير بقدرة 5 مللي واط يطلق قرابة 16 ألف تريليون فوتون مترابط في كل ثانية."
  },
  {
    "id": "phys_ch6_db_med_19",
    "titleEn": "Phase Difference from Path Difference in Holography",
    "titleAr": "حساب فرق الطور من فرق المسار في التصوير المجسم",
    "difficulty": "medium",
    "questionEn": "In holographic 3D recording with a laser of wavelength $\\lambda = 600\\text{ nm}$, two reflected object rays have a path difference of $\\Delta x = 150\\text{ nm}$ ($\\lambda/4$). What is the resulting phase difference $\\Delta\\phi$?",
    "questionAr": "في تسجيل هولوجرام ثلاثي الأبعاد باستخدام ليزر طوله الموجي $\\lambda = 600\\text{ nm}$، كان فرق المسار بين شعاعين منعكسين من سطح الجسم هو $\\Delta x = 150\\text{ nm}$ ($\\lambda/4$). ما هو فرق الطور $\\Delta\\phi$ الناتج بينهما؟",
    "optionsEn": [
      "$\\Delta\\phi = \\pi\\text{ rad} = 180^\\circ$",
      "$\\Delta\\phi = 2\\pi\\text{ rad} = 360^\\circ$",
      "$\\Delta\\phi = \\frac{\\pi}{2}\\text{ rad} = 90^\\circ$",
      "$\\Delta\\phi = \\frac{\\pi}{4}\\text{ rad} = 45^\\circ$"
    ],
    "optionsAr": [
      "$\\Delta\\phi = \\pi\\text{ rad} = 180^\\circ$",
      "$\\Delta\\phi = 2\\pi\\text{ rad} = 360^\\circ$",
      "$\\Delta\\phi = \\frac{\\pi}{2}\\text{ rad} = 90^\\circ$",
      "$\\Delta\\phi = \\frac{\\pi}{4}\\text{ rad} = 45^\\circ$"
    ],
    "correctAnswer": "$\\Delta\\phi = \\frac{\\pi}{2}\\text{ rad} = 90^\\circ$",
    "correctIndex": 2,
    "hintEn": "Fundamental formula: $\\text{Phase difference} = \\text{Path difference} \\times \\frac{2\\pi}{\\lambda}$.",
    "hintAr": "فرق الطور = فرق المسار × $\\frac{2\\pi}{\\lambda}$.",
    "stepByStepSolutionEn": [
      "$\\Delta\\phi = \\Delta x \\times \\frac{2\\pi}{\\lambda} = 150\\text{ nm} \\times \\frac{2\\pi}{600\\text{ nm}} = \\frac{150}{600} \\times 2\\pi = \\frac{1}{4} \\times 2\\pi = \\frac{\\pi}{2}\\text{ rad} = 90^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "فرق الطور = فرق المسار × $\\frac{2\\pi}{\\lambda} = 150 \\times \\frac{2\\pi}{600} = \\frac{\\pi}{2}\\text{ راديان} = 90^\\circ$."
    ],
    "teacherTipEn": "A path difference of $\\lambda$ produces $2\\pi$ ($360^\\circ$); $\\lambda/2$ produces $\\pi$ ($180^\\circ$); $\\lambda/4$ produces $\\pi/2$ ($90^\\circ$).",
    "teacherTipAr": "احفظ التناسبات الأساسية: فرق مسار $\\lambda$ يقابله $2\\pi$ ($360^\\circ$)، وفرق مسار $\\lambda/2$ يقابله $\\pi$ ($180^\\circ$)."
  },
  {
    "id": "phys_ch6_db_med_20",
    "titleEn": "Intrinsic Carrier Concentration Total Mobile Density",
    "titleAr": "إجمالي كثافة الشحنات المتحركة في بلورة سيليكون نقي",
    "difficulty": "medium",
    "questionEn": "A pure silicon crystal has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ at room temperature. What is the total density of all mobile charge carriers (electrons plus holes) in the crystal?",
    "questionAr": "بلورة سيليكون نقي تركيز حاملات الشحنة في الحالة النقية بها $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ عند درجة حرارة الغرفة. ما هو التركيز الكلي لجميع حاملات الشحنة المتحركة (إلكترونات + فجوات) في البلورة؟",
    "optionsEn": [
      "Total density $= 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
      "Total density $= 2.25 \\times 10^{20}\\text{ cm}^{-3}$",
      "Total density $= 0\\text{ cm}^{-3}$",
      "Total density $= n + p = 2n_i = 3.0 \\times 10^{10}\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "التركيز الكلي $= 1.5 \\times 10^{10}\\text{ cm}^{-3}$",
      "التركيز الكلي $= 2.25 \\times 10^{20}\\text{ cm}^{-3}$",
      "التركيز الكلي $= 0\\text{ cm}^{-3}$",
      "التركيز الكلي $= n + p = 2n_i = 3.0 \\times 10^{10}\\text{ cm}^{-3}$"
    ],
    "correctAnswer": "Total density $= n + p = 2n_i = 3.0 \\times 10^{10}\\text{ cm}^{-3}$",
    "correctIndex": 3,
    "hintEn": "In pure semiconductors, $n = p = n_i$. Total carriers $= n + p = 2n_i$.",
    "hintAr": "في البلورة النقية: تركيز الإلكترونات = تركيز الفجوات = $n_i$. والمجموع $2n_i$.",
    "stepByStepSolutionEn": [
      "In an intrinsic semiconductor, every thermally broken covalent bond creates exactly one free electron AND one positive hole. Therefore, $n = n_i$ and $p = n_i$. The total density of mobile charge carriers available for conduction is $n + p = 2n_i = 2 \\times (1.5 \\times 10^{10}) = 3.0 \\times 10^{10}\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "في شبه الموصل النقي، كل رابطة تكسر حرارياً تحرر إلكتروناً واحداً وتخلف فجوة واحدة، فيكون $n = n_i$ و $p = n_i$. إجمالي عدد الحوامل المتحركة في السنتيمتر المكعب هو $n + p = 2n_i = 3 \\times 10^{10}\\text{ cm}^{-3}$."
    ],
    "teacherTipEn": "Both electrons drifting opposite to the field and holes hopping along the field contribute additively to total electric current.",
    "teacherTipAr": "كل من الإلكترونات المتحركة والفجوات المتحركة تسهمان معاً في التوصيل الكهربي الكلي للبلورة."
  },
  {
    "id": "phys_ch6_db_med_21",
    "titleEn": "Hole Minority Carrier Density in n-Type Silicon",
    "titleAr": "حساب تركيز الفجوات الأقلية في بلورة سيليكون نوع n",
    "difficulty": "medium",
    "questionEn": "A pure silicon crystal with $n_i = 1.0 \\times 10^{10}\\text{ cm}^{-3}$ is doped with phosphorus donor atoms at a concentration of $\\text{N}_D = 1.0 \\times 10^{16}\\text{ cm}^{-3}$. What is the hole concentration $p$ at thermal equilibrium?",
    "questionAr": "بلورة سيليكون نقي تركيز الحوامل بها $n_i = 1.0 \\times 10^{10}\\text{ cm}^{-3}$، طُعمت بذرات فوسفور مانحة بتركيز $\\text{N}_D = 1.0 \\times 10^{16}\\text{ cm}^{-3}$. ما هو تركيز الفجوات $p$ في البلورة عند الاتزان الحراري؟",
    "optionsEn": [
      "$p = 1.0 \\times 10^4\\text{ cm}^{-3}$",
      "$p = 1.0 \\times 10^{10}\\text{ cm}^{-3}$",
      "$p = 1.0 \\times 10^{16}\\text{ cm}^{-3}$",
      "$p = 1.0 \\times 10^6\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$p = 1.0 \\times 10^4\\text{ cm}^{-3}$",
      "$p = 1.0 \\times 10^{10}\\text{ cm}^{-3}$",
      "$p = 1.0 \\times 10^{16}\\text{ cm}^{-3}$",
      "$p = 1.0 \\times 10^6\\text{ cm}^{-3}$"
    ],
    "correctAnswer": "$p = 1.0 \\times 10^4\\text{ cm}^{-3}$",
    "correctIndex": 0,
    "hintEn": "Law of Mass Action: $n \\cdot p = n_i^2$. In n-type, $n \\approx \\text{N}_D \\implies p = \\frac{n_i^2}{\\text{N}_D}$.",
    "hintAr": "$p = \\frac{n_i^2}{\\text{N}_D}$.",
    "stepByStepSolutionEn": [
      "In n-type silicon, majority electron density is $n \\approx \\text{N}_D = 10^{16}\\text{ cm}^{-3}$. Applying the Law of Mass Action: $p = \\frac{n_i^2}{n} = \\frac{(1.0 \\times 10^{10})^2}{1.0 \\times 10^{16}} = \\frac{10^{20}}{10^{16}} = 1.0 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "في البلورة نوع n: تركيز الإلكترونات $n \\approx \\text{N}_D = 10^{16}\\text{ cm}^{-3}$. ومن قانون فعل الكتلة: $p = \\frac{n_i^2}{\\text{N}_D} = \\frac{10^{20}}{10^{16}} = 10^4\\text{ cm}^{-3}$."
    ],
    "teacherTipEn": "Notice how heavily donor doping suppresses the minority hole population (from $10^{10}$ down to $10^4$) due to intense recombination.",
    "teacherTipAr": "لاحظ كيف أدى التطعيم بالمانح إلى كبت تركيز الفجوات بشدة (من $10^{10}$ إلى $10^4$) نتيجة زيادة معدل الالتئام مع الإلكترونات."
  },
  {
    "id": "phys_ch6_db_med_22",
    "titleEn": "Electron Minority Carrier Density in p-Type Silicon",
    "titleAr": "حساب تركيز الإلكترونات الأقلية في بلورة سيليكون نوع p",
    "difficulty": "medium",
    "questionEn": "A silicon crystal with $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ is doped with boron acceptor atoms at a concentration of $\\text{N}_A = 4.5 \\times 10^{15}\\text{ cm}^{-3}$. What is the electron concentration $n$?",
    "questionAr": "بلورة سيليكون نقي تركيز الحوامل بها $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$، طُعمت بذرات بورون متقبلة بتركيز $\\text{N}_A = 4.5 \\times 10^{15}\\text{ cm}^{-3}$. ما هو تركيز الإلكترونات الحرة $n$ في البلورة؟",
    "optionsEn": [
      "$n = 4.5 \\times 10^{15}\\text{ cm}^{-3}$",
      "$n = 5.0 \\times 10^4\\text{ cm}^{-3}$",
      "$n = 2.25 \\times 10^{20}\\text{ cm}^{-3}$",
      "$n = 3.0 \\times 10^5\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$n = 4.5 \\times 10^{15}\\text{ cm}^{-3}$",
      "$n = 5.0 \\times 10^4\\text{ cm}^{-3}$",
      "$n = 2.25 \\times 10^{20}\\text{ cm}^{-3}$",
      "$n = 3.0 \\times 10^5\\text{ cm}^{-3}$"
    ],
    "correctAnswer": "$n = 5.0 \\times 10^4\\text{ cm}^{-3}$",
    "correctIndex": 1,
    "hintEn": "In p-type, $p \\approx \\text{N}_A$. $n = \\frac{n_i^2}{\\text{N}_A}$.",
    "hintAr": "$n = \\frac{n_i^2}{\\text{N}_A}$.",
    "stepByStepSolutionEn": [
      "Majority hole concentration is $p \\approx \\text{N}_A = 4.5 \\times 10^{15}\\text{ cm}^{-3}$. By the Law of Mass Action: $n = \\frac{n_i^2}{\\text{N}_A} = \\frac{(1.5 \\times 10^{10})^2}{4.5 \\times 10^{15}} = \\frac{2.25 \\times 10^{20}}{4.5 \\times 10^{15}} = 5.0 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "في البلورة نوع p: تركيز الفجوات السائدة $p \\approx \\text{N}_A = 4.5 \\times 10^{15}\\text{ cm}^{-3}$. ومن قانون فعل الكتلة: $n = \\frac{n_i^2}{\\text{N}_A} = \\frac{2.25 \\times 10^{20}}{4.5 \\times 10^{15}} = 5 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "teacherTipEn": "Always calculate $n_i^2$ carefully: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}$.",
    "teacherTipAr": "انتبه دائماً لحساب مربع $n_i$: $(1.5 \\times 10^{10})^2 = 2.25 \\times 10^{20}$."
  },
  {
    "id": "phys_ch6_db_med_23",
    "titleEn": "Transistor Current Amplification Factor Beta Calculation",
    "titleAr": "حساب معامل تكبير التيار بيتا في الترانزستور",
    "difficulty": "medium",
    "questionEn": "In a common-emitter transistor circuit, a base current of $I_B = 40\\,\\mu\\text{A}$ produces a collector current of $I_C = 4.0\\text{ mA}$. What is the current amplification factor $\\beta_e$?",
    "questionAr": "في دائرة ترانزستور كباعث مشترك، تيار قاعدة قدره $I_B = 40\\,\\mu\\text{A}$ يتحكم في تيار مجمع قدره $I_C = 4.0\\text{ mA}$. ما قيمة معامل تكبير التيار $\\beta_e$؟",
    "optionsEn": [
      "$\\beta_e = 0.01$",
      "$\\beta_e = 160$",
      "$\\beta_e = 100$",
      "$\\beta_e = 99$"
    ],
    "optionsAr": [
      "$\\beta_e = 0.01$",
      "$\\beta_e = 160$",
      "$\\beta_e = 100$",
      "$\\beta_e = 99$"
    ],
    "correctAnswer": "$\\beta_e = 100$",
    "correctIndex": 2,
    "hintEn": "$\\beta_e = \\frac{I_C}{I_B}$. Convert both currents to Amperes.",
    "hintAr": "$\\beta_e = \\frac{I_C}{I_B}$ مع توحيد وحدات القياس للأمبير.",
    "stepByStepSolutionEn": [
      "Convert to same units: $I_C = 4.0\\text{ mA} = 4000\\,\\mu\\text{A}$. Then $\\beta_e = \\frac{I_C}{I_B} = \\frac{4000\\,\\mu\\text{A}}{40\\,\\mu\\text{A}} = 100$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{I_C}{I_B} = \\frac{4 \\times 10^{-3}}{40 \\times 10^{-6}} = 100$ (بدون وحدات)."
    ],
    "teacherTipEn": "Current gain $\\beta_e$ is dimensionless, representing how many times the collector current exceeds the base control current.",
    "teacherTipAr": "معامل التكبير $\\beta_e$ نسبة عددية مجردة من الوحدات تبين كم مرة يزيد تيار الخرج على تيار الدخل."
  },
  {
    "id": "phys_ch6_db_med_24",
    "titleEn": "Calculating Current Transfer Ratio Alpha from Beta",
    "titleAr": "حساب نسبة التوزيع ألفا بدلالة معامل التكبير بيتا",
    "difficulty": "medium",
    "questionEn": "If a transistor has a current gain of $\\beta_e = 99$, what is its current transfer ratio $\\alpha_e$?",
    "questionAr": "إذا كان معامل تكبير التيار لترانزستور $\\beta_e = 99$، فما هي نسبة التوزيع $\\alpha_e$ له؟",
    "optionsEn": [
      "$\\alpha_e = 1.01$",
      "$\\alpha_e = 0.90$",
      "$\\alpha_e = 99$",
      "$\\alpha_e = 0.99$"
    ],
    "optionsAr": [
      "$\\alpha_e = 1.01$",
      "$\\alpha_e = 0.90$",
      "$\\alpha_e = 99$",
      "$\\alpha_e = 0.99$"
    ],
    "correctAnswer": "$\\alpha_e = 0.99$",
    "correctIndex": 3,
    "hintEn": "$\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "hintAr": "$\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1}$.",
    "stepByStepSolutionEn": [
      "$\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1} = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "$\\alpha_e = \\frac{\\beta_e}{\\beta_e + 1} = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "$\\alpha_e$ is always slightly less than 1, while $\\beta_e$ is usually between $50$ and $200$.",
    "teacherTipAr": "نسبة التوزيع $\\alpha_e$ دائماً أقل من 1 بقليل بينما $\\beta_e$ تكون بالعشرات أو المئات."
  },
  {
    "id": "phys_ch6_db_med_25",
    "titleEn": "Calculating Current Amplification Factor Beta from Alpha",
    "titleAr": "حساب معامل تكبير التيار بيتا بدلالة نسبة التوزيع ألفا",
    "difficulty": "medium",
    "questionEn": "If a transistor has a current transfer ratio of $\\alpha_e = 0.98$, what is its current amplification factor $\\beta_e$?",
    "questionAr": "إذا كانت نسبة التوزيع لترانزستور هي $\\alpha_e = 0.98$، فما قيمة معامل تكبير التيار $\\beta_e$ له؟",
    "optionsEn": [
      "$\\beta_e = 49$",
      "$\\beta_e = 50$",
      "$\\beta_e = 98$",
      "$\\beta_e = 0.02$"
    ],
    "optionsAr": [
      "$\\beta_e = 49$",
      "$\\beta_e = 50$",
      "$\\beta_e = 98$",
      "$\\beta_e = 0.02$"
    ],
    "correctAnswer": "$\\beta_e = 49$",
    "correctIndex": 0,
    "hintEn": "$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e}$.",
    "hintAr": "$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e}$.",
    "stepByStepSolutionEn": [
      "$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e} = \\frac{0.98}{1 - 0.98} = \\frac{0.98}{0.02} = 49$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e} = \\frac{0.98}{0.02} = 49$."
    ],
    "teacherTipEn": "Notice: if $\\alpha_e$ increases from $0.98$ to $0.99$ (a tiny $1\\%$ change), $\\beta_e$ doubles from $49$ to $99$!",
    "teacherTipAr": "لاحظ الحساسية الشديدة: زيادة $\\alpha_e$ بنسبة 1% فقط من 0.98 إلى 0.99 تضاعف معامل التكبير $\\beta_e$ من 49 إلى 99!"
  },
  {
    "id": "phys_ch6_db_med_26",
    "titleEn": "Collector Current in Common-Emitter Load Line Circuit",
    "titleAr": "حساب تيار المجمع في دائرة مكبر الباعث المشترك",
    "difficulty": "medium",
    "questionEn": "In a common-emitter circuit, the DC collector supply is $V_{CC} = 10\\text{ V}$, the collector load resistor is $R_C = 2.0\\text{ k}\\Omega$, and the collector-emitter voltage drop is measured as $V_{CE} = 4.0\\text{ V}$. What is the collector current $I_C$?",
    "questionAr": "في دائرة باعث مشترك، جهد بطارية المجمع $V_{CC} = 10\\text{ V}$، ومقاومة المجمع $R_C = 2.0\\text{ k}\\Omega$، وفرق الجهد بين المجمع والباعث $V_{CE} = 4.0\\text{ V}$. ما قيمة تيار المجمع $I_C$؟",
    "optionsEn": [
      "$I_C = 5.0\\text{ mA}$",
      "$I_C = 3.0\\text{ mA}$",
      "$I_C = 2.0\\text{ mA}$",
      "$I_C = 7.0\\text{ mA}$"
    ],
    "optionsAr": [
      "$I_C = 5.0\\text{ mA}$",
      "$I_C = 3.0\\text{ mA}$",
      "$I_C = 2.0\\text{ mA}$",
      "$I_C = 7.0\\text{ mA}$"
    ],
    "correctAnswer": "$I_C = 3.0\\text{ mA}$",
    "correctIndex": 1,
    "hintEn": "$V_{CC} = V_{CE} + I_C R_C \\implies I_C = \\frac{V_{CC} - V_{CE}}{R_C}$.",
    "hintAr": "$I_C = \\frac{V_{CC} - V_{CE}}{R_C}$.",
    "stepByStepSolutionEn": [
      "From Kirchhoff's voltage loop around the collector circuit: $V_{CC} = V_{CE} + I_C R_C \\implies I_C R_C = V_{CC} - V_{CE} = 10\\text{ V} - 4.0\\text{ V} = 6.0\\text{ V}$. Then $I_C = \\frac{6.0\\text{ V}}{2000\\,\\Omega} = 3.0 \\times 10^{-3}\\text{ A} = 3.0\\text{ mA}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة دائرة المجمع: $V_{CC} = V_{CE} + I_C R_C$. إذن $I_C R_C = 10 - 4 = 6\\text{ V}$. ومنها $I_C = \\frac{6}{2000} = 3 \\times 10^{-3}\\text{ A} = 3\\text{ mA}$."
    ],
    "teacherTipEn": "This fundamental load line equation ($V_{CC} = V_{CE} + I_C R_C$) is the core equation of transistor amplification.",
    "teacherTipAr": "هذه المعادلة هي أساس تحليل دوائر الترانزستور كمكبر وكمفتاح في امتحانات الفيزياء."
  },
  {
    "id": "phys_ch6_db_med_27",
    "titleEn": "Required Base Current in Common-Emitter Circuit",
    "titleAr": "حساب تيار القاعدة المطلوب في دائرة مكبر الباعث المشترك",
    "difficulty": "medium",
    "questionEn": "Using the circuit from the previous problem ($I_C = 3.0\\text{ mA}$), if the transistor has a current gain of $\\beta_e = 60$, what base current $I_B$ must be supplied?",
    "questionAr": "بالرجوع للمسألة السابقة حيث $I_C = 3.0\\text{ mA}$، إذا كان معامل تكبير الترانزستور $\\beta_e = 60$، فما تيار القاعدة $I_B$ اللازم لمرور هذا التيار؟",
    "optionsEn": [
      "$I_B = 200\\,\\mu\\text{A}$",
      "$I_B = 180\\text{ mA}$",
      "$I_B = 50\\,\\mu\\text{A}$",
      "$I_B = 20\\,\\mu\\text{A}$"
    ],
    "optionsAr": [
      "$I_B = 200\\,\\mu\\text{A}$",
      "$I_B = 180\\text{ mA}$",
      "$I_B = 50\\,\\mu\\text{A}$",
      "$I_B = 20\\,\\mu\\text{A}$"
    ],
    "correctAnswer": "$I_B = 50\\,\\mu\\text{A}$",
    "correctIndex": 2,
    "hintEn": "$I_B = \\frac{I_C}{\\beta_e}$.",
    "hintAr": "$I_B = \\frac{I_C}{\\beta_e}$.",
    "stepByStepSolutionEn": [
      "$I_B = \\frac{I_C}{\\beta_e} = \\frac{3.0 \\times 10^{-3}\\text{ A}}{60} = 5.0 \\times 10^{-5}\\text{ A} = 50\\,\\mu\\text{A}$."
    ],
    "stepByStepSolutionAr": [
      "$I_B = \\frac{I_C}{\\beta_e} = \\frac{3 \\times 10^{-3}}{60} = 50 \\times 10^{-6}\\text{ A} = 50\\,\\mu\\text{A}$."
    ],
    "teacherTipEn": "Notice the enormous amplification: a tiny $50\\,\\mu\\text{A}$ base signal controls a $3000\\,\\mu\\text{A}$ collector stream.",
    "teacherTipAr": "لاحظ كفاءة التكبير: تيار تحكم دقيق جداً (50 ميكرو أمبير) يتحكم في تيار خرج ضخم (3000 ميكرو أمبير)."
  },
  {
    "id": "phys_ch6_db_med_28",
    "titleEn": "Transistor Amplifier Voltage Gain Calculation",
    "titleAr": "حساب معامل تكبير الجهد لمكبر الترانزستور",
    "difficulty": "medium",
    "questionEn": "In a common-emitter amplifier, the input resistance across the base is $R_{\\text{in}} = 1.0\\text{ k}\\Omega$, the collector load resistance is $R_C = 4.0\\text{ k}\\Omega$, and the current gain is $\\beta_e = 50$. What is the voltage gain $A_v$ of the amplifier?",
    "questionAr": "في مكبر باعث مشترك، مقاومة دائرة الدخل عند القاعدة $R_{\\text{in}} = 1.0\\text{ k}\\Omega$، ومقاومة دائرة الخرج للمجمع $R_C = 4.0\\text{ k}\\Omega$، ومعامل تكبير التيار $\\beta_e = 50$. ما هي قيمة معامل تكبير الجهد $A_v$ للمكبر؟",
    "optionsEn": [
      "$A_v = 50$",
      "$A_v = 12.5$",
      "$A_v = 4000$",
      "$A_v = 200$"
    ],
    "optionsAr": [
      "$A_v = 50$",
      "$A_v = 12.5$",
      "$A_v = 4000$",
      "$A_v = 200$"
    ],
    "correctAnswer": "$A_v = 200$",
    "correctIndex": 3,
    "hintEn": "Voltage gain $A_v = \\beta_e \\times \\frac{R_C}{R_{\\text{in}}}$.",
    "hintAr": "معامل تكبير الجهد $A_v = \\beta_e \\times \\frac{R_C}{R_{\\text{in}}}$.",
    "stepByStepSolutionEn": [
      "$A_v = \\frac{V_{\\text{out}}}{V_{\\text{in}}} = \\frac{\\Delta I_C \\cdot R_C}{\\Delta I_B \\cdot R_{\\text{in}}} = \\left(\\frac{\\Delta I_C}{\\Delta I_B}\\right) \\times \\left(\\frac{R_C}{R_{\\text{in}}}\\right) = \\beta_e \\times \\frac{R_C}{R_{\\text{in}}} = 50 \\times \\frac{4000}{1000} = 50 \\times 4 = 200$."
    ],
    "stepByStepSolutionAr": [
      "$A_v = \\beta_e \\times \\frac{R_C}{R_{\\text{in}}} = 50 \\times \\frac{4000}{1000} = 50 \\times 4 = 200$."
    ],
    "teacherTipEn": "Voltage gain is the product of current gain and resistance gain ($A_v = A_i \\times A_R$).",
    "teacherTipAr": "تكبير الجهد يساوي حاصل ضرب تكبير التيار في تكبير المقاومة ($A_v = A_i \\times A_R$)."
  },
  {
    "id": "phys_ch6_db_med_29",
    "titleEn": "Transistor Amplifier Power Gain Calculation",
    "titleAr": "حساب معامل تكبير القدرة الكهربية لمكبر الترانزستور",
    "difficulty": "medium",
    "questionEn": "For the amplifier in the previous question (where current gain is $\\beta_e = 50$ and voltage gain is $A_v = 200$), what is the total power gain $A_p$?",
    "questionAr": "للمكبر في المسألة السابقة (حيث معامل تكبير التيار $\\beta_e = 50$ وتكبير الجهد $A_v = 200$)، ما هو معامل تكبير القدرة الكهربية $A_p$؟",
    "optionsEn": [
      "$A_p = 10000$",
      "$A_p = 250$",
      "$A_p = 4$",
      "$A_p = 50000$"
    ],
    "optionsAr": [
      "$A_p = 10000$",
      "$A_p = 250$",
      "$A_p = 4$",
      "$A_p = 50000$"
    ],
    "correctAnswer": "$A_p = 10000$",
    "correctIndex": 0,
    "hintEn": "Power gain $A_p = A_v \\times \\beta_e = \\beta_e^2 \\times \\frac{R_C}{R_{\\text{in}}}$.",
    "hintAr": "معامل تكبير القدرة = تكبير الجهد × تكبير التيار.",
    "stepByStepSolutionEn": [
      "$A_p = \\frac{P_{\\text{out}}}{P_{\\text{in}}} = A_v \\times A_i = 200 \\times 50 = 10000$."
    ],
    "stepByStepSolutionAr": [
      "$A_p = A_v \\times \\beta_e = 200 \\times 50 = 10000$."
    ],
    "teacherTipEn": "Power amplification is not magic: the extra power comes from the external DC power supply ($V_{CC}$).",
    "teacherTipAr": "تكبير القدرة لا يخالف بقاء الطاقة: فالطاقة الإضافية المكبرة تأتي من بطارية التغذية المستمرة $V_{CC}$."
  },
  {
    "id": "phys_ch6_db_med_30",
    "titleEn": "NAND Logic Gate Output for Inputs 1 and 1",
    "titleAr": "خرج بوابة نفي التوافق (NAND) عند الدخل 1 و 1",
    "difficulty": "medium",
    "questionEn": "A NAND gate is an AND gate followed immediately by a NOT gate. If its two inputs are $A = 1$ and $B = 1$, the final output is:",
    "questionAr": "بوابة نفي التوافق (NAND) تتكون من بوابة AND متبوعة مباشرة ببوابة NOT. إذا كان كلا المدخلين $A = 1$ و $B = 1$، فإن الخرج النهائي يساوي:",
    "optionsEn": [
      "$1$",
      "$0$",
      "$-1$",
      "Undefined"
    ],
    "optionsAr": [
      "$1$",
      "$0$",
      "$-1$",
      "غير معرف"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 1,
    "hintEn": "AND of $(1, 1) = 1$. NOT of $1 = 0$.",
    "hintAr": "خرج AND لـ (1 و 1) هو 1، ومعكوسه عبر NOT يعطي صفراً.",
    "stepByStepSolutionEn": [
      "First, the AND gate computes $A \\cdot B = 1 \\cdot 1 = 1$. Next, the NOT gate inverts this intermediate result: $\\overline{1} = 0$. Therefore, the output is $0$."
    ],
    "stepByStepSolutionAr": [
      "أولاً: بوابة AND تعطي $1 \\times 1 = 1$. ثانياً: بوابة NOT تعكس الناتج فيصبح الخرج النهائي صفراً (0)."
    ],
    "teacherTipEn": "NAND gate truth table is the exact opposite of AND: it outputs 0 ONLY when all inputs are 1.",
    "teacherTipAr": "بوابة NAND هي المعكوس الدقيق لبوابة AND: تعطي صفراً فقط عند (1 و 1) وتعطي واحداً في كل الحالات الأخرى."
  },
  {
    "id": "phys_ch6_db_med_31",
    "titleEn": "NOR Logic Gate Output for Inputs 0 and 1",
    "titleAr": "خرج بوابة نفي الاختيار (NOR) عند الدخل 0 و 1",
    "difficulty": "medium",
    "questionEn": "A NOR gate consists of an OR gate followed by an inverter (NOT gate). When input $A = 0$ and input $B = 1$, the output of the NOR gate is:",
    "questionAr": "تتكون بوابة نفي الاختيار (NOR) من بوابة OR يعقبها عاكس (NOT). عندما يكون المدخل $A = 0$ والمدخل $B = 1$، فإن خرج بوابة NOR يكون:",
    "optionsEn": [
      "$1$",
      "Both 0 and 1 simultaneously",
      "$0$",
      "Infinite"
    ],
    "optionsAr": [
      "$1$",
      "0 و 1 معاً",
      "$0$",
      "لانهائي"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 2,
    "hintEn": "OR of $(0, 1) = 1$. Inverted by NOT: $\\overline{1} = 0$.",
    "hintAr": "خرج OR لـ (0 و 1) هو 1، ومعكوسه عبر NOT يعطي صفراً.",
    "stepByStepSolutionEn": [
      "First, the OR gate evaluates $A + B = 0 + 1 = 1$. Second, the NOT gate inverts the output: $\\overline{1} = 0$. Hence, the output is $0$."
    ],
    "stepByStepSolutionAr": [
      "بوابة OR تعطي $0 + 1 = 1$. بوابة NOT تعكس هذا الخرج إلى $\\bar{1} = 0$. إذن الخرج النهائي لبوابة NOR يساوي صفراً."
    ],
    "teacherTipEn": "NOR gate outputs 1 ONLY when all inputs are 0.",
    "teacherTipAr": "بوابة NOR لا تعطي واحداً إلا في حالة واحدة فقط: عندما تكون جميع المدخلات أصفاراً."
  },
  {
    "id": "phys_ch6_db_med_32",
    "titleEn": "Output of Logic Circuit: AND Followed by OR with External Input",
    "titleAr": "حساب خرج دائرة منطقية مركبة (AND ثم OR مع مدخل ثالث)",
    "difficulty": "medium",
    "questionEn": "In a logic circuit, inputs $A = 1$ and $B = 0$ enter an AND gate. The output of this AND gate and an independent third input $C = 1$ enter an OR gate. What is the final output of the OR gate?",
    "questionAr": "في دائرة منطقية، يدخل المدخلان $A = 1$ و $B = 0$ إلى بوابة AND. خرج هذه البوابة مع مدخل ثالث مستقل $C = 1$ يدخلان إلى بوابة OR. ما هو الخرج النهائي لبوابة OR؟",
    "optionsEn": [
      "$0$",
      "Alternating between 0 and 1",
      "High impedance disconnected",
      "$1$"
    ],
    "optionsAr": [
      "$0$",
      "متردد بين 0 و 1",
      "دائرة مفتوحة",
      "$1$"
    ],
    "correctAnswer": "$1$",
    "correctIndex": 3,
    "hintEn": "AND output: $1 \\cdot 0 = 0$. OR inputs: $0$ and $C=1 \\implies 0 + 1 = 1$.",
    "hintAr": "خرج AND هو $1 \\times 0 = 0$. دخل OR هو 0 و 1 فيعطي الخرج النهائي 1.",
    "stepByStepSolutionEn": [
      "Step 1: The AND gate receives $A = 1, B = 0$. Output is $Y_1 = A \\cdot B = 1 \\cdot 0 = 0$. Step 2: The OR gate receives $Y_1 = 0$ and $C = 1$. Output is $Y = Y_1 + C = 0 + 1 = 1$."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: مخرج بوابة AND هو $1 \\times 0 = 0$. الخطوة الثانية: مخرج بوابة OR يستقبل 0 مع 1، فيعطي $0 + 1 = 1$. إذن الخرج النهائي هو 1."
    ],
    "teacherTipEn": "Trace logic gates systematically step by step from left to right.",
    "teacherTipAr": "تتبع الدوائر المنطقية خطوة بخطوة من اليسار لليمين."
  },
  {
    "id": "phys_ch6_db_med_33",
    "titleEn": "Output of Logic Circuit: OR Followed by NOT and AND",
    "titleAr": "حساب خرج دائرة منطقية مركبة (OR ثم NOT ثم AND)",
    "difficulty": "medium",
    "questionEn": "Inputs $A = 1$ and $B = 0$ enter an OR gate. Its output is inverted by a NOT gate, and then fed as one input to an AND gate whose second input is $C = 1$. The final output is:",
    "questionAr": "المدخلان $A = 1$ و $B = 0$ يدخلان لبوابة OR، مخرجها يدخل لبوابة NOT، ثم يدخل الناتج كأحد مدخلي بوابة AND ومدخلها الثاني $C = 1$. الخرج النهائي يساوي:",
    "optionsEn": [
      "$0$",
      "$1$",
      "$-1$",
      "Indeterminate"
    ],
    "optionsAr": [
      "$0$",
      "$1$",
      "$-1$",
      "غير محدد"
    ],
    "correctAnswer": "$0$",
    "correctIndex": 0,
    "hintEn": "OR: $1+0=1$. NOT: $\\bar{1}=0$. AND: $0 \\cdot 1 = 0$.",
    "hintAr": "OR تعطي 1. العاكس NOT يعطي 0. وبوابة AND تعطي $0 \\times 1 = 0$.",
    "stepByStepSolutionEn": [
      "Step 1: OR gate yields $1 + 0 = 1$. Step 2: NOT gate inverts this to $0$. Step 3: AND gate receives $0$ and $C = 1$, yielding $0 \\cdot 1 = 0$."
    ],
    "stepByStepSolutionAr": [
      "الخطوة الأولى: خرج OR هو $1 + 0 = 1$. الخطوة الثانية: خرج NOT يعكسه إلى 0. الخطوة الثالثة: بوابة AND تستقبل 0 و 1 فيكون خرجها النهائي $0 \\times 1 = 0$."
    ],
    "teacherTipEn": "Whenever any input to an AND gate is 0, the output is guaranteed to be 0.",
    "teacherTipAr": "قاعدة ذهبية: وجود صفر واحد في أي من مدخلات بوابة AND يجعل خرجها صفراً فوراً."
  },
  {
    "id": "phys_ch6_db_med_34",
    "titleEn": "Binary to Decimal Conversion: 1101",
    "titleAr": "تحويل العدد الثنائي 1101 إلى النظام العشري",
    "difficulty": "medium",
    "questionEn": "The binary number $(1101)_2$ converted to the decimal system is:",
    "questionAr": "العدد الثنائي $(1101)_2$ يكافئ في النظام العشري العدد:",
    "optionsEn": [
      "$11$",
      "$13$",
      "$15$",
      "$9$"
    ],
    "optionsAr": [
      "$11$",
      "$13$",
      "$15$",
      "$9$"
    ],
    "correctAnswer": "$13$",
    "correctIndex": 1,
    "hintEn": "Evaluate positional powers of 2: $1\\times 2^3 + 1\\times 2^2 + 0\\times 2^1 + 1\\times 2^0$.",
    "hintAr": "$1\\times 8 + 1\\times 4 + 0\\times 2 + 1\\times 1 = 13$.",
    "stepByStepSolutionEn": [
      "$(1101)_2 = (1 \\times 2^3) + (1 \\times 2^2) + (0 \\times 2^1) + (1 \\times 2^0) = 8 + 4 + 0 + 1 = 13_{10}$."
    ],
    "stepByStepSolutionAr": [
      "$(1101)_2 = (1 \\times 8) + (1 \\times 4) + (0 \\times 2) + (1 \\times 1) = 8 + 4 + 0 + 1 = 13$."
    ],
    "teacherTipEn": "Weights of binary places from right to left: $1, 2, 4, 8, 16, 32, 64, \\dots$",
    "teacherTipAr": "أوزان الخانات الثنائية من اليمين لليسار: 1، 2، 4، 8، 16، 32، 64..."
  },
  {
    "id": "phys_ch6_db_med_35",
    "titleEn": "Binary to Decimal Conversion: 10110",
    "titleAr": "تحويل العدد الثنائي 10110 إلى النظام العشري",
    "difficulty": "medium",
    "questionEn": "The binary code $(10110)_2$ corresponds in the decimal system to:",
    "questionAr": "الكود الثنائي $(10110)_2$ يقابل في النظام العشري العدد:",
    "optionsEn": [
      "$20$",
      "$26$",
      "$22$",
      "$18$"
    ],
    "optionsAr": [
      "$20$",
      "$26$",
      "$22$",
      "$18$"
    ],
    "correctAnswer": "$22$",
    "correctIndex": 2,
    "hintEn": "$1\\times 16 + 0\\times 8 + 1\\times 4 + 1\\times 2 + 0\\times 1 = 22$.",
    "hintAr": "$16 + 0 + 4 + 2 + 0 = 22$.",
    "stepByStepSolutionEn": [
      "$(10110)_2 = (1 \\times 2^4) + (0 \\times 2^3) + (1 \\times 2^2) + (1 \\times 2^1) + (0 \\times 2^0) = 16 + 0 + 4 + 2 + 0 = 22_{10}$."
    ],
    "stepByStepSolutionAr": [
      "$(10110)_2 = (1 \\times 16) + (0 \\times 8) + (1 \\times 4) + (1 \\times 2) + (0 \\times 1) = 22$."
    ],
    "teacherTipEn": "Simply add the active powers of 2 ($16 + 4 + 2 = 22$).",
    "teacherTipAr": "اجمع ببساطة الأوزان التي يقابلها 1: $16 + 4 + 2 = 22$."
  },
  {
    "id": "phys_ch6_db_med_36",
    "titleEn": "Decimal to Binary Conversion: 19",
    "titleAr": "تحويل العدد العشري 19 إلى النظام الثنائي",
    "difficulty": "medium",
    "questionEn": "Converting the decimal number $19_{10}$ into the binary system yields:",
    "questionAr": "تحويل العدد العشري $19_{10}$ إلى النظام الثنائي يعطي:",
    "optionsEn": [
      "$(11001)_2$",
      "$(10101)_2$",
      "$(11100)_2$",
      "$(10011)_2$"
    ],
    "optionsAr": [
      "$(11001)_2$",
      "$(10101)_2$",
      "$(11100)_2$",
      "$(10011)_2$"
    ],
    "correctAnswer": "$(10011)_2$",
    "correctIndex": 3,
    "hintEn": "$19 = 16 + 2 + 1 = 2^4 + 2^1 + 2^0 \\implies 10011_2$.",
    "hintAr": "$19 = 16 + 2 + 1 \\implies 10011$.",
    "stepByStepSolutionEn": [
      "Decompose 19 into powers of 2: $19 = 16 + 2 + 1$. Slot 16 ($2^4$) is 1; slot 8 ($2^3$) is 0; slot 4 ($2^2$) is 0; slot 2 ($2^1$) is 1; slot 1 ($2^0$) is 1. Thus $19_{10} = (10011)_2$."
    ],
    "stepByStepSolutionAr": [
      "طريقة التفكيك لقوى 2: $19 = 16 + 2 + 1$. نضع 1 عند خانات 16 و 2 و 1، ونضع 0 عند خانات 8 و 4. فيكون الناتج $(10011)_2$."
    ],
    "teacherTipEn": "Alternatively, divide repeatedly by 2 and read remainders from bottom to top.",
    "teacherTipAr": "أو بطريقة القسمة المتكررة على 2 وكتابة البواقي من أسفل لأعلى."
  },
  {
    "id": "phys_ch6_db_med_37",
    "titleEn": "Decimal to Binary Conversion: 25",
    "titleAr": "تحويل العدد العشري 25 إلى النظام الثنائي",
    "difficulty": "medium",
    "questionEn": "The decimal number $25_{10}$ represented as binary code is:",
    "questionAr": "العدد العشري $25_{10}$ يعبر عنه في النظام الثنائي بالكود:",
    "optionsEn": [
      "$(11001)_2$",
      "$(10011)_2$",
      "$(11010)_2$",
      "$(10111)_2$"
    ],
    "optionsAr": [
      "$(11001)_2$",
      "$(10011)_2$",
      "$(11010)_2$",
      "$(10111)_2$"
    ],
    "correctAnswer": "$(11001)_2$",
    "correctIndex": 0,
    "hintEn": "$25 = 16 + 8 + 1 \\implies 11001_2$.",
    "hintAr": "$25 = 16 + 8 + 1 \\implies 11001$.",
    "stepByStepSolutionEn": [
      "$25 = 16 + 8 + 1 = 2^4 + 2^3 + 2^0$. Weights $16$ (1), $8$ (1), $4$ (0), $2$ (0), $1$ (1). Result is $(11001)_2$."
    ],
    "stepByStepSolutionAr": [
      "$25 = 16 + 8 + 1$. نضع 1 عند خانة 16 وخانة 8 وخانة 1، وأصفار عند 4 و 2. فيكون الناتج $(11001)_2$."
    ],
    "teacherTipEn": "Double check: $16 + 8 + 1 = 25$.",
    "teacherTipAr": "للتأكد: $16 + 8 + 1 = 25$."
  },
  {
    "id": "phys_ch6_db_med_38",
    "titleEn": "Brackett Series Longest Wavelength Transition",
    "titleAr": "أكبر طول موجي في متسلسلة براكت",
    "difficulty": "medium",
    "questionEn": "In the Brackett spectral series of hydrogen ($n = 4$), the longest wavelength line ($\\lambda_{\\max}$) is produced by the electronic transition from level:",
    "questionAr": "في متسلسلة براكت لطيف الهيدروجين ($n = 4$)، ينتج أكبر طول موجي ($\\lambda_{\\max}$) عند انتقال الإلكترون من المستوى:",
    "optionsEn": [
      "$n = \\infty$ to $n = 4$",
      "$n = 5$ to $n = 4$",
      "$n = 6$ to $n = 4$",
      "$n = 4$ to $n = 1$"
    ],
    "optionsAr": [
      "$n = \\infty$ إلى $n = 4$",
      "$n = 5$ إلى $n = 4$",
      "$n = 6$ إلى $n = 4$",
      "$n = 4$ إلى $n = 1$"
    ],
    "correctAnswer": "$n = 5$ to $n = 4$",
    "correctIndex": 1,
    "hintEn": "Longest wavelength corresponds to smallest energy difference (adjacent upper level $n+1$).",
    "hintAr": "أكبر طول موجي يقابل أقل طاقة، وهو الانتقال من المستوى المجاور مباشرة ($n+1$).",
    "stepByStepSolutionEn": [
      "Longest wavelength $\\lambda_{\\max}$ requires minimum transition energy $\\Delta E_{\\min}$. For Brackett ($n = 4$), the smallest energy difference is the transition from the adjacent level above: $n = 5 \\to n = 4$."
    ],
    "stepByStepSolutionAr": [
      "أكبر طول موجي يقابل أقل تردد وأصغر فرق طاقة ممكن في المتسلسلة، ويكون ذلك بالهبوط من المستوى الأعلى المجاور مباشرة ($n=5$ إلى $n=4$)."
    ],
    "teacherTipEn": "General rule: longest wavelength in any series $n$ is always the transition from $n+1 \\to n$.",
    "teacherTipAr": "قاعدة عامة: أكبر طول موجي في أي متسلسلة $n$ ينتج دائماً من هبوط الإلكترون من المستوى $(n+1)$ إلى $n$."
  },
  {
    "id": "phys_ch6_db_med_39",
    "titleEn": "Frequency Ratio for Hydrogen Transitions 3 to 1 and 2 to 1",
    "titleAr": "نسبة ترددي الفوتونين المنبعثين عند الانتقال من 3 إلى 1 ومن 2 إلى 1",
    "difficulty": "medium",
    "questionEn": "In a hydrogen atom, what is the ratio of the frequency of the photon emitted in transition $n = 3 \\to n = 1$ to that in transition $n = 2 \\to n = 1$?",
    "questionAr": "في ذرة الهيدروجين، ما هي النسبة بين تردد الفوتون المنبعث عند الانتقال من $n = 3 \\to n = 1$ إلى المنبعث من $n = 2 \\to n = 1$؟",
    "optionsEn": [
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{3}{2}$",
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{4}{3}$",
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{32}{27} \\approx 1.185$",
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{9}{4}$"
    ],
    "optionsAr": [
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{3}{2}$",
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{4}{3}$",
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{32}{27} \\approx 1.185$",
      "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{9}{4}$"
    ],
    "correctAnswer": "$\\frac{\\nu_{3 \\to 1}}{\\nu_{2 \\to 1}} = \\frac{32}{27} \\approx 1.185$",
    "correctIndex": 2,
    "hintEn": "$\\Delta E_{3 \\to 1} = 13.6(1 - 1/9) = \\frac{8}{9} \\times 13.6$. $\\Delta E_{2 \\to 1} = 13.6(1 - 1/4) = \\frac{3}{4} \\times 13.6$.",
    "hintAr": "النسبة تساوي $\\frac{8/9}{3/4} = \\frac{32}{27}$.",
    "stepByStepSolutionEn": [
      "$\\nu \\propto \\Delta E$. We have $\\Delta E_{3 \\to 1} = 13.6 \\left(1 - \\frac{1}{9}\\right) = \\frac{8}{9} \\times 13.6$. And $\\Delta E_{2 \\to 1} = 13.6 \\left(1 - \\frac{1}{4}\\right) = \\frac{3}{4} \\times 13.6$. The ratio of frequencies is $\\frac{8/9}{3/4} = \\frac{8}{9} \\times \\frac{4}{3} = \\frac{32}{27} \\approx 1.185$."
    ],
    "stepByStepSolutionAr": [
      "التردد يتناسب طردياً مع فرق الطاقة: $\\frac{\\Delta E_1}{\\Delta E_2} = \\frac{8/9}{3/4} = \\frac{32}{27}$."
    ],
    "teacherTipEn": "This fraction $\\frac{32}{27}$ is a hallmark test of algebraic fractions in ministerial quantum physics.",
    "teacherTipAr": "من المسائل الرياضية الدقيقة في منهج الثانوية العامة وتعتمد على اختصار الكسور بدقة."
  },
  {
    "id": "phys_ch6_db_med_40",
    "titleEn": "Radius and Electron Speed in First Bohr Orbit",
    "titleAr": "نصف قطر وسرعة الإلكترون في مدار بور الأول",
    "difficulty": "medium",
    "questionEn": "The radius of the first Bohr orbit in hydrogen is $r_1 \\approx 0.53\\text{ \\AA} = 5.3 \\times 10^{-11}\\text{ m}$. Given Bohr angular momentum $m_e v r = \\frac{h}{2\\pi}$, the orbital speed $v_1$ of the ground state electron is approximately:",
    "questionAr": "نصف قطر مدار بور الأول للهيدروجين $r_1 \\approx 0.53\\text{ \\AA} = 5.3 \\times 10^{-11}\\text{ m}$. بمعلومية كمية الحركة الزاوية $m_e v r = \\frac{h}{2\\pi}$، فإن سرعة الإلكترون المدارية $v_1$ تساوي تقريباً:",
    "optionsEn": [
      "$v_1 \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v_1 \\approx 5.93 \\times 10^5\\text{ m/s}$",
      "$v_1 \\approx 1.0 \\times 10^4\\text{ m/s}$",
      "$v_1 \\approx 2.18 \\times 10^6\\text{ m/s}$ (about $0.7\\%$ of the speed of light)"
    ],
    "optionsAr": [
      "$v_1 \\approx 3.0 \\times 10^8\\text{ m/s}$",
      "$v_1 \\approx 5.93 \\times 10^5\\text{ m/s}$",
      "$v_1 \\approx 1.0 \\times 10^4\\text{ m/s}$",
      "$v_1 \\approx 2.18 \\times 10^6\\text{ m/s}$ (حوالي 0.7% من سرعة الضوء)"
    ],
    "correctAnswer": "$v_1 \\approx 2.18 \\times 10^6\\text{ m/s}$ (about $0.7\\%$ of the speed of light)",
    "correctIndex": 3,
    "hintEn": "$v = \\frac{h}{2\\pi m_e r}$. Substitute constants.",
    "hintAr": "$v = \\frac{h}{2\\pi m_e r}$.",
    "stepByStepSolutionEn": [
      "$v_1 = \\frac{6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{2\\pi \\times (9.1 \\times 10^{-31}\\text{ kg}) \\times (5.3 \\times 10^{-11}\\text{ m})} = \\frac{6.625 \\times 10^{-34}}{3.03 \\times 10^{-40}} \\approx 2.18 \\times 10^6\\text{ m/s}$."
    ],
    "stepByStepSolutionAr": [
      "$v = \\frac{h}{2\\pi m_e r} \\approx 2.18 \\times 10^6\\text{ م/ث}$."
    ],
    "teacherTipEn": "The ratio $v_1 / c = \\frac{1}{137}$ is the famous fine-structure constant ($\\alpha$) of physics.",
    "teacherTipAr": "نسبة سرعة إلكترون الهيدروجين إلى سرعة الضوء هي ثابت التركيب الدقيق الشهير $1/137$."
  },
  {
    "id": "phys_ch6_db_med_41",
    "titleEn": "Radius of Third Bohr Orbit Calculation",
    "titleAr": "حساب نصف قطر مدار بور الثالث لذرة الهيدروجين",
    "difficulty": "medium",
    "questionEn": "In the Bohr model of hydrogen, orbital radius scales with the square of the principal quantum number: $r_n = n^2 r_1$. If $r_1 = 0.53\\text{ \\AA}$, what is the radius of the third orbit ($n = 3$)?",
    "questionAr": "في نموذج بور، يتناسب نصف قطر المدار مع مربع رقم المستوى: $r_n = n^2 r_1$. إذا كان $r_1 = 0.53\\text{ \\AA}$، فما نصف قطر المدار الثالث ($n = 3$)؟",
    "optionsEn": [
      "$r_3 = 4.77\\text{ \\AA} = 0.477\\text{ nm}$",
      "$r_3 = 1.59\\text{ \\AA}$",
      "$r_3 = 0.53\\text{ \\AA}$",
      "$r_3 = 8.48\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$r_3 = 4.77\\text{ \\AA} = 0.477\\text{ nm}$",
      "$r_3 = 1.59\\text{ \\AA}$",
      "$r_3 = 0.53\\text{ \\AA}$",
      "$r_3 = 8.48\\text{ \\AA}$"
    ],
    "correctAnswer": "$r_3 = 4.77\\text{ \\AA} = 0.477\\text{ nm}$",
    "correctIndex": 0,
    "hintEn": "$r_3 = 3^2 \\times r_1 = 9 \\times 0.53\\text{ \\AA}$.",
    "hintAr": "$r_3 = 9 \\times 0.53\\text{ \\AA}$.",
    "stepByStepSolutionEn": [
      "$r_3 = n^2 r_1 = 3^2 \\times 0.53\\text{ \\AA} = 9 \\times 0.53\\text{ \\AA} = 4.77\\text{ \\AA} = 0.477\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$r_3 = 9 \\times 0.53 = 4.77\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "Remember: orbital radius scales as $n^2$ ($r_n \\propto n^2$), while level energy scales as $-1/n^2$.",
    "teacherTipAr": "تذكر: نصف القطر يتناسب طردياً مع مربع رقم المدار $n^2$، بينما الطاقة تتناسب عكسياً مع $n^2$."
  },
  {
    "id": "phys_ch6_db_med_42",
    "titleEn": "Ionization Energy of Hydrogen from Second Energy Level",
    "titleAr": "طاقة تأين ذرة الهيدروجين من المستوى الثاني المثار",
    "difficulty": "medium",
    "questionEn": "What is the minimum energy required to ionize a hydrogen atom when its electron is already in the first excited state ($n = 2$)?",
    "questionAr": "ما هي أقل طاقة تلزم لتأين ذرة هيدروجين عندما يكون إلكترونها في حالة الإثارة الأولى بالمستوى الثاني ($n = 2$)؟",
    "optionsEn": [
      "$E_{\\text{ion}} = +13.6\\text{ eV}$",
      "$E_{\\text{ion}} = +3.4\\text{ eV}$",
      "$E_{\\text{ion}} = +1.51\\text{ eV}$",
      "$E_{\\text{ion}} = +10.2\\text{ eV}$"
    ],
    "optionsAr": [
      "$E_{\\text{ion}} = +13.6\\text{ eV}$",
      "$E_{\\text{ion}} = +3.4\\text{ eV}$",
      "$E_{\\text{ion}} = +1.51\\text{ eV}$",
      "$E_{\\text{ion}} = +10.2\\text{ eV}$"
    ],
    "correctAnswer": "$E_{\\text{ion}} = +3.4\\text{ eV}$",
    "correctIndex": 1,
    "hintEn": "$E_{\\text{ion}} = E_\\infty - E_2 = 0 - (-3.4) = +3.4\\text{ eV}$.",
    "hintAr": "$E_{\\text{ion}} = 0 - E_2 = +3.4\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "Ionization requires taking the electron from its current energy state to infinity ($E_\\infty = 0$). From $n = 2$: $E_{\\text{ion}} = E_\\infty - E_2 = 0 - (-3.4\\text{ eV}) = +3.4\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "طاقة التأين هي الطاقة اللازمة لتحرير الإلكترون نهائياً من مستواه إلى ما لا نهاية: $E_{\\text{ion}} = 0 - (-3.4) = +3.4\\text{ إلكترون فولت}$."
    ],
    "teacherTipEn": "Ionization from ground state ($n=1$) requires $13.6\\text{ eV}$, but from $n=2$ it requires only $3.4\\text{ eV}$.",
    "teacherTipAr": "التأين من المستوى الأول يحتاج 13.6 إلكترون فولت، بينما التأين من المستوى الثاني يحتاج 3.4 إلكترون فولت فقط."
  },
  {
    "id": "phys_ch6_db_med_43",
    "titleEn": "Standing Wave Mode Condition in Laser Cavity",
    "titleAr": "شرط تكوين الأمواج الموقوفة في التجويف الرنيني لليزر",
    "difficulty": "medium",
    "questionEn": "In a laser resonant optical cavity of mirror separation $L$, constructive interference and standing wave formation requires the cavity length to satisfy:",
    "questionAr": "في التجويف الرنيني لليزر حيث المسافة بين المرآتين $L$، يشترط لحدوث التداخل البناء وتكون موجات موقوفة مكبرة أن تحقق المسافة $L$ العلاقة:",
    "optionsEn": [
      "$L = m \\lambda$",
      "$L = \\frac{\\lambda}{2m}$",
      "$L = m \\frac{\\lambda}{2}$ (where $m$ is an integer mode number)",
      "$L = (2m + 1)\\lambda$"
    ],
    "optionsAr": [
      "$L = m \\lambda$",
      "$L = \\frac{\\lambda}{2m}$",
      "$L = m \\frac{\\lambda}{2}$ (حيث $m$ عدد صحيح يمثل رتبة النمط الرنيني)",
      "$L = (2m + 1)\\lambda$"
    ],
    "correctAnswer": "$L = m \\frac{\\lambda}{2}$ (where $m$ is an integer mode number)",
    "correctIndex": 2,
    "hintEn": "Nodes must form at both mirrors $\\implies$ integral number of half-wavelengths.",
    "hintAr": "يجب أن تتكون عقدتان عند المرآتين فيكون طول التجويف عدداً صحيحاً من أنصاف الأطوال الموجية.",
    "stepByStepSolutionEn": [
      "Both cavity mirrors impose fixed boundary conditions (nodes). A resonant standing wave fits an integer number of half-wavelengths between the mirrors: $L = m \\left(\\frac{\\lambda}{2}\\right)$, so the round-trip distance $2L = m\\lambda$ is an exact integer multiple of wavelengths."
    ],
    "stepByStepSolutionAr": [
      "تكون المرآتان عقدتين للموجة الكهرومغناطيسية الموقوفة داخل التجويف، ولذلك يجب أن يحتوي طول التجويف $L$ على عدد صحيح من أنصاف الأطوال الموجية: $L = m \\frac{\\lambda}{2}$ لضمان حدوث تداخل بناء مستمر وتكبير الحزمة."
    ],
    "teacherTipEn": "For a $30\\text{ cm}$ cavity and red light ($632.8\\text{ nm}$), $m \\approx 10^6$ half-wavelengths.",
    "teacherTipAr": "لأنبوبة طولها 30 سم وضوء أحمر، يحتوي التجويف على قرابة مليون نصف طول موجي."
  },
  {
    "id": "phys_ch6_db_med_44",
    "titleEn": "Photodiode Operation Under Reverse Bias",
    "titleAr": "عمل الدايود الضوئي (الفوتودايود) في التوصيل العكسي",
    "difficulty": "medium",
    "questionEn": "A photodiode is operated in REVERSE bias in optical communication detectors because:",
    "questionAr": "يوصل الدايود الضوئي (الفوتودايود) في دوائر كشف الإشارات الضوئية بتوصيل عكسي لأن:",
    "optionsEn": [
      "Forward bias would melt the silicon immediately",
      "Light cannot enter semiconductors in forward bias",
      "Reverse bias doubles the speed of light inside the diode",
      "Dark current is near zero; incident photons break bonds, generating electron-hole pairs that produce a reverse photocurrent proportional to light intensity"
    ],
    "optionsAr": [
      "التوصيل الأمامي يصهر السيليكون فوراً",
      "الضوء لا ينفذ إلى أشباه الموصلات في التوصيل الأمامي",
      "التوصيل العكسي يضاعف سرعة الضوء داخل الدايود",
      "تيار الظلام يكون شبه منعدم؛ وعند سقوط الفوتونات تكسر روابط وتولد أزواج إلكترون-فجوة ينشأ عنها تيار عكسي يتناسب طردياً مع شدة الضوء"
    ],
    "correctAnswer": "Dark current is near zero; incident photons break bonds, generating electron-hole pairs that produce a reverse photocurrent proportional to light intensity",
    "correctIndex": 3,
    "hintEn": "Reverse bias provides a near-zero baseline, so light-induced carriers are instantly detected.",
    "hintAr": "التوصيل العكسي يعطي تيار خلفية شبه منعدم فيسهل قياس أي زيادة ناتجة عن الضوء.",
    "stepByStepSolutionEn": [
      "In reverse bias, thermal current is tiny (nanoamperes). When light shines on the transparent depletion layer, absorbed photons create electron-hole pairs that are swiftly swept across by the strong internal electric field, creating a reverse photocurrent directly proportional to optical power."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل العكسي يكون التيار شبه معدوم (تيار ظلام ضئيل جداً). وعند سقوط الضوء على منطقة النضوب يحرر أزواجاً من الإلكترونات والفجوات تفصلها القوة الكهربية وينشأ تيار كهروضوئي عكسي يتناسب طردياً مع شدة الضوء الساقط، مما يجعله حساساً جداً ككاشف ضوئي."
    ],
    "teacherTipEn": "Photodiodes act as ultra-fast optical receivers in high-speed fiber internet networks.",
    "teacherTipAr": "تستخدم الدايودات الضوئية ككواشف فائقة السرعة في شبكات الإنترنت الضوئية."
  },
  {
    "id": "phys_ch6_db_med_45",
    "titleEn": "Photovoltaic Energy Conversion in Solar Cells",
    "titleAr": "تحول الطاقة الكهروضوئية في الخلايا الشمسية",
    "difficulty": "medium",
    "questionEn": "A silicon solar cell (photovoltaic cell) is a large-area PN junction that directly converts:",
    "questionAr": "الخلية الشمسية السيليكونية هي وصلة ثنائية ذات مساحة سطح كبيرة تقوم بالتحويل المباشر لـ:",
    "optionsEn": [
      "Solar light radiant energy into electrical direct current (DC) power without external bias",
      "Electrical energy into visible laser light",
      "Sound waves into mechanical vibrations",
      "Chemical energy into nuclear energy"
    ],
    "optionsAr": [
      "طاقة الإشعاع الشمسي الضوئية إلى طاقة كهربية في صورة تيار مستمر دون الحاجة لمصدر جهد خارجي",
      "الطاقة الكهربية إلى ضوء ليزر مرئي",
      "الموجات الصوتية إلى اهتزازات ميكانيكية",
      "الطاقة الكيميائية إلى طاقة نووية"
    ],
    "correctAnswer": "Solar light radiant energy into electrical direct current (DC) power without external bias",
    "correctIndex": 0,
    "hintEn": "Photons create electron-hole pairs; built-in junction field separates them, generating voltage.",
    "hintAr": "الفوتونات تولد شحنات حرة ويفصلها المجال الداخلي فتولد قوة دافعة كهربية مستمرة.",
    "stepByStepSolutionEn": [
      "Photons with $h\\nu \\ge E_g$ ($1.1\\text{ eV}$ in Silicon) generate electron-hole pairs near the PN junction. The internal electric field of the depletion region sweeps electrons to the n-side and holes to the p-side, producing an open-circuit voltage $V_{oc} \\approx 0.6\\text{ V}$ and delivering electric power to an external load."
    ],
    "stepByStepSolutionAr": [
      "عند سقوط فوتونات ضوء الشمس بطاقة تفوق فجوة الطاقة للسيليكون ($1.1\\text{ eV}$)، تتحرر أزواج من الإلكترونات والفجوات، ويقوم المجال الكهربي الداخلي للوصلة بفصلها (الإلكترونات نحو n والفجوات نحو p)، مما يولد فرق جهد وتياراً كهربياً مستمراً في الدائرة الخارجية."
    ],
    "teacherTipEn": "Solar cells operate in the 4th quadrant of the diode $I-V$ characteristic, acting as power generators.",
    "teacherTipAr": "الخلية الشمسية تعمل كمولد قدرة كهربية نظيفة ومستدامة."
  },
  {
    "id": "phys_ch6_db_med_46",
    "titleEn": "Light Emitting Diode (LED) Principle of Operation",
    "titleAr": "الأساس الفيزيائي لعمل الدايود الباعث للضوء (LED)",
    "difficulty": "medium",
    "questionEn": "A Light Emitting Diode (LED) operates in FORWARD bias to emit light by:",
    "questionAr": "يعمل الدايود الباعث للضوء (LED) في وضع التوصيل الأمامي لإطلاق الضوء عن طريق:",
    "optionsEn": [
      "Heating a filament until it melts",
      "Recombination of injected electrons and holes across the junction, releasing the bandgap energy ($E_g$) directly as visible light photons",
      "Nuclear fusion between silicon and phosphorus atoms",
      "Reflecting ambient light from the room ceiling"
    ],
    "optionsAr": [
      "تسخين فتيلة حتى التوهج والانصهار",
      "إعادة التحام الإلكترونات والفجوات عند موضع التلامس، مما يطلق طاقة فجوة النطاق ($E_g$) مباشرة في صورة فوتونات ضوئية",
      "اندماج نووي بين ذرات السيليكون والفوسفور",
      "عكس الضوء المحيط من سقف الغرفة"
    ],
    "correctAnswer": "Recombination of injected electrons and holes across the junction, releasing the bandgap energy ($E_g$) directly as visible light photons",
    "correctIndex": 1,
    "hintEn": "Electron-hole recombination across bandgap releases photon: $h\\nu = E_g$.",
    "hintAr": "التحام الإلكترون بالفجوة يطلق فرق طاقة الفجوة في صورة فوتون ضوئي.",
    "stepByStepSolutionEn": [
      "In forward bias, majority electrons cross into the p-region and holes into the n-region. When an electron recombines with a hole, it drops from the conduction band to the valence band, releasing energy equal to the semiconductor bandgap: $E = h\\nu \\approx E_g$. Wavelength depends on semiconductor composition (GaAs, GaP, GaN)."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل الأمامي تتدفق الإلكترونات والفجوات نحو موضع التلامس. وعند التحام إلكترون بفجوة، يهبط الإلكترون من نطاق التوصيل إلى نطاق التكافؤ ويطلق فرق الطاقة ($E_g$) في صورة فوتون ضوئي ($h\\nu = E_g$). ويحدد نوع مادة شبه الموصل لون الضوء المنبعث."
    ],
    "teacherTipEn": "LEDs are cold solid-state light sources with over $80\\%$ efficiency, outclassing incandescent lamps.",
    "teacherTipAr": "تتميز مصابيح الليد بكفاءتها الضوئية العالية التي تتجاوز 80% لعدم فقد الطاقة في صورة حرارة."
  },
  {
    "id": "phys_ch6_db_med_47",
    "titleEn": "Law of Mass Action Temperature Dependence",
    "titleAr": "تأثير درجة الحرارة على حاصل ضرب تركيزي الإلكترونات والفجوات",
    "difficulty": "medium",
    "questionEn": "If the absolute temperature of a silicon semiconductor is raised such that the intrinsic carrier density doubles ($n_i \\to 2n_i$), the mass action product $n \\cdot p$ will:",
    "questionAr": "إذا ارتفعت درجة حرارة بلورة سيليكون بحيث تضاعف تركيز الحوامل النقية ($n_i \\to 2n_i$)، فإن حاصل ضرب تركيزي الإلكترونات والفجوات ($n \\cdot p$):",
    "optionsEn": [
      "Double to $2n_i^2$",
      "Remain strictly constant",
      "Increase fourfold ($4n_i^2$)",
      "Drop to zero"
    ],
    "optionsAr": [
      "يتضاعف إلى مثليه ($2n_i^2$)",
      "يظل ثابتاً دون أي تغير",
      "يزداد إلى 4 أمثاله ($4n_i^2$)",
      "يهبط إلى الصفر"
    ],
    "correctAnswer": "Increase fourfold ($4n_i^2$)",
    "correctIndex": 2,
    "hintEn": "$n \\cdot p = n_i^2 \\implies (2n_i)^2 = 4n_i^2$.",
    "hintAr": "$n \\cdot p = n_i^2$. مضاعفة $n_i$ تزيد حاصل ضربهما 4 أمثال.",
    "stepByStepSolutionEn": [
      "The Law of Mass Action states that $n \\cdot p = n_i^2$. If temperature increases such that $n_i$ becomes $2n_i$, the new product is $(2n_i)^2 = 4n_i^2$, an increase by a factor of 4."
    ],
    "stepByStepSolutionAr": [
      "ينص قانون فعل الكتلة على أن $n \\cdot p = n_i^2$. وبما أن $n_i$ تضاعفت إلى $2n_i$ بفعل الحرارة، فإن حاصل ضربهما الجديد يصبح $(2n_i)^2 = 4n_i^2$ أي يزداد إلى أربعة أمثاله."
    ],
    "teacherTipEn": "Crucial distinction: at a CONSTANT temperature $n \\cdot p$ is constant, but RAISING temperature increases $n_i$ and the product $n \\cdot p$.",
    "teacherTipAr": "تنبيه هام: عند ثبوت درجة الحرارة يظل حاصل الضرب ثابتاً، ولكن عند رفع درجة الحرارة تزداد قيمة $n_i$ ويزداد حاصل الضرب."
  },
  {
    "id": "phys_ch6_db_med_48",
    "titleEn": "Transistor Cutoff State Output Voltage",
    "titleAr": "جهد الخرج لترانزستور يعمل كمفتاح في حالة القطع (OFF)",
    "difficulty": "medium",
    "questionEn": "In an NPN transistor used as an electronic inverter with collector resistor $R_C$ connected to $V_{CC} = 5.0\\text{ V}$, when base input voltage is zero ($V_{\\text{in}} = 0\\text{ V}$), the output voltage $V_{CE}$ is:",
    "questionAr": "في ترانزستور NPN يعمل كعاكس ومفتاح مع مقاومة مجمع متصلة ببطارية $V_{CC} = 5.0\\text{ V}$، عندما يكون جهد الدخل عند القاعدة صفراً ($V_{\\text{in}} = 0\\text{ V}$)، فإن جهد الخرج $V_{CE}$ يساوي:",
    "optionsEn": [
      "$V_{CE} \\approx 0\\text{ V}$ (Logic Low 0)",
      "$V_{CE} = 2.5\\text{ V}$",
      "$V_{CE} = -5.0\\text{ V}$",
      "$V_{CE} \\approx 5.0\\text{ V}$ (Logic High 1, switch open OFF)"
    ],
    "optionsAr": [
      "$V_{CE} \\approx 0\\text{ V}$ (مستوى منخفض 0)",
      "$V_{CE} = 2.5\\text{ V}$",
      "$V_{CE} = -5.0\\text{ V}$",
      "$V_{CE} \\approx 5.0\\text{ V}$ (مستوى مرتفع 1، مفتاح مفتوح OFF)"
    ],
    "correctAnswer": "$V_{CE} \\approx 5.0\\text{ V}$ (Logic High 1, switch open OFF)",
    "correctIndex": 3,
    "hintEn": "$I_B = 0 \\implies I_C = 0 \\implies V_{CE} = V_{CC} - I_C R_C = V_{CC} - 0 = V_{CC}$.",
    "hintAr": "$I_C = 0 \\implies V_{CE} = V_{CC} = 5\\text{ V}$.",
    "stepByStepSolutionEn": [
      "When $V_{\\text{in}} = 0$, base current is zero ($I_B = 0$). Consequently, collector current is cut off ($I_C = 0$). From the load line equation: $V_{CE} = V_{CC} - I_C R_C = 5.0\\text{ V} - (0 \\times R_C) = 5.0\\text{ V}$. The output is at logic High (1)."
    ],
    "stepByStepSolutionAr": [
      "عندما يكون جهد الدخل صفراً، ينعدم تيار القاعدة ($I_B = 0$) وينقطع تيار المجمع تماماً ($I_C = 0$). من معادلة الخرج: $V_{CE} = V_{CC} - I_C R_C = 5.0 - 0 = 5.0\\text{ V}$. وبذلك يكون الخرج في المستوى المنطقي المرتفع (1)."
    ],
    "teacherTipEn": "Input 0 produces Output 1: this is the exact proof of the transistor inverter action.",
    "teacherTipAr": "الدخل 0 يعطي خرجاً 1: هذا هو الإثبات العملي لعمل الترانزستور كبوابة عاكس NOT."
  },
  {
    "id": "phys_ch6_db_med_49",
    "titleEn": "Transistor Saturation State Output Voltage",
    "titleAr": "جهد الخرج لترانزستور يعمل كمفتاح في حالة التشبع (ON)",
    "difficulty": "medium",
    "questionEn": "In the same inverter circuit ($V_{CC} = 5.0\\text{ V}$), when a large base input voltage ($V_{\\text{in}} = 5.0\\text{ V}$, Logic 1) is applied, the output voltage $V_{CE}$ drops to approximately:",
    "questionAr": "في نفس دائرة العاكس ($V_{CC} = 5.0\\text{ V}$)، عند تطبيق جهد دخل مرتفع على القاعدة ($V_{\\text{in}} = 5.0\\text{ V}$، حالة 1)، فإن جهد الخرج $V_{CE}$ يهبط تقريباً إلى:",
    "optionsEn": [
      "$V_{CE} \\approx 0\\text{ V} \\sim 0.2\\text{ V}$ (Logic Low 0, switch closed ON)",
      "$V_{CE} = 5.0\\text{ V}$ (Logic 1)",
      "$V_{CE} = 10.0\\text{ V}$",
      "$V_{CE} = -5.0\\text{ V}$"
    ],
    "optionsAr": [
      "$V_{CE} \\approx 0\\text{ V} \\sim 0.2\\text{ V}$ (مستوى منخفض 0، مفتاح مغلق ON)",
      "$V_{CE} = 5.0\\text{ V}$ (حالة 1)",
      "$V_{CE} = 10.0\\text{ V}$",
      "$V_{CE} = -5.0\\text{ V}$"
    ],
    "correctAnswer": "$V_{CE} \\approx 0\\text{ V} \\sim 0.2\\text{ V}$ (Logic Low 0, switch closed ON)",
    "correctIndex": 0,
    "hintEn": "Heavy base current drives saturation $\\implies I_C R_C \\approx V_{CC} \\implies V_{CE} \\approx 0$.",
    "hintAr": "في حالة التشبع: هبوط الجهد عبر المقاومة يستهلك جهد البطارية فيهبط $V_{CE}$ للصفر تقريباً.",
    "stepByStepSolutionEn": [
      "A high input voltage drives a strong base current, sending the transistor into saturation. Collector current reaches its maximum value $I_C \\approx V_{CC}/R_C$, so the voltage drop across the load resistor is $I_C R_C \\approx V_{CC} = 5.0\\text{ V}$. The output voltage is $V_{CE} = V_{CC} - I_C R_C \\approx 0\\text{ V}$ (Logic 0)."
    ],
    "stepByStepSolutionAr": [
      "الجهد المرتفع للدخل يدفع تيار قاعدة كبير يوصل الترانزستور لحالة التشبع. فيمر أقصى تيار مجمع ويستهلك كل جهد البطارية تقريباً عبر المقاومة ($I_C R_C \\approx V_{CC}$)، ويهبط جهد الخرج $V_{CE} = V_{CC} - I_C R_C \\approx 0\\text{ V}$ (المستوى المنطقي 0)."
    ],
    "teacherTipEn": "Input 1 produces Output 0: confirming the NOT truth table $(1 \\to 0)$.",
    "teacherTipAr": "الدخل 1 يقابله خرج 0: مؤكداً جدول تحقيق بوابة العاكس NOT."
  },
  {
    "id": "phys_ch6_db_med_50",
    "titleEn": "Number of Rows in Truth Table for N Inputs",
    "titleAr": "عدد احتمالات جدول التحقيق لدائرة ذات n مدخلات",
    "difficulty": "medium",
    "questionEn": "In digital logic design, a logic gate or circuit with $N$ independent binary inputs has a truth table containing a total of:",
    "questionAr": "في تصميم الدوائر المنطقية الرقمية، بوابة أو دائرة منطقية لها $N$ من المدخلات الثنائية المستقلة، يحتوي جدول تحقيقها على إجمالي عدد احتمالات يساوي:",
    "optionsEn": [
      "$2N\\text{ combinations}$",
      "$2^N\\text{ input combinations}$",
      "$N^2\\text{ combinations}$",
      "$N!\\text{ combinations}$"
    ],
    "optionsAr": [
      "$2N\\text{ احتمالاً}$",
      "$2^N\\text{ احتمالاً للمدخلات}$",
      "$N^2\\text{ احتمالاً}$",
      "$N!\\text{ احتمالاً}$"
    ],
    "correctAnswer": "$2^N\\text{ input combinations}$",
    "correctIndex": 1,
    "hintEn": "Each binary input has 2 states (0 or 1). For $N$ inputs: $2 \\times 2 \\times \\dots = 2^N$.",
    "hintAr": "لكل مدخل حالتان (0 أو 1)، إذن لـ $N$ من المدخلات يكون الإجمالي $2^N$.",
    "stepByStepSolutionEn": [
      "Because each binary input can independently take one of 2 distinct values ($0$ or $1$), the fundamental counting principle dictates that $N$ binary variables yield $2 \\times 2 \\times \\dots = 2^N$ unique combinations. For 2 inputs: $2^2 = 4$; for 3 inputs: $2^3 = 8$; for 4 inputs: $2^4 = 16$."
    ],
    "stepByStepSolutionAr": [
      "بما أن كل متغير ثنائي يمتلك حالتين محتملتين (0 أو 1)، فإن عدد الاحتمالات الكلية لـ $N$ من المدخلات يحسب من مبدأ العد: $2^N$. لمدخلين: $2^2 = 4$ احتمالات، ولثلاثة مدخلات: $2^3 = 8$ احتمالات."
    ],
    "teacherTipEn": "A classic foundational question in the modern digital electronics curriculum.",
    "teacherTipAr": "قاعدة إحصائية أساسية في منهج الإلكترونيات الحديثة."
  },
  {
    "id": "phys_ch6_db_med_51",
    "titleEn": "de Broglie Wavelength in Second Bohr Orbit",
    "titleAr": "حساب طول موجة دي برولي لإلكترون المدار الثاني",
    "difficulty": "medium",
    "questionEn": "In a hydrogen atom, the second Bohr orbit has radius $r_2 = 4r_1 \\approx 2.12\\text{ \\AA} = 2.12 \\times 10^{-10}\\text{ m}$. What is the de Broglie wavelength $\\lambda$ of the electron?",
    "questionAr": "في ذرة الهيدروجين، نصف قطر مدار بور الثاني $r_2 \\approx 2.12\\text{ \\AA}$. ما هو طول موجة دي برولي $\\lambda$ المصاحبة لحركة الإلكترون في هذا المدار؟",
    "optionsEn": [
      "$\\lambda = 2.12\\text{ \\AA}$",
      "$\\lambda = 13.32\\text{ \\AA}$",
      "$\\lambda = \\pi r_2 \\approx 6.66\\text{ \\AA} = 0.666\\text{ nm}$",
      "$\\lambda = 0.53\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$\\lambda = 2.12\\text{ \\AA}$",
      "$\\lambda = 13.32\\text{ \\AA}$",
      "$\\lambda = \\pi r_2 \\approx 6.66\\text{ \\AA} = 0.666\\text{ nm}$",
      "$\\lambda = 0.53\\text{ \\AA}$"
    ],
    "correctAnswer": "$\\lambda = \\pi r_2 \\approx 6.66\\text{ \\AA} = 0.666\\text{ nm}$",
    "correctIndex": 2,
    "hintEn": "$2\\pi r_n = n\\lambda$. For $n = 2$: $2\\pi r_2 = 2\\lambda \\implies \\lambda = \\pi r_2$.",
    "hintAr": "محيط المدار $2\\pi r_2 = 2\\lambda \\implies \\lambda = \\pi r_2$.",
    "stepByStepSolutionEn": [
      "From de Broglie's standing wave condition: $2\\pi r_n = n\\lambda$. For $n = 2$: $2\\pi r_2 = 2\\lambda \\implies \\lambda = \\pi r_2 = \\pi \\times 2.12\\text{ \\AA} \\approx 6.66\\text{ \\AA} = 0.666\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "طبقاً لمعادلة دي برولي لمحيط المدار: $2\\pi r = n\\lambda$. في المدار الثاني: $2\\pi r_2 = 2\\lambda \\implies \\lambda = \\pi r_2 = \\pi \\times 2.12 \\approx 6.66\\text{ أنجستروم}$."
    ],
    "teacherTipEn": "Notice: in the second orbit, the wavelength is simply $\\pi$ times the radius.",
    "teacherTipAr": "لاحظ: في المدار الثاني يكون الطول الموجي مساوياً ببساطة لـ $\\pi$ مضروبة في نصف القطر."
  },
  {
    "id": "phys_ch6_db_med_52",
    "titleEn": "Wavelength Ratio of Continuous X-Rays for Two Operating Voltages",
    "titleAr": "نسبة أقصر طول موجي للأشعة السينية عند تشغيل الأنبوبة بجهدين مختلفين",
    "difficulty": "medium",
    "questionEn": "A Coolidge tube is operated first at $V_1 = 30\\text{ kV}$ and then at $V_2 = 60\\text{ kV}$. The ratio of their minimum continuous wavelengths $\\lambda_{\\min, 1} / \\lambda_{\\min, 2}$ is:",
    "questionAr": "شُغلت أنبوبة كولدج بفرق جهد $V_1 = 30\\text{ kV}$ أولاً ثم بفرق جهد $V_2 = 60\\text{ kV}$. فإن النسبة بين أقصر طولي موجة مستمرة $\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}}$ تساوي:",
    "optionsEn": [
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = \\frac{1}{2}$",
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = 4$",
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = 1$",
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = 2$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = \\frac{1}{2}$",
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = 4$",
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = 1$",
      "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = 2$"
    ],
    "correctAnswer": "$\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = 2$",
    "correctIndex": 3,
    "hintEn": "$\\lambda_{\\min} = \\frac{hc}{eV} \\implies \\lambda_{\\min} \\propto \\frac{1}{V} \\implies \\frac{\\lambda_1}{\\lambda_2} = \\frac{V_2}{V_1}$.",
    "hintAr": "تناسب عكسي بسيط مع فرق الجهد: $\\frac{\\lambda_1}{\\lambda_2} = \\frac{V_2}{V_1}$.",
    "stepByStepSolutionEn": [
      "Because $\\lambda_{\\min} = \\frac{hc}{eV}$, minimum wavelength is strictly inversely proportional to tube voltage: $\\frac{\\lambda_{\\min, 1}}{\\lambda_{\\min, 2}} = \\frac{V_2}{V_1} = \\frac{60\\text{ kV}}{30\\text{ kV}} = 2$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\lambda_{\\min} = \\frac{hc}{eV}$، فإن أقصر طول موجي يتناسب عكسياً مع فرق الجهد: $\\frac{\\lambda_1}{\\lambda_2} = \\frac{V_2}{V_1} = \\frac{60}{30} = 2$."
    ],
    "teacherTipEn": "Doubling tube voltage halves the minimum continuous wavelength, doubling maximum photon energy.",
    "teacherTipAr": "مضاعفة فرق الجهد تقلل أقصر طول موجي للنصف وتضاعف أقصى طاقة للفوتون المنبعث."
  },
  {
    "id": "phys_ch6_db_med_53",
    "titleEn": "Paschen Series Longest Wavelength Calculation",
    "titleAr": "حساب أكبر طول موجي في متسلسلة باشن",
    "difficulty": "medium",
    "questionEn": "In the Paschen series of hydrogen ($n = 3$), the longest wavelength ($\\lambda_{\\max}$) is emitted during transition from $n = 4$ to $n = 3$. Given $E_4 = -0.85\\text{ eV}$ and $E_3 = -1.51\\text{ eV}$, its wavelength is approximately:",
    "questionAr": "في متسلسلة باشن لطيف الهيدروجين ($n = 3$)، ينبعث أكبر طول موجي ($\\lambda_{\\max}$) عند الانتقال من $n = 4$ إلى $n = 3$. علماً بأن $E_4 = -0.85\\text{ eV}$ و $E_3 = -1.51\\text{ eV}$، فإن طولها الموجي يساوي تقريباً:",
    "optionsEn": [
      "$\\lambda_{\\max} \\approx 1878\\text{ nm} = 1.878\\,\\mu\\text{m}$ (infrared)",
      "$\\lambda_{\\max} \\approx 656.3\\text{ nm}$",
      "$\\lambda_{\\max} \\approx 121.6\\text{ nm}$",
      "$\\lambda_{\\max} \\approx 820\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} \\approx 1878\\text{ nm} = 1.878\\,\\mu\\text{m}$ (أشعة تحت حمراء)",
      "$\\lambda_{\\max} \\approx 656.3\\text{ nm}$",
      "$\\lambda_{\\max} \\approx 121.6\\text{ nm}$",
      "$\\lambda_{\\max} \\approx 820\\text{ nm}$"
    ],
    "correctAnswer": "$\\lambda_{\\max} \\approx 1878\\text{ nm} = 1.878\\,\\mu\\text{m}$ (infrared)",
    "correctIndex": 0,
    "hintEn": "$\\Delta E = -0.85 - (-1.51) = 0.66\\text{ eV}$. $\\lambda = \\frac{1240}{0.66}\\text{ nm}$.",
    "hintAr": "$\\Delta E = 1.51 - 0.85 = 0.66\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_4 - E_3 = -0.85\\text{ eV} - (-1.51\\text{ eV}) = 0.66\\text{ eV} = 1.056 \\times 10^{-19}\\text{ J}$. Wavelength: $\\lambda = \\frac{1.9875 \\times 10^{-25}}{1.056 \\times 10^{-19}} \\approx 1.88 \\times 10^{-6}\\text{ m} = 1878\\text{ nm} = 1.878\\,\\mu\\text{m}$."
    ],
    "stepByStepSolutionAr": [
      "فرق الطاقة $\\Delta E = 1.51 - 0.85 = 0.66\\text{ إلكترون فولت}$. الطول الموجي $\\lambda = \\frac{hc}{\\Delta E} \\approx 1878\\text{ نانومتر}$ (أشعة تحت حمراء)."
    ],
    "teacherTipEn": "This infrared line was extensively cataloged by Louis Paschen in 1908.",
    "teacherTipAr": "هذا الخط من الأشعة تحت الحمراء رصده لويس باشن بدقة عام 1908."
  },
  {
    "id": "phys_ch6_db_med_54",
    "titleEn": "Pfund Series Longest Wavelength Calculation",
    "titleAr": "أكبر طول موجي في متسلسلة بفوند",
    "difficulty": "medium",
    "questionEn": "The longest wavelength line of the Pfund series in hydrogen corresponds to electronic transition from $n = 6$ ($E_6 \\approx -0.378\\text{ eV}$) to $n = 5$ ($E_5 \\approx -0.544\\text{ eV}$). Its photon energy is:",
    "questionAr": "ينتج أكبر خط طيفي في متسلسلة بفوند عند هبوط الإلكترون من $n = 6$ ($E_6 \\approx -0.378\\text{ eV}$) إلى $n = 5$ ($E_5 \\approx -0.544\\text{ eV}$). طاقة هذا الفوتون تساوي:",
    "optionsEn": [
      "$\\Delta E \\approx 1.51\\text{ eV}$",
      "$\\Delta E \\approx 0.166\\text{ eV} \\approx 2.66 \\times 10^{-20}\\text{ J}$ ($\\lambda \\approx 7.46\\,\\mu\\text{m}$)",
      "$\\Delta E \\approx 3.40\\text{ eV}$",
      "$\\Delta E \\approx 0.544\\text{ eV}$"
    ],
    "optionsAr": [
      "$\\Delta E \\approx 1.51\\text{ eV}$",
      "$\\Delta E \\approx 0.166\\text{ eV} \\approx 2.66 \\times 10^{-20}\\text{ J}$ ($\\lambda \\approx 7.46\\,\\mu\\text{m}$)",
      "$\\Delta E \\approx 3.40\\text{ eV}$",
      "$\\Delta E \\approx 0.544\\text{ eV}$"
    ],
    "correctAnswer": "$\\Delta E \\approx 0.166\\text{ eV} \\approx 2.66 \\times 10^{-20}\\text{ J}$ ($\\lambda \\approx 7.46\\,\\mu\\text{m}$)",
    "correctIndex": 1,
    "hintEn": "$\\Delta E = E_6 - E_5 = -0.378 - (-0.544) = 0.166\\text{ eV}$.",
    "hintAr": "$\\Delta E = 0.544 - 0.378 = 0.166\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_6 - E_5 = -0.378\\text{ eV} - (-0.544\\text{ eV}) = 0.166\\text{ eV}$. In Joules: $0.166 \\times 1.6 \\times 10^{-19} = 2.656 \\times 10^{-20}\\text{ J}$. Wavelength $\\lambda = \\frac{1.9875 \\times 10^{-25}}{2.656 \\times 10^{-20}} \\approx 7.48 \\times 10^{-6}\\text{ m} = 7.48\\,\\mu\\text{m}$ (far infrared)."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E = 0.544 - 0.378 = 0.166\\text{ إلكترون فولت}$. وطوله الموجي يقارب $7.48\\text{ ميكرومتر}$ في الأشعة تحت الحمراء البعيدة."
    ],
    "teacherTipEn": "Pfund lines have the smallest quantum energy differences in the standard hydrogen spectrum.",
    "teacherTipAr": "خطوط بفوند تمتلك أصغر كمات طاقة في طيف الهيدروجين."
  },
  {
    "id": "phys_ch6_db_med_55",
    "titleEn": "Fraunhofer Absorption Mechanism",
    "titleAr": "آلية امتصاص خطوط فرانهوفر في الغلاف الشمسي",
    "difficulty": "medium",
    "questionEn": "When white light from an electric arc passes through sodium vapor in a laboratory, the transmitted spectrum displays two sharp dark lines in the yellow region ($589.0\\text{ nm}$ and $589.6\\text{ nm}$). This directly demonstrates:",
    "questionAr": "عند إمرار ضوء أبيض من قوس كهربي عبر بخار الصوديوم في المعمل، يظهر في الطيف النافذ خطان معتمان في النطاق الأصفر ($589.0\\text{ nm}$ و $589.6\\text{ nm}$). هذا يوضح مباشرة وبشكل عملي:",
    "optionsEn": [
      "Continuous emission spectrum from incandescent gases",
      "Total internal reflection of yellow light",
      "Line absorption spectrum, proving that unexcited vapor absorbs the exact wavelengths it would emit when excited (the exact mechanism of Fraunhofer lines)",
      "Photoelectric emission from glass lenses"
    ],
    "optionsAr": [
      "طيف انبعاث مستمر من غازات متوهجة",
      "انعكاس كلي للضوء الأصفر",
      "طيف الامتصاص الخطي، ويثبت أن بخار العنصر غير المثار يمتص الأطوال الموجية الخاصة به التي يشعها عند إثارته (نفس آلية خطوط فرانهوفر)",
      "انبعاث كهروضوئي من العدسات الزجاجية"
    ],
    "correctAnswer": "Line absorption spectrum, proving that unexcited vapor absorbs the exact wavelengths it would emit when excited (the exact mechanism of Fraunhofer lines)",
    "correctIndex": 2,
    "hintEn": "A cool vapor absorbs its own characteristic emission lines from a continuous source.",
    "hintAr": "الغاز يمتص الخطوط المميزة لانبعاثه عند مرور طيف مستمر خلاله.",
    "stepByStepSolutionEn": [
      "Atoms in the unexcited sodium vapor absorb precisely those photon energies that match transitions from their ground state to excited states ($3s \\to 3p$). Removing these photons from the continuous white beam leaves dark absorption lines at the identical yellow positions of sodium's emission doublet."
    ],
    "stepByStepSolutionAr": [
      "ذرات بخار الصوديوم غير المثارة تمتص فوتونات الضوء الأبيض التي تتوافق طاقاتها تماماً مع فروق الطاقة بين مستوياتها، فتقتنص الفوتونات الصفراء وتظهر مكانها خطوط سوداء معتمة في الطيف النافذ، وهي مطابقة تماماً لخطوط الانبعاث الصفراء للصوديوم."
    ],
    "teacherTipEn": "This laboratory experiment proves Kirchhoff's law of spectroscopy and explains solar Fraunhofer lines.",
    "teacherTipAr": "هذه التجربة المعملية تثبت قانون كيرشوف للتحليل الطيفي وتفسر علمياً خطوط فرانهوفر الشمسية."
  },
  {
    "id": "phys_ch6_db_med_56",
    "titleEn": "Collector Current from Alpha and Emitter Current",
    "titleAr": "حساب تيار المجمع من نسبة التوزيع وتيار الباعث",
    "difficulty": "medium",
    "questionEn": "A transistor has a current transfer ratio of $\\alpha_e = 0.99$. If the emitter current is measured as $I_E = 10.0\\text{ mA}$, what are the collector current $I_C$ and base current $I_B$?",
    "questionAr": "ترانزستور نسبة التوزيع له $\\alpha_e = 0.99$. فإذا قيس تيار الباعث وكان $I_E = 10.0\\text{ mA}$، فما هما قيمة تيار المجمع $I_C$ وتيار القاعدة $I_B$؟",
    "optionsEn": [
      "$I_C = 10.0\\text{ mA}$ and $I_B = 1.0\\text{ mA}$",
      "$I_C = 9.0\\text{ mA}$ and $I_B = 1.0\\text{ mA}$",
      "$I_C = 0.99\\text{ mA}$ and $I_B = 9.01\\text{ mA}$",
      "$I_C = 9.9\\text{ mA}$ and $I_B = 0.1\\text{ mA} = 100\\,\\mu\\text{A}$"
    ],
    "optionsAr": [
      "$I_C = 10.0\\text{ mA}$ و $I_B = 1.0\\text{ mA}$",
      "$I_C = 9.0\\text{ mA}$ و $I_B = 1.0\\text{ mA}$",
      "$I_C = 0.99\\text{ mA}$ و $I_B = 9.01\\text{ mA}$",
      "$I_C = 9.9\\text{ mA}$ و $I_B = 0.1\\text{ mA} = 100\\,\\mu\\text{A}$"
    ],
    "correctAnswer": "$I_C = 9.9\\text{ mA}$ and $I_B = 0.1\\text{ mA} = 100\\,\\mu\\text{A}$",
    "correctIndex": 3,
    "hintEn": "$I_C = \\alpha_e I_E$, then $I_B = I_E - I_C$.",
    "hintAr": "$I_C = \\alpha_e I_E$ ثم $I_B = I_E - I_C$.",
    "stepByStepSolutionEn": [
      "$I_C = \\alpha_e I_E = 0.99 \\times 10.0\\text{ mA} = 9.9\\text{ mA}$. Then from $I_E = I_B + I_C$: $I_B = I_E - I_C = 10.0\\text{ mA} - 9.9\\text{ mA} = 0.1\\text{ mA} = 100\\,\\mu\\text{A}$."
    ],
    "stepByStepSolutionAr": [
      "$I_C = \\alpha_e I_E = 0.99 \\times 10 = 9.9\\text{ mA}$. وتيار القاعدة $I_B = I_E - I_C = 10 - 9.9 = 0.1\\text{ mA} = 100\\,\\mu\\text{A}$."
    ],
    "teacherTipEn": "Always verify that $I_E = I_B + I_C$: $0.1 + 9.9 = 10.0\\text{ mA}$.",
    "teacherTipAr": "تأكد دائماً من صحة قانون كيرشوف: $0.1 + 9.9 = 10\\text{ mA}$."
  },
  {
    "id": "phys_ch6_db_med_57",
    "titleEn": "Dynamic AC Current Gain from Delta Values",
    "titleAr": "حساب معامل التكبير الديناميكي للتيار المتردد",
    "difficulty": "medium",
    "questionEn": "In a common-emitter amplifier, changing the base current by $\\Delta I_B = 25\\,\\mu\\text{A}$ causes a collector current change of $\\Delta I_C = 2.0\\text{ mA}$. The dynamic current amplification factor $\\beta$ is:",
    "questionAr": "في مكبر باعث مشترك، أدى تغير تيار القاعدة بمقدار $\\Delta I_B = 25\\,\\mu\\text{A}$ إلى تغير تيار المجمع بمقدار $\\Delta I_C = 2.0\\text{ mA}$. فإن معامل تكبير التيار الديناميكي $\\beta$ يساوي:",
    "optionsEn": [
      "$\\beta = 80$",
      "$\\beta = 50$",
      "$\\beta = 12.5$",
      "$\\beta = 100$"
    ],
    "optionsAr": [
      "$\\beta = 80$",
      "$\\beta = 50$",
      "$\\beta = 12.5$",
      "$\\beta = 100$"
    ],
    "correctAnswer": "$\\beta = 80$",
    "correctIndex": 0,
    "hintEn": "$\\beta = \\frac{\\Delta I_C}{\\Delta I_B}$. Convert to same units.",
    "hintAr": "$\\beta = \\frac{\\Delta I_C}{\\Delta I_B}$.",
    "stepByStepSolutionEn": [
      "$\\Delta I_C = 2.0\\text{ mA} = 2000\\,\\mu\\text{A}$. Dynamic current gain is $\\beta = \\frac{\\Delta I_C}{\\Delta I_B} = \\frac{2000\\,\\mu\\text{A}}{25\\,\\mu\\text{A}} = 80$."
    ],
    "stepByStepSolutionAr": [
      "$\\beta = \\frac{\\Delta I_C}{\\Delta I_B} = \\frac{2 \\times 10^{-3}}{25 \\times 10^{-6}} = 80$."
    ],
    "teacherTipEn": "Dynamic current gain measures the slope of the transistor transfer characteristics curve ($\\Delta I_C / \\Delta I_B$).",
    "teacherTipAr": "معامل التكبير الديناميكي يمثل ميل منحنى الخواص للترانزستور."
  },
  {
    "id": "phys_ch6_db_med_58",
    "titleEn": "Boolean Functions for Two Inputs",
    "titleAr": "عدد الدوال المنطقية الثنائية الممكنة لمدخلين",
    "difficulty": "medium",
    "questionEn": "For two binary inputs $A$ and $B$, each of which can be 0 or 1, there are 4 rows in the truth table. How many distinct Boolean logic functions (like AND, OR, NAND, NOR, XOR...) can theoretically be formed?",
    "questionAr": "لمدخلين ثنائيين $A$ و $B$، توجد 4 صفوف في جدول التحقيق. كم دالة منطقية بوليانية مختلفة (مثل AND, OR, NAND, NOR...) يمكن تكوينها نظرياً؟",
    "optionsEn": [
      "$4\\text{ functions}$",
      "$2^4 = 16\\text{ distinct logic functions}$",
      "$8\\text{ functions}$",
      "$64\\text{ functions}$"
    ],
    "optionsAr": [
      "$4\\text{ دوال}$",
      "$2^4 = 16\\text{ دالة منطقية مختلفة}$",
      "$8\\text{ دوال}$",
      "$64\\text{ دالة}$"
    ],
    "correctAnswer": "$2^4 = 16\\text{ distinct logic functions}$",
    "correctIndex": 1,
    "hintEn": "A truth table with 4 rows can produce $2^4 = 16$ unique binary output columns.",
    "hintAr": "الجدول المكون من 4 صفوف يمكن ملء عمود خرجه بـ $2^4 = 16$ طريقة مختلفة.",
    "stepByStepSolutionEn": [
      "Because there are $2^2 = 4$ input states, the output column has 4 binary entries. Each entry can be either 0 or 1, yielding $2^4 = 16$ possible truth table output configurations."
    ],
    "stepByStepSolutionAr": [
      "لأن هناك 4 صفوف للمدخلات، فإن عمود الخرج يحتوي على 4 خانات ثنائية، وكل خانة يمكن أن تأخذ القيمة 0 أو 1. ويكون عدد التشكيلات الممكنة للخرج هو $2^4 = 16$ دالة منطقية مختلفة."
    ],
    "teacherTipEn": "NAND and NOR gates are 'universal gates' because any of the other 15 functions can be constructed using only NAND or only NOR gates.",
    "teacherTipAr": "بوابتا NAND و NOR تسميان بالبوابات الشاملة (Universal Gates) لإمكانية بناء أي من الدوال الـ 16 الأخرى باستخدامهما فقط."
  },
  {
    "id": "phys_ch6_db_med_59",
    "titleEn": "Open-Circuit Voltage and Power of Silicon Solar Cell",
    "titleAr": "جهد الدائرة المفتوحة وقدرة الخلية الشمسية السيليكونية",
    "difficulty": "medium",
    "questionEn": "A single standard silicon solar cell in full sunlight produces an open-circuit voltage of $V_{oc} \\approx 0.6\\text{ V}$ and delivers a short-circuit current of $I_{sc} = 3.0\\text{ A}$. What total open-circuit voltage is produced by connecting 60 such cells in series in a solar panel?",
    "questionAr": "خلية شمسية سيليكونية واحدة تنتج في ضوء الشمس التام جهد دائرة مفتوحة $V_{oc} \\approx 0.6\\text{ V}$ وتيار قصر $I_{sc} = 3.0\\text{ A}$. ما هو جهد الدائرة المفتوحة الكلي الناتج عن توصيل 60 خلية من هذا النوع على التوالي في لوح شمسي؟",
    "optionsEn": [
      "$V_{\\text{total}} = 0.6\\text{ V}$",
      "$V_{\\text{total}} = 60\\text{ V}$",
      "$V_{\\text{total}} = 60 \\times 0.6\\text{ V} = 36\\text{ V}$",
      "$V_{\\text{total}} = 180\\text{ V}$"
    ],
    "optionsAr": [
      "$V_{\\text{total}} = 0.6\\text{ V}$",
      "$V_{\\text{total}} = 60\\text{ V}$",
      "$V_{\\text{total}} = 60 \\times 0.6\\text{ V} = 36\\text{ V}$",
      "$V_{\\text{total}} = 180\\text{ V}$"
    ],
    "correctAnswer": "$V_{\\text{total}} = 60 \\times 0.6\\text{ V} = 36\\text{ V}$",
    "correctIndex": 2,
    "hintEn": "In series connection, voltages add: $V_{\\text{total}} = N \\times V_1$.",
    "hintAr": "في التوصيل على التوالي تجمع فروق الجهد: $V_{\\text{total}} = N \\times V_1$.",
    "stepByStepSolutionEn": [
      "When cells are connected in series, their voltages add up while the current remains equal to a single cell: $V_{\\text{total}} = N \\times V_{oc} = 60 \\times 0.6\\text{ V} = 36\\text{ V}$. Current remains $3.0\\text{ A}$, yielding a peak power of $P \\approx 36 \\times 3 = 108\\text{ W}$."
    ],
    "stepByStepSolutionAr": [
      "عند توصيل الخلايا الشمسية على التوالي، تجمع فروق الجهد بينما تظل شدة التيار ثابتة: $V_{\\text{total}} = 60 \\times 0.6 = 36\\text{ فولت}$، مما يتيح شحن بطاريات 24 أو 36 فولت بكفاءة."
    ],
    "teacherTipEn": "Connecting cells in parallel increases total current while voltage remains $0.6\\text{ V}$.",
    "teacherTipAr": "التوصيل على التوازي يضاعف شدة التيار مع ثبوت فرق الجهد عند 0.6 فولت."
  }
],
  hots: [
  {
    "id": "phys_ch6_db_hots_01",
    "titleEn": "Lyman Series Wavelength Ratio Calculation",
    "titleAr": "حساب النسبة بين أطول وأقصر طول موجي في متسلسلة ليمان",
    "difficulty": "hots",
    "questionEn": "In the hydrogen spectrum, what is the ratio of the longest wavelength ($\\lambda_{\\max}$) to the shortest wavelength ($\\lambda_{\\min}$) in the Lyman series?",
    "questionAr": "في طيف ذرة الهيدروجين، ما هي النسبة بين أطول طول موجي ($\\lambda_{\\max}$) إلى أقصر طول موجي ($\\lambda_{\\min}$) في متسلسلة ليمان؟",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{9}{5}$",
      "$\\frac{16}{9}$"
    ],
    "optionsAr": [
      "$\\frac{4}{3}$",
      "$\\frac{3}{4}$",
      "$\\frac{9}{5}$",
      "$\\frac{16}{9}$"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "Longest wavelength is transition from $n=2$ to $n=1$; shortest wavelength is from $n=\\infty$ to $n=1$.",
    "hintAr": "أطول طول موجي يقابل أقل طاقة (من المستوى 2 إلى 1)، وأقصر طول موجي يقابل أكبر طاقة (من المالانهاية إلى 1).",
    "stepByStepSolutionEn": [
      "Longest wavelength in Lyman: $\\frac{hc}{\\lambda_{\\max}} = E_2 - E_1 = -3.4 - (-13.6) = 10.2\\text{ eV} = \\frac{3}{4} \\times 13.6\\text{ eV}$. Shortest wavelength (series limit): $\\frac{hc}{\\lambda_{\\min}} = E_\\infty - E_1 = 0 - (-13.6) = 13.6\\text{ eV}$. Therefore, $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{E_\\infty - E_1}{E_2 - E_1} = \\frac{13.6}{10.2} = \\frac{4}{3}$."
    ],
    "stepByStepSolutionAr": [
      "أطول طول موجي يقابل أقل فرق طاقة: $\\Delta E_{\\min} = E_2 - E_1 = 10.2\\text{ eV}$. أقصر طول موجي يقابل أقصى فرق طاقة: $\\Delta E_{\\max} = E_\\infty - E_1 = 13.6\\text{ eV}$. النسبة $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{\\Delta E_{\\max}}{\\Delta E_{\\min}} = \\frac{13.6}{10.2} = \\frac{4}{3}$."
    ],
    "teacherTipEn": "Recall that wavelength is inversely proportional to photon energy: $\\lambda \\propto \\frac{1}{\\Delta E}$.",
    "teacherTipAr": "تذكر أن الطول الموجي يتناسب عكسياً مع فرق الطاقة بين المستويين."
  },
  {
    "id": "phys_ch6_db_hots_02",
    "titleEn": "Balmer Series Wavelength Extremes Ratio",
    "titleAr": "نسبة أطول إلى أقصر طول موجي في متسلسلة بالمر",
    "difficulty": "hots",
    "questionEn": "For the Balmer series of the hydrogen atomic spectrum, what is the exact ratio of the maximum wavelength ($\\lambda_{\\max}$) to the minimum wavelength ($\\lambda_{\\min}$)?",
    "questionAr": "في متسلسلة بالمر لطيف ذرة الهيدروجين، ما هي النسبة الدقيقة بين أطول طول موجي ($\\lambda_{\\max}$) وأقصر طول موجي ($\\lambda_{\\min}$)?",
    "optionsEn": [
      "$\\frac{5}{9}$",
      "$\\frac{9}{5}$",
      "$\\frac{4}{3}$",
      "$\\frac{25}{16}$"
    ],
    "optionsAr": [
      "$\\frac{5}{9}$",
      "$\\frac{9}{5}$",
      "$\\frac{4}{3}$",
      "$\\frac{25}{16}$"
    ],
    "correctAnswer": "$\\frac{9}{5}$",
    "correctIndex": 1,
    "hintEn": "Balmer transitions end at $n=2$. Longest: $n=3 \\to n=2$; Shortest: $n=\\infty \\to n=2$.",
    "hintAr": "تنتهي متسلسلة بالمر في المستوى $n=2$. أطول خط ينتج عن الانتقال من $n=3$، وأقصر خط من $n=\\infty$.",
    "stepByStepSolutionEn": [
      "Longest wavelength in Balmer: $\\Delta E_{\\min} = E_3 - E_2 = -1.51 - (-3.4) = 1.89\\text{ eV} = 13.6(\\frac{1}{4} - \\frac{1}{9}) = 13.6 \\times \\frac{5}{36}\\text{ eV}$. Shortest wavelength: $\\Delta E_{\\max} = E_\\infty - E_2 = 0 - (-3.4) = 3.4\\text{ eV} = 13.6 \\times \\frac{1}{4}\\text{ eV}$. Hence, $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{\\Delta E_{\\max}}{\\Delta E_{\\min}} = \\frac{1/4}{5/36} = \\frac{36}{20} = \\frac{9}{5}$."
    ],
    "stepByStepSolutionAr": [
      "فرق الطاقة لأطول طول موجي: $E_3 - E_2 = 13.6 \\times (\\frac{1}{4} - \\frac{1}{9}) = 13.6 \\times \\frac{5}{36}$. فرق الطاقة لأقصر طول موجي: $E_\\infty - E_2 = 13.6 \\times \\frac{1}{4}$. النسبة $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{1/4}{5/36} = \\frac{9}{5}$."
    ],
    "teacherTipEn": "For any series ending at $n$: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{(n+1)^2}{2n+1}$. For $n=2$, $(3)^2 / (2(2)+1) = 9/5$.",
    "teacherTipAr": "قاعدة ذهبية: لأي متسلسلة تنتهي عند المستوى $n$ فإن $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{(n+1)^2}{2n+1}$، وبالتعويض بـ $n=2$ نجد $9/5$."
  },
  {
    "id": "phys_ch6_db_hots_03",
    "titleEn": "Lyman to Balmer Series Limits Ratio",
    "titleAr": "نسبة حدي متسلسلة ليمان ومتسلسلة بالمر",
    "difficulty": "hots",
    "questionEn": "What is the ratio of the minimum wavelength in the Lyman series ($\\lambda_{\\min,\\text{Lyman}}$) to the minimum wavelength in the Balmer series ($\\lambda_{\\min,\\text{Balmer}}$)?",
    "questionAr": "ما هي النسبة بين الحد الأدنى للطول الموجي في متسلسلة ليمان ($\\lambda_{\\min,\\text{Lyman}}$) إلى الحد الأدنى في متسلسلة بالمر ($\\lambda_{\\min,\\text{Balmer}}$)؟",
    "optionsEn": [
      "$\\frac{1}{2}$",
      "$\\frac{4}{1}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{9}$"
    ],
    "optionsAr": [
      "$\\frac{1}{2}$",
      "$\\frac{4}{1}$",
      "$\\frac{1}{4}$",
      "$\\frac{1}{9}$"
    ],
    "correctAnswer": "$\\frac{1}{4}$",
    "correctIndex": 2,
    "hintEn": "Series limit corresponds to transition from $n=\\infty$ to the base level.",
    "hintAr": "حد المتسلسلة ينتج عن انتقال الإلكترون من المالانهاية إلى مستوى المتسلسلة.",
    "stepByStepSolutionEn": [
      "For Lyman series limit: $\\frac{hc}{\\lambda_{\\min,\\text{Lyman}}} = E_\\infty - E_1 = \\frac{13.6}{1^2} = 13.6\\text{ eV}$. For Balmer series limit: $\\frac{hc}{\\lambda_{\\min,\\text{Balmer}}} = E_\\infty - E_2 = \\frac{13.6}{2^2} = 3.4\\text{ eV}$. Therefore, $\\frac{\\lambda_{\\min,\\text{Lyman}}}{\\lambda_{\\min,\\text{Balmer}}} = \\frac{\\Delta E_{\\text{Balmer}}}{\\Delta E_{\\text{Lyman}}} = \\frac{3.4}{13.6} = \\frac{1}{4}$."
    ],
    "stepByStepSolutionAr": [
      "طاقة فوتون حد ليمان $= 13.6\\text{ eV}$، وطاقة فوتون حد بالمر $= 3.4\\text{ eV}$. بما أن الطول الموجي يتناسب عكسياً مع الطاقة، فإن النسبة $= \\frac{3.4}{13.6} = \\frac{1}{4}$."
    ],
    "teacherTipEn": "The ratio of minimum wavelengths between any two series limits is simply $(n_1/n_2)^2 = (1/2)^2 = 1/4$.",
    "teacherTipAr": "نسبة أقصر الأطوال الموجية لأي متسلسلتين تساوي مربع النسبة بين رقمي المستويين: $(1/2)^2 = 1/4$."
  },
  {
    "id": "phys_ch6_db_hots_04",
    "titleEn": "Number of Possible Emission Lines from Excited State",
    "titleAr": "عدد خطوط الطيف المحتملة عند عودة إلكترونات مثارة من المستوى الرابع",
    "difficulty": "hots",
    "questionEn": "A group of hydrogen atoms are excited to the fourth principal energy level ($n = 4$). What is the maximum number of distinct spectral lines that can be emitted as they de-excite to the ground state?",
    "questionAr": "مجموعة من ذرات الهيدروجين أثيرت إلى مستوى الطاقة الرابع ($n = 4$). ما هو أقصى عدد من خطوط الطيف المختلفة التي يمكن أن تنبعث أثناء هبوطها إلى المستوى الأرضي؟",
    "optionsEn": [
      "3 distinct spectral lines",
      "4 distinct spectral lines",
      "10 distinct spectral lines",
      "6 distinct spectral lines"
    ],
    "optionsAr": [
      "3 خطوط طيفية مختلفة",
      "4 خطوط طيفية مختلفة",
      "10 خطوط طيفية مختلفة",
      "6 خطوط طيفية مختلفة"
    ],
    "correctAnswer": "6 distinct spectral lines",
    "correctIndex": 3,
    "hintEn": "Use the combination formula $N = \\frac{n(n-1)}{2}$.",
    "hintAr": "استخدم القانون الرياضي لعدد الاحتمالات: $N = \\frac{n(n-1)}{2}$.",
    "stepByStepSolutionEn": [
      "The total number of spectral lines is given by the combinations of choosing 2 levels from $n$: $N = \\frac{n(n-1)}{2} = \\frac{4 \\times 3}{2} = 6$. The lines are: $4\\to3, 4\\to2, 4\\to1$ (3 lines), $3\\to2, 3\\to1$ (2 lines), and $2\\to1$ (1 line), totaling $3 + 2 + 1 = 6$ lines."
    ],
    "stepByStepSolutionAr": [
      "أقصى عدد من خطوط الطيف يحسب من العلاقة $N = \\frac{n(n-1)}{2} = \\frac{4 \\times 3}{2} = 6$ خطوط طيفية (3 تقع في ليمان، 2 في بالمر، و1 في باشن)."
    ],
    "teacherTipEn": "Remember: If a SINGLE atom is excited, the maximum number of emitted photons in one cascade is $(n - 1) = 3$, but for a SAMPLE of atoms, all $6$ distinct transitions are observed.",
    "teacherTipAr": "انتبه: لذرة واحدة فإن أقصى عدد فوتونات متتالية هو $n-1 = 3$، أما لعينة من الذرات فإن عدد الخطوط الطيفية المختلفة الممكنة هو 6 خطوط."
  },
  {
    "id": "phys_ch6_db_hots_05",
    "titleEn": "Single Excited Atom Maximum Cascade Lines",
    "titleAr": "أقصى عدد فوتونات تنبعث من ذرة واحدة مثارة",
    "difficulty": "hots",
    "questionEn": "If a single hydrogen atom is excited to the fifth energy level ($n = 5$), what is the maximum number of photons it can emit as it returns to the ground state ($n = 1$)?",
    "questionAr": "إذا أثيرت ذرة هيدروجين واحدة فقط إلى مستوى الطاقة الخامس ($n = 5$)، فما هو أقصى عدد من الفوتونات يمكن أن تصدرها هذه الذرة أثناء عودتها للمستوى الأرضي؟",
    "optionsEn": [
      "4 photons, via the cascade $5 \\to 4 \\to 3 \\to 2 \\to 1$",
      "10 photons, spanning all possible transitions",
      "5 photons, matching the principal quantum number",
      "1 photon only, since it must jump directly to ground level"
    ],
    "optionsAr": [
      "4 فوتونات، عبر الهبوط المتتالي $5 \\to 4 \\to 3 \\to 2 \\to 1$",
      "10 فوتونات، تشمل جميع الاحتمالات الممكنة",
      "5 فوتونات، بعدد رتبة المستوى الرئيسي",
      "فوتون واحد فقط، حيث يجب أن تقفز مباشرة للأرضي"
    ],
    "correctAnswer": "4 photons, via the cascade $5 \\to 4 \\to 3 \\to 2 \\to 1$",
    "correctIndex": 0,
    "hintEn": "A single atom can only follow one transition path at a time.",
    "hintAr": "الذرة الواحدة تتبع مساراً واحداً متتالياً للهبوط، فتنزل درجة بدرجة كأقصى احتمال.",
    "stepByStepSolutionEn": [
      "For a single atom, the maximum number of transitions occurs when it drops level-by-level: $5 \\to 4$, $4 \\to 3$, $3 \\to 2$, and $2 \\to 1$. This yields $(5 - 1) = 4$ photons. It cannot emit 10 photons simultaneously because there is only one electron."
    ],
    "stepByStepSolutionAr": [
      "بالنسبة لذرة هيدروجين مفردة، أقصى عدد من الفوتونات ينبعث عند انتقال الإلكترون متتابعاً عبر المستويات المتعاقبة ($5 \\to 4 \\to 3 \\to 2 \\to 1$) فيصدر 4 فوتونات، ولا يمكن أن تصدر أكثر من ذلك لكونها ذرة واحدة ذات إلكترون واحد."
    ],
    "teacherTipEn": "Always distinguish between 'a sample of atoms' ($N = \\frac{n(n-1)}{2}$) and 'a single atom' ($N_{\\max} = n - 1$).",
    "teacherTipAr": "فرق دائماً بين 'عينة من الذرات' ($N = \\frac{n(n-1)}{2}$) و'ذرة واحدة' ($N_{\\max} = n - 1$)."
  },
  {
    "id": "phys_ch6_db_hots_06",
    "titleEn": "De Broglie Standing Wave in Bohr Third Orbit",
    "titleAr": "موجة دي برولي الموقوفة في مدار بور الثالث",
    "difficulty": "hots",
    "questionEn": "In Bohr's atomic model, an electron in the third stationary orbit ($n = 3$) has an orbital radius $r_3$. What is the de Broglie wavelength $\\lambda$ associated with this electron?",
    "questionAr": "في نموذج بور الذري، يتحرك إلكترون في المدار الثالث ($n = 3$) بنصف قطر $r_3$. ما هو طول موجة دي برولي المصاحبة لحركة هذا الإلكترون بدلالة $r_3$؟",
    "optionsEn": [
      "$\\lambda = \\frac{3}{2\\pi r_3}$",
      "$\\lambda = \\frac{2\\pi r_3}{3}$",
      "$\\lambda = 6\\pi r_3$",
      "$\\lambda = \\frac{2\\pi r_3}{9}$"
    ],
    "optionsAr": [
      "$\\lambda = \\frac{3}{2\\pi r_3}$",
      "$\\lambda = \\frac{2\\pi r_3}{3}$",
      "$\\lambda = 6\\pi r_3$",
      "$\\lambda = \\frac{2\\pi r_3}{9}$"
    ],
    "correctAnswer": "$\\lambda = \\frac{2\\pi r_3}{3}$",
    "correctIndex": 1,
    "hintEn": "Bohr's standing wave condition states that the orbit circumference equals an integer number of de Broglie wavelengths: $2\\pi r = n\\lambda$.",
    "hintAr": "شرط بور للموجة الموقوفة: محيط المدار يساوي عدداً صحيحاً من أطوال موجة دي برولي: $2\\pi r = n\\lambda$.",
    "stepByStepSolutionEn": [
      "According to Bohr-de Broglie postulate, the circumference of the stationary orbit must contain an integer number of de Broglie wavelengths: $2\\pi r_n = n\\lambda$. For $n = 3$, $2\\pi r_3 = 3\\lambda \\implies \\lambda = \\frac{2\\pi r_3}{3}$."
    ],
    "stepByStepSolutionAr": [
      "وفقاً لفرض بور-دي برولي، محيط المدار يحتوي على عدد صحيح من الأمواج الموقوفة: $2\\pi r_n = n\\lambda$. في المدار الثالث $n = 3$، إذن $2\\pi r_3 = 3\\lambda$ وبالتالي $\\lambda = \\frac{2\\pi r_3}{3}$."
    ],
    "teacherTipEn": "The number of complete wave loops (crests plus troughs) equals the principal quantum number $n$.",
    "teacherTipAr": "عدد الأمواج الموقوفة الكاملة (قطاعات الموجة مقسومة على 2) يساوي رتبة المدار $n$."
  },
  {
    "id": "phys_ch6_db_hots_07",
    "titleEn": "Hydrogen Excitation to Ionization Energy Percentage",
    "titleAr": "نسبة طاقة الإثارة للمستوى الثالث إلى طاقة التأين",
    "difficulty": "hots",
    "questionEn": "What percentage of the hydrogen atom's ground-state ionization energy ($13.6\\text{ eV}$) is required to excite an electron from the ground state ($n = 1$) to the third energy level ($n = 3$)?",
    "questionAr": "ما هي النسبة المئوية من طاقة تأين ذرة الهيدروجين ($13.6\\text{ eV}$) اللازمة لإثارة إلكترون من المستوى الأرضي ($n = 1$) إلى المستوى الثالث ($n = 3$)؟",
    "optionsEn": [
      "$75.0\\%$ ($10.2\\text{ eV}$)",
      "$93.8\\%$ ($12.75\\text{ eV}$)",
      "$\\approx 88.9\\%$ ($12.09\\text{ eV}$)",
      "$33.3\\%$ ($4.53\\text{ eV}$)"
    ],
    "optionsAr": [
      "$75.0\\%$ ($10.2\\text{ eV}$)",
      "$93.8\\%$ ($12.75\\text{ eV}$)",
      "$\\approx 88.9\\%$ ($12.09\\text{ eV}$)",
      "$33.3\\%$ ($4.53\\text{ eV}$)"
    ],
    "correctAnswer": "$\\approx 88.9\\%$ ($12.09\\text{ eV}$)",
    "correctIndex": 2,
    "hintEn": "Excitation energy is $\\Delta E = E_3 - E_1$. Find $\\frac{\\Delta E}{13.6} \\times 100\\%$.",
    "hintAr": "طاقة الإثارة هي $\\Delta E = E_3 - E_1$. احسب النسبة إلى 13.6 إلكترون فولت.",
    "stepByStepSolutionEn": [
      "$E_1 = -13.6\\text{ eV}$, $E_3 = -\\frac{13.6}{9} = -1.511\\text{ eV}$. Excitation energy $\\Delta E = E_3 - E_1 = -1.511 - (-13.6) = 12.089\\text{ eV}$. The fraction of ionization energy is $\\frac{12.089}{13.6} = \\frac{8}{9} \\approx 88.89\\%$."
    ],
    "stepByStepSolutionAr": [
      "طاقة المستوى الأول $-13.6\\text{ eV}$ والثالث $-1.51\\text{ eV}$. طاقة الإثارة $= 12.09\\text{ eV}$. النسبة المئوية $= \\frac{12.09}{13.6} = \\frac{8}{9} \\approx 88.9\\%$."
    ],
    "teacherTipEn": "Notice that transitioning to $n=2$ takes $75\\%$ ($10.2\\text{ eV}$), to $n=3$ takes $88.9\\%$ ($12.09\\text{ eV}$), and to $n=4$ takes $93.75\\%$ ($12.75\\text{ eV}$).",
    "teacherTipAr": "لاحظ أن معظم طاقة التأين تبذل في القفز من المستوى الأول إلى الثاني (75%)، ومنه للمستوى الثالث تصل لـ 88.9%."
  },
  {
    "id": "phys_ch6_db_hots_08",
    "titleEn": "Hydrogen Photon Absorption Resonance Constraint",
    "titleAr": "شرط امتصاص فوتون لإثارة ذرة هيدروجين",
    "difficulty": "hots",
    "questionEn": "A hydrogen atom in its ground state ($E_1 = -13.6\\text{ eV}$) is bombarded by a photon of energy $11.5\\text{ eV}$. What occurs?",
    "questionAr": "ذرة هيدروجين في مستواها الأرضي ($E_1 = -13.6\\text{ eV}$) سقط عليها فوتون طاقته $11.5\\text{ eV}$. ماذا يحدث؟",
    "optionsEn": [
      "The photon is absorbed, the electron excites to $n=2$, and a $1.3\\text{ eV}$ photon is re-emitted",
      "The electron absorbs the photon and transitions to a non-quantized orbit between $n=2$ and $n=3$",
      "The atom is ionized and the emitted photoelectron acquires $11.5\\text{ eV}$ of kinetic energy",
      "The photon is NOT absorbed and passes through without interaction, because $11.5\\text{ eV}$ does not match any exact difference $(E_n - E_1)$"
    ],
    "optionsAr": [
      "يُمتص الفوتون ويُثار الإلكترون للمستوى الثاني وينبعث فوتون متبقي طاقته $1.3\\text{ eV}$",
      "يمتص الإلكترون الفوتون وينتقل لمدار بين المستوى الثاني والثالث",
      "تتأين الذرة ويكتسب الإلكترون المنبعث طاقة حركة $11.5\\text{ eV}$",
      "لا يُمتص الفوتون ويمر دون تفاعل، لأن طاقته $11.5\\text{ eV}$ لا تساوي تماماً فرق الطاقة بين المستوى الأرضي وأي مستوى أعلى"
    ],
    "correctAnswer": "The photon is NOT absorbed and passes through without interaction, because $11.5\\text{ eV}$ does not match any exact difference $(E_n - E_1)$",
    "correctIndex": 3,
    "hintEn": "Photons can only be absorbed if their energy precisely matches $\\Delta E = E_f - E_i$, unless $h\\nu \\ge 13.6\\text{ eV}$ (photoionization).",
    "hintAr": "لا تمتص الذرة الفوتون إلا إذا كانت طاقته مساوية تماماً لفرق الطاقة بين مستويين، ما لم تكن طاقته كافية لتأيينها بالكامل ($\\ge 13.6\\text{ eV}$).",
    "stepByStepSolutionEn": [
      "Atomic energy levels are discrete. Possible excitation energies from $n=1$ are: $E_2 - E_1 = 10.2\\text{ eV}$, $E_3 - E_1 = 12.09\\text{ eV}$, etc. Since $11.5\\text{ eV}$ falls between $10.2\\text{ eV}$ and $12.09\\text{ eV}$, resonance cannot occur. The atom cannot absorb a fraction of a photon, so the photon transmits unattenuated."
    ],
    "stepByStepSolutionAr": [
      "مستويات الطاقة مكممة ومحددة. طاقات الإثارة الممكنة من المستوى الأول هي: $10.2\\text{ eV}$ للمستوى الثاني، و$12.09\\text{ eV}$ للمستوى الثالث. بما أن $11.5\\text{ eV}$ لا تطابق أي فرق، فإن الفوتون لا يمتص مطلقاً ويمر دون أي تأثير."
    ],
    "teacherTipEn": "Contrast with electron collision: an electron with kinetic energy $11.5\\text{ eV}$ CAN excite the atom to $n=2$ (transferring $10.2\\text{ eV}$) and retain $1.3\\text{ eV}$ of kinetic energy.",
    "teacherTipAr": "قارن ذلك بالإلكترون المقذوف: الإلكترون ذو طاقة $11.5\\text{ eV}$ يستطيع إثارة الذرة للمستوى الثاني ويفقد $10.2\\text{ eV}$ ويتبقى معه $1.3\\text{ eV}$ كطاقة حركة."
  },
  {
    "id": "phys_ch6_db_hots_09",
    "titleEn": "Inelastic Electron Collision Excitation Energy Transfer",
    "titleAr": "تصادم إلكترون حر غير مرن وإثارة ذرة الهيدروجين",
    "difficulty": "hots",
    "questionEn": "An incident free electron with kinetic energy $K = 11.5\\text{ eV}$ collides inelastically with a ground-state hydrogen atom ($E_1 = -13.6\\text{ eV}$). What is the remaining kinetic energy of the electron after the collision?",
    "questionAr": "اصطدم إلكترون حر طاقة حركته $11.5\\text{ eV}$ اصطداماً غير مرن بذرة هيدروجين في مستواها الأرضي. ما هي طاقة الحركة المتبقية للإلكترون بعد التصادم؟",
    "optionsEn": [
      "$1.3\\text{ eV}$, after transferring $10.2\\text{ eV}$ to excite the atom to $n = 2$",
      "$0\\text{ eV}$, as the entire kinetic energy is absorbed",
      "$11.5\\text{ eV}$, as no excitation can occur",
      "$0.59\\text{ eV}$, after exciting the atom to $n = 3$"
    ],
    "optionsAr": [
      "$1.3\\text{ eV}$، بعد منح $10.2\\text{ eV}$ لإثارة الذرة إلى المستوى الثاني $n = 2$",
      "$0\\text{ eV}$، حيث تمتص طاقة الحركة بالكامل",
      "$11.5\\text{ eV}$، لعدم حدوث إثارة إطلاقاً",
      "$0.59\\text{ eV}$، بعد إثارة الذرة إلى المستوى الثالث $n = 3$"
    ],
    "correctAnswer": "$1.3\\text{ eV}$, after transferring $10.2\\text{ eV}$ to excite the atom to $n = 2$",
    "correctIndex": 0,
    "hintEn": "The collision excites the atom to the highest accessible level: $E_2 - E_1 = 10.2\\text{ eV} \\le 11.5\\text{ eV} < E_3 - E_1 = 12.09\\text{ eV}$.",
    "hintAr": "الإلكترون يثير الذرة لأعلى مستوى يمكنه بلوغه بشرط أن تكون طاقته أكبر من أو تساوي فرق الطاقة.",
    "stepByStepSolutionEn": [
      "Unlike photons, a colliding free particle can transfer part of its kinetic energy. The excitation to $n=2$ requires $10.2\\text{ eV}$. Since $11.5\\text{ eV} \\ge 10.2\\text{ eV}$ (and $< 12.09\\text{ eV}$ needed for $n=3$), the electron transfers $10.2\\text{ eV}$ to the bound electron and scatters away with remaining kinetic energy: $K' = 11.5 - 10.2 = 1.3\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "الجسيمات المشحونة (كالإلكترونات) يمكنها أن تفقد جزءاً من طاقتها في التصادم. طاقة إثارة المستوى الثاني $10.2\\text{ eV}$. طاقة الإلكترون $11.5\\text{ eV}$ كافية لبلوغ المستوى الثاني فقط، فيمنح الذرة $10.2\\text{ eV}$ ويخرج بطاقة حركة متبقية $11.5 - 10.2 = 1.3\\text{ eV}$."
    ],
    "teacherTipEn": "This fundamental difference between photon absorption (all-or-nothing) and particle collision is the basis of the Franck-Hertz experiment.",
    "teacherTipAr": "هذا الفرق الجوهري بين امتصاص الفوتون وتصادم الإلكترونات هو المبدأ الأساسي لتجربة فرانك-هيرتز الشهيرة."
  },
  {
    "id": "phys_ch6_db_hots_10",
    "titleEn": "Bohr Orbital Frequency Scaling with Quantum Number",
    "titleAr": "تناسب تردد دوران إلكترون بور مع رتبة المستوى",
    "difficulty": "hots",
    "questionEn": "In Bohr's atomic model, how does the orbital revolution frequency $f$ of an electron scale with the principal quantum number $n$?",
    "questionAr": "في نموذج بور، كيف يتناسب تردد دوران الإلكترون حول النواة $f$ مع رتبة المدار الرئيسي $n$؟",
    "optionsEn": [
      "$f \\propto \\frac{1}{n^2}$",
      "$f \\propto \\frac{1}{n^3}$",
      "$f \\propto \\frac{1}{n}$",
      "$f \\propto \\frac{1}{n^4}$"
    ],
    "optionsAr": [
      "$f \\propto \\frac{1}{n^2}$",
      "$f \\propto \\frac{1}{n^3}$",
      "$f \\propto \\frac{1}{n}$",
      "$f \\propto \\frac{1}{n^4}$"
    ],
    "correctAnswer": "$f \\propto \\frac{1}{n^3}$",
    "correctIndex": 1,
    "hintEn": "Orbital frequency is $f = \\frac{v}{2\\pi r}$. In Bohr's model, $v \\propto \\frac{1}{n}$ and $r \\propto n^2$.",
    "hintAr": "التردد هو مقلوب الزمن الدوري: $f = \\frac{v}{2\\pi r}$. في نموذج بور $v \\propto \\frac{1}{n}$ و $r \\propto n^2$.",
    "stepByStepSolutionEn": [
      "Orbital radius scales as $r_n \\propto n^2$, and orbital velocity scales as $v_n \\propto \\frac{1}{n}$. The orbital frequency is $f = \\frac{v}{2\\pi r} \\propto \\frac{1/n}{n^2} = \\frac{1}{n^3}$."
    ],
    "stepByStepSolutionAr": [
      "نصف قطر المدار يتناسب مع $n^2$ وسرعة الإلكترون تتناسب عكسياً مع $n$. إذن التردد المداري $f = \\frac{v}{2\\pi r} \\propto \\frac{1/n}{n^2} = \\frac{1}{n^3}$."
    ],
    "teacherTipEn": "Thus, an electron in $n=2$ revolves with an orbital frequency $1/8$ of that in the ground state $n=1$.",
    "teacherTipAr": "وبالتالي، يدور الإلكترون في المدار الثاني بتردد يعادل ثُمن ($1/8$) تردده في المدار الأول."
  },
  {
    "id": "phys_ch6_db_hots_11",
    "titleEn": "Spectrometer Pure Spectrum Dual Prerequisites",
    "titleAr": "الشرطان الأساسيان للحصول على طيف نقي بالمطياف",
    "difficulty": "hots",
    "questionEn": "To obtain a pure spectrum using a spectrometer (where every spectral line is completely separated without overlapping), what two conditions must be satisfied simultaneously?",
    "questionAr": "للحصول على طيف نقي باستخدام المطياف (بحيث يظهر كل خط لوني مفرداً غير متداخل مع غيره)، ما هما الشرطان الواجب توافرهما معاً؟",
    "optionsEn": [
      "The prism is heated to a high temperature, and the slit is fully opened to maximum width",
      "The telescope objective lens is concave, and light enters without refraction",
      "The prism is in the minimum deviation position, and the collimator lens focuses the slit at infinity (parallel rays enter the prism)",
      "The source is placed at the telescope eyepiece, and the prism is removed"
    ],
    "optionsAr": [
      "أن يسخن المنشور لدرجة حرارة عالية، وتفتح فتحة المجمع لأقصى اتساع",
      "أن تكون الشيئية مقعرة، ويدخل الضوء دون أي انكسار",
      "أن يكون المنشور في وضع النهاية الصغرى للانحراف، وأن تكون فتحة المجمع عند بؤرة عدسته المحدبة لتخرج الأشعة متوازية",
      "أن يوضع المصدر عند عينية التلسكوب، ويُرفع المنشور"
    ],
    "correctAnswer": "The prism is in the minimum deviation position, and the collimator lens focuses the slit at infinity (parallel rays enter the prism)",
    "correctIndex": 2,
    "hintEn": "Collimator produces parallel beams for each color; prism at minimum deviation disperses each color at a unique angle.",
    "hintAr": "وظيفة المجمع إخراج حزم متوازية لكل لون، والمنشور في النهاية الصغرى للانحراف يفرقها بأقل تشتت وزوايا فريدة.",
    "stepByStepSolutionEn": [
      "A pure spectrum requires: (1) The slit is placed at the focal point of the collimator lens so parallel rays exit towards the prism. (2) The prism is adjusted to the position of minimum deviation so each wavelength is deviated by a distinct, unique angle, and the objective lens of the telescope focuses each color to a sharp, separate spectral line at its focal plane."
    ],
    "stepByStepSolutionAr": [
      "شروط الحصول على طيف نقي: 1) وضع فتحة المجمع عند بؤرة عدسته لتخرج الأشعة متوازية وتسقط على المنشور. 2) ضبط المنشور في وضع النهاية الصغرى للانحراف بحيث تخرج أشعة كل لون متوازية في اتجاه محدد وتجمعها عدسة التلسكوب الشيئية في بؤرة خاصة بها في البؤرة الرئيسية دون تداخل."
    ],
    "teacherTipEn": "If the prism is NOT at minimum deviation, beams of different wavelengths overlap, causing color blurring and impure lines.",
    "teacherTipAr": "إذا لم يكن المنشور في وضع النهاية الصغرى للانحراف تتداخل ألوان الطيف المختلفة ويفقد الطيف نقاءه."
  },
  {
    "id": "phys_ch6_db_hots_12",
    "titleEn": "Fraunhofer Solar Absorption Lines Physical Mechanism",
    "titleAr": "الآلية الفيزيائية لظهور خطوط فرانهوفر في طيف الشمس",
    "difficulty": "hots",
    "questionEn": "Fraunhofer lines observed in the solar spectrum are dark absorption lines across the continuous solar spectrum. What physical process creates them?",
    "questionAr": "خطوط فرانهوفر التي تظهر في طيف الشمس هي خطوط امتصاص خطية مظلمة تتخلل الطيف المستمر. ما هي الآلية الفيزيائية لنشأتها؟",
    "optionsEn": [
      "Solar rays are totally internally reflected by water droplets in Earth's clouds",
      "Hydrogen atoms in the core fuse into helium, completely destroying these wavelengths",
      "Nuclear gamma rays decay directly into visible photons with missing wavelengths",
      "The continuous spectrum from the dense solar core passes through the cooler solar atmosphere, where elements (mainly H and He) absorb their characteristic wavelengths"
    ],
    "optionsAr": [
      "الانعكاس الكلي الداخلي لأشعة الشمس داخل قطرات الماء في سحب الأرض",
      "اندماج الهيدروجين إلى هيليوم في باطن الشمس يؤدي لتدمير هذه الأطوال الموجية تماماً",
      "تحلل أشعة غاما النووية مباشرة إلى فوتونات ضوئية ذات أطوال موجية مفقودة",
      "مرور الطيف المستمر الصادر من باطن الشمس عالي الحرارة خلال الغلاف الجوي الشمسي الأقل حرارة، فتمتص عناصره (خاصة الهيدروجين والهيليوم) أطوالها الموجية المميزة"
    ],
    "correctAnswer": "The continuous spectrum from the dense solar core passes through the cooler solar atmosphere, where elements (mainly H and He) absorb their characteristic wavelengths",
    "correctIndex": 3,
    "hintEn": "Solar core emits continuous radiation; cooler outer gases absorb specific frequencies.",
    "hintAr": "باطن الشمس الساخن يشع طيفاً مستمراً، وغازات الغلاف الخارجي الأبرد تمتص خطوطها الخاصة.",
    "stepByStepSolutionEn": [
      "The glowing core of the Sun acts as a blackbody radiating a continuous spectrum. As this light traverses the Sun's outer cooler atmosphere (chromosphere), elements like Hydrogen and Helium absorb precisely those wavelengths that correspond to their electronic energy transitions, leaving dark absorption lines known as Fraunhofer lines."
    ],
    "stepByStepSolutionAr": [
      "باطن الشمس المتوهج يبعث طيفاً متصلاً (مستمراً). عند مرور هذا الطيف عبر الغلاف الغازي الشمسي (الأقل حرارة)، تمتص العناصر الغازية الموجودة فيه (أهمها الهيدروجين والهيليوم) الأطوال الموجية الخاصة بها، فتظهر في الطيف الشمسي كخطوط مظلمة تمثل طيف امتصاص خطي لتلك العناصر."
    ],
    "teacherTipEn": "Fraunhofer lines provide unequivocal chemical proof of the elements present in stellar atmospheres.",
    "teacherTipAr": "تعد خطوط فرانهوفر دليلاً كيميائياً قاطعاً على العناصر المكونة للغلاف الجوي للنجوم والشمس."
  },
  {
    "id": "phys_ch6_db_hots_13",
    "titleEn": "Coolidge Tube Continuous vs Characteristic X-Ray Spectrum",
    "titleAr": "المقارنة بين الطيف المستمر والمميز للأشعة السينية في أنبوبة كولدج",
    "difficulty": "hots",
    "questionEn": "In a Coolidge tube, which of the following correctly describes how the continuous spectrum (Bremsstrahlung) and the characteristic (line) spectrum are influenced by operating parameters?",
    "questionAr": "في أنبوبة كولدج، أي العبارات التالية تصف بدقة كيفية تأثر الطيف المستمر والطيف الخطي المميز بمتغيرات التشغيل؟",
    "optionsEn": [
      "Continuous $\\lambda_{\\min}$ depends solely on potential difference $V$; characteristic $\\lambda_k$ depends solely on target material atomic number $Z$",
      "Both spectra depend exclusively on the filament heating current",
      "Continuous spectrum depends on atomic number $Z$; characteristic spectrum depends on potential difference $V$",
      "Neither spectrum depends on potential difference $V$ or target material"
    ],
    "optionsAr": [
      "الحد الأدنى للطول الموجي المستمر $\\lambda_{\\min}$ يتوقف فقط على فرق الجهد $V$، بينما الطول الموجي المميز $\\lambda_k$ يتوقف فقط على العدد الذري لمادة الهدف $Z$",
      "كلا الطيفين يعتمد حصراً على شدة تيار تسخين الفتيلة",
      "الطيف المستمر يعتمد على العدد الذري $Z$، بينما الطيف المميز يعتمد على فرق الجهد $V$",
      "لا يعتمد أي من الطيفين على فرق الجهد أو نوع مادة الهدف"
    ],
    "correctAnswer": "Continuous $\\lambda_{\\min}$ depends solely on potential difference $V$; characteristic $\\lambda_k$ depends solely on target material atomic number $Z$",
    "correctIndex": 0,
    "hintEn": "Bremsstrahlung $\\lambda_{\\min} = \\frac{hc}{eV}$; Characteristic $\\Delta E = h\\nu_k \\propto Z^2$.",
    "hintAr": "المستمر ناتج عن كبح الإلكترونات $\\lambda_{\\min} = \\frac{hc}{eV}$، والمميز ناتج عن انتقال إلكتروني بين مستويات مادة الهدف.",
    "stepByStepSolutionEn": [
      "The continuous spectrum arises when projectile electrons decelerate in the Coulomb field of target nuclei (Bremsstrahlung). Its minimum wavelength $\\lambda_{\\min} = \\frac{hc}{eV}$ depends ONLY on the accelerating voltage $V$. The characteristic spectrum occurs when an incident electron ejects an inner-shell electron (e.g., K-shell) of the target atom, and an outer electron fills the vacancy. Its wavelengths depend strictly on the energy levels of the target material (governed by atomic number $Z$)."
    ],
    "stepByStepSolutionAr": [
      "الطيف المستمر ينشأ من تصادم أو تباطؤ الإلكترونات قرب أنوية مادة الهدف ويتوقف أدنى طول موجي له فقط على فرق الجهد بين الفتيلة والهدف ($\\lambda_{\\min} = \\frac{hc}{eV}$). أما الطيف الخطي المميز فينشأ عند اقتلاع إلكترون من مستوى داخلي لذرة الهدف وهبوط إلكترون من مستوى أعلى ليحل محله، وتتوقف أطواله الموجية فقط على العدد الذري لمادة الهدف ($Z$)."
    ],
    "teacherTipEn": "Increasing the filament current increases electron emission rate (intensity of all X-rays) but does NOT alter either $\\lambda_{\\min}$ or $\\lambda_k$.",
    "teacherTipAr": "زيادة تيار الفتيلة يزيد من معدل انبعاث الإلكترونات فتزداد شدة الإشعاع الكلي لكن دون تغيير في $\\lambda_{\\min}$ أو $\\lambda_k$."
  },
  {
    "id": "phys_ch6_db_hots_14",
    "titleEn": "Coolidge Tube Accelerating Voltage Variation Graphic Shift",
    "titleAr": "تغير منحنى الأشعة السينية عند زيادة فرق الجهد بين المصعد والمهبط",
    "difficulty": "hots",
    "questionEn": "If the accelerating potential difference across a Coolidge tube is doubled ($V' = 2V$) while keeping the filament current and target material constant, how does the X-ray emission spectrum curve change?",
    "questionAr": "إذا تضاعف فرق الجهد المطبق بين المصعد والمهبط في أنبوبة كولدج ($V' = 2V$) مع ثبات تيار الفتيلة ومادة الهدف، كيف يتغير منحنى طيف الأشعة السينية المنبعثة؟",
    "optionsEn": [
      "$\\lambda_{\\min}$ doubles, and characteristic peak wavelengths shift to longer values",
      "$\\lambda_{\\min}$ is halved ($\\frac{1}{2}\\lambda_{\\min}$), total radiation intensity increases, but the positions of characteristic line peaks remain unchanged",
      "$\\lambda_{\\min}$ remains constant, but the characteristic peaks shift to higher frequencies",
      "All wavelengths across the entire spectrum decrease by exactly $50\\%$"
    ],
    "optionsAr": [
      "يتضاعف الحد الأدنى للطول الموجي وتتحرك القمم المميزة نحو أطوال موجية أطول",
      "يقل الحد الأدنى للطول الموجي إلى النصف ($\\frac{1}{2}\\lambda_{\\min}$)، وتزداد شدة الإشعاع، بينما تظل مواضع القمم الخطية المميزة ثابتة دون تغير",
      "يظل الحد الأدنى ثابتاً ولكن تتحرك القمم المميزة لترددات أعلى",
      "تقل جميع الأطوال الموجية في الطيف بأكمله بنسبة 50% بالضبط"
    ],
    "correctAnswer": "$\\lambda_{\\min}$ is halved ($\\frac{1}{2}\\lambda_{\\min}$), total radiation intensity increases, but the positions of characteristic line peaks remain unchanged",
    "correctIndex": 1,
    "hintEn": "$\\lambda_{\\min} = \\frac{hc}{eV} \\implies \\lambda_{\\min} \\propto \\frac{1}{V}$. Characteristic lines depend only on target material.",
    "hintAr": "$\\lambda_{\\min} \\propto \\frac{1}{V}$ لذا يقل للنصف عند مضاعفة الجهد، بينما القمم المميزة تخص مادة الهدف فلا تتزحزح.",
    "stepByStepSolutionEn": [
      "Since $\\lambda_{\\min} = \\frac{hc}{eV}$, doubling $V$ halves $\\lambda_{\\min}$. Furthermore, higher kinetic energy increases X-ray generation efficiency, raising the total intensity (height of the continuous curve). However, because the target material has not changed, the characteristic line transitions ($K_\\alpha, K_\\beta$) maintain the exact same energy differences and wavelengths."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\lambda_{\\min} = \\frac{hc}{eV}$، فإن مضاعفة $V$ تجعل $\\lambda_{\\min}$ يقل إلى النصف. وتزداد طاقة حركة الإلكترونات مما يزيد من كفاءة إنتاج الأشعة السينية فتزداد المساحة تحت المنحنى (الشدة الكلية). ولأن مادة الهدف لم تتغير، تظل الخطوط المميزة عند نفس أطوالها الموجية دون أي إزاحة أفقية."
    ],
    "teacherTipEn": "Crucial exam note: Characteristic peaks only appear if the applied voltage provides electron kinetic energy greater than the inner shell binding energy ($eV \\ge \\Delta E_k$).",
    "teacherTipAr": "ملحوظة امتحانية هامة: لا يظهر الطيف المميز أصلاً إلا إذا كان فرق الجهد كافياً لإكساب الإلكترونات طاقة تفوق طاقة ترابط إلكترون المستوى الداخلي."
  },
  {
    "id": "phys_ch6_db_hots_15",
    "titleEn": "Coolidge Target Atomic Number Replacement Effect",
    "titleAr": "تأثير استبدال مادة الهدف بعنصر ذي عدد ذري أكبر في أنبوبة كولدج",
    "difficulty": "hots",
    "questionEn": "If the target in a Coolidge tube is replaced by an element with a higher atomic number ($Z_2 > Z_1$) while the accelerating potential $V$ remains unchanged, how are $\\lambda_{\\min}$ and the characteristic wavelength $\\lambda_k$ affected?",
    "questionAr": "إذا استبدلت مادة الهدف في أنبوبة كولدج بعنصر آخر له عدد ذري أكبر ($Z_2 > Z_1$) مع ثبات فرق الجهد $V$، كيف يتأثر كل من $\\lambda_{\\min}$ والطول الموجي المميز $\\lambda_k$؟",
    "optionsEn": [
      "Both $\\lambda_{\\min}$ and $\\lambda_k$ shift to shorter wavelengths",
      "$\\lambda_{\\min}$ decreases, while $\\lambda_k$ remains unchanged",
      "$\\lambda_{\\min}$ remains unchanged, whereas $\\lambda_k$ shifts to a shorter wavelength",
      "Both $\\lambda_{\\min}$ and $\\lambda_k$ increase to longer wavelengths"
    ],
    "optionsAr": [
      "يزاح كل من $\\lambda_{\\min}$ و $\\lambda_k$ نحو أطوال موجية أقصر",
      "يقل $\\lambda_{\\min}$ بينما يظل $\\lambda_k$ ثابتاً",
      "يظل $\\lambda_{\\min}$ ثابتاً دون تغيير، بينما يزاح الطول الموجي المميز $\\lambda_k$ نحو طول موجي أقصر (تردد أعلى)",
      "يزداد كل من $\\lambda_{\\min}$ و $\\lambda_k$ نحو أطوال موجية أطول"
    ],
    "correctAnswer": "$\\lambda_{\\min}$ remains unchanged, whereas $\\lambda_k$ shifts to a shorter wavelength",
    "correctIndex": 2,
    "hintEn": "$\\lambda_{\\min} = \\frac{hc}{eV}$ does not depend on $Z$. Higher $Z$ means deeper nuclear potential and larger $\\Delta E$ for characteristic lines ($\\lambda_k = \\frac{hc}{\\Delta E}$ decreases).",
    "hintAr": "الحد الأدنى $\\lambda_{\\min}$ يعتمد على فرق الجهد فقط فلا يتغير. زيادة العدد الذري تزيد فرق طاقة المستويات الداخلية فتقل $\\lambda_k$.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\min} = \\frac{hc}{eV}$ depends solely on $V$, so it does not change when the target changes. However, increasing $Z$ strengthens the positive nuclear pull, increasing the binding energy differences between inner atomic shells ($\\Delta E \\propto Z^2$). Since $\\lambda_k = \\frac{hc}{\\Delta E}$, the characteristic wavelengths decrease (shift leftward toward higher frequencies)."
    ],
    "stepByStepSolutionAr": [
      "الحد الأدنى للطيف المستمر $\\lambda_{\\min} = \\frac{hc}{eV}$ يعتمد فقط على فرق الجهد المطبق، لذلك يظل ثابتاً عند ثبوت $V$. أما زيادة العدد الذري $Z$ فتزيد من قوة جذب النواة وتزيد فروق الطاقة بين المستويات الداخلية ($\\Delta E$)، وبما أن $\\lambda_k = \\frac{hc}{\\Delta E}$ فإن الطول الموجي المميز يقل ويزاح يساراً في المنحنى."
    ],
    "teacherTipEn": "Moseley's law: $\\sqrt{\\nu_k} \\propto (Z - \\sigma)$. Higher $Z$ produces higher frequency (shorter wavelength) characteristic X-rays.",
    "teacherTipAr": "قانون موزلي: الجذر التربيعي لتردد الطيف المميز يتناسب طردياً مع العدد الذري، فكلما زاد $Z$ زاد التردد وقل الطول الموجي المميز."
  },
  {
    "id": "phys_ch6_db_hots_16",
    "titleEn": "Coolidge Tube Thermal Dissipation and Energy Efficiency",
    "titleAr": "كفاءة تحويل الطاقة في أنبوبة كولدج وتبديد الحرارة",
    "difficulty": "hots",
    "questionEn": "In an operational medical X-ray Coolidge tube, what approximate percentage of the incident electrons' kinetic energy is converted into X-ray photons versus thermal internal energy?",
    "questionAr": "في أنبوبة كولدج الطبية للأشعة السينية، ما هي النسبة التقريبية لطاقة حركة الإلكترونات التي تتحول إلى فوتونات أشعة سينية مقارنة بالطاقة الحرارية المتولدة؟",
    "optionsEn": [
      "$50\\%$ X-rays and $50\\%$ thermal energy",
      "Approximately $90\\%$ is converted into X-rays and $10\\%$ into heat",
      "$100\\%$ is converted into coherent X-rays with zero thermal loss",
      "Less than $2\\%$ is converted into X-rays, while more than $98\\%$ is dissipated as heat in the anode"
    ],
    "optionsAr": [
      "$50\\%$ أشعة سينية و $50\\%$ طاقة حرارية",
      "حوالي $90\\%$ أشعة سينية و $10\\%$ طاقة حرارية",
      "$100\\%$ تتحول إلى أشعة سينية دون أي فقد حراري",
      "أقل من $2\\%$ يتحول إلى أشعة سينية، بينما أكثر من $98\\%$ يتحول إلى حرارة في المصعد (الأنود)"
    ],
    "correctAnswer": "Less than $2\\%$ is converted into X-rays, while more than $98\\%$ is dissipated as heat in the anode",
    "correctIndex": 3,
    "hintEn": "Coolidge tube efficiency is very low ($\\eta < 2\\%$), requiring copper cooling fins and cooling oil.",
    "hintAr": "كفاءة أنبوبة كولدج منخفضة جداً (أقل من 2%)، ولذلك تزود بزعانف تبريد من النحاس ومروحة أو زيت.",
    "stepByStepSolutionEn": [
      "Production of X-rays via Bremsstrahlung and inner shell ionization is an inherently inefficient process. Typically, less than $1\\%$ to $2\\%$ of the total electron kinetic energy ($IV$) is emitted as X-radiation. The remaining $>98\\%$ is converted into atomic vibrations (heat) in the tungsten target. This necessitates an anode embedded in a thick copper rod with cooling fins or circulating oil to prevent melting."
    ],
    "stepByStepSolutionAr": [
      "تعتبر كفاءة أنبوبة كولدج ضئيلة للغاية، حيث يتحول ما بين 1% إلى 2% فقط من طاقة الإلكترونات إلى أشعة سينية، بينما يتحول أكثر من 98% من طاقتها الحركية إلى طاقة حرارية هائلة تؤدي إلى سخونة الهدف، ولهذا يصنع ساق المصعد من النحاس ذي التوصيل الحراري العالي ويزود بزعانف تبريد للتخلص من الحرارة."
    ],
    "teacherTipEn": "This explains why tungsten (with a high melting point of $3422^\\circ\\text{C}$) is the target material of choice in Coolidge tubes.",
    "teacherTipAr": "وهذا يفسر سبب اختيار التنجستن كمادة للهدف نظراً لدرجة انصهاره العالية جداً وارتفاع عدده الذري."
  },
  {
    "id": "phys_ch6_db_hots_17",
    "titleEn": "Coolidge Tube Minimum Wavelength Quantitative Problem",
    "titleAr": "مسألة حساب أدنى طول موجي للأشعة السينية عند فرق جهد معلوم",
    "difficulty": "hots",
    "questionEn": "A Coolidge tube operates at an accelerating potential of $V = 62.15\\text{ kV}$. What is the minimum wavelength ($\\lambda_{\\min}$) of the produced continuous X-ray spectrum? ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}, c = 3 \\times 10^8\\text{ m/s}, e = 1.6 \\times 10^{-19}\\text{ C}$)",
    "questionAr": "تعمل أنبوبة كولدج بفرق جهد $V = 62.15\\text{ kV}$. ما هو أدنى طول موجي ($\\lambda_{\\min}$) في طيف الأشعة السينية المستمر الناتج؟",
    "optionsEn": [
      "$\\lambda_{\\min} = 0.02\\text{ nm}$ ($0.2\\text{ \\AA}$)",
      "$\\lambda_{\\min} = 0.2\\text{ nm}$ ($2.0\\text{ \\AA}$)",
      "$\\lambda_{\\min} = 0.002\\text{ nm}$ ($0.02\\text{ \\AA}$)",
      "$\\lambda_{\\min} = 2.0\\text{ nm}$ ($20\\text{ \\AA}$)"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = 0.02\\text{ nm}$ ($0.2\\text{ \\AA}$)",
      "$\\lambda_{\\min} = 0.2\\text{ nm}$ ($2.0\\text{ \\AA}$)",
      "$\\lambda_{\\min} = 0.002\\text{ nm}$ ($0.02\\text{ \\AA}$)",
      "$\\lambda_{\\min} = 2.0\\text{ nm}$ ($20\\text{ \\AA}$)"
    ],
    "correctAnswer": "$\\lambda_{\\min} = 0.02\\text{ nm}$ ($0.2\\text{ \\AA}$)",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\min} = \\frac{hc}{eV}$. Calculate with $V = 62.15 \\times 10^3\\text{ V}$.",
    "hintAr": "$\\lambda_{\\min} = \\frac{hc}{eV}$، عوض عن فرق الجهد بالفولت.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{1.6 \\times 10^{-19} \\times 62150} = \\frac{1.988 \\times 10^{-25}}{9.944 \\times 10^{-15}} = 2 \\times 10^{-11}\\text{ m} = 0.02\\text{ nm} = 0.2\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{hc}{eV} = \\frac{6.626 \\times 10^{-34} \\times 3 \\times 10^8}{1.6 \\times 10^{-19} \\times 62150} = 2 \\times 10^{-11}\\text{ m} = 0.02\\text{ nm} = 0.2\\text{ \\AA}$."
    ],
    "teacherTipEn": "Convenient shortcut: $\\lambda_{\\min}\\text{ (\\AA)} \\approx \\frac{12400}{V\\text{ (Volts)}} = \\frac{12400}{62150} \\approx 0.2\\text{ \\AA}$.",
    "teacherTipAr": "علاقة سريعة للتحقق: $\\lambda_{\\min}\\text{ (\\AA)} \\approx \\frac{12400}{V\\text{ (Volts)}} = \\frac{12400}{62150} \\approx 0.2\\text{ \\AA}$."
  },
  {
    "id": "phys_ch6_db_hots_18",
    "titleEn": "X-Ray Crystal Diffraction Mechanism and Application",
    "titleAr": "ظاهرة حيود الأشعة السينية في البلورات واستخدامها",
    "difficulty": "hots",
    "questionEn": "X-rays can undergo diffraction when passing through crystalline solids, a property utilized to study crystal structures. Why can X-rays exhibit clear diffraction in crystals whereas visible light cannot?",
    "questionAr": "تحيد الأشعة السينية عند نفاذها خلال البلورات، وتستخدم هذه الخاصية في دراسة التركيب البلوري للمواد. لماذا تحيد الأشعة السينية في البلورات بينما لا يحدث ذلك للضوء المرئي؟",
    "optionsEn": [
      "Because X-rays carry electrical charges that interact strongly with the nuclei",
      "Because the wavelength of X-rays ($\\approx 10^{-10}\\text{ m}$) is comparable to the interatomic spacings of the crystal lattice",
      "Because crystals contain natural laser amplifiers that magnify the X-rays",
      "Because visible light travels much faster than X-rays in solids"
    ],
    "optionsAr": [
      "لأن الأشعة السينية تحمل شحنات كهربية تتفاعل بقوة مع أنوية البلورة",
      "لأن الطول الموجي للأشعة السينية مقارباً للمسافات البينية بين ذرات الشبكة البلورية",
      "لأن البلورات تحتوي على مضخمات ليزرية طبيعية تكبر الأشعة السينية",
      "لأن سرعة الضوء المرئي في المواد الصلبة أكبر بكثير من سرعة الأشعة السينية"
    ],
    "correctAnswer": "Because the wavelength of X-rays ($\\approx 10^{-10}\\text{ m}$) is comparable to the interatomic spacings of the crystal lattice",
    "correctIndex": 1,
    "hintEn": "Diffraction requires aperture/spacing size to be comparable to radiation wavelength ($d \\approx \\lambda$).",
    "hintAr": "شرط حدوث الحيود بوضوح أن يكون اتساع الفتحة أو المسافة البينية مقارباً لطول موجة الإشعاع.",
    "stepByStepSolutionEn": [
      "Diffraction occurs prominently only when an obstacle or aperture dimension is on the order of the radiation wavelength. The interatomic distances in crystalline lattices are approximately $1\\text{ \\AA}$ ($10^{-10}\\text{ m}$). X-ray wavelengths range from $0.01$ to $10\\text{ nm}$, perfectly matching these lattice spacings. Visible light wavelengths ($400 - 700\\text{ nm}$) are thousands of times larger than lattice spacings, so visible light cannot resolve crystal planes."
    ],
    "stepByStepSolutionAr": [
      "لكي يظهر الحيود بوضوح يجب أن تكون المسافات الفاصلة بين العوائق مقاربة للطول الموجي للموجة الساقطة. المسافات البينية بين ذرات البلورة في حدود $10^{-10}\\text{ m}$ وهو نفس رتبة الطول الموجي للأشعة السينية، فتعمل المسافات البينية كشقوق حيود، بينما الطول الموجي للضوء المرئي أكبر بآلاف المرات فلا يظهر حيوده."
    ],
    "teacherTipEn": "This property was discovered by von Laue and Bragg, providing the premier experimental method to determine crystal structures.",
    "teacherTipAr": "اكتشف هذا الحيود العالمان فون لاو وبراج، ويعد الأساس العلمي لدراسة التركيب البلوري وتحديد الأبعاد بين الذرات."
  },
  {
    "id": "phys_ch6_db_hots_19",
    "titleEn": "Spontaneous vs Stimulated Emission Fundamental Contrast",
    "titleAr": "المقارنة الجوهرية بين الانبعاث التلقائي والمستحث",
    "difficulty": "hots",
    "questionEn": "Which of the following statements correctly distinguishes stimulated emission from spontaneous emission?",
    "questionAr": "أي العبارات التالية تميز بدقة بين الانبعاث المستحث والانبعاث التلقائي؟",
    "optionsEn": [
      "In spontaneous emission, photons are emitted in perfect coherence without external perturbation",
      "Stimulated emission only occurs after the excited atom completes its full lifetime",
      "In stimulated emission, an incident photon triggers de-excitation before the lifetime ends, producing an identical photon with the same energy, phase, direction, and polarization",
      "Spontaneous emission produces photons of higher frequency than stimulated emission for the same transition"
    ],
    "optionsAr": [
      "في الانبعاث التلقائي تنبعث فوتونات مترابطة تماماً دون أي مؤثر خارجي",
      "الانبعاث المستحث يحدث فقط بعد انتهاء فترة العمر الطبيعية للذرة المثارة",
      "في الانبعاث المستحث، يحث فوتون ساقط الذرة على الهبوط قبل انتهاء فترة العمر، فيتحرر فوتون مماثل تماماً للفوتون الساقط في الطاقة والطور والاتجاه والاستقطاب",
      "الانبعاث التلقائي ينتج فوتونات ذات تردد أعلى من الانبعاث المستحث لنفس الانتقال"
    ],
    "correctAnswer": "In stimulated emission, an incident photon triggers de-excitation before the lifetime ends, producing an identical photon with the same energy, phase, direction, and polarization",
    "correctIndex": 2,
    "hintEn": "Stimulated emission requires an external trigger photon of energy $h\\nu = E_2 - E_1$ interacting with the atom during its lifetime.",
    "hintAr": "الانبعاث المستحث يتطلب فوتوناً خارجياً طاقته $h\\nu = E_2 - E_1$ يصطدم بالذرة المثارة أثناء فترة العمر فيولد فوتونين مترابطين.",
    "stepByStepSolutionEn": [
      "In spontaneous emission, an excited atom returns to a lower state on its own after the lifetime ($\\approx 10^{-8}\\text{ s}$), emitting a photon with random direction and phase. In stimulated emission, a photon of energy $h\\nu = E_2 - E_1$ interacts with an excited atom before its lifetime expires, inducing it to emit a second photon that is in phase, has the same frequency, direction, and polarization as the inducing photon."
    ],
    "stepByStepSolutionAr": [
      "في الانبعاث التلقائي تهبط الذرة المثارة تلقائياً بعد انقضاء فترة العمر في مستوى الإثارة، مطلقة فوتوناً عشوائي الاتجاه والطور. أما في الانبعاث المستحث، فيصطدم فوتون طاقته $E_2 - E_1$ بالذرة قبل انتهاء فترة العمر، فيحثها على الهبوط وينبعث فوتونان متطابقان تماماً في الطاقة والتردد والطور والاتجاه والاستقطاب (مترابطان)."
    ],
    "teacherTipEn": "Spontaneous emission is the basis of conventional light sources (lamps, incandescent bulbs); stimulated emission is the physical basis of LASER.",
    "teacherTipAr": "الانبعاث التلقائي هو أساس المصادر الضوئية العادية، بينما الانبعاث المستحث هو الأساس الفيزيائي لشعاع الليزر."
  },
  {
    "id": "phys_ch6_db_hots_20",
    "titleEn": "Population Inversion Thermodynamic Non-Equilibrium",
    "titleAr": "مفهوم حالة الإسكان المعكوس والاتزان الحراري",
    "difficulty": "hots",
    "questionEn": "In laser physics, what does the state of 'Population Inversion' signify, and why is it necessary for laser action?",
    "questionAr": "في فيزياء الليزر، ماذا تعني حالة 'الإسكان المعكوس' ولماذا تعد شرطاً ضرورياً لتوليد شعاع الليزر؟",
    "optionsEn": [
      "All electrons are completely stripped from their atomic nuclei",
      "The ground state has a higher population than the excited states at thermal equilibrium",
      "The photons are trapped inside mirrors without escaping",
      "The number of atoms in the upper metastable level exceeds the number of atoms in the lower energy level, ensuring stimulated emission dominates over absorption"
    ],
    "optionsAr": [
      "انتزاع جميع الإلكترونات بالكامل من أنوية الذرات",
      "عدد الذرات في المستوى الأرضي أكبر من عددها في المستويات العليا في حالة الاتزان الحراري",
      "حبس الفوتونات داخل المرايا دون السماح لها بالخروج",
      "عدد الذرات في مستوى الإثارة شبه المستقر أكبر من عددها في المستوى الأدنى، لضمان سيادة الانبعاث المستحث على الامتصاص"
    ],
    "correctAnswer": "The number of atoms in the upper metastable level exceeds the number of atoms in the lower energy level, ensuring stimulated emission dominates over absorption",
    "correctIndex": 3,
    "hintEn": "Under normal Boltzmann distribution, $N_1 > N_2$. Laser requires inversion: $N_2 > N_1$.",
    "hintAr": "في الوضع الطبيعي يكون عدد الذرات في المستوى الأرضي هو الأكبر. الليزر يتطلب العكس: $N_2 > N_1$.",
    "stepByStepSolutionEn": [
      "Under normal thermal equilibrium, lower energy levels are more heavily populated ($N_1 > N_2$). Population inversion is a non-equilibrium state where the population of a higher metastable level exceeds that of the lower level ($N_2 > N_1$). This condition guarantees that passing photons are far more likely to trigger stimulated emission than to be absorbed, resulting in net optical amplification."
    ],
    "stepByStepSolutionAr": [
      "في الاتزان الحراري الطبيعي تكون المستويات الأقل طاقة أكثر شغلاً بالذرات ($N_1 > N_2$). حالة الإسكان المعكوس هي حالة غير متزنة حرارياً يكون فيها عدد الذرات في مستوى الإثارة شبه المستقر أكبر من عددها في المستوى الأدنى ($N_2 > N_1$)، وبذلك يكون احتمال حدوث الانبعاث المستحث أكبر بكثير من احتمال حدوث الامتصاص فيحدث تضخيم لشعاع الضوء."
    ],
    "teacherTipEn": "Metastable states (with long lifetimes of $\\approx 10^{-3}\\text{ s}$ compared to normal $10^{-8}\\text{ s}$) make achieving population inversion possible.",
    "teacherTipAr": "المستويات شبه المستقرة ذات فترة العمر الطويلة نسبياً ($\\approx 10^{-3}\\text{ s}$) هي التي تسمح بتراكم الذرات وتحقيق الإسكان المعكوس."
  },
  {
    "id": "phys_ch6_db_hots_21",
    "titleEn": "Metastable State Lifetime Contrast with Normal Excited State",
    "titleAr": "مقارنة فترة عمر المستوى شبه المستقر بمستويات الإثارة العادية",
    "difficulty": "hots",
    "questionEn": "Why is a metastable energy level essential for establishing population inversion in a laser medium?",
    "questionAr": "لماذا يعد وجود مستوى طاقة شبه مستقر أساسياً لتحقيق حالة الإسكان المعكوس في الوسط الفعال لليزر؟",
    "optionsEn": [
      "Because its lifetime ($\\approx 10^{-3}\\text{ s}$) is roughly $10^5$ times longer than ordinary excited states ($\\approx 10^{-8}\\text{ s}$), allowing atoms to accumulate in large numbers",
      "Because electrons in this level can never transition down, trapping them forever",
      "Because it is located below the ground level",
      "Because it emits photons without any transition"
    ],
    "optionsAr": [
      "لأن فترة العمر له ($\\approx 10^{-3}\\text{ s}$) أطول بحوالي $10^5$ مرة من مستويات الإثارة العادية ($\\approx 10^{-8}\\text{ s}$)، مما يسمح للذرات بالتراكم بأعداد هائلة",
      "لأن الإلكترونات فيه لا تهبط نهائياً فتظل محبوسة للأبد",
      "لأنه يقع تحت المستوى الأرضي للذرة",
      "لأنه يشع فوتونات دون حدوث أي انتقال إلكتروني"
    ],
    "correctAnswer": "Because its lifetime ($\\approx 10^{-3}\\text{ s}$) is roughly $10^5$ times longer than ordinary excited states ($\\approx 10^{-8}\\text{ s}$), allowing atoms to accumulate in large numbers",
    "correctIndex": 0,
    "hintEn": "Ordinary excited state lifetime $\\approx 10^{-8}\\text{ s}$; metastable lifetime $\\approx 10^{-3}\\text{ s}$.",
    "hintAr": "فترة عمر المستوى العادي $10^{-8}\\text{ s}$، بينما شبه المستقر $10^{-3}\\text{ s}$ أي أطول مئة ألف مرة.",
    "stepByStepSolutionEn": [
      "In standard excited levels, electrons decay via spontaneous emission in about $10^{-8}\\text{ s}$, emptying the level before large populations build up. In contrast, a metastable level has a prolonged lifetime of approximately $10^{-3}\\text{ s}$ (100,000 times longer). This delay allows continuous pumping to stack a massive population of atoms in this level, achieving $N_2 > N_1$."
    ],
    "stepByStepSolutionAr": [
      "في مستويات الإثارة العادية تفرغ الذرات طاقتها سريعاً في زمن قدره $10^{-8}\\text{ s}$ فلا يتراكم عدد كافٍ من الذرات. أما في المستوى شبه المستقر فتصل فترة العمر إلى $10^{-3}\\text{ s}$ (أطول بنحو مائة ألف مرة) مما يتيح استمرار الضخ وتراكم الذرات بأعداد تفوق المستوى الأدنى وتتحقق حالة الإسكان المعكوس."
    ],
    "teacherTipEn": "Remember: Pumping supplies energy to excite atoms, but the metastable state provides the 'holding pen' to store them.",
    "teacherTipAr": "تذكر: عملية الضخ تمد الذرات بالطاقة، لكن المستوى شبه المستقر هو المخزن الذي يتيح احتجاز الذرات وتراكمها."
  },
  {
    "id": "phys_ch6_db_hots_22",
    "titleEn": "He-Ne Laser Inelastic Collision Energy Transfer Mechanism",
    "titleAr": "آلية نقل الطاقة بالتصادم غير المرن في ليزر الهيليوم-نيون",
    "difficulty": "hots",
    "questionEn": "In a Helium-Neon (He-Ne) gas laser, what is the precise role of Helium atoms in the laser generation process?",
    "questionAr": "في ليزر الهيليوم-نيون، ما هو الدور الدقيق لذرات الهيليوم في عملية توليد شعاع الليزر؟",
    "optionsEn": [
      "Helium atoms directly emit the red laser photons of wavelength $632.8\\text{ nm}$",
      "Helium atoms are excited by electrical discharge, then transfer their excitation energy to Neon atoms via resonant inelastic collisions",
      "Helium acts as an optical filter that absorbs infrared radiation",
      "Helium cools down the discharge tube to absolute zero"
    ],
    "optionsAr": [
      "ذرات الهيليوم هي التي تشع فوتونات الليزر الحمراء بطول موجي $632.8\\text{ nm}$",
      "تثار ذرات الهيليوم بالتفريغ الكهربي، ثم تنقل طاقة إثارتها لذرات النيون عن طريق التصادم غير المرن لتقارب طاقتي المستويين شبه المستقرين",
      "يعمل الهيليوم كمرشح ضوئي لامتصاص الأشعة تحت الحمراء",
      "يعمل الهيليوم على تبريد أنبوبة التفريغ إلى الصفر المطلق"
    ],
    "correctAnswer": "Helium atoms are excited by electrical discharge, then transfer their excitation energy to Neon atoms via resonant inelastic collisions",
    "correctIndex": 1,
    "hintEn": "Metastable level of He ($20.61\\text{ eV}$) is very close to metastable level of Ne ($20.66\\text{ eV}$).",
    "hintAr": "طاقة المستوى شبه المستقر للهيليوم ($20.61\\text{ eV}$) قريبة جداً من المستوى شبه المستقر للنيون ($20.66\\text{ eV}$).",
    "stepByStepSolutionEn": [
      "Helium has a higher concentration ($10:1$ ratio). Electric discharge excites Helium atoms efficiently to their metastable state ($20.61\\text{ eV}$). Excited Helium atoms collide inelastically with unexcited Neon atoms. Due to the very close energy resonance between the He level ($20.61\\text{ eV}$) and the Ne metastable level ($20.66\\text{ eV}$), energy is efficiently transferred to Neon atoms, pumping Neon into population inversion. Neon atoms then produce the stimulated laser emission ($632.8\\text{ nm}$)."
    ],
    "stepByStepSolutionAr": [
      "نسبة الهيليوم إلى النيون هي 10 : 1. يقوم التفريغ الكهربي بإثارة ذرات الهيليوم بكفاءة إلى مستواها شبه المستقر ($20.61\\text{ eV}$). تتصادم ذرات الهيليوم المثارة تصادماً غير مرن مع ذرات نيون غير مثارة، ولتقارب طاقتي المستويين شبه المستقرين فيهما تنتقل طاقة الإثارة إلى ذرات النيون فتتحقق فيها حالة الإسكان المعكوس، بينما النيون هو المادة الفعالة المسؤولة عن إشعاع الليزر."
    ],
    "teacherTipEn": "Always remember: Helium is the energy transfer vehicle; Neon is the active laser emitter.",
    "teacherTipAr": "تذكر دائماً: الهيليوم هو وسيط نقل الطاقة، بينما النيون هو الوسط الفعال المشع لليزر."
  },
  {
    "id": "phys_ch6_db_hots_23",
    "titleEn": "He-Ne Optical Resonant Cavity and Feedback Amplification",
    "titleAr": "التجويف الرنيني ودور المرآة شبه المنفذة في ليزر الهيليوم-نيون",
    "difficulty": "hots",
    "questionEn": "In a He-Ne laser tube, the resonant cavity consists of two parallel mirrors at the ends: one fully reflective ($99.5\\%$) and one semi-transparent ($98\\%$). What is the physical purpose of the semi-transparent mirror?",
    "questionAr": "في ليزر الهيليوم-نيون، يتكون التجويف الرنيني من مرآتين متوازيتين عند طرفي الأنبوبة: إحداهما عاكسة تماماً ($99.5\\%$) والأخرى شبه منفذة ($98\\%$). ما هو الغرض الفيزيائي للمرآة شبه المنفذة؟",
    "optionsEn": [
      "It absorbs all unwanted colors to produce monochromatic light",
      "It prevents electric discharge current from escaping the tube",
      "It reflects most photons back to sustain stimulated emission amplification while allowing a small fraction ($\\approx 2\\%$) to exit as the output laser beam",
      "It polarizes the light through complete total internal reflection"
    ],
    "optionsAr": [
      "تمتص جميع الألوان غير المرغوبة لإنتاج ضوء أحادي اللون",
      "تمنع تيار التفريغ الكهربي من الهروب خارج الأنبوبة",
      "تعكس معظم الفوتونات لترتد داخل الأنبوبة لمواصلة التضخيم بالانبعاث المستحث، وتسمح بنفاذ نسبة ضئيلة ($\\approx 2\\%$) كشعاع ليزر خارج",
      "تقوم باستقطاب الضوء عبر الانعكاس الكلي الداخلي التام"
    ],
    "correctAnswer": "It reflects most photons back to sustain stimulated emission amplification while allowing a small fraction ($\\approx 2\\%$) to exit as the output laser beam",
    "correctIndex": 2,
    "hintEn": "Resonant cavity acts as an optical amplifier; the partial mirror provides both feedback and output coupling.",
    "hintAr": "التجويف الرنيني يعمل كمضخم، والمرآة شبه المنفذة توفر التغذية المرتدة بنسبة 98% وتسمح بخروج 2% كشعاع ليزر.",
    "stepByStepSolutionEn": [
      "Photons traveling parallel to the tube axis reflect back and forth between the two mirrors, passing through the inverted Neon medium repeatedly and triggering avalanches of coherent stimulated emissions. The semi-transparent mirror reflects about $98\\%$ of the photons back to sustain optical amplification, while transmitting the remaining $\\approx 2\\%$ as the intense, collimated external laser beam."
    ],
    "stepByStepSolutionAr": [
      "تتحرك الفوتونات الموازية لمحور الأنبوبة ذهاباً وإياباً بين المرآتين فتمر عبر ذرات النيون المثارة عدة مرات مسببة توالي الانبعاث المستحث وتضخيم الإشعاع. تعكس المرآة شبه المنفذة نحو 98% من الفوتونات لتستمر عملية التضخيم، وتسمح بخروج نحو 2% من الفوتونات كشعاع ليزر قوي ومركّز."
    ],
    "teacherTipEn": "If both mirrors were $100\\%$ reflective, no laser beam would ever emerge from the cavity.",
    "teacherTipAr": "لو كانت كلا المرآتين عاكستين بنسبة 100% لما استطاع شعاع الليزر الخروج نهائياً من أنبوبة الجهاز."
  },
  {
    "id": "phys_ch6_db_hots_24",
    "titleEn": "Laser Spectral Purity vs Conventional Light Spread",
    "titleAr": "النقاء الطيفي والترابط الزماني والمكاني لشعاع الليزر",
    "difficulty": "hots",
    "questionEn": "Why does a laser beam exhibit an extremely narrow spectral linewidth ($\\Delta \\lambda \\approx 0$) and maintain a constant phase relationship over huge distances?",
    "questionAr": "لماذا يتميز شعاع الليزر بالنقاء الطيفي الفائق (انفراج طيفي ضئيل جداً $\\Delta \\lambda \\approx 0$) والاحتفاظ بفرق طور ثابت عبر مسافات هائلة؟",
    "optionsEn": [
      "Because laser photons travel at twice the speed of regular visible light",
      "Because the laser tube is cooled down to absolute zero to freeze Doppler broadening",
      "Because the beam undergoes total absorption of all out-of-phase photons",
      "Because all photons are generated by stimulated emission from the identical energy transition and propagate in complete temporal and spatial coherence"
    ],
    "optionsAr": [
      "لأن فوتونات الليزر تسير بضعف سرعة الضوء العادي",
      "لأن أنبوبة الليزر تبرد للصفر المطلق لإيقاف تأثير دوبلر",
      "لأن الحزمة تمتص بالكامل جميع الفوتونات غير المتفقة في الطور",
      "لأن جميع فوتوناته ناتجة عن انبعاث مستحث لنفس الانتقال الذري وتنتشر بترابط زماني ومكاني تام"
    ],
    "correctAnswer": "Because all photons are generated by stimulated emission from the identical energy transition and propagate in complete temporal and spatial coherence",
    "correctIndex": 3,
    "hintEn": "Stimulated emission clones the trigger photon in wavelength, phase, and direction.",
    "hintAr": "الانبعاث المستحث ينسخ الفوتون الأصلي تماماً في الطول الموجي والطور والاتجاه.",
    "stepByStepSolutionEn": [
      "In conventional sources, spontaneous emissions occur randomly across different atom lifetimes, resulting in broad spectral lines ($\\Delta \\lambda$) and lack of coherence. In a laser, stimulated emission ensures that every emitted photon is an exact replica of the stimulating photon—having the exact same wavelength, identical phase, and traveling in the exact same direction. This produces extraordinary monochromaticity and spatial/temporal coherence."
    ],
    "stepByStepSolutionAr": [
      "في المصادر الضوئية العادية تنبعث الفوتونات تلقائياً وعشوائياً في أوقات واتجاهات مختلفة فيتسع المدى الطيفي ($\\Delta \\lambda$) وتكون غير مترابطة. أما في الليزر فإن الانبعاث المستحث ينتج فوتونات مستنسخة ومطابقة تماماً للفوتون الحاث في التردد والطور والاتجاه، مما يعطيه نقاءً طيفياً هائلاً وترابطاً زمانياً ومكانياً تاماً."
    ],
    "teacherTipEn": "This coherence is what allows laser light to produce interference patterns across vast optical path differences where ordinary light fails.",
    "teacherTipAr": "هذا الترابط هو الذي يمكن ضوء الليزر من تكوين أهداب تداخل مستقرة حتى مع فروق مسار كبيرة يعجز عنها الضوء العادي."
  },
  {
    "id": "phys_ch6_db_hots_25",
    "titleEn": "Laser Non-Divergence and Inverse Square Law Violation",
    "titleAr": "عدم خضوع شعاع الليزر لقانون التربيع العكسي وتوازيه",
    "difficulty": "hots",
    "questionEn": "A conventional electric lamp obeys the inverse square law of illuminance ($I \\propto \\frac{1}{d^2}$), whereas a laser beam maintains nearly constant intensity over very long distances. Why does laser beam violate the inverse square law?",
    "questionAr": "يخضع المصباح الكهربي العادي لقانون التربيع العكسي في شدة الاستضاءة ($I \\propto \\frac{1}{d^2}$)، بينما يحتفظ شعاع الليزر بشدته ثابتة تقريباً لمسافات بعيدة جداً. ما هو التفسير العلمي لعدم خضوع الليزر لقانون التربيع العكسي؟",
    "optionsEn": [
      "Because the laser beam has negligible divergence, propagating as parallel rays over vast distances without spreading its energy over an expanding spherical area",
      "Because laser photons do not lose energy through gravitational interaction",
      "Because laser photons continuously generate new photons from empty vacuum",
      "Because the laser frequency increases proportionally with distance"
    ],
    "optionsAr": [
      "لأن حزمة الليزر تكاد تكون متوازية وذات انفراجية ضئيلة جداً، فلا تتوزع طاقتها على مساحات كروية متزايدة أثناء الانتشار",
      "لأن فوتونات الليزر لا تفقد طاقة بالتفاعل التثاقلي",
      "لأن فوتونات الليزر تولد فوتونات جديدة باستمرار من الفراغ",
      "لأن تردد الليزر يزداد طردياً مع المسافة المقطوعة"
    ],
    "correctAnswer": "Because the laser beam has negligible divergence, propagating as parallel rays over vast distances without spreading its energy over an expanding spherical area",
    "correctIndex": 0,
    "hintEn": "Conventional light radiates into $4\\pi$ steradians (spherical waves $\\implies \\text{Area} \\propto d^2$). Laser beam is directional and parallel.",
    "hintAr": "الضوء العادي ينتشر على هيئة موجات كروية تتسع مساحتها مع مربع المسافة، بينما حزمة الليزر متوازية وقطرها ثابت تقريباً.",
    "stepByStepSolutionEn": [
      "The inverse square law applies to point sources radiating uniformly in all directions in spherical wavefronts: as the wave expands, its surface area grows as $A = 4\\pi d^2$, diluting intensity as $I = \\frac{P}{4\\pi d^2} \\propto \\frac{1}{d^2}$. A laser, by contrast, emits highly directional, parallel rays with virtually zero beam divergence angle. Its cross-sectional area remains nearly constant over long propagation distances, so its intensity does not diminish with $\\frac{1}{d^2}$."
    ],
    "stepByStepSolutionAr": [
      "ينطبق قانون التربيع العكسي على المصادر الضوئية التي تشع في جميع الاتجاهات على شكل كرات متحدة المركز تزداد مساحتها بمقدار $4\\pi d^2$ فتقل شدة الإضاءة عكسياً مع مربع البعد. أما شعاع الليزر فيتميز بتوازي حزمته وصغر زاوية انفراجها، فتبقى مساحة مقطع الحزمة ثابتة تقريباً أثناء انتشارها ولا تتشتت طاقتها، وبالتالي لا يخضع لقانون التربيع العكسي."
    ],
    "teacherTipEn": "Laser beams can travel from Earth to the Moon and reflect back with negligible beam broadening.",
    "teacherTipAr": "تستطيع حزم الليزر السفر من الأرض إلى القمر والارتداد بانفراجية طفيفة جداً تكفي لقياس المسافة بدقة سنتيمترات."
  },
  {
    "id": "phys_ch6_db_hots_26",
    "titleEn": "Holography 3D Wavefront Reconstruction Principles",
    "titleAr": "أساس التصوير المجسم ثلاثي الأبعاد (الهولوجرام)",
    "difficulty": "hots",
    "questionEn": "Ordinary 2D photography records only light intensity (amplitude squared, $I \\propto A^2$), losing depth information. How does holography successfully record both amplitude AND phase to capture a complete three-dimensional image?",
    "questionAr": "يسجل التصوير الفوتوغرافي العادي ثنائي الأبعاد شدة الضوء فقط (مربع السعة $I \\propto A^2$) ويفقد معلومات التضاريس والعمق. كيف ينجح التصوير المجسم (الهولوجرام) في تسجيل السعة والطور معاً لحفظ صورة ثلاثية الأبعاد كاملة؟",
    "optionsEn": [
      "By taking photos using three colored filters simultaneously",
      "By splitting a coherent laser beam into an object beam and a reference beam, then superposing them on the photographic plate to record their interference pattern",
      "By using X-rays to scan the inside of the object like a CT scan",
      "By using a curved lens that rotates around the photographic film during exposure"
    ],
    "optionsAr": [
      "بالتقاط صور باستخدام ثلاثة مرشحات ضوئية ملونة في نفس اللحظة",
      "بتقسيم شعاع ليزر مترابط إلى حزمة جسمية وحزمة مرجعية، وتداخلهما معاً على اللوح الفوتوغرافي لتسجيل نمط التداخل",
      "باستخدام الأشعة السينية لمسح باطن الجسم مثل الأشعة المقطعية",
      "باستخدام عدسة منحنية تدور حول الفيلم الفوتوغرافي أثناء التعريض"
    ],
    "correctAnswer": "By splitting a coherent laser beam into an object beam and a reference beam, then superposing them on the photographic plate to record their interference pattern",
    "correctIndex": 1,
    "hintEn": "Interference between object beam (varying phase) and reference beam (known constant phase) converts phase differences into intensity fringes.",
    "hintAr": "التداخل بين الأشعة المنعكسة عن الجسم والأشعة المرجعية يحول فروق الطور إلى أهداب تداخل تسجل التضاريس والعمق.",
    "stepByStepSolutionEn": [
      "To record the phase of light scattered from an object, holography uses a coherent laser beam divided into two paths: the object beam reflects off the object (carrying both amplitude variations and phase variations reflecting surface contours), while the reference beam reflects off a flat mirror directly to the film with a uniform phase. Their superposition creates an interference pattern (the hologram) that encodes both phase and amplitude information."
    ],
    "stepByStepSolutionAr": [
      "تسجيل طور الموجات المنعكسة عن تضاريس الجسم يتم باستخدام شعاع ليزر متماسك يقسم إلى حزمتين: حزمة تسقط على الجسم وتنعكس حاملة معلومات الشدة والطور (فروق المسار للتضاريس)، وحزمة مرجعية تسقط على مرآة مستوية بنفس الطور. عند تلاقي الحزمتين على اللوح الفوتوغرافي تتداخلان ويسجل نمط التداخل (الهولوجرام) معلومات الشدة والطور معاً."
    ],
    "teacherTipEn": "When the developed hologram is illuminated with the same reference beam, diffraction reconstructs the exact original wavefront, revealing a true 3D image.",
    "teacherTipAr": "عند إضاءة الهولوجرام بنفس الحزمة المرجعية يحدث حيود يعيد بناء صدر الموجة الأصلي فيرى المشاهد جسماً مجسماً ثلاثي الأبعاد."
  },
  {
    "id": "phys_ch6_db_hots_27",
    "titleEn": "Phase Difference to Path Difference Quantitative Formula",
    "titleAr": "العلاقة الرياضية بين فرق الطور وفرق المسار في الهولوجرافي",
    "difficulty": "hots",
    "questionEn": "In holography, what is the exact mathematical relationship between the phase difference ($\\Delta \\phi$) between two rays reflected from different depths on the object's surface and their optical path difference ($\\Delta x$)?",
    "questionAr": "في التصوير المجسم، ما هي العلاقة الرياضية الدقيقة بين فرق الطور ($\\Delta \\phi$) بين شعاعين منعكسين من عمقين مختلفين على سطح الجسم وفرق المسار بينهما ($\\Delta x$)؟",
    "optionsEn": [
      "$\\Delta \\phi = \\frac{\\lambda}{2\\pi} \\Delta x$",
      "$\\Delta \\phi = 2\\pi \\lambda \\Delta x$",
      "$\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x$",
      "$\\Delta \\phi = \\frac{\\pi}{\\lambda} (\\Delta x)^2$"
    ],
    "optionsAr": [
      "$\\Delta \\phi = \\frac{\\lambda}{2\\pi} \\Delta x$",
      "$\\Delta \\phi = 2\\pi \\lambda \\Delta x$",
      "$\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x$",
      "$\\Delta \\phi = \\frac{\\pi}{\\lambda} (\\Delta x)^2$"
    ],
    "correctAnswer": "$\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x$",
    "correctIndex": 2,
    "hintEn": "A path difference of one full wavelength ($\\Delta x = \\lambda$) corresponds to a phase shift of one full cycle ($2\\pi$ radians).",
    "hintAr": "فرق مسار مقداره طول موجي كامل ($\\lambda$) يكافئ فرق طور مقداره دورة كاملة ($2\\pi$ راديان).",
    "stepByStepSolutionEn": [
      "The fundamental wave relationship relating spatial distance to wave angle is: $\\frac{\\Delta \\phi}{2\\pi} = \\frac{\\Delta x}{\\lambda} \\implies \\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x$. Therefore, variations in surface depth ($\\Delta x$) translate directly into phase differences ($\\Delta \\phi$) encoded on the photographic emulsion through interference fringes."
    ],
    "stepByStepSolutionAr": [
      "العلاقة الأساسية للطور في الأمواج: $\\frac{\\text{فرق الطور}}{2\\pi} = \\frac{\\text{فرق المسار}}{\\lambda}$، ومنها نجد أن $\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\times \\Delta x$. وبذلك فإن التباين في عمق تضاريس سطح الجسم ($\\Delta x$) يتحول إلى فروق في الطور ($\\Delta \\phi$) تسجل في صورة أهداب تداخل."
    ],
    "teacherTipEn": "Example: If path difference is $\\Delta x = \\frac{\\lambda}{2}$, phase difference is $\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\frac{\\lambda}{2} = \\pi\\text{ rad} = 180^\\circ$ (destructive interference minimum).",
    "teacherTipAr": "مثال: إذا كان فرق المسار $\\Delta x = \\frac{\\lambda}{2}$، فإن فرق الطور يساوي $\\pi\\text{ rad} = 180^\\circ$ فيحدث تداخل هدام."
  },
  {
    "id": "phys_ch6_db_hots_28",
    "titleEn": "Holographic Phase Difference Numerical Calculation",
    "titleAr": "حساب فرق الطور لشعاعين في الهولوجرام بمعلومية فرق المسار",
    "difficulty": "hots",
    "questionEn": "Two laser rays reflecting from adjacent contours of an object have a path difference of $\\Delta x = \\frac{3}{4}\\lambda$. What is the resulting phase difference between the two rays?",
    "questionAr": "شعاعان من الليزر انعكسا من نقطتين مختلفتين في تضاريس جسم وكان فرق المسار بينهما $\\Delta x = \\frac{3}{4}\\lambda$. ما هو فرق الطور الناتج بين الشعاعين؟",
    "optionsEn": [
      "$\\frac{3}{4}\\pi\\text{ radians}$ ($135^\\circ$)",
      "$3\\pi\\text{ radians}$ ($540^\\circ$)",
      "$\\frac{2}{3}\\pi\\text{ radians}$ ($120^\\circ$)",
      "$\\frac{3}{2}\\pi\\text{ radians}$ ($270^\\circ$)"
    ],
    "optionsAr": [
      "$\\frac{3}{4}\\pi\\text{ radians}$ ($135^\\circ$)",
      "$3\\pi\\text{ radians}$ ($540^\\circ$)",
      "$\\frac{2}{3}\\pi\\text{ radians}$ ($120^\\circ$)",
      "$\\frac{3}{2}\\pi\\text{ radians}$ ($270^\\circ$)"
    ],
    "correctAnswer": "$\\frac{3}{2}\\pi\\text{ radians}$ ($270^\\circ$)",
    "correctIndex": 3,
    "hintEn": "$\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x$. Substitute $\\Delta x = \\frac{3}{4}\\lambda$.",
    "hintAr": "فرق الطور $= \\frac{2\\pi}{\\lambda} \\times \\text{فرق المسار}$.",
    "stepByStepSolutionEn": [
      "$\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\Delta x = \\frac{2\\pi}{\\lambda} \\left(\\frac{3}{4}\\lambda\\right) = \\frac{6\\pi}{4} = \\frac{3}{2}\\pi\\text{ radians} = 270^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta \\phi = \\frac{2\\pi}{\\lambda} \\times \\left(\\frac{3}{4}\\lambda\\right) = \\frac{3}{2}\\pi\\text{ rad} = 270^\\circ$."
    ],
    "teacherTipEn": "Path difference of $\\lambda$ corresponds to $2\\pi$; multiplying $\\frac{3}{4}$ by $2\\pi$ yields $\\frac{3}{2}\\pi$.",
    "teacherTipAr": "كل طول موجي $\\lambda$ يكافئ طوراً مقداره $2\\pi$، إذن ثلاثة أرباع طول موجي يكافئ $\\frac{3}{2}\\pi$."
  },
  {
    "id": "phys_ch6_db_hots_29",
    "titleEn": "Intrinsic Semiconductor vs Metallic Conductor Thermal Response",
    "titleAr": "مقارنة تأثير الحرارة على توصيلية شبه الموصل النقي والموصل المعدني",
    "difficulty": "hots",
    "questionEn": "How does increasing temperature affect the electrical conductivity of an intrinsic semiconductor (e.g., pure Silicon) compared to a metallic conductor (e.g., Copper)?",
    "questionAr": "كيف يؤثر رفع درجة الحرارة على التوصيلية الكهربية لشبه موصل نقي (مثل السيليكون) مقارنة بموصل فلزي (مثل النحاس)؟",
    "optionsEn": [
      "Semiconductor conductivity increases (thermal energy breaks covalent bonds, generating electron-hole pairs), whereas metal conductivity decreases (increased lattice vibrations impede electron flow)",
      "Both semiconductor and metal conductivities increase significantly with temperature",
      "Both semiconductor and metal conductivities decrease as temperature rises",
      "Semiconductor conductivity drops to zero while metal conductivity remains unchanged"
    ],
    "optionsAr": [
      "تزداد توصيلية شبه الموصل (لأن الحرارة تكسر روابط تساهمية وتحرر إلكترونات وفجوات)، بينما تقل توصيلية الفلز (لزيادة سعة اهتزاز الذرات التي تعيق حركة الإلكترونات الحرة)",
      "تزداد توصيلية كل من شبه الموصل والفلز بدرجة كبيرة مع رفع الحرارة",
      "تقل توصيلية كل من شبه الموصل والفلز مع زيادة درجة الحرارة",
      "تنعدم توصيلية شبه الموصل بينما تظل توصيلية الفلز ثابتة"
    ],
    "correctAnswer": "Semiconductor conductivity increases (thermal energy breaks covalent bonds, generating electron-hole pairs), whereas metal conductivity decreases (increased lattice vibrations impede electron flow)",
    "correctIndex": 0,
    "hintEn": "Pure semiconductor has no free carriers at $0\\text{ K}$; heat creates carriers. Metal has plenty of carriers; heat increases lattice collision resistance.",
    "hintAr": "شبه الموصل يحتاج حرارة لتحرير حاملات شحنة بكسر الروابط، بينما الفلز يمتلك إلكترونات حرة بالفعل والحرارة تزيد من تصادماتها فترتفع مقاومته.",
    "stepByStepSolutionEn": [
      "In intrinsic semiconductors, valence electrons are bound in covalent bonds. Heating breaks these bonds, producing free electrons in the conduction band and holes in the valence band, exponentially raising carrier concentration and electrical conductivity. In metals, carrier density is already fixed and very high; heating increases thermal vibrations of lattice ions, causing more frequent electron scattering, which increases resistivity and decreases conductivity."
    ],
    "stepByStepSolutionAr": [
      "في شبه الموصل النقي، تكون الإلكترونات مقيدة بروابط تساهمية. رفع الحرارة يؤدي لكسر بعض هذه الروابط وتحرير إلكترونات وفجوات، فيزداد تركيز حاملات الشحنة وتزداد التوصيلية الكهربية (تقل المقاومة). أما في الفلزات، فالإلكترونات الحرة متوفرة بكثرة، ورفع الحرارة يزيد من سعة اهتزاز أنوية وذرات الفلز فيزداد معدل تصادمها مع الإلكترونات مما يرفع المقاومة ويقلل التوصيلية."
    ],
    "teacherTipEn": "At absolute zero ($0\\text{ K}$ or $-273^\\circ\\text{C}$), an intrinsic semiconductor acts as a perfect insulator because all covalent bonds are intact.",
    "teacherTipAr": "عند الصفر المطلق ($0\\text{ K}$) يعتبر شبه الموصل النقي عازلاً تماماً لاكتمال جميع الروابط التساهمية."
  },
  {
    "id": "phys_ch6_db_hots_30",
    "titleEn": "Intrinsic Semiconductor Electrical Behavior at Absolute Zero",
    "titleAr": "السلوك الكهربي لشبه الموصل النقي عند الصفر المطلق",
    "difficulty": "hots",
    "questionEn": "At absolute zero temperature ($0\\text{ K}$ or $-273.15^\\circ\\text{C}$), the electrical conductivity of an intrinsic pure silicon crystal is:",
    "questionAr": "عند درجة الصفر المطلق ($0\\text{ K}$ أو $-273.15^\\circ\\text{C}$)، تكون التوصيلية الكهربية لبلورة سيليكون نقية تماماً مساوية لـ:",
    "optionsEn": [
      "Infinite (it becomes a high-temperature superconductor)",
      "Zero (it acts as a perfect electrical insulator because all covalent bonds are fully intact and no free carriers exist)",
      "Equal to that of pure metallic silver",
      "Determined strictly by the applied voltage across its terminals"
    ],
    "optionsAr": [
      "مالانهاية (تصبح موصلاً فائق التوصيل)",
      "صفر (تسلك كعازل تام للكهرباء لعدم وجود أي روابط مكسورة وانعدام حاملات الشحنة الحرة)",
      "مساوية لتوصيلية الفضة النقية",
      "تتحدد فقط بمقدار الجهد المطبق على طرفي البلورة"
    ],
    "correctAnswer": "Zero (it acts as a perfect electrical insulator because all covalent bonds are fully intact and no free carriers exist)",
    "correctIndex": 1,
    "hintEn": "No thermal energy is available to break covalent bonds at $0\\text{ K}$.",
    "hintAr": "لا توجد طاقة حرارية لكسر أي رابطة تساهمية عند الصفر المطلق.",
    "stepByStepSolutionEn": [
      "At absolute zero ($0\\text{ K}$), thermal energy is zero. All valence electrons are locked rigidly into stable covalent bonds between silicon atoms. The conduction band is completely empty and the valence band is completely full. With neither free electrons nor mobile holes present, the intrinsic crystal has zero electrical conductivity and behaves as a perfect insulator."
    ],
    "stepByStepSolutionAr": [
      "عند درجة الصفر المطلق تنعدم الطاقة الحرارية، وتكون جميع الروابط التساهمية بين ذرات السيليكون سليمة ومكتملة تماماً، وتخلو حزمة التوصيل من أي إلكترونات حرة كما تخلو حزمة التكافؤ من أي فجوات، فتنعدم التوصيلية الكهربية تماماً وتسلك البلورة سلوك مادة عازلة تماماً."
    ],
    "teacherTipEn": "To make semiconductors conduct at room temperature, they must either be heated or doped with donor/acceptor impurities.",
    "teacherTipAr": "لكي تصبح أشباه الموصلات موصلة للكهرباء، يلزم إما تسخينها أو تطعيمها بشوائب مانحة أو مستقبلة."
  },
  {
    "id": "phys_ch6_db_hots_31",
    "titleEn": "Law of Mass Action in Doped Semiconductors",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات المطعمة",
    "difficulty": "hots",
    "questionEn": "In a doped semiconductor at thermal equilibrium, what is the mathematical expression for the Law of Mass Action relating electron concentration $n$, hole concentration $p$, and intrinsic carrier concentration $n_i$?",
    "questionAr": "في شبه الموصل المطعم عند الاتزان الحراري، ما هو التعبير الرياضي لقانون فعل الكتلة الذي يربط بين تركيز الإلكترونات الحرة $n$ وتركيز الفجوات $p$ والتركيز الأصلي $n_i$؟",
    "optionsEn": [
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n \\cdot p = n_i^2$",
      "$n \\cdot p = 2n_i$"
    ],
    "optionsAr": [
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n \\cdot p = n_i^2$",
      "$n \\cdot p = 2n_i$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 2,
    "hintEn": "The product of positive and negative carrier concentrations is constant at a given temperature.",
    "hintAr": "حاصل ضرب تركيزي الإلكترونات الحرة والفجوات مقدار ثابت عند ثبوت درجة الحرارة.",
    "stepByStepSolutionEn": [
      "The Law of Mass Action states that under thermal equilibrium at any fixed temperature, the product of the free electron concentration $n$ and hole concentration $p$ is constant and equals the square of the intrinsic carrier concentration: $n \\cdot p = n_i^2$. Adding donor impurities increases $n$, which forces $p$ to decrease by recombination so that $n \\cdot p = n_i^2$ remains satisfied."
    ],
    "stepByStepSolutionAr": [
      "ينص قانون فعل الكتلة على أنه في بلورة شبه الموصل عند درجة حرارة ثابتة، يكون حاصل ضرب تركيز الإلكترونات الحرة $n$ في تركيز الفجوات الموجبة $p$ مقداراً ثابتاً يساوي مربع تركيز أي منهما في البلورة النقية: $n \\cdot p = n_i^2$. إذا زاد تركيز أحدهما بالتطعيم قل تركيز الآخر نتيجة زيادة معدل الالتئام ليظل حاصل ضربهما ثابتاً."
    ],
    "teacherTipEn": "Notice: If donors are added ($N_D \\gg n_i$), then $n \\approx N_D^+$ and $p = \\frac{n_i^2}{N_D^+}$.",
    "teacherTipAr": "انتبه: في البلورة السالبة $n \\approx N_D$، وتركيز الفجوات يحسب من $p = \\frac{n_i^2}{N_D}$."
  },
  {
    "id": "phys_ch6_db_hots_32",
    "titleEn": "Mass Action Law Quantitative Hole Concentration Calculation",
    "titleAr": "مسألة حساب تركيز الفجوات في بلورة سيليكون مطعمة بالفوسفور",
    "difficulty": "hots",
    "questionEn": "A pure silicon crystal has an intrinsic carrier concentration of $n_i = 10^{10}\\text{ cm}^{-3}$. It is doped with phosphorus atoms (pentavalent) at a concentration of $N_D = 10^{14}\\text{ cm}^{-3}$. Assuming complete ionization, what is the concentration of holes $p$ in this n-type crystal?",
    "questionAr": "بلورة سيليكون نقية تركيز الإلكترونات فيها $n_i = 10^{10}\\text{ cm}^{-3}$. طُعمت بذرات فوسفور خماسية التكافؤ بتركيز $N_D = 10^{14}\\text{ cm}^{-3}$. بافتراض تمام التأين، ما هو تركيز الفجوات الموجبة $p$ في هذه البلورة؟",
    "optionsEn": [
      "$p = 10^{10}\\text{ cm}^{-3}$",
      "$p = 10^4\\text{ cm}^{-3}$",
      "$p = 10^{14}\\text{ cm}^{-3}$",
      "$p = 10^6\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$p = 10^{10}\\text{ cm}^{-3}$",
      "$p = 10^4\\text{ cm}^{-3}$",
      "$p = 10^{14}\\text{ cm}^{-3}$",
      "$p = 10^6\\text{ cm}^{-3}$"
    ],
    "correctAnswer": "$p = 10^6\\text{ cm}^{-3}$",
    "correctIndex": 3,
    "hintEn": "Use $n \\approx N_D$ and $p = \\frac{n_i^2}{n}$.",
    "hintAr": "استخدم القانون: $n \\approx N_D$ ثم $p = \\frac{n_i^2}{N_D}$.",
    "stepByStepSolutionEn": [
      "In an n-type semiconductor with $N_D \\gg n_i$, the electron concentration is $n \\approx N_D = 10^{14}\\text{ cm}^{-3}$. By the Law of Mass Action: $p = \\frac{n_i^2}{n} = \\frac{(10^{10})^2}{10^{14}} = \\frac{10^{20}}{10^{14}} = 10^6\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "في البلورة من النوع السالب، تركيز الإلكترونات $n \\approx N_D = 10^{14}\\text{ cm}^{-3}$. من قانون فعل الكتلة: $p = \\frac{n_i^2}{n} = \\frac{(10^{10})^2}{10^{14}} = \\frac{10^{20}}{10^{14}} = 10^6\\text{ cm}^{-3}$."
    ],
    "teacherTipEn": "Electrons are the majority carriers ($10^{14}\\text{ cm}^{-3}$) and holes are the minority carriers ($10^6\\text{ cm}^{-3}$).",
    "teacherTipAr": "الإلكترونات هي حاملات الشحنة السائدة (الأغلبية) والفجوات هي حاملات الشحنة الأقلية."
  },
  {
    "id": "phys_ch6_db_hots_33",
    "titleEn": "Extrinsic Semiconductor Electrical Neutrality Principle",
    "titleAr": "التعادل الكهربي لبلورة شبه الموصل من النوع الموجب أو السالب",
    "difficulty": "hots",
    "questionEn": "Why is an n-type semiconductor crystal (or a p-type semiconductor crystal) as a whole electrically neutral ($Q_{\\text{net}} = 0$)?",
    "questionAr": "لماذا تكون بلورة شبه الموصل من النوع السالب (أو النوع الموجب) ككل متعادلة كهربياً ($Q_{\\text{net}} = 0$)؟",
    "optionsEn": [
      "Because the total positive charges (holes plus donor positive ions) exactly balance the total negative charges (free electrons plus acceptor negative ions)",
      "Because donor atoms destroy all electron charges upon entering the lattice",
      "Because negative electrons cancel out by turning into neutral neutrons",
      "Because the crystal contains neither positive nor negative charges"
    ],
    "optionsAr": [
      "لأن مجموع الشحنات الموجبة (الفجوات والأيونات الموجبة) يساوي تماماً مجموع الشحنات السالبة (الإلكترونات الحرة والأيونات السالبة)",
      "لأن ذرات الشوائب تلغي شحنات الإلكترونات عند دخولها للبلورة",
      "لأن الإلكترونات السالبة تتحول إلى نيوترونات متعادلة",
      "لأن البلورة لا تحتوي على أي شحنات موجبة أو سالبة على الإطلاق"
    ],
    "correctAnswer": "Because the total positive charges (holes plus donor positive ions) exactly balance the total negative charges (free electrons plus acceptor negative ions)",
    "correctIndex": 0,
    "hintEn": "The general condition of neutrality is $n + N_A^- = p + N_D^+$.",
    "hintAr": "شرط التعادل الكهربي العام: $n + N_A^- = p + N_D^+$.",
    "stepByStepSolutionEn": [
      "Doping introduces neutral donor or acceptor atoms into a neutral silicon host. In an n-type crystal, each pentavalent donor donates one free electron ($n$) and becomes a bound positive ion ($N_D^+$). Total negative charge equals free electrons: $n$; total positive charge equals holes plus positive donor ions: $p + N_D^+$. Since $n = p + N_D^+$, total positive charge equals total negative charge, and the crystal remains strictly electrically neutral."
    ],
    "stepByStepSolutionAr": [
      "التطعيم يتم بذرات شوائب متعادلة كهربياً تضاف لبلورة سيليكون متعادلة. في البلورة السالبة، كل ذرة فوسفور تفقد إلكتروناً حراً وتتحول إلى أيون موجب مقيد في الشبكة البلورية، ويكون مجموع الشحنات السالبة ($n$) مساوياً لمجموع الشحنات الموجبة ($p + N_D^+$)، فتظل البلورة ككل متعادلة كهربياً."
    ],
    "teacherTipEn": "Common student pitfall: 'n-type' refers to the polarity of the MAJORITY mobile carrier, NOT a net negative charge of the solid!",
    "teacherTipAr": "خطأ شائع يقع فيه الطلاب: تسمية 'نوع سالب n-type' تعني أن الأغلبية من حاملات الشحنة المتحركة سالبة، ولا تعني أبداً أن البلورة مشحونة بشحنة سالبة!"
  },
  {
    "id": "phys_ch6_db_hots_34",
    "titleEn": "P-N Junction Depletion Region Formation Dynamics",
    "titleAr": "ديناميكية تكون منطقة النضوب في الوصلة الثنائية",
    "difficulty": "hots",
    "questionEn": "When a p-type semiconductor and an n-type semiconductor are joined to form a p-n junction, how does the depletion region form at the interface?",
    "questionAr": "عند تلامس شبه موصل موجب مع شبه موصل سالب لتكوين وصلة ثنائية (p-n)، كيف تتكون منطقة النضوب (الخالية من حاملات الشحنة) عند موضع الاتصال؟",
    "optionsEn": [
      "Mobile carriers freeze in place and form an insulating diamond layer",
      "Electrons diffuse from the n-side to the p-side and holes diffuse from the p-side to the n-side, recombining and leaving behind uncompensated positive donor ions on the n-side and negative acceptor ions on the p-side",
      "Positive and negative carriers permanently annihilate into gamma photons that escape the junction",
      "The battery inside the crystal produces a magnetic field that repels all carriers"
    ],
    "optionsAr": [
      "تتجمد حاملات الشحنة في مكانها وتتحول إلى طبقة ماسية عازلة",
      "تنتشر الإلكترونات من المنطقة n إلى p وتنتشر الفجوات من p إلى n ويلتئمان معاً تاركين أيونات موجبة غير معوضة في جانب n وأيونات سالبة في جانب p",
      "تتلاشى الشحنات الموجبة والسالبة نهائياً وتتحول إلى فوتونات جاما تخرج من الوصلة",
      "تنتج بطارية داخلية مجالاً مغناطيسياً يطرد جميع الشحنات بعيداً"
    ],
    "correctAnswer": "Electrons diffuse from the n-side to the p-side and holes diffuse from the p-side to the n-side, recombining and leaving behind uncompensated positive donor ions on the n-side and negative acceptor ions on the p-side",
    "correctIndex": 1,
    "hintEn": "Diffusion current of majority carriers is opposed by the drift current created by the internal electric field until equilibrium is reached.",
    "hintAr": "تيار انتشار حاملات الأغلبية يولد مجالاً داخلياً يسبب تيار انسياق يعاكسه حتى يحدث الاتزان.",
    "stepByStepSolutionEn": [
      "Due to concentration gradients across the interface, free electrons diffuse from n-type into p-type and holes diffuse from p-type into n-type. Across the boundary, these carriers recombine and disappear. Consequently, fixed donor positive ions are exposed on the n-side and fixed acceptor negative ions are exposed on the p-side. This layer is 'depleted' of mobile charge carriers and establishes an internal barrier electric field pointing from n to p that halts further diffusion."
    ],
    "stepByStepSolutionAr": [
      "بسبب فرق التركيز الكبير، تنتشر الإلكترونات الحرة من المنطقة n إلى p وتنتشر الفجوات من p إلى n. عند موضع التلامس تلتقي هذه الشحنات وتلتئم، فتخلو المنطقة من حاملات الشحنة الحرة وتستقر أيونات مانحة موجبة مقيدة في جانب n وأيونات مستقبلة سالبة مقيدة في جانب p، وتسمى هذه المنطقة بالمنطقة الفاصلة (أو القاحلة/النضوب)، وتنشئ مجالاً داخلياً يمنع استمرار الانتشار ويسمى بجهد الحاجز."
    ],
    "teacherTipEn": "The potential across this barrier in silicon is approximately $0.7\\text{ V}$ at room temperature.",
    "teacherTipAr": "يبلغ الجهد الحاجز في وصلات السيليكون حوالي $0.7\\text{ V}$ عند درجة حرارة الغرفة."
  },
  {
    "id": "phys_ch6_db_hots_35",
    "titleEn": "P-N Diode Forward vs Reverse Biasing Electric Field Behavior",
    "titleAr": "تأثير التوصيل الأمامي والعكسي على الجهد الحاجز للوصلة الثنائية",
    "difficulty": "hots",
    "questionEn": "In a p-n junction diode, how do forward and reverse bias connections affect the barrier potential and the width of the depletion layer?",
    "questionAr": "في الوصلة الثنائية (الدايود)، كيف يؤثر كل من التوصيل الأمامي والتوصيل العكسي على الجهد الحاجز وعرض منطقة النضوب؟",
    "optionsEn": [
      "In forward bias, depletion layer widens; in reverse bias, depletion layer disappears completely",
      "Both biasing modes widen the depletion layer and stop all current",
      "In forward bias, external field opposes internal field $\\implies$ depletion layer narrows and barrier decreases; in reverse bias, external field aids internal field $\\implies$ depletion layer widens and barrier increases",
      "Neither biasing mode affects the depletion layer width or the barrier potential"
    ],
    "optionsAr": [
      "في التوصيل الأمامي تتسع منطقة النضوب، وفي التوصيل العكسي تختفي منطقة النضوب تماماً",
      "كلا النوعين من التوصيل يؤدي إلى اتساع منطقة النضوب وانقطاع التيار تماماً",
      "في التوصيل الأمامي يعاكس المجال الخارجي المجال الداخلي فتقل منطقة النضوب ويقل الجهد الحاجز؛ وفي التوصيل العكسي يدعم المجال الخارجي المجال الداخلي فتتسع منطقة النضوب ويزداد الجهد الحاجز",
      "لا يؤثر أي من نوعي التوصيل على عرض منطقة النضوب أو مقدار الجهد الحاجز"
    ],
    "correctAnswer": "In forward bias, external field opposes internal field $\\implies$ depletion layer narrows and barrier decreases; in reverse bias, external field aids internal field $\\implies$ depletion layer widens and barrier increases",
    "correctIndex": 2,
    "hintEn": "Forward: (+) to p, (-) to n $\\implies$ field opposes internal field. Reverse: (+) to n, (-) to p $\\implies$ field reinforces internal field.",
    "hintAr": "أمامي: الموجب بالـ p والسالب بالـ n فيعاكس المجال الداخلي. عكسي: الموجب بالـ n والسالب بالـ p فيعزز المجال الداخلي.",
    "stepByStepSolutionEn": [
      "In forward bias (positive terminal to p-type, negative to n-type), the external electric field opposes the internal built-in field. When $V_{\\text{ext}} > V_{\\text{barrier}}$, the barrier potential is overcome, the depletion layer shrinks, and majority carriers cross easily (very low forward resistance). In reverse bias, the external field aligns with the internal field, repelling majority carriers away from the interface, which widens the depletion layer, elevates the potential barrier, and blocks current (virtually infinite reverse resistance)."
    ],
    "stepByStepSolutionAr": [
      "في التوصيل الأمامي (القطب الموجب بالبلورة p والسالب بالبلورة n) يكون المجال الخارجي في عكس اتجاه المجال الداخلي للوصلة، فعندما يتجاوز الجهد الخارجي جهد الحاجز تتغلب الشحنات عليه ويقل سمك منطقة النضوب وتقل مقاومة الوصلة ويمر تيار كبير. أما في التوصيل العكسي فيكون المجالان في نفس الاتجاه، فتنجذب الشحنات نحو أقطاب البطارية مما يوسع منطقة النضوب ويزيد الجهد الحاجز وتصبح المقاومة كبيرة جداً وينعدم التيار تقريباً."
    ],
    "teacherTipEn": "This one-way conduction property makes the p-n junction ideal for alternating current (AC) rectification.",
    "teacherTipAr": "هذه الخاصية (السماح بمرور التيار في اتجاه واحد فقط) تجعل الوصلة الثنائية مثالية لتقويم التيار المتردد."
  },
  {
    "id": "phys_ch6_db_hots_36",
    "titleEn": "Diode Half-Wave Rectification Waveform and Efficiency",
    "titleAr": "تقويم التيار المتردد نصف موجياً باستخدام الوصلة الثنائية",
    "difficulty": "hots",
    "questionEn": "When a sinusoidal AC voltage is applied to a single p-n junction diode in series with a load resistor, what is the nature of the output current across the load?",
    "questionAr": "عند تطبيق جهد متردد جيبي على وصلة ثنائية موصلة على التوالي مع مقاومة حمل، ما هي طبيعة التيار المار في المقاومة؟",
    "optionsEn": [
      "Smooth, pure direct current identical to that of a DC battery",
      "Sinusoidal alternating current with doubled frequency",
      "Zero current, because diodes block all alternating voltages",
      "Pulsating direct current (half-wave rectified), flowing only during the forward-biased half cycles"
    ],
    "optionsAr": [
      "تيار مستمر نقي وثابت الشدة تماماً مثل تيار البطارية",
      "تيار متردد جيبي ولكن بضعف التردد الأصلي",
      "انعدام تام للتيار لأن الوصلة تعوق جميع التيارات المترددة",
      "تيار موحد الاتجاه نبضي (تقويم نصف موجي)، يمر فقط خلال أنصاف الدورات التي تكون فيها الوصلة في وضع انحياز أمامي"
    ],
    "correctAnswer": "Pulsating direct current (half-wave rectified), flowing only during the forward-biased half cycles",
    "correctIndex": 3,
    "hintEn": "Diode conducts when forward-biased and blocks current when reverse-biased.",
    "hintAr": "الوصلة تسمح بمرور التيار في نصف الدورة الأمامي وتمنعه في نصف الدورة العكسي.",
    "stepByStepSolutionEn": [
      "During the positive half-cycle where the diode anode (p) is positive relative to cathode (n), the diode is forward-biased and conducts current through the load. During the negative half-cycle, the polarity reverses, the diode becomes reverse-biased with high resistance, and current drops to zero. The resulting current across the load flows in only one direction in pulsating pulses: half-wave rectification."
    ],
    "stepByStepSolutionAr": [
      "خلال نصف الدورة الموجب عندما يكون جهد المصعد (p) موجباً بالنسبة للمهبط (n)، تكون الوصلة في حالة انحياز أمامي وتسمح بمرور التيار في مقاومة الحمل. وخلال نصف الدورة السالب تنعكس القطبية فتصبح الوصلة في حالة انحياز عكسي وتمنع مرور التيار، فيخرج التيار في اتجاه واحد على هيئة نبضات تيار موحدة الاتجاه، وهو ما يسمى بالتقويم نصف الموجي."
    ],
    "teacherTipEn": "Full-wave rectification uses four diodes arranged in a bridge (Graetz bridge) to utilize both half-cycles.",
    "teacherTipAr": "لتحقيق التقويم الموجي الكامل (استغلال نصفي الدورة معاً) تستخدم دائرة قنطرة تتكون من 4 وصلات ثنائية."
  },
  {
    "id": "phys_ch6_db_hots_37",
    "titleEn": "Transistor Inverter Switch Cutoff vs Saturation Operation",
    "titleAr": "عمل الترانزستور كمفتاح عاكس (بوابة نفي NOT)",
    "difficulty": "hots",
    "questionEn": "In an npn transistor circuit connected in common-emitter configuration acting as a switch (inverter), what are the states of the output voltage $V_{CE}$ when the input voltage $V_{in}$ is HIGH (Logic 1) and when it is LOW (Logic 0)?",
    "questionAr": "في دائرة ترانزستور npn متصل بطريقة الباعث المشترك ويعمل كمفتاح عاكس (بوابة NOT)، ما هي حالة جهد الخرج $V_{CE}$ عندما يكون جهد الدخل $V_{in}$ مرتفعاً (1)، وعندما يكون منخفضاً (0)؟",
    "optionsEn": [
      "When $V_{in}$ is HIGH, transistor is in saturation (ON) and $V_{CE} \\approx 0\\text{ V}$ (LOW); when $V_{in}$ is LOW, transistor is in cutoff (OFF) and $V_{CE} \\approx V_{CC}$ (HIGH)",
      "When $V_{in}$ is HIGH, $V_{CE}$ is HIGH; when $V_{in}$ is LOW, $V_{CE}$ is LOW",
      "$V_{CE}$ remains constantly at zero regardless of $V_{in}$",
      "$V_{CE}$ is equal to the base-emitter voltage at all times"
    ],
    "optionsAr": [
      "عندما يكون الدخل مرتفعاً (1) يكون الترانزستور في حالة تشبع (مغلق ON) ويكون الخرج $V_{CE} \\approx 0\\text{ V}$ (منخفض 0)؛ وعندما يكون الدخل منخفضاً (0) يكون الترانزستور في حالة قطع (مفتوح OFF) ويكون الخرج $V_{CE} \\approx V_{CC}$ (مرتفع 1)",
      "عندما يكون الدخل مرتفعاً يكون الخرج مرتفعاً، وعندما يكون الدخل منخفضاً يكون الخرج منخفضاً",
      "يظل جهد الخرج مساوياً للصفر دائماً بصرف النظر عن جهد الدخل",
      "يكون جهد الخرج مساوياً لجهد القاعدة-الباعث في جميع الأحوال"
    ],
    "correctAnswer": "When $V_{in}$ is HIGH, transistor is in saturation (ON) and $V_{CE} \\approx 0\\text{ V}$ (LOW); when $V_{in}$ is LOW, transistor is in cutoff (OFF) and $V_{CE} \\approx V_{CC}$ (HIGH)",
    "correctIndex": 0,
    "hintEn": "Output equation: $V_{CC} = V_{CE} + I_C R_C \\implies V_{CE} = V_{CC} - I_C R_C$.",
    "hintAr": "معادلة دائرة المجمع: $V_{CE} = V_{CC} - I_C R_C$. عند زيادة $I_C$ يقل $V_{CE}$.",
    "stepByStepSolutionEn": [
      "From the load-line equation $V_{CE} = V_{CC} - I_C R_C$: (1) When $V_{in}$ is HIGH, base current $I_B$ flows, driving the transistor into saturation where collector current $I_C$ reaches its maximum, so $I_C R_C \\approx V_{CC}$ and $V_{CE} \\approx 0$ (Output = 0). (2) When $V_{in}$ is LOW (or zero), $I_B = 0 \\implies I_C = 0$, so no voltage drops across $R_C$ and $V_{CE} = V_{CC}$ (Output = 1). Thus, it inverts the digital signal (NOT gate)."
    ],
    "stepByStepSolutionAr": [
      "من معادلة خرج الترانزستور $V_{CE} = V_{CC} - I_C R_C$: 1) عند تطبيق جهد دخل مرتفع (1) على القاعدة، يمر تيار قاعدة كبير مما يؤدي لمرور أقصى تيار مجمع $I_C$ (حالة تشبع)، فيكون هبوط الجهد عبر المقاومة $I_C R_C \\approx V_{CC}$ ويصبح جهد الخرج $V_{CE} \\approx 0$ (خرج منخفض 0). 2) عند تطبيق دخل منخفض (0)، ينعدم تيار القاعدة فينعدم تيار المجمع $I_C = 0$ (حالة قطع)، ويصبح جهد الخرج مساوياً لجهد المصدر $V_{CE} = V_{CC}$ (خرج مرتفع 1)، وبذلك يعمل كعاكس منطقي (بوابة NOT)."
    ],
    "teacherTipEn": "Remember: Switch ON corresponds to output LOW ($V_{CE} \\approx 0$); Switch OFF corresponds to output HIGH ($V_{CE} \\approx V_{CC}$).",
    "teacherTipAr": "تذكر: المفتاح في وضع مغلق (ON) يعطي خرجاً صفراً (0)، وفي وضع مفتوح (OFF) يعطي خرجاً مساوياً لـ $V_{CC}$ (1)."
  },
  {
    "id": "phys_ch6_db_hots_38",
    "titleEn": "Transistor Alpha and Beta Amplification Mathematical Relation",
    "titleAr": "العلاقة الرياضية الدقيقة بين معاملي التكبير ألفا وبيتا في الترانزستور",
    "difficulty": "hots",
    "questionEn": "In a bipolar junction transistor, what is the exact mathematical relation between the common-emitter current gain ($\\beta_e$) and the common-base current distribution factor ($\\alpha_e$)?",
    "questionAr": "في الترانزستور ثنائي القطبية، ما هي العلاقة الرياضية الدقيقة التي تربط بين معامل تكبير التيار في الباعث المشترك ($\\beta_e$) ونسبة التوزيع ($\\alpha_e$)؟",
    "optionsEn": [
      "$\\beta_e = \\alpha_e (1 + \\alpha_e) \\quad \\text{and} \\quad \\alpha_e = \\beta_e (1 - \\beta_e)$",
      "$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e} \\quad \\text{and} \\quad \\alpha_e = \\frac{\\beta_e}{1 + \\beta_e}$",
      "$\\beta_e \\cdot \\alpha_e = 1$",
      "$\\beta_e = \\frac{1 - \\alpha_e}{\\alpha_e}$"
    ],
    "optionsAr": [
      "$\\beta_e = \\alpha_e (1 + \\alpha_e) \\quad \\text{و} \\quad \\alpha_e = \\beta_e (1 - \\beta_e)$",
      "$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e} \\quad \\text{و} \\quad \\alpha_e = \\frac{\\beta_e}{1 + \\beta_e}$",
      "$\\beta_e \\cdot \\alpha_e = 1$",
      "$\\beta_e = \\frac{1 - \\alpha_e}{\\alpha_e}$"
    ],
    "correctAnswer": "$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e} \\quad \\text{and} \\quad \\alpha_e = \\frac{\\beta_e}{1 + \\beta_e}$",
    "correctIndex": 1,
    "hintEn": "Emitter current is sum of collector and base currents: $I_E = I_C + I_B$. Divide by $I_C$.",
    "hintAr": "تيار الباعث يساوي مجموع تياري المجمع والقاعدة: $I_E = I_C + I_B$.",
    "stepByStepSolutionEn": [
      "By definition, $\\alpha_e = \\frac{I_C}{I_E}$ and $\\beta_e = \\frac{I_C}{I_B}$. Since $I_E = I_C + I_B$, dividing by $I_C$ gives: $\\frac{1}{\\alpha_e} = 1 + \\frac{1}{\\beta_e} = \\frac{\\beta_e + 1}{\\beta_e}$. Taking the reciprocal yields $\\alpha_e = \\frac{\\beta_e}{1 + \\beta_e}$, and rearranging for $\\beta_e$ yields $\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e}$."
    ],
    "stepByStepSolutionAr": [
      "بتعريف $\\alpha_e = \\frac{I_C}{I_E}$ و $\\beta_e = \\frac{I_C}{I_B}$. وحيث أن $I_E = I_C + I_B$، بالقسمة على $I_C$ نجد: $\\frac{1}{\\alpha_e} = 1 + \\frac{1}{\\beta_e} = \\frac{\\beta_e + 1}{\\beta_e}$، وبأخذ المقلوب نجد أن $\\alpha_e = \\frac{\\beta_e}{1 + \\beta_e}$ وبالتبسيط العكسي نجد أن $\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e}$."
    ],
    "teacherTipEn": "Since $\\alpha_e$ is slightly less than 1 (typically $0.95 - 0.99$), $(1 - \\alpha_e)$ is very small, making $\\beta_e$ very large (typically $20 - 100$).",
    "teacherTipAr": "بما أن $\\alpha_e$ قريبة جداً من الواحد الصحيح (حوالي 0.98)، فإن المقام $(1 - \\alpha_e)$ صغير جداً، مما يجعل $\\beta_e$ كبيرة جداً (تصل إلى 100 وأكثر)."
  },
  {
    "id": "phys_ch6_db_hots_39",
    "titleEn": "Transistor Current Gain Numerical Problem with Collector Resistance",
    "titleAr": "مسألة حسابية لمعاملي التكبير وفرق الجهد في دائرة ترانزستور",
    "difficulty": "hots",
    "questionEn": "In a common-emitter transistor circuit, $V_{CC} = 1.5\\text{ V}$, collector resistor $R_C = 400\\,\\Omega$, and base current is $I_B = 60\\,\\mu\\text{A}$. If the voltage across the collector-emitter is $V_{CE} = 0.3\\text{ V}$, what are the collector current $I_C$ and the current gain $\\beta_e$?",
    "questionAr": "في دائرة ترانزستور باعث مشترك، كان جهد البطارية $V_{CC} = 1.5\\text{ V}$ ومقاومة المجمع $R_C = 400\\,\\Omega$ وتيار القاعدة $I_B = 60\\,\\mu\\text{A}$. إذا كان فرق الجهد بين المجمع والباعث $V_{CE} = 0.3\\text{ V}$، فما هما تيار المجمع $I_C$ ومعامل تكبير التيار $\\beta_e$؟",
    "optionsEn": [
      "$I_C = 3.75\\text{ mA} \\quad \\text{and} \\quad \\beta_e = 62.5$",
      "$I_C = 0.75\\text{ mA} \\quad \\text{and} \\quad \\beta_e = 12.5$",
      "$I_C = 3\\text{ mA} \\quad \\text{and} \\quad \\beta_e = 50$",
      "$I_C = 3\\text{ mA} \\quad \\text{and} \\quad \\beta_e = 20$"
    ],
    "optionsAr": [
      "$I_C = 3.75\\text{ mA} \\quad \\text{و} \\quad \\beta_e = 62.5$",
      "$I_C = 0.75\\text{ mA} \\quad \\text{و} \\quad \\beta_e = 12.5$",
      "$I_C = 3\\text{ mA} \\quad \\text{و} \\quad \\beta_e = 50$",
      "$I_C = 3\\text{ mA} \\quad \\text{و} \\quad \\beta_e = 20$"
    ],
    "correctAnswer": "$I_C = 3\\text{ mA} \\quad \\text{and} \\quad \\beta_e = 50$",
    "correctIndex": 2,
    "hintEn": "$V_{CC} = V_{CE} + I_C R_C \\implies I_C = \\frac{V_{CC} - V_{CE}}{R_C}$, then $\\beta_e = \\frac{I_C}{I_B}$.",
    "hintAr": "احسب تيار المجمع: $I_C = \\frac{V_{CC} - V_{CE}}{R_C}$ ثم معامل التكبير: $\\beta_e = \\frac{I_C}{I_B}$.",
    "stepByStepSolutionEn": [
      "Step 1: Calculate $I_C$: $V_{CC} - V_{CE} = 1.5 - 0.3 = 1.2\\text{ V}$. Thus $I_C = \\frac{1.2\\text{ V}}{400\\,\\Omega} = 3 \\times 10^{-3}\\text{ A} = 3\\text{ mA}$. Step 2: Calculate $\\beta_e$: $\\beta_e = \\frac{I_C}{I_B} = \\frac{3 \\times 10^{-3}\\text{ A}}{60 \\times 10^{-6}\\text{ A}} = \\frac{3000}{60} = 50$."
    ],
    "stepByStepSolutionAr": [
      "الخطوة 1: حساب $I_C$: فرق الجهد عبر مقاومة المجمع $= V_{CC} - V_{CE} = 1.5 - 0.3 = 1.2\\text{ V}$. تيار المجمع $I_C = \\frac{1.2}{400} = 3 \\times 10^{-3}\\text{ A} = 3\\text{ mA}$. الخطوة 2: حساب $\\beta_e$: معامل التكبير $\\beta_e = \\frac{I_C}{I_B} = \\frac{3 \\times 10^{-3}}{60 \\times 10^{-6}} = 50$."
    ],
    "teacherTipEn": "Always convert $\\mu\\text{A}$ to amperes ($10^{-6}\\text{ A}$) and $\\text{mA}$ to amperes ($10^{-3}\\text{ A}$) before computing ratios.",
    "teacherTipAr": "تأكد دائماً من تحويل الميكروأمبير ($10^{-6}$) والمللي أمبير ($10^{-3}$) إلى أمبير قبل إجراء القسمة."
  },
  {
    "id": "phys_ch6_db_hots_40",
    "titleEn": "Common Emitter Amplifier 180 Degree Phase Inversion",
    "titleAr": "انعكاس طور إشارة الجهد بمقدار 180 درجة في مكبر الباعث المشترك",
    "difficulty": "hots",
    "questionEn": "When an AC signal is amplified by an npn transistor in the common-emitter configuration, what is the phase relationship between the input signal voltage $v_{in}$ and the amplified output voltage $v_{out}$ across the collector?",
    "questionAr": "عند تكبير إشارة جهد مترددة بواسطة ترانزستور npn متصل كباعث مشترك، ما هي العلاقة الطورية بين جهد إشارة الدخل $v_{in}$ وجهد الخرج المكبر $v_{out}$ المأخوذ من المجمع؟",
    "optionsEn": [
      "The input and output voltages are in complete phase agreement ($0^\\circ$ phase shift)",
      "The output leads the input by $90^\\circ$",
      "The output lags the input by $270^\\circ$",
      "There is an exact $180^\\circ$ phase inversion (when input increases, output decreases, and vice-versa)"
    ],
    "optionsAr": [
      "يتفق جهد الدخل وجهد الخرج تماماً في الطور (فرق الطور يساوي $0^\\circ$)",
      "يسبق جهد الخرج جهد الدخل بزاوية طور $90^\\circ$",
      "يتأخر جهد الخرج عن جهد الدخل بزاوية طور $270^\\circ$",
      "يحدث انعكاس في الطور مقداره $180^\\circ$ (عندما تزداد إشارة الدخل تتناقص إشارة الخرج والعكس صحيح)"
    ],
    "correctAnswer": "There is an exact $180^\\circ$ phase inversion (when input increases, output decreases, and vice-versa)",
    "correctIndex": 3,
    "hintEn": "As input voltage rises, base current increases, increasing collector current, which increases the voltage drop $I_C R_C$, lowering $V_{CE} = V_{CC} - I_C R_C$.",
    "hintAr": "زيادة جهد الدخل تزيد $I_B$ فتزيد $I_C$ فيزداد $I_C R_C$ ويقل جهد الخرج $V_{CE} = V_{CC} - I_C R_C$.",
    "stepByStepSolutionEn": [
      "From $V_{out} = V_{CE} = V_{CC} - I_C R_C$: During the positive half-cycle of the input signal, $v_{in}$ increases $\\implies$ $I_B$ increases $\\implies$ $I_C$ increases $\\implies$ the voltage drop across collector resistor ($I_C R_C$) increases. Because $V_{CC}$ is constant, $V_{CE}$ must decrease, producing a negative-going half-cycle at the collector. Conversely, during the negative input half-cycle, $V_{CE}$ increases. Hence, the output is $180^\\circ$ out of phase with the input."
    ],
    "stepByStepSolutionAr": [
      "من معادلة الخرج $V_{out} = V_{CE} = V_{CC} - I_C R_C$: خلال النصف الموجب لإشارة الدخل يزداد جهد القاعدة فيزداد تيار القاعدة $I_B$ وبالتالي يزداد تيار المجمع $I_C$ فيزداد الهبوط في الجهد عبر مقاومة المجمع ($I_C R_C$)، ولثبات جهد البطارية $V_{CC}$ فإن جهد الخرج $V_{CE}$ يتناقص صانعاً نصف دورة سالباً. والعكس صحيح في النصف السالب للدخل، فيكون فرق الطور بين الخرج والدخل $180^\\circ$."
    ],
    "teacherTipEn": "This $180^\\circ$ phase inversion is a unique signature of the common-emitter configuration.",
    "teacherTipAr": "انعكاس الطور بمقدار $180^\\circ$ خاصية مميزة لتوصيلة الباعث المشترك."
  },
  {
    "id": "phys_ch6_db_hots_41",
    "titleEn": "Logic Gate Network Truth Table Analysis for Three Inputs",
    "titleAr": "تحليل جدول التحقق لشبكة بوابات منطقية ثلاثية المدخلات",
    "difficulty": "hots",
    "questionEn": "A digital logic circuit consists of two inputs $A$ and $B$ connected to an AND gate, whose output is fed into an OR gate along with a third input $C$. What is the boolean output expression $Y$, and when is $Y = 0$?",
    "questionAr": "دائرة منطقية رقمية تتكون من مدخلين $A$ و $B$ متصلين ببوابة AND، ويوصل خرجها بأحد مدخلي بوابة OR بينما يوصل المدخل الثالث $C$ بالمدخل الآخر لبوابة OR. ما هو التعبير المنطقي للخرج $Y$ ومتى يكون $Y = 0$؟",
    "optionsEn": [
      "$Y = (A \\cdot B) + C$; $Y = 0$ only when $C = 0$ and at least one of $A$ or $B$ is $0$",
      "$Y = (A + B) \\cdot C$; $Y = 0$ only when $A = B = C = 1$",
      "$Y = \\overline{A \\cdot B \\cdot C}$; $Y = 0$ whenever any input is 0",
      "$Y = (A + B) + C$; $Y = 0$ when all inputs are 1"
    ],
    "optionsAr": [
      "$Y = (A \\cdot B) + C$؛ ويكون الخرج $Y = 0$ فقط عندما يكون $C = 0$ ويكون أحد المدخلين $A$ أو $B$ على الأقل مساوياً للصفر",
      "$Y = (A + B) \\cdot C$؛ ويكون $Y = 0$ فقط عندما تكون جميع المدخلات 1",
      "$Y = \\overline{A \\cdot B \\cdot C}$؛ ويكون $Y = 0$ كلما كان أي مدخل صفراً",
      "$Y = (A + B) + C$؛ ويكون $Y = 0$ عندما تكون جميع المدخلات 1"
    ],
    "correctAnswer": "$Y = (A \\cdot B) + C$; $Y = 0$ only when $C = 0$ and at least one of $A$ or $B$ is $0$",
    "correctIndex": 0,
    "hintEn": "Trace through: Output of AND is $A \\cdot B$. Output of OR is $(A \\cdot B) + C$. OR gives 0 only when both inputs are 0.",
    "hintAr": "تتبع الدائرة: خرج بوابة AND هو $A \\cdot B$، وخرج بوابة OR هو $(A \\cdot B) + C$. وبوابة OR تعطي 0 إذا كان كلا مدخليها صفراً.",
    "stepByStepSolutionEn": [
      "The circuit performs the operation $Y = (A \\cdot B) + C$. For an OR gate, the output is $0$ if and only if both of its inputs are $0$. Therefore, we must have $C = 0$ AND $(A \\cdot B) = 0$. The condition $(A \\cdot B) = 0$ means that not both $A$ and $B$ are $1$ (i.e. at least one of $A$ or $B$ is $0$). Thus, for the 8 possible combinations of $A, B, C$, exactly 3 yield $Y = 0$: $(0,0,0), (0,1,0), (1,0,0)$."
    ],
    "stepByStepSolutionAr": [
      "خرج بوابة AND هو $A \\cdot B$ ويدخل على بوابة OR مع $C$ فيكون الخرج الكلي $Y = (A \\cdot B) + C$. بوابة OR تعطي صفراً فقط إذا كان كلا طرفيها صفراً، أي يجب أن يكون $C = 0$ وكذلك $(A \\cdot B) = 0$. وشرط أن تكون $A \\cdot B = 0$ هو أن يكون أحد المدخلين أو كلاهما صفراً. إذن من بين الاحتمالات الثمانية يكون الخرج صفراً في 3 حالات فقط: $(0,0,0)$ و $(0,1,0)$ و $(1,0,0)$."
    ],
    "teacherTipEn": "A quick check: If $C = 1$, the OR gate forces $Y = 1$ unconditionally, regardless of $A$ and $B$.",
    "teacherTipAr": "تحقق سريع: إذا كان $C = 1$، فإن بوابة OR تجعل الخرج 1 مباشرة بصرف النظر عن قيم $A$ و $B$."
  },
  {
    "id": "phys_ch6_db_hots_42",
    "titleEn": "Logic Gate Combination Condition to Produce Output 1",
    "titleAr": "تحديد قيم المدخلات لإنتاج خرج 1 في شبكة بوابات مركبة",
    "difficulty": "hots",
    "questionEn": "In a logic circuit, inputs $A$ and $B$ are fed into a NOR-equivalent configuration: an OR gate followed by a NOT gate. Its output is connected to one input of an AND gate, while input $C$ is connected directly to the other input of the AND gate. Which input combination of $(A, B, C)$ produces an output of $Y = 1$?",
    "questionAr": "في دائرة منطقية، يتصل المدخلان $A$ و $B$ ببوابة OR يليها عاكس NOT. يوصل خرج العاكس بأحد مدخلي بوابة AND، بينما يتصل المدخل $C$ مباشرة بالمدخل الآخر لبوابة AND. أي مجموعة من المدخلات $(A, B, C)$ تعطي خرجاً $Y = 1$؟",
    "optionsEn": [
      "$A = 1, B = 0, C = 1$",
      "$A = 0, B = 0, C = 1$",
      "$A = 0, B = 1, C = 0$",
      "$A = 1, B = 1, C = 1$"
    ],
    "optionsAr": [
      "$A = 1, B = 0, C = 1$",
      "$A = 0, B = 0, C = 1$",
      "$A = 0, B = 1, C = 0$",
      "$A = 1, B = 1, C = 1$"
    ],
    "correctAnswer": "$A = 0, B = 0, C = 1$",
    "correctIndex": 1,
    "hintEn": "AND output is 1 only if both inputs are 1. So $C$ must be 1, and the NOT output must be 1.",
    "hintAr": "خرج بوابة AND يكون 1 فقط إذا كان كلا مدخليها 1، أي يجب أن يكون $C=1$ وخرج العاكس 1.",
    "stepByStepSolutionEn": [
      "The boolean expression is $Y = \\overline{(A + B)} \\cdot C$. For the final AND gate to output $1$, both inputs must be $1$: (1) $C = 1$, and (2) $\\overline{A + B} = 1 \\implies A + B = 0$. For an OR gate to output $0$, both inputs must be $0$: $A = 0$ and $B = 0$. Therefore, the only combination that produces $Y = 1$ is $(A=0, B=0, C=1)$."
    ],
    "stepByStepSolutionAr": [
      "التعبير المنطقي للخرج هو $Y = \\overline{(A + B)} \\cdot C$. لكي تعطي بوابة AND النهائية خرجاً يساوي 1، يجب أن يكون كلا مدخليها مساوياً لـ 1: أولاً $C = 1$، وثانياً خرج العاكس 1 أي أن دخل العاكس $\\overline{A+B} = 1 \\implies A + B = 0$. ولكي يكون خرج بوابة OR صفراً، يجب أن يكون $A = 0$ و $B = 0$. إذن الاحتمال الوحيد الذي يعطي خرجاً 1 هو $(A=0, B=0, C=1)$."
    ],
    "teacherTipEn": "This question tests systematic reverse tracing from output to inputs.",
    "teacherTipAr": "هذا السؤال يدربك على التتبع العكسي المنهجي من الخرج إلى المدخلات."
  },
  {
    "id": "phys_ch6_db_hots_43",
    "titleEn": "Analog vs Digital Signals Noise Immunity and Binary Coding",
    "titleAr": "مقارنة الإشارات التناظرية والرقمية ومقاومة الضوضاء الإلكترونية",
    "difficulty": "hots",
    "questionEn": "Why are modern telecommunication and electronic processing systems predominantly digital (using binary $0$ and $1$) rather than analog?",
    "questionAr": "لماذا تحولت أنظمة الاتصالات والمعالجة الإلكترونية الحديثة بالكامل إلى الأنظمة الرقمية (التي تستخدم النظام الثنائي 0 و 1) بدلاً من الأنظمة التناظرية؟",
    "optionsEn": [
      "Digital signals travel ten times faster than the speed of light in vacuum",
      "Analog signals can only represent negative numbers",
      "Digital signals are immune to electrical noise because amplitude distortions do not alter whether a pulse is recognized as HIGH (1) or LOW (0)",
      "Digital circuits consume zero electrical power under all conditions"
    ],
    "optionsAr": [
      "الإشارات الرقمية تنتقل بسرعة تفوق سرعة الضوء بعشر مرات",
      "الإشارات التناظرية تستطيع تمثيل الأرقام السالبة فقط",
      "الإشارات الرقمية محصنة ضد الضوضاء الكهربية لأن التشوهات الطفيفة في السعة لا تغير من تمييز النبضة كجهد مرتفع (1) أو منخفض (0)",
      "الدوائر الرقمية لا تستهلك أي طاقة كهربية على الإطلاق في جميع الأحوال"
    ],
    "correctAnswer": "Digital signals are immune to electrical noise because amplitude distortions do not alter whether a pulse is recognized as HIGH (1) or LOW (0)",
    "correctIndex": 2,
    "hintEn": "Analog noise adds directly to continuous amplitude and cannot be separated; digital logic separates noise via voltage thresholds.",
    "hintAr": "الضوضاء في الإشارات التناظرية تندمج مع السعة وتشوهها نهائياً، بينما في الرقمية يتم التعرف على الـ 0 والـ 1 بواسطة عتبة جهد محددة.",
    "stepByStepSolutionEn": [
      "Analog signals represent continuous physical variables (voltage, current) that vary smoothly. Random thermal noise and interference add directly to this amplitude, distorting the signal irretrievably. Digital systems represent information using discrete binary states ($0$ and $1$, e.g., $0\\text{ V}$ and $5\\text{ V}$). Small noise fluctuations do not flip a $5\\text{ V}$ level below the logic threshold, allowing receivers to reconstruct pristine, noise-free pulses indefinitely."
    ],
    "stepByStepSolutionAr": [
      "الإشارات التناظرية تمثل كميات متصلة تتغير مع الزمن بسلاسة، فتختلط بها الضوضاء الكهربية العشوائية الناتجة عن حركة الإلكترونات الحرارية ويصعب فصلها عنها فتتشوه الإشارة. أما في الإشارات الرقمية فتحول المعلومة إلى نبضات مشفرة بالنظام الثنائي (0 و 1)، وعندما تضاف الضوضاء تظل قيمة الجهد مميزة بسهولة كـ 0 أو 1 طالما لم تتجاوز حد العتبة، مما يجعلها نقية تماماً من التشويش."
    ],
    "teacherTipEn": "Analog-to-Digital Converters (ADC) and Digital-to-Analog Converters (DAC) serve as the bridges between continuous reality and digital processing.",
    "teacherTipAr": "تعمل المحولات التناظرية-الرقمية (ADC) والرقمية-التناظرية (DAC) كجسور لنقل البيانات بين الواقع التناظري والمعالجة الرقمية."
  },
  {
    "id": "phys_ch6_db_hots_44",
    "titleEn": "Decimal to Binary Conversion Quantitative Methodology",
    "titleAr": "التحويل بين النظام العشري والنظام الثنائي",
    "difficulty": "hots",
    "questionEn": "What is the binary representation of the decimal number $25$ in digital electronics?",
    "questionAr": "ما هو التمثيل الثنائي (كود الأرقام الثنائية) للعدد العشري $25$ في الإلكترونيات الرقمية؟",
    "optionsEn": [
      "$(10101)_2$",
      "$(11101)_2$",
      "$(10011)_2$",
      "$(11001)_2$"
    ],
    "optionsAr": [
      "$(10101)_2$",
      "$(11101)_2$",
      "$(10011)_2$",
      "$(11001)_2$"
    ],
    "correctAnswer": "$(11001)_2$",
    "correctIndex": 3,
    "hintEn": "Successively divide 25 by 2 and collect remainders from right to left (LSB to MSB): $25 = 16 + 8 + 1$.",
    "hintAr": "فكك العدد إلى قوى العدد 2: $25 = 16 + 8 + 1 = 2^4 + 2^3 + 2^0$.",
    "stepByStepSolutionEn": [
      "Powers of 2: $2^4 = 16, 2^3 = 8, 2^2 = 4, 2^1 = 2, 2^0 = 1$. Decomposing 25: $25 = 16 + 8 + 1 = (1 \\times 2^4) + (1 \\times 2^3) + (0 \\times 2^2) + (0 \\times 2^1) + (1 \\times 2^0)$. Writing the binary bits from highest to lowest power gives $(11001)_2$."
    ],
    "stepByStepSolutionAr": [
      "قوى العدد 2 هي: $2^0=1, 2^1=2, 2^2=4, 2^3=8, 2^4=16$. العدد $25 = 16 + 8 + 1$، إذن نضع 1 في خانة الـ 16 والـ 8 والـ 1، ونضع 0 في خانتي الـ 4 والـ 2، فيكون الكود الثنائي من اليسار لليمين هو $(11001)_2$."
    ],
    "teacherTipEn": "Verify by converting back: $1 \\times 16 + 1 \\times 8 + 0 \\times 4 + 0 \\times 2 + 1 \\times 1 = 25$.",
    "teacherTipAr": "تحقق بالتحويل العكسي: $16 + 8 + 0 + 0 + 1 = 25$."
  },
  {
    "id": "phys_ch6_db_hots_45",
    "titleEn": "Cascading Atomic Transition Frequency Summation Law",
    "titleAr": "قانون جمع الترددات في الانتقالات الذرية المتتالية",
    "difficulty": "hots",
    "questionEn": "An excited atom transitions from level $E_3$ down to level $E_2$, emitting a photon of frequency $\\nu_1$, and subsequently transitions from $E_2$ down to ground state $E_1$, emitting a photon of frequency $\\nu_2$. If the atom had transitioned directly from $E_3$ to $E_1$, emitting frequency $\\nu_3$, what is the exact relationship among the three frequencies?",
    "questionAr": "انتقلت ذرة مثارة من المستوى $E_3$ إلى المستوى $E_2$ مشعة فوتوناً تردده $\\nu_1$، ثم هبطت من $E_2$ إلى المستوى الأرضي $E_1$ مشعة فوتوناً تردده $\\nu_2$. إذا كانت الذرة قد انتقلت مباشرة من $E_3$ إلى $E_1$ باعثة فوتوناً تردده $\\nu_3$، فما هي العلاقة الدقيقة بين الترددات الثلاثة؟",
    "optionsEn": [
      "$\\nu_3 = \\nu_1 + \\nu_2 \\quad \\text{and} \\quad \\frac{1}{\\lambda_3} = \\frac{1}{\\lambda_1} + \\frac{1}{\\lambda_2}$",
      "$\\nu_3 = \\nu_1 \\cdot \\nu_2 \\quad \\text{and} \\quad \\lambda_3 = \\lambda_1 + \\lambda_2$",
      "$\\nu_3 = \\frac{\\nu_1 + \\nu_2}{2} \\quad \\text{and} \\quad \\lambda_3 = \\frac{\\lambda_1 + \\lambda_2}{2}$",
      "$\\nu_3 = \\nu_2 - \\nu_1 \\quad \\text{and} \\quad \\lambda_3 = \\lambda_2 - \\lambda_1$"
    ],
    "optionsAr": [
      "$\\nu_3 = \\nu_1 + \\nu_2 \\quad \\text{و} \\quad \\frac{1}{\\lambda_3} = \\frac{1}{\\lambda_1} + \\frac{1}{\\lambda_2}$",
      "$\\nu_3 = \\nu_1 \\cdot \\nu_2 \\quad \\text{و} \\quad \\lambda_3 = \\lambda_1 + \\lambda_2$",
      "$\\nu_3 = \\frac{\\nu_1 + \\nu_2}{2} \\quad \\text{و} \\quad \\lambda_3 = \\frac{\\lambda_1 + \\lambda_2}{2}$",
      "$\\nu_3 = \\nu_2 - \\nu_1 \\quad \\text{و} \\quad \\lambda_3 = \\lambda_2 - \\lambda_1$"
    ],
    "correctAnswer": "$\\nu_3 = \\nu_1 + \\nu_2 \\quad \\text{and} \\quad \\frac{1}{\\lambda_3} = \\frac{1}{\\lambda_1} + \\frac{1}{\\lambda_2}$",
    "correctIndex": 0,
    "hintEn": "Conservation of energy: $(E_3 - E_1) = (E_3 - E_2) + (E_2 - E_1)$.",
    "hintAr": "قانون بقاء الطاقة: فرق الطاقة الكلي يساوي مجموع فرقي طاقتي الانتقالين الجزئيين.",
    "stepByStepSolutionEn": [
      "By energy conservation: $\\Delta E_{3\\to1} = \\Delta E_{3\\to2} + \\Delta E_{2\\to1}$. Substituting $E = h\\nu$: $h\\nu_3 = h\\nu_1 + h\\nu_2 \\implies \\nu_3 = \\nu_1 + \\nu_2$. Substituting $\\nu = \\frac{c}{\\lambda}$: $\\frac{hc}{\\lambda_3} = \\frac{hc}{\\lambda_1} + \\frac{hc}{\\lambda_2} \\implies \\frac{1}{\\lambda_3} = \\frac{1}{\\lambda_1} + \\frac{1}{\\lambda_2} \\implies \\lambda_3 = \\frac{\\lambda_1 \\lambda_2}{\\lambda_1 + \\lambda_2}$."
    ],
    "stepByStepSolutionAr": [
      "من مبدأ بقاء الطاقة: فرق الطاقة الكلي = مجموع فروق الطاقة الجزئية: $E_3 - E_1 = (E_3 - E_2) + (E_2 - E_1)$. بالتعويض عن $E = h\\nu$ نجد أن $h\\nu_3 = h\\nu_1 + h\\nu_2$ وبالتالي $\\nu_3 = \\nu_1 + \\nu_2$. وبالتعويض عن التردد بالسرعة والطول الموجي نجد أن $\\frac{1}{\\lambda_3} = \\frac{1}{\\lambda_1} + \\frac{1}{\\lambda_2}$."
    ],
    "teacherTipEn": "Crucial distinction: Frequencies add directly ($\\nu_3 = \\nu_1 + \\nu_2$), but wavelengths add as reciprocals!",
    "teacherTipAr": "انتبه بشدة: الترددات تجمع جمعاً جبرياً مباشراً، بينما تجمع الأطوال الموجية مقلوبة مثل المقاومات على التوازي!"
  },
  {
    "id": "phys_ch6_db_hots_46",
    "titleEn": "Wavelength of Cascaded Electronic Transition Problem",
    "titleAr": "حساب الطول الموجي لانتقال ذري مباشر بدلالة انتقالين متتاليين",
    "difficulty": "hots",
    "questionEn": "An electron in an atom drops from level $3$ to level $2$, emitting radiation of wavelength $\\lambda_1 = 600\\text{ nm}$. It then drops from level $2$ to level $1$, emitting radiation of wavelength $\\lambda_2 = 300\\text{ nm}$. What is the wavelength $\\lambda_3$ of the radiation emitted if the electron jumps directly from level $3$ to level $1$?",
    "questionAr": "انتقل إلكترون في ذرة من المستوى 3 إلى المستوى 2 مشعاً فوتوناً طوله الموجي $\\lambda_1 = 600\\text{ nm}$، ثم هبط من المستوى 2 إلى المستوى 1 مشعاً فوتوناً طوله الموجي $\\lambda_2 = 300\\text{ nm}$. ما هو الطول الموجي $\\lambda_3$ للإشعاع المنبعث عند انتقال الإلكترون مباشرة من المستوى 3 إلى المستوى 1؟",
    "optionsEn": [
      "$\\lambda_3 = 900\\text{ nm}$",
      "$\\lambda_3 = 200\\text{ nm}$",
      "$\\lambda_3 = 450\\text{ nm}$",
      "$\\lambda_3 = 150\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\lambda_3 = 900\\text{ nm}$",
      "$\\lambda_3 = 200\\text{ nm}$",
      "$\\lambda_3 = 450\\text{ nm}$",
      "$\\lambda_3 = 150\\text{ nm}$"
    ],
    "correctAnswer": "$\\lambda_3 = 200\\text{ nm}$",
    "correctIndex": 1,
    "hintEn": "$\\frac{1}{\\lambda_3} = \\frac{1}{\\lambda_1} + \\frac{1}{\\lambda_2} \\implies \\lambda_3 = \\frac{\\lambda_1 \\lambda_2}{\\lambda_1 + \\lambda_2}$.",
    "hintAr": "$\\lambda_3 = \\frac{\\lambda_1 \\lambda_2}{\\lambda_1 + \\lambda_2}$ (حاصل ضربهما على حاصل جمعهما).",
    "stepByStepSolutionEn": [
      "$\\frac{1}{\\lambda_3} = \\frac{1}{600} + \\frac{1}{300} = \\frac{1 + 2}{600} = \\frac{3}{600} = \\frac{1}{200}\\text{ nm}^{-1} \\implies \\lambda_3 = 200\\text{ nm}$. Alternatively, $\\lambda_3 = \\frac{600 \\times 300}{600 + 300} = \\frac{180000}{900} = 200\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{1}{\\lambda_3} = \\frac{1}{600} + \\frac{1}{300} = \\frac{1 + 2}{600} = \\frac{3}{600} = \\frac{1}{200}$ ومنها نجد أن $\\lambda_3 = 200\\text{ nm}$."
    ],
    "teacherTipEn": "Because photon energy is highest for the direct transition ($E_3 - E_1$), its wavelength must be shorter than both individual components ($\\lambda_3 < \\lambda_2 < \\lambda_1$).",
    "teacherTipAr": "بما أن طاقة الانتقال المباشر هي الأكبر على الإطلاق، فيجب بالضرورة أن يكون طوله الموجي أقصر من كليهما ($\\lambda_3 < 300\\text{ nm}$)."
  },
  {
    "id": "phys_ch6_db_hots_47",
    "titleEn": "Line Spectrum vs Band Spectrum Physical Origin",
    "titleAr": "الفرق الفيزيائي بين الطيف الخطي للذرات وطيف الحزم للجزيئات",
    "difficulty": "hots",
    "questionEn": "Why do incandescent gases in atomic form (such as atomic hydrogen or mercury vapor) emit discrete line spectra, whereas molecular gases (such as carbon dioxide or nitrogen gas) emit band spectra?",
    "questionAr": "لماذا تشع الغازات المتوهجة في صورتها الذرية (مثل بخار الزئبق أو الهيدروجين الذري) أطيافاً خطية دقيقة، بينما تشع الغازات الجزيئية (مثل ثاني أكسيد الكربون أو النيتروجين) أطياف حزم ملونة؟",
    "optionsEn": [
      "Molecules reflect sunlight while atoms create nuclear fission",
      "Atomic gases have higher density than molecular gases",
      "Isolated atoms only possess electronic energy transitions producing sharp lines, whereas molecules have closely spaced rotational and vibrational energy levels superimposed on electronic transitions, creating bands of closely packed lines",
      "Molecules do not contain electrons, so their radiation is magnetic"
    ],
    "optionsAr": [
      "الجزيئات تعكس ضوء الشمس بينما تحدث الذرات انشطاراً نووياً",
      "كثافة الغازات الذرية أعلى بكثير من كثافة الغازات الجزيئية",
      "الذرات المنفردة تمتلك مستويات طاقة إلكترونية فقط فتعطي خطوطاً حادة، بينما الجزيئات تمتلك مستويات طاقة اهتزازية ودورانية متقاربة جداً متراكبة على مستويات الطاقة الإلكترونية فتعطي حزماً طيفية",
      "الجزيئات لا تحتوي على إلكترونات فيكون إشعاعها مغناطيسياً"
    ],
    "correctAnswer": "Isolated atoms only possess electronic energy transitions producing sharp lines, whereas molecules have closely spaced rotational and vibrational energy levels superimposed on electronic transitions, creating bands of closely packed lines",
    "correctIndex": 2,
    "hintEn": "Atoms: purely electronic jumps. Molecules: electronic + vibrational + rotational energy levels.",
    "hintAr": "الذرات: انتقالات إلكترونية فقط. الجزيئات: انتقالات إلكترونية واهتزازية ودورانية متقاربة تصنع حزماً.",
    "stepByStepSolutionEn": [
      "In isolated single atoms, the only allowed transitions are electronic transitions between widely spaced stationary orbits, yielding distinct, monochromatic spectral lines (line emission spectrum). In molecules, atoms vibrate along interatomic bonds and rotate around molecular axes, introducing numerous closely spaced vibrational and rotational energy sub-levels. When electronic transitions occur in molecules, thousands of closely spaced transitions overlap, appearing through a spectrometer as continuous bands: band emission spectrum."
    ],
    "stepByStepSolutionAr": [
      "في الذرات المفردة تكون مستويات الطاقة متباعدة والانتقالات إلكترونية فقط فتنبعث خطوط طيفية محددة ومفردة تسمى بالطيف الخطي المميز للعنصر. أما في الجزيئات، فترتبط الذرات بروابط تساهمية تهتز وتدور حول بعضها، مما ينشئ مستويات طاقة اهتزازية ودورانية شديدة التقارب متراكبة مع المستويات الإلكترونية، فتظهر خطوط الطيف متلاصقة جداً وتبدو على شكل حزم ملونة تسمى بطيف الحزم (الطيف الجزيئي)."
    ],
    "teacherTipEn": "Spectral analysis of line spectra identifies elements; analysis of band spectra identifies chemical molecules.",
    "teacherTipAr": "التحليل الطيفي الخطي يحدد نوع العناصر، بينما تحليل أطياف الحزم يحدد التركيب الجزيئي للمركبات."
  },
  {
    "id": "phys_ch6_db_hots_48",
    "titleEn": "X-Ray Differential Absorption in Human Tissues",
    "titleAr": "الأساس الفيزيائي لتباين امتصاص الأشعة السينية في التصوير الطبي للعظام",
    "difficulty": "hots",
    "questionEn": "In diagnostic medical radiography, why do bones appear white (clear shadows) on a photographic negative film while surrounding soft muscles and tissues appear dark?",
    "questionAr": "في التصوير الإشعاعي الطبي، لماذا تظهر العظام كظلال فاتحة (بيضاء) على الفيلم الحساس بينما تظهر العضلات والأنسجة الرخوة داكنة؟",
    "optionsEn": [
      "Bones emit their own visible light that exposes the film",
      "Soft tissues completely reflect all X-rays back toward the source",
      "X-rays cannot penetrate the skin and only bounce off the body surface",
      "Bones contain calcium ($Z = 20$) and phosphorus ($Z = 15$), which have higher atomic numbers than soft tissues ($Z \\approx 6 - 8$), drastically increasing photoelectric absorption ($I_{\\text{absorbed}} \\propto Z^3$ or $Z^4$)"
    ],
    "optionsAr": [
      "العظام تشع ضوءاً مرئياً من تلقاء نفسها يضيء الفيلم",
      "الأنسجة الرخوة تعكس جميع الأشعة السينية تماماً نحو المصدر",
      "الأشعة السينية لا تستطيع اختراق الجلد وترتد فقط عن سطح الجسم",
      "العظام تحتوي على كالسيوم ($Z=20$) وفوسفور ($Z=15$) ذوي أعداد ذرية أكبر من أنسجة العضلات ($Z \\approx 6-8$)، فيزداد امتصاصها للأشعة السينية بشدة ($I_{\\text{absorbed}} \\propto Z^3$ أو $Z^4$)"
    ],
    "correctAnswer": "Bones contain calcium ($Z = 20$) and phosphorus ($Z = 15$), which have higher atomic numbers than soft tissues ($Z \\approx 6 - 8$), drastically increasing photoelectric absorption ($I_{\\text{absorbed}} \\propto Z^3$ or $Z^4$)",
    "correctIndex": 3,
    "hintEn": "Absorption of X-rays increases dramatically with atomic number ($Z$). Bones absorb X-rays; rays pass through soft tissue and expose film.",
    "hintAr": "امتصاص الأشعة السينية يتناسب طردياً مع القوة الثالثة للعدد الذري، فتمتص العظام الأشعة بينما تنفذ من العضلات لتصل إلى الفيلم.",
    "stepByStepSolutionEn": [
      "X-ray attenuation by the photoelectric effect depends strongly on the atomic number of the absorbing medium, proportional to approximately $Z^3$ or $Z^4$. Bones consist largely of calcium hydroxyapatite with high atomic numbers ($Z_{\\text{Ca}} = 20, Z_{\\text{P}} = 15$), absorbing most incident X-ray photons and preventing them from reaching the film. Soft tissues consist mostly of water, carbon, hydrogen, and oxygen with low effective atomic number ($Z_{\\text{eff}} \\approx 7.4$), allowing X-rays to pass through and blacken the film."
    ],
    "stepByStepSolutionAr": [
      "يعتمد امتصاص الأشعة السينية على التأثير الكهروضوئي الذي يتناسب طردياً مع مكعب العدد الذري لمادة العضو تقريباً ($Z^3$). تحتوي العظام على عناصر ذات عدد ذري مرتفع نسبياً كالكالسيوم ($Z=20$) والفوسفور ($Z=15$) فتمتص معظم الأشعة السينية الساقطة عليها ولا تنفذ إلى الفيلم فيظل فاتحاً، بينما تتكون العضلات والأنسجة الرخوة من ماء وكربون وأكسجين ($Z \\approx 7$) فتنفذ منها الأشعة لتصل للفيلم وتسوده."
    ],
    "teacherTipEn": "This differential absorption is the cornerstone of X-ray imaging, CT scanning, and airport baggage inspection.",
    "teacherTipAr": "هذا التباين في الامتصاص هو الأساس العلمي للتصوير بالأشعة السينية والأشعة المقطعية وأجهزة فحص الحقائب بالمطارات."
  },
  {
    "id": "phys_ch6_db_hots_49",
    "titleEn": "Photodiode and Solar Cell Energy Conversion Mechanism",
    "titleAr": "آلية تحويل الطاقة الضوئية إلى كهربية في الخلية الشمسية",
    "difficulty": "hots",
    "questionEn": "In a silicon solar cell (photovoltaic p-n junction), how is incident sunlight converted directly into electrical energy?",
    "questionAr": "في الخلية الشمسية المصنوعة من السيليكون (وصلة p-n كهروضوئية)، كيف يتم تحويل ضوء الشمس الساقط مباشرة إلى طاقة كهربية؟",
    "optionsEn": [
      "Incident photons with $h\\nu \\ge E_g$ generate electron-hole pairs in the depletion region; the built-in electric field sweeps electrons to the n-region and holes to the p-region, generating a photovoltage",
      "Sunlight heats the crystal to $1000^\\circ\\text{C}$, boiling water to drive a turbine",
      "Solar photons fuse silicon nuclei into gold atoms, releasing electrostatic potential",
      "Solar cells store light mechanically by compressing the crystal lattice"
    ],
    "optionsAr": [
      "الفوتونات الساقطة ذات الطاقة $h\\nu \\ge E_g$ تحرر أزواجاً من الإلكترونات والفجوات في منطقة النضوب، ويفصلها المجال الداخلي دافعاً الإلكترونات إلى المنطقة n والفجوات إلى p فيتولد فرق جهد كهربي",
      "يقوم ضوء الشمس بتسخين البلورة إلى $1000^\\circ\\text{C}$ فيغلي الماء ليدير توربيناً",
      "تدمج فوتونات الشمس أنوية السيليكون لتكوين ذرات ذهب وينطلق جهد كهربي",
      "تقوم الخلايا الشمسية بتخزين الضوء ميكانيكياً عن طريق ضغط الشبكة البلورية"
    ],
    "correctAnswer": "Incident photons with $h\\nu \\ge E_g$ generate electron-hole pairs in the depletion region; the built-in electric field sweeps electrons to the n-region and holes to the p-region, generating a photovoltage",
    "correctIndex": 0,
    "hintEn": "Light creates electron-hole pairs ($h\\nu \\ge \\text{bandgap}$); junction electric field separates opposite charges.",
    "hintAr": "ضوء الشمس يحرر إلكترونات وفجوات، والمجال الكهربي الداخلي للوصلة يفصلهما ويمنع التئامهما فينشأ تيار.",
    "stepByStepSolutionEn": [
      "Silicon has an energy bandgap of $E_g \\approx 1.1\\text{ eV}$. When solar photons with energy $h\\nu \\ge 1.1\\text{ eV}$ strike the depletion layer of the p-n junction, they break covalent bonds, generating free electron-hole pairs. The permanent built-in electric field of the depletion region exerts electrostatic force in opposite directions, sweeping electrons toward the n-side and holes toward the p-side. This charge separation establishes an open-circuit photovoltage ($V_{oc} \\approx 0.5 - 0.6\\text{ V}$) that drives current through an external load."
    ],
    "stepByStepSolutionAr": [
      "فجوة الطاقة في السيليكون تبلغ حوالي $1.1\\text{ eV}$. عندما تسقط فوتونات الضوء بطاقة تفوق فجوة الطاقة، فإنها تكسر روابط تساهمية محررة إلكترونات وفجوات في منطقة النضوب. يقوم المجال الكهربي الداخلي القوي للوصلة بفصل الشحنات، فيدفع الإلكترونات نحو الطرف السالب n ويدفع الفجوات نحو الطرف الموجب p، مما يولد فرق جهد وتياراً كهربياً في الدائرة الخارجية دون الحاجة لمصدر جهد خارجي."
    ],
    "teacherTipEn": "Photovoltaic cells convert light energy directly into electrical energy without intermediate thermodynamic cycles.",
    "teacherTipAr": "تتميز الخلايا الشمسية بتحويل الطاقة الإشعاعية مباشرة إلى طاقة كهربية دون أي انبعاثات أو مراحل حرارية وسيطة."
  },
  {
    "id": "phys_ch6_db_hots_50",
    "titleEn": "Transistor DC Load Line Intercepts and Operating Point",
    "titleAr": "خط الحمل المستمر للترانزستور ونقطتا القطع والتشبع",
    "difficulty": "hots",
    "questionEn": "A common-emitter npn transistor circuit has $V_{CC} = 10\\text{ V}$ and collector load resistor $R_C = 2\\text{ k}\\Omega$. What are the coordinates of the saturation point ($I_{C,\\text{sat}}$ at $V_{CE} = 0$) and the cutoff point ($V_{CE,\\text{cutoff}}$ at $I_C = 0$) on the DC load line?",
    "questionAr": "دائرة ترانزستور npn متصل كباعث مشترك، جهد بطاريتها $V_{CC} = 10\\text{ V}$ ومقاومة الحمل في المجمع $R_C = 2\\text{ k}\\Omega$. ما هما إحداثيات نقطة التشبع ($I_{C,\\text{sat}}$ عندما $V_{CE} = 0$) ونقطة القطع ($V_{CE,\\text{cutoff}}$ عندما $I_C = 0$) على خط الحمل المستمر؟",
    "optionsEn": [
      "Saturation: $I_{C,\\text{sat}} = 20\\text{ mA}$; Cutoff: $V_{CE,\\text{cutoff}} = 5\\text{ V}$",
      "Saturation: $I_{C,\\text{sat}} = 5\\text{ mA}$; Cutoff: $V_{CE,\\text{cutoff}} = 10\\text{ V}$",
      "Saturation: $I_{C,\\text{sat}} = 2\\text{ mA}$; Cutoff: $V_{CE,\\text{cutoff}} = 20\\text{ V}$",
      "Saturation: $I_{C,\\text{sat}} = 10\\text{ mA}$; Cutoff: $V_{CE,\\text{cutoff}} = 2\\text{ V}$"
    ],
    "optionsAr": [
      "التشبع: $I_{C,\\text{sat}} = 20\\text{ mA}$؛ القطع: $V_{CE,\\text{cutoff}} = 5\\text{ V}$",
      "التشبع: $I_{C,\\text{sat}} = 5\\text{ mA}$؛ القطع: $V_{CE,\\text{cutoff}} = 10\\text{ V}$",
      "التشبع: $I_{C,\\text{sat}} = 2\\text{ mA}$؛ القطع: $V_{CE,\\text{cutoff}} = 20\\text{ V}$",
      "التشبع: $I_{C,\\text{sat}} = 10\\text{ mA}$؛ القطع: $V_{CE,\\text{cutoff}} = 2\\text{ V}$"
    ],
    "correctAnswer": "Saturation: $I_{C,\\text{sat}} = 5\\text{ mA}$; Cutoff: $V_{CE,\\text{cutoff}} = 10\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Load line equation: $V_{CE} = V_{CC} - I_C R_C$. Set $V_{CE} = 0$ for $I_{C,\\text{sat}}$, and $I_C = 0$ for $V_{CE,\\text{cutoff}}$.",
    "hintAr": "معادلة خط الحمل: $V_{CE} = V_{CC} - I_C R_C$. عند $V_{CE} = 0$ نجد $I_{C,\\text{sat}} = \\frac{V_{CC}}{R_C}$، وعند $I_C = 0$ نجد $V_{CE} = V_{CC}$.",
    "stepByStepSolutionEn": [
      "The DC load line equation is $V_{CE} = V_{CC} - I_C R_C$. Setting $V_{CE} = 0$ (vertical axis intercept, full saturation): $I_{C,\\text{sat}} = \\frac{V_{CC}}{R_C} = \\frac{10\\text{ V}}{2000\\,\\Omega} = 5 \\times 10^{-3}\\text{ A} = 5\\text{ mA}$. Setting $I_C = 0$ (horizontal axis intercept, complete cutoff): $V_{CE,\\text{cutoff}} = V_{CC} = 10\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة خط الحمل هي: $V_{CE} = V_{CC} - I_C R_C$. عند التشبع الكامل تكون $V_{CE} = 0$ فيكون أقصى تيار مجمع $I_{C,\\text{sat}} = \\frac{V_{CC}}{R_C} = \\frac{10}{2000} = 5\\text{ mA}$. وعند حالة القطع التام يكون $I_C = 0$ فيكون أقصى فرق جهد $V_{CE} = V_{CC} = 10\\text{ V}$."
    ],
    "teacherTipEn": "The transistor operates in its active linear amplifying region strictly between these two extreme boundary points.",
    "teacherTipAr": "يعمل الترانزستور كمكبر خطي للإشارات في المنطقة الفعالة الواقعة بين هاتين النقطتين المتطرفتين."
  },
  {
    "id": "phys_ch6_db_hots_51",
    "titleEn": "Ratio of de Broglie Wavelengths in First Two Bohr Orbits",
    "titleAr": "نسبة طول موجة دي برولي لإلكترون في المدارين الأول والثاني لبور",
    "difficulty": "hots",
    "questionEn": "According to Bohr's model, what is the ratio of the de Broglie wavelength of an electron in the first orbit ($\\lambda_1$) to that in the second orbit ($\\lambda_2$) of a hydrogen atom?",
    "questionAr": "وفقاً لنموذج بور، ما هي النسبة بين طول موجة دي برولي المصاحبة للإلكترون في المدار الأول ($\\lambda_1$) إلى طول موجته في المدار الثاني ($\\lambda_2$) لذرة الهيدروجين؟",
    "optionsEn": [
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{2}{1}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{4}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{4}{1}$"
    ],
    "optionsAr": [
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{2}{1}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{4}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$",
      "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{4}{1}$"
    ],
    "correctAnswer": "$\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$",
    "correctIndex": 2,
    "hintEn": "$\\lambda = \\frac{h}{mv}$. In Bohr's atom, velocity is $v_n \\propto \\frac{1}{n}$, so $\\lambda_n \\propto n$.",
    "hintAr": "طول موجة دي برولي $\\lambda = \\frac{h}{mv}$. سرعة الإلكترون في مدارات بور تتناسب عكسياً مع $n$ ($v_n \\propto \\frac{1}{n}$)، إذن $\\lambda \\propto n$.",
    "stepByStepSolutionEn": [
      "The de Broglie wavelength is $\\lambda = \\frac{h}{p} = \\frac{h}{m v}$. In Bohr's model, the electron orbital velocity is inversely proportional to $n$: $v_n \\propto \\frac{1}{n}$. Therefore, $\\lambda_n \\propto \\frac{1}{v_n} \\propto n$. Hence, $\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$."
    ],
    "stepByStepSolutionAr": [
      "طول موجة دي برولي يعطى من العلاقة $\\lambda = \\frac{h}{mv}$. في نموذج بور تتناسب سرعة الإلكترون في المدار عكسياً مع رتبة المدار ($v \\propto \\frac{1}{n}$)، وعليه يتناسب طول موجة دي برولي طردياً مع رقم المدار ($\\lambda \\propto n$). إذن $\\frac{\\lambda_1}{\\lambda_2} = \\frac{1}{2}$."
    ],
    "teacherTipEn": "You can also verify from $2\\pi r_n = n\\lambda_n$: since $r_n \\propto n^2$, $\\lambda_n = \\frac{2\\pi r_n}{n} \\propto \\frac{n^2}{n} = n$.",
    "teacherTipAr": "طريقة أخرى للتحقق: $2\\pi r_n = n\\lambda_n$، وبما أن $r_n \\propto n^2$ فإن $\\lambda_n \\propto \\frac{n^2}{n} = n$."
  },
  {
    "id": "phys_ch6_db_hots_52",
    "titleEn": "Bohr Electron Kinetic vs Potential vs Total Energy Relations",
    "titleAr": "العلاقة بين طاقة الحركة وطاقة الوضع والطاقة الكلية لإلكترون بور",
    "difficulty": "hots",
    "questionEn": "In Bohr's model of the hydrogen atom, if the total energy of an electron in a given stationary orbit is $E_n$ ($E_n < 0$), what are its kinetic energy $K$ and electrical potential energy $U$?",
    "questionAr": "في نموذج بور لذرة الهيدروجين، إذا كانت الطاقة الكلية لإلكترون في مدار محدد هي $E_n$ ($E_n < 0$)، فما هي طاقة حركته $K$ وطاقة وضعه الكهربية $U$ بدلالة $E_n$؟",
    "optionsEn": [
      "$K = E_n \\quad \\text{and} \\quad U = -E_n$",
      "$K = -\\frac{1}{2}E_n \\quad \\text{and} \\quad U = \\frac{1}{2}E_n$",
      "$K = -2E_n \\quad \\text{and} \\quad U = E_n$",
      "$K = -E_n \\quad \\text{and} \\quad U = 2E_n$"
    ],
    "optionsAr": [
      "$K = E_n \\quad \\text{و} \\quad U = -E_n$",
      "$K = -\\frac{1}{2}E_n \\quad \\text{و} \\quad U = \\frac{1}{2}E_n$",
      "$K = -2E_n \\quad \\text{و} \\quad U = E_n$",
      "$K = -E_n \\quad \\text{و} \\quad U = 2E_n$"
    ],
    "correctAnswer": "$K = -E_n \\quad \\text{and} \\quad U = 2E_n$",
    "correctIndex": 3,
    "hintEn": "Virial theorem for Coulomb potential: $U = -2K$, and total energy is $E = K + U = K - 2K = -K$.",
    "hintAr": "طاقة الحركة موجبة دائماً $K > 0$، وطاقة الوضع سالبة وضعف طاقة الحركة $U = -2K$.",
    "stepByStepSolutionEn": [
      "For an inverse-square Coulomb force, the electrostatic potential energy is negative: $U = -\\frac{k e^2}{r}$. The centripetal force balance $\\frac{m v^2}{r} = \\frac{k e^2}{r^2}$ gives kinetic energy $K = \\frac{1}{2} m v^2 = \\frac{k e^2}{2r} = -\\frac{1}{2} U$. Total energy is $E = K + U = -K = \\frac{1}{2} U$. Therefore: $K = -E_n$ and $U = 2E_n$. For example, in ground state: $E_1 = -13.6\\text{ eV} \\implies K_1 = +13.6\\text{ eV}$ and $U_1 = -27.2\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "في مجال كولوم الكهربي، تكون طاقة الوضع سالبة: $U = -2K$. الطاقة الكلية هي مجموع طاقتي الحركة والوضع: $E = K + U = K - 2K = -K$. وعليه فإن طاقة الحركة دائماً موجبة وتساوي القيمة المطلقة للطاقة الكلية ($K = -E_n$)، وطاقة الوضع الكهربية سالبة وضعف الطاقة الكلية ($U = 2E_n$). مثال للمستوى الأول: الطاقة الكلية $-13.6\\text{ eV}$، طاقة الحركة $+13.6\\text{ eV}$، وطاقة الوضع $-27.2\\text{ eV}$."
    ],
    "teacherTipEn": "Always remember that kinetic energy CANNOT be negative ($K = \\frac{1}{2}mv^2 \\ge 0$).",
    "teacherTipAr": "تذكر دائماً أن طاقة الحركة كمية موجبة دائماً ولا يمكن أن تكون سالبة."
  },
  {
    "id": "phys_ch6_db_hots_53",
    "titleEn": "Transistor Common Emitter Voltage Gain Calculation",
    "titleAr": "حساب كسب الجهد في مكبر الترانزستور ذي الباعث المشترك",
    "difficulty": "hots",
    "questionEn": "A common-emitter transistor amplifier has a current gain of $\\beta_e = 80$, an input base resistance of $R_{in} = 1\\text{ k}\\Omega$, and a collector load resistance of $R_C = 5\\text{ k}\\Omega$. What is the voltage gain ($A_v$) of this amplifier?",
    "questionAr": "مكبر ترانزستور ذو باعث مشترك له معامل تكبير تيار $\\beta_e = 80$، ومقاومة دائرة الدخل (القاعدة) $R_{in} = 1\\text{ k}\\Omega$، ومقاومة دائرة الخرج (المجمع) $R_C = 5\\text{ k}\\Omega$. ما هو كسب الجهد ($A_v$) لهذا المكبر؟",
    "optionsEn": [
      "$A_v = 400$",
      "$A_v = 80$",
      "$A_v = 16$",
      "$A_v = 4000$"
    ],
    "optionsAr": [
      "$A_v = 400$",
      "$A_v = 80$",
      "$A_v = 16$",
      "$A_v = 4000$"
    ],
    "correctAnswer": "$A_v = 400$",
    "correctIndex": 0,
    "hintEn": "Voltage gain is $A_v = \\frac{V_{out}}{V_{in}} = \\frac{I_C R_C}{I_B R_{in}} = \\beta_e \\times \\frac{R_C}{R_{in}}$.",
    "hintAr": "كسب الجهد هو حاصل ضرب معامل تكبير التيار في نسبة مقاومة الخرج إلى الدخل: $A_v = \\beta_e \\times \\frac{R_C}{R_{in}}$.",
    "stepByStepSolutionEn": [
      "Voltage gain is defined as the ratio of output signal voltage to input signal voltage: $A_v = \\frac{v_{out}}{v_{in}} = \\frac{i_c R_C}{i_b R_{in}} = \\left(\\frac{i_c}{i_b}\\right) \\times \\left(\\frac{R_C}{R_{in}}\\right) = \\beta_e \\times \\frac{R_C}{R_{in}}$. Substituting the values: $A_v = 80 \\times \\frac{5000\\,\\Omega}{1000\\,\\Omega} = 80 \\times 5 = 400$."
    ],
    "stepByStepSolutionAr": [
      "يعرف كسب الجهد بأنه النسبة بين جهد الخرج إلى جهد الدخل: $A_v = \\frac{v_{out}}{v_{in}} = \\frac{I_c R_C}{I_b R_{in}} = \\beta_e \\times \\frac{R_C}{R_{in}}$. بالتعويض: $A_v = 80 \\times \\frac{5000}{1000} = 80 \\times 5 = 400$."
    ],
    "teacherTipEn": "Power gain is $A_p = A_v \\times A_i = 400 \\times 80 = 32,000$.",
    "teacherTipAr": "كسب القدرة يحسب من حاصل ضرب كسب الجهد في كسب التيار: $A_p = A_v \\times \\beta_e = 400 \\times 80 = 32000$."
  },
  {
    "id": "phys_ch6_db_hots_54",
    "titleEn": "Logic Gate Equivalent Function of Compound Circuit",
    "titleAr": "تحديد البوابة المكافئة لدائرة منطقية مركبة",
    "difficulty": "hots",
    "questionEn": "A digital logic circuit feeds two inputs $A$ and $B$ into an OR gate followed immediately by an inverter (NOT gate). What single standard logic gate is exactly equivalent to this configuration?",
    "questionAr": "دائرة منطقية رقمية تتكون من مدخلين $A$ و $B$ متصلين ببوابة OR ويليها مباشرة عاكس (بوابة NOT). ما هي البوابة المنطقية القياسية المفردة المكافئة تماماً لهذا التركيب؟",
    "optionsEn": [
      "NAND gate",
      "NOR gate",
      "XOR gate",
      "AND gate"
    ],
    "optionsAr": [
      "بوابة NAND (نفي التوافق)",
      "بوابة NOR (نفي الاختيار)",
      "بوابة XOR (الاختيار الحصري)",
      "بوابة AND (التوافق)"
    ],
    "correctAnswer": "NOR gate",
    "correctIndex": 1,
    "hintEn": "NOT(OR) = NOR.",
    "hintAr": "بوابة OR متبوعة بـ NOT تسمى NOR.",
    "stepByStepSolutionEn": [
      "The OR gate outputs $A + B$. The subsequent NOT gate inverts this result to produce $Y = \\overline{A + B}$. By definition, this represents a NOR gate (NOT-OR). Its output is $1$ only when both $A = 0$ and $B = 0$; for all other input combinations, the output is $0$."
    ],
    "stepByStepSolutionAr": [
      "تنتج بوابة OR التعبير $A + B$، وعندما يمر على عاكس NOT يصبح الخرج $Y = \\overline{A + B}$. هذا التعبير هو التعريف القياسي لبوابة NOR (NOT-OR)، والتي تعطي خرجاً يساوي 1 فقط إذا كان كلا المدخلين صفراً، بينما تعطي صفراً في جميع الحالات الأخرى."
    ],
    "teacherTipEn": "De Morgan's theorem states that $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.",
    "teacherTipAr": "وفقاً لقانون دي مورجان، فإن بوابة NOR تكافئ أيضاً بوابة AND ذات مدخلات معكوسة: $\\overline{A+B} = \\overline{A} \\cdot \\overline{B}$."
  },
  {
    "id": "phys_ch6_db_hots_55",
    "titleEn": "Doped Semiconductor Behavior at Extremely High Temperatures",
    "titleAr": "سلوك شبه الموصل المطعم عند درجات الحرارة المرتفعة جداً",
    "difficulty": "hots",
    "questionEn": "What happens to an n-type or p-type doped semiconductor if its temperature is raised to an extremely high level (e.g., several hundred degrees Celsius)?",
    "questionAr": "ماذا يحدث لبلورة شبه موصل مطعمة (سواء من النوع الموجب أو السالب) إذا ارتفعت درجة حرارتها إلى درجات عالية جداً (مئات الدرجات المئوية)؟",
    "optionsEn": [
      "The dopant atoms fuse together to form a superconductor",
      "The crystal becomes a perfect insulator as all atoms vaporize instantly",
      "It loses its extrinsic properties and behaves as an intrinsic semiconductor, because the concentration of thermally generated electron-hole pairs overwhelmingly exceeds the dopant concentration ($n_i \\gg N_D$ or $N_A$)",
      "The semiconductor permanently switches into a p-n diode"
    ],
    "optionsAr": [
      "تندمج ذرات الشوائب معاً لتكوين موصل فائق التوصيل",
      "تصبح البلورة عازلاً تاماً لتبخر جميع الذرات",
      "تفقد خواص التطعيم وتسلك كسلوك شبه موصل نقي، لأن تركيز حاملات الشحنة المتولدة حرارياً يصبح أكبر بكثير من تركيز ذرات الشوائب ($n_i \\gg N_D$ أو $N_A$)",
      "تتحول البلورة تلقائياً ودائماً إلى وصلة ثنائية"
    ],
    "correctAnswer": "It loses its extrinsic properties and behaves as an intrinsic semiconductor, because the concentration of thermally generated electron-hole pairs overwhelmingly exceeds the dopant concentration ($n_i \\gg N_D$ or $N_A$)",
    "correctIndex": 2,
    "hintEn": "Thermal excitation breaks millions of bonds: $n_i$ grows exponentially and dwarfs fixed impurity density $N_D$.",
    "hintAr": "التأثير الحراري يكسر روابط بأعداد هائلة فيصبح $n_i$ أكبر بكثير من تركيز الشوائب $N_D$ فيتساوى تقريباً $n$ مع $p$.",
    "stepByStepSolutionEn": [
      "Dopant impurity concentration ($N_D$ or $N_A$) is fixed and independent of temperature. As temperature escalates to very high values, massive thermal agitation ruptures countless covalent bonds throughout the silicon matrix, causing intrinsic carrier concentration $n_i(T)$ to soar exponentially. When $n_i \\gg N_D$, thermally generated electrons and holes far outnumber the dopant contributions, so $n \\approx p \\approx n_i$. The semiconductor ceases to operate as an extrinsic device and reverts to intrinsic behavior."
    ],
    "stepByStepSolutionAr": [
      "تركيز الشوائب ($N_D$ أو $N_A$) كمية ثابتة لا تتغير بالحرارة. عند رفع درجة الحرارة لدرجات عالية جداً، تؤدي الطاقة الحرارية الهائلة إلى تكسير أعداد ضخمة من الروابط التساهمية فيرتفع التركيز الأصلي $n_i$ أضعافاً مضاعفة حتى يصبح $n_i \\gg N_D$، وتصبح أعداد الإلكترونات والفجوات المتولدة حرارياً تفوق بكثير شوائب التطعيم، ويتساوى تقريباً $n \\approx p \\approx n_i$ وتفقد البلورة ميزتها التطعيمية وتسلك كسلوك بلورة نقية."
    ],
    "teacherTipEn": "This thermal limit defines the maximum operating temperature of silicon transistors (typically $\\approx 150^\\circ\\text{C}$).",
    "teacherTipAr": "هذا التحول يحدد الحد الأقصى لدرجة حرارة تشغيل الترانزستورات السيليكونية (حوالي $150^\\circ\\text{C}$)."
  },
  {
    "id": "phys_ch6_db_hots_56",
    "titleEn": "Bremsstrahlung Radiative Deceleration Mechanism",
    "titleAr": "الآلية الكهرومغناطيسية لانبعاث إشعاع الفرملة (الكبح) المستمر للأشعة السينية",
    "difficulty": "hots",
    "questionEn": "According to classical and modern electrodynamics, why does a fast projectile electron emit continuous X-radiation (Bremsstrahlung) when passing close to a heavy target nucleus?",
    "questionAr": "وفقاً للديناميكا الكهرومغناطيسية، لماذا يشع الإلكترون السريع المقذوف طيفاً مستمراً للأشعة السينية (إشعاع الكبح أو الفرملة) عند مروره بالقرب من نواة ثقيلة لمادة الهدف؟",
    "optionsEn": [
      "Because the projectile electron fuses with a nuclear proton",
      "Because the electron knocks out a neutron from the nucleus",
      "Because the target nucleus absorbs the electron's mass completely",
      "Because the attractive Coulomb electric field of the nucleus decelerates the electron, and any accelerating/decelerating charged particle radiates electromagnetic energy"
    ],
    "optionsAr": [
      "لأن الإلكترون المقذوف يندمج مع بروتون داخل النواة",
      "لأن الإلكترون ينتزع نيوتروناً من داخل النواة",
      "لأن نواة الهدف تمتص كتلة الإلكترون بالكامل",
      "لأن مجال كولوم الكهربي الجاذب للنواة يكبح (يبطئ) حركة الإلكترون فيعاني عجلة تقصيرية، وأي شحنة كهربية متسارعة أو متباطئة تشع طاقة كهرومغناطيسية"
    ],
    "correctAnswer": "Because the attractive Coulomb electric field of the nucleus decelerates the electron, and any accelerating/decelerating charged particle radiates electromagnetic energy",
    "correctIndex": 3,
    "hintEn": "Accelerating or decelerating charges emit electromagnetic radiation (Maxwell-Hertz principle).",
    "hintAr": "الشحنات الكهربية التي تتحرك بعجلة تشع موجات كهرومغناطيسية.",
    "stepByStepSolutionEn": [
      "When a high-energy electron penetrates the target material and approaches a heavily charged nucleus ($+Ze$), the strong electrostatic attraction deflects and decelerates the electron (giving it a negative acceleration, or braking deceleration). By Maxwell's equations and quantum mechanics, a decelerating charge must radiate electromagnetic energy. The electron may lose its kinetic energy either in a single catastrophic collision (yielding the maximum photon energy $h\\nu_{\\max} = eV$) or through gradual encounters with varying impact parameters, producing a smooth, continuous spectrum of wavelengths from $\\lambda_{\\min}$ upwards."
    ],
    "stepByStepSolutionAr": [
      "عند اقتراب إلكترون فائق السرعة من نواة ذرة ثقيلة ذات شحنة موجبة كبيرة ($+Ze$)، تؤثر عليه قوة جذب كهربية تجعله يفقد جزءاً من سرعته ويعاني عجلة تقصيرية (فرملة). ووفقاً للنظرية الكهرومغناطيسية، فإن أي جسيم مشحون يتحرك بعجلة يشع طاقة كهرومغناطيسية. قد يفقد الإلكترون طاقته الحركية دفعة واحدة فيتصادم تصادماً مباشراً ليعطي أقصى طاقة فوتون ($h\\nu_{\\max} = eV$)، أو يفقدها على دفعات بدرجات متفاوتة، فينتج طيف متصل يحوي جميع الأطوال الموجية ابتداءً من $\\lambda_{\\min}$."
    ],
    "teacherTipEn": "This German term 'Bremsstrahlung' literally translates to 'braking radiation'.",
    "teacherTipAr": "كلمة بريمشتغالينج (Bremsstrahlung) الألمانية تعني حرفياً 'إشعاع الفرملة أو الكبح'."
  },
  {
    "id": "phys_ch6_db_hots_57",
    "titleEn": "Resonant Cavity Optical Standing Waves and Reflectance Tradeoff",
    "titleAr": "المفاضلة الفيزيائية في اختيار نسبة انعكاس مرآة الخرج لليزر",
    "difficulty": "hots",
    "questionEn": "In a gas laser resonant cavity, what would happen if the output coupler mirror had a reflectance of $100\\%$ instead of $98\\%$, or if its reflectance were reduced to $50\\%$?",
    "questionAr": "في التجويف الرنيني لليزر غازي، ماذا يحدث إذا كانت نسبة انعكاس مرآة الخرج 100% بدلاً من 98%، أو إذا انخفضت نسبة انعكاسها إلى 50%؟",
    "optionsEn": [
      "At $100\\%$ reflectance, no laser beam exits the cavity; at $50\\%$ reflectance, photon loss exceeds optical gain so stimulated emission cannot sustain oscillation",
      "At $100\\%$ reflectance, the laser beam becomes ten times more intense outside",
      "At $50\\%$ reflectance, the laser color changes from red to ultraviolet",
      "Both reflectance values produce identical output power and beam quality"
    ],
    "optionsAr": [
      "عند انعكاس 100% لا يخرج أي شعاع ليزر من الجهاز؛ وعند انعكاس 50% تفوق الخسائر في الفوتونات كسب التضخيم فينطفئ الليزر ولا يستمر الانبعاث المستحث",
      "عند انعكاس 100% يصبح شعاع الليزر الخارجي أقوى بعشر مرات",
      "عند انعكاس 50% يتغير لون الليزر من الأحمر إلى فوق البنفسجي",
      "كلا النسبتين تنتج نفس القدرة الخارجة ونفس جودة الحزمة تماماً"
    ],
    "correctAnswer": "At $100\\%$ reflectance, no laser beam exits the cavity; at $50\\%$ reflectance, photon loss exceeds optical gain so stimulated emission cannot sustain oscillation",
    "correctIndex": 0,
    "hintEn": "Oscillation threshold requires Gain $\\ge$ Losses. Mirror transmission is the 'useful loss' that forms the laser beam.",
    "hintAr": "شرط استمرار الليزر: الكسب الضوئي $\\ge$ الخسائر. نفاذية المرآة هي الخسارة المفيدة التي تمثل شعاع الليزر الخارج.",
    "stepByStepSolutionEn": [
      "For a laser to lase, round-trip optical gain must equal or exceed round-trip losses (threshold condition). If the output mirror is $100\\%$ reflective, the photons remain trapped forever inside the resonant cavity with zero usable external beam. If the reflectance is too low (e.g. $50\\%$), the cavity loses half its photons on every round-trip; because the single-pass gain in He-Ne is modest ($\\sim 2\\%$), the loss far overwhelms the gain, stimulated amplification collapses, and lasing ceases. Thus, a high reflectance like $98\\%$ represents the exact balance needed to sustain oscillation while providing a continuous $2\\%$ output beam."
    ],
    "stepByStepSolutionAr": [
      "لكي يستمر توليد الليزر يجب أن يعوض التضخيم بالانبعاث المستحث جميع الخسائر في الفوتونات (شرط العتبة). فإذا كانت المرآة عاكسة بنسبة 100% تنحبس الفوتونات تماماً داخل الأنبوبة ولا يخرج أي شعاع مفيد للمستخدم. وإذا كانت نسبة الانعكاس منخفضة (مثل 50%) فإن نصف الفوتونات تهرب في كل ارتداد، ولأن معامل التكبير في الهيليوم نيون ضئيل (نحو 2%) فإن الخسارة تفوق الكسب بكثير وينطفئ التضخيم. لذلك تضبط النسبة بدقة عند 98% لتحقيق التوازن الدقيق بين استمرار التضخيم وخروج الحزمة."
    ],
    "teacherTipEn": "The output mirror is deliberately engineered as a precision dielectric Bragg reflector.",
    "teacherTipAr": "تصنع مرآة الخرج كمرآة عازلة متعددة الطبقات مصممة بدقة عظمى لعكس 98% وإنفاذ 2% للطول الموجي المطلوب."
  },
  {
    "id": "phys_ch6_db_hots_58",
    "titleEn": "Complex Multi-Stage Logic Circuit System Synthesis",
    "titleAr": "تحليل دائرة رقمية مركبة للتحكم في نظام إنذار أمني",
    "difficulty": "hots",
    "questionEn": "A digital security system activates an alarm ($Y = 1$) if the main power switch $S$ is ON ($S = 1$) AND either a motion detector $M$ detects motion ($M = 1$) OR a door sensor $D$ detects opening ($D = 1$). Which boolean logic circuit correctly implements this system?",
    "questionAr": "نظام أمني رقمي يطلق إنذاراً ($Y = 1$) إذا كان مفتاح التشغيل الرئيسي $S$ في وضع تشغيل ($S = 1$) وفي نفس الوقت تم رصد حركة بواسطة حساس الحركة $M$ ($M = 1$) أو تم فتح الباب بواسطة حساس الباب $D$ ($D = 1$). أي الدوائر المنطقية التالية تحقق هذا النظام الأمني بدقة؟",
    "optionsEn": [
      "$M$ and $D$ connected to an AND gate, whose output is connected with $S$ to an OR gate: $Y = S + (M \\cdot D)$",
      "$M$ and $D$ connected to an OR gate, whose output is connected along with $S$ to an AND gate: $Y = S \\cdot (M + D)$",
      "$S, M, D$ all connected to a single 3-input AND gate: $Y = S \\cdot M \\cdot D$",
      "$S$ connected to a NOT gate, followed by an OR gate with $M$ and $D$: $Y = \\overline{S} + M + D$"
    ],
    "optionsAr": [
      "توصيل $M$ و $D$ ببوابة AND، ويوصل خرجها مع $S$ ببوابة OR: $Y = S + (M \\cdot D)$",
      "توصيل $M$ و $D$ بمدخلي بوابة OR، ويوصل خرجها مع $S$ بمدخلي بوابة AND: $Y = S \\cdot (M + D)$",
      "توصيل المدخلات الثلاثة جميعاً ببوابة AND واحدة ذات 3 مدخلات: $Y = S \\cdot M \\cdot D$",
      "توصيل $S$ بعاكس NOT ثم توصيله ببوابة OR مع $M$ و $D$: $Y = \\overline{S} + M + D$"
    ],
    "correctAnswer": "$M$ and $D$ connected to an OR gate, whose output is connected along with $S$ to an AND gate: $Y = S \\cdot (M + D)$",
    "correctIndex": 1,
    "hintEn": "'Either M OR D' means OR gate: $(M + D)$. 'AND main switch S' means AND gate: $S \\cdot (M + D)$.",
    "hintAr": "'حساس الحركة أو حساس الباب' تعني بوابة OR: $(M + D)$. 'مع المفتاح الرئيسي S' تعني بوابة AND: $S \\cdot (M + D)$.",
    "stepByStepSolutionEn": [
      "The alarm requires two simultaneous conditions: (1) The system must be armed ($S = 1$), and (2) at least one sensor must trigger ($M = 1$ OR $D = 1$). The condition 'either $M$ or $D$' is implemented using an OR gate with inputs $M$ and $D$, yielding $(M + D)$. To mandate that $S$ is active simultaneously, the output of the OR gate and switch $S$ are fed into an AND gate, yielding the boolean equation $Y = S \\cdot (M + D)$."
    ],
    "stepByStepSolutionAr": [
      "الإنذار يتطلب تحقق شرطين معاً: أولاً أن يكون النظام مفعلاً ($S=1$)، وثانياً أن يعطي أحد الحساسين إشارة تنبيه ($M=1$ أو $D=1$). التعبير عن 'حساس الحركة أو حساس الباب' يتم عبر بوابة OR فيعطي $(M+D)$. ولكي يشترط تشغيل المفتاح الرئيسي مع أي منهما، يدخل خرج بوابة OR مع المفتاح $S$ على بوابة AND، فيكون التعبير المنطقي النهائي للدائرة هو $Y = S \\cdot (M + D)$."
    ],
    "teacherTipEn": "If $S = 0$, $Y = 0$ unconditionally, deactivating the alarm regardless of sensor activity.",
    "teacherTipAr": "إذا كان المفتاح الرئيسي $S = 0$ فإن الخرج $Y = 0$ حتماً، مما يعطل الإنذار تماماً عند إيقاف النظام."
  }
]
};
