import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacPhysCh2Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_phys_ch2_db_easy_01",
    "titleEn": "Bohr First Postulate",
    "titleAr": "الفرض الأول لنظرية بور",
    "difficulty": "easy",
    "questionEn": "According to Bohr's first postulate for the hydrogen atom, an electron revolving in a stable orbit:",
    "questionAr": "وفقاً للفرض الأول لنظرية بور لذرة الهيدروجين، فإن الإلكترون الذي يدور في مدار مستقر:",
    "optionsEn": [
      "Does not radiate electromagnetic energy continuously despite its centripetal acceleration",
      "Radiates continuous electromagnetic radiation in agreement with Maxwell's classical electrodynamics",
      "Spirals inward rapidly and collapses into the positively charged nucleus within picoseconds",
      "Maintains zero kinetic energy and zero linear momentum at all times"
    ],
    "optionsAr": [
      "لا يشع طاقة كهرومغناطيسية باستمرار على الرغم من امتلاكه تسارعاً مركزياً",
      "يشع موجات كهرومغناطيسية متصلة طبقاً لكهروديناميكا ماكسويل الكلاسيكية",
      "ينحدر لولبياً نحو الداخل ويسقط في النواة الموجبة خلال أجزاء من البيكو ثانية",
      "يظل محتفظاً بطاقة حركة مساوية للصفر وكمية حركة خطية منعدمة طوال الوقت"
    ],
    "correctAnswer": "Does not radiate electromagnetic energy continuously despite its centripetal acceleration",
    "correctIndex": 0,
    "hintEn": "Recall Bohr's stationary states postulate.",
    "hintAr": "تذكر فرض الحالات المستقرة لبور.",
    "stepByStepSolutionEn": [
      "Bohr postulated stationary non-radiating orbits where classical electrodynamic radiation is suppressed."
    ],
    "stepByStepSolutionAr": [
      "افترض بور مدارات مستقرة غير مشعة حيث تُعطل قوانين الكهروديناميكا الكلاسيكية التي تتنبأ بالانهيار."
    ],
    "teacherTipEn": "Stationary orbits explain the remarkable stability of matter.",
    "teacherTipAr": "تفسر المدارات المستقرة ثبات المادة وعدم انهيار الذرات."
  },
  {
    "id": "egbac_phys_ch2_db_easy_02",
    "titleEn": "Bohr Angular Momentum Quantization",
    "titleAr": "تكميم كمية الحركة الزاوية لبور",
    "difficulty": "easy",
    "questionEn": "Bohr's second postulate asserts that an electron's orbital angular momentum $L$ in an allowed orbit of principal quantum number $n$ is quantized as:",
    "questionAr": "ينص فرض بور الثاني على أن كمية الحركة الزاوية المدارية $L$ للإلكترون في مدار مسموح برتبة $n$ مكممة بالعلاقة:",
    "optionsEn": [
      "$L = m v r = \\frac{h}{2\\pi n}$",
      "$L = m v r = \\frac{n h}{2\\pi} = n\\hbar$",
      "$L = m v r = 2\\pi n h$",
      "$L = m v r = \\frac{n^2 h}{4\\pi}$"
    ],
    "optionsAr": [
      "$L = m v r = \\frac{h}{2\\pi n}$",
      "$L = m v r = \\frac{n h}{2\\pi} = n\\hbar$",
      "$L = m v r = 2\\pi n h$",
      "$L = m v r = \\frac{n^2 h}{4\\pi}$"
    ],
    "correctAnswer": "$L = m v r = \\frac{n h}{2\\pi} = n\\hbar$",
    "correctIndex": 1,
    "hintEn": "Angular momentum is an integer multiple of Dirac constant $\\hbar = h / (2\\pi)$.",
    "hintAr": "كمية الحركة الزاوية مضاعف صحيح لثابت ديراك $\\hbar = h / (2\\pi)$.",
    "stepByStepSolutionEn": [
      "Quantization condition: $L = n \\hbar = n \\frac{h}{2\\pi}$."
    ],
    "stepByStepSolutionAr": [
      "شرط التكميم: $L = n \\hbar = n \\frac{h}{2\\pi}$."
    ],
    "teacherTipEn": "Notice that angular momentum has the same physical dimensions as Planck's constant (J·s).",
    "teacherTipAr": "لاحظ أن كمية الحركة الزاوية لها نفس أبعاد ثابت بلانك (جول·ثانية)."
  },
  {
    "id": "egbac_phys_ch2_db_easy_03",
    "titleEn": "Bohr Frequency Condition",
    "titleAr": "شرط التردد لبور",
    "difficulty": "easy",
    "questionEn": "When an atomic electron transitions from an initial energy state $E_i$ to a lower final state $E_f$, the frequency $\\nu$ of the emitted photon is:",
    "questionAr": "عند انتقال إلكترون ذري من مستوى طاقة ابتدائي $E_i$ إلى مستوى نهائي أقل $E_f$، فإن تردد $\\nu$ للفوتون المنبعث يحسب من:",
    "optionsEn": [
      "$\\nu = \\frac{h}{E_i - E_f}$",
      "$\\nu = h (E_i - E_f)$",
      "$\\nu = \\frac{E_i - E_f}{h}$",
      "$\\nu = \\frac{E_i + E_f}{2h}$"
    ],
    "optionsAr": [
      "$\\nu = \\frac{h}{E_i - E_f}$",
      "$\\nu = h (E_i - E_f)$",
      "$\\nu = \\frac{E_i - E_f}{h}$",
      "$\\nu = \\frac{E_i + E_f}{2h}$"
    ],
    "correctAnswer": "$\\nu = \\frac{E_i - E_f}{h}$",
    "correctIndex": 2,
    "hintEn": "Apply conservation of energy: photon energy equals the difference between two discrete levels.",
    "hintAr": "طبق قانون بقاء الطاقة: طاقة الفوتون المنبعث تساوي الفرق بين طاقتي المستويين.",
    "stepByStepSolutionEn": [
      "Photon energy $\\Delta E = h\\nu = E_i - E_f$, thus $\\nu = (E_i - E_f)/h$."
    ],
    "stepByStepSolutionAr": [
      "طاقة الفوتون $\\Delta E = h\\nu = E_i - E_f$، إذن $\\nu = (E_i - E_f)/h$."
    ],
    "teacherTipEn": "This condition directly accounts for the discrete line nature of emission spectra.",
    "teacherTipAr": "يفسر هذا الشرط الطبيعة الخطية المنفصلة لأطياف الانبعاث الذرية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_04",
    "titleEn": "Hydrogen Ground State Energy",
    "titleAr": "طاقة المستوى الأرضي لذرة الهيدروجين",
    "difficulty": "easy",
    "questionEn": "The total energy of an electron in the ground state ($n=1$) of the hydrogen atom is exactly:",
    "questionAr": "طاقة الإلكترون الكلية في المستوى الأرضي ($n=1$) لذرة الهيدروجين تساوي تماماً:",
    "optionsEn": [
      "$+13.6\\text{ eV}$",
      "$-3.4\\text{ eV}$",
      "$0.0\\text{ eV}$",
      "$-13.6\\text{ eV}$"
    ],
    "optionsAr": [
      "$+13.6\\text{ eV}$",
      "$-3.4\\text{ eV}$",
      "$0.0\\text{ eV}$",
      "$-13.6\\text{ eV}$"
    ],
    "correctAnswer": "$-13.6\\text{ eV}$",
    "correctIndex": 3,
    "hintEn": "Remember that bound electron states have negative total energy.",
    "hintAr": "تذكر أن حالات الإلكترون المقيد تكون ذات طاقة كلية سالبة.",
    "stepByStepSolutionEn": [
      "Using Bohr's formula: $E_n = -13.6/n^2\\text{ eV}$. For $n=1$, $E_1 = -13.6\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "باستخدام صيغة بور: $E_n = -13.6/n^2\\text{ eV}$، عند $n=1$ نجد $E_1 = -13.6\\text{ eV}$."
    ],
    "teacherTipEn": "The negative sign denotes that energy must be supplied from outside to liberate the electron.",
    "teacherTipAr": "الإشارة السالبة تعني أنه يجب تزويد الذرة بطاقة من الخارج لتحرير الإلكترون."
  },
  {
    "id": "egbac_phys_ch2_db_easy_05",
    "titleEn": "Hydrogen Ionization Energy",
    "titleAr": "طاقة تأين ذرة الهيدروجين المستقرة",
    "difficulty": "easy",
    "questionEn": "The minimum external energy required to ionize a ground-state hydrogen atom ($n=1 \\to \\infty$) is:",
    "questionAr": "أقل طاقة خارجية لازمة لتأين ذرة هيدروجين في حالتها المستقرة ($n=1 \\to \\infty$) هي:",
    "optionsEn": [
      "$+13.6\\text{ eV}$",
      "$+3.4\\text{ eV}$",
      "$+10.2\\text{ eV}$",
      "$+1.51\\text{ eV}$"
    ],
    "optionsAr": [
      "$+13.6\\text{ eV}$",
      "$+3.4\\text{ eV}$",
      "$+10.2\\text{ eV}$",
      "$+1.51\\text{ eV}$"
    ],
    "correctAnswer": "$+13.6\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "Ionization energy is $E_\\infty - E_1 = 0 - (-13.6\\text{ eV})$.",
    "hintAr": "طاقة التأين هي $E_\\infty - E_1 = 0 - (-13.6\\text{ eV})$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = E_\\infty - E_1 = 0 - (-13.6) = +13.6\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E = E_\\infty - E_1 = 0 - (-13.6) = +13.6\\text{ eV}$."
    ],
    "teacherTipEn": "The corresponding ionization potential is $13.6\\text{ V}$.",
    "teacherTipAr": "جهد التأين المقابل هو $13.6\\text{ فولت}$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_06",
    "titleEn": "Lyman Series Spectral Domain",
    "titleAr": "النطاق الطيفي لمتسلسلة ليمان",
    "difficulty": "easy",
    "questionEn": "The Lyman spectral series of hydrogen results from transitions ending on $n=1$ and lies exclusively in the:",
    "questionAr": "تنتج متسلسلة ليمان في طيف الهيدروجين عند هبوط الإلكترونات إلى المستوى $n=1$ وتقع كلياً في نطاق:",
    "optionsEn": [
      "Visible light region",
      "Ultraviolet (UV) region",
      "Infrared (IR) region",
      "Microwave region"
    ],
    "optionsAr": [
      "منطقة الضوء المنظور",
      "منطقة الأشعة فوق البنفسجية (UV)",
      "منطقة الأشعة تحت الحمراء (IR)",
      "منطقة الموجات الميكروية"
    ],
    "correctAnswer": "Ultraviolet (UV) region",
    "correctIndex": 1,
    "hintEn": "Transitions to $n=1$ involve the largest energy gaps in hydrogen.",
    "hintAr": "الانتقالات إلى $n=1$ تمثل أكبر فروق طاقة في ذرة الهيدروجين.",
    "stepByStepSolutionEn": [
      "Since $\\Delta E \\ge 10.2\\text{ eV}$, all Lyman photons have wavelengths between $91.2\\text{ nm}$ and $121.6\\text{ nm}$ (UV)."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\Delta E \\ge 10.2\\text{ eV}$، فإن أطوال موجات ليمان تقع بين $91.2\\text{ nm}$ و $121.6\\text{ nm}$ (فوق بنفسجية)."
    ],
    "teacherTipEn": "The human eye cannot perceive Lyman series radiation directly.",
    "teacherTipAr": "لا يمكن للعين البشرية رؤية متسلسلة ليمان مباشرة لأنها فوق بنفسجية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_07",
    "titleEn": "Balmer Series Spectral Domain",
    "titleAr": "النطاق الطيفي لمتسلسلة بالمر",
    "difficulty": "easy",
    "questionEn": "The Balmer spectral series of hydrogen results from transitions ending on $n=2$ and lies in the:",
    "questionAr": "تنتج متسلسلة بالمر لطيف الهيدروجين من الانتقالات المنتهية في المستوى $n=2$ وتقع في:",
    "optionsEn": [
      "Far-infrared region exclusively",
      "Gamma-ray region",
      "Visible and near-ultraviolet region",
      "X-ray region exclusively"
    ],
    "optionsAr": [
      "منطقة تحت الحمراء البعيدة حصراً",
      "منطقة أشعة جاما",
      "منطقة الضوء المرئي وقريب الأشعة فوق البنفسجية",
      "منطقة الأشعة السينية حصراً"
    ],
    "correctAnswer": "Visible and near-ultraviolet region",
    "correctIndex": 2,
    "hintEn": "Balmer is the only series with prominent lines observable to human eyes.",
    "hintAr": "بالمر هي المتسلسلة الوحيدة التي تقع خطوطها البارزة في مدى الرؤية البشرية.",
    "stepByStepSolutionEn": [
      "Lines from $n=3,4,5,6 \\to 2$ produce visible lines ($H_\\alpha, H_\\beta, H_\\gamma, H_\\delta$) with wavelengths from $656.3\\text{ nm}$ to $410.2\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "الانتقالات من $n=3,4,5,6 \\to 2$ تعطي خطوطاً مرئية بأطوال موجية من $656.3\\text{ nm}$ إلى $410.2\\text{ nm}$."
    ],
    "teacherTipEn": "Johann Balmer formulated his empirical formula before Bohr derived it theoretically.",
    "teacherTipAr": "وضع يوهان بالمر معادلته تجريبياً قبل أن يشتقها بور نظرياً."
  },
  {
    "id": "egbac_phys_ch2_db_easy_08",
    "titleEn": "Paschen Series Spectral Domain",
    "titleAr": "النطاق الطيفي لمتسلسلة باشن",
    "difficulty": "easy",
    "questionEn": "The Paschen spectral series corresponds to transitions terminating at $n=3$ and falls within the:",
    "questionAr": "تقابل متسلسلة باشن في طيف الهيدروجين الانتقالات المنتهية عند المستوى $n=3$ وتقع في:",
    "optionsEn": [
      "Ultraviolet region",
      "Visible violet region",
      "Hard X-ray spectrum",
      "Infrared (IR) region"
    ],
    "optionsAr": [
      "منطقة الأشعة فوق البنفسجية",
      "منطقة الضوء البنفسجي المرئي",
      "طيف الأشعة السينية القاسية",
      "منطقة الأشعة تحت الحمراء (IR)"
    ],
    "correctAnswer": "Infrared (IR) region",
    "correctIndex": 3,
    "hintEn": "Transitions ending at $n=3$ have smaller energy differences than Balmer.",
    "hintAr": "الانتقالات المنتهية عند $n=3$ تملك فروق طاقة أصغر من بالمر.",
    "stepByStepSolutionEn": [
      "Energy gaps are below $1.89\\text{ eV}$, corresponding to infrared wavelengths ($\\lambda > 820\\text{ nm}$)."
    ],
    "stepByStepSolutionAr": [
      "فروق الطاقة أقل من $1.89\\text{ eV}$، مما يقابل أطوال موجات تحت حمراء ($\\lambda > 820\\text{ nm}$)."
    ],
    "teacherTipEn": "Paschen lines can be detected using infrared photographic plates or thermopiles.",
    "teacherTipAr": "تُرصد خطوط باشن باستخدام ألواح فوتوغرافية حساسة للأشعة تحت الحمراء أو أعمدة حرارية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_09",
    "titleEn": "Brackett and Pfund Series",
    "titleAr": "متسلسلتا براكت وفوند",
    "difficulty": "easy",
    "questionEn": "The Brackett ($n_f=4$) and Pfund ($n_f=5$) spectral series both belong to which region of the electromagnetic spectrum?",
    "questionAr": "إلى أي منطقة في الطيف الكهرومغناطيسي تنتمي كل من متسلسلة براكت ($n_f=4$) ومتسلسلة فوند ($n_f=5$)؟",
    "optionsEn": [
      "Infrared and far-infrared region",
      "Ultraviolet spectrum",
      "Visible green spectrum",
      "Soft X-ray band"
    ],
    "optionsAr": [
      "منطقة الأشعة تحت الحمراء وتحت الحمراء البعيدة",
      "طيف الأشعة فوق البنفسجية",
      "طيف الضوء الأخضر المرئي",
      "حزمة الأشعة السينية اللينة"
    ],
    "correctAnswer": "Infrared and far-infrared region",
    "correctIndex": 0,
    "hintEn": "Both have higher final quantum numbers and therefore very low photon energies.",
    "hintAr": "كلاهما ينتهي عند رتب كم أعلى وبالتالي يملك فوتونات منخفضة الطاقة جداً.",
    "stepByStepSolutionEn": [
      "As $n_f \\ge 4$, photon energies are less than $0.85\\text{ eV}$, putting them deep into the infrared spectrum."
    ],
    "stepByStepSolutionAr": [
      "بما أن $n_f \\ge 4$، فإن طاقات الفوتونات أقل من $0.85\\text{ eV}$ مما يضعها عميقاً في نطاق تحت الحمراء."
    ],
    "teacherTipEn": "Pfund is often termed the far-infrared series of hydrogen.",
    "teacherTipAr": "تسمى متسلسلة فوند غالباً بمتسلسلة الأشعة تحت الحمراء البعيدة للهيدروجين."
  },
  {
    "id": "egbac_phys_ch2_db_easy_10",
    "titleEn": "Rydberg Formula for Wave Number",
    "titleAr": "صيغة ريدبرج للعدد الموجي",
    "difficulty": "easy",
    "questionEn": "The wave number $\\bar{\\nu} = \\frac{1}{\\lambda}$ for an electron transition between levels $n_1$ and $n_2$ ($n_2 > n_1$) in atomic hydrogen is:",
    "questionAr": "يعبر عن العدد الموجي $\\bar{\\nu} = \\frac{1}{\\lambda}$ لانتقال إلكتروني بين مستويين $n_1$ و $n_2$ ($n_2 > n_1$) في الهيدروجين بالمعادلة:",
    "optionsEn": [
      "$\\bar{\\nu} = R_H \\left(\\frac{1}{n_2} - \\frac{1}{n_1}\\right)$",
      "$\\bar{\\nu} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$",
      "$\\bar{\\nu} = R_H \\left(n_2^2 - n_1^2\\right)$",
      "$\\bar{\\nu} = \\frac{R_H}{n_1^2 + n_2^2}$"
    ],
    "optionsAr": [
      "$\\bar{\\nu} = R_H \\left(\\frac{1}{n_2} - \\frac{1}{n_1}\\right)$",
      "$\\bar{\\nu} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$",
      "$\\bar{\\nu} = R_H \\left(n_2^2 - n_1^2\\right)$",
      "$\\bar{\\nu} = \\frac{R_H}{n_1^2 + n_2^2}$"
    ],
    "correctAnswer": "$\\bar{\\nu} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$",
    "correctIndex": 1,
    "hintEn": "The formula depends inversely on the squares of the principal quantum numbers.",
    "hintAr": "تعتمد الصيغة عكسياً على مربعات رتب الكم الرئيسية.",
    "stepByStepSolutionEn": [
      "$\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$, where $R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$، حيث $R_H \\approx 1.097 \\times 10^7\\text{ m}^{-1}$."
    ],
    "teacherTipEn": "The wave number represents the number of waves per unit length.",
    "teacherTipAr": "يمثل العدد الموجي عدد الموجات الموجودة في وحدة الأطوال."
  },
  {
    "id": "egbac_phys_ch2_db_easy_11",
    "titleEn": "Longest Wavelength in a Spectral Series",
    "titleAr": "أطول طول موجي في المتسلسلة الطيفية",
    "difficulty": "easy",
    "questionEn": "The longest wavelength (minimum frequency) in any hydrogen spectral series ending at level $n_1$ corresponds to a transition from:",
    "questionAr": "أطول طول موجي (أقل تردد) في أي متسلسلة طيفية للهيدروجين تنتهي عند المستوى $n_1$ يقابل انتقالاً من:",
    "optionsEn": [
      "The ionization limit at infinity ($n_2 = \\infty$)",
      "The ground state ($n_2 = 1$)",
      "The immediately adjacent upper level ($n_2 = n_1 + 1$)",
      "The level $n_2 = 2n_1$"
    ],
    "optionsAr": [
      "حد التأين عند المالانهاية ($n_2 = \\infty$)",
      "المستوى الأرضي ($n_2 = 1$)",
      "المستوى الأعلى المجاور له مباشرة ($n_2 = n_1 + 1$)",
      "المستوى $n_2 = 2n_1$"
    ],
    "correctAnswer": "The immediately adjacent upper level ($n_2 = n_1 + 1$)",
    "correctIndex": 2,
    "hintEn": "Longest wavelength corresponds to the minimum photon energy $\\Delta E = h c / \\lambda_{\\max}$.",
    "hintAr": "أطول طول موجي يقابل أقل طاقة فوتون ممكنة $\\Delta E = h c / \\lambda_{\\max}$.",
    "stepByStepSolutionEn": [
      "Minimum transition energy occurs between adjacent levels: $n_2 = n_1 + 1$."
    ],
    "stepByStepSolutionAr": [
      "تحدث أقل طاقة انتقال بين مستويين متتاليين تماماً: $n_2 = n_1 + 1$."
    ],
    "teacherTipEn": "This first line is often designated by the Greek letter $\\alpha$ (e.g., Lyman-$\\alpha$, Balmer-$\\alpha$).",
    "teacherTipAr": "يسمى هذا الخط الأول عادة بالحرف ألفا $\\alpha$ (مثل ليمان-ألفا، بالمر-ألفا)."
  },
  {
    "id": "egbac_phys_ch2_db_easy_12",
    "titleEn": "Shortest Wavelength (Series Limit)",
    "titleAr": "أقصر طول موجي (حد المتسلسلة)",
    "difficulty": "easy",
    "questionEn": "The shortest wavelength in a spectral series, called the series limit ($\\lambda_{\\text{limit}}$), corresponds to a transition from:",
    "questionAr": "يقابل أقصر طول موجي في المتسلسلة الطيفية، والمعروف بحد المتسلسلة ($\\lambda_{\\text{limit}}$)، انتقالاً من:",
    "optionsEn": [
      "An electron starting from $n_2 = n_1 + 1$",
      "An electron transition between $n=2$ and $n=1$",
      "An electron transition from $n_2 = 100$ to $n_1 = 2$",
      "An electron starting from $n_2 = \\infty$ to $n_1$"
    ],
    "optionsAr": [
      "إلكترون قادم من المستوى المجاور $n_2 = n_1 + 1$",
      "انتقال الإلكترون بين $n=2$ و $n=1$",
      "انتقال الإلكترون من $n_2 = 100$ إلى $n_1 = 2$",
      "إلكترون قادم من المستوى اللانهائي $n_2 = \\infty$ إلى $n_1$"
    ],
    "correctAnswer": "An electron starting from $n_2 = \\infty$ to $n_1$",
    "correctIndex": 3,
    "hintEn": "Shortest wavelength means maximum photon energy $\\Delta E_{\\max} = E_\\infty - E_{n1}$.",
    "hintAr": "أقصر طول موجي يعني أقصى طاقة فوتون ممكنة $\\Delta E_{\\max} = E_\\infty - E_{n1}$.",
    "stepByStepSolutionEn": [
      "At $n_2 = \\infty$, $1/n_2^2 = 0$, giving $\\frac{1}{\\lambda_{\\text{limit}}} = \\frac{R_H}{n_1^2}$."
    ],
    "stepByStepSolutionAr": [
      "عند $n_2 = \\infty$، يصبح $1/n_2^2 = 0$، وبالتالي $\\frac{1}{\\lambda_{\\text{limit}}} = \\frac{R_H}{n_1^2}$."
    ],
    "teacherTipEn": "Beyond the series limit, the spectrum transitions from discrete lines to a continuous absorption/emission band.",
    "teacherTipAr": "بعد حد المتسلسلة، يتحول الطيف من خطوط منفصلة إلى شريط متصل."
  },
  {
    "id": "egbac_phys_ch2_db_easy_13",
    "titleEn": "Hydrogen Alpha Line Characteristic Color",
    "titleAr": "اللون المميز لخط هيدروجين-ألفا",
    "difficulty": "easy",
    "questionEn": "The prominent $H_\\alpha$ line of the Balmer series ($n=3 \\to 2$) has a wavelength of approximately $656.3\\text{ nm}$ and exhibits which distinctive color?",
    "questionAr": "يمتلك خط $H_\\alpha$ البارز في متسلسلة بالمر ($n=3 \\to 2$) طولاً موجياً يقارب $656.3\\text{ nm}$ ويتميز بلون:",
    "optionsEn": [
      "Bright Red",
      "Deep Blue",
      "Emerald Green",
      "Intense Violet"
    ],
    "optionsAr": [
      "أحمر ساطع",
      "أزرق داكن",
      "أخضر زمردي",
      "بنفسجي شديد"
    ],
    "correctAnswer": "Bright Red",
    "correctIndex": 0,
    "hintEn": "Wavelengths near $650 - 700\\text{ nm}$ are in the red end of the visible spectrum.",
    "hintAr": "الأطوال الموجية قرب $650 - 700\\text{ nm}$ تقع في الطرف الأحمر للطيف المرئي.",
    "stepByStepSolutionEn": [
      "$H_\\alpha$ at $656.3\\text{ nm}$ is the primary red spectral line giving hydrogen gas discharges their warm reddish glow."
    ],
    "stepByStepSolutionAr": [
      "خط $H_\\alpha$ عند $656.3\\text{ nm}$ هو الخط الأحمر الأساسي الذي يمنح أنبوب تفريغ الهيدروجين وهجه الوردي المحمر."
    ],
    "teacherTipEn": "Astronomers use $H_\\alpha$ filters to photograph solar flares and emission nebulae.",
    "teacherTipAr": "يستخدم علماء الفلك مرشحات $H_\\alpha$ لتصوير التوهجات الشمسية والسدم الانبعاثية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_14",
    "titleEn": "Hydrogen Beta Line Color",
    "titleAr": "لون خط هيدروجين-بيتا",
    "difficulty": "easy",
    "questionEn": "The $H_\\beta$ line of the Balmer series ($n=4 \\to 2$) has a wavelength of approximately $486.1\\text{ nm}$ and appears as:",
    "questionAr": "يملك خط $H_\\beta$ في متسلسلة بالمر ($n=4 \\to 2$) طولاً موجياً يقارب $486.1\\text{ nm}$ ويظهر بلون:",
    "optionsEn": [
      "Orange",
      "Cyan (Blue-Green)",
      "Deep Yellow",
      "Infrared invisible"
    ],
    "optionsAr": [
      "برتقالي",
      "أزرق مخضر (سماوي / تركواز)",
      "أصفر فاقع",
      "تحت أحمر غير مرئي"
    ],
    "correctAnswer": "Cyan (Blue-Green)",
    "correctIndex": 1,
    "hintEn": "Wavelength around $486\\text{ nm}$ lies between pure green and blue.",
    "hintAr": "الطول الموجي حوالي $486\\text{ nm}$ يقع بين الأخضر والأزرق الصافي.",
    "stepByStepSolutionEn": [
      "Transition $n=4 \\to 2$ releases $\\Delta E = 2.55\\text{ eV}$, corresponding to $\\lambda = 486.1\\text{ nm}$ (cyan)."
    ],
    "stepByStepSolutionAr": [
      "الانتقال $n=4 \\to 2$ يحرر طاقة $\\Delta E = 2.55\\text{ eV}$ تقابل طول موجة $486.1\\text{ nm}$ (سماوي)."
    ],
    "teacherTipEn": "It is the second line in Balmer's series.",
    "teacherTipAr": "هو ثاني خطوط متسلسلة بالمر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_15",
    "titleEn": "Hydrogen Gamma and Delta Lines",
    "titleAr": "خطا هيدروجين-جاما ودلتا",
    "difficulty": "easy",
    "questionEn": "The $H_\\gamma$ ($n=5 \\to 2$, $\\lambda \\approx 434.0\\text{ nm}$) and $H_\\delta$ ($n=6 \\to 2$, $\\lambda \\approx 410.2\\text{ nm}$) lines appear in the visible spectrum as:",
    "questionAr": "يظهر خطا $H_\\gamma$ ($n=5 \\to 2$، $\\lambda \\approx 434.0\\text{ nm}$) و $H_\\delta$ ($n=6 \\to 2$، $\\lambda \\approx 410.2\\text{ nm}$) في الطيف المرئي بلوني:",
    "optionsEn": [
      "Yellow and Red respectively",
      "Green and Amber respectively",
      "Blue and Violet respectively",
      "Infrared and Radio respectively"
    ],
    "optionsAr": [
      "أصفر وأحمر على الترتيب",
      "أخضر وكهرماني على الترتيب",
      "أزرق وبنفسجي على الترتيب",
      "تحت أحمر وراديوي على الترتيب"
    ],
    "correctAnswer": "Blue and Violet respectively",
    "correctIndex": 2,
    "hintEn": "Shorter wavelengths approaching $400\\text{ nm}$ represent the blue-violet region.",
    "hintAr": "الأطوال الموجية الأقصر المقتربة من $400\\text{ nm}$ تمثل المنطقة الزرقاء والبنفسجية.",
    "stepByStepSolutionEn": [
      "$H_\\gamma$ is blue ($434\\text{ nm}$) and $H_\\delta$ is violet ($410\\text{ nm}$), completing the 4 visible lines of Balmer."
    ],
    "stepByStepSolutionAr": [
      "خط $H_\\gamma$ أزرق ($434\\text{ nm}$) و $H_\\delta$ بنفسجي ($410\\text{ nm}$)، ليكتملا خطوط بالمر المرئية الأربعة."
    ],
    "teacherTipEn": "Beyond $H_\\delta$, the lines crowd together near the Balmer series limit at $364.6\\text{ nm}$ in the near-UV.",
    "teacherTipAr": "بعد $H_\\delta$ تتزاحم الخطوط قرب حد المتسلسلة لبالمر عند $364.6\\text{ nm}$ في فوق البنفسجية القريبة."
  },
  {
    "id": "egbac_phys_ch2_db_easy_16",
    "titleEn": "Continuous Spectrum Definition",
    "titleAr": "تعريف الطيف المستمر",
    "difficulty": "easy",
    "questionEn": "Which of the following light sources produces a continuous emission spectrum containing all visible wavelengths without gaps?",
    "questionAr": "أي مصادر الضوء التالية يولد طيف انبعاث مستمر يحتوي على جميع الأطوال الموجية المرئية دون انقطاع؟",
    "optionsEn": [
      "A low-pressure hydrogen gas discharge tube",
      "A cool sodium vapor chamber illuminated from the side",
      "A low-density mercury arc lamp",
      "An incandescent solid tungsten filament heated to white heat"
    ],
    "optionsAr": [
      "أنبوب تفريغ كهربي لغاز هيدروجين منخفض الضغط",
      "غرفة بخار صوديوم بارد مضاءة من الجانب",
      "مصباح قوس زئبقي منخفض الكثافة",
      "فتيلة تنجستن صلبة متوهجة مسخنة لدرجة البياض"
    ],
    "correctAnswer": "An incandescent solid tungsten filament heated to white heat",
    "correctIndex": 3,
    "hintEn": "Dense, hot matter emits continuous thermal blackbody radiation.",
    "hintAr": "المادة الكثيفة الساخنة تشع طيفاً كهرومغناطيسياً متصلاً كالجسم الأسود.",
    "stepByStepSolutionEn": [
      "Condensed matter (solids/liquids/dense gases) exhibits strongly interacting atoms that broaden energy states into continuous bands."
    ],
    "stepByStepSolutionAr": [
      "المواد المكثفة تمتلك ذرات شديدة الترابط تجعل مستويات الطاقة متداخلة في حزم متصلة."
    ],
    "teacherTipEn": "Line spectra only arise from isolated, non-interacting gaseous atoms.",
    "teacherTipAr": "الأطياف الخطية تنشأ فقط من ذرات غازية منفردة معزولة."
  },
  {
    "id": "egbac_phys_ch2_db_easy_17",
    "titleEn": "Line Emission Spectrum Definition",
    "titleAr": "تعريف طيف الانبعاث الخطي",
    "difficulty": "easy",
    "questionEn": "A line emission spectrum is produced by atoms in which physical state?",
    "questionAr": "ينتج طيف الانبعاث الخطي من ذرات توجد في أي حالة فيزيائية؟",
    "optionsEn": [
      "Rarefied, hot gas or vapor under low pressure excited by electric discharge",
      "High-density liquid molten metal at its boiling point",
      "A highly compressed solid crystal at absolute zero",
      "A cold opaque dust cloud in interstellar space"
    ],
    "optionsAr": [
      "غاز أو بخار متخلخل وساخن تحت ضغط منخفض ومثار بالتفريغ الكهربي",
      "سائل فلزي مصهور عالي الكثافة عند نقطة غليانه",
      "بلورة صلبة عالية الانضغاط عند الصفر المطلق",
      "سحابة غبار باردة معتمة في الفضاء بين النجمي"
    ],
    "correctAnswer": "Rarefied, hot gas or vapor under low pressure excited by electric discharge",
    "correctIndex": 0,
    "hintEn": "Isolated atoms must be free from collective intermolecular lattice interactions.",
    "hintAr": "يجب أن تكون الذرات معزولة ومتحررة من التفاعلات الشبكية البينية.",
    "stepByStepSolutionEn": [
      "Low pressure ensures atoms collide rarely, emitting sharp discrete frequencies corresponding to atomic energy levels."
    ],
    "stepByStepSolutionAr": [
      "الضغط المنخفض يضمن ندرة تصادم الذرات فتصدر ترددات حادة ومنفصلة مميزة للمستويات الذرية."
    ],
    "teacherTipEn": "Line emission spectra are unique atomic fingerprints for chemical identification.",
    "teacherTipAr": "تعتبر أطياف الانبعاث الخطية بصمة ذرية فريدة للتعرف على العناصر الكيميائية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_18",
    "titleEn": "Line Absorption Spectrum Definition",
    "titleAr": "تعريف طيف الامتصاص الخطي",
    "difficulty": "easy",
    "questionEn": "When continuous white light passes through a container of cooler elemental gas and is then analyzed by a spectroscope, the resulting spectrum is:",
    "questionAr": "عند مرور ضوء أبيض مستمر عبر وعاء يحتوي على غاز عنصر بارد ثم تحليله بالمطياف، فإن الطيف الناتج يكون:",
    "optionsEn": [
      "A completely dark screen with no detected light at any wavelength",
      "A continuous bright rainbow crossed by sharp dark absorption lines",
      "Bright emission lines on a pitch-black background",
      "A pure monochromatic laser beam of single frequency"
    ],
    "optionsAr": [
      "شاشة مظلمة تماماً دون وصول أي ضوء عند أي طول موجي",
      "شريطاً متصلاً من ألوان قوس قزح تتخلله خطوط مظلمة حادة للامتصاص",
      "خطوط انبعاث مضيئة على خلفية حالكة السواد",
      "شعاع ليزر نقي أحادي اللون ذو تردد وحيد"
    ],
    "correctAnswer": "A continuous bright rainbow crossed by sharp dark absorption lines",
    "correctIndex": 1,
    "hintEn": "Cool atoms selectively absorb the exact frequencies they would emit when heated.",
    "hintAr": "تمتص الذرات الباردة انتقائياً نفس الترددات التي تشعها عند تسخينها.",
    "stepByStepSolutionEn": [
      "The atoms absorb photons equal to $\\Delta E = E_2 - E_1$, re-emitting them in all random directions, producing dark shadows in the transmitted beam."
    ],
    "stepByStepSolutionAr": [
      "تمتص الذرات فوتونات مطابقة لـ $\\Delta E = E_2 - E_1$ وتشعها في جميع الاتجاهات عشوائياً، فتظهر كخطوط مظلمة في الحزمة النافذة."
    ],
    "teacherTipEn": "Kirchhoff and Bunsen discovered that emission and absorption lines coincide identically.",
    "teacherTipAr": "اكتشف كيرشوف وبنزن أن خطوط الانبعاث والامتصاص لنفس العنصر تتطابق بدقة."
  },
  {
    "id": "egbac_phys_ch2_db_easy_19",
    "titleEn": "Fraunhofer Lines in Solar Spectrum",
    "titleAr": "خطوط فرانهوفر في طيف الشمس",
    "difficulty": "easy",
    "questionEn": "Fraunhofer lines observed in the solar spectrum are classic examples of which spectroscopic phenomenon?",
    "questionAr": "تعد خطوط فرانهوفر المرصودة في طيف الشمس مثالاً كلاسيكياً على أي ظاهرة طيفية؟",
    "optionsEn": [
      "Continuous synchrotron radiation emitted by solar flares",
      "Pure molecular band emission from deep inside the nuclear core",
      "Atomic absorption lines produced by gases in the cooler solar atmosphere (photosphere and chromosphere)",
      "Diffraction artifacts caused by the telescope objective aperture"
    ],
    "optionsAr": [
      "إشعاع سينكروتروني مستمر صادر عن التوهجات الشمسية",
      "طيف حزم جزيئية نقية منبعثة من عمق قلب الشمس النووي",
      "خطوط امتصاص ذرية ناتجة عن غازات الغلاف الجوي الشمسي الأبرد (الفوتوسفير والكروموسفير)",
      "عيوب حيود ناتجة عن فتحة العدسة الشيئية للمقراب الفلكي"
    ],
    "correctAnswer": "Atomic absorption lines produced by gases in the cooler solar atmosphere (photosphere and chromosphere)",
    "correctIndex": 2,
    "hintEn": "The sun's dense core emits continuous light, which passes through its cooler gaseous envelope.",
    "hintAr": "قلب الشمس الكثيف يشع ضوءاً مستمراً يمر عبر غلافها الجوي الغازي الأقل حرارة.",
    "stepByStepSolutionEn": [
      "Elements such as hydrogen, helium, sodium, and iron in the solar atmosphere absorb their characteristic lines, creating thousands of dark Fraunhofer lines."
    ],
    "stepByStepSolutionAr": [
      "تمتص عناصر الهيدروجين والهيليوم والصوديوم والحديد في جو الشمس خطوطها الخاصة فتنشأ آلاف خطوط فرانهوفر المظلمة."
    ],
    "teacherTipEn": "Helium was first discovered on the Sun via Fraunhofer lines before being found on Earth.",
    "teacherTipAr": "تم اكتشاف عنصر الهيليوم في الشمس عبر خطوط فرانهوفر قبل اكتشافه على الأرض."
  },
  {
    "id": "egbac_phys_ch2_db_easy_20",
    "titleEn": "Spectrometer Essential Components",
    "titleAr": "المكونات الأساسية لجهاز المطياف",
    "difficulty": "easy",
    "questionEn": "A standard prism spectrometer consists of three primary optical components: a collimator, a dispersing prism on a turntable, and a:",
    "questionAr": "يتكون مطياف المنشور القياسي من ثلاثة مكونات بصرية رئيسية: المجمع، والمنشور المشتت على قرص دائري، و:",
    "optionsEn": [
      "Photomultiplier tube to amplify nuclear radiation",
      "Geiger-Müller counter to register beta particles",
      "High-voltage Coolidge X-ray tube",
      "Telescope for viewing and measuring refracted spectral lines"
    ],
    "optionsAr": [
      "أنبوب مضاعف ضوئي لتضخيم الإشعاعات النووية",
      "عداد جيجر-مولر لتسجيل جسيمات بيتا",
      "أنبوب كولدج عالي الجهد لتوليد الأشعة السينية",
      "التلسكوب (المقراب) لرؤية وقياس الخطوط الطيفية المنكسرة"
    ],
    "correctAnswer": "Telescope for viewing and measuring refracted spectral lines",
    "correctIndex": 3,
    "hintEn": "The collimator produces parallel rays, the prism disperses them, and the telescope focuses them.",
    "hintAr": "المجمع ينتج أشعة متوازية، المنشور يشتتها، والتلسكوب يركزها على العين أو المجس.",
    "stepByStepSolutionEn": [
      "The telescope focuses parallel rays of each color onto the focal plane, forming sharp, pure spectral images of the collimator slit."
    ],
    "stepByStepSolutionAr": [
      "يركز المقراب الأشعة المتوازية لكل لون على المستوى البؤري مكوناً صوراً طيفية نقية وحادة لشق المجمع."
    ],
    "teacherTipEn": "The prism must be set at minimum deviation position to obtain pure spectra.",
    "teacherTipAr": "يجب ضبط المنشور في وضع النهاية الصغرى للانحراف للحصول على طيف نقي."
  },
  {
    "id": "egbac_phys_ch2_db_easy_21",
    "titleEn": "Condition for Pure Spectrum",
    "titleAr": "شرط الحصول على طيف نقي بالمطياف",
    "difficulty": "easy",
    "questionEn": "To obtain a pure spectrum (where spectral lines do not overlap) using a prism spectrometer, the prism must be adjusted to:",
    "questionAr": "للحصول على طيف نقي (لا تتداخل فيه الخطوط الطيفية) باستخدام مطياف المنشور، يجب ضبط المنشور في:",
    "optionsEn": [
      "The position of minimum deviation for the incident rays",
      "Total internal reflection angle at the back face",
      "Grazing incidence at $90^\\circ$",
      "Brewster's polarizing angle"
    ],
    "optionsAr": [
      "وضع النهاية الصغرى للانحراف للأشعة الساقطة",
      "زاوية الانعكاس الكلي الداخلي عند الوجه الخلفي",
      "زاوية سقوط مماسية عند $90^\\circ$",
      "زاوية بروستر للاستقطاب"
    ],
    "correctAnswer": "The position of minimum deviation for the incident rays",
    "correctIndex": 0,
    "hintEn": "At minimum deviation, rays emerge symmetrically with maximum parallelism.",
    "hintAr": "عند النهاية الصغرى للانحراف تخرج الأشعة متناظرة وبأعلى درجة توازٍ.",
    "stepByStepSolutionEn": [
      "When the prism is at minimum deviation, each wavelength is refracted at a distinct angle without spreading, forming sharp non-overlapping slit images."
    ],
    "stepByStepSolutionAr": [
      "عند ضبط المنشور في وضع النهاية الصغرى للانحراف ينكسر كل طول موجي بزاوية محددة دون تشتت داخلي، مكوناً صوراً حادة غير متداخلة للشق."
    ],
    "teacherTipEn": "The collimator objective lens must also be adjusted so the slit lies at its principal focus.",
    "teacherTipAr": "يجب أيضاً ضبط عدسة المجمع الشيئية بحيث يقع الشق في بؤرتها الأصلية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_22",
    "titleEn": "Coolidge Tube Function",
    "titleAr": "وظيفة أنبوب كولدج",
    "difficulty": "easy",
    "questionEn": "The Coolidge tube is the standard laboratory device engineered for the efficient production of:",
    "questionAr": "يعد أنبوب كولدج الجهاز المخبري القياسي المصمم لإنتاج:",
    "optionsEn": [
      "Ultrasound acoustic waves",
      "X-rays (Röntgen radiation)",
      "Thermal neutron beams",
      "Coherent microwave signals"
    ],
    "optionsAr": [
      "الموجات الصوتية فوق السمعية",
      "الأشعة السينية (أشعة رونتجن)",
      "حزم النيوترونات الحرارية",
      "إشارات الموجات الميكروية المترابطة"
    ],
    "correctAnswer": "X-rays (Röntgen radiation)",
    "correctIndex": 1,
    "hintEn": "William Coolidge invented the hot-cathode vacuum tube for generating controllable X-rays.",
    "hintAr": "اخترع ويليام كولدج أنبوب المهبط الساخن المفرغ لإنتاج أشعة سينية قابلة للتحكم.",
    "stepByStepSolutionEn": [
      "Electrons emitted thermionically from a filament are accelerated by high voltage to strike a heavy metal target, generating X-rays."
    ],
    "stepByStepSolutionAr": [
      "تنبعث الإلكترونات حرارياً من الفتيلة وتتسارع بجهد عالٍ لتصطدم بهدف فلزي ثقيل مولدة الأشعة السينية."
    ],
    "teacherTipEn": "It allows independent control of beam intensity (via filament current) and penetrating power (via voltage).",
    "teacherTipAr": "يتيح الأنبوب التحكم المستقل في شدة الأشعة (بتيار الفتيلة) وفي قدرتها على النفاذ (بفرق الجهد)."
  },
  {
    "id": "egbac_phys_ch2_db_easy_23",
    "titleEn": "Coolidge Tube Heated Filament Role",
    "titleAr": "دور الفتيلة المسخنة في أنبوب كولدج",
    "difficulty": "easy",
    "questionEn": "In a Coolidge X-ray tube, the primary function of heating the tungsten filament with a low-voltage electrical circuit is to:",
    "questionAr": "في أنبوب كولدج للأشعة السينية، الوظيفة الأساسية لتسخين فتيلة التنجستن بدائرة كهربية منخفضة الجهد هي:",
    "optionsEn": [
      "Directly produce the characteristic X-ray photons through thermal incandescence",
      "Create a magnetic field that focuses cathode rays into an ultra-narrow spot",
      "Emit electrons by thermionic emission to provide the incident electron beam",
      "Absorb hazardous secondary scattered gamma radiation"
    ],
    "optionsAr": [
      "إنتاج فوتونات الأشعة السينية المميزة مباشرة عبر التوهج الحراري",
      "توليد مجال مغناطيسي يركز أشعة المهبط في بؤرة فائقة الضيق",
      "إطلاق إلكترونات بالانبعاث الأيوني الحراري لتوفير حزمة الإلكترونات الساقطة",
      "امتصاص أشعة جاما الثانوية المشتتة والخطيرة"
    ],
    "correctAnswer": "Emit electrons by thermionic emission to provide the incident electron beam",
    "correctIndex": 2,
    "hintEn": "Heating liberates free electrons from the metal surface via thermal energy overcoming the work function.",
    "hintAr": "التسخين يحرر الإلكترونات الحرة من سطح الفلز عبر الطاقة الحرارية التي تتغلب على دالة الشغل.",
    "stepByStepSolutionEn": [
      "Thermionic emission produces a cloud of electrons whose quantity depends on the filament temperature (heating current)."
    ],
    "stepByStepSolutionAr": [
      "يولد الانبعاث الحراري سحابة من الإلكترونات يتناسب عددها مع درجة حرارة الفتيلة (تيار التسخين)."
    ],
    "teacherTipEn": "This electron flux controls the overall intensity (photons per second) of the resulting X-ray beam.",
    "teacherTipAr": "يتحكم تدفق الإلكترونات هذا في الشدة الإجمالية (عدد الفوتونات بالثانية) لشعاع الأشعة السينية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_24",
    "titleEn": "Coolidge Tube Accelerating High Voltage Role",
    "titleAr": "دور فرق الجهد العالي في أنبوب كولدج",
    "difficulty": "easy",
    "questionEn": "In a Coolidge tube, the application of a very high potential difference (thousands of volts) between the filament and the anode serves to:",
    "questionAr": "في أنبوب كولدج، يعمل تطبيق فرق جهد كهربي عالٍ جداً (آلاف الفولتات) بين الفتيلة والمصعد على:",
    "optionsEn": [
      "Increase the rate of thermionic emission from the cathode filament",
      "Cool the copper anode block through thermoelectric Peltier effect",
      "Maintain the high vacuum inside the evacuated glass envelope",
      "Impart tremendous kinetic energy to the emitted electrons before they collide with the target"
    ],
    "optionsAr": [
      "زيادة معدل الانبعاث الأيوني الحراري من فتيلة المهبط",
      "تبريد كتلة المصعد النحاسية عبر تأثير بيلتير الكهروحراري",
      "الحفاظ على التفريغ العالي داخل الغلاف الزجاجي المفرغ",
      "إكساب الإلكترونات المنبعثة طاقة حركة هائلة قبل اصطدامها بمادة الهدف"
    ],
    "correctAnswer": "Impart tremendous kinetic energy to the emitted electrons before they collide with the target",
    "correctIndex": 3,
    "hintEn": "Electric field performs work: $W = e V = \\frac{1}{2} m v^2$.",
    "hintAr": "المجال الكهربي يبذل شغلاً: $W = e V = \\frac{1}{2} m v^2$.",
    "stepByStepSolutionEn": [
      "The high voltage accelerates electrons to relativistic speeds, supplying the energy required to excite target atoms and produce high-frequency X-rays."
    ],
    "stepByStepSolutionAr": [
      "يعجل الجهد العالي الإلكترونات إلى سرعات هائلة، موفراً الطاقة اللازمة لإثارة ذرات الهدف وإنتاج أشعة سينية عالية التردد."
    ],
    "teacherTipEn": "Higher voltage leads to higher maximum photon frequency $\\nu_{\\max} = e V / h$.",
    "teacherTipAr": "زيادة فرق الجهد تؤدي لزيادة أقصى تردد للفوتونات $\\nu_{\\max} = e V / h$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_25",
    "titleEn": "Target Metal Material Requirements in Coolidge Tube",
    "titleAr": "شروط مادة الهدف في أنبوب كولدج",
    "difficulty": "easy",
    "questionEn": "The anode target in an X-ray Coolidge tube is predominantly fabricated from Tungsten ($Z=74$) because it combines:",
    "questionAr": "يصنع مصعد الهدف في أنبوب كولدج للأشعة السينية غالباً من التنجستن ($Z=74$) لأنه يجمع بين:",
    "optionsEn": [
      "High atomic number to increase X-ray yield and extremely high melting point to withstand heat",
      "Low atomic number and high electrical resistance to prevent current leakage",
      "Zero thermal conductivity and radioactive alpha emission capability",
      "High optical transparency and complete chemical inertness in air"
    ],
    "optionsAr": [
      "عدد ذري كبير لزيادة كفاءة إنتاج الأشعة ونقطة انصهار فائقة الارتفاع لتحمل الحرارة",
      "عدد ذري منخفض ومقاومة كهربية عالية لمنع تسرب التيار",
      "توصيلية حرارية منعدمة وقدرة على إشعاع جسيمات ألفا المشعة",
      "شفافية بصرية عالية وخمول كيميائي تام في الهواء"
    ],
    "correctAnswer": "High atomic number to increase X-ray yield and extremely high melting point to withstand heat",
    "correctIndex": 0,
    "hintEn": "X-ray production efficiency is proportional to atomic number $Z$, and 99% of energy becomes heat.",
    "hintAr": "كفاءة إنتاج الأشعة السينية تتناسب مع العدد الذري $Z$، و 99% من طاقة الإلكترونات تتحول إلى حرارة.",
    "stepByStepSolutionEn": [
      "Tungsten has $Z=74$ (enhancing Bremsstrahlung and characteristic emissions) and a melting point of $3422^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "يمتلك التنجستن عدداً ذرياً $Z=74$ (يزيد انبعاث الكبح والأشعة المميزة) ونقطة انصهار تبلغ $3422^\\circ\\text{C}$."
    ],
    "teacherTipEn": "Molybdenum ($Z=42$) and Rhodium ($Z=45$) are also used for lower-energy mammography targets.",
    "teacherTipAr": "يستخدم الموليبدنوم ($Z=42$) والروديوم ($Z=45$) أيضاً كأهداف في التصوير الشعاعي للثدي."
  },
  {
    "id": "egbac_phys_ch2_db_easy_26",
    "titleEn": "Coolidge Tube Heat Dissipation",
    "titleAr": "تبديد الحرارة في أنبوب كولدج",
    "difficulty": "easy",
    "questionEn": "Why is the tungsten target embedded in a large block of copper fitted with cooling fins or circulating oil cooling systems?",
    "questionAr": "لماذا يثبت هدف التنجستن داخل كتلة ضخمة من النحاس مزودة بزعانف تبريد أو نظام زيت دوران؟",
    "optionsEn": [
      "To prevent magnetic interference from deflecting the electron beam trajectory",
      "Because over 99% of the incident electron beam kinetic energy is converted into thermal heat rather than X-rays",
      "To absorb stray thermal neutrons generated by nuclear transmutation in the target",
      "To boost the electrical conductivity of the glass envelope"
    ],
    "optionsAr": [
      "لمنع التداخل المغناطيسي من حَرف مسار حزمة الإلكترونات الساقطة",
      "لأن أكثر من 99% من طاقة حركة حزمة الإلكترونات الساقطة تتحول إلى حرارة بدلاً من أشعة سينية",
      "لامتصاص النيوترونات الحرارية الشاردة الناتجة عن التحول النووي في مادة الهدف",
      "لزيادة التوصيلية الكهربية للغلاف الزجاجي الخارجي"
    ],
    "correctAnswer": "Because over 99% of the incident electron beam kinetic energy is converted into thermal heat rather than X-rays",
    "correctIndex": 1,
    "hintEn": "X-ray efficiency is shockingly low (under 1%).",
    "hintAr": "كفاءة توليد الأشعة السينية منخفضة جداً (أقل من 1%).",
    "stepByStepSolutionEn": [
      "Almost all kinetic energy degrades into lattice vibrations (heat). Copper has high thermal conductivity to rapidly conduct heat away to external radiators."
    ],
    "stepByStepSolutionAr": [
      "تتحول كل الطاقة الحركية تقريباً إلى اهتزازات شبكية حرارية، ويمتلك النحاس توصيلية حرارية ممتازة لنقل الحرارة بسرعة للخارج."
    ],
    "teacherTipEn": "Without cooling, the target would melt or vaporize rapidly, destroying the vacuum.",
    "teacherTipAr": "بدون التبريد الفعال سينصهر الهدف أو يتبخر سريعاً مما يتلف تفريغ الأنبوب."
  },
  {
    "id": "egbac_phys_ch2_db_easy_27",
    "titleEn": "Continuous X-Ray Spectrum Origin (Bremsstrahlung)",
    "titleAr": "أصل الطيف المستمر للأشعة السينية (إشعاع الكبح)",
    "difficulty": "easy",
    "questionEn": "Continuous X-radiation (Bremsstrahlung, or braking radiation) is generated when high-speed electrons:",
    "questionAr": "ينشأ طيف الأشعة السينية المستمر (إشعاع الكبح أو الفرملة) عندما تقوم الإلكترونات السريعة بـ:",
    "optionsEn": [
      "Eject an inner $K$-shell electron and trigger downward atomic cascades",
      "Undergo nuclear fusion with target protons to form deuterons",
      "Decelerate and lose kinetic energy in the strong attractive Coulomb field of target atomic nuclei",
      "Reflect elastically from the crystal surface without losing any energy"
    ],
    "optionsAr": [
      "طرد إلكترون من المستوى الداخلي $K$ وإحداث شلال هبوط ذري",
      "الاندماج النووي مع بروتونات الهدف لتكوين الديوتيرونات",
      "التباطؤ وفقد جزء من طاقتها الحركية في مجال كولوم الجاذب القوي لنوى ذرات الهدف",
      "الانعكاس المرن تماماً عن سطح البلورة دون أي فقد في الطاقة"
    ],
    "correctAnswer": "Decelerate and lose kinetic energy in the strong attractive Coulomb field of target atomic nuclei",
    "correctIndex": 2,
    "hintEn": "Accelerating or decelerating charges radiate electromagnetic energy.",
    "hintAr": "الشحنات المتسارعة أو المتباطئة تشع طاقة كهرومغناطيسية وفقاً للكهروديناميكا.",
    "stepByStepSolutionEn": [
      "Electrons deflect and decelerate when grazing heavy target nuclei, shedding kinetic energy as continuous photons with diverse wavelengths."
    ],
    "stepByStepSolutionAr": [
      "تنحرف الإلكترونات وتتباطأ عند اقترابها من نوى ذرات الهدف الثقيل، طارحة طاقتها الحركية كفوتونات متصلة بمختلف الأطوال الموجية."
    ],
    "teacherTipEn": "The German word 'Bremsstrahlung' literally translates to 'braking radiation'.",
    "teacherTipAr": "الكلمة الألمانية 'Bremsstrahlung' تعني حرفياً 'إشعاع الفرملة أو الكبح'."
  },
  {
    "id": "egbac_phys_ch2_db_easy_28",
    "titleEn": "Duane-Hunt Law Formula",
    "titleAr": "صيغة قانون دوان-هنت",
    "difficulty": "easy",
    "questionEn": "The minimum wavelength (cutoff wavelength $\\lambda_{\\min}$) of continuous X-rays produced at accelerating potential $V$ is given by the Duane-Hunt law as:",
    "questionAr": "يعبر عن أقل طول موجي (طول موجة الحافة $\\lambda_{\\min}$) لطيف الأشعة السينية المستمر عند فرق جهد $V$ بقانون دوان-هنت بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{e h c}{V^2}$",
      "$\\lambda_{\\min} = \\frac{h c}{e V}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\min} = \\frac{e V}{h c}$",
      "$\\lambda_{\\min} = \\frac{h V}{e c}$",
      "$\\lambda_{\\min} = \\frac{e h c}{V^2}$",
      "$\\lambda_{\\min} = \\frac{h c}{e V}$"
    ],
    "correctAnswer": "$\\lambda_{\\min} = \\frac{h c}{e V}$",
    "correctIndex": 3,
    "hintEn": "Maximum photon energy equals maximum electron kinetic energy: $h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}} = eV$.",
    "hintAr": "أقصى طاقة فوتون تساوي أقصى طاقة حركة للإلكترون: $h\\nu_{\\max} = \\frac{hc}{\\lambda_{\\min}} = eV$.",
    "stepByStepSolutionEn": [
      "Equating $E_{\\max} = h c / \\lambda_{\\min} = e V$ yields $\\lambda_{\\min} = \\frac{h c}{e V}$."
    ],
    "stepByStepSolutionAr": [
      "بمساواة $E_{\\max} = h c / \\lambda_{\\min} = e V$ نحصل على $\\lambda_{\\min} = \\frac{h c}{e V}$."
    ],
    "teacherTipEn": "This cutoff demonstrates the quantum particle nature of radiation: an electron cannot emit more energy than it possesses.",
    "teacherTipAr": "تثبت هذه الحافة الطبيعة الكمية الجسيمية للإشعاع: فالإلكترون لا يستطيع إشعاع طاقة تتجاوز طاقته الحركية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_29",
    "titleEn": "Independence of Cutoff Wavelength from Target Material",
    "titleAr": "استقلال أقصر طول موجي عن مادة الهدف",
    "difficulty": "easy",
    "questionEn": "The minimum cutoff wavelength $\\lambda_{\\min}$ of the continuous X-ray spectrum produced by a Coolidge tube depends strictly on:",
    "questionAr": "يعتمد أقصر طول موجي $\\lambda_{\\min}$ لطيف الأشعة السينية المستمر الناتج من أنبوب كولدج حصراً على:",
    "optionsEn": [
      "The accelerating potential difference $V$ applied between cathode and anode",
      "The atomic number $Z$ of the target metal",
      "The chemical valency of the target element",
      "The surface area of the cooling fins"
    ],
    "optionsAr": [
      "فرق الجهد الكهربي المعجل $V$ المطبق بين المهبط والمصعد",
      "العدد الذري $Z$ لمعدن الهدف",
      "التكافؤ الكيميائي لعنصر الهدف",
      "مساحة السطح لزعانف التبريد"
    ],
    "correctAnswer": "The accelerating potential difference $V$ applied between cathode and anode",
    "correctIndex": 0,
    "hintEn": "Look at the Duane-Hunt formula: $\\lambda_{\\min} = \\frac{hc}{eV}$. No $Z$ appears.",
    "hintAr": "انظر لمعادلة دوان-هنت: $\\lambda_{\\min} = \\frac{hc}{eV}$، لا يوجد بها أي اعتماد على $Z$.",
    "stepByStepSolutionEn": [
      "The cutoff wavelength depends purely on universal constants ($h, c, e$) and the applied tube voltage $V$. Changing the target metal does NOT change $\\lambda_{\\min}$."
    ],
    "stepByStepSolutionAr": [
      "يعتمد أقصر طول موجي حصراً على الثوابت الكونية ($h, c, e$) وجهد الأنبوب $V$. وتغيير نوع مادة الهدف لا يغير $\\lambda_{\\min}$ مطلقاً."
    ],
    "teacherTipEn": "This fundamental fact frequently appears on high-stakes national examinations.",
    "teacherTipAr": "هذه الحقيقة الأساسية تتكرر باستمرار في امتحانات الثانوية والبكالوريا."
  },
  {
    "id": "egbac_phys_ch2_db_easy_30",
    "titleEn": "Characteristic X-Ray Spectrum Origin",
    "titleAr": "أصل طيف الأشعة السينية المميز",
    "difficulty": "easy",
    "questionEn": "Characteristic (line) X-rays are generated in a target atom when an incident electron:",
    "questionAr": "تتولد الأشعة السينية المميزة (الخطية) في ذرة الهدف عندما يقوم إلكترون ساقط بـ:",
    "optionsEn": [
      "Undergoes total elastic scattering off the nuclear Coulomb barrier",
      "Knocks out an electron from an inner tightly-bound shell ($K$ or $L$), and an outer electron cascades down to fill the vacancy",
      "Stimulates the emission of a coherent optical photon from the conduction band",
      "Causes thermionic emission of positive ions from the target surface"
    ],
    "optionsAr": [
      "الارتداد المرن التام عن حاجز كولوم النووي دون إثارة المستويات",
      "انتزاع إلكترون من مستوى داخلي شديد الارتباط ($K$ أو $L$)، فيهبط إلكترون خارجي لملء هذه الفجوة",
      "حث انبعاث فوتون ضوئي مترابط من حزمة التوصيل",
      "إحداث انبعاث أيوني حراري لأيونات موجبة من سطح الهدف"
    ],
    "correctAnswer": "Knocks out an electron from an inner tightly-bound shell ($K$ or $L$), and an outer electron cascades down to fill the vacancy",
    "correctIndex": 1,
    "hintEn": "Characteristic X-rays involve atomic inner-shell electronic transitions.",
    "hintAr": "تنشأ الأشعة السينية المميزة من انتقالات إلكترونية بين المستويات الداخلية للذرة.",
    "stepByStepSolutionEn": [
      "Creating a core hole in the $K$-shell leaves the atom in an excited state; an electron from $L, M$ drops down, releasing a characteristic X-ray photon with energy equal to the shell difference."
    ],
    "stepByStepSolutionAr": [
      "انتزاع إلكترون داخلي من الغلاف $K$ يترك الذرة مثارة، فيهبط إلكترون من $L$ أو $M$ لملء الفراغ مشعاً فوتوناً سينياً مميزاً بطاقة تعادل فرق المستويين."
    ],
    "teacherTipEn": "Because shell energies are distinct for each element, this spectrum is a unique elemental fingerprint.",
    "teacherTipAr": "لأن طاقات الأغلفة فريدة لكل عنصر، فإن هذا الطيف يمثل بصمة مميزة للعنصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_31",
    "titleEn": "K-Alpha and K-Beta Transitions",
    "titleAr": "انتقالات كي-ألفا وكي-بيتا",
    "difficulty": "easy",
    "questionEn": "In the characteristic X-ray spectrum of an element, the $K_\\alpha$ and $K_\\beta$ lines correspond to transitions into the vacant $K$-shell ($n=1$) from which respective shells?",
    "questionAr": "في طيف الأشعة السينية المميز لعنصر ما، ينتج خطا $K_\\alpha$ و $K_\\beta$ عن انتقال إلكترونات إلى الغلاف $K$ الشاغر ($n=1$) من أي غلافين على التوالي؟",
    "optionsEn": [
      "$M$-shell for $K_\\alpha$, and $L$-shell for $K_\\beta$",
      "$N$-shell for $K_\\alpha$, and $P$-shell for $K_\\beta$",
      "$L$-shell ($n=2$) for $K_\\alpha$, and $M$-shell ($n=3$) for $K_\\beta$",
      "$K$-shell itself for both transitions"
    ],
    "optionsAr": [
      "الغلاف $M$ لـ $K_\\alpha$، والغلاف $L$ لـ $K_\\beta$",
      "الغلاف $N$ لـ $K_\\alpha$، والغلاف $P$ لـ $K_\\beta$",
      "الغلاف $L$ ($n=2$) لـ $K_\\alpha$، والغلاف $M$ ($n=3$) لـ $K_\\beta$",
      "الغلاف $K$ نفسه لكلا الخطين"
    ],
    "correctAnswer": "$L$-shell ($n=2$) for $K_\\alpha$, and $M$-shell ($n=3$) for $K_\\beta$",
    "correctIndex": 2,
    "hintEn": "$\\alpha$ denotes the immediately adjacent shell ($n=2 \\to 1$), and $\\beta$ denotes the second adjacent shell ($n=3 \\to 1$).",
    "hintAr": "الحرف $\\alpha$ يدل على الغلاف المجاور مباشرة ($n=2 \\to 1$)، والحرف $\\beta$ يدل على الغلاف الذي يليه ($n=3 \\to 1$).",
    "stepByStepSolutionEn": [
      "$K_\\alpha$ is the transition $L \\to K$ ($n=2 \\to 1$), while $K_\\beta$ is $M \\to K$ ($n=3 \\to 1$)."
    ],
    "stepByStepSolutionAr": [
      "خط $K_\\alpha$ ينتج من انتقال $L \\to K$ ($n=2 \\to 1$)، بينما $K_\\beta$ ينتج من $M \\to K$ ($n=3 \\to 1$)."
    ],
    "teacherTipEn": "Because $E_M > E_L$, the $K_\\beta$ photon has higher energy and shorter wavelength than $K_\\alpha$.",
    "teacherTipAr": "بما أن $E_M > E_L$، فإن فوتون $K_\\beta$ يمتلك طاقة أعلى وطولاً موجياً أقصر من $K_\\alpha$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_32",
    "titleEn": "Relative Energy of K-Alpha vs K-Beta",
    "titleAr": "مقارنة طاقة فوتونات كي-ألفا وكي-بيتا",
    "difficulty": "easy",
    "questionEn": "Comparing the photon energies $E$ and wavelengths $\\lambda$ of the $K_\\alpha$ and $K_\\beta$ characteristic X-ray lines of the same target element:",
    "questionAr": "عند مقارنة طاقة الفوتون $E$ والطول الموجي $\\lambda$ لخطَّي $K_\\alpha$ و $K_\\beta$ في طيف الأشعة السينية المميز لنفس العنصر:",
    "optionsEn": [
      "$E_{K\\alpha} > E_{K\\beta}$ and $\\lambda_{K\\alpha} < \\lambda_{K\\beta}$",
      "$E_{K\\alpha} = E_{K\\beta}$ and $\\lambda_{K\\alpha} = \\lambda_{K\\beta}$",
      "$E_{K\\beta} > E_{K\\alpha}$ and $\\lambda_{K\\beta} > \\lambda_{K\\alpha}$",
      "$E_{K\\beta} > E_{K\\alpha}$ and $\\lambda_{K\\beta} < \\lambda_{K\\alpha}$"
    ],
    "optionsAr": [
      "$E_{K\\alpha} > E_{K\\beta}$ و $\\lambda_{K\\alpha} < \\lambda_{K\\beta}$",
      "$E_{K\\alpha} = E_{K\\beta}$ و $\\lambda_{K\\alpha} = \\lambda_{K\\beta}$",
      "$E_{K\\beta} > E_{K\\alpha}$ و $\\lambda_{K\\beta} > \\lambda_{K\\alpha}$",
      "$E_{K\\beta} > E_{K\\alpha}$ و $\\lambda_{K\\beta} < \\lambda_{K\\alpha}$"
    ],
    "correctAnswer": "$E_{K\\beta} > E_{K\\alpha}$ and $\\lambda_{K\\beta} < \\lambda_{K\\alpha}$",
    "correctIndex": 3,
    "hintEn": "Transition from $n=3$ drops through a larger energy difference than from $n=2$.",
    "hintAr": "الهبوط من $n=3$ يقطع فرق طاقة أكبر من الهبوط من $n=2$.",
    "stepByStepSolutionEn": [
      "$\\Delta E_{K\\beta} = E_K - E_M > \\Delta E_{K\\alpha} = E_K - E_L$. Since $\\lambda = h c / \\Delta E$, higher energy means shorter wavelength."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E_{K\\beta} = E_K - E_M > \\Delta E_{K\\alpha} = E_K - E_L$، وبما أن $\\lambda = h c / \\Delta E$ فإن الطاقة الأكبر تعني طولاً موجياً أقصر."
    ],
    "teacherTipEn": "On an X-ray spectrum graph, the $K_\\beta$ peak always appears to the left of the $K_\\alpha$ peak.",
    "teacherTipAr": "في المنحنى البياني لطيف الأشعة السينية، تقع قمة $K_\\beta$ دائماً على يسار قمة $K_\\alpha$ لأن طولها الموجي أقصر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_33",
    "titleEn": "Moseley Law for Characteristic X-Rays",
    "titleAr": "قانون موزلي للأشعة السينية المميزة",
    "difficulty": "easy",
    "questionEn": "Moseley's law states that the square root of the frequency ($\\sqrt{\\nu}$) of a characteristic X-ray line is linearly proportional to:",
    "questionAr": "ينص قانون موزلي على أن الجذر التربيعي للتردد ($\\sqrt{\\nu}$) لخط طيف الأشعة السينية المميز يتناسب خطياً مع:",
    "optionsEn": [
      "The atomic number $(Z - \\sigma)$ of the emitting element",
      "The atomic mass number $A$ of the nucleus",
      "The density of the target metal",
      "The applied accelerating tube voltage $V$"
    ],
    "optionsAr": [
      "العدد الذري $(Z - \\sigma)$ للعنصر المشع",
      "الكتلة الذرية أو عدد الكتلة $A$ للنواة",
      "كثافة المعدن المصنوع منه الهدف",
      "فرق الجهد الكهربي المعجل المطبق على الأنبوب $V$"
    ],
    "correctAnswer": "The atomic number $(Z - \\sigma)$ of the emitting element",
    "correctIndex": 0,
    "hintEn": "Henry Moseley discovered $\\sqrt{\\nu} = a(Z - \\sigma)$.",
    "hintAr": "اكتشف هنري موزلي أن $\\sqrt{\\nu} = a(Z - \\sigma)$.",
    "stepByStepSolutionEn": [
      "Moseley proved that atomic number $Z$ (nuclear charge), not atomic mass, governs the fundamental chemical and physical properties of elements."
    ],
    "stepByStepSolutionAr": [
      "أثبت موزلي أن العدد الذري $Z$ (شحنة النواة)، وليس الكتلة الذرية، هو الذي يحكم الخصائص الكيميائية والفيزيائية الأساسية للعناصر."
    ],
    "teacherTipEn": "This discovery rectified anomalies in Mendeleev's periodic table (e.g., Argon-Potassium, Cobalt-Nickel).",
    "teacherTipAr": "صحح هذا الاكتشاف الأخطاء التي ظهرت في جدول مندليف الدوري (مثل وضع الأرجون والبوتاسيوم، والكوبالت والنيكل)."
  },
  {
    "id": "egbac_phys_ch2_db_easy_34",
    "titleEn": "Effect of Increasing Filament Current on X-Ray Output",
    "titleAr": "تأثير زيادة تيار الفتيلة على الأشعة السينية",
    "difficulty": "easy",
    "questionEn": "Increasing the heating current through the filament in a Coolidge tube without altering the accelerating voltage results in:",
    "questionAr": "تؤدي زيادة تيار تسخين الفتيلة في أنبوب كولدج دون تغيير فرق الجهد المعجل إلى:",
    "optionsEn": [
      "A decrease in the minimum wavelength $\\lambda_{\\min}$, making the beam much harder",
      "An increase in the total intensity (photon flux) while leaving $\\lambda_{\\min}$ and penetrating power unchanged",
      "A shift of characteristic line peaks toward longer wavelengths",
      "A complete shutdown of the continuous spectrum"
    ],
    "optionsAr": [
      "نقصان في أقل طول موجي $\\lambda_{\\min}$، مما يجعل الأشعة أكثر قساوة ونفاذية",
      "زيادة الشدة الكلية للأشعة (تدفق الفوتونات) مع بقاء $\\lambda_{\\min}$ والقدرة على النفاذ دون تغيير",
      "إزاحة قمم الخطوط المميزة نحو أطوال موجية أطول",
      "توقف كامل لطيف الأشعة السينية المستمر"
    ],
    "correctAnswer": "An increase in the total intensity (photon flux) while leaving $\\lambda_{\\min}$ and penetrating power unchanged",
    "correctIndex": 1,
    "hintEn": "Filament current controls temperature, which controls the number of emitted electrons per second.",
    "hintAr": "تيار الفتيلة يتحكم في درجة حرارتها، والتي تحدد عدد الإلكترونات المنبعثة في الثانية الواحدة.",
    "stepByStepSolutionEn": [
      "More electrons per second strike the target, emitting more X-ray photons per second (higher intensity). Since voltage is unchanged, the maximum kinetic energy and $\\lambda_{\\min}$ remain constant."
    ],
    "stepByStepSolutionAr": [
      "يصطدم عدد أكبر من الإلكترونات بالهدف في الثانية فيشع عدداً أكبر من الفوتونات (شدة أعلى)، ولكن لثبات الجهد تظل طاقة الإلكترون القصوى و $\\lambda_{\\min}$ ثابتين."
    ],
    "teacherTipEn": "Intensity corresponds to the total area under the spectrum curve.",
    "teacherTipAr": "تقابل الشدة المساحة الكلية الواقعة تحت منحنى الطيف."
  },
  {
    "id": "egbac_phys_ch2_db_easy_35",
    "titleEn": "Effect of Increasing Anode Voltage on X-Ray Output",
    "titleAr": "تأثير زيادة فرق جهد المصعد على الأشعة السينية",
    "difficulty": "easy",
    "questionEn": "Increasing the high accelerating voltage applied across a Coolidge tube results in:",
    "questionAr": "تؤدي زيادة فرق الجهد الكهربي العالي المعجل المطبق على أنبوب كولدج إلى:",
    "optionsEn": [
      "Increasing $\\lambda_{\\min}$ and decreasing the maximum photon frequency",
      "Shifting the characteristic emission peaks to shorter wavelengths",
      "Decreasing the cutoff wavelength $\\lambda_{\\min}$ and increasing the penetrating power of the beam",
      "Decreasing the total number of emitted photons to zero"
    ],
    "optionsAr": [
      "زيادة $\\lambda_{\\min}$ ونقصان أقصى تردد للفوتونات الناتجة",
      "إزاحة قمم الخطوط المميزة نفسها نحو أطوال موجية أقصر",
      "نقصان أقل طول موجي $\\lambda_{\\min}$ وزيادة القدرة على النفاذ لحزمة الأشعة",
      "نقصان العدد الكلي للفوتونات المنبعثة إلى الصفر"
    ],
    "correctAnswer": "Decreasing the cutoff wavelength $\\lambda_{\\min}$ and increasing the penetrating power of the beam",
    "correctIndex": 2,
    "hintEn": "$\\lambda_{\\min} = \\frac{hc}{eV}$ decreases when $V$ increases.",
    "hintAr": "$\\lambda_{\\min} = \\frac{hc}{eV}$ يقل بزيادة فرق الجهد $V$.",
    "stepByStepSolutionEn": [
      "Higher voltage imparts greater kinetic energy, producing more energetic photons with shorter $\\lambda_{\\min}$ (harder, more penetrating X-rays). The wavelengths of characteristic lines do NOT shift."
    ],
    "stepByStepSolutionAr": [
      "الجهد الأعلى يمنح الإلكترونات طاقة حركة أكبر فتشع فوتونات أعلى طاقة وأقصر $\\lambda_{\\min}$ (أشعة قاسية ذات نفاذية أعلى). أما أطوال الخطوط المميزة فلا تتغير لأنها خاصية للهدف."
    ],
    "teacherTipEn": "Penetrating power is determined solely by photon frequency/energy.",
    "teacherTipAr": "تتحدد القدرة على النفاذ حصراً بتردد الفوتون وطاقته."
  },
  {
    "id": "egbac_phys_ch2_db_easy_36",
    "titleEn": "Hard X-Rays vs Soft X-Rays",
    "titleAr": "الأشعة السينية القاسية واللينة",
    "difficulty": "easy",
    "questionEn": "Compared to soft X-rays, hard X-rays are characterized by having:",
    "questionAr": "مقارنة بالأشعة السينية اللينة، تتميز الأشعة السينية القاسية بامتلاكها:",
    "optionsEn": [
      "Lower frequencies, longer wavelengths, and lower penetrating power",
      "Zero photon energy and purely acoustic behavior",
      "Positive electrical charge and magnetic deflection",
      "Higher frequencies, shorter wavelengths, and greater penetrating power"
    ],
    "optionsAr": [
      "ترددات أقل، وأطوالاً موجية أطول، وقدرة نفاذ أقل",
      "طاقة فوتونات منعدمة وسلوكاً صوتياً خالصاً",
      "شحنة كهربية موجبة وقابلية للانحراف بالمجال المغناطيسي",
      "ترددات أعلى، وأطوالاً موجية أقصر، وقدرة نفاذ أكبر"
    ],
    "correctAnswer": "Higher frequencies, shorter wavelengths, and greater penetrating power",
    "correctIndex": 3,
    "hintEn": "'Hard' indicates high photon energy and deep penetration through matter.",
    "hintAr": "'قاسية' تعني طاقة فوتونات عالية ونفاذية عميقة عبر المادة.",
    "stepByStepSolutionEn": [
      "Hard X-rays have frequencies $\\nu > 10^{18}\\text{ Hz}$ ($\\lambda < 1\\text{ \\AA}$) and easily penetrate soft tissues and thin metals."
    ],
    "stepByStepSolutionAr": [
      "الأشعة القاسية تملك ترددات $\\nu > 10^{18}\\text{ Hz}$ ($\\lambda < 1\\text{ \\AA}$) وتنفذ بسهولة عبر الأنسجة الرخوة والصفائح الفلزية الرقيقة."
    ],
    "teacherTipEn": "Soft X-rays are easily absorbed by skin and thin aluminum filters.",
    "teacherTipAr": "الأشعة اللينة تُمتص بسهولة بواسطة الجلد أو مرشحات الألومنيوم الرقيقة."
  },
  {
    "id": "egbac_phys_ch2_db_easy_37",
    "titleEn": "Bragg Law for X-Ray Diffraction",
    "titleAr": "قانون براغ لحيود الأشعة السينية",
    "difficulty": "easy",
    "questionEn": "The condition for constructive interference (diffraction maximum of order $n$) of X-rays of wavelength $\\lambda$ from crystal lattice planes separated by distance $d$ is:",
    "questionAr": "يعبر عن شرط التداخل البناء (قمة الحيود من الرتبة $n$) لأشعة سينية طولها الموجي $\\lambda$ منعكسة عن مستويات بلورية المسافة بينها $d$ بقانون براغ:",
    "optionsEn": [
      "$2d \\sin\\theta = n \\lambda$",
      "$d \\sin\\theta = 2n \\lambda$",
      "$2d \\cos\\theta = \\frac{\\lambda}{n}$",
      "$d \\tan\\theta = n^2 \\lambda$"
    ],
    "optionsAr": [
      "$2d \\sin\\theta = n \\lambda$",
      "$d \\sin\\theta = 2n \\lambda$",
      "$2d \\cos\\theta = \\frac{\\lambda}{n}$",
      "$d \\tan\\theta = n^2 \\lambda$"
    ],
    "correctAnswer": "$2d \\sin\\theta = n \\lambda$",
    "correctIndex": 0,
    "hintEn": "The path difference between rays reflected from adjacent planes is $2d\\sin\\theta$.",
    "hintAr": "فرق المسار بين شعاعين منعكسين عن مستويين متتاليين هو $2d\\sin\\theta$.",
    "stepByStepSolutionEn": [
      "Constructive interference mandates that the path difference must equal an integer number of wavelengths: $2d\\sin\\theta = n\\lambda$."
    ],
    "stepByStepSolutionAr": [
      "يتطلب التداخل البناء أن يكون فرق المسار مساوياً لعدد صحيح من الأطوال الموجية: $2d\\sin\\theta = n\\lambda$."
    ],
    "teacherTipEn": "William Henry Bragg and William Lawrence Bragg shared the Nobel Prize for this discovery.",
    "teacherTipAr": "نال ويليام هنري براغ ونجله جائزة نوبل مناصفة عن هذا الاكتشاف."
  },
  {
    "id": "egbac_phys_ch2_db_easy_38",
    "titleEn": "Why Visible Light Does Not Diffract on Crystals",
    "titleAr": "سبب عدم حيود الضوء المرئي على البلورات",
    "difficulty": "easy",
    "questionEn": "Why is ordinary visible light incapable of producing diffraction patterns when passing through crystal lattices?",
    "questionAr": "لماذا لا يستطيع الضوء المرئي العادي إحداث أنماط حيود عند مروره عبر الشبكات البلورية؟",
    "optionsEn": [
      "Because crystals completely absorb all visible wavelengths through nuclear fission",
      "Because visible light wavelengths ($\\sim 5000\\text{ \\AA}$) are far larger than interatomic crystal spacings ($\\sim 1 - 3\\text{ \\AA}$)",
      "Because visible photons have no momentum to interact with atomic electrons",
      "Because visible light moves faster than the speed of light inside solids"
    ],
    "optionsAr": [
      "لأن البلورات تمتص جميع الأطوال الموجية المرئية تماماً عبر الانشطار النووي",
      "لأن الطول الموجي للضوء المرئي ($\\sim 5000\\text{ \\AA}$) أكبر بكثير من المسافات البينية لذرات البلورة ($\\sim 1 - 3\\text{ \\AA}$)",
      "لأن فوتونات الضوء المرئي لا تمتلك كمية حركة للتفاعل مع إلكترونات الذرات",
      "لأن الضوء المرئي يتحرك بسرعة تفوق سرعة الضوء داخل الأجسام الصلبة"
    ],
    "correctAnswer": "Because visible light wavelengths ($\\sim 5000\\text{ \\AA}$) are far larger than interatomic crystal spacings ($\\sim 1 - 3\\text{ \\AA}$)",
    "correctIndex": 1,
    "hintEn": "Diffraction requires aperture/obstacle size to be comparable to the wavelength: $\\lambda \\approx d$.",
    "hintAr": "يحدث الحيود بوضوح عندما يقارب الطول الموجي أبعاد الفتحات أو العوائق: $\\lambda \\approx d$.",
    "stepByStepSolutionEn": [
      "Interatomic spacing in crystals is on the order of $10^{-10}\\text{ m}$ ($1\\text{ \\AA}$). Only X-rays have wavelengths of this scale, making them ideal for crystallography."
    ],
    "stepByStepSolutionAr": [
      "المسافات البينية في البلورات من رتبة أنجستروم واحد، والأشعة السينية وحدها تملك أطوالاً موجية مطابقة لهذا المقياس، مما يجعلها مثالية لدراسة البلورات."
    ],
    "teacherTipEn": "Max von Laue won the 1914 Nobel Prize for discovering X-ray diffraction by crystals.",
    "teacherTipAr": "نال ماكس فون لاوي جائزة نوبل عام 1914 لاكتشافه حيود الأشعة السينية بالبلورات."
  },
  {
    "id": "egbac_phys_ch2_db_easy_39",
    "titleEn": "Medical Radiography Principle",
    "titleAr": "مبدأ التصوير الإشعاعي الطبي بالأشعة السينية",
    "difficulty": "easy",
    "questionEn": "In medical radiography (bone fracture imaging), bones cast sharp white shadows on the photographic plate because:",
    "questionAr": "في التصوير الطبي بالأشعة السينية لفحص كسور العظام، تظهر العظام كظلال بيضاء واضحة على اللوح الفوتوغرافي لأن:",
    "optionsEn": [
      "Bones actively reflect X-rays back into the Coolidge tube",
      "Soft tissues emit secondary gamma rays that expose the film black",
      "Bones contain heavy calcium ($Z=20$) and absorb X-rays far more strongly than soft tissues",
      "Bones have higher electrical capacitance than muscles"
    ],
    "optionsAr": [
      "العظام تعكس الأشعة السينية انعكاساً كلياً إلى داخل أنبوب كولدج",
      "الأنسجة الرخوة تشع أشعة جاما ثانوية تجعل الفيلم أسود",
      "العظام تحتوي على الكالسيوم الأثقل ($Z=20$) فتمتص الأشعة السينية بشدة تفوق الأنسجة الرخوة",
      "العظام تمتلك سعة كهربية تفوق العضلات"
    ],
    "correctAnswer": "Bones contain heavy calcium ($Z=20$) and absorb X-rays far more strongly than soft tissues",
    "correctIndex": 2,
    "hintEn": "X-ray photoelectric absorption depends strongly on atomic number ($\\propto Z^3$ or $Z^4$).",
    "hintAr": "يعتمد الامتصاص الكهروضوئي للأشعة السينية بشدة على العدد الذري ($\\propto Z^3$ أو $Z^4$).",
    "stepByStepSolutionEn": [
      "Calcium ($Z=20$) and phosphorus ($Z=15$) in bone have much higher $Z$ than hydrogen, carbon, and oxygen in muscle ($Z \\approx 7$), absorbing the beam and shielding the film."
    ],
    "stepByStepSolutionAr": [
      "الكالسيوم ($Z=20$) والفسفور ($Z=15$) في العظام يمتلكان عدداً ذرياً أكبر بكثير من كربون وهيدروجين الأنسجة الرخوة ($Z \\approx 7$)، فيمتصان الأشعة ويحميان الفيلم من الاسوداد."
    ],
    "teacherTipEn": "Unexposed photographic emulsion remains unreduced, leaving the white bone silhouette.",
    "teacherTipAr": "مستحلب الفضة غير المعرض للإشعاع يظل أبيض بعد التثبيت تاركاً خيال العظام الأبيض."
  },
  {
    "id": "egbac_phys_ch2_db_easy_40",
    "titleEn": "Industrial Application of X-Rays",
    "titleAr": "التطبيق الصناعي للأشعة السينية",
    "difficulty": "easy",
    "questionEn": "In industrial engineering, X-rays are widely utilized for non-destructive testing (NDT) to:",
    "questionAr": "في الهندسة الصناعية، تستخدم الأشعة السينية على نطاق واسع في الاختبارات غير الإتلافية (NDT) لـ:",
    "optionsEn": [
      "Magnetize ferromagnetic steel beams for heavy crane operations",
      "Melt high-melting-point titanium alloys during vacuum casting",
      "Accelerate the cooling rate of molten glass bottles",
      "Detect hidden internal fissures, air voids, and cracks in metal welds and castings"
    ],
    "optionsAr": [
      "مغنطة قضبان الصلب المغناطيسية لعمليات الرافعات الثقيلة",
      "صهر سبائك التيتانيوم عالية الانصهار أثناء الصب في الفراغ",
      "تسريع معدل تبريد قوارير الزجاج المصهورة",
      "الكشف عن الشقوق والفقاعات الهوائية والعيوب الداخلية في لحامات الفلزات والمسبوكات"
    ],
    "correctAnswer": "Detect hidden internal fissures, air voids, and cracks in metal welds and castings",
    "correctIndex": 3,
    "hintEn": "X-rays penetrate opaque metal bodies without causing physical destruction.",
    "hintAr": "تخترق الأشعة السينية الأجسام الفلزية المعتمة دون إتلافها فيزيائياً.",
    "stepByStepSolutionEn": [
      "Internal air bubbles and fractures offer less attenuation, allowing more radiation through to register as darker spots on radiographic detectors."
    ],
    "stepByStepSolutionAr": [
      "التجاويف الهوائية والشقوق تسبب امتصاصاً أقل للأشعة فتنفذ منها بكثافة أعلى وتظهر كبقع داكنة على كاشف الأشعة."
    ],
    "teacherTipEn": "NDT is crucial for inspecting aircraft fuselages and pipeline welds.",
    "teacherTipAr": "يعد هذا الفحص حاسماً لضمان سلامة هياكل الطائرات ولحامات خطوط أنابيب النفط."
  },
  {
    "id": "egbac_phys_ch2_db_easy_41",
    "titleEn": "De Broglie Standing Waves in Bohr Orbits",
    "titleAr": "أمواج دي براولي الموقوفة في مدارات بور",
    "difficulty": "easy",
    "questionEn": "According to de Broglie's wave interpretation of Bohr's second postulate, an allowed orbit of radius $r$ satisfies the standing wave condition:",
    "questionAr": "وفقاً لتفسير دي براولي الموجي لفرض بور الثاني، فإن المدار المسموح به نصف قطره $r$ يحقق شرط الموجة الموقوفة:",
    "optionsEn": [
      "$2\\pi r = n \\lambda$",
      "$2\\pi r = \\frac{\\lambda}{n}$",
      "$\\pi r^2 = n \\lambda$",
      "$r = n^2 \\lambda$"
    ],
    "optionsAr": [
      "$2\\pi r = n \\lambda$",
      "$2\\pi r = \\frac{\\lambda}{n}$",
      "$\\pi r^2 = n \\lambda$",
      "$r = n^2 \\lambda$"
    ],
    "correctAnswer": "$2\\pi r = n \\lambda$",
    "correctIndex": 0,
    "hintEn": "The orbital circumference must fit an integer number of de Broglie wavelengths.",
    "hintAr": "يجب أن يتسع محيط المدار الدائري لعدد صحيح من أطوال موجات دي براولي.",
    "stepByStepSolutionEn": [
      "Circumference $2\\pi r = n \\lambda$. Substituting $\\lambda = h/(m v)$ gives $m v r = n h / (2\\pi)$, which is exactly Bohr's angular momentum postulate."
    ],
    "stepByStepSolutionAr": [
      "محيط المدار $2\\pi r = n \\lambda$. وبالتعويض عن $\\lambda = h/(m v)$ نحصل على $m v r = n h / (2\\pi)$، وهو فرض بور لتكميم كمية الحركة الزاوية تماماً."
    ],
    "teacherTipEn": "This elegant derivation reconciled Bohr's heuristic postulate with wave mechanics.",
    "teacherTipAr": "وفق هذا الاشتقاق البديع بين فرض بور التجريبي والميكانيكا الموجية الحديثة."
  },
  {
    "id": "egbac_phys_ch2_db_easy_42",
    "titleEn": "Number of Wavelengths in Orbit n",
    "titleAr": "عدد الأطوال الموجية في المدار n",
    "difficulty": "easy",
    "questionEn": "An electron revolving in the fourth Bohr orbit ($n=4$) of a hydrogen atom forms a stationary standing wave with exactly:",
    "questionAr": "يشكل إلكترون يدور في مدار بور الرابع ($n=4$) لذرة الهيدروجين موجة موقوفة مستقرة تحتوي تماماً على:",
    "optionsEn": [
      "2 complete de Broglie wavelengths",
      "4 complete de Broglie wavelengths",
      "8 complete de Broglie wavelengths",
      "16 complete de Broglie wavelengths"
    ],
    "optionsAr": [
      "طولين موجيين كاملين لدي براولي",
      "4 أطوال موجية كاملة لدي براولي",
      "8 أطوال موجية كاملة لدي براولي",
      "16 طولاً موجياً كاملاً لدي براولي"
    ],
    "correctAnswer": "4 complete de Broglie wavelengths",
    "correctIndex": 1,
    "hintEn": "The principal quantum number $n$ equals the number of standing wave cycles around the orbit.",
    "hintAr": "رتبة الكم الرئيسية $n$ تساوي تماماً عدد دورات الموجة الموقوفة حول المدار.",
    "stepByStepSolutionEn": [
      "From $2\\pi r_n = n \\lambda_n$, the number of wavelengths fitting the circumference is $n = 4$."
    ],
    "stepByStepSolutionAr": [
      "من العلاقة $2\\pi r_n = n \\lambda_n$، يكون عدد الأطوال الموجية التي تملأ محيط المدار هو $n = 4$."
    ],
    "teacherTipEn": "It has 4 crests and 4 troughs around the closed circular path.",
    "teacherTipAr": "يحتوي المدار على 4 قمم و 4 قيعان موزعة على المسار الدائري المغلق."
  },
  {
    "id": "egbac_phys_ch2_db_easy_43",
    "titleEn": "Franck-Hertz Experiment Conclusion",
    "titleAr": "استنتاج تجربة فرانك-هيرتز",
    "difficulty": "easy",
    "questionEn": "The historical Franck-Hertz experiment (1914) provided the first direct, non-optical experimental proof that:",
    "questionAr": "قدمت تجربة فرانك-هيرتز التاريخية (1914) أول دليل تجريبي مباشر غير بصري يثبت أن:",
    "optionsEn": [
      "Electrons possess a negative electrical charge of $-1.6 \\times 10^{-19}\\text{ C}$",
      "X-rays undergo constructive interference from crystal planes",
      "Atomic energy levels are discrete and quantized in isolated atoms",
      "Nuclei contain neutral particles called neutrons"
    ],
    "optionsAr": [
      "الإلكترونات تمتلك شحنة كهربية سالبة مقدارها $-1.6 \\times 10^{-19}\\text{ C}$",
      "الأشعة السينية تعاني تداخلاً بناءً عند انعكاسها عن مستويات البلورة",
      "مستويات الطاقة الذرية منفصلة ومكممة في الذرات المعزولة",
      "النواة تحتوي على جسيمات متعادلة تسمى النيوترونات"
    ],
    "correctAnswer": "Atomic energy levels are discrete and quantized in isolated atoms",
    "correctIndex": 2,
    "hintEn": "Electrons collided inelastically with mercury atoms only at discrete threshold energies.",
    "hintAr": "تصادمت الإلكترونات تصادماً غير مرن مع ذرات الزئبق فقط عند قيم طاقة محددة ومنفصلة.",
    "stepByStepSolutionEn": [
      "Electrons transferring exactly $4.9\\text{ eV}$ to mercury atoms proved that the ground-to-first-excited state gap is strictly quantized."
    ],
    "stepByStepSolutionAr": [
      "فقد الإلكترونات لطاقة مقدارها $4.9\\text{ eV}$ بالضبط مع ذرات الزئبق أثبت أن الفرق بين المستوى الأرضي ومستوى الإثارة الأول مكمم بدقة."
    ],
    "teacherTipEn": "James Franck and Gustav Hertz were awarded the 1925 Nobel Prize in Physics.",
    "teacherTipAr": "نال جيمس فرانك وجوستاف هيرتز جائزة نوبل في الفيزياء عام 1925 عن هذا الإنجاز."
  },
  {
    "id": "egbac_phys_ch2_db_easy_44",
    "titleEn": "Mercury Atom Excitation Energy in Franck-Hertz",
    "titleAr": "طاقة إثارة الزئبق في تجربة فرانك-هيرتز",
    "difficulty": "easy",
    "questionEn": "In a Franck-Hertz tube filled with mercury vapor, the current drops periodically at regular accelerating voltage intervals of:",
    "questionAr": "في أنبوب فرانك-هيرتز الممتلئ ببخار الزئبق، يهبط تيار المصعد دورياً عند فترات منتظمة لفرق الجهد قدرها:",
    "optionsEn": [
      "$13.6\\text{ V}$",
      "$1.5\\text{ V}$",
      "$10.2\\text{ V}$",
      "$4.9\\text{ V}$"
    ],
    "optionsAr": [
      "$13.6\\text{ V}$",
      "$1.5\\text{ V}$",
      "$10.2\\text{ V}$",
      "$4.9\\text{ V}$"
    ],
    "correctAnswer": "$4.9\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "The drops correspond to the first excitation threshold of mercury.",
    "hintAr": "الهبوط الدوري يقابل عتبة الإثارة الأولى لذرة الزئبق.",
    "stepByStepSolutionEn": [
      "Each time the electrons reach $4.9\\text{ eV}$ (or multiples $9.8\\text{ V}, 14.7\\text{ V}$), they lose their kinetic energy in inelastic collisions, causing a sharp drop in plate current."
    ],
    "stepByStepSolutionAr": [
      "كلما بلغت طاقة الإلكترونات $4.9\\text{ eV}$ (أو مضاعفاتها $9.8\\text{ V}, 14.7\\text{ V}$) تفقد طاقتها في تصادم غير مرن فيهبط تيار اللوح فجأة."
    ],
    "teacherTipEn": "This confirmed Bohr's quantum model without using light spectroscopy.",
    "teacherTipAr": "أكدت هذه النتيجة نموذج بور الكمي دون الحاجة إلى التحليل الطيفي الضوئي."
  },
  {
    "id": "egbac_phys_ch2_db_easy_45",
    "titleEn": "Kinetic Energy of Bohr Electron",
    "titleAr": "طاقة حركة إلكترون بور",
    "difficulty": "easy",
    "questionEn": "For an electron in a hydrogen orbit with total energy $E_n = -13.6/n^2\\text{ eV}$, its kinetic energy $K_n$ is:",
    "questionAr": "لإلكترون يدور في مدار بور بطاقة كلية $E_n = -13.6/n^2\\text{ eV}$، فإن طاقة حركته $K_n$ تساوي:",
    "optionsEn": [
      "$K_n = -E_n = +\\frac{13.6}{n^2}\\text{ eV}$",
      "$K_n = E_n = -\\frac{13.6}{n^2}\\text{ eV}$",
      "$K_n = 2 E_n = -\\frac{27.2}{n^2}\\text{ eV}$",
      "$K_n = \\frac{E_n}{2} = -\\frac{6.8}{n^2}\\text{ eV}$"
    ],
    "optionsAr": [
      "$K_n = -E_n = +\\frac{13.6}{n^2}\\text{ eV}$",
      "$K_n = E_n = -\\frac{13.6}{n^2}\\text{ eV}$",
      "$K_n = 2 E_n = -\\frac{27.2}{n^2}\\text{ eV}$",
      "$K_n = \\frac{E_n}{2} = -\\frac{6.8}{n^2}\\text{ eV}$"
    ],
    "correctAnswer": "$K_n = -E_n = +\\frac{13.6}{n^2}\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "Kinetic energy is always strictly positive: $K = \\frac{1}{2} m v^2 > 0$.",
    "hintAr": "طاقة الحركة موجبة دائماً بالضرورة: $K = \\frac{1}{2} m v^2 > 0$.",
    "stepByStepSolutionEn": [
      "By the Virial theorem for inverse-square Coulomb force, $K = -E = -(-13.6/n^2) = +13.6/n^2\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "وفق نظرية فيريال للقوى التربيعية العكسية، $K = -E = -(-13.6/n^2) = +13.6/n^2\\text{ eV}$."
    ],
    "teacherTipEn": "For ground state $n=1$, kinetic energy is $+13.6\\text{ eV}$.",
    "teacherTipAr": "في المستوى الأرضي $n=1$، تكون طاقة الحركة مساوية $+13.6\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_46",
    "titleEn": "Potential Energy of Bohr Electron",
    "titleAr": "طاقة الوضع لإلكترون بور",
    "difficulty": "easy",
    "questionEn": "For an electron in a hydrogen orbit with total energy $E_n$, its electric potential energy $U_n$ is related by:",
    "questionAr": "لإلكترون يدور في مدار بور بطاقة كلية $E_n$، ترتبط طاقة وضعه الكهربية $U_n$ بالطاقة الكلية بالعلاقة:",
    "optionsEn": [
      "$U_n = -E_n = +\\frac{13.6}{n^2}\\text{ eV}$",
      "$U_n = 2 E_n = -\\frac{27.2}{n^2}\\text{ eV}$",
      "$U_n = \\frac{E_n}{2} = -\\frac{6.8}{n^2}\\text{ eV}$",
      "$U_n = 0\\text{ eV}$"
    ],
    "optionsAr": [
      "$U_n = -E_n = +\\frac{13.6}{n^2}\\text{ eV}$",
      "$U_n = 2 E_n = -\\frac{27.2}{n^2}\\text{ eV}$",
      "$U_n = \\frac{E_n}{2} = -\\frac{6.8}{n^2}\\text{ eV}$",
      "$U_n = 0\\text{ eV}$"
    ],
    "correctAnswer": "$U_n = 2 E_n = -\\frac{27.2}{n^2}\\text{ eV}$",
    "correctIndex": 1,
    "hintEn": "The potential energy is twice the total energy.",
    "hintAr": "طاقة الوضع تساوي ضعف الطاقة الكلية.",
    "stepByStepSolutionEn": [
      "Since $E = K + U$ and $K = -U/2$, it follows that $E = U/2$, which means $U = 2 E = -27.2/n^2\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $E = K + U$ و $K = -U/2$، فإن $E = U/2$، مما يعني أن $U = 2 E = -27.2/n^2\\text{ eV}$."
    ],
    "teacherTipEn": "For the ground state ($n=1$), the potential energy is $-27.2\\text{ eV}$.",
    "teacherTipAr": "في المستوى الأرضي ($n=1$) تكون طاقة الوضع مساوية $-27.2\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_47",
    "titleEn": "Relation Between K, U, and E in Bohr Model",
    "titleAr": "العلاقة الجامعة بين طاقات الحركة والوضع والكلية",
    "difficulty": "easy",
    "questionEn": "Which equality correctly interrelates kinetic energy $K$, potential energy $U$, and total energy $E$ for an electron in a Bohr hydrogen orbit?",
    "questionAr": "أي المعادلات التالية تعبر بشكل صحيح عن العلاقة بين طاقة الحركة $K$ وطاقة الوضع $U$ والطاقة الكلية $E$ لإلكترون في ذرة بور؟",
    "optionsEn": [
      "$E = K = -U$",
      "$K = 2 E = U$",
      "$E = -K = \\frac{U}{2}$",
      "$U = -K = E$"
    ],
    "optionsAr": [
      "$E = K = -U$",
      "$K = 2 E = U$",
      "$E = -K = \\frac{U}{2}$",
      "$U = -K = E$"
    ],
    "correctAnswer": "$E = -K = \\frac{U}{2}$",
    "correctIndex": 2,
    "hintEn": "Remember: $K$ is positive, while $E$ and $U$ are negative, with $|U| = 2 K = 2 |E|$.",
    "hintAr": "تذكر: $K$ موجبة، بينما $E$ و $U$ سالبتان، مع تحقيق $|U| = 2 K = 2 |E|$.",
    "stepByStepSolutionEn": [
      "$K = +13.6/n^2$, $U = -27.2/n^2$, $E = -13.6/n^2$. Hence $E = -K = U/2$."
    ],
    "stepByStepSolutionAr": [
      "$K = +13.6/n^2$، $U = -27.2/n^2$، $E = -13.6/n^2$. إذن $E = -K = U/2$."
    ],
    "teacherTipEn": "A classic benchmark problem frequently tested in conceptual physics.",
    "teacherTipAr": "مسألة مرجعية كلاسيكية لاختبار الفهم المفاهيمي العميق للعلاقات الطاقية."
  },
  {
    "id": "egbac_phys_ch2_db_easy_48",
    "titleEn": "Bohr Orbit Radius Dependence on n",
    "titleAr": "اعتماد نصف قطر مدار بور على رتبة الكم n",
    "difficulty": "easy",
    "questionEn": "The orbital radius $r_n$ of an allowed electron state in a hydrogen atom is directly proportional to:",
    "questionAr": "يتناسب نصف قطر المدار المسموح به $r_n$ لإلكترون ذرة الهيدروجين طردياً مع:",
    "optionsEn": [
      "$n$",
      "$\\frac{1}{n}$",
      "$\\sqrt{n}$",
      "$n^2$"
    ],
    "optionsAr": [
      "$n$",
      "$\\frac{1}{n}$",
      "$\\sqrt{n}$",
      "$n^2$"
    ],
    "correctAnswer": "$n^2$",
    "correctIndex": 3,
    "hintEn": "Recall Bohr's radius formula: $r_n = n^2 a_0$.",
    "hintAr": "تذكر صيغة نصف قطر مدارات بور: $r_n = n^2 a_0$.",
    "stepByStepSolutionEn": [
      "Equating Coulomb attraction to centripetal force with $m v r = n \\hbar$ gives $r_n = \\frac{4\\pi \\varepsilon_0 \\hbar^2}{m e^2} n^2 = n^2 a_0 \\propto n^2$."
    ],
    "stepByStepSolutionAr": [
      "بمساواة قوة كولوم مع القوة المركزية واستخدام شرط تكميم كمية الحركة نجد أن $r_n = n^2 a_0 \\propto n^2$."
    ],
    "teacherTipEn": "For $n=2$, the radius is 4 times the Bohr radius ($r_2 = 4 a_0$).",
    "teacherTipAr": "للمستوى الثاني $n=2$ يكون نصف القطر 4 أمثال نصف قطر بور الأول ($r_2 = 4 a_0$)."
  },
  {
    "id": "egbac_phys_ch2_db_easy_49",
    "titleEn": "Bohr Electron Speed Dependence on n",
    "titleAr": "اعتماد سرعة إلكترون بور على رتبة الكم n",
    "difficulty": "easy",
    "questionEn": "The orbital speed $v_n$ of an electron in the $n$-th Bohr orbit of hydrogen is proportional to:",
    "questionAr": "تتناسب السرعة المدارية $v_n$ لإلكترون في مدار بور ذي الرتبة $n$ لذرة الهيدروجين مع:",
    "optionsEn": [
      "$\\frac{1}{n}$",
      "$n$",
      "$n^2$",
      "$\\frac{1}{n^2}$"
    ],
    "optionsAr": [
      "$\\frac{1}{n}$",
      "$n$",
      "$n^2$",
      "$\\frac{1}{n^2}$"
    ],
    "correctAnswer": "$\\frac{1}{n}$",
    "correctIndex": 0,
    "hintEn": "From $m v r = n \\hbar$ and $r \\propto n^2$, find how $v$ scales with $n$.",
    "hintAr": "من $m v r = n \\hbar$ و $r \\propto n^2$ استنتج اعتماد $v$ على $n$.",
    "stepByStepSolutionEn": [
      "$v_n = \\frac{n\\hbar}{m r_n} \\propto \\frac{n}{n^2} = \\frac{1}{n}$."
    ],
    "stepByStepSolutionAr": [
      "$v_n = \\frac{n\\hbar}{m r_n} \\propto \\frac{n}{n^2} = \\frac{1}{n}$."
    ],
    "teacherTipEn": "The electron moves fastest in the innermost orbit ($n=1$) at roughly $c/137 \\approx 2.18 \\times 10^6\\text{ m/s}$.",
    "teacherTipAr": "يتحرك الإلكترون بأقصى سرعة في المدار الداخلي الأول ($n=1$) وتبلغ حوالي $c/137 \\approx 2.18 \\times 10^6\\text{ m/s}$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_50",
    "titleEn": "Energy Level Spacing Behavior",
    "titleAr": "سلوك المسافات بين مستويات الطاقة",
    "difficulty": "easy",
    "questionEn": "As the principal quantum number $n$ increases in the hydrogen atom, the energy spacing between adjacent levels $\\Delta E = E_{n+1} - E_n$:",
    "questionAr": "مع زيادة رتبة الكم الرئيسية $n$ في ذرة الهيدروجين، فإن فرق الطاقة بين مستويين متتاليين $\\Delta E = E_{n+1} - E_n$:",
    "optionsEn": [
      "Increases linearly without bound toward infinity",
      "Decreases continuously, causing energy levels to crowd closely together",
      "Remains perfectly constant, exactly like a classical harmonic oscillator",
      "Oscillates sinusoidally between positive and negative values"
    ],
    "optionsAr": [
      "يتزايد خطياً بلا حدود مقترباً من المالانهاية",
      "يتناقص باستمرار، مما يجعل مستويات الطاقة تتقارب بشدة وتتزاحم",
      "يظل ثابتاً تماماً كحالة المتذبذب التوافقي الكلاسيكي",
      "يتذبذب جيبياً بين قيم موجبة وسالبة"
    ],
    "correctAnswer": "Decreases continuously, causing energy levels to crowd closely together",
    "correctIndex": 1,
    "hintEn": "Consider the gap between $E_1$ and $E_2$ ($10.2\\text{ eV}$) vs $E_2$ and $E_3$ ($1.89\\text{ eV}$).",
    "hintAr": "قارن الفرق بين المستويين الأول والثاني ($10.2\\text{ eV}$) والفرق بين الثاني والثالث ($1.89\\text{ eV}$).",
    "stepByStepSolutionEn": [
      "$\\Delta E \\propto \\frac{1}{n^2} - \\frac{1}{(n+1)^2} \\approx \\frac{2}{n^3}$. As $n \\to \\infty$, the separation approaches zero."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E \\propto \\frac{1}{n^2} - \\frac{1}{(n+1)^2} \\approx \\frac{2}{n^3}$، ومع اقتراب $n$ من المالانهاية يقترب فرق الطاقة من الصفر."
    ],
    "teacherTipEn": "At very high $n$ (Rydberg states), the spectrum merges smoothly into a continuum.",
    "teacherTipAr": "عند قيم $n$ الكبيرة جداً (ذرات ريدبرج)، يندمج الطيف بسلاسة في متصل مستمر."
  },
  {
    "id": "egbac_phys_ch2_db_easy_51",
    "titleEn": "Hydrogen-Like Ions Energy Scaling with Z",
    "titleAr": "اعتماد طاقة الأيونات الشبيهة بالهيدروجين على Z",
    "difficulty": "easy",
    "questionEn": "For a hydrogen-like single-electron ion with nuclear charge $+Ze$ (such as $\\text{He}^+, \\text{Li}^{2+}$), the energy of the $n$-th state scales as:",
    "questionAr": "لأيون أحادي الإلكترون شبيه بالهيدروجين شحنته النووية $+Ze$ (مثل $\\text{He}^+, \\text{Li}^{2+}$)، فإن طاقة المستوى $n$ تتناسب مع:",
    "optionsEn": [
      "$E_n = -13.6 \\frac{Z}{n^2}\\text{ eV}$",
      "$E_n = -13.6 \\frac{n^2}{Z^2}\\text{ eV}$",
      "$E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$",
      "$E_n = -13.6 \\frac{Z^2}{n}\\text{ eV}$"
    ],
    "optionsAr": [
      "$E_n = -13.6 \\frac{Z}{n^2}\\text{ eV}$",
      "$E_n = -13.6 \\frac{n^2}{Z^2}\\text{ eV}$",
      "$E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$",
      "$E_n = -13.6 \\frac{Z^2}{n}\\text{ eV}$"
    ],
    "correctAnswer": "$E_n = -13.6 \\frac{Z^2}{n^2}\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "Coulomb force is proportional to $Z$, leading to $Z^2$ energy dependence.",
    "hintAr": "قوة كولوم تتناسب مع $Z$ مما يؤدي إلى اعتماد تربيعي للطاقة على $Z^2$.",
    "stepByStepSolutionEn": [
      "The electrostatic attractive potential is multiplied by $Z$, causing orbital contraction ($r \\propto 1/Z$) and energy deepened by $Z^2$: $E_n = -13.6 Z^2 / n^2\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "جهد الجذب الكهروستاتيكي يزداد بمقدار $Z$ مما يؤدي لانكماش المدار ($r \\propto 1/Z$) وتعميق الطاقة بمقدار $Z^2$: $E_n = -13.6 Z^2 / n^2\\text{ eV}$."
    ],
    "teacherTipEn": "For helium ion $\\text{He}^+$ ($Z=2$), ground state energy is $-13.6 \\times 4 = -54.4\\text{ eV}$.",
    "teacherTipAr": "لأيون الهيليوم $\\text{He}^+$ ($Z=2$)، تكون طاقة المستوى الأرضي $-13.6 \\times 4 = -54.4\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_52",
    "titleEn": "Ionization Energy of Singly Ionized Helium",
    "titleAr": "طاقة تأين أيون الهيليوم أحادي الشحنة",
    "difficulty": "easy",
    "questionEn": "The energy required to completely remove the single remaining electron from a ground-state $\\text{He}^+$ ion ($Z=2$) is:",
    "questionAr": "الطاقة اللازمة لانتزاع الإلكترون الوحيد المتبقي تماماً من أيون هيليوم $\\text{He}^+$ مستقر ($Z=2$) هي:",
    "optionsEn": [
      "$13.6\\text{ eV}$",
      "$27.2\\text{ eV}$",
      "$108.8\\text{ eV}$",
      "$54.4\\text{ eV}$"
    ],
    "optionsAr": [
      "$13.6\\text{ eV}$",
      "$27.2\\text{ eV}$",
      "$108.8\\text{ eV}$",
      "$54.4\\text{ eV}$"
    ],
    "correctAnswer": "$54.4\\text{ eV}$",
    "correctIndex": 3,
    "hintEn": "Apply $E_1 = -13.6 \\times Z^2\\text{ eV}$ with $Z=2$.",
    "hintAr": "طبق العلاقة $E_1 = -13.6 \\times Z^2\\text{ eV}$ مع $Z=2$.",
    "stepByStepSolutionEn": [
      "$E_{\\text{ion}} = 0 - E_1 = 0 - (-13.6 \\times 2^2) = 13.6 \\times 4 = 54.4\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_{\\text{ion}} = 0 - E_1 = 0 - (-13.6 \\times 2^2) = 13.6 \\times 4 = 54.4\\text{ eV}$."
    ],
    "teacherTipEn": "Singly ionized helium is a true one-electron hydrogen-like system.",
    "teacherTipAr": "أيون الهيليوم أحادي الشحنة هو نظام حقيقي شبيه بالهيدروجين يمتلك إلكتروناً واحداً."
  },
  {
    "id": "egbac_phys_ch2_db_easy_53",
    "titleEn": "First Excited State Quantum Number",
    "titleAr": "رتبة الكم لمستوى الإثارة الأول",
    "difficulty": "easy",
    "questionEn": "In atomic physics terminology, the 'first excited state' of a hydrogen atom corresponds to which principal quantum number?",
    "questionAr": "في مصطلحات الفيزياء الذرية، تقابل 'حالة الإثارة الأولى' لذرة الهيدروجين رتبة كم رئيسية قدرها:",
    "optionsEn": [
      "$n = 2$",
      "$n = 1$",
      "$n = 3$",
      "$n = 0$"
    ],
    "optionsAr": [
      "$n = 2$",
      "$n = 1$",
      "$n = 3$",
      "$n = 0$"
    ],
    "correctAnswer": "$n = 2$",
    "correctIndex": 0,
    "hintEn": "Ground state is $n=1$, so the first excited level is the next integer.",
    "hintAr": "المستوى الأرضي هو $n=1$، لذا يكون مستوى الإثارة الأول هو العدد الصحيح التالي.",
    "stepByStepSolutionEn": [
      "Ground state: $n=1$. First excited state: $n=2$. Second excited state: $n=3$, and so forth."
    ],
    "stepByStepSolutionAr": [
      "المستوى الأرضي: $n=1$. مستوى الإثارة الأول: $n=2$. مستوى الإثارة الثاني: $n=3$، وهكذا."
    ],
    "teacherTipEn": "Beware of the classic distractor trap confusing ground state ($n=1$) with first excited state ($n=2$).",
    "teacherTipAr": "احذر من فخ الخلط الكلاسيكي بين المستوى الأرضي ($n=1$) ومستوى الإثارة الأول ($n=2$)."
  },
  {
    "id": "egbac_phys_ch2_db_easy_54",
    "titleEn": "Energy of Second Bohr Orbit in Hydrogen",
    "titleAr": "طاقة مدار بور الثاني في الهيدروجين",
    "difficulty": "easy",
    "questionEn": "The energy of an electron in the first excited state ($n=2$) of the hydrogen atom is:",
    "questionAr": "طاقة الإلكترون في مستوى الإثارة الأول ($n=2$) لذرة الهيدروجين تساوي:",
    "optionsEn": [
      "$-6.8\\text{ eV}$",
      "$-3.4\\text{ eV}$",
      "$-1.51\\text{ eV}$",
      "$-13.6\\text{ eV}$"
    ],
    "optionsAr": [
      "$-6.8\\text{ eV}$",
      "$-3.4\\text{ eV}$",
      "$-1.51\\text{ eV}$",
      "$-13.6\\text{ eV}$"
    ],
    "correctAnswer": "$-3.4\\text{ eV}$",
    "correctIndex": 1,
    "hintEn": "Calculate $E_2 = -13.6 / 2^2\\text{ eV}$.",
    "hintAr": "احسب $E_2 = -13.6 / 2^2\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$E_2 = -13.6 / 4 = -3.4\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_2 = -13.6 / 4 = -3.4\\text{ eV}$."
    ],
    "teacherTipEn": "The excitation energy from ground state to this level is $-3.4 - (-13.6) = 10.2\\text{ eV}$.",
    "teacherTipAr": "طاقة الإثارة من المستوى الأرضي إلى هذا المستوى هي $-3.4 - (-13.6) = 10.2\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_55",
    "titleEn": "Energy of Third Bohr Orbit in Hydrogen",
    "titleAr": "طاقة مدار بور الثالث في الهيدروجين",
    "difficulty": "easy",
    "questionEn": "The energy of an electron occupying the $n=3$ state in hydrogen is approximately:",
    "questionAr": "طاقة الإلكترون في المستوى $n=3$ في ذرة الهيدروجين تساوي تقريباً:",
    "optionsEn": [
      "$-4.53\\text{ eV}$",
      "$-0.85\\text{ eV}$",
      "$-1.51\\text{ eV}$",
      "$-3.4\\text{ eV}$"
    ],
    "optionsAr": [
      "$-4.53\\text{ eV}$",
      "$-0.85\\text{ eV}$",
      "$-1.51\\text{ eV}$",
      "$-3.4\\text{ eV}$"
    ],
    "correctAnswer": "$-1.51\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "Calculate $E_3 = -13.6 / 3^2\\text{ eV}$.",
    "hintAr": "احسب $E_3 = -13.6 / 3^2\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$E_3 = -13.6 / 9 \\approx -1.511\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_3 = -13.6 / 9 \\approx -1.511\\text{ eV}$."
    ],
    "teacherTipEn": "This level serves as the upper level for the $H_\\alpha$ Balmer transition ($3 \\to 2$).",
    "teacherTipAr": "يمثل هذا المستوى المستوى الابتدائي لانتقال $H_\\alpha$ في متسلسلة بالمر ($3 \\to 2$)."
  },
  {
    "id": "egbac_phys_ch2_db_easy_56",
    "titleEn": "Energy of Fourth Bohr Orbit in Hydrogen",
    "titleAr": "طاقة مدار بور الرابع في الهيدروجين",
    "difficulty": "easy",
    "questionEn": "The energy of the $n=4$ state in atomic hydrogen is:",
    "questionAr": "طاقة المستوى $n=4$ في ذرة الهيدروجين تساوي:",
    "optionsEn": [
      "$-1.51\\text{ eV}$",
      "$-0.54\\text{ eV}$",
      "$-3.4\\text{ eV}$",
      "$-0.85\\text{ eV}$"
    ],
    "optionsAr": [
      "$-1.51\\text{ eV}$",
      "$-0.54\\text{ eV}$",
      "$-3.4\\text{ eV}$",
      "$-0.85\\text{ eV}$"
    ],
    "correctAnswer": "$-0.85\\text{ eV}$",
    "correctIndex": 3,
    "hintEn": "Divide $-13.6$ by $4^2 = 16$.",
    "hintAr": "اقسم $-13.6$ على $4^2 = 16$.",
    "stepByStepSolutionEn": [
      "$E_4 = -13.6 / 16 = -0.85\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_4 = -13.6 / 16 = -0.85\\text{ eV}$."
    ],
    "teacherTipEn": "Transition from $n=4$ to $n=2$ gives the cyan $H_\\beta$ line: $\\Delta E = 2.55\\text{ eV}$.",
    "teacherTipAr": "الانتقال من $n=4$ إلى $n=2$ يعطي خط $H_\\beta$ السماوي: $\\Delta E = 2.55\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_easy_57",
    "titleEn": "Electromagnetic Spectrum Placement of X-Rays",
    "titleAr": "موقع الأشعة السينية في الطيف الكهرومغناطيسي",
    "difficulty": "easy",
    "questionEn": "In the electromagnetic spectrum, X-rays occupy the frequency band located between:",
    "questionAr": "في الطيف الكهرومغناطيسي، تقع حزمة ترددات الأشعة السينية بين:",
    "optionsEn": [
      "Ultraviolet radiation and Gamma rays",
      "Visible light and Infrared radiation",
      "Microwaves and Radio waves",
      "Infrared and Terahertz waves"
    ],
    "optionsAr": [
      "الأشعة فوق البنفسجية وأشعة جاما",
      "الضوء المرئي والأشعة تحت الحمراء",
      "الموجات الميكروية وموجات الراديو",
      "الأشعة تحت الحمراء وموجات التيراهيرتز"
    ],
    "correctAnswer": "Ultraviolet radiation and Gamma rays",
    "correctIndex": 0,
    "hintEn": "Order of increasing frequency: Radio < IR < Visible < UV < X-rays < Gamma.",
    "hintAr": "ترتيب التردد المتصاعد: راديو < تحت حمراء < مرئي < فوق بنفسجي < أشعة سينية < جاما.",
    "stepByStepSolutionEn": [
      "X-rays have frequencies roughly from $3 \\times 10^{16}\\text{ Hz}$ to $3 \\times 10^{19}\\text{ Hz}$ ($\\lambda \\approx 10\\text{ nm}$ down to $0.01\\text{ nm}$), bridging UV and nuclear Gamma rays."
    ],
    "stepByStepSolutionAr": [
      "تمتلك الأشعة السينية ترددات من حوالي $3 \\times 10^{16}\\text{ Hz}$ إلى $3 \\times 10^{19}\\text{ Hz}$، واصلة بين فوق البنفسجية وأشعة جاما النووية."
    ],
    "teacherTipEn": "Unlike gamma rays which originate in the nucleus, X-rays originate outside the nucleus from electron transitions or deceleration.",
    "teacherTipAr": "خلافاً لأشعة جاما التي تنبعث من داخل النواة، تنشأ الأشعة السينية من خارج النواة عبر انتقالات أو فرملة الإلكترونات."
  },
  {
    "id": "egbac_phys_ch2_db_easy_58",
    "titleEn": "Discovery of X-Rays by Roentgen",
    "titleAr": "اكتشاف رونتجن للأشعة السينية",
    "difficulty": "easy",
    "questionEn": "Wilhelm Conrad Röntgen discovered X-rays in 1895 while experimenting with:",
    "questionAr": "اكتشف فيلهلم كونراد رونتجن الأشعة السينية عام 1895 أثناء تجاربه على:",
    "optionsEn": [
      "Alpha particle scattering through thin gold foil",
      "Gas discharge in evacuated cathode ray Crookes tubes",
      "Natural radioactivity of uranium salts",
      "Laser cavity resonances in helium-neon mixtures"
    ],
    "optionsAr": [
      "تشتت جسيمات ألفا عبر رقائق الذهب الرقيقة",
      "التفريغ الكهربي للغازات في أنابيب كروكس المفرغة لأشعة المهبط",
      "النشاط الإشعاعي الطبيعي لأملاح اليورانيوم",
      "رنين تجاويف الليزر في خلائط الهيليوم والنيون"
    ],
    "correctAnswer": "Gas discharge in evacuated cathode ray Crookes tubes",
    "correctIndex": 1,
    "hintEn": "Röntgen noticed a barium platinocyanide fluorescent screen glowing across the room.",
    "hintAr": "لاحظ رونتجن توهج شاشة مطلية ببلاتينوسيانيد الباريوم على بعد أمتار في الغرفة المظلمة.",
    "stepByStepSolutionEn": [
      "Energetic cathode rays striking the tube walls generated penetrating unknown rays which he labeled 'X-rays'."
    ],
    "stepByStepSolutionAr": [
      "تسبب اصطدام أشعة المهبط السريعة بجدار الأنبوب في توليد أشعة مجهولة نافذة أطلق عليها اسم 'أشعة X'."
    ],
    "teacherTipEn": "Röntgen was awarded the very first Nobel Prize in Physics in 1901.",
    "teacherTipAr": "مُنح رونتجن أول جائزة نوبل في الفيزياء على الإطلاق عام 1901."
  }
],
  medium: [
  {
    "id": "egbac_phys_ch2_db_medium_01",
    "titleEn": "Lyman Alpha Wavelength Calculation",
    "titleAr": "حساب الطول الموجي لخط ليمان-ألفا",
    "difficulty": "medium",
    "questionEn": "What is the wavelength $\\lambda$ of the first line of the Lyman series ($n=2 \\to 1$) in the hydrogen spectrum ($R_H = 1.097 \\times 10^7\\text{ m}^{-1}$)?",
    "questionAr": "ما هو الطول الموجي $\\lambda$ لأول خط في متسلسلة ليمان ($n=2 \\to 1$) في طيف الهيدروجين ($R_H = 1.097 \\times 10^7\\text{ m}^{-1}$)؟",
    "optionsEn": [
      "$121.6\\text{ nm}$",
      "$91.2\\text{ nm}$",
      "$656.3\\text{ nm}$",
      "$486.1\\text{ nm}$"
    ],
    "optionsAr": [
      "$121.6\\text{ nm}$",
      "$91.2\\text{ nm}$",
      "$656.3\\text{ nm}$",
      "$486.1\\text{ nm}$"
    ],
    "correctAnswer": "$121.6\\text{ nm}$",
    "correctIndex": 0,
    "hintEn": "Use Rydberg formula: $\\frac{1}{\\lambda} = R_H (1 - 1/4) = \\frac{3}{4} R_H$.",
    "hintAr": "طبق صيغة ريدبرج: $\\frac{1}{\\lambda} = R_H (1 - 1/4) = \\frac{3}{4} R_H$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{4}{3 R_H} = \\frac{4}{3 \\times 1.097 \\times 10^7} \\approx 1.2157 \\times 10^{-7}\\text{ m} = 121.6\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{4}{3 R_H} = \\frac{4}{3 \\times 1.097 \\times 10^7} \\approx 1.2157 \\times 10^{-7}\\text{ m} = 121.6\\text{ nm}$."
    ],
    "teacherTipEn": "This ultraviolet emission line is vital in astronomy for mapping intergalactic gas clouds.",
    "teacherTipAr": "هذا الخط فوق البنفسجي بالغ الأهمية فلكياً لرسم خرائط السحب الغازية بين المجرية."
  },
  {
    "id": "egbac_phys_ch2_db_medium_02",
    "titleEn": "Lyman Series Limit Wavelength",
    "titleAr": "الطول الموجي لحد متسلسلة ليمان",
    "difficulty": "medium",
    "questionEn": "The shortest wavelength (series limit) of the Lyman series ($n=\\infty \\to 1$) in atomic hydrogen is:",
    "questionAr": "أقصر طول موجي (حد المتسلسلة) لمتسلسلة ليمان ($n=\\infty \\to 1$) في ذرة الهيدروجين يساوي:",
    "optionsEn": [
      "$121.6\\text{ nm}$",
      "$91.2\\text{ nm}$",
      "$364.6\\text{ nm}$",
      "$820.4\\text{ nm}$"
    ],
    "optionsAr": [
      "$121.6\\text{ nm}$",
      "$91.2\\text{ nm}$",
      "$364.6\\text{ nm}$",
      "$820.4\\text{ nm}$"
    ],
    "correctAnswer": "$91.2\\text{ nm}$",
    "correctIndex": 1,
    "hintEn": "At the series limit, $1/n_2^2 \\to 0$, so $\\lambda = 1/R_H$.",
    "hintAr": "عند حد المتسلسلة، يؤول $1/n_2^2$ إلى الصفر، فتكون $\\lambda = 1/R_H$.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\text{limit}} = \\frac{1}{R_H} = \\frac{1}{1.097 \\times 10^7} \\approx 9.116 \\times 10^{-8}\\text{ m} = 91.2\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\text{limit}} = \\frac{1}{R_H} = \\frac{1}{1.097 \\times 10^7} \\approx 9.116 \\times 10^{-8}\\text{ m} = 91.2\\text{ nm}$."
    ],
    "teacherTipEn": "Photons with wavelengths shorter than $91.2\\text{ nm}$ have energies $> 13.6\\text{ eV}$ and cause photoionization.",
    "teacherTipAr": "الفوتونات ذات الأطوال الموجية الأقصر من $91.2\\text{ nm}$ تملك طاقة تفوق $13.6\\text{ eV}$ وتؤدي إلى التأين الضوئي."
  },
  {
    "id": "egbac_phys_ch2_db_medium_03",
    "titleEn": "Balmer Alpha Wavelength Calculation",
    "titleAr": "حساب الطول الموجي لخط بالمر-ألفا",
    "difficulty": "medium",
    "questionEn": "Calculate the wavelength $\\lambda$ of the red $H_\\alpha$ spectral line of hydrogen ($n=3 \\to 2$):",
    "questionAr": "احسب الطول الموجي $\\lambda$ للخط الأحمر $H_\\alpha$ في طيف الهيدروجين ($n=3 \\to 2$):",
    "optionsEn": [
      "$486.1\\text{ nm}$",
      "$434.0\\text{ nm}$",
      "$656.3\\text{ nm}$",
      "$121.6\\text{ nm}$"
    ],
    "optionsAr": [
      "$486.1\\text{ nm}$",
      "$434.0\\text{ nm}$",
      "$656.3\\text{ nm}$",
      "$121.6\\text{ nm}$"
    ],
    "correctAnswer": "$656.3\\text{ nm}$",
    "correctIndex": 2,
    "hintEn": "$\\frac{1}{\\lambda} = R_H (1/4 - 1/9) = \\frac{5}{36} R_H$.",
    "hintAr": "$\\frac{1}{\\lambda} = R_H (1/4 - 1/9) = \\frac{5}{36} R_H$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{36}{5 R_H} = \\frac{36}{5 \\times 1.097 \\times 10^7} \\approx 6.563 \\times 10^{-7}\\text{ m} = 656.3\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{36}{5 R_H} = \\frac{36}{5 \\times 1.097 \\times 10^7} \\approx 6.563 \\times 10^{-7}\\text{ m} = 656.3\\text{ nm}$."
    ],
    "teacherTipEn": "Corresponding photon energy is $\\Delta E = 1.89\\text{ eV}$.",
    "teacherTipAr": "طاقة الفوتون المقابلة هي $\\Delta E = 1.89\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_04",
    "titleEn": "Balmer Series Limit Wavelength",
    "titleAr": "الطول الموجي لحد متسلسلة بالمر",
    "difficulty": "medium",
    "questionEn": "The shortest wavelength of the Balmer series ($n=\\infty \\to 2$) in the hydrogen spectrum is:",
    "questionAr": "أقصر طول موجي في متسلسلة بالمر ($n=\\infty \\to 2$) في طيف الهيدروجين يساوي:",
    "optionsEn": [
      "$656.3\\text{ nm}$",
      "$91.2\\text{ nm}$",
      "$820.4\\text{ nm}$",
      "$364.6\\text{ nm}$"
    ],
    "optionsAr": [
      "$656.3\\text{ nm}$",
      "$91.2\\text{ nm}$",
      "$820.4\\text{ nm}$",
      "$364.6\\text{ nm}$"
    ],
    "correctAnswer": "$364.6\\text{ nm}$",
    "correctIndex": 3,
    "hintEn": "$\\frac{1}{\\lambda_{\\text{limit}}} = R_H (1/2^2 - 0) = R_H / 4$.",
    "hintAr": "$\\frac{1}{\\lambda_{\\text{limit}}} = R_H (1/2^2 - 0) = R_H / 4$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{4}{R_H} = \\frac{4}{1.097 \\times 10^7} \\approx 3.646 \\times 10^{-7}\\text{ m} = 364.6\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{4}{R_H} = \\frac{4}{1.097 \\times 10^7} \\approx 3.646 \\times 10^{-7}\\text{ m} = 364.6\\text{ nm}$."
    ],
    "teacherTipEn": "This limit lies in the near-ultraviolet part of the spectrum.",
    "teacherTipAr": "يقع هذا الحد في نطاق الأشعة فوق البنفسجية القريبة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_05",
    "titleEn": "Lyman Series Wavelength Ratio",
    "titleAr": "نسبة أطول إلى أقصر طول موجي في ليمان",
    "difficulty": "medium",
    "questionEn": "The ratio of the maximum wavelength ($\\lambda_{\\max}$) to the minimum wavelength ($\\lambda_{\\min}$) in the Lyman series of hydrogen is:",
    "questionAr": "النسبة بين أطول طول موجي ($\\lambda_{\\max}$) إلى أقصر طول موجي ($\\lambda_{\\min}$) في متسلسلة ليمان للهيدروجين تساوي:",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$\\frac{9}{5}$",
      "$\\frac{16}{7}$",
      "$2$"
    ],
    "optionsAr": [
      "$\\frac{4}{3}$",
      "$\\frac{9}{5}$",
      "$\\frac{16}{7}$",
      "$2$"
    ],
    "correctAnswer": "$\\frac{4}{3}$",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\max} = \\frac{4}{3 R_H}$ and $\\lambda_{\\min} = \\frac{1}{R_H}$.",
    "hintAr": "$\\lambda_{\\max} = \\frac{4}{3 R_H}$ و $\\lambda_{\\min} = \\frac{1}{R_H}$.",
    "stepByStepSolutionEn": [
      "Ratio: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4 / (3 R_H)}{1 / R_H} = \\frac{4}{3} \\approx 1.333$."
    ],
    "stepByStepSolutionAr": [
      "النسبة: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{4 / (3 R_H)}{1 / R_H} = \\frac{4}{3} \\approx 1.333$."
    ],
    "teacherTipEn": "Notice this ratio is independent of the value of Rydberg's constant.",
    "teacherTipAr": "لاحظ أن هذه النسبة مستقلة تماماً عن قيمة ثابت ريدبرج."
  },
  {
    "id": "egbac_phys_ch2_db_medium_06",
    "titleEn": "Balmer Series Wavelength Ratio",
    "titleAr": "نسبة أطول إلى أقصر طول موجي في بالمر",
    "difficulty": "medium",
    "questionEn": "The ratio of the maximum wavelength ($\\lambda_{\\max}$, transition $3 \\to 2$) to the minimum wavelength ($\\lambda_{\\min}$, transition $\\infty \\to 2$) in the Balmer series is:",
    "questionAr": "النسبة بين أطول طول موجي ($\\lambda_{\\max}$، انتقال $3 \\to 2$) إلى أقصر طول موجي ($\\lambda_{\\min}$، انتقال $\\infty \\to 2$) في متسلسلة بالمر تساوي:",
    "optionsEn": [
      "$\\frac{4}{3}$",
      "$\\frac{9}{5}$",
      "$\\frac{16}{7}$",
      "$\\frac{25}{9}$"
    ],
    "optionsAr": [
      "$\\frac{4}{3}$",
      "$\\frac{9}{5}$",
      "$\\frac{16}{7}$",
      "$\\frac{25}{9}$"
    ],
    "correctAnswer": "$\\frac{9}{5}$",
    "correctIndex": 1,
    "hintEn": "$\\lambda_{\\max} = \\frac{36}{5 R_H}$ and $\\lambda_{\\min} = \\frac{4}{R_H}$.",
    "hintAr": "$\\lambda_{\\max} = \\frac{36}{5 R_H}$ و $\\lambda_{\\min} = \\frac{4}{R_H}$.",
    "stepByStepSolutionEn": [
      "Ratio: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{36 / (5 R_H)}{4 / R_H} = \\frac{36}{20} = \\frac{9}{5} = 1.80$."
    ],
    "stepByStepSolutionAr": [
      "النسبة: $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{36 / (5 R_H)}{4 / R_H} = \\frac{36}{20} = \\frac{9}{5} = 1.80$."
    ],
    "teacherTipEn": "A classic recurring ratio problem on Egyptian and international physics exams.",
    "teacherTipAr": "مسألة نسبية كلاسيكية متكررة في امتحانات الفيزياء المصرية والدولية."
  },
  {
    "id": "egbac_phys_ch2_db_medium_07",
    "titleEn": "Paschen Series Wavelength Ratio",
    "titleAr": "نسبة أطول إلى أقصر طول موجي في باشن",
    "difficulty": "medium",
    "questionEn": "The ratio of the longest wavelength ($4 \\to 3$) to the shortest wavelength ($\\infty \\to 3$) in the Paschen series is:",
    "questionAr": "النسبة بين أطول طول موجي ($4 \\to 3$) إلى أقصر طول موجي ($\\infty \\to 3$) في متسلسلة باشن تساوي:",
    "optionsEn": [
      "$\\frac{9}{5}$",
      "$\\frac{25}{11}$",
      "$\\frac{16}{7}$",
      "$\\frac{7}{3}$"
    ],
    "optionsAr": [
      "$\\frac{9}{5}$",
      "$\\frac{25}{11}$",
      "$\\frac{16}{7}$",
      "$\\frac{7}{3}$"
    ],
    "correctAnswer": "$\\frac{16}{7}$",
    "correctIndex": 2,
    "hintEn": "$\\lambda_{\\max} = \\frac{144}{7 R_H}$ and $\\lambda_{\\min} = \\frac{9}{R_H}$.",
    "hintAr": "$\\lambda_{\\max} = \\frac{144}{7 R_H}$ و $\\lambda_{\\min} = \\frac{9}{R_H}$.",
    "stepByStepSolutionEn": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{144 / (7 R_H)}{9 / R_H} = \\frac{144}{63} = \\frac{16}{7} \\approx 2.286$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{144 / (7 R_H)}{9 / R_H} = \\frac{144}{63} = \\frac{16}{7} \\approx 2.286$."
    ],
    "teacherTipEn": "Notice the pattern: for series $n_1$, $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{(n_1+1)^2}{2n_1+1}$.",
    "teacherTipAr": "لاحظ النمط العام: لأي متسلسلة $n_1$ تكون النسبة $\\frac{\\lambda_{\\max}}{\\lambda_{\\min}} = \\frac{(n_1+1)^2}{2n_1+1}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_08",
    "titleEn": "Photon Energy for 4 to 2 Transition",
    "titleAr": "طاقة الفوتون للانتقال من 4 إلى 2",
    "difficulty": "medium",
    "questionEn": "When an electron drops from the $n=4$ state ($E_4 = -0.85\\text{ eV}$) to the $n=2$ state ($E_2 = -3.40\\text{ eV}$) in hydrogen, the emitted photon energy is:",
    "questionAr": "عند هبوط إلكترون من المستوى $n=4$ ($E_4 = -0.85\\text{ eV}$) إلى المستوى $n=2$ ($E_2 = -3.40\\text{ eV}$) في الهيدروجين، فإن طاقة الفوتون المنبعث تساوي:",
    "optionsEn": [
      "$4.25\\text{ eV}$",
      "$1.89\\text{ eV}$",
      "$10.20\\text{ eV}$",
      "$2.55\\text{ eV}$"
    ],
    "optionsAr": [
      "$4.25\\text{ eV}$",
      "$1.89\\text{ eV}$",
      "$10.20\\text{ eV}$",
      "$2.55\\text{ eV}$"
    ],
    "correctAnswer": "$2.55\\text{ eV}$",
    "correctIndex": 3,
    "hintEn": "$\\Delta E = E_4 - E_2 = -0.85 - (-3.40)\\text{ eV}$.",
    "hintAr": "$\\Delta E = E_4 - E_2 = -0.85 - (-3.40)\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = -0.85 + 3.40 = +2.55\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E = -0.85 + 3.40 = +2.55\\text{ eV}$."
    ],
    "teacherTipEn": "Converting to joules: $2.55 \\times 1.6 \\times 10^{-19} = 4.08 \\times 10^{-19}\\text{ J}$.",
    "teacherTipAr": "بالتحويل للجول: $2.55 \\times 1.6 \\times 10^{-19} = 4.08 \\times 10^{-19}\\text{ جول}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_09",
    "titleEn": "Photon Energy for 3 to 1 Transition",
    "titleAr": "طاقة الفوتون للانتقال من 3 إلى 1",
    "difficulty": "medium",
    "questionEn": "What is the photon energy emitted when an electron drops from $n=3$ ($E_3 = -1.51\\text{ eV}$) to the ground state $n=1$ ($E_1 = -13.60\\text{ eV}$)?",
    "questionAr": "ما هي طاقة الفوتون المنبعث عند هبوط إلكترون من المستوى $n=3$ ($E_3 = -1.51\\text{ eV}$) إلى المستوى الأرضي $n=1$ ($E_1 = -13.60\\text{ eV}$)؟",
    "optionsEn": [
      "$12.09\\text{ eV}$",
      "$10.20\\text{ eV}$",
      "$13.60\\text{ eV}$",
      "$1.89\\text{ eV}$"
    ],
    "optionsAr": [
      "$12.09\\text{ eV}$",
      "$10.20\\text{ eV}$",
      "$13.60\\text{ eV}$",
      "$1.89\\text{ eV}$"
    ],
    "correctAnswer": "$12.09\\text{ eV}$",
    "correctIndex": 0,
    "hintEn": "$\\Delta E = E_3 - E_1 = -1.51 - (-13.60)\\text{ eV}$.",
    "hintAr": "$\\Delta E = E_3 - E_1 = -1.51 - (-13.60)\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = 13.60 - 1.51 = 12.09\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E = 13.60 - 1.51 = 12.09\\text{ eV}$."
    ],
    "teacherTipEn": "This transition belongs to the Lyman series ($L_\\beta$) in the far-UV.",
    "teacherTipAr": "ينتمي هذا الانتقال إلى متسلسلة ليمان ($L_\\beta$) في أقصى فوق البنفسجية."
  },
  {
    "id": "egbac_phys_ch2_db_medium_10",
    "titleEn": "Excitation Potential for n=1 to n=3",
    "titleAr": "جهد الإثارة للانتقال من n=1 إلى n=3",
    "difficulty": "medium",
    "questionEn": "The minimum accelerating potential required to excite a ground-state hydrogen atom to the $n=3$ level by an impacting electron is:",
    "questionAr": "أقل فرق جهد معجل يلزم لإثارة ذرة هيدروجين مستقرة إلى المستوى $n=3$ بواسطة إلكترون صادم هو:",
    "optionsEn": [
      "$10.20\\text{ V}$",
      "$12.09\\text{ V}$",
      "$13.60\\text{ V}$",
      "$1.51\\text{ V}$"
    ],
    "optionsAr": [
      "$10.20\\text{ V}$",
      "$12.09\\text{ V}$",
      "$13.60\\text{ V}$",
      "$1.51\\text{ V}$"
    ],
    "correctAnswer": "$12.09\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Impact electron kinetic energy $e V \\ge \\Delta E = 12.09\\text{ eV}$.",
    "hintAr": "طاقة حركة الإلكترون الصادم $e V \\ge \\Delta E = 12.09\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "Since $\\Delta E = 12.09\\text{ eV}$, dividing by electron charge $e$ yields potential $V = 12.09\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\Delta E = 12.09\\text{ eV}$، فإن القسمة على شحنة الإلكترون $e$ تعطي الجهد $V = 12.09\\text{ فولت}$."
    ],
    "teacherTipEn": "If the impacting electron has less than $10.2\\text{ eV}$, collision is strictly elastic.",
    "teacherTipAr": "إذا امتلك الإلكترون طاقة أقل من $10.2\\text{ eV}$ يكون التصادم مرناً تماماً."
  },
  {
    "id": "egbac_phys_ch2_db_medium_11",
    "titleEn": "Ground State Radius of Singly Ionized Helium",
    "titleAr": "نصف قطر المستوى الأرضي لأيون الهيليوم",
    "difficulty": "medium",
    "questionEn": "If the Bohr radius of hydrogen ground state is $a_0 = 0.529\\text{ \\AA}$, what is the radius of the ground state orbit of singly ionized helium $\\text{He}^+$ ($Z=2$)?",
    "questionAr": "إذا كان نصف قطر بور لذرة الهيدروجين المستقرة $a_0 = 0.529\\text{ \\AA}$، فما هو نصف قطر المدار الأرضي لأيون الهيليوم $\\text{He}^+$ ($Z=2$)؟",
    "optionsEn": [
      "$1.058\\text{ \\AA}$",
      "$0.529\\text{ \\AA}$",
      "$0.265\\text{ \\AA}$",
      "$0.132\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$1.058\\text{ \\AA}$",
      "$0.529\\text{ \\AA}$",
      "$0.265\\text{ \\AA}$",
      "$0.132\\text{ \\AA}$"
    ],
    "correctAnswer": "$0.265\\text{ \\AA}$",
    "correctIndex": 2,
    "hintEn": "Bohr radius formula for hydrogen-like ions: $r_n = \\frac{n^2 a_0}{Z}$.",
    "hintAr": "صيغة نصف قطر بور للأنظمة الشبيهة بالهيدروجين: $r_n = \\frac{n^2 a_0}{Z}$.",
    "stepByStepSolutionEn": [
      "For $n=1, Z=2$: $r_1 = a_0 / 2 = 0.529 / 2 \\approx 0.2645\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "لـ $n=1, Z=2$: نجد $r_1 = a_0 / 2 = 0.529 / 2 \\approx 0.2645\\text{ \\AA}$."
    ],
    "teacherTipEn": "Greater nuclear charge pulls the electron closer to the nucleus.",
    "teacherTipAr": "الشحنة النووية الأكبر تجذب الإلكترون بقوة أكبر ليقترب من النواة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_12",
    "titleEn": "Orbital Radius for n=3 in Hydrogen",
    "titleAr": "نصف القطر المداري للمستوى n=3 في الهيدروجين",
    "difficulty": "medium",
    "questionEn": "Given the ground-state Bohr radius $a_0 \\approx 0.53\\text{ \\AA}$, the radius of the third orbit ($n=3$) of hydrogen is:",
    "questionAr": "باعتبار نصف قطر بور الأرضي $a_0 \\approx 0.53\\text{ \\AA}$، فإن نصف قطر المدار الثالث ($n=3$) للهيدروجين يساوي:",
    "optionsEn": [
      "$1.59\\text{ \\AA}$",
      "$2.12\\text{ \\AA}$",
      "$0.18\\text{ \\AA}$",
      "$4.77\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$1.59\\text{ \\AA}$",
      "$2.12\\text{ \\AA}$",
      "$0.18\\text{ \\AA}$",
      "$4.77\\text{ \\AA}$"
    ],
    "correctAnswer": "$4.77\\text{ \\AA}$",
    "correctIndex": 3,
    "hintEn": "Radius scales as $r_n = n^2 a_0$. For $n=3$, $n^2 = 9$.",
    "hintAr": "يتناسب نصف القطر وفق $r_n = n^2 a_0$. عند $n=3$ يكون $n^2 = 9$.",
    "stepByStepSolutionEn": [
      "$r_3 = 9 \\times 0.53\\text{ \\AA} = 4.77\\text{ \\AA} = 0.477\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$r_3 = 9 \\times 0.53\\text{ \\AA} = 4.77\\text{ \\AA} = 0.477\\text{ nm}$."
    ],
    "teacherTipEn": "The atomic volume scales as $r^3 \\propto n^6$.",
    "teacherTipAr": "يتناسب حجم الذرة مع مكعب نصف القطر $r^3 \\propto n^6$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_13",
    "titleEn": "Orbital Velocity in Ground State of Hydrogen",
    "titleAr": "السرعة المدارية في المستوى الأرضي للهيدروجين",
    "difficulty": "medium",
    "questionEn": "The orbital speed of an electron in the ground state of hydrogen is approximately:",
    "questionAr": "السرعة المدارية للإلكترون في المستوى الأرضي لذرة الهيدروجين تساوي تقريباً:",
    "optionsEn": [
      "$2.18 \\times 10^6\\text{ m/s}$",
      "$3.00 \\times 10^8\\text{ m/s}$",
      "$1.09 \\times 10^5\\text{ m/s}$",
      "$5.45 \\times 10^7\\text{ m/s}$"
    ],
    "optionsAr": [
      "$2.18 \\times 10^6\\text{ m/s}$",
      "$3.00 \\times 10^8\\text{ m/s}$",
      "$1.09 \\times 10^5\\text{ m/s}$",
      "$5.45 \\times 10^7\\text{ m/s}$"
    ],
    "correctAnswer": "$2.18 \\times 10^6\\text{ m/s}$",
    "correctIndex": 0,
    "hintEn": "$v_1 = \\frac{e^2}{2\\varepsilon_0 h} = \\alpha c \\approx \\frac{c}{137}$.",
    "hintAr": "$v_1 = \\frac{e^2}{2\\varepsilon_0 h} = \\alpha c \\approx \\frac{c}{137}$.",
    "stepByStepSolutionEn": [
      "$v_1 = \\frac{3 \\times 10^8}{137} \\approx 2.18 \\times 10^6\\text{ m/s} \\approx 0.73\\% c$."
    ],
    "stepByStepSolutionAr": [
      "$v_1 = \\frac{3 \\times 10^8}{137} \\approx 2.18 \\times 10^6\\text{ m/s} \\approx 0.73\\% c$."
    ],
    "teacherTipEn": "Because $v_1 \\ll c$, non-relativistic Newtonian mechanics is a very good first approximation.",
    "teacherTipAr": "بما أن $v_1 \\ll c$ فإن ميكانيكا نيوتن غير النسبية تعد تقريباً أولياً ممتازاً."
  },
  {
    "id": "egbac_phys_ch2_db_medium_14",
    "titleEn": "Ratio of Orbital Velocities in n=1 and n=2",
    "titleAr": "نسبة السرعتين المداريتين في المستويين 1 و 2",
    "difficulty": "medium",
    "questionEn": "The ratio of the electron speed in orbit $n=1$ to that in orbit $n=2$ of hydrogen is:",
    "questionAr": "النسبة بين سرعة الإلكترون في المدار $n=1$ إلى سرعته في المدار $n=2$ في ذرة الهيدروجين هي:",
    "optionsEn": [
      "$4 : 1$",
      "$2 : 1$",
      "$1 : 2$",
      "$1 : 4$"
    ],
    "optionsAr": [
      "$4 : 1$",
      "$2 : 1$",
      "$1 : 2$",
      "$1 : 4$"
    ],
    "correctAnswer": "$2 : 1$",
    "correctIndex": 1,
    "hintEn": "Speed scales inversely with $n$: $v_n \\propto 1/n$.",
    "hintAr": "السرعة تتناسب عكسياً مع $n$: $v_n \\propto 1/n$.",
    "stepByStepSolutionEn": [
      "$\\frac{v_1}{v_2} = \\frac{1/1}{1/2} = 2$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{v_1}{v_2} = \\frac{1/1}{1/2} = 2$."
    ],
    "teacherTipEn": "As the electron moves to higher orbits, it slows down.",
    "teacherTipAr": "كلما ارتقى الإلكترون إلى مدارات أعلى قلت سرعته المدارية."
  },
  {
    "id": "egbac_phys_ch2_db_medium_15",
    "titleEn": "Ratio of Orbital Periods for Bohr Orbits",
    "titleAr": "نسبة زمن الدورة المدارية في مدارات بور",
    "difficulty": "medium",
    "questionEn": "The orbital period $T_n$ of an electron in a Bohr orbit scales with principal quantum number $n$ as:",
    "questionAr": "يتناسب الزمن الدوري المداري $T_n$ للإلكترون في مدار بور مع رتبة الكم $n$ بالعلاقة:",
    "optionsEn": [
      "$T_n \\propto n^2$",
      "$T_n \\propto n$",
      "$T_n \\propto n^3$",
      "$T_n \\propto \\frac{1}{n^2}$"
    ],
    "optionsAr": [
      "$T_n \\propto n^2$",
      "$T_n \\propto n$",
      "$T_n \\propto n^3$",
      "$T_n \\propto \\frac{1}{n^2}$"
    ],
    "correctAnswer": "$T_n \\propto n^3$",
    "correctIndex": 2,
    "hintEn": "Period $T = \\frac{2\\pi r}{v}$. Since $r \\propto n^2$ and $v \\propto 1/n$, evaluate $r/v$.",
    "hintAr": "الزمن الدوري $T = \\frac{2\\pi r}{v}$. وبما أن $r \\propto n^2$ و $v \\propto 1/n$، احسب النسبة $r/v$.",
    "stepByStepSolutionEn": [
      "$T_n = \\frac{2\\pi r_n}{v_n} \\propto \\frac{n^2}{1/n} = n^3$."
    ],
    "stepByStepSolutionAr": [
      "$T_n = \\frac{2\\pi r_n}{v_n} \\propto \\frac{n^2}{1/n} = n^3$."
    ],
    "teacherTipEn": "Thus, the period in orbit $n=2$ is $2^3 = 8$ times longer than in orbit $n=1$.",
    "teacherTipAr": "وبالتالي، فإن زمن الدورة في المدار $n=2$ أطول بمقدار $2^3 = 8$ مرات منه في المدار $n=1$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_16",
    "titleEn": "De Broglie Wavelength in Ground State of Hydrogen",
    "titleAr": "طول موجة دي براولي في المستوى الأرضي للهيدروجين",
    "difficulty": "medium",
    "questionEn": "The de Broglie wavelength of an electron in the ground state ($n=1, r=a_0$) of hydrogen is exactly:",
    "questionAr": "طول موجة دي براولي المصاحبة للإلكترون في المستوى الأرضي ($n=1, r=a_0$) للهيدروجين يساوي تماماً:",
    "optionsEn": [
      "$a_0 \\approx 0.53\\text{ \\AA}$",
      "$\\pi a_0 \\approx 1.66\\text{ \\AA}$",
      "$4\\pi a_0 \\approx 6.65\\text{ \\AA}$",
      "$2\\pi a_0 \\approx 3.32\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$a_0 \\approx 0.53\\text{ \\AA}$",
      "$\\pi a_0 \\approx 1.66\\text{ \\AA}$",
      "$4\\pi a_0 \\approx 6.65\\text{ \\AA}$",
      "$2\\pi a_0 \\approx 3.32\\text{ \\AA}$"
    ],
    "correctAnswer": "$2\\pi a_0 \\approx 3.32\\text{ \\AA}$",
    "correctIndex": 3,
    "hintEn": "From $2\\pi r = n\\lambda$, for $n=1$, $\\lambda = 2\\pi a_0$.",
    "hintAr": "من $2\\pi r = n\\lambda$، عند $n=1$ نجد أن $\\lambda = 2\\pi a_0$.",
    "stepByStepSolutionEn": [
      "$\\lambda = 2\\pi (0.529\\text{ \\AA}) \\approx 3.32\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = 2\\pi (0.529\\text{ \\AA}) \\approx 3.32\\text{ \\AA}$."
    ],
    "teacherTipEn": "The entire orbital perimeter equals exactly one de Broglie wavelength.",
    "teacherTipAr": "محيط المدار بأكمله يساوي تماماً طول موجة دي براولي واحدة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_17",
    "titleEn": "De Broglie Wavelength in Fourth Bohr Orbit",
    "titleAr": "طول موجة دي براولي في المدار الرابع",
    "difficulty": "medium",
    "questionEn": "The de Broglie wavelength of an electron in the fourth Bohr orbit ($n=4$) of hydrogen compares to that in the first orbit ($n=1$) as:",
    "questionAr": "مقارنة بطول موجة دي براولي في المدار الأول ($n=1$)، فإن طول موجة دي براولي في المدار الرابع ($n=4$) تكون:",
    "optionsEn": [
      "$4\\text{ times larger} (\\lambda_4 = 4 \\lambda_1)$",
      "$16\\text{ times larger} (\\lambda_4 = 16 \\lambda_1)$",
      "$4\\text{ times smaller} (\\lambda_4 = \\lambda_1 / 4)$",
      "Identical $(\\lambda_4 = \\lambda_1)$"
    ],
    "optionsAr": [
      "$4\\text{ أمثال} (\\lambda_4 = 4 \\lambda_1)$",
      "$16\\text{ مثلاً} (\\lambda_4 = 16 \\lambda_1)$",
      "أصغر $4\\text{ مرات} (\\lambda_4 = \\lambda_1 / 4)$",
      "متطابقة تماماً $(\\lambda_4 = \\lambda_1)$"
    ],
    "correctAnswer": "$4\\text{ times larger} (\\lambda_4 = 4 \\lambda_1)$",
    "correctIndex": 0,
    "hintEn": "$\\lambda = h / p = h / (m v)$. Since $v \\propto 1/n$, $\\lambda \\propto n$.",
    "hintAr": "$\\lambda = h / p = h / (m v)$. وبما أن $v \\propto 1/n$، فإن $\\lambda \\propto n$.",
    "stepByStepSolutionEn": [
      "$\\lambda_n = n \\lambda_1$. For $n=4$, $\\lambda_4 = 4 \\lambda_1 \\approx 4 \\times 3.32 = 13.3\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_n = n \\lambda_1$. عند $n=4$ تصبح $\\lambda_4 = 4 \\lambda_1 \\approx 4 \\times 3.32 = 13.3\\text{ \\AA}$."
    ],
    "teacherTipEn": "Lower speed in higher orbits means larger de Broglie wavelength.",
    "teacherTipAr": "السرعة الأقل في المدارات العليا تعني طول موجة دي براولي أكبر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_18",
    "titleEn": "Number of Lines from Level n=4",
    "titleAr": "عدد الخطوط المنبعثة من المستوى n=4",
    "difficulty": "medium",
    "questionEn": "A large gas discharge tube contains hydrogen atoms excited to the $n=4$ state. How many distinct emission lines can appear in the resulting spectrum?",
    "questionAr": "يحتوي أنبوب تفريغ غازي كبير على ذرات هيدروجين مثارة إلى المستوى $n=4$. كم خط انبعاث منفصل يمكن أن يظهر في الطيف الناتج؟",
    "optionsEn": [
      "4 lines",
      "6 lines",
      "3 lines",
      "10 lines"
    ],
    "optionsAr": [
      "4 خطوط",
      "6 خطوط",
      "3 خطوط",
      "10 خطوط"
    ],
    "correctAnswer": "6 lines",
    "correctIndex": 1,
    "hintEn": "Use $N = \\frac{n(n-1)}{2}$ with $n=4$.",
    "hintAr": "طبق العلاقة $N = \\frac{n(n-1)}{2}$ مع $n=4$.",
    "stepByStepSolutionEn": [
      "$N = \\frac{4 \\times 3}{2} = 6$ lines (3 in Lyman, 2 in Balmer, 1 in Paschen)."
    ],
    "stepByStepSolutionAr": [
      "$N = \\frac{4 \\times 3}{2} = 6$ خطوط (3 في ليمان، 2 في بالمر، 1 في باشن)."
    ],
    "teacherTipEn": "Breakdown: $4\\to1, 3\\to1, 2\\to1$ (Lyman), $4\\to2, 3\\to2$ (Balmer), $4\\to3$ (Paschen).",
    "teacherTipAr": "التفصيل: $4\\to1, 3\\to1, 2\\to1$ (ليمان)، $4\\to2, 3\\to2$ (بالمر)، $4\\to3$ (باشن)."
  },
  {
    "id": "egbac_phys_ch2_db_medium_19",
    "titleEn": "Number of Lines from Level n=5",
    "titleAr": "عدد الخطوط المنبعثة من المستوى n=5",
    "difficulty": "medium",
    "questionEn": "If hydrogen atoms are excited to the fifth energy level ($n=5$), the total number of spectral lines that can be observed is:",
    "questionAr": "إذا أثيرت ذرات الهيدروجين إلى مستوى الطاقة الخامس ($n=5$)، فإن العدد الكلي للخطوط الطيفية التي يمكن رصدها هو:",
    "optionsEn": [
      "5 lines",
      "8 lines",
      "10 lines",
      "15 lines"
    ],
    "optionsAr": [
      "5 خطوط",
      "8 خطوط",
      "10 خطوط",
      "15 خطاً"
    ],
    "correctAnswer": "10 lines",
    "correctIndex": 2,
    "hintEn": "Apply combination formula: $N = \\frac{5 \\times 4}{2}$.",
    "hintAr": "طبق صيغة التوافيق: $N = \\frac{5 \\times 4}{2}$.",
    "stepByStepSolutionEn": [
      "$N = \\frac{5 \\times 4}{2} = 10$ lines."
    ],
    "stepByStepSolutionAr": [
      "$N = \\frac{5 \\times 4}{2} = 10$ خطوط."
    ],
    "teacherTipEn": "Contains 4 Lyman, 3 Balmer, 2 Paschen, and 1 Brackett lines.",
    "teacherTipAr": "تحتوي على 4 خطوط ليمان، و 3 بالمر، و 2 باشن، وخط براكت واحد."
  },
  {
    "id": "egbac_phys_ch2_db_medium_20",
    "titleEn": "Cutoff Wavelength for 20 kV Coolidge Tube",
    "titleAr": "أقصر طول موجي لأنبوب كولدج عند 20 كيلو فولت",
    "difficulty": "medium",
    "questionEn": "In a Coolidge tube operating at an accelerating potential $V = 20\\text{ kV}$, the cutoff wavelength $\\lambda_{\\min}$ of continuous X-rays is approximately ($hc \\approx 12400\\text{ eV}\\cdot\\text{\\AA}$):",
    "questionAr": "في أنبوب كولدج يعمل عند فرق جهد معجل $V = 20\\text{ kV}$، فإن أقل طول موجي $\\lambda_{\\min}$ للأشعة السينية المستمرة يساوي تقريباً ($hc \\approx 12400\\text{ eV}\\cdot\\text{\\AA}$):",
    "optionsEn": [
      "$1.24\\text{ \\AA} (0.124\\text{ nm})$",
      "$0.31\\text{ \\AA} (0.031\\text{ nm})$",
      "$2.48\\text{ \\AA} (0.248\\text{ nm})$",
      "$0.62\\text{ \\AA} (0.062\\text{ nm})$"
    ],
    "optionsAr": [
      "$1.24\\text{ \\AA} (0.124\\text{ nm})$",
      "$0.31\\text{ \\AA} (0.031\\text{ nm})$",
      "$2.48\\text{ \\AA} (0.248\\text{ nm})$",
      "$0.62\\text{ \\AA} (0.062\\text{ nm})$"
    ],
    "correctAnswer": "$0.62\\text{ \\AA} (0.062\\text{ nm})$",
    "correctIndex": 3,
    "hintEn": "Use Duane-Hunt shortcut: $\\lambda_{\\min}(\\text{\\AA}) = \\frac{12400}{V(\\text{volts})}$.",
    "hintAr": "استخدم الصيغة السريعة لدوان-هنت: $\\lambda_{\\min}(\\text{\\AA}) = \\frac{12400}{V(\\text{volts})}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\min} = \\frac{12400}{20000} = 0.62\\text{ \\AA} = 6.2 \\times 10^{-11}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{12400}{20000} = 0.62\\text{ \\AA} = 6.2 \\times 10^{-11}\\text{ m}$."
    ],
    "teacherTipEn": "This is within the typical medical diagnostic X-ray range.",
    "teacherTipAr": "يقع هذا الطول الموجي في المدى المعتاد للأشعة السينية التشخيصية الطبية."
  },
  {
    "id": "egbac_phys_ch2_db_medium_21",
    "titleEn": "Cutoff Wavelength for 50 kV Coolidge Tube",
    "titleAr": "أقصر طول موجي لأنبوب كولدج عند 50 كيلو فولت",
    "difficulty": "medium",
    "questionEn": "An X-ray tube operates at an anode potential of $50\\text{ kV}$. What is the minimum wavelength $\\lambda_{\\min}$ of the continuous spectrum?",
    "questionAr": "أنبوب أشعة سينية يعمل عند جهد مصعد مقداره $50\\text{ kV}$. ما هو أقل طول موجي $\\lambda_{\\min}$ للطيف المستمر؟",
    "optionsEn": [
      "$0.248\\text{ \\AA} (0.0248\\text{ nm})$",
      "$0.496\\text{ \\AA} (0.0496\\text{ nm})$",
      "$0.124\\text{ \\AA} (0.0124\\text{ nm})$",
      "$0.620\\text{ \\AA} (0.0620\\text{ nm})$"
    ],
    "optionsAr": [
      "$0.248\\text{ \\AA} (0.0248\\text{ nm})$",
      "$0.496\\text{ \\AA} (0.0496\\text{ nm})$",
      "$0.124\\text{ \\AA} (0.0124\\text{ nm})$",
      "$0.620\\text{ \\AA} (0.0620\\text{ nm})$"
    ],
    "correctAnswer": "$0.248\\text{ \\AA} (0.0248\\text{ nm})$",
    "correctIndex": 0,
    "hintEn": "$\\lambda_{\\min} = \\frac{12400}{50000\\text{ V}}$.",
    "hintAr": "$\\lambda_{\\min} = \\frac{12400}{50000\\text{ V}}$.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\min} = \\frac{12400}{50000} = 0.248\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\min} = \\frac{12400}{50000} = 0.248\\text{ \\AA}$."
    ],
    "teacherTipEn": "Increasing voltage from $20\\text{ kV}$ to $50\\text{ kV}$ shifted the cutoff from $0.62\\text{ \\AA}$ to $0.248\\text{ \\AA}$.",
    "teacherTipAr": "زيادة الجهد من $20\\text{ kV}$ إلى $50\\text{ kV}$ قلصت حافة الطول الموجي من $0.62\\text{ \\AA}$ إلى $0.248\\text{ \\AA}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_22",
    "titleEn": "Maximum Frequency of Continuous X-Rays for 40 kV",
    "titleAr": "أقصى تردد للأشعة السينية المستمرة عند 40 كيلو فولت",
    "difficulty": "medium",
    "questionEn": "Calculate the maximum frequency $\\nu_{\\max}$ of continuous X-rays emitted from a Coolidge tube operated at $V = 41.4\\text{ kV}$ ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, $e = 1.6 \\times 10^{-19}\\text{ C}$):",
    "questionAr": "احسب أقصى تردد $\\nu_{\\max}$ للأشعة السينية المستمرة المنبعثة من أنبوب كولدج يعمل عند $V = 41.4\\text{ kV}$ ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$، $e = 1.6 \\times 10^{-19}\\text{ C}$):",
    "optionsEn": [
      "$1.0 \\times 10^{18}\\text{ Hz}$",
      "$1.0 \\times 10^{19}\\text{ Hz}$",
      "$2.5 \\times 10^{19}\\text{ Hz}$",
      "$5.0 \\times 10^{17}\\text{ Hz}$"
    ],
    "optionsAr": [
      "$1.0 \\times 10^{18}\\text{ Hz}$",
      "$1.0 \\times 10^{19}\\text{ Hz}$",
      "$2.5 \\times 10^{19}\\text{ Hz}$",
      "$5.0 \\times 10^{17}\\text{ Hz}$"
    ],
    "correctAnswer": "$1.0 \\times 10^{19}\\text{ Hz}$",
    "correctIndex": 1,
    "hintEn": "Use $h \\nu_{\\max} = e V \\implies \\nu_{\\max} = \\frac{e V}{h}$.",
    "hintAr": "طبق العلاقة $h \\nu_{\\max} = e V \\implies \\nu_{\\max} = \\frac{e V}{h}$.",
    "stepByStepSolutionEn": [
      "$\\nu_{\\max} = \\frac{1.6 \\times 10^{-19} \\times 41400}{6.626 \\times 10^{-34}} \\approx 1.00 \\times 10^{19}\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "$\\nu_{\\max} = \\frac{1.6 \\times 10^{-19} \\times 41400}{6.626 \\times 10^{-34}} \\approx 1.00 \\times 10^{19}\\text{ Hz}$."
    ],
    "teacherTipEn": "This high frequency gives X-rays their powerful penetrating ability.",
    "teacherTipAr": "هذا التردد الهائل يمنح الأشعة السينية قدرتها الفائقة على النفاذ."
  },
  {
    "id": "egbac_phys_ch2_db_medium_23",
    "titleEn": "Accelerating Voltage for Cutoff of 0.1 Angstrom",
    "titleAr": "فرق الجهد المعجل للحصول على حافة 0.1 أنجستروم",
    "difficulty": "medium",
    "questionEn": "What accelerating potential difference $V$ must be applied across an X-ray tube to achieve a minimum cutoff wavelength of $\\lambda_{\\min} = 0.10\\text{ \\AA}$?",
    "questionAr": "ما هو فرق الجهد المعجل $V$ الذي يجب تطبيقه على أنبوب أشعة سينية للحصول على أقل طول موجي مقداره $\\lambda_{\\min} = 0.10\\text{ \\AA}$؟",
    "optionsEn": [
      "$62\\text{ kV}$",
      "$248\\text{ kV}$",
      "$124\\text{ kV}$",
      "$12.4\\text{ kV}$"
    ],
    "optionsAr": [
      "$62\\text{ kV}$",
      "$248\\text{ kV}$",
      "$124\\text{ kV}$",
      "$12.4\\text{ kV}$"
    ],
    "correctAnswer": "$124\\text{ kV}$",
    "correctIndex": 2,
    "hintEn": "$V = \\frac{12400}{\\lambda_{\\min}(\\text{\\AA})}$.",
    "hintAr": "$V = \\frac{12400}{\\lambda_{\\min}(\\text{\\AA})}$.",
    "stepByStepSolutionEn": [
      "$V = \\frac{12400}{0.10} = 124000\\text{ V} = 124\\text{ kV}$."
    ],
    "stepByStepSolutionAr": [
      "$V = \\frac{12400}{0.10} = 124000\\text{ V} = 124\\text{ kV}$."
    ],
    "teacherTipEn": "Such voltages are used in industrial radiotherapy and deep material testing.",
    "teacherTipAr": "تستخدم هذه الجهود في العلاج الإشعاعي الصناعي واختبار المواد العميقة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_24",
    "titleEn": "Tungsten K-Alpha Photon Energy Calculation",
    "titleAr": "حساب طاقة فوتون كي-ألفا للتنجستن",
    "difficulty": "medium",
    "questionEn": "In a tungsten target, the binding energies of the $K$-shell and $L$-shell are $E_K = 69.5\\text{ keV}$ and $E_L = 11.3\\text{ keV}$ respectively. What is the energy of the emitted $K_\\alpha$ photon?",
    "questionAr": "في هدف من التنجستن، طاقتا ارتباط الغلافين $K$ و $L$ هما $E_K = 69.5\\text{ keV}$ و $E_L = 11.3\\text{ keV}$ على التوالي. ما هي طاقة فوتون $K_\\alpha$ المنبعث؟",
    "optionsEn": [
      "$80.8\\text{ keV}$",
      "$69.5\\text{ keV}$",
      "$34.1\\text{ keV}$",
      "$58.2\\text{ keV}$"
    ],
    "optionsAr": [
      "$80.8\\text{ keV}$",
      "$69.5\\text{ keV}$",
      "$34.1\\text{ keV}$",
      "$58.2\\text{ keV}$"
    ],
    "correctAnswer": "$58.2\\text{ keV}$",
    "correctIndex": 3,
    "hintEn": "$E_{K\\alpha} = E_K - E_L$.",
    "hintAr": "$E_{K\\alpha} = E_K - E_L$.",
    "stepByStepSolutionEn": [
      "$E_{K\\alpha} = 69.5 - 11.3 = 58.2\\text{ keV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_{K\\alpha} = 69.5 - 11.3 = 58.2\\text{ keV}$."
    ],
    "teacherTipEn": "The corresponding wavelength is $\\lambda = 12.4 / 58.2 \\approx 0.213\\text{ \\AA}$.",
    "teacherTipAr": "الطول الموجي المقابل هو $\\lambda = 12.4 / 58.2 \\approx 0.213\\text{ \\AA}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_25",
    "titleEn": "Tungsten K-Beta Photon Energy Calculation",
    "titleAr": "حساب طاقة فوتون كي-بيتا للتنجستن",
    "difficulty": "medium",
    "questionEn": "If the binding energy of the $M$-shell in tungsten is $E_M = 2.3\\text{ keV}$ and $E_K = 69.5\\text{ keV}$, the energy of the tungsten $K_\\beta$ photon is:",
    "questionAr": "إذا كانت طاقة ارتباط الغلاف $M$ في التنجستن $E_M = 2.3\\text{ keV}$ و $E_K = 69.5\\text{ keV}$، فإن طاقة فوتون $K_\\beta$ للتنجستن تساوي:",
    "optionsEn": [
      "$67.2\\text{ keV}$",
      "$58.2\\text{ keV}$",
      "$71.8\\text{ keV}$",
      "$69.5\\text{ keV}$"
    ],
    "optionsAr": [
      "$67.2\\text{ keV}$",
      "$58.2\\text{ keV}$",
      "$71.8\\text{ keV}$",
      "$69.5\\text{ keV}$"
    ],
    "correctAnswer": "$67.2\\text{ keV}$",
    "correctIndex": 0,
    "hintEn": "$E_{K\\beta} = E_K - E_M$.",
    "hintAr": "$E_{K\\beta} = E_K - E_M$.",
    "stepByStepSolutionEn": [
      "$E_{K\\beta} = 69.5 - 2.3 = 67.2\\text{ keV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_{K\\beta} = 69.5 - 2.3 = 67.2\\text{ keV}$."
    ],
    "teacherTipEn": "Notice $E_{K\\beta} (67.2\\text{ keV}) > E_{K\\alpha} (58.2\\text{ keV})$, giving a shorter wavelength for $K_\\beta$.",
    "teacherTipAr": "لاحظ أن $E_{K\\beta} (67.2\\text{ keV}) > E_{K\\alpha} (58.2\\text{ keV})$، مما يمنح $K_\\beta$ طولاً موجياً أقصر."
  },
  {
    "id": "egbac_phys_ch2_db_medium_26",
    "titleEn": "Minimum Tube Voltage to Excite Tungsten K-Series",
    "titleAr": "أقل جهد لتوليد متسلسلة K للتنجستن",
    "difficulty": "medium",
    "questionEn": "Given that the binding energy of an electron in the $K$-shell of tungsten is $69.5\\text{ keV}$, what is the absolute minimum tube voltage required to observe $K$-series characteristic lines?",
    "questionAr": "علماً بأن طاقة ارتباط إلكترون الغلاف $K$ في التنجستن هي $69.5\\text{ keV}$، ما هو أقل فرق جهد للأنبوب يلزم لظهور خطوط متسلسلة $K$ المميزة؟",
    "optionsEn": [
      "$58.2\\text{ kV}$",
      "$69.5\\text{ kV}$",
      "$11.3\\text{ kV}$",
      "$34.8\\text{ kV}$"
    ],
    "optionsAr": [
      "$58.2\\text{ kV}$",
      "$69.5\\text{ kV}$",
      "$11.3\\text{ kV}$",
      "$34.8\\text{ kV}$"
    ],
    "correctAnswer": "$69.5\\text{ kV}$",
    "correctIndex": 1,
    "hintEn": "Incident electron kinetic energy must exceed the binding energy of the shell: $e V \\ge E_K$.",
    "hintAr": "يجب أن تفوق طاقة حركة الإلكترون الساقط طاقة ارتباط إلكترون الغلاف: $e V \\ge E_K$.",
    "stepByStepSolutionEn": [
      "To dislodge a $K$-electron, the incident electron needs at least $69.5\\text{ keV}$, requiring $V \\ge 69.5\\text{ kV}$. If $V < 69.5\\text{ kV}$, ONLY continuous and $L$-series radiation appear."
    ],
    "stepByStepSolutionAr": [
      "لخلع إلكترون من الغلاف $K$ يلزم تزويده بـ $69.5\\text{ keV}$ على الأقل، مما يتطلب $V \\ge 69.5\\text{ kV}$. ولو كان الجهد أقل فلن يظهر سوى الطيف المستمر ومتسلسلة $L$."
    ],
    "teacherTipEn": "In practice, tubes are operated at $2 - 3 \\times E_K$ to maximize excitation efficiency.",
    "teacherTipAr": "عملياً يتم تشغيل الأنبوب بجهد يبلغ $2 - 3$ أضعاف عتبة الإثارة لرفع كفاءة الانبعاث."
  },
  {
    "id": "egbac_phys_ch2_db_medium_27",
    "titleEn": "First-Order Bragg Reflection Angle",
    "titleAr": "زاوية انعكاس براغ من الرتبة الأولى",
    "difficulty": "medium",
    "questionEn": "X-rays of wavelength $\\lambda = 1.41\\text{ \\AA}$ strike a crystal with interplanar lattice spacing $d = 2.82\\text{ \\AA}$. What is the glancing angle $\\theta$ for first-order ($n=1$) Bragg reflection?",
    "questionAr": "تسقط أشعة سينية طولها الموجي $\\lambda = 1.41\\text{ \\AA}$ على بلورة مسافاتها البينية $d = 2.82\\text{ \\AA}$. ما هي زاوية السقوط المماسية (زاوية براغ) $\\theta$ لانعكاس الرتبة الأولى ($n=1$)؟",
    "optionsEn": [
      "$30.00^\\circ (\\sin\\theta = 0.50)$",
      "$45.00^\\circ (\\sin\\theta = 0.707)$",
      "$14.48^\\circ (\\sin\\theta = 0.25)$",
      "$60.00^\\circ (\\sin\\theta = 0.866)$"
    ],
    "optionsAr": [
      "$30.00^\\circ (\\sin\\theta = 0.50)$",
      "$45.00^\\circ (\\sin\\theta = 0.707)$",
      "$14.48^\\circ (\\sin\\theta = 0.25)$",
      "$60.00^\\circ (\\sin\\theta = 0.866)$"
    ],
    "correctAnswer": "$14.48^\\circ (\\sin\\theta = 0.25)$",
    "correctIndex": 2,
    "hintEn": "Bragg law: $2 d \\sin\\theta = n \\lambda \\implies \\sin\\theta = \\frac{n \\lambda}{2d}$.",
    "hintAr": "قانون براغ: $2 d \\sin\\theta = n \\lambda \\implies \\sin\\theta = \\frac{n \\lambda}{2d}$.",
    "stepByStepSolutionEn": [
      "$\\sin\\theta = \\frac{1 \\times 1.41}{2 \\times 2.82} = \\frac{1.41}{5.64} = 0.25$. Thus $\\theta = \\arcsin(0.25) \\approx 14.48^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\sin\\theta = \\frac{1 \\times 1.41}{2 \\times 2.82} = \\frac{1.41}{5.64} = 0.25$، ومنها $\\theta = \\arcsin(0.25) \\approx 14.48^\\circ$."
    ],
    "teacherTipEn": "Remember that $\\theta$ in Bragg's law is measured from the crystal plane, not the normal.",
    "teacherTipAr": "تذكر دائماً أن الزاوية $\\theta$ في قانون براغ تقاس بالنسبة لسطح المستوي البلوري وليس للعمود المقام."
  },
  {
    "id": "egbac_phys_ch2_db_medium_28",
    "titleEn": "Bragg Reflection at 30 Degrees",
    "titleAr": "انعكاس براغ عند زاوية 30 درجة",
    "difficulty": "medium",
    "questionEn": "Monochromatic X-rays of wavelength $\\lambda = 1.0\\text{ \\AA}$ undergo first-order Bragg reflection at a glancing angle of $\\theta = 30^\\circ$. What is the lattice interplanar spacing $d$?",
    "questionAr": "تعاني أشعة سينية أحادية اللون طولها الموجي $\\lambda = 1.0\\text{ \\AA}$ انعكاس براغ من الرتبة الأولى عند زاوية مماسية $\\theta = 30^\\circ$. ما هي المسافة البينية بين المستويات $d$؟",
    "optionsEn": [
      "$2.0\\text{ \\AA}$",
      "$0.5\\text{ \\AA}$",
      "$1.73\\text{ \\AA}$",
      "$1.0\\text{ \\AA}$"
    ],
    "optionsAr": [
      "$2.0\\text{ \\AA}$",
      "$0.5\\text{ \\AA}$",
      "$1.73\\text{ \\AA}$",
      "$1.0\\text{ \\AA}$"
    ],
    "correctAnswer": "$1.0\\text{ \\AA}$",
    "correctIndex": 3,
    "hintEn": "$2 d \\sin(30^\\circ) = 1 \\times \\lambda \\implies 2 d (0.5) = \\lambda$.",
    "hintAr": "$2 d \\sin(30^\\circ) = 1 \\times \\lambda \\implies 2 d (0.5) = \\lambda$.",
    "stepByStepSolutionEn": [
      "$d = \\lambda = 1.0\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "$d = \\lambda = 1.0\\text{ \\AA}$."
    ],
    "teacherTipEn": "This direct method is the cornerstone of X-ray crystallography for measuring crystal dimensions.",
    "teacherTipAr": "تعد هذه الطريقة المباشرة حجر الأساس في علم بلورات الأشعة السينية لقياس أبعاد الخلايا الشبكية."
  },
  {
    "id": "egbac_phys_ch2_db_medium_29",
    "titleEn": "Moseley Law Frequency Ratio for Elements Z=29 and Z=42",
    "titleAr": "نسبة تردد موزلي لعنصرين Z=29 و Z=42",
    "difficulty": "medium",
    "questionEn": "According to Moseley's law ($\\sqrt{\\nu} \\propto Z - 1$), the ratio of the $K_\\alpha$ frequency of Copper ($Z=29$) to that of Molybdenum ($Z=42$) is:",
    "questionAr": "وفقاً لقانون موزلي ($\\sqrt{\\nu} \\propto Z - 1$)، فإن نسبة تردد خط $K_\\alpha$ للنحاس ($Z=29$) إلى تردده للموليبدنوم ($Z=42$) تساوي:",
    "optionsEn": [
      "$\\left(\\frac{28}{41}\\right)^2 \\approx 0.466$",
      "$\\frac{28}{41} \\approx 0.683$",
      "$\\left(\\frac{29}{42}\\right)^2 \\approx 0.477$",
      "$\\sqrt{\\frac{28}{41}} \\approx 0.826$"
    ],
    "optionsAr": [
      "$\\left(\\frac{28}{41}\\right)^2 \\approx 0.466$",
      "$\\frac{28}{41} \\approx 0.683$",
      "$\\left(\\frac{29}{42}\\right)^2 \\approx 0.477$",
      "$\\sqrt{\\frac{28}{41}} \\approx 0.826$"
    ],
    "correctAnswer": "$\\left(\\frac{28}{41}\\right)^2 \\approx 0.466$",
    "correctIndex": 0,
    "hintEn": "$\\frac{\\nu_1}{\\nu_2} = \\left(\\frac{Z_1 - 1}{Z_2 - 1}\\right)^2$.",
    "hintAr": "$\\frac{\\nu_1}{\\nu_2} = \\left(\\frac{Z_1 - 1}{Z_2 - 1}\\right)^2$.",
    "stepByStepSolutionEn": [
      "$\\frac{\\nu_{\\text{Cu}}}{\\nu_{\\text{Mo}}} = \\left(\\frac{29 - 1}{42 - 1}\\right)^2 = \\left(\\frac{28}{41}\\right)^2 \\approx 0.4664$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\nu_{\\text{Cu}}}{\\nu_{\\text{Mo}}} = \\left(\\frac{29 - 1}{42 - 1}\\right)^2 = \\left(\\frac{28}{41}\\right)^2 \\approx 0.4664$."
    ],
    "teacherTipEn": "Molybdenum has higher $Z$, so its $K_\\alpha$ photons have over twice the frequency/energy of copper's.",
    "teacherTipAr": "يمتلك الموليبدنوم عدداً ذرياً أكبر، لذا فإن تردد فوتونات $K_\\alpha$ له يفوق ضعف نظيره للنحاس."
  },
  {
    "id": "egbac_phys_ch2_db_medium_30",
    "titleEn": "Rate of Heat Generation in Coolidge Tube",
    "titleAr": "معدل توليد الحرارة في أنبوب كولدج",
    "difficulty": "medium",
    "questionEn": "A Coolidge tube operates at $V = 30\\text{ kV}$ with a tube current of $I = 20\\text{ mA}$. Assuming $99\\%$ of the electrical power is converted into heat at the target, the rate of heat generation is:",
    "questionAr": "أنبوب كولدج يعمل عند جهد $V = 30\\text{ kV}$ وتيار مقداره $I = 20\\text{ mA}$. بافتراض أن $99\\%$ من القدرة الكهربية تتحول إلى حرارة عند الهدف، فإن معدل توليد الحرارة يساوي:",
    "optionsEn": [
      "$600\\text{ W}$",
      "$594\\text{ W}$",
      "$6\\text{ W}$",
      "$1200\\text{ W}$"
    ],
    "optionsAr": [
      "$600\\text{ W}$",
      "$594\\text{ W}$",
      "$6\\text{ W}$",
      "$1200\\text{ W}$"
    ],
    "correctAnswer": "$594\\text{ W}$",
    "correctIndex": 1,
    "hintEn": "Total power $P = V \\times I = 30000 \\times 0.020 = 600\\text{ W}$. Heat power is $0.99 \\times 600\\text{ W}$.",
    "hintAr": "القدرة الكلية $P = V \\times I = 30000 \\times 0.020 = 600\\text{ W}$. والقدرة الحرارية هي $0.99 \\times 600\\text{ W}$.",
    "stepByStepSolutionEn": [
      "$P_{\\text{heat}} = 0.99 \\times 600 = 594\\text{ W}$. (Only $6\\text{ W}$ is radiated as X-rays)."
    ],
    "stepByStepSolutionAr": [
      "$P_{\\text{heat}} = 0.99 \\times 600 = 594\\text{ W}$ (و $6\\text{ W}$ فقط تشع كأشعة سينية)."
    ],
    "teacherTipEn": "This massive thermal load requires water or forced oil cooling systems.",
    "teacherTipAr": "هذا العبء الحراري الضخم يتطلب تبريداً قسرياً بالماء أو الزيت الدوار."
  },
  {
    "id": "egbac_phys_ch2_db_medium_31",
    "titleEn": "Half-Value Layer (HVL) Definition",
    "titleAr": "تعريف طبقة النصف (HVL)",
    "difficulty": "medium",
    "questionEn": "The half-value layer (HVL) of a material for an X-ray beam is the thickness required to:",
    "questionAr": "تعرف طبقة نصف القيمة (HVL) لمادة ما بالنسبة لحزمة أشعة سينية بأنها السمك اللازم لـ:",
    "optionsEn": [
      "Absorb $100\\%$ of all incident photons completely",
      "Halve the frequency and double the wavelength of the beam",
      "Reduce the transmitted beam intensity to exactly $50\\%$ of its initial incident value",
      "Convert half the X-ray photons into positron-electron pairs"
    ],
    "optionsAr": [
      "امتصاص $100\\%$ من جميع الفوتونات الساقطة بشكل تام",
      "تنصيف تردد الحزمة ومضاعفة طولها الموجي",
      "خفض شدة حزمة الأشعة النافذة إلى $50\\%$ تماماً من قيمتها الابتدائية الساقطة",
      "تحويل نصف فوتونات الأشعة السينية إلى أزواج إلكترون-بوزيترون"
    ],
    "correctAnswer": "Reduce the transmitted beam intensity to exactly $50\\%$ of its initial incident value",
    "correctIndex": 2,
    "hintEn": "Exponential attenuation law: $I(x) = I_0 e^{-\\mu x}$. At $x = \\text{HVL}$, $I = I_0 / 2$.",
    "hintAr": "قانون التوهين الأسي: $I(x) = I_0 e^{-\\mu x}$. عند $x = \\text{HVL}$ يكون $I = I_0 / 2$.",
    "stepByStepSolutionEn": [
      "$\\text{HVL} = \\frac{\\ln 2}{\\mu} \\approx \\frac{0.693}{\\mu}$, where $\\mu$ is the linear attenuation coefficient."
    ],
    "stepByStepSolutionAr": [
      "$\\text{HVL} = \\frac{\\ln 2}{\\mu} \\approx \\frac{0.693}{\\mu}$، حيث $\\mu$ معامل التوهين الخطي."
    ],
    "teacherTipEn": "HVL is the standard metric used in radiation protection and shielding design.",
    "teacherTipAr": "تعد طبقة نصف القيمة المقياس القياسي المعتمد في الحماية الإشعاعية وتصميم الدروع."
  },
  {
    "id": "egbac_phys_ch2_db_medium_32",
    "titleEn": "Radiation Shielding Attenuation to One-Eighth",
    "titleAr": "توهين التدريع الإشعاعي إلى الثمن",
    "difficulty": "medium",
    "questionEn": "If a lead shield of thickness $2.0\\text{ mm}$ reduces the intensity of an X-ray beam by half ($\\text{HVL} = 2.0\\text{ mm}$), what total thickness of lead is required to reduce the intensity to $12.5\\%$ ($\\frac{1}{8}$) of its original value?",
    "questionAr": "إذا كان درع رصاصي سمكه $2.0\\text{ mm}$ يقلل شدة حزمة أشعة سينية إلى النصف ($\\text{HVL} = 2.0\\text{ mm}$)، فما هو السمك الكلي للرصاص اللازم لتقليل الشدة إلى $12.5\\%$ ($\\frac{1}{8}$) من قيمتها الأصلية؟",
    "optionsEn": [
      "$4.0\\text{ mm}$",
      "$8.0\\text{ mm}$",
      "$16.0\\text{ mm}$",
      "$6.0\\text{ mm}$"
    ],
    "optionsAr": [
      "$4.0\\text{ mm}$",
      "$8.0\\text{ mm}$",
      "$16.0\\text{ mm}$",
      "$6.0\\text{ mm}$"
    ],
    "correctAnswer": "$6.0\\text{ mm}$",
    "correctIndex": 3,
    "hintEn": "$\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$, meaning exactly 3 half-value layers are required.",
    "hintAr": "$\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$، مما يعني الحاجة إلى 3 طبقات نصف قيمة تماماً.",
    "stepByStepSolutionEn": [
      "Thickness $x = 3 \\times \\text{HVL} = 3 \\times 2.0\\text{ mm} = 6.0\\text{ mm}$."
    ],
    "stepByStepSolutionAr": [
      "السمك $x = 3 \\times \\text{HVL} = 3 \\times 2.0\\text{ mm} = 6.0\\text{ mm}$."
    ],
    "teacherTipEn": "Each additional HVL halves the remaining transmitted intensity.",
    "teacherTipAr": "كل طبقة نصف قيمة إضافية تنصف الشدة النافذة المتبقية."
  },
  {
    "id": "egbac_phys_ch2_db_medium_33",
    "titleEn": "Relative Intensity of K-Alpha vs K-Beta",
    "titleAr": "الشدة النسبية لخط كي-ألفا مقارنة بكي-بيتا",
    "difficulty": "medium",
    "questionEn": "In the characteristic X-ray emission spectrum of any heavy element, the intensity (peak height) of the $K_\\alpha$ line is substantially greater than that of the $K_\\beta$ line because:",
    "questionAr": "في طيف انبعاث الأشعة السينية المميز لأي عنصر ثقيل، تكون شدة (ارتفاع قمة) خط $K_\\alpha$ أكبر بكثير من خط $K_\\beta$ لأن:",
    "optionsEn": [
      "The transition probability for an electron jumping from the adjacent $L$-shell to the $K$-shell is much higher than from the distant $M$-shell",
      "The $K_\\beta$ photon has lower energy and is completely reabsorbed by the filament",
      "Electrons in the $M$-shell are positively charged and repelled by the nucleus",
      "Quantum mechanics strictly forbids the $M \\to K$ transition by dipole selection rules"
    ],
    "optionsAr": [
      "احتمالية انتقال الإلكترون من الغلاف $L$ المجاور إلى الغلاف $K$ تفوق بكثير احتمالية انتقاله من الغلاف $M$ الأبعد",
      "فوتون $K_\\beta$ يمتلك طاقة أقل ويعاد امتصاصه كلياً بواسطة الفتيلة",
      "إلكترونات الغلاف $M$ موجبة الشحنة وتتنافر مع النواة",
      "ميكانيكا الكم تحرم انتقال $M \\to K$ تماماً وفق قواعد الاختيار ثنائية القطب"
    ],
    "correctAnswer": "The transition probability for an electron jumping from the adjacent $L$-shell to the $K$-shell is much higher than from the distant $M$-shell",
    "correctIndex": 0,
    "hintEn": "Transition rate depends inversely on distance and quantum overlap.",
    "hintAr": "معدل الانتقال يعتمد على التداخل الكمي والمسافة بين الغلافين.",
    "stepByStepSolutionEn": [
      "Wavefunction overlap between $K$ and $L$ shells is far greater than between $K$ and $M$, making the $L \\to K$ transition roughly $5$ times more probable ($I_{K\\alpha} \\approx 5 I_{K\\beta}$)."
    ],
    "stepByStepSolutionAr": [
      "تراكب الدوال الموجية بين الغلافين $K$ و $L$ أكبر بكثير منه بين $K$ و $M$، مما يجعل انتقال $L \\to K$ أكثر احتمالاً بنحو 5 مرات ($I_{K\\alpha} \\approx 5 I_{K\\beta}$)."
    ],
    "teacherTipEn": "Hence the $K_\\alpha$ spike is always taller than the $K_\\beta$ spike.",
    "teacherTipAr": "لذلك تكون قمة $K_\\alpha$ دائماً أعلى وأكبر مساحة من قمة $K_\\beta$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_34",
    "titleEn": "Rutherford Alpha Scattering Closest Approach Distance",
    "titleAr": "مسافة أقرب اقتراب في تشتت رذرفورد لألفا",
    "difficulty": "medium",
    "questionEn": "In Rutherford's alpha scattering experiment, when an alpha particle of charge $+2e$ and kinetic energy $K_\\alpha$ is fired directly head-on ($\\theta = 180^\\circ$) at a stationary gold nucleus of charge $+Ze$, its distance of closest approach $r_0$ is given by:",
    "questionAr": "في تجربة رذرفورد لتشتت جسيمات ألفا، عندما يقذف جسيم ألفا شحنته $+2e$ وطاقته الحركية $K_\\alpha$ تصادماً رأسياً مباشراً ($\\theta = 180^\\circ$) نحو نواة ذهب ساكنة شحنتها $+Ze$، فإن مسافة أقرب اقتراب $r_0$ تحسب من:",
    "optionsEn": [
      "$r_0 = \\frac{k Z e^2}{2 K_\\alpha}$",
      "$r_0 = \\frac{2 k Z e^2}{K_\\alpha}$",
      "$r_0 = \\frac{K_\\alpha}{2 k Z e^2}$",
      "$r_0 = \\sqrt{\\frac{2 k Z e^2}{K_\\alpha}}$"
    ],
    "optionsAr": [
      "$r_0 = \\frac{k Z e^2}{2 K_\\alpha}$",
      "$r_0 = \\frac{2 k Z e^2}{K_\\alpha}$",
      "$r_0 = \\frac{K_\\alpha}{2 k Z e^2}$",
      "$r_0 = \\sqrt{\\frac{2 k Z e^2}{K_\\alpha}}$"
    ],
    "correctAnswer": "$r_0 = \\frac{2 k Z e^2}{K_\\alpha}$",
    "correctIndex": 1,
    "hintEn": "At the turning point, all initial kinetic energy converts into electrostatic potential energy.",
    "hintAr": "عند نقطة التوقف اللحظي، تتحول كامل طاقة الحركة الابتدائية إلى طاقة وضع كهروستاتيكية.",
    "stepByStepSolutionEn": [
      "$K_\\alpha = U = \\frac{k q_1 q_2}{r_0} = \\frac{k (2e)(Ze)}{r_0} = \\frac{2 k Z e^2}{r_0} \\implies r_0 = \\frac{2 k Z e^2}{K_\\alpha}$."
    ],
    "stepByStepSolutionAr": [
      "$K_\\alpha = U = \\frac{k q_1 q_2}{r_0} = \\frac{k (2e)(Ze)}{r_0} = \\frac{2 k Z e^2}{r_0} \\implies r_0 = \\frac{2 k Z e^2}{K_\\alpha}$."
    ],
    "teacherTipEn": "This formula established the upper bound for the nuclear radius ($r_{\\text{nucleus}} < 10^{-14}\\text{ m}$).",
    "teacherTipAr": "حددت هذه المعادلة الحد الأعلى لنصف قطر النواة الذرية ($r_{\\text{nucleus}} < 10^{-14}\\text{ م}$)."
  },
  {
    "id": "egbac_phys_ch2_db_medium_35",
    "titleEn": "Calculated Closest Approach for 5 MeV Alpha on Gold",
    "titleAr": "حساب مسافة أقرب اقتراب لجسيم ألفا 5 ميجا إلكترون فولت",
    "difficulty": "medium",
    "questionEn": "Calculate the distance of closest approach $r_0$ for a $5.0\\text{ MeV}$ alpha particle colliding head-on with a gold nucleus ($Z=79$, $k e^2 \\approx 1.44\\text{ MeV}\\cdot\\text{fm}$):",
    "questionAr": "احسب مسافة أقرب اقتراب $r_0$ لجسيم ألفا طاقته $5.0\\text{ MeV}$ يتصادم رأسياً مع نواة ذهب ($Z=79$، $k e^2 \\approx 1.44\\text{ MeV}\\cdot\\text{fm}$):",
    "optionsEn": [
      "$1.20 \\times 10^{-10}\\text{ m} (1.2\\text{ \\AA})$",
      "$9.10 \\times 10^{-15}\\text{ m} (9.1\\text{ fm})$",
      "$4.55 \\times 10^{-14}\\text{ m} (45.5\\text{ fm})$",
      "$2.28 \\times 10^{-12}\\text{ m} (2.28\\text{ pm})$"
    ],
    "optionsAr": [
      "$1.20 \\times 10^{-10}\\text{ m} (1.2\\text{ \\AA})$",
      "$9.10 \\times 10^{-15}\\text{ m} (9.1\\text{ fm})$",
      "$4.55 \\times 10^{-14}\\text{ m} (45.5\\text{ fm})$",
      "$2.28 \\times 10^{-12}\\text{ m} (2.28\\text{ pm})$"
    ],
    "correctAnswer": "$4.55 \\times 10^{-14}\\text{ m} (45.5\\text{ fm})$",
    "correctIndex": 2,
    "hintEn": "$r_0 = \\frac{2 \\times 79 \\times 1.44\\text{ MeV}\\cdot\\text{fm}}{5.0\\text{ MeV}}$.",
    "hintAr": "$r_0 = \\frac{2 \\times 79 \\times 1.44\\text{ MeV}\\cdot\\text{fm}}{5.0\\text{ MeV}}$.",
    "stepByStepSolutionEn": [
      "$r_0 = \\frac{227.52}{5.0} \\approx 45.5\\text{ fm} = 4.55 \\times 10^{-14}\\text{ m}$."
    ],
    "stepByStepSolutionAr": [
      "$r_0 = \\frac{227.52}{5.0} \\approx 45.5\\text{ fm} = 4.55 \\times 10^{-14}\\text{ m}$."
    ],
    "teacherTipEn": "This proved that the positive charge is concentrated in a volume thousands of times smaller than the atom.",
    "teacherTipAr": "أثبت هذا أن الشحنة الموجبة تتركز في حيز أصغر بآلاف المرات من حجم الذرة بأكملها."
  },
  {
    "id": "egbac_phys_ch2_db_medium_36",
    "titleEn": "Ionization Potential of Doubly Ionized Lithium",
    "titleAr": "جهد تأين أيون الليثيوم ثنائي الشحنة",
    "difficulty": "medium",
    "questionEn": "Doubly ionized lithium $\\text{Li}^{2+}$ has atomic number $Z=3$ and one electron. Its ionization energy from the ground state ($n=1$) is:",
    "questionAr": "يمتلك أيون الليثيوم ثنائي الشحنة $\\text{Li}^{2+}$ عدداً ذرياً $Z=3$ وإلكتروناً واحداً. طاقة تأينه من المستوى الأرضي ($n=1$) تساوي:",
    "optionsEn": [
      "$13.6\\text{ eV}$",
      "$40.8\\text{ eV}$",
      "$54.4\\text{ eV}$",
      "$122.4\\text{ eV}$"
    ],
    "optionsAr": [
      "$13.6\\text{ eV}$",
      "$40.8\\text{ eV}$",
      "$54.4\\text{ eV}$",
      "$122.4\\text{ eV}$"
    ],
    "correctAnswer": "$122.4\\text{ eV}$",
    "correctIndex": 3,
    "hintEn": "$E_{\\text{ion}} = 13.6 \\times Z^2 = 13.6 \\times 3^2 = 13.6 \\times 9\\text{ eV}$.",
    "hintAr": "$E_{\\text{ion}} = 13.6 \\times Z^2 = 13.6 \\times 3^2 = 13.6 \\times 9\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$E_{\\text{ion}} = 13.6 \\times 9 = 122.4\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$E_{\\text{ion}} = 13.6 \\times 9 = 122.4\\text{ eV}$."
    ],
    "teacherTipEn": "The corresponding ionization potential is $122.4\\text{ V}$.",
    "teacherTipAr": "جهد التأين المقابل هو $122.4\\text{ فولت}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_37",
    "titleEn": "Wavelength of Lyman Alpha in Li2+",
    "titleAr": "الطول الموجي لخط ليمان-ألفا في أيون الليثيوم",
    "difficulty": "medium",
    "questionEn": "The wavelength of the $n=2 \\to 1$ transition in $\\text{Li}^{2+}$ ($Z=3$) compares to the hydrogen Lyman-$\\alpha$ line ($\\lambda_H = 121.6\\text{ nm}$) as:",
    "questionAr": "يقارن الطول الموجي للانتقال $n=2 \\to 1$ في أيون $\\text{Li}^{2+}$ ($Z=3$) بخط ليمان-ألفا في الهيدروجين ($\\lambda_H = 121.6\\text{ nm}$) بالعلاقة:",
    "optionsEn": [
      "$\\lambda_{\\text{Li}} = \\frac{\\lambda_H}{9} \\approx 13.51\\text{ nm}$",
      "$\\lambda_{\\text{Li}} = 9 \\lambda_H \\approx 1094.4\\text{ nm}$",
      "$\\lambda_{\\text{Li}} = \\frac{\\lambda_H}{3} \\approx 40.53\\text{ nm}$",
      "$\\lambda_{\\text{Li}} = 3 \\lambda_H \\approx 364.8\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\text{Li}} = \\frac{\\lambda_H}{9} \\approx 13.51\\text{ nm}$",
      "$\\lambda_{\\text{Li}} = 9 \\lambda_H \\approx 1094.4\\text{ nm}$",
      "$\\lambda_{\\text{Li}} = \\frac{\\lambda_H}{3} \\approx 40.53\\text{ nm}$",
      "$\\lambda_{\\text{Li}} = 3 \\lambda_H \\approx 364.8\\text{ nm}$"
    ],
    "correctAnswer": "$\\lambda_{\\text{Li}} = \\frac{\\lambda_H}{9} \\approx 13.51\\text{ nm}$",
    "correctIndex": 0,
    "hintEn": "Energy scales as $Z^2$, so wavelength scales as $1/Z^2$.",
    "hintAr": "الطاقة تتناسب مع $Z^2$، لذا يتناسب الطول الموجي عكسياً مع $1/Z^2$.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\text{Li}} = \\frac{\\lambda_H}{Z^2} = \\frac{121.6}{3^2} = \\frac{121.6}{9} \\approx 13.51\\text{ nm}$ (extreme UV / soft X-ray)."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\text{Li}} = \\frac{\\lambda_H}{Z^2} = \\frac{121.6}{3^2} = \\frac{121.6}{9} \\approx 13.51\\text{ nm}$ (فوق بنفسجية قصوى)."
    ],
    "teacherTipEn": "Higher nuclear charge shifts the entire spectrum to much higher frequencies.",
    "teacherTipAr": "الشحنة النووية الأكبر تزيح الطيف بأكمله نحو ترددات أعلى بكثير."
  },
  {
    "id": "egbac_phys_ch2_db_medium_38",
    "titleEn": "Photon Momentum of Lyman Alpha",
    "titleAr": "كمية حركة فوتون ليمان-ألفا",
    "difficulty": "medium",
    "questionEn": "The linear momentum $p$ carried by a Lyman-$\\alpha$ photon of wavelength $\\lambda = 121.6\\text{ nm}$ is ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$):",
    "questionAr": "كمية الحركة الخطية $p$ التي يحملها فوتون ليمان-ألفا طوله الموجي $\\lambda = 121.6\\text{ nm}$ تساوي ($h = 6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$):",
    "optionsEn": [
      "$1.63 \\times 10^{-18}\\text{ kg}\\cdot\\text{m/s}$",
      "$5.45 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
      "$2.72 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
      "$8.15 \\times 10^{-35}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "optionsAr": [
      "$1.63 \\times 10^{-18}\\text{ kg}\\cdot\\text{m/s}$",
      "$5.45 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
      "$2.72 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
      "$8.15 \\times 10^{-35}\\text{ kg}\\cdot\\text{m/s}$"
    ],
    "correctAnswer": "$5.45 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$",
    "correctIndex": 1,
    "hintEn": "Apply de Broglie relation: $p = \\frac{h}{\\lambda}$.",
    "hintAr": "طبق علاقة دي براولي: $p = \\frac{h}{\\lambda}$.",
    "stepByStepSolutionEn": [
      "$p = \\frac{6.626 \\times 10^{-34}}{1.216 \\times 10^{-7}} \\approx 5.449 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "stepByStepSolutionAr": [
      "$p = \\frac{6.626 \\times 10^{-34}}{1.216 \\times 10^{-7}} \\approx 5.449 \\times 10^{-27}\\text{ kg}\\cdot\\text{m/s}$."
    ],
    "teacherTipEn": "Upon emitting this photon, the emitting atom experiences a recoil momentum equal in magnitude and opposite in direction.",
    "teacherTipAr": "عند انبعاث هذا الفوتون ترتد الذرة المشعة بكمية حركة مساوية في المقدار ومعاكسة في الاتجاه."
  },
  {
    "id": "egbac_phys_ch2_db_medium_39",
    "titleEn": "Recoil Kinetic Energy Formula",
    "titleAr": "صيغة طاقة حركة الارتداد للذرة",
    "difficulty": "medium",
    "questionEn": "When a stationary atom of mass $M$ emits a photon of energy $E = h\\nu$ and momentum $p = \\frac{h\\nu}{c}$, the recoil kinetic energy $K_{\\text{recoil}}$ imparted to the atom is:",
    "questionAr": "عندما تشع ذرة ساكنة كتلتها $M$ فوتوناً طاقته $E = h\\nu$ وكمية حركته $p = \\frac{h\\nu}{c}$، فإن طاقة حركة الارتداد $K_{\\text{recoil}}$ المكتسبة للذرة تحسب من:",
    "optionsEn": [
      "$K_{\\text{recoil}} = \\frac{h\\nu}{2M}$",
      "$K_{\\text{recoil}} = \\frac{2M c^2}{h\\nu}$",
      "$K_{\\text{recoil}} = \\frac{p^2}{2M} = \\frac{(h\\nu)^2}{2M c^2}$",
      "$K_{\\text{recoil}} = \\frac{p}{M c}$"
    ],
    "optionsAr": [
      "$K_{\\text{recoil}} = \\frac{h\\nu}{2M}$",
      "$K_{\\text{recoil}} = \\frac{2M c^2}{h\\nu}$",
      "$K_{\\text{recoil}} = \\frac{p^2}{2M} = \\frac{(h\\nu)^2}{2M c^2}$",
      "$K_{\\text{recoil}} = \\frac{p}{M c}$"
    ],
    "correctAnswer": "$K_{\\text{recoil}} = \\frac{p^2}{2M} = \\frac{(h\\nu)^2}{2M c^2}$",
    "correctIndex": 2,
    "hintEn": "Apply conservation of linear momentum: $p_{\\text{atom}} = p_{\\text{photon}} = h\\nu / c$.",
    "hintAr": "طبق قانون بقاء كمية الحركة الخطية: $p_{\\text{atom}} = p_{\\text{photon}} = h\\nu / c$.",
    "stepByStepSolutionEn": [
      "$K = \\frac{p^2}{2M} = \\frac{(h\\nu / c)^2}{2M} = \\frac{(h\\nu)^2}{2M c^2}$."
    ],
    "stepByStepSolutionAr": [
      "$K = \\frac{p^2}{2M} = \\frac{(h\\nu / c)^2}{2M} = \\frac{(h\\nu)^2}{2M c^2}$."
    ],
    "teacherTipEn": "Because $M c^2 \\gg h\\nu$, recoil energy is negligible compared to photon energy.",
    "teacherTipAr": "بما أن طاقة كتلة السكون $M c^2 \\gg h\\nu$ فإن طاقة الارتداد تكون ضئيلة جداً مقارنة بطاقة الفوتون."
  },
  {
    "id": "egbac_phys_ch2_db_medium_40",
    "titleEn": "Hydrogen Atom Recoil Calculation",
    "titleAr": "حساب طاقة ارتداد ذرة الهيدروجين",
    "difficulty": "medium",
    "questionEn": "A hydrogen atom of mass $M \\approx 1.67 \\times 10^{-27}\\text{ kg}$ emits a Lyman-$\\alpha$ photon of energy $10.2\\text{ eV}$ ($1.63 \\times 10^{-18}\\text{ J}$). The recoil energy of the atom is approximately:",
    "questionAr": "تشع ذرة هيدروجين كتلتها $M \\approx 1.67 \\times 10^{-27}\\text{ kg}$ فوتون ليمان-ألفا طاقته $10.2\\text{ eV}$ ($1.63 \\times 10^{-18}\\text{ J}$). طاقة ارتداد الذرة تساوي تقريباً:",
    "optionsEn": [
      "$1.2 \\times 10^{-3}\\text{ eV}$",
      "$10.2\\text{ eV}$",
      "$0.51\\text{ eV}$",
      "$5.5 \\times 10^{-9}\\text{ eV} (8.9 \\times 10^{-28}\\text{ J})$"
    ],
    "optionsAr": [
      "$1.2 \\times 10^{-3}\\text{ eV}$",
      "$10.2\\text{ eV}$",
      "$0.51\\text{ eV}$",
      "$5.5 \\times 10^{-9}\\text{ eV} (8.9 \\times 10^{-28}\\text{ J})$"
    ],
    "correctAnswer": "$5.5 \\times 10^{-9}\\text{ eV} (8.9 \\times 10^{-28}\\text{ J})$",
    "correctIndex": 3,
    "hintEn": "$K = \\frac{(E)^2}{2 M c^2}$ with $M c^2 \\approx 938\\text{ MeV} = 9.38 \\times 10^8\\text{ eV}$.",
    "hintAr": "$K = \\frac{(E)^2}{2 M c^2}$ مع $M c^2 \\approx 938\\text{ MeV} = 9.38 \\times 10^8\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$K = \\frac{(10.2)^2}{2 \\times 9.38 \\times 10^8} = \\frac{104.04}{1.876 \\times 10^9} \\approx 5.55 \\times 10^{-8}\\text{ eV} \\approx 5.5 \\times 10^{-9}\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$K = \\frac{(10.2)^2}{2 \\times 9.38 \\times 10^8} = \\frac{104.04}{1.876 \\times 10^9} \\approx 5.55 \\times 10^{-8}\\text{ eV} \\approx 5.5 \\times 10^{-9}\\text{ eV}$."
    ],
    "teacherTipEn": "This tiny shift is why optical atomic transitions can be observed without significant Doppler shifts from recoil.",
    "teacherTipAr": "هذا الفارق الضئيل يفسر إمكانية رصد الانتقالات الذرية الضوئية بدقة دون تشوه ناتج عن الارتداد."
  },
  {
    "id": "egbac_phys_ch2_db_medium_41",
    "titleEn": "Thermal Doppler Broadening Cause",
    "titleAr": "سبب الاتساع الحراري لدوبلر للخطوط الطيفية",
    "difficulty": "medium",
    "questionEn": "The primary physical mechanism responsible for the broadening of spectral lines emitted by a hot gas in a discharge tube is:",
    "questionAr": "الآلية الفيزيائية الأساسية المسؤولة عن اتساع الخطوط الطيفية المنبعثة من غاز ساخن في أنبوب التفريغ هي:",
    "optionsEn": [
      "Thermal Doppler shifts caused by the random Maxwellian velocity distribution of emitting atoms",
      "Nuclear radioactive decay of isotopes within the gas",
      "Gravitational red-shift inside the discharge tube",
      "Dispersion errors in the collimator slit optics"
    ],
    "optionsAr": [
      "إزاحات دوبلر الحرارية الناتجة عن التوزيع العشوائي لسرعات ماكسويل للذرات المشعة",
      "التحلل الإشعاعي النووي للنظائر الموجودة داخل الغاز",
      "الانزياح التثاقلي نحو الأحمر داخل أنبوب التفريغ",
      "أخطاء التشتت البصري في شق المجمع الخاص بالمطياف"
    ],
    "correctAnswer": "Thermal Doppler shifts caused by the random Maxwellian velocity distribution of emitting atoms",
    "correctIndex": 0,
    "hintEn": "Atoms move toward and away from the observer with thermal velocities $v \\sim \\sqrt{k_B T / M}$.",
    "hintAr": "تتحرك الذرات مقتربة ومبتعدة عن الراصد بسرعات حرارية $v \\sim \\sqrt{k_B T / M}$.",
    "stepByStepSolutionEn": [
      "Atoms moving toward observer emit blueshifted frequencies, while those moving away emit redshifted frequencies, broadening the line into a Gaussian profile."
    ],
    "stepByStepSolutionAr": [
      "الذرات المقتربة تشع ترددات مزاحة للأزرق والمبتعدة للأحمر، مما يؤدي لاتساع الخط الطيفي وتوزعه وفق منحنى جاوس."
    ],
    "teacherTipEn": "Cooling gas reduces Doppler width, which is why cryogenic or laser-cooled traps are used in high-precision spectroscopy.",
    "teacherTipAr": "تبريد الغاز يقلل اتساع دوبلر، ولهذا تستخدم المصائد المبردة بالليزر في القياسات الطيفية فائقة الدقة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_42",
    "titleEn": "Natural Linewidth from Heisenberg Uncertainty",
    "titleAr": "الاتساع الطبيعي للخط الطيفي من مبدأ عدم اليقين",
    "difficulty": "medium",
    "questionEn": "According to Heisenberg's energy-time uncertainty relation ($\\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}$), an atomic state with finite lifetime $\\tau$ has an intrinsic energy spread of:",
    "questionAr": "وفقاً لعلاقة عدم اليقين للطاقة والزمن لهايزنبرج ($\\Delta E \\cdot \\Delta t \\ge \\frac{\\hbar}{2}$)، فإن المستوى الذري ذو العمر الزمني المحدود $\\tau$ يمتلك اتساع طاقة ذاتياً قدره:",
    "optionsEn": [
      "$\\Delta E \\approx \\hbar \\tau$",
      "$\\Delta E \\approx \\frac{\\hbar}{\\tau}$",
      "$\\Delta E \\approx \\frac{\\tau}{\\hbar}$",
      "$\\Delta E = 0$"
    ],
    "optionsAr": [
      "$\\Delta E \\approx \\hbar \\tau$",
      "$\\Delta E \\approx \\frac{\\hbar}{\\tau}$",
      "$\\Delta E \\approx \\frac{\\tau}{\\hbar}$",
      "$\\Delta E = 0$"
    ],
    "correctAnswer": "$\\Delta E \\approx \\frac{\\hbar}{\\tau}$",
    "correctIndex": 1,
    "hintEn": "Energy uncertainty is inversely proportional to the lifetime $\\tau$ of the state.",
    "hintAr": "عدم اليقين في الطاقة يتناسب عكسياً مع العمر الزمني $\\tau$ للحالة.",
    "stepByStepSolutionEn": [
      "Because the excited electron remains for only a finite time $\\tau$ before decaying, its energy is not infinitely sharp, producing a Lorentzian natural line profile."
    ],
    "stepByStepSolutionAr": [
      "لأن الإلكترون المثار يمكث زمناً محدوداً $\\tau$ فقط قبل الهبوط، فإن طاقته لا تكون محددة بدقة لا نهائية، مما يولد اتساعاً طبيعياً لورنتزياً."
    ],
    "teacherTipEn": "Only the ground state with $\\tau = \\infty$ has an exact, unbroadened energy level ($\\Delta E = 0$).",
    "teacherTipAr": "المستوى الأرضي فقط ذو العمر الزمني اللانهائي $\\tau = \\infty$ يمتلك مستوى طاقة حاداً تماماً ($\\Delta E = 0$)."
  },
  {
    "id": "egbac_phys_ch2_db_medium_43",
    "titleEn": "Natural Linewidth for Lifetime 10 ns",
    "titleAr": "حساب الاتساع الطبيعي لعمر زمني 10 نانو ثانية",
    "difficulty": "medium",
    "questionEn": "If an excited atomic state has a typical radiative lifetime of $\\tau = 1.0 \\times 10^{-8}\\text{ s}$ ($10\\text{ ns}$), its natural energy linewidth $\\Delta E$ is approximately ($\\hbar \\approx 6.58 \\times 10^{-16}\\text{ eV}\\cdot\\text{s}$):",
    "questionAr": "إذا كان لمستوى ذري مثار عمر زمني إشعاعي نموذجي قدره $\\tau = 1.0 \\times 10^{-8}\\text{ s}$ ($10\\text{ ns}$)، فإن اتساعه الطبيعي $\\Delta E$ يساوي تقريباً ($\\hbar \\approx 6.58 \\times 10^{-16}\\text{ eV}\\cdot\\text{s}$):",
    "optionsEn": [
      "$1.0\\text{ eV}$",
      "$4.1 \\times 10^{-15}\\text{ eV}$",
      "$6.6 \\times 10^{-8}\\text{ eV}$",
      "$3.3 \\times 10^{-4}\\text{ eV}$"
    ],
    "optionsAr": [
      "$1.0\\text{ eV}$",
      "$4.1 \\times 10^{-15}\\text{ eV}$",
      "$6.6 \\times 10^{-8}\\text{ eV}$",
      "$3.3 \\times 10^{-4}\\text{ eV}$"
    ],
    "correctAnswer": "$6.6 \\times 10^{-8}\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "$\\Delta E \\approx \\frac{\\hbar}{\\tau} = \\frac{6.58 \\times 10^{-16}}{10^{-8}}\\text{ eV}$.",
    "hintAr": "$\\Delta E \\approx \\frac{\\hbar}{\\tau} = \\frac{6.58 \\times 10^{-16}}{10^{-8}}\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "$\\Delta E \\approx 6.58 \\times 10^{-8}\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E \\approx 6.58 \\times 10^{-8}\\text{ eV}$."
    ],
    "teacherTipEn": "This fundamental quantum limit cannot be eliminated by any cooling technique.",
    "teacherTipAr": "هذا الحد الكمي الأساسي لا يمكن إلغاؤه بأي تقنية تبريد لأنه خاصية متأصلة في الطبيعة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_44",
    "titleEn": "X-Ray K-Absorption Edge Phenomenon",
    "titleAr": "ظاهرة حافة امتصاص K للأشعة السينية",
    "difficulty": "medium",
    "questionEn": "In an X-ray transmission spectrum through a metal foil, a sudden sharp discontinuity (jump in absorption) occurs when the incident photon energy:",
    "questionAr": "في طيف نفاذ الأشعة السينية عبر رقاقة فلزية، يحدث انقطاع حاد مفاجئ (قفزة في الامتصاص) عندما تصبح طاقة الفوتون الساقط:",
    "optionsEn": [
      "Drops below the work function of the outer conduction band electrons",
      "Matches the nuclear binding energy per nucleon of the nucleus",
      "Equals zero, terminating all electromagnetic interactions",
      "Just equals or slightly exceeds the binding energy $E_K$ of the target $K$-shell electrons"
    ],
    "optionsAr": [
      "أقل من دالة الشغل لإلكترونات حزمة التوصيل الخارجية",
      "مطابقة لطاقة الترابط النووي لكل نيوكليون في النواة",
      "مساوية للصفر، متوقفة عن كل التفاعلات الكهرومغناطيسية",
      "مساوية تماماً أو تفوق قليلاً طاقة ارتباط إلكترونات الغلاف $K$ للهدف"
    ],
    "correctAnswer": "Just equals or slightly exceeds the binding energy $E_K$ of the target $K$-shell electrons",
    "correctIndex": 3,
    "hintEn": "When photon energy reaches $E_K$, a whole new absorption channel (photoelectric ejection of $K$ electrons) opens up.",
    "hintAr": "عندما تصل طاقة الفوتون إلى $E_K$، تتاح قناة امتصاص جديدة تماماً (انتزاع إلكترونات الغلاف $K$ كهروضوئياً).",
    "stepByStepSolutionEn": [
      "Photons with $h\\nu < E_K$ cannot eject $K$-shell electrons. As soon as $h\\nu \\ge E_K$, the photoelectric cross-section spikes dramatically, creating the $K$-absorption edge."
    ],
    "stepByStepSolutionAr": [
      "الفوتونات ذات $h\\nu < E_K$ تعجز عن اقتلاع إلكترونات $K$، وبمجرد أن تصبح $h\\nu \\ge E_K$ يقفز المقطع العرضي للامتصاص فجأة مكوناً حافة امتصاص $K$."
    ],
    "teacherTipEn": "Absorption edges are exploited in medical contrast imaging (iodine and barium contrast agents).",
    "teacherTipAr": "تستغل حواف الامتصاص في التصوير الطبي بمواد التباين (اليود والباريوم)."
  },
  {
    "id": "egbac_phys_ch2_db_medium_45",
    "titleEn": "Mass Attenuation Coefficient Scaling",
    "titleAr": "تناسب معامل التوهين الكتلي للأشعة السينية",
    "difficulty": "medium",
    "questionEn": "For photoelectric absorption of X-rays in matter, the mass attenuation coefficient $\\mu / \\rho$ scales with atomic number $Z$ and wavelength $\\lambda$ approximately as:",
    "questionAr": "للامتصاص الكهروضوئي للأشعة السينية في المادة، يتناسب معامل التوهين الكتلي $\\mu / \\rho$ مع العدد الذري $Z$ والطول الموجي $\\lambda$ تقريباً بالعلاقة:",
    "optionsEn": [
      "$\\frac{\\mu}{\\rho} \\propto Z^3 \\lambda^3$",
      "$\\frac{\\mu}{\\rho} \\propto \\frac{Z}{\\lambda}$",
      "$\\frac{\\mu}{\\rho} \\propto \\frac{\\lambda^2}{Z^2}$",
      "$\\frac{\\mu}{\\rho} \\propto \\sqrt{Z \\lambda}$"
    ],
    "optionsAr": [
      "$\\frac{\\mu}{\\rho} \\propto Z^3 \\lambda^3$",
      "$\\frac{\\mu}{\\rho} \\propto \\frac{Z}{\\lambda}$",
      "$\\frac{\\mu}{\\rho} \\propto \\frac{\\lambda^2}{Z^2}$",
      "$\\frac{\\mu}{\\rho} \\propto \\sqrt{Z \\lambda}$"
    ],
    "correctAnswer": "$\\frac{\\mu}{\\rho} \\propto Z^3 \\lambda^3$",
    "correctIndex": 0,
    "hintEn": "Photoelectric absorption is extremely sensitive to both heavy nuclei and longer wavelengths.",
    "hintAr": "الامتصاص الكهروضوئي شديد الحساسية لكل من النوى الثقيلة والأطوال الموجية الأطول.",
    "stepByStepSolutionEn": [
      "The empirical Bragg-Pierce law gives $\\mu / \\rho \\propto Z^3 \\lambda^3$ (or $Z^4 \\lambda^3$), explaining why lead ($Z=82$) is vastly superior to aluminum ($Z=13$) for radiation shielding."
    ],
    "stepByStepSolutionAr": [
      "يعطي قانون براغ-بيرس التجريبي $\\mu / \\rho \\propto Z^3 \\lambda^3$، مما يفسر تفوق الرصاص ($Z=82$) الهائل على الألومنيوم ($Z=13$) في التدريع الإشعاعي."
    ],
    "teacherTipEn": "A small increase in $Z$ dramatically enhances X-ray stopping power.",
    "teacherTipAr": "أي زيادة طفيفة في $Z$ تضاعف قدرة المادة على إيقاف الأشعة السينية بصورة مذهلة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_46",
    "titleEn": "Second-Order Bragg Reflection Calculation",
    "titleAr": "حساب انعكاس براغ من الرتبة الثانية",
    "difficulty": "medium",
    "questionEn": "X-rays of wavelength $\\lambda = 1.0\\text{ \\AA}$ reflect from crystal planes with spacing $d = 2.0\\text{ \\AA}$. What is the glancing angle $\\theta_2$ for second-order ($n=2$) Bragg reflection?",
    "questionAr": "أشعة سينية طولها الموجي $\\lambda = 1.0\\text{ \\AA}$ تنعكس عن مستويات بلورية المسافة بينها $d = 2.0\\text{ \\AA}$. ما هي زاوية السقوط المماسية $\\theta_2$ لانعكاس براغ من الرتبة الثانية ($n=2$)؟",
    "optionsEn": [
      "$14.5^\\circ (\\sin\\theta_2 = 0.25)$",
      "$30.0^\\circ (\\sin\\theta_2 = 0.50)$",
      "$45.0^\\circ (\\sin\\theta_2 = 0.707)$",
      "$60.0^\\circ (\\sin\\theta_2 = 0.866)$"
    ],
    "optionsAr": [
      "$14.5^\\circ (\\sin\\theta_2 = 0.25)$",
      "$30.0^\\circ (\\sin\\theta_2 = 0.50)$",
      "$45.0^\\circ (\\sin\\theta_2 = 0.707)$",
      "$60.0^\\circ (\\sin\\theta_2 = 0.866)$"
    ],
    "correctAnswer": "$30.0^\\circ (\\sin\\theta_2 = 0.50)$",
    "correctIndex": 1,
    "hintEn": "Bragg equation for $n=2$: $2 d \\sin\\theta_2 = 2 \\lambda \\implies \\sin\\theta_2 = \\frac{\\lambda}{d}$.",
    "hintAr": "معادلة براغ للرتبة $n=2$: $2 d \\sin\\theta_2 = 2 \\lambda \\implies \\sin\\theta_2 = \\frac{\\lambda}{d}$.",
    "stepByStepSolutionEn": [
      "$\\sin\\theta_2 = \\frac{1.0}{2.0} = 0.50$. Thus $\\theta_2 = 30.0^\\circ$."
    ],
    "stepByStepSolutionAr": [
      "$\\sin\\theta_2 = \\frac{1.0}{2.0} = 0.50$، ومنها $\\theta_2 = 30.0^\\circ$."
    ],
    "teacherTipEn": "For $n=1$, $\\sin\\theta_1 = 0.25$ ($\\theta_1 \\approx 14.48^\\circ$).",
    "teacherTipAr": "للرتبة الأولى $n=1$ كانت $\\sin\\theta_1 = 0.25$ ($\\theta_1 \\approx 14.48^\\circ$)."
  },
  {
    "id": "egbac_phys_ch2_db_medium_47",
    "titleEn": "Franck-Hertz Collision Threshold",
    "titleAr": "طبيعة التصادمات في تجربة فرانك-هيرتز",
    "difficulty": "medium",
    "questionEn": "In the Franck-Hertz experiment with mercury vapor, an impacting electron having kinetic energy of $3.5\\text{ eV}$ undergoes:",
    "questionAr": "في تجربة فرانك-هيرتز مع بخار الزئبق، يعاني إلكترون صادم طاقته الحركية $3.5\\text{ eV}$ من:",
    "optionsEn": [
      "A completely inelastic collision, transferring all $3.5\\text{ eV}$ to the nucleus",
      "Photoelectric absorption resulting in spontaneous pair production",
      "A purely elastic collision, bouncing off the mercury atom with negligible kinetic energy loss",
      "Nuclear transmutation of the mercury atom into gold"
    ],
    "optionsAr": [
      "تصادم غير مرن كلياً، ناقلاً كامل طاقته البالغة $3.5\\text{ eV}$ إلى النواة",
      "امتصاص كهروضوئي يؤدي لإنتاج زوجي تلقائي",
      "تصادم مرن تماماً، مرتداً عن ذرة الزئبق دون أي فقد يذكر في طاقته الحركية",
      "تحول نووي لذرة الزئبق إلى ذرة ذهب"
    ],
    "correctAnswer": "A purely elastic collision, bouncing off the mercury atom with negligible kinetic energy loss",
    "correctIndex": 2,
    "hintEn": "Mercury's lowest excitation threshold is $4.9\\text{ eV}$. Below $4.9\\text{ eV}$, atoms cannot absorb energy.",
    "hintAr": "عتبة الإثارة الأولى للزئبق هي $4.9\\text{ eV}$، ودونها تعجز الذرة عن امتصاص أي طاقة كسرية.",
    "stepByStepSolutionEn": [
      "Because the electron mass is thousands of times smaller than mercury ($m_e \\ll M_{\\text{Hg}}$), elastic collision rebounds the electron with almost 100% of its kinetic energy intact."
    ],
    "stepByStepSolutionAr": [
      "لأن كتلة الإلكترون أصغر بآلاف المرات من ذرة الزئبق ($m_e \\ll M_{\\text{Hg}}$)، فإن التصادم المرن يجعل الإلكترون يرتد محتفظاً بـ 100% تقريباً من طاقة حركته."
    ],
    "teacherTipEn": "Only when kinetic energy reaches $4.9\\text{ eV}$ does inelastic excitation become possible.",
    "teacherTipAr": "فقط عندما تبلغ طاقة الحركة $4.9\\text{ eV}$ يصبح التصادم غير المرن والإثارة ممكنين."
  },
  {
    "id": "egbac_phys_ch2_db_medium_48",
    "titleEn": "Orbital Revolution Frequency in Ground State",
    "titleAr": "تردد الدوران المداري في المستوى الأرضي",
    "difficulty": "medium",
    "questionEn": "The classical frequency of orbital revolution $f_1 = \\frac{v_1}{2\\pi a_0}$ of an electron in the ground state of hydrogen is approximately:",
    "questionAr": "تردد الدوران المداري الكلاسيكي $f_1 = \\frac{v_1}{2\\pi a_0}$ للإلكترون في المستوى الأرضي لذرة الهيدروجين يساوي تقريباً:",
    "optionsEn": [
      "$3.29 \\times 10^{15}\\text{ rev/s}$",
      "$1.00 \\times 10^{12}\\text{ rev/s}$",
      "$2.46 \\times 10^{18}\\text{ rev/s}$",
      "$6.58 \\times 10^{15}\\text{ rev/s (Hz)}$"
    ],
    "optionsAr": [
      "$3.29 \\times 10^{15}\\text{ rev/s}$",
      "$1.00 \\times 10^{12}\\text{ rev/s}$",
      "$2.46 \\times 10^{18}\\text{ rev/s}$",
      "$6.58 \\times 10^{15}\\text{ rev/s (Hz)}$"
    ],
    "correctAnswer": "$6.58 \\times 10^{15}\\text{ rev/s (Hz)}$",
    "correctIndex": 3,
    "hintEn": "$f_1 = \\frac{v_1}{2\\pi a_0}$ with $v_1 = 2.18 \\times 10^6\\text{ m/s}$ and $a_0 = 5.29 \\times 10^{-11}\\text{ m}$.",
    "hintAr": "$f_1 = \\frac{v_1}{2\\pi a_0}$ مع $v_1 = 2.18 \\times 10^6\\text{ m/s}$ و $a_0 = 5.29 \\times 10^{-11}\\text{ m}$.",
    "stepByStepSolutionEn": [
      "$f_1 = \\frac{2.18 \\times 10^6}{2\\pi \\times 5.29 \\times 10^{-11}} \\approx 6.58 \\times 10^{15}\\text{ s}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "$f_1 = \\frac{2.18 \\times 10^6}{2\\pi \\times 5.29 \\times 10^{-11}} \\approx 6.58 \\times 10^{15}\\text{ s}^{-1}$."
    ],
    "teacherTipEn": "In one second, the ground-state electron orbits the proton over six million billion times!",
    "teacherTipAr": "في ثانية واحدة يدور إلكترون المستوى الأرضي حول البروتون أكثر من ستة ملايين مليار دورة!"
  },
  {
    "id": "egbac_phys_ch2_db_medium_49",
    "titleEn": "Orbital Electric Current in Ground State",
    "titleAr": "التيار الكهربي المداري في المستوى الأرضي",
    "difficulty": "medium",
    "questionEn": "The revolving ground-state electron constitutes an equivalent microscopic electric current loop of intensity $I = e f_1$ equal to approximately:",
    "questionAr": "يشكل دوران الإلكترون في المستوى الأرضي حلقة تيار كهربي مجهرية شدتها $I = e f_1$ وتساوي تقريباً:",
    "optionsEn": [
      "$1.05\\text{ mA} (1.05 \\times 10^{-3}\\text{ A})$",
      "$1.60 \\times 10^{-19}\\text{ A}$",
      "$1.05\\text{ A}$",
      "$3.20\\mu\\text{A}$"
    ],
    "optionsAr": [
      "$1.05\\text{ mA} (1.05 \\times 10^{-3}\\text{ A})$",
      "$1.60 \\times 10^{-19}\\text{ A}$",
      "$1.05\\text{ A}$",
      "$3.20\\mu\\text{A}$"
    ],
    "correctAnswer": "$1.05\\text{ mA} (1.05 \\times 10^{-3}\\text{ A})$",
    "correctIndex": 0,
    "hintEn": "$I = \\frac{q}{T} = q f_1 = (1.6 \\times 10^{-19}\\text{ C}) \\times (6.58 \\times 10^{15}\\text{ s}^{-1})$.",
    "hintAr": "$I = \\frac{q}{T} = q f_1 = (1.6 \\times 10^{-19}\\text{ C}) \\times (6.58 \\times 10^{15}\\text{ s}^{-1})$.",
    "stepByStepSolutionEn": [
      "$I = 1.6 \\times 10^{-19} \\times 6.58 \\times 10^{15} \\approx 1.053 \\times 10^{-3}\\text{ A} \\approx 1.05\\text{ mA}$."
    ],
    "stepByStepSolutionAr": [
      "$I = 1.6 \\times 10^{-19} \\times 6.58 \\times 10^{15} \\approx 1.053 \\times 10^{-3}\\text{ A} \\approx 1.05\\text{ mA}$."
    ],
    "teacherTipEn": "A current of over $1\\text{ mA}$ flowing across a circle of radius $0.5\\text{ \\AA}$ is astonishingly concentrated!",
    "teacherTipAr": "تيار يفوق 1 مللي أمبير يدور في حلقة نصف قطرها نصف أنجستروم هو تيار فائق التركيز بمقاييس الذرة!"
  },
  {
    "id": "egbac_phys_ch2_db_medium_50",
    "titleEn": "Magnetic Field at the Nucleus",
    "titleAr": "المجال المغناطيسي الناتج عند النواة",
    "difficulty": "medium",
    "questionEn": "The magnetic field $B$ produced at the center of the hydrogen nucleus by the orbiting ground-state electron ($I \\approx 1.05\\text{ mA}, r = a_0 \\approx 5.3 \\times 10^{-11}\\text{ m}$) is:",
    "questionAr": "شدة المجال المغناطيسي $B$ المتولد في مركز نواة الهيدروجين والناشئ عن دوران إلكترون المستوى الأرضي ($I \\approx 1.05\\text{ mA}$، $r = a_0 \\approx 5.3 \\times 10^{-11}\\text{ m}$) تساوي:",
    "optionsEn": [
      "$0.5\\text{ T}$",
      "$12.5\\text{ T}$",
      "$5.0 \\times 10^{-5}\\text{ T}$ (Earth field)",
      "$1250\\text{ T}$"
    ],
    "optionsAr": [
      "$0.5\\text{ T}$",
      "$12.5\\text{ T}$",
      "$5.0 \\times 10^{-5}\\text{ T}$ (مجال الأرض)",
      "$1250\\text{ T}$"
    ],
    "correctAnswer": "$12.5\\text{ T}$",
    "correctIndex": 1,
    "hintEn": "Formula for circular current loop center: $B = \\frac{\\mu_0 I}{2 r}$.",
    "hintAr": "صيغة المجال في مركز حلقة تيار دائرية: $B = \\frac{\\mu_0 I}{2 r}$.",
    "stepByStepSolutionEn": [
      "$B = \\frac{(4\\pi \\times 10^{-7}) \\times 1.053 \\times 10^{-3}}{2 \\times 5.29 \\times 10^{-11}} \\approx 12.5\\text{ T}$."
    ],
    "stepByStepSolutionAr": [
      "$B = \\frac{(4\\pi \\times 10^{-7}) \\times 1.053 \\times 10^{-3}}{2 \\times 5.29 \\times 10^{-11}} \\approx 12.5\\text{ T}$."
    ],
    "teacherTipEn": "This gigantic internal magnetic field interacts with the proton's nuclear spin to cause hyperfine splitting.",
    "teacherTipAr": "يتفاعل هذا المجال المغناطيسي الداخلي الهائل مع الغزل النووي للبروتون مسبباً الانفصال فائق الدقة."
  },
  {
    "id": "egbac_phys_ch2_db_medium_51",
    "titleEn": "Centripetal Acceleration of Ground-State Electron",
    "titleAr": "العجلة المركزية لإلكترون المستوى الأرضي",
    "difficulty": "medium",
    "questionEn": "The centripetal acceleration $a_c = \\frac{v_1^2}{a_0}$ experienced by an electron in the ground state of hydrogen is approximately:",
    "questionAr": "العجلة المركزية $a_c = \\frac{v_1^2}{a_0}$ التي يعاني منها إلكترون المستوى الأرضي في ذرة الهيدروجين تساوي تقريباً:",
    "optionsEn": [
      "$9.8\\text{ m/s}^2$",
      "$4.1 \\times 10^{15}\\text{ m/s}^2$",
      "$9.0 \\times 10^{22}\\text{ m/s}^2$",
      "$1.8 \\times 10^{30}\\text{ m/s}^2$"
    ],
    "optionsAr": [
      "$9.8\\text{ m/s}^2$",
      "$4.1 \\times 10^{15}\\text{ m/s}^2$",
      "$9.0 \\times 10^{22}\\text{ m/s}^2$",
      "$1.8 \\times 10^{30}\\text{ m/s}^2$"
    ],
    "correctAnswer": "$9.0 \\times 10^{22}\\text{ m/s}^2$",
    "correctIndex": 2,
    "hintEn": "$a_c = \\frac{(2.18 \\times 10^6)^2}{5.29 \\times 10^{-11}}$.",
    "hintAr": "$a_c = \\frac{(2.18 \\times 10^6)^2}{5.29 \\times 10^{-11}}$.",
    "stepByStepSolutionEn": [
      "$a_c = \\frac{4.75 \\times 10^{12}}{5.29 \\times 10^{-11}} \\approx 8.98 \\times 10^{22}\\text{ m/s}^2$."
    ],
    "stepByStepSolutionAr": [
      "$a_c = \\frac{4.75 \\times 10^{12}}{5.29 \\times 10^{-11}} \\approx 8.98 \\times 10^{22}\\text{ m/s}^2$."
    ],
    "teacherTipEn": "Under classical Larmor radiation, an acceleration this colossal would cause the electron to radiate all its energy and crash into the nucleus in $10^{-11}\\text{ s}$!",
    "teacherTipAr": "وفق إشعاع لارمور الكلاسيكي فإن عجلة بهذا المقدار المهول كانت ستجعل الإلكترون يشع كامل طاقته ويسقط في النواة خلال $10^{-11}\\text{ s}$، مما استوجب فرض بور!"
  },
  {
    "id": "egbac_phys_ch2_db_medium_52",
    "titleEn": "Electrostatic Force in Ground State",
    "titleAr": "القوة الكهروستاتيكية في المستوى الأرضي",
    "difficulty": "medium",
    "questionEn": "The electrostatic Coulomb attraction $F_e = \\frac{k e^2}{a_0^2}$ holding the electron to the proton in ground-state hydrogen is approximately:",
    "questionAr": "قوة التجاذب الكهروستاتيكي لكولوم $F_e = \\frac{k e^2}{a_0^2}$ التي تربط الإلكترون بالبروتون في ذرة الهيدروجين المستقرة تساوي تقريباً:",
    "optionsEn": [
      "$1.6 \\times 10^{-19}\\text{ N}$",
      "$9.0 \\times 10^{9}\\text{ N}$",
      "$3.6 \\times 10^{-47}\\text{ N}$",
      "$8.2 \\times 10^{-8}\\text{ N}$"
    ],
    "optionsAr": [
      "$1.6 \\times 10^{-19}\\text{ N}$",
      "$9.0 \\times 10^{9}\\text{ N}$",
      "$3.6 \\times 10^{-47}\\text{ N}$",
      "$8.2 \\times 10^{-8}\\text{ N}$"
    ],
    "correctAnswer": "$8.2 \\times 10^{-8}\\text{ N}$",
    "correctIndex": 3,
    "hintEn": "$F_e = \\frac{(9 \\times 10^9) \\times (1.6 \\times 10^{-19})^2}{(5.29 \\times 10^{-11})^2}$.",
    "hintAr": "$F_e = \\frac{(9 \\times 10^9) \\times (1.6 \\times 10^{-19})^2}{(5.29 \\times 10^{-11})^2}$.",
    "stepByStepSolutionEn": [
      "$F_e = \\frac{2.304 \\times 10^{-28}}{2.798 \\times 10^{-21}} \\approx 8.23 \\times 10^{-8}\\text{ N}$."
    ],
    "stepByStepSolutionAr": [
      "$F_e = \\frac{2.304 \\times 10^{-28}}{2.798 \\times 10^{-21}} \\approx 8.23 \\times 10^{-8}\\text{ N}$."
    ],
    "teacherTipEn": "While $82\\text{ nN}$ sounds small in macroscopic units, on an electron mass ($10^{-30}\\text{ kg}$) it produces an immense acceleration of $10^{23}\\text{ m/s}^2$.",
    "teacherTipAr": "رغم أن $82\\text{ nN}$ تبدو ضئيلة بمقاييسنا اليومية، إلا أنها عندما تؤثر على كتلة إلكترون فإنها تحدث عجلة هائلة تبلغ $10^{23}\\text{ m/s}^2$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_53",
    "titleEn": "Ratio of Electrostatic to Gravitational Force",
    "titleAr": "نسبة القوة الكهربية إلى التثاقلية في الهيدروجين",
    "difficulty": "medium",
    "questionEn": "In a hydrogen atom, the ratio of the electrostatic attraction to the gravitational attraction between the electron and the proton ($\\frac{F_e}{F_g}$) is of the order of:",
    "questionAr": "في ذرة الهيدروجين، فإن رتبة مقدار النسبة بين قوة التجاذب الكهربي إلى قوة التجاذب التثاقلي بين الإلكترون والبروتون ($\\frac{F_e}{F_g}$) هي:",
    "optionsEn": [
      "$10^{39}$",
      "$10^{10}$",
      "$10^{-39}$",
      "$1$"
    ],
    "optionsAr": [
      "$10^{39}$",
      "$10^{10}$",
      "$10^{-39}$",
      "$1$"
    ],
    "correctAnswer": "$10^{39}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{F_e}{F_g} = \\frac{k e^2}{G m_e m_p}$.",
    "hintAr": "$\\frac{F_e}{F_g} = \\frac{k e^2}{G m_e m_p}$.",
    "stepByStepSolutionEn": [
      "$\\frac{F_e}{F_g} = \\frac{(9 \\times 10^9) \\times (1.6 \\times 10^{-19})^2}{(6.67 \\times 10^{-11}) \\times (9.11 \\times 10^{-31}) \\times (1.67 \\times 10^{-27})} \\approx 2.3 \\times 10^{39}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{F_e}{F_g} = \\frac{(9 \\times 10^9) \\times (1.6 \\times 10^{-19})^2}{(6.67 \\times 10^{-11}) \\times (9.11 \\times 10^{-31}) \\times (1.67 \\times 10^{-27})} \\approx 2.3 \\times 10^{39}$."
    ],
    "teacherTipEn": "This vast factor demonstrates why gravity is completely neglected in atomic and molecular physics.",
    "teacherTipAr": "يوضح هذا الرقم الفلكي سبب إهمال الجاذبية تماماً في فيزياء الذرات والجزيئات."
  },
  {
    "id": "egbac_phys_ch2_db_medium_54",
    "titleEn": "Kinetic Energy in n=2 State",
    "titleAr": "طاقة الحركة في المستوى n=2",
    "difficulty": "medium",
    "questionEn": "What is the kinetic energy $K_2$ of an electron orbiting in the first excited state ($n=2$) of hydrogen?",
    "questionAr": "ما هي طاقة الحركة $K_2$ لإلكترون يدور في مستوى الإثارة الأول ($n=2$) لذرة الهيدروجين؟",
    "optionsEn": [
      "$-3.40\\text{ eV}$",
      "$+3.40\\text{ eV}$",
      "$+1.70\\text{ eV}$",
      "$+13.60\\text{ eV}$"
    ],
    "optionsAr": [
      "$-3.40\\text{ eV}$",
      "$+3.40\\text{ eV}$",
      "$+1.70\\text{ eV}$",
      "$+13.60\\text{ eV}$"
    ],
    "correctAnswer": "$+3.40\\text{ eV}$",
    "correctIndex": 1,
    "hintEn": "Kinetic energy $K_n = -E_n = +13.6 / n^2\\text{ eV}$.",
    "hintAr": "طاقة الحركة $K_n = -E_n = +13.6 / n^2\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "For $n=2$: $K_2 = +13.6 / 4 = +3.40\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "عند $n=2$: نجد $K_2 = +13.6 / 4 = +3.40\\text{ eV}$."
    ],
    "teacherTipEn": "Notice that kinetic energy decreases from $+13.6\\text{ eV}$ at $n=1$ to $+3.4\\text{ eV}$ at $n=2$.",
    "teacherTipAr": "لاحظ أن طاقة الحركة تنخفض من $+13.6\\text{ eV}$ عند $n=1$ إلى $+3.4\\text{ eV}$ عند $n=2$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_55",
    "titleEn": "Potential Energy in n=2 State",
    "titleAr": "طاقة الوضع في المستوى n=2",
    "difficulty": "medium",
    "questionEn": "The potential energy $U_2$ of an electron in the first excited state ($n=2$) of hydrogen is:",
    "questionAr": "طاقة الوضع $U_2$ لإلكترون في مستوى الإثارة الأول ($n=2$) لذرة الهيدروجين تساوي:",
    "optionsEn": [
      "$-3.40\\text{ eV}$",
      "$+6.80\\text{ eV}$",
      "$-6.80\\text{ eV}$",
      "$-27.20\\text{ eV}$"
    ],
    "optionsAr": [
      "$-3.40\\text{ eV}$",
      "$+6.80\\text{ eV}$",
      "$-6.80\\text{ eV}$",
      "$-27.20\\text{ eV}$"
    ],
    "correctAnswer": "$-6.80\\text{ eV}$",
    "correctIndex": 2,
    "hintEn": "$U_n = 2 E_n = -27.2 / n^2\\text{ eV}$.",
    "hintAr": "$U_n = 2 E_n = -27.2 / n^2\\text{ eV}$.",
    "stepByStepSolutionEn": [
      "For $n=2$: $U_2 = -27.2 / 4 = -6.80\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "عند $n=2$: نجد $U_2 = -27.2 / 4 = -6.80\\text{ eV}$."
    ],
    "teacherTipEn": "Verify: $E_2 = K_2 + U_2 = +3.40 + (-6.80) = -3.40\\text{ eV}$.",
    "teacherTipAr": "تحقق: $E_2 = K_2 + U_2 = +3.40 + (-6.80) = -3.40\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_56",
    "titleEn": "Balmer Gamma Line Wavelength Calculation",
    "titleAr": "حساب الطول الموجي لخط بالمر-جاما",
    "difficulty": "medium",
    "questionEn": "The $H_\\gamma$ spectral line of the Balmer series corresponds to the transition $n=5 \\to 2$. Its wavelength is:",
    "questionAr": "يقابل الخط الطيفي $H_\\gamma$ في متسلسلة بالمر الانتقال $n=5 \\to 2$. طوله الموجي يساوي:",
    "optionsEn": [
      "$486.1\\text{ nm}$",
      "$410.2\\text{ nm}$",
      "$656.3\\text{ nm}$",
      "$434.0\\text{ nm}$"
    ],
    "optionsAr": [
      "$486.1\\text{ nm}$",
      "$410.2\\text{ nm}$",
      "$656.3\\text{ nm}$",
      "$434.0\\text{ nm}$"
    ],
    "correctAnswer": "$434.0\\text{ nm}$",
    "correctIndex": 3,
    "hintEn": "$\\frac{1}{\\lambda} = R_H (1/4 - 1/25) = \\frac{21}{100} R_H$.",
    "hintAr": "$\\frac{1}{\\lambda} = R_H (1/4 - 1/25) = \\frac{21}{100} R_H$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{100}{21 \\times 1.097 \\times 10^7} \\approx 4.340 \\times 10^{-7}\\text{ m} = 434.0\\text{ nm}$ (Blue line)."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{100}{21 \\times 1.097 \\times 10^7} \\approx 4.340 \\times 10^{-7}\\text{ m} = 434.0\\text{ nm}$ (الخط الأزرق)."
    ],
    "teacherTipEn": "The photon energy is $E_5 - E_2 = -0.544 - (-3.40) = 2.856\\text{ eV}$.",
    "teacherTipAr": "طاقة الفوتون هي $E_5 - E_2 = -0.544 - (-3.40) = 2.856\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_57",
    "titleEn": "Balmer Delta Line Wavelength Calculation",
    "titleAr": "حساب الطول الموجي لخط بالمر-دلتا",
    "difficulty": "medium",
    "questionEn": "The fourth visible line of hydrogen, $H_\\delta$, results from the transition $n=6 \\to 2$. Its wavelength is:",
    "questionAr": "ينتج الخط المرئي الرابع للهيدروجين $H_\\delta$ من الانتقال $n=6 \\to 2$. طوله الموجي يساوي:",
    "optionsEn": [
      "$410.2\\text{ nm}$",
      "$434.0\\text{ nm}$",
      "$364.6\\text{ nm}$",
      "$486.1\\text{ nm}$"
    ],
    "optionsAr": [
      "$410.2\\text{ nm}$",
      "$434.0\\text{ nm}$",
      "$364.6\\text{ nm}$",
      "$486.1\\text{ nm}$"
    ],
    "correctAnswer": "$410.2\\text{ nm}$",
    "correctIndex": 0,
    "hintEn": "$\\frac{1}{\\lambda} = R_H (1/4 - 1/36) = \\frac{8}{36} R_H = \\frac{2}{9} R_H$.",
    "hintAr": "$\\frac{1}{\\lambda} = R_H (1/4 - 1/36) = \\frac{8}{36} R_H = \\frac{2}{9} R_H$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{9}{2 \\times 1.097 \\times 10^7} \\approx 4.102 \\times 10^{-7}\\text{ m} = 410.2\\text{ nm}$ (Violet line)."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{9}{2 \\times 1.097 \\times 10^7} \\approx 4.102 \\times 10^{-7}\\text{ m} = 410.2\\text{ nm}$ (الخط البنفسجي)."
    ],
    "teacherTipEn": "This is the shortest-wavelength line in the visible hydrogen spectrum.",
    "teacherTipAr": "هذا هو أقصر خطوط طيف الهيدروجين المرئية طولاً موجياً."
  },
  {
    "id": "egbac_phys_ch2_db_medium_58",
    "titleEn": "Paschen Alpha Line Wavelength Calculation",
    "titleAr": "حساب الطول الموجي لخط باشن-ألفا",
    "difficulty": "medium",
    "questionEn": "The first line of the Paschen series ($n=4 \\to 3$) occurs in the infrared spectrum at wavelength:",
    "questionAr": "يقع أول خط في متسلسلة باشن ($n=4 \\to 3$) في طيف الأشعة تحت الحمراء عند طول موجي مقداره:",
    "optionsEn": [
      "$820\\text{ nm}$",
      "$1875\\text{ nm} (1.875\\mu\\text{m})$",
      "$656\\text{ nm}$",
      "$4050\\text{ nm}$"
    ],
    "optionsAr": [
      "$820\\text{ nm}$",
      "$1875\\text{ nm} (1.875\\mu\\text{m})$",
      "$656\\text{ nm}$",
      "$4050\\text{ nm}$"
    ],
    "correctAnswer": "$1875\\text{ nm} (1.875\\mu\\text{m})$",
    "correctIndex": 1,
    "hintEn": "$\\frac{1}{\\lambda} = R_H (1/9 - 1/16) = \\frac{7}{144} R_H$.",
    "hintAr": "$\\frac{1}{\\lambda} = R_H (1/9 - 1/16) = \\frac{7}{144} R_H$.",
    "stepByStepSolutionEn": [
      "$\\lambda = \\frac{144}{7 \\times 1.097 \\times 10^7} \\approx 1.875 \\times 10^{-6}\\text{ m} = 1875\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda = \\frac{144}{7 \\times 1.097 \\times 10^7} \\approx 1.875 \\times 10^{-6}\\text{ m} = 1875\\text{ nm}$."
    ],
    "teacherTipEn": "The photon energy is $\\Delta E = -0.85 - (-1.51) = 0.66\\text{ eV}$.",
    "teacherTipAr": "طاقة الفوتون المنبعث هي $\\Delta E = -0.85 - (-1.51) = 0.66\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_medium_59",
    "titleEn": "Paschen Series Limit Wavelength Calculation",
    "titleAr": "حساب الطول الموجي لحد متسلسلة باشن",
    "difficulty": "medium",
    "questionEn": "The shortest wavelength (series limit, $n=\\infty \\to 3$) of the Paschen series in atomic hydrogen is:",
    "questionAr": "أقصر طول موجي (حد المتسلسلة، $n=\\infty \\to 3$) لمتسلسلة باشن في ذرة الهيدروجين يساوي:",
    "optionsEn": [
      "$1875.1\\text{ nm}$",
      "$364.6\\text{ nm}$",
      "$820.4\\text{ nm}$",
      "$91.2\\text{ nm}$"
    ],
    "optionsAr": [
      "$1875.1\\text{ nm}$",
      "$364.6\\text{ nm}$",
      "$820.4\\text{ nm}$",
      "$91.2\\text{ nm}$"
    ],
    "correctAnswer": "$820.4\\text{ nm}$",
    "correctIndex": 2,
    "hintEn": "At the series limit, $1/\\lambda = R_H / 3^2 = R_H / 9$.",
    "hintAr": "عند حد المتسلسلة، $1/\\lambda = R_H / 3^2 = R_H / 9$.",
    "stepByStepSolutionEn": [
      "$\\lambda_{\\text{limit}} = \\frac{9}{R_H} = \\frac{9}{1.097 \\times 10^7} \\approx 8.204 \\times 10^{-7}\\text{ m} = 820.4\\text{ nm}$ (Infrared)."
    ],
    "stepByStepSolutionAr": [
      "$\\lambda_{\\text{limit}} = \\frac{9}{R_H} = \\frac{9}{1.097 \\times 10^7} \\approx 8.204 \\times 10^{-7}\\text{ m} = 820.4\\text{ nm}$ (تحت حمراء)."
    ],
    "teacherTipEn": "The photon energy at this limit is $E_3 = 1.51\\text{ eV}$.",
    "teacherTipAr": "طاقة الفوتون عند هذا الحد هي $E_3 = 1.51\\text{ eV}$."
  }
],
  hots: [
  {
    "id": "egbac_phys_ch2_db_hots_01",
    "titleEn": "Rydberg Constant Fundamental Derivation",
    "titleAr": "الاشتقاق الأساسي لثابت ريدبرج",
    "difficulty": "hots",
    "questionEn": "In Bohr's theoretical formulation, Rydberg's constant $R_\\infty$ expressed purely in terms of fundamental constants is:",
    "questionAr": "في المعالجة النظرية لبور، يعبر عن ثابت ريدبرج $R_\\infty$ بدلالة الثوابت الفيزيائية الكونية بالعلاقة:",
    "optionsEn": [
      "$R_\\infty = \\frac{m_e e^4}{8 \\varepsilon_0^2 h^3 c}$",
      "$R_\\infty = \\frac{8 \\varepsilon_0^2 h^3 c}{m_e e^4}$",
      "$R_\\infty = \\frac{m_e e^2}{4\\pi \\varepsilon_0 \\hbar^2}$",
      "$R_\\infty = \\frac{2\\pi^2 m_e e^4}{h^2 c}$"
    ],
    "optionsAr": [
      "$R_\\infty = \\frac{m_e e^4}{8 \\varepsilon_0^2 h^3 c}$",
      "$R_\\infty = \\frac{8 \\varepsilon_0^2 h^3 c}{m_e e^4}$",
      "$R_\\infty = \\frac{m_e e^2}{4\\pi \\varepsilon_0 \\hbar^2}$",
      "$R_\\infty = \\frac{2\\pi^2 m_e e^4}{h^2 c}$"
    ],
    "correctAnswer": "$R_\\infty = \\frac{m_e e^4}{8 \\varepsilon_0^2 h^3 c}$",
    "correctIndex": 0,
    "hintEn": "Combine $E_n = -\\frac{m e^4}{8\\varepsilon_0^2 h^2 n^2}$ with $\\frac{1}{\\lambda} = \\frac{\\Delta E}{hc}$.",
    "hintAr": "ادمج معادلة الطاقة $E_n = -\\frac{m e^4}{8\\varepsilon_0^2 h^2 n^2}$ مع $\\frac{1}{\\lambda} = \\frac{\\Delta E}{hc}$.",
    "stepByStepSolutionEn": [
      "$\\frac{1}{\\lambda} = \\frac{m_e e^4}{8\\varepsilon_0^2 h^3 c}\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) \\implies R_\\infty = \\frac{m_e e^4}{8\\varepsilon_0^2 h^3 c} \\approx 1.09737 \\times 10^7\\text{ m}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{1}{\\lambda} = \\frac{m_e e^4}{8\\varepsilon_0^2 h^3 c}\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) \\implies R_\\infty = \\frac{m_e e^4}{8\\varepsilon_0^2 h^3 c} \\approx 1.09737 \\times 10^7\\text{ m}^{-1}$."
    ],
    "teacherTipEn": "One of the greatest triumphs of early quantum theory, connecting spectroscopy directly to fundamental particle properties.",
    "teacherTipAr": "أحد أعظم انتصارات نظرية الكم المبكرة التي ربطت التحليل الطيفي مباشرة بخصائص الجسيمات الأولية."
  },
  {
    "id": "egbac_phys_ch2_db_hots_02",
    "titleEn": "Finite Nuclear Mass Reduced Mass Correction",
    "titleAr": "تصحيح الكتلة المختزلة لحركة النواة",
    "difficulty": "hots",
    "questionEn": "Taking into account that the nucleus of mass $M$ is not infinitely heavy and wobbles around the common center of mass, the electron mass $m_e$ in the Rydberg formula must be replaced by the reduced mass $\\mu$:",
    "questionAr": "بأخذ حقيقة أن النواة ذات الكتلة $M$ ليست لا نهائية الثقل وتتحرك حول مركز الكتلة المشترك، يجب استبدال كتلة الإلكترون $m_e$ في صيغة ريدبرج بالكتلة المختزلة $\\mu$:",
    "optionsEn": [
      "$\\mu = m_e + M$",
      "$\\mu = \\frac{m_e M}{m_e + M} = \\frac{m_e}{1 + m_e/M}$",
      "$\\mu = \\frac{M - m_e}{2}$",
      "$\\mu = \\sqrt{m_e M}$"
    ],
    "optionsAr": [
      "$\\mu = m_e + M$",
      "$\\mu = \\frac{m_e M}{m_e + M} = \\frac{m_e}{1 + m_e/M}$",
      "$\\mu = \\frac{M - m_e}{2}$",
      "$\\mu = \\sqrt{m_e M}$"
    ],
    "correctAnswer": "$\\mu = \\frac{m_e M}{m_e + M} = \\frac{m_e}{1 + m_e/M}$",
    "correctIndex": 1,
    "hintEn": "Two-body central force problem reduces to one body of reduced mass $\\mu$ orbiting a fixed center.",
    "hintAr": "تختزل مسألة القوة المركزية لجسمين إلى جسم واحد كتلته المختزلة $\\mu$ يدور حول مركز ثابت.",
    "stepByStepSolutionEn": [
      "$\\mu = \\frac{m_e M}{m_e + M}$. Since $M_p \\approx 1836 m_e$, $\\mu \\approx 0.99945 m_e$, causing a small but measurable spectral shift."
    ],
    "stepByStepSolutionAr": [
      "$\\mu = \\frac{m_e M}{m_e + M}$. وبما أن $M_p \\approx 1836 m_e$ فإن $\\mu \\approx 0.99945 m_e$ مما يحدث إزاحة طيفية قابلة للقياس بدقة."
    ],
    "teacherTipEn": "Harold Urey used this isotope shift to discover deuterium in 1931 (Nobel Prize 1934).",
    "teacherTipAr": "استخدم هارولد يوري هذا الانزياح النظيري لاكتشاف الديوتيريوم عام 1931 ونال نوبل 1934."
  },
  {
    "id": "egbac_phys_ch2_db_hots_03",
    "titleEn": "Deuterium Isotope Shift in Balmer Alpha",
    "titleAr": "الانزياح النظيري للديوتيريوم في خط بالمر-ألفا",
    "difficulty": "hots",
    "questionEn": "Because a deuteron ($M_d \\approx 2 M_p$) has roughly double the mass of a proton, the $H_\\alpha$ line of deuterium ($\\lambda_D$) compared to hydrogen ($\\lambda_H = 656.3\\text{ nm}$) is:",
    "questionAr": "نظراً لأن نواة الديوتيريوم ($M_d \\approx 2 M_p$) تمتلك ضعف كتلة البروتون تقريباً، فإن خط $H_\\alpha$ للديوتيريوم ($\\lambda_D$) مقارنة بالهيدروجين العادي ($\\lambda_H = 656.3\\text{ nm}$) يكون:",
    "optionsEn": [
      "Slightly redshifted (longer wavelength by $10\\text{ nm}$)",
      "Identical in wavelength because both have atomic number $Z=1$",
      "Slightly blueshifted (shorter wavelength by approximately $0.18\\text{ nm}$)",
      "Shifted into the deep infrared region near $2000\\text{ nm}$"
    ],
    "optionsAr": [
      "مزاحاً نحو الأحمر (طول موجي أطول بـ $10\\text{ nm}$)",
      "متطابقاً تماماً في الطول الموجي لأن لكليهما العدد الذري $Z=1$",
      "مزاحاً قليلاً نحو الأزرق (طول موجي أقصر بحوالي $0.18\\text{ nm}$)",
      "مزاحاً إلى منطقة تحت الحمراء العميقة قرب $2000\\text{ nm}$"
    ],
    "correctAnswer": "Slightly blueshifted (shorter wavelength by approximately $0.18\\text{ nm}$)",
    "correctIndex": 2,
    "hintEn": "$\\mu_D > \\mu_H \\implies R_D > R_H \\implies \\lambda_D < \\lambda_H$.",
    "hintAr": "$\\mu_D > \\mu_H \\implies R_D > R_H \\implies \\lambda_D < \\lambda_H$.",
    "stepByStepSolutionEn": [
      "$\\frac{\\Delta \\lambda}{\\lambda} \\approx \\frac{m_e}{2 M_p} \\approx \\frac{1}{3672} \\approx 2.7 \\times 10^{-4}$. Thus $\\Delta \\lambda \\approx 656.3 \\times 2.7 \\times 10^{-4} \\approx 0.18\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\Delta \\lambda}{\\lambda} \\approx \\frac{m_e}{2 M_p} \\approx \\frac{1}{3672} \\approx 2.7 \\times 10^{-4}$، ومنها $\\Delta \\lambda \\approx 656.3 \\times 2.7 \\times 10^{-4} \\approx 0.18\\text{ nm}$."
    ],
    "teacherTipEn": "A high-resolution spectrograph clearly resolves the hydrogen-deuterium doublet.",
    "teacherTipAr": "يستطيع المطياف عالي الدقة التمييز بوضوح بين خطي الهيدروجين والديوتيريوم المتجاورين."
  },
  {
    "id": "egbac_phys_ch2_db_hots_04",
    "titleEn": "Relativistic Fine Structure Correction Order",
    "titleAr": "رتبة مقدار تصحيح التركيب الدقيق النسبي",
    "difficulty": "hots",
    "questionEn": "The relativistic mass increase and spin-orbit coupling in hydrogen split degenerate Bohr levels by a tiny energy fraction of order:",
    "questionAr": "تؤدي الزيادة النسبية في الكتلة والاقتران المغزلي المداري في الهيدروجين إلى شطر مستويات بور بمقدار نسبي من رتبة:",
    "optionsEn": [
      "$\\alpha E_n \\sim 10^{-2} E_n$",
      "$\\alpha^4 E_n \\sim 10^{-8} E_n$",
      "$E_n / 2$",
      "$\\alpha^2 E_n \\sim \\left(\\frac{1}{137}\\right)^2 E_n \\sim 10^{-4} E_n$"
    ],
    "optionsAr": [
      "$\\alpha E_n \\sim 10^{-2} E_n$",
      "$\\alpha^4 E_n \\sim 10^{-8} E_n$",
      "$E_n / 2$",
      "$\\alpha^2 E_n \\sim \\left(\\frac{1}{137}\\right)^2 E_n \\sim 10^{-4} E_n$"
    ],
    "correctAnswer": "$\\alpha^2 E_n \\sim \\left(\\frac{1}{137}\\right)^2 E_n \\sim 10^{-4} E_n$",
    "correctIndex": 3,
    "hintEn": "Fine structure depends on the fine-structure constant squared $\\alpha^2 \\approx (1/137)^2$.",
    "hintAr": "يعتمد التركيب الدقيق على مربع ثابت التركيب الدقيق $\\alpha^2 \\approx (1/137)^2$.",
    "stepByStepSolutionEn": [
      "The Dirac equation yields relativistic corrections of order $(v/c)^2 \\approx \\alpha^2 \\approx 5.3 \\times 10^{-5}$, splitting the Balmer lines into closely spaced components (fine structure)."
    ],
    "stepByStepSolutionAr": [
      "تعطي معادلة ديراك تصحيحات نسبية من رتبة $(v/c)^2 \\approx \\alpha^2 \\approx 5.3 \\times 10^{-5}$ تشطر خطوط بالمر إلى مركبات متقاربة جداً (التركيب الدقيق)."
    ],
    "teacherTipEn": "Arnold Sommerfeld first incorporated relativistic elliptical orbits to explain fine structure.",
    "teacherTipAr": "كان أرنولد سومرفيلد أول من أدخل المدارات الإهليلجية النسبية لتفسير هذا التركيب."
  },
  {
    "id": "egbac_phys_ch2_db_hots_05",
    "titleEn": "Moseley Law Physical Meaning of Sigma",
    "titleAr": "المعنى الفيزيائي لثابت الحجب سيجما في قانون موزلي",
    "difficulty": "hots",
    "questionEn": "In Moseley's empirical formula for $K_\\alpha$ characteristic X-rays ($\\sqrt{\\nu} = a(Z - \\sigma)$), the screening constant is found to be $\\sigma \\approx 1$. The physical origin of this value is:",
    "questionAr": "في صيغة موزلي لخط الأشعة السينية $K_\\alpha$ ($\\sqrt{\\nu} = a(Z - \\sigma)$)، وُجد أن ثابت الحجب $\\sigma \\approx 1$. يرجع الأصل الفيزيائي لهذه القيمة إلى:",
    "optionsEn": [
      "The single remaining electron in the $K$-shell partially shields the nuclear charge $+Ze$ from the cascading outer electron",
      "The screening effect of all conduction band electrons in the solid target",
      "The vacuum polarization predicted by quantum electrodynamics",
      "Relativistic length contraction of the atomic nucleus"
    ],
    "optionsAr": [
      "الإلكترون الوحيد المتبقي في الغلاف $K$ يحجب جزءاً من شحنة النواة $+Ze$ عن الإلكترون الهابط من الخارج",
      "تأثير الحجب الناشئ عن جميع إلكترونات حزمة التوصيل في الهدف الصلب",
      "استقطاب الفراغ المتنبأ به في الكهروديناميكا الكمية",
      "الانكماش الطولي النسبي للنواة الذرية"
    ],
    "correctAnswer": "The single remaining electron in the $K$-shell partially shields the nuclear charge $+Ze$ from the cascading outer electron",
    "correctIndex": 0,
    "hintEn": "Before the transition, one electron was knocked out of the $K$-shell, leaving exactly one electron behind.",
    "hintAr": "قبل الانتقال، انتُزع إلكترون من الغلاف $K$ فتبقى فيه إلكترون واحد فقط.",
    "stepByStepSolutionEn": [
      "The electron descending from $L$ ($n=2$) to $K$ ($n=1$) feels the positive nuclear charge $+Ze$ screened by the 1 remaining electron in the $K$-shell, experiencing effective charge $Z_{\\text{eff}} = Z - 1$."
    ],
    "stepByStepSolutionAr": [
      "يشعر الإلكترون الهابط من $L$ إلى $K$ بالشحنة النووية $+Ze$ محجوبة بإلكترون واحد متبقٍ في الغلاف $K$ فيرى شحنة فعالة $Z_{\\text{eff}} = Z - 1$."
    ],
    "teacherTipEn": "This elegant insight provided direct proof of atomic number as the core charge.",
    "teacherTipAr": "قدم هذا الفهم دليلاً عبقرياً مباشراً على أن العدد الذري يمثل شحنة النواة الفعلية."
  },
  {
    "id": "egbac_phys_ch2_db_hots_06",
    "titleEn": "Screening Constant for L-Series X-Rays",
    "titleAr": "ثابت الحجب لمتسلسلة أشعة L",
    "difficulty": "hots",
    "questionEn": "For $L_\\alpha$ characteristic X-ray transitions (electrons jumping from the $M$-shell to the $L$-shell), the empirical screening constant is approximately $\\sigma \\approx 7.4$. This larger value reflects:",
    "questionAr": "لانتقالات الأشعة السينية المميزة $L_\\alpha$ (هبوط الإلكترونات من الغلاف $M$ إلى الغلاف $L$)، يبلغ ثابت الحجب التجريبي $\\sigma \\approx 7.4$. تعكس هذه القيمة الأكبر:",
    "optionsEn": [
      "The shielding by nuclear neutrons and alpha particles",
      "The shielding produced by the complete $K$-shell (2 electrons) plus remaining electrons in the $L$-shell",
      "A complete breakdown of Coulomb's inverse-square law inside atoms",
      "The magnetic repulsion between proton spins"
    ],
    "optionsAr": [
      "الحجب الناتج عن نيوترونات النواة وجسيمات ألفا",
      "الحجب الناتج عن الغلاف $K$ المكتمل (إلكترونان) مضافاً إليه الإلكترونات المتبقية في الغلاف $L$",
      "انهياراً تاماً لقانون كولوم للتربيع العكسي داخل الذرة",
      "التنافر المغناطيسي بين غزول البروتونات"
    ],
    "correctAnswer": "The shielding produced by the complete $K$-shell (2 electrons) plus remaining electrons in the $L$-shell",
    "correctIndex": 1,
    "hintEn": "The $M$-shell is farther out, so it sees all electrons inside the $K$-shell and $L$-shell.",
    "hintAr": "يقع الغلاف $M$ في الخارج، فيرى جميع الإلكترونات الواقعة داخله في الغلافين $K$ و $L$.",
    "stepByStepSolutionEn": [
      "The $K$-shell contains 2 electrons, and the vacant $L$-shell contains the remaining 7 electrons, giving an effective screening of $\\sigma \\approx 7.4$."
    ],
    "stepByStepSolutionAr": [
      "يحتوي الغلاف $K$ على إلكترونين، ويحتوي الغلاف $L$ الشاغر على 7 إلكترونات متبقية، مما يعطي حجباً فعالاً مقداره $\\sigma \\approx 7.4$."
    ],
    "teacherTipEn": "Consequently, $L$-series X-rays have substantially lower frequencies than $K$-series.",
    "teacherTipAr": "بالنتيجة تكون ترددات متسلسلة $L$ أقل بكثير من متسلسلة $K$ لنفس العنصر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_07",
    "titleEn": "Continuous Spectrum Peak Wavelength",
    "titleAr": "الطول الموجي لقمة الطيف المستمر",
    "difficulty": "hots",
    "questionEn": "In the continuous Bremsstrahlung X-ray spectrum, empirical observation and Kramers' law show that the peak of maximum spectral intensity $\\lambda_{\\text{peak}}$ occurs at roughly:",
    "questionAr": "في طيف أشعة الكبح المستمر، تظهر المشاهدات التجريبية وقانون كرامرز أن قمة أقصى شدة طيفية $\\lambda_{\\text{peak}}$ تقع تقريباً عند:",
    "optionsEn": [
      "$\\lambda_{\\text{peak}} = \\lambda_{\\min}$",
      "$\\lambda_{\\text{peak}} = 3.0 \\lambda_{\\min}$",
      "$\\lambda_{\\text{peak}} \\approx 1.5 \\lambda_{\\min}$",
      "$\\lambda_{\\text{peak}} = 0.5 \\lambda_{\\min}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\text{peak}} = \\lambda_{\\min}$",
      "$\\lambda_{\\text{peak}} = 3.0 \\lambda_{\\min}$",
      "$\\lambda_{\\text{peak}} \\approx 1.5 \\lambda_{\\min}$",
      "$\\lambda_{\\text{peak}} = 0.5 \\lambda_{\\min}$"
    ],
    "correctAnswer": "$\\lambda_{\\text{peak}} \\approx 1.5 \\lambda_{\\min}$",
    "correctIndex": 2,
    "hintEn": "The intensity starts from zero at $\\lambda_{\\min}$, reaches a maximum, and drops off at long $\\lambda$.",
    "hintAr": "تبدأ الشدة من الصفر عند $\\lambda_{\\min}$ وتصل لقيمة عظمى ثم تتناقص عند الأطوال الموجية الطويلة.",
    "stepByStepSolutionEn": [
      "Differentiating Kramers' emission distribution $I(\\lambda) \\propto \\frac{1}{\\lambda^2}\\left(\\frac{1}{\\lambda_{\\min}} - \\frac{1}{\\lambda}\\right)$ with respect to $\\lambda$ yields the maximum at $\\lambda_{\\text{peak}} = \\frac{3}{2}\\lambda_{\\min} = 1.5 \\lambda_{\\min}$."
    ],
    "stepByStepSolutionAr": [
      "بتفاضل توزيع كرامرز للانبعاث بالنسبة لـ $\\lambda$ نجد أن النهاية العظمى تحدث تماماً عند $\\lambda_{\\text{peak}} = \\frac{3}{2}\\lambda_{\\min} = 1.5 \\lambda_{\\min}$."
    ],
    "teacherTipEn": "If $\\lambda_{\\min} = 0.2\\text{ \\AA}$, the peak intensity is around $0.3\\text{ \\AA}$.",
    "teacherTipAr": "إذا كان أقل طول موجي $\\lambda_{\\min} = 0.2\\text{ \\AA}$ فإن قمة الشدة تقع عند حوالي $0.3\\text{ \\AA}$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_08",
    "titleEn": "Auger Effect vs Characteristic X-Ray Emission",
    "titleAr": "تأثير أوجيه مقابل انبعاث الأشعة السينية المميزة",
    "difficulty": "hots",
    "questionEn": "When a core electron is ejected from the $K$-shell, the atom can de-excite either by emitting a characteristic X-ray photon or through the radiationless Auger effect, where:",
    "questionAr": "عند اقتلاع إلكترون داخلي من الغلاف $K$، يمكن للذرة أن تهبط إما بإشعاع فوتون سيني مميز أو عبر تأثير أوجيه غير الإشعاعي حيث يتم:",
    "optionsEn": [
      "Emitting a high-energy neutrino from the atomic nucleus",
      "Splitting the nucleus into two symmetric fission fragments",
      "Creating a superconducting state in the target lattice",
      "Transferring the transition energy non-radiatively to eject a secondary electron from an outer shell (Auger electron)"
    ],
    "optionsAr": [
      "إطلاق نيوترينو عالي الطاقة من داخل النواة الذرية",
      "انشطار النواة إلى شظيتين انشطاريتين متناظرتين",
      "توليد حالة فائقة التوصيل في الشبكة البلورية للهدف",
      "نقل طاقة الانتقال كهرومغناطيسياً دون إشعاع لطرد إلكترون ثانوي من غلاف خارجي (إلكترون أوجيه)"
    ],
    "correctAnswer": "Transferring the transition energy non-radiatively to eject a secondary electron from an outer shell (Auger electron)",
    "correctIndex": 3,
    "hintEn": "The atom can shed energy by shooting out an electron instead of a photon.",
    "hintAr": "تستطيع الذرة التخلص من طاقتها بطرد إلكترون بدلاً من إطلاق فوتون.",
    "stepByStepSolutionEn": [
      "The energy released by the filling of the $K$-hole is absorbed internally via Coulomb interaction by an $L$-shell electron, ejecting it with kinetic energy $K = E_{K} - 2 E_L$."
    ],
    "stepByStepSolutionAr": [
      "تمتص طاقة ملء فجوة $K$ داخلياً عبر تفاعل كولوم بواسطة إلكترون في الغلاف $L$ فيقذف كإلكترون حر بطاقة حركة $K = E_{K} - 2 E_L$."
    ],
    "teacherTipEn": "Pierre Auger discovered this process in 1923; Auger electron spectroscopy (AES) is a major surface analysis tool.",
    "teacherTipAr": "اكتشف بيير أوجيه هذه الظاهرة عام 1923 وتعد مطيافية أوجيه أداة رئيسية لتحليل كيمياء السطوح."
  },
  {
    "id": "egbac_phys_ch2_db_hots_09",
    "titleEn": "Fluorescence Yield Dependence on Atomic Number",
    "titleAr": "اعتماد المردود الفلوري على العدد الذري",
    "difficulty": "hots",
    "questionEn": "The fluorescence yield $\\omega_K = \\frac{P_{\\text{X-ray}}}{P_{\\text{X-ray}} + P_{\\text{Auger}}}$ measures the probability that a $K$-shell vacancy decays by X-ray photon emission rather than Auger electron emission. As atomic number $Z$ increases:",
    "questionAr": "يقيس المردود الفلوري $\\omega_K$ احتمالية أن تتلاشى فجوة الغلاف $K$ بانبعاث فوتون سيني بدلاً من إلكترون أوجيه. مع زيادة العدد الذري $Z$ لعنصر الهدف:",
    "optionsEn": [
      "$\\omega_K$ increases dramatically toward $1.0$, making heavy elements excellent X-ray emitters while light elements emit mostly Auger electrons",
      "$\\omega_K$ drops to zero because heavy nuclei completely trap all emitted photons",
      "$\\omega_K$ remains constant at exactly $0.5$ for all elements in the periodic table",
      "$\\omega_K$ becomes negative due to tachyon emission"
    ],
    "optionsAr": [
      "يزداد $\\omega_K$ بشدة مقترباً من $1.0$، مما يجعل العناصر الثقيلة مصادر ممتازة للأشعة السينية بينما تطلق العناصر الخفيفة إلكترونات أوجيه غالباً",
      "يهبط $\\omega_K$ إلى الصفر لأن النوى الثقيلة تحبس جميع الفوتونات المنبعثة",
      "يظل $\\omega_K$ ثابتاً عند $0.5$ بالضبط لجميع عناصر الجدول الدوري",
      "يصبح $\\omega_K$ سالباً بسبب انبعاث التاكيونات"
    ],
    "correctAnswer": "$\\omega_K$ increases dramatically toward $1.0$, making heavy elements excellent X-ray emitters while light elements emit mostly Auger electrons",
    "correctIndex": 0,
    "hintEn": "Radiative dipole transition probability scales as $\\Delta E^3 \\propto Z^4$, while Auger probability is roughly constant.",
    "hintAr": "احتمالية الانتقال الإشعاعي تتناسب مع مكعب الطاقة $\\Delta E^3 \\propto Z^4$، بينما تظل احتمالية أوجيه شبه ثابتة.",
    "stepByStepSolutionEn": [
      "For Carbon ($Z=6$), $\\omega_K < 0.01$ (99% Auger). For Tungsten ($Z=74$), $\\omega_K \\approx 0.85$ (predominantly X-rays). This is why heavy elements are chosen for X-ray anodes."
    ],
    "stepByStepSolutionAr": [
      "للكربون ($Z=6$) يكون $\\omega_K < 0.01$ (99% أوجيه)، بينما للتنجستن ($Z=74$) يقارب $0.85$ (أشعة سينية غالباً)، ولهذا تختار العناصر الثقيلة لمصاعد الأشعة السينية."
    ],
    "teacherTipEn": "A fundamental principle in medical physics and electron microscopy.",
    "teacherTipAr": "مبدأ أساسي في الفيزياء الطبية والمجهر الإلكتروني."
  },
  {
    "id": "egbac_phys_ch2_db_hots_10",
    "titleEn": "Normal Zeeman Effect Level Splitting",
    "titleAr": "انفصال المستويات في تأثير زيمان العادي",
    "difficulty": "hots",
    "questionEn": "In the normal Zeeman effect, when an atom is placed in a uniform external magnetic field $B$, a spectral level with orbital angular momentum quantum number $l$ splits into:",
    "questionAr": "في تأثير زيمان العادي، عند وضع الذرة في مجال مغناطيسي خارجي منتظم $B$، فإن مستوى الطاقة ذي عدد الكم المداري $l$ ينفصل إلى:",
    "optionsEn": [
      "$2l$ sub-levels with exponentially increasing gaps",
      "$(2l + 1)$ equally spaced sub-levels separated by $\\Delta E = m_l \\mu_B B$",
      "$l^2$ sub-levels that oscillate randomly",
      "Only 1 unshifted level with no magnetic interaction"
    ],
    "optionsAr": [
      "$2l$ من المستويات الفرعية بفواصل متزايدة أسياً",
      "$(2l + 1)$ من المستويات الفرعية متساوية التباعد بفاصل $\\Delta E = m_l \\mu_B B$",
      "$l^2$ من المستويات الفرعية المتذبذبة عشوائياً",
      "مستوى وحيد غير متأثر بالمجال المغناطيسي"
    ],
    "correctAnswer": "$(2l + 1)$ equally spaced sub-levels separated by $\\Delta E = m_l \\mu_B B$",
    "correctIndex": 1,
    "hintEn": "Magnetic quantum number $m_l$ takes $(2l+1)$ values: $-l, \\dots, 0, \\dots, +l$.",
    "hintAr": "عدد الكم المغناطيسي $m_l$ يأخذ $(2l+1)$ من القيم: من $-l$ إلى $+l$.",
    "stepByStepSolutionEn": [
      "The magnetic dipole interaction energy is $\\Delta E = -\\vec{\\mu}_L \\cdot \\vec{B} = m_l \\mu_B B$, lifting the spatial degeneracy into $2l + 1$ distinct states."
    ],
    "stepByStepSolutionAr": [
      "طاقة تفاعل ثنائي القطب المغناطيسي هي $\\Delta E = -\\vec{\\mu}_L \\cdot \\vec{B} = m_l \\mu_B B$، مما يرفع الانفطار المكاني إلى $2l + 1$ من الحالات المنفصلة."
    ],
    "teacherTipEn": "Pieter Zeeman received the 1902 Nobel Prize alongside Hendrik Lorentz.",
    "teacherTipAr": "نال بيتر زيمان جائزة نوبل عام 1902 مناصفة مع هندريك لورنتز."
  },
  {
    "id": "egbac_phys_ch2_db_hots_11",
    "titleEn": "Normal Zeeman Triplet Selection Rules",
    "titleAr": "قواعد الاختيار لثلاثية زيمان العادية",
    "difficulty": "hots",
    "questionEn": "When observing transverse to the magnetic field in the normal Zeeman effect, an original single emission line splits into a triplet of three lines obeying selection rules:",
    "questionAr": "عند الرصد عمودياً على اتجاه المجال المغناطيسي في تأثير زيمان العادي، ينفصل الخط الطيفي الأصلي إلى ثلاثية تخضع لقواعد الاختيار:",
    "optionsEn": [
      "$\\Delta m_l = \\pm 2$ exclusively",
      "$\\Delta m_l = 0$ only, producing no frequency shift",
      "$\\Delta m_l = 0$ (line polarized parallel to $B$, $\\pi$) and $\\Delta m_l = \\pm 1$ (lines polarized perpendicular to $B$, $\\sigma$)",
      "$\\Delta m_l = \\pm 3$ corresponding to octupole radiation"
    ],
    "optionsAr": [
      "$\\Delta m_l = \\pm 2$ حصراً",
      "$\\Delta m_l = 0$ فقط دون حدوث أي إزاحة في التردد",
      "$\\Delta m_l = 0$ (خط مستقطب موازياً للمجال $\\pi$) و $\\Delta m_l = \\pm 1$ (خطان مستقطبان عمودياً على المجال $\\sigma$)",
      "$\\Delta m_l = \\pm 3$ المقابلة لإشعاع ثماني الأقطاب"
    ],
    "correctAnswer": "$\\Delta m_l = 0$ (line polarized parallel to $B$, $\\pi$) and $\\Delta m_l = \\pm 1$ (lines polarized perpendicular to $B$, $\\sigma$)",
    "correctIndex": 2,
    "hintEn": "Conservation of angular momentum requires the emitted spin-1 photon to carry $\\Delta m = 0, \\pm 1$.",
    "hintAr": "يتطلب بقاء كمية الحركة الزاوية أن يحمل الفوتون المنبعث ذو الغزل 1 كمية حركة $\\Delta m = 0, \\pm 1$.",
    "stepByStepSolutionEn": [
      "The central unshifted $\\pi$-line ($\\Delta m_l = 0$) is linearly polarized along $\\vec{B}$, while the two outer shifted $\\sigma$-lines ($\\Delta m_l = \\pm 1$) are polarized perpendicular to $\\vec{B}$."
    ],
    "stepByStepSolutionAr": [
      "الخط الأوسط غير المزاح $\\pi$ مستقطب خطياً موازياً لـ $\\vec{B}$، بينما الخطان الطرفيان المزاحان $\\sigma$ مستقطبان عمودياً على $\\vec{B}$."
    ],
    "teacherTipEn": "Astronomers use the Zeeman effect to measure magnetic fields on the surface of stars.",
    "teacherTipAr": "يستخدم علماء الفلك تأثير زيمان لقياس المجالات المغناطيسية على سطوح النجوم."
  },
  {
    "id": "egbac_phys_ch2_db_hots_12",
    "titleEn": "Bohr Correspondence Principle",
    "titleAr": "مبدأ التناظر لبور",
    "difficulty": "hots",
    "questionEn": "Bohr's Correspondence Principle postulates that for transitions between adjacent states with very large principal quantum numbers ($n \\to \\infty, \\Delta n = 1$):",
    "questionAr": "ينص مبدأ التناظر لبور على أنه عند الانتقال بين مستويين متتاليين ذوي رتب كم كبيرة جداً ($n \\to \\infty, \\Delta n = 1$):",
    "optionsEn": [
      "Quantum mechanics completely invalidates all Newtonian laws",
      "The atom collapses instantaneously under infinite centripetal force",
      "Planck's constant $h$ formally diverges to infinity",
      "The quantum transition frequency matches exactly the classical orbital frequency of revolution of the electron"
    ],
    "optionsAr": [
      "تبطل ميكانيكا الكم تماماً كافة قوانين نيوتن الكلاسيكية",
      "تنهار الذرة لحظياً تحت تأثير قوة مركزية لا نهائية",
      "يتباعد ثابت بلانك $h$ شكلياً نحو المالانهاية",
      "يتطابق تردد الانتقال الكمي تماماً مع تردد الدوران المداري الكلاسيكي للإلكترون"
    ],
    "correctAnswer": "The quantum transition frequency matches exactly the classical orbital frequency of revolution of the electron",
    "correctIndex": 3,
    "hintEn": "At macroscopic scales ($n \\gg 1$), quantum predictions must smoothly merge into classical physics.",
    "hintAr": "عند المقاييس العيانية الكبيرة ($n \\gg 1$)، يجب أن تندمج التنبؤات الكمية بسلاسة مع الفيزياء الكلاسيكية.",
    "stepByStepSolutionEn": [
      "$\\nu_{\\text{quantum}} = R_H c \\left(\\frac{1}{(n-1)^2} - \\frac{1}{n^2}\\right) \\approx \\frac{2 R_H c}{n^3}$. Classical frequency is $f_{\\text{orb}} = \\frac{v}{2\\pi r} = \\frac{2 R_H c}{n^3}$. They are identical in the limit!"
    ],
    "stepByStepSolutionAr": [
      "التردد الكمي يؤول إلى $\\frac{2 R_H c}{n^3}$، وهو يتطابق تماماً مع تردد الدوران الكلاسيكي $f_{\\text{orb}} = \\frac{v}{2\\pi r} = \\frac{2 R_H c}{n^3}$ عند $n \\to \\infty$."
    ],
    "teacherTipEn": "A profound philosophical milestone bridging classical and modern physics.",
    "teacherTipAr": "محطة فلسفية عميقة جسرت الفجوة بين الفيزياء الكلاسيكية والفيزياء الحديثة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_13",
    "titleEn": "Rydberg Atoms Extreme Properties",
    "titleAr": "الخصائص المتطرفة لذرات ريدبرج",
    "difficulty": "hots",
    "questionEn": "A 'Rydberg atom' is an atom excited to an exceptionally high principal quantum number (e.g., $n \\sim 100$). Such atoms exhibit extraordinary properties including:",
    "questionAr": "'ذرة ريدبرج' هي ذرة مثارة إلى رتبة كم رئيسية فائقة الارتفاع (مثل $n \\sim 100$). تتميز هذه الذرات بخصائص استثنائية تشمل:",
    "optionsEn": [
      "Gigantic atomic radius ($r \\propto n^2 \\sim 1\\text{ }\\mu\\text{m}$, comparable to bacteria) and extreme sensitivity to external electric fields",
      "Zero electrical polarizability and inability to absorb microwaves",
      "Infinite lifetime without ever decaying back to the ground state",
      "Conversion of the electron into a heavy muon"
    ],
    "optionsAr": [
      "نصف قطر ذري عملاق ($r \\propto n^2 \\sim 1\\text{ }\\mu\\text{m}$ يضاهي حجم البكتيريا) وحساسية فائقة للمجالات الكهربية الخارجية",
      "قابلية استقطاب كهربي منعدمة وعجز تام عن امتصاص الموجات الميكروية",
      "عمر زمني لا نهائي دون القدرة على الهبوط للمستوى الأرضي أبداً",
      "تحول الإلكترون تلقائياً إلى ميون ثقيل"
    ],
    "correctAnswer": "Gigantic atomic radius ($r \\propto n^2 \\sim 1\\text{ }\\mu\\text{m}$, comparable to bacteria) and extreme sensitivity to external electric fields",
    "correctIndex": 0,
    "hintEn": "Radius scales as $n^2$: for $n=100$, $r = 10000 a_0 \\approx 0.53\\text{ }\\mu\\text{m}$.",
    "hintAr": "يتناسب نصف القطر مع $n^2$: عند $n=100$ يكون $r = 10000 a_0 \\approx 0.53\\text{ }\\mu\\text{m}$.",
    "stepByStepSolutionEn": [
      "Because the valence electron is so far from the core, its binding energy is only $1.36\\text{ meV}$, and polarizability scales as $n^7$, making it a phenomenal quantum sensor."
    ],
    "stepByStepSolutionAr": [
      "لبعد الإلكترون الشديد عن النواة تكون طاقة ارتباطه $1.36\\text{ meV}$ فقط وتتناسب قابليته للاستقطاب مع $n^7$ مما يجعله مجساً كمياً خارقاً."
    ],
    "teacherTipEn": "Rydberg atoms are used today to build neutral-atom quantum computers.",
    "teacherTipAr": "تستخدم ذرات ريدبرج اليوم لبناء حواسيب الكم القائمة على الذرات المتعادلة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_14",
    "titleEn": "Lamb Shift and QED Discovery",
    "titleAr": "انزياح لام واكتشاف الكهروديناميكا الكمية",
    "difficulty": "hots",
    "questionEn": "The Lamb shift (measured by Willis Lamb in 1947) is a tiny energy difference ($\\approx 1057\\text{ MHz}$) between the $2S_{1/2}$ and $2P_{1/2}$ states of hydrogen. Dirac theory predicted they should be strictly degenerate. The Lamb shift is caused by:",
    "questionAr": "انزياح لام (الذي قاسه ويليس لام عام 1947) هو فرق طاقة دقيق ($\\approx 1057\\text{ MHz}$) بين مستويي $2S_{1/2}$ و $2P_{1/2}$ للهيدروجين تنبأت نظرية ديراك بتطابقهما. ينشأ انزياح لام عن:",
    "optionsEn": [
      "Gravitational attraction between the orbiting electron and the proton",
      "Quantum fluctuations of the electromagnetic vacuum (vacuum polarization and electron self-energy)",
      "Classical Doppler broadening caused by thermal room vibrations",
      "Defects in the glass spectroscope prism"
    ],
    "optionsAr": [
      "التجاذب التثاقلي بين الإلكترون الدائر والبروتون",
      "التقلبات الكمية للفراغ الكهرومغناطيسي (استقطاب الفراغ وطاقة الإلكترون الذاتية)",
      "الاتساع الحراري الكلاسيكي لدوبلر الناتج عن اهتزازات الغرفة",
      "عيوب في المنشور الزجاجي للمطياف المستخدم"
    ],
    "correctAnswer": "Quantum fluctuations of the electromagnetic vacuum (vacuum polarization and electron self-energy)",
    "correctIndex": 1,
    "hintEn": "Even in empty space, virtual photon-electron fluctuations perturb atomic energy levels.",
    "hintAr": "حتى في الفضاء الفارغ، تؤدي تقلبات الفوتونات والإلكترونات الافتراضية لاضطراب طاقات المستويات الذرية.",
    "stepByStepSolutionEn": [
      "Interaction with zero-point vacuum fluctuations smears the electron position, shifting the $s$-state (which overlaps the nucleus) relative to the $p$-state."
    ],
    "stepByStepSolutionAr": [
      "تفاعل الإلكترون مع تقلبات نقطة الصفر يزيح موقعه، رافعاً طاقة المستوى $s$ المتداخل مع النواة بالنسبة للمستوى $p$."
    ],
    "teacherTipEn": "This discovery led directly to modern renormalized Quantum Electrodynamics (QED) by Feynman, Schwinger, and Tomonaga.",
    "teacherTipAr": "قاد هذا الاكتشاف مباشرة إلى تأسيس الكهروديناميكا الكمية الحديثة على يد فاينمان وشوينجر وتوموناجا."
  },
  {
    "id": "egbac_phys_ch2_db_hots_15",
    "titleEn": "Hyperfine 21 cm Hydrogen Line",
    "titleAr": "خط الهيدروجين فائق الدقة 21 سم",
    "difficulty": "hots",
    "questionEn": "The famous astrophysical $21\\text{ cm}$ radio line ($\\nu \\approx 1420.4\\text{ MHz}$) emitted by neutral atomic hydrogen in interstellar space arises from:",
    "questionAr": "ينشأ خط الراديو الفلكي الشهير ذو الطول الموجي $21\\text{ cm}$ ($\\nu \\approx 1420.4\\text{ MHz}$) المنبعث من الهيدروجين الذري المتعادل في الفضاء بين النجمي عن:",
    "optionsEn": [
      "A transition from $n=2$ to $n=1$ in cold interstellar molecular gas",
      "Thermal blackbody radiation of interstellar cosmic dust at $3\\text{ K}$",
      "The hyperfine transition between parallel and anti-parallel spin states of the electron and proton in the $n=1$ ground state",
      "Relativistic synchrotron emission around supermassive black holes"
    ],
    "optionsAr": [
      "انتقال إلكتروني من المستوى $n=2$ إلى $n=1$ في غاز جزيئي بارد",
      "إشعاع الجسم الأسود الحراري لغبار الفضاء الكوني عند $3\\text{ K}$",
      "الانتقال فائق الدقة بين حالتي الغزل المتوازي والمتعاكس للإلكترون والبروتون في المستوى الأرضي $n=1$",
      "إشعاع سينكروتروني نسبي حول الثقوب السوداء فائقة الكتلة"
    ],
    "correctAnswer": "The hyperfine transition between parallel and anti-parallel spin states of the electron and proton in the $n=1$ ground state",
    "correctIndex": 2,
    "hintEn": "Both the electron and proton possess intrinsic spin $\\frac{1}{2}\\hbar$.",
    "hintAr": "يمتلك كل من الإلكترون والبروتون غزل ذري ذاتي مقداره $\\frac{1}{2}\\hbar$.",
    "stepByStepSolutionEn": [
      "When the electron spin flips from parallel ($\\uparrow\\uparrow$, higher energy) to antiparallel ($\\uparrow\\downarrow$, lower energy), it emits a photon with $\\Delta E \\approx 5.87 \\times 10^{-6}\\text{ eV}$, corresponding to $\\lambda = 21.1\\text{ cm}$."
    ],
    "stepByStepSolutionAr": [
      "عندما ينقلب غزل الإلكترون من الموازي ($\\uparrow\\uparrow$) إلى المتعاكس ($\\uparrow\\downarrow$) يشع فوتوناً بطاقة $\\Delta E \\approx 5.87 \\times 10^{-6}\\text{ eV}$ تقابل طول موجة $\\lambda = 21.1\\text{ cm}$."
    ],
    "teacherTipEn": "Radio astronomers use this line to map the spiral arms of the Milky Way through obscuring dust clouds.",
    "teacherTipAr": "يستخدم علماء الفلك الراديوي هذا الخط لرسم خريطة الأذرع الحلزونية لمجرتنا مخترقين سحب الغبار المعتمة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_16",
    "titleEn": "Positronium Energy Levels",
    "titleAr": "مستويات طاقة ذرة البوزيترونيوم",
    "difficulty": "hots",
    "questionEn": "Positronium is an exotic atom formed by a bound electron ($e^-$) and its antimatter positron ($e^+$). Because the two particles have identical masses ($m_{e^-} = m_{e^+}$), its reduced mass is $\\mu = m_e / 2$. Consequently, its energy levels $E_n$ compare to hydrogen as:",
    "questionAr": "البوزيترونيوم ذرة غريبة تتكون من إلكترون ($e^-$) مرتبط بقرينه من المادة المضادة البوزيترون ($e^+$). ولتطابق كتلتيهما تكون الكتلة المختزلة $\\mu = m_e / 2$. وعليه، فإن مستويات طاقتها $E_n$ مقارنة بالهيدروجين تكون:",
    "optionsEn": [
      "$E_n = -2 \\times \\frac{13.6}{n^2}\\text{ eV} = -\\frac{27.2}{n^2}\\text{ eV}$ (double the hydrogen energies)",
      "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$ (identical to hydrogen)",
      "$E_n = 0$ because matter and antimatter immediately cancel",
      "$E_n = -\\frac{13.6}{2 n^2}\\text{ eV} = -\\frac{6.8}{n^2}\\text{ eV}$ (half the hydrogen energies)"
    ],
    "optionsAr": [
      "$E_n = -2 \\times \\frac{13.6}{n^2}\\text{ eV} = -\\frac{27.2}{n^2}\\text{ eV}$ (ضعف طاقات الهيدروجين)",
      "$E_n = -\\frac{13.6}{n^2}\\text{ eV}$ (مطابقة تماماً للهيدروجين)",
      "$E_n = 0$ لأن المادة والمادة المضادة تلغيان بعضهما فورياً",
      "$E_n = -\\frac{13.6}{2 n^2}\\text{ eV} = -\\frac{6.8}{n^2}\\text{ eV}$ (نصف طاقات الهيدروجين)"
    ],
    "correctAnswer": "$E_n = -\\frac{13.6}{2 n^2}\\text{ eV} = -\\frac{6.8}{n^2}\\text{ eV}$ (half the hydrogen energies)",
    "correctIndex": 3,
    "hintEn": "Rydberg energy is directly proportional to reduced mass $\\mu$.",
    "hintAr": "طاقة ريدبرج تتناسب طردياً مع الكتلة المختزلة $\\mu$.",
    "stepByStepSolutionEn": [
      "$\\mu = \\frac{m_e \\cdot m_e}{m_e + m_e} = \\frac{m_e}{2}$. Thus $E_n(\\text{Ps}) = \\frac{1}{2} E_n(\\text{H}) = -\\frac{6.8}{n^2}\\text{ eV}$. The ground state binding energy is $-6.8\\text{ eV}$."
    ],
    "stepByStepSolutionAr": [
      "$\\mu = \\frac{m_e \\cdot m_e}{m_e + m_e} = \\frac{m_e}{2}$، وبالتالي $E_n(\\text{Ps}) = \\frac{1}{2} E_n(\\text{H}) = -\\frac{6.8}{n^2}\\text{ eV}$، وتبلغ طاقة المستوى الأرضي $-6.8\\text{ eV}$."
    ],
    "teacherTipEn": "All spectral wavelengths in positronium are exactly double those in hydrogen.",
    "teacherTipAr": "جميع الأطوال الموجية لطيف البوزيترونيوم هي ضعف نظيرتها في الهيدروجين تماماً."
  },
  {
    "id": "egbac_phys_ch2_db_hots_17",
    "titleEn": "Muonic Atom Orbit Contraction and X-Ray Cascade",
    "titleAr": "انكماش مدارات الذرة الميونية وشلال الأشعة السينية",
    "difficulty": "hots",
    "questionEn": "In a muonic atom, a negative muon ($\\mu^-$, mass $m_\\mu \\approx 207 m_e$) replaces the orbital electron. The radius of the first Bohr orbit ($n=1$) and its binding energy compare to ordinary hydrogen as:",
    "questionAr": "في الذرة الميونية، يحل ميون سالب ($\\mu^-$ كتلته $m_\\mu \\approx 207 m_e$) محل الإلكترون المداري. يقارن نصف قطر مدار بور الأول ($n=1$) وطاقة ارتباطه بنظيرهما في الهيدروجين العادي بـ:",
    "optionsEn": [
      "Radius is 207 times smaller ($r_1 \\approx a_0 / 207$), and binding energy is 207 times larger ($E_1 \\approx -2.8\\text{ keV}$)",
      "Radius is 207 times larger, and energy is 207 times smaller",
      "Radius and energy are identical because both carry charge $-e$",
      "Radius shrinks to zero, causing instantaneous nuclear annihilation"
    ],
    "optionsAr": [
      "نصف القطر أصغر بـ 207 مرات ($r_1 \\approx a_0 / 207$)، وطاقة الارتباط أكبر بـ 207 مرات ($E_1 \\approx -2.8\\text{ keV}$)",
      "نصف القطر أكبر بـ 207 مرات، وطاقة الارتباط أصغر بـ 207 مرات",
      "نصف القطر وطاقة الارتباط متطابقان لأن لكليهما نفس الشحنة $-e$",
      "ينكمش نصف القطر إلى الصفر مسبباً فناءً نووياً لحظياً"
    ],
    "correctAnswer": "Radius is 207 times smaller ($r_1 \\approx a_0 / 207$), and binding energy is 207 times larger ($E_1 \\approx -2.8\\text{ keV}$)",
    "correctIndex": 0,
    "hintEn": "Bohr radius $r \\propto 1/m$, and energy $E \\propto m$.",
    "hintAr": "نصف قطر بور $r \\propto 1/m$، بينما الطاقة $E \\propto m$.",
    "stepByStepSolutionEn": [
      "$r_1 = \\frac{a_0}{207} \\approx 2.56 \\times 10^{-13}\\text{ m} = 256\\text{ fm}$. The muon orbits thousands of times closer, plunging deep into the nuclear charge distribution and emitting energetic X-rays."
    ],
    "stepByStepSolutionAr": [
      "$r_1 = \\frac{a_0}{207} \\approx 256\\text{ fm}$، فيدور الميون على مسافة أقرب بآلاف المرات متغلغلاً داخل شحنة النواة ومشعاً أشعة سينية فائقة الطاقة."
    ],
    "teacherTipEn": "Physicists use muonic X-rays to map nuclear charge radii with femtometer precision.",
    "teacherTipAr": "يستخدم الفيزيائيون الأشعة السينية الميونية لقياس أنصاف أقطار النوى بدقة الفيمتومتر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_18",
    "titleEn": "Hydrogen-Like Uranium K-Alpha Calculation",
    "titleAr": "حساب طاقة فوتون كي-ألفا للهيدروجين الشبيه باليورانيوم",
    "difficulty": "hots",
    "questionEn": "In hydrogen-like Uranium ($\\text{U}^{91+}, Z=92$), the $n=2 \\to 1$ ($K_\\alpha$) transition photon energy without relativistic corrections is roughly:",
    "questionAr": "في أيون اليورانيوم الشبيه بالهيدروجين ($\\text{U}^{91+}, Z=92$)، تبلغ طاقة فوتون انتقال $n=2 \\to 1$ ($K_\\alpha$) دون التصحيحات النسبية حوالي:",
    "optionsEn": [
      "$10.2\\text{ keV}$",
      "$86.3\\text{ keV} (\\approx 10.2\\text{ eV} \\times 92^2)$",
      "$938\\text{ MeV}$",
      "$0.86\\text{ keV}$"
    ],
    "optionsAr": [
      "$10.2\\text{ keV}$",
      "$86.3\\text{ keV} (\\approx 10.2\\text{ eV} \\times 92^2)$",
      "$938\\text{ MeV}$",
      "$0.86\\text{ keV}$"
    ],
    "correctAnswer": "$86.3\\text{ keV} (\\approx 10.2\\text{ eV} \\times 92^2)$",
    "correctIndex": 1,
    "hintEn": "$\\Delta E = 10.2\\text{ eV} \\times Z^2$ with $Z=92$.",
    "hintAr": "$\\Delta E = 10.2\\text{ eV} \\times Z^2$ مع $Z=92$.",
    "stepByStepSolutionEn": [
      "$\\Delta E = 10.2 \\times (92)^2 = 10.2 \\times 8464 \\approx 86333\\text{ eV} \\approx 86.3\\text{ keV}$ (Hard X-ray / Gamma regime)."
    ],
    "stepByStepSolutionAr": [
      "$\\Delta E = 10.2 \\times (92)^2 = 10.2 \\times 8464 \\approx 86333\\text{ eV} \\approx 86.3\\text{ keV}$ (أشعة سينية قاسية جداً)."
    ],
    "teacherTipEn": "At such high $Z$, relativistic and QED effects become massive (over $10\\text{ keV}$ shifts).",
    "teacherTipAr": "عند هذه القيم العالية لـ $Z$ تصبح التأثيرات النسبية والكهروديناميكية الكمية بالغة الضخامة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_19",
    "titleEn": "Extinction Rules in X-Ray Powder Diffraction",
    "titleAr": "قواعد الإخماد في حيود الأشعة السينية للمساحيق",
    "difficulty": "hots",
    "questionEn": "In X-ray powder diffraction of a face-centered cubic (FCC, such as copper or aluminum) crystal lattice, diffraction peaks from planes $(h,k,l)$ appear only when:",
    "questionAr": "في حيود الأشعة السينية لمسحوق بلورة ذات شبكة مكعبة مركزية الأوجه (FCC كالنحاس أو الألومنيوم)، تظهر قمم الحيود من المستويات $(h,k,l)$ فقط عندما:",
    "optionsEn": [
      "The sum $(h + k + l)$ equals an odd prime number",
      "All three indices are strictly equal to zero",
      "The Miller indices $h, k, l$ are all unmixed (either all even or all odd)",
      "The indices follow a Fibonacci sequence"
    ],
    "optionsAr": [
      "يكون مجموع $(h + k + l)$ عدداً أولياً فردياً",
      "تكون المعاملات الثلاثة مساوية للصفر تماماً",
      "تكون معاملات ميلر $h, k, l$ غير مختلطة (إما جميعها زوجية أو جميعها فردية)",
      "تتبع المعاملات متتالية فيبوناتشي"
    ],
    "correctAnswer": "The Miller indices $h, k, l$ are all unmixed (either all even or all odd)",
    "correctIndex": 2,
    "hintEn": "Structure factor for FCC: $F_{hkl} = f [1 + (-1)^{h+k} + (-1)^{k+l} + (-1)^{h+l}]$.",
    "hintAr": "عامل البنية لشبكة FCC: $F_{hkl} = f [1 + (-1)^{h+k} + (-1)^{k+l} + (-1)^{h+l}]$.",
    "stepByStepSolutionEn": [
      "If indices are mixed (e.g. 100 or 210), phase cancellation produces $F_{hkl} = 0$ (extinction). Allowed reflections are 111, 200, 220, 311, 222."
    ],
    "stepByStepSolutionAr": [
      "إذا اختلطت المعاملات (مثل 100 أو 210) يحدث تلاشٍ طوري يجعل عامل البنية $F = 0$، والانعكاسات المسموحة هي 111، 200، 220، 311، 222."
    ],
    "teacherTipEn": "This pattern allows crystallographers to unambiguously identify lattice Bravais types.",
    "teacherTipAr": "يتيح هذا النمط لعلماء البلورات تحديد نوع شبكة برافيه بشكل قاطع."
  },
  {
    "id": "egbac_phys_ch2_db_hots_20",
    "titleEn": "X-Ray Fluorescence (XRF) Chemical Analysis",
    "titleAr": "التحليل الكيميائي بفلورية الأشعة السينية (XRF)",
    "difficulty": "hots",
    "questionEn": "In X-ray fluorescence (XRF) spectrometry, a sample is bombarded with primary X-rays, causing it to emit characteristic secondary X-rays. This technique allows non-destructive analysis because:",
    "questionAr": "في مطيافية فلورية الأشعة السينية (XRF)، تُقصف العينة بأشعة سينية أولية فتصدر أشعة سينية ثانوية مميزة. تتيح هذه التقنية تحليلاً غير إتلافي لأن:",
    "optionsEn": [
      "It causes complete nuclear disintegration of the target sample",
      "All elements emit identical monochromatic wavelengths regardless of $Z$",
      "It requires heating the sample to molten plasma at $10000^\\circ\\text{C}$",
      "The energies of emitted characteristic peaks directly identify the elements present, and peak areas reveal quantitative elemental concentrations"
    ],
    "optionsAr": [
      "تحدث تفككاً نووياً كاملاً للعينة المدروسة",
      "جميع العناصر تشع نفس الطول الموجي أحادي اللون بغض النظر عن $Z$",
      "تتطلب صهر العينة إلى بلازما عند $10000^\\circ\\text{C}$",
      "طاقات القمم المميزة المنبعثة تحدد نوع العناصر الموجودة مباشرة، ومساحة القمم تكشف تركيزاتها بدقة"
    ],
    "correctAnswer": "The energies of emitted characteristic peaks directly identify the elements present, and peak areas reveal quantitative elemental concentrations",
    "correctIndex": 3,
    "hintEn": "Every element has unique atomic energy levels governed by Moseley's law.",
    "hintAr": "كل عنصر يمتلك مستويات طاقة فريدة تحكمها شحنة نواته وقانون موزلي.",
    "stepByStepSolutionEn": [
      "XRF provides instantaneous qualitative and quantitative elemental assay without dissolving or altering precious museum artifacts or geological rocks."
    ],
    "stepByStepSolutionAr": [
      "توفر تقنية XRF تحليلاً كيفياً وكمياً فورياً للعناصر دون إتلاف التحف الأثرية أو إذابة الصخور الجيولوجية."
    ],
    "teacherTipEn": "Widely used in archaeology, metallurgy, and environmental monitoring.",
    "teacherTipAr": "تستخدم بكثافة في علم الآثار، وفحص المعادن، والرقابة البيئية."
  },
  {
    "id": "egbac_phys_ch2_db_hots_21",
    "titleEn": "Hounsfield Unit (HU) Calibration in CT Scans",
    "titleAr": "معايرة مقياس وحدات هاونسفيلد في التصوير المقطعي",
    "difficulty": "hots",
    "questionEn": "In medical Computed Tomography (CT), the radio-density is measured in Hounsfield Units ($\\text{HU}$). By international calibration definition, the CT numbers for pure water and air are:",
    "questionAr": "في التصوير الطبي المقطعي المحوسب (CT)، تقاس الكثافة الإشعاعية بوحدات هاونسفيلد ($\\text{HU}$). ووفق المعايرة الدولية، فإن أرقام CT للماء النقي والهواء هي:",
    "optionsEn": [
      "$\\text{Water} = 0\\text{ HU}$, $\\text{Air} = -1000\\text{ HU}$",
      "$\\text{Water} = 100\\text{ HU}$, $\\text{Air} = 0\\text{ HU}$",
      "$\\text{Water} = -1000\\text{ HU}$, $\\text{Air} = +1000\\text{ HU}$",
      "$\\text{Water} = 0\\text{ HU}$, $\\text{Air} = 0\\text{ HU}$"
    ],
    "optionsAr": [
      "$\\text{Water} = 0\\text{ HU}$, $\\text{Air} = -1000\\text{ HU}$",
      "$\\text{Water} = 100\\text{ HU}$, $\\text{Air} = 0\\text{ HU}$",
      "$\\text{Water} = -1000\\text{ HU}$, $\\text{Air} = +1000\\text{ HU}$",
      "$\\text{Water} = 0\\text{ HU}$, $\\text{Air} = 0\\text{ HU}$"
    ],
    "correctAnswer": "$\\text{Water} = 0\\text{ HU}$, $\\text{Air} = -1000\\text{ HU}$",
    "correctIndex": 0,
    "hintEn": "$\\text{HU} = 1000 \\times \\frac{\\mu - \\mu_{\\text{water}}}{\\mu_{\\text{water}} - \\mu_{\\text{air}}}$.",
    "hintAr": "$\\text{HU} = 1000 \\times \\frac{\\mu - \\mu_{\\text{water}}}{\\mu_{\\text{water}} - \\mu_{\\text{air}}}$.",
    "stepByStepSolutionEn": [
      "Since $\\mu_{\\text{air}} \\approx 0$, $\\text{HU} = 1000 \\times (\\mu - \\mu_w)/\\mu_w$. Water gives $0\\text{ HU}$, air gives $-1000\\text{ HU}$, while dense cortical bone reaches $+1000$ to $+3000\\text{ HU}$."
    ],
    "stepByStepSolutionAr": [
      "بما أن توهين الهواء شبه معدوم، يعطي الماء $0\\text{ HU}$ والهواء $-1000\\text{ HU}$، بينما يصل العظم القشري الكثيف إلى $+1000$ إلى $+3000\\text{ HU}$."
    ],
    "teacherTipEn": "Sir Godfrey Hounsfield shared the 1979 Nobel Prize for inventing CT.",
    "teacherTipAr": "نال السير جودفري هاونسفيلد جائزة نوبل عام 1979 لاختراعه التصوير المقطعي."
  },
  {
    "id": "egbac_phys_ch2_db_hots_22",
    "titleEn": "Dual-Energy CT Material Decomposition",
    "titleAr": "التحليل المادي في التصوير المقطعي ثنائي الطاقة",
    "difficulty": "hots",
    "questionEn": "Dual-energy CT scanners acquire projections simultaneously at two different tube voltages (typically $80\\text{ kVp}$ and $140\\text{ kVp}$). This capability allows clinical systems to:",
    "questionAr": "تلتقط أجهزة التصوير المقطعي ثنائية الطاقة المساقط الإشعاعية بجهدين مختلفين في آن واحد ($80\\text{ kVp}$ و $140\\text{ kVp}$). تتيح هذه القدرة للأنظمة السريرية:",
    "optionsEn": [
      "Double the spatial resolution down to the sub-atomic Angstrom scale",
      "Differentiate materials with identical electron densities but different atomic numbers (e.g., distinguishing iodine contrast or uric acid gout stones from calcium bone)",
      "Completely eliminate patient ionizing radiation dose to zero",
      "Measure gravitational waves produced by the human heartbeat"
    ],
    "optionsAr": [
      "مضاعفة دقة التمييز المكاني لتصل إلى مقياس الأنجستروم دون الذري",
      "التمييز بين المواد ذات الكثافة الإلكترونية المتطابقة ولكن بأعداد ذرية مختلفة (مثل تمييز صبغة اليود أو حصوات حمض اليوريك عن عظام الكالسيوم)",
      "إلغاء جرعة الإشعاع المؤين على المريض تماماً لتصل للصفر",
      "قياس موجات الجاذبية الصادرة عن نبضات القلب البشري"
    ],
    "correctAnswer": "Differentiate materials with identical electron densities but different atomic numbers (e.g., distinguishing iodine contrast or uric acid gout stones from calcium bone)",
    "correctIndex": 1,
    "hintEn": "Photoelectric absorption scales with $Z^3$, while Compton scattering depends only on electron density.",
    "hintAr": "الامتصاص الكهروضوئي يتناسب مع $Z^3$، بينما يعتمد تشتت كومتون فقط على الكثافة الإلكترونية.",
    "stepByStepSolutionEn": [
      "By acquiring data at low and high photon energies, systems solve a 2x2 linear system to separate photoelectric and Compton contributions, isolating specific elements like Iodine ($Z=53$) or Calcium ($Z=20$)."
    ],
    "stepByStepSolutionAr": [
      "بجمع البيانات عند طاقتين، يحل النظام معادلتين لفصل مساهمة كومتون عن الامتصاص الكهروضوئي، مما يميز عناصر كاليود ($Z=53$) عن الكالسيوم ($Z=20$)."
    ],
    "teacherTipEn": "A major revolution in modern diagnostic radiology.",
    "teacherTipAr": "ثورة تقنية كبرى في الأشعة التشخيصية الحديثة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_23",
    "titleEn": "Quantum Mottle and Radiation Dose Tradeoff",
    "titleAr": "الموازنة بين التشويش الحبيبي الكمي والجرعة الإشعاعية",
    "difficulty": "hots",
    "questionEn": "In digital radiography and CT, 'quantum mottle' (statistical noise) is inversely proportional to the square root of the number of detected photons ($N$). To reduce image noise by half ($50\\%$), the radiation dose delivered to the patient must be:",
    "questionAr": "في التصوير الرقمي بالأشعة السينية، يتناسب 'التشويش الحبيبي الكمي' عكسياً مع الجذر التربيعي لعدد الفوتونات المرصودة ($N$). لتقليل تشويش الصورة إلى النصف ($50\\%$)، يجب أن تصبح الجرعة الإشعاعية للمريض:",
    "optionsEn": [
      "Multiplied by 2 ($200\\%$ of original dose)",
      "Reduced by half ($50\\%$ of original dose)",
      "Multiplied by 4 ($400\\%$ of original dose)",
      "Unchanged because noise is independent of photon count"
    ],
    "optionsAr": [
      "مضروبة في 2 ($200\\%$ من الجرعة الأصلية)",
      "مخفضة إلى النصف ($50\\%$ من الجرعة الأصلية)",
      "مضروبة في 4 ($400\\%$ من الجرعة الأصلية)",
      "دون تغيير لأن التشويش مستقل عن عدد الفوتونات"
    ],
    "correctAnswer": "Multiplied by 4 ($400\\%$ of original dose)",
    "correctIndex": 2,
    "hintEn": "Noise $\\sigma / N = 1/\\sqrt{N}$. To halve the relative noise, $N$ must increase 4 times.",
    "hintAr": "التشويش النسبي $\\sigma / N = 1/\\sqrt{N}$. ولتنصيف التشويش يجب مضاعفة عدد الفوتونات 4 مرات.",
    "stepByStepSolutionEn": [
      "Since patient dose is directly proportional to photon flux $N$, reducing noise by a factor of 2 requires 4 times the radiation dose ($D \\propto 1/\\text{Noise}^2$)."
    ],
    "stepByStepSolutionAr": [
      "بما أن الجرعة تتناسب طردياً مع تدفق الفوتونات $N$، فإن خفض التشويش إلى النصف يتطلب رفع الجرعة إلى 4 أضعاف."
    ],
    "teacherTipEn": "Radiologists strictly follow the ALARA principle (As Low As Reasonably Achievable).",
    "teacherTipAr": "يلتزم أطباء الأشعة بمبدأ ALARA لتقليل الجرعة لأدنى حد ممكن طبياً."
  },
  {
    "id": "egbac_phys_ch2_db_hots_24",
    "titleEn": "Synchrotron Radiation Characteristics",
    "titleAr": "خصائص إشعاع السينكروترون",
    "difficulty": "hots",
    "questionEn": "Synchrotron radiation emitted by ultra-relativistic electrons accelerated in curved magnetic storage rings differs from conventional Coolidge tube X-rays by having:",
    "questionAr": "يختلف إشعاع السينكروترون الصادر عن إلكترونات فائقة النسبية معجلة في مسارات منحنية بمجالات مغناطيسية عن أشعة أنبوب كولدج التقليدية بامتلاكه:",
    "optionsEn": [
      "Zero photon energy and purely acoustic wave nature",
      "Isotropic emission equally in all $4\\pi$ steradians like an ordinary light bulb",
      "Emission restricted strictly to the AM radio frequency band",
      "Collimated emission with brilliance up to a billion times higher, full continuous tunability, and linear polarization"
    ],
    "optionsAr": [
      "طاقة فوتونات منعدمة وطبيعة موجية صوتية محضة",
      "انبعاثاً متناثراً بالتساوي في كافة الاتجاهات الفضائية كالمصباح العادي",
      "انبعاثاً مقتصراً حصراً على حزمة موجات الراديو AM",
      "حزمة متوازية فائقة اللمعان تفوق الأنابيب بمليار مرة، وقابلية كاملة لضبط الطول الموجي، واستقطاباً خطياً"
    ],
    "correctAnswer": "Collimated emission with brilliance up to a billion times higher, full continuous tunability, and linear polarization",
    "correctIndex": 3,
    "hintEn": "Relativistic beaming concentrates emission into a narrow cone of opening angle $\\theta \\sim 1/\\gamma$.",
    "hintAr": "التركيز النسبي يحصر الإشعاع في مخروط فائق الضيق زاوية انفراجه $\\theta \\sim 1/\\gamma$.",
    "stepByStepSolutionEn": [
      "High electron energy ($E \\sim \\text{several GeV}$) produces intensely bright, coherent, tunable X-ray beams used to solve protein structures and nanotechnology devices."
    ],
    "stepByStepSolutionAr": [
      "طاقة الإلكترونات العالية (عدة جيجا إلكترون فولت) تنتج حزماً سينية فائقة اللمعان والترابط تستخدم لكشف تراكيب البروتينات وتطبيقات النانو."
    ],
    "teacherTipEn": "Facilities like the ESRF and Diamond Light Source are premier world research hubs.",
    "teacherTipAr": "تعد مصادر السينكروترون العالمية من أهم منشآت الأبحاث العلمية المتقدمة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_25",
    "titleEn": "Coolidge Tube High-Voltage Ripple Effect",
    "titleAr": "تأثير تموج الجهد العالي لأنبوب كولدج",
    "difficulty": "hots",
    "questionEn": "If the high-voltage power supply of a Coolidge tube has significant ripple such that the potential oscillates between $40\\text{ kV}$ and $50\\text{ kV}$, the cutoff wavelength $\\lambda_{\\min}$ of the continuous spectrum will:",
    "questionAr": "إذا كان مصدر الجهد العالي لأنبوب كولدج يعاني من تموج ملحوظ بحيث يتذبذب الجهد بين $40\\text{ kV}$ و $50\\text{ kV}$، فإن أقل طول موجي $\\lambda_{\\min}$ للطيف المستمر سوف:",
    "optionsEn": [
      "Oscillate periodically between $0.248\\text{ \\AA}$ (at peak voltage) and $0.31\\text{ \\AA}$ (at trough voltage)",
      "Remain locked permanently at $0.62\\text{ \\AA}$",
      "Shift to zero wavelength during the negative voltage swing",
      "Eliminate all characteristic lines permanently"
    ],
    "optionsAr": [
      "يتذبذب دورياً بين $0.248\\text{ \\AA}$ (عند قمة الجهد) و $0.31\\text{ \\AA}$ (عند قاع الجهد)",
      "يظل مقيداً بصورة دائمة عند $0.62\\text{ \\AA}$",
      "ينحدر إلى الطول الموجي صفر خلال التأرجح السالب للجهد",
      "يؤدي إلى اختفاء جميع الخطوط المميزة بشكل نهائي"
    ],
    "correctAnswer": "Oscillate periodically between $0.248\\text{ \\AA}$ (at peak voltage) and $0.31\\text{ \\AA}$ (at trough voltage)",
    "correctIndex": 0,
    "hintEn": "Instantaneous cutoff wavelength tracks instantaneous voltage: $\\lambda_{\\min}(t) = hc / [e V(t)]$.",
    "hintAr": "طول موجة الحافة اللحظي يتبع الجهد اللحظي: $\\lambda_{\\min}(t) = hc / [e V(t)]$.",
    "stepByStepSolutionEn": [
      "At peak voltage $50\\text{ kV}$, $\\lambda_{\\min} = 12400 / 50000 = 0.248\\text{ \\AA}$. At trough $40\\text{ kV}$, $\\lambda_{\\min} = 12400 / 40000 = 0.310\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "عند قمة الجهد $50\\text{ kV}$ نجد $\\lambda_{\\min} = 0.248\\text{ \\AA}$، وعند القاع $40\\text{ kV}$ نجد $\\lambda_{\\min} = 0.310\\text{ \\AA}$."
    ],
    "teacherTipEn": "Modern medical generators use high-frequency inverter circuits to achieve nearly ripple-free constant potential.",
    "teacherTipAr": "تستخدم المولدات الطبية الحديثة دوائر عاكسة عالية التردد لتوليد جهد مستمر فائق الاستقرار دون تموج."
  },
  {
    "id": "egbac_phys_ch2_db_hots_26",
    "titleEn": "EXAFS Oscillations Physical Mechanism",
    "titleAr": "الآلية الفيزيائية لتذبذبات إكسافس (EXAFS)",
    "difficulty": "hots",
    "questionEn": "In Extended X-ray Absorption Fine Structure (EXAFS), oscillations in absorption cross-section beyond the $K$-edge arise physically from:",
    "questionAr": "في مطيافية الامتصاص الدقيق للأشعة السينية (EXAFS)، تنشأ التذبذبات في مقطع الامتصاص بعد حافة $K$ فيزيائياً عن:",
    "optionsEn": [
      "Radioactive beta decay of the absorber nucleus",
      "Quantum interference between the outgoing photoelectron de Broglie wave and waves backscattered from neighboring coordination atoms",
      "Gravitational micro-lensing inside the crystal unit cell",
      "Thermal expansion of the copper anode support"
    ],
    "optionsAr": [
      "التحلل الإشعاعي لبيتا داخل نواة الذرة الممتصة",
      "التداخل الكمي بين موجة دي براولي للإلكترون الكهروضوئي المنطلق والموجات المرتدة من الذرات المجاورة",
      "تعديس تثاقلي مجهري داخل الخلية الأولية للبلورة",
      "التمدد الحراري لحامل المصعد النحاسي"
    ],
    "correctAnswer": "Quantum interference between the outgoing photoelectron de Broglie wave and waves backscattered from neighboring coordination atoms",
    "correctIndex": 1,
    "hintEn": "The ejected photoelectron behaves as an outgoing spherical wave that backscatters off adjacent atomic shells.",
    "hintAr": "يتصرف الإلكترون الكهروضوئي كموجة كروية صادرة تتشتت مرتكزة على سحب الذرات المجاورة.",
    "stepByStepSolutionEn": [
      "Constructive and destructive interference at the central atom modulates the absorption probability as a function of energy, revealing the exact bond distances and coordination numbers."
    ],
    "stepByStepSolutionAr": [
      "يعدل التداخل البناء والهدام عند الذرة المركزية احتمالية الامتصاص كدالة في الطاقة، كاشفاً بدقة أطوال الروابط وأعداد التناسق."
    ],
    "teacherTipEn": "A vital tool for determining local molecular structures in non-crystalline liquids and proteins.",
    "teacherTipAr": "أداة بالغة الأهمية لتحديد البنية الجزيئية الموضعية في السوائل والبروتينات غير المتبلورة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_27",
    "titleEn": "SEM-EDS Overvoltage Ratio Optimization",
    "titleAr": "تحسين نسبة فرط الجهد في المجهر الإلكتروني (SEM-EDS)",
    "difficulty": "hots",
    "questionEn": "In energy-dispersive X-ray microanalysis (SEM-EDS), the overvoltage ratio $U = V / V_c$ (where $V_c$ is the critical ionization potential of the shell) is optimally chosen around $U \\approx 2 - 3$ because:",
    "questionAr": "في التحليل المجهري بالأشعة السينية المشتتة للطاقة (SEM-EDS)، تضبط نسبة فرط الجهد $U = V / V_c$ (حيث $V_c$ جهد التأين الحرج للغلاف) عند $U \\approx 2 - 3$ لأن:",
    "optionsEn": [
      "Lower voltages violate Coulomb's law and cannot accelerate electrons",
      "Higher voltages convert all metal target atoms into gold isotopes",
      "It maximizes the peak-to-background ratio of characteristic lines while preventing excessive beam spreading and deep absorption losses in the sample",
      "It minimizes the velocity of light inside the scanning chamber"
    ],
    "optionsAr": [
      "الجهود الأقل تخرق قانون كولوم وتعجز عن تعجيل الإلكترونات",
      "الجهود الأعلى تحول جميع ذرات الهدف الفلزي إلى نظائر ذهب",
      "تمنح أقصى نسبة لارتفاع القمة المميزة إلى الخلفية وتمنع الانتشار المفرط للحزمة وفقد الامتصاص العميق بالعينة",
      "تقلل من سرعة الضوء داخل غرفة المسح المجهري"
    ],
    "correctAnswer": "It maximizes the peak-to-background ratio of characteristic lines while preventing excessive beam spreading and deep absorption losses in the sample",
    "correctIndex": 2,
    "hintEn": "Ionization cross-section peaks at $2 - 3 \\times$ the critical ionization threshold.",
    "hintAr": "يصل المقطع العرضي للتأين قمته عند $2 - 3$ أضعاف عتبة التأين الحرجة.",
    "stepByStepSolutionEn": [
      "At $U < 1.5$, characteristic line yield is low. At $U > 5$, electrons penetrate too deeply, and emitted X-rays are absorbed before escaping, while continuous background rises."
    ],
    "stepByStepSolutionAr": [
      "عند $U < 1.5$ يكون مردود الخطوط المميزة ضعيفاً، وعند $U > 5$ تغوص الإلكترونات عميقاً وتُمتص الأشعة قبل خروجها وتزداد الخلفية المستمرة."
    ],
    "teacherTipEn": "A golden rule in analytical electron microscopy.",
    "teacherTipAr": "قاعدة ذهبية معتمدة في الفحص المجهري الإلكتروني التحليلي."
  },
  {
    "id": "egbac_phys_ch2_db_hots_28",
    "titleEn": "Bethe Stopping Power for Fast Electrons",
    "titleAr": "قدرة الإيقاف لبيث للإلكترونات السريعة",
    "difficulty": "hots",
    "questionEn": "The Bethe formula describes the rate of kinetic energy loss (stopping power $-\\frac{dE}{dx}$) of fast electrons traversing a target metal. For high-energy electrons, collisional stopping power is approximately:",
    "questionAr": "تصف معادلة بيث معدل فقد الطاقة الحركية (قدرة الإيقاف $-\\frac{dE}{dx}$) للإلكترونات السريعة أثناء اختراقها لهدف فلزي. للإلكترونات عالية الطاقة، تتناسب قدرة الإيقاف التصادمية تقريباً مع:",
    "optionsEn": [
      "Proportional to $v^3$ without any dependence on target density",
      "Strictly constant regardless of electron energy or material",
      "Zero because electrons cannot interact with atomic matter",
      "Proportional to target electron density and inversely proportional to electron velocity squared ($-\\frac{dE}{dx} \\propto \\frac{1}{v^2}$)"
    ],
    "optionsAr": [
      "طردياً مع مكعب السرعة $v^3$ دون أي اعتماد على كثافة مادة الهدف",
      "ثابتة تماماً بغض النظر عن طاقة الإلكترون أو نوع المادة",
      "منعدمة تماماً لأن الإلكترونات لا تتفاعل مع المادة الذرية",
      "طردياً مع الكثافة الإلكترونية للهدف وعكسياً مع مربع سرعة الإلكترون ($-\\frac{dE}{dx} \\propto \\frac{1}{v^2}$)"
    ],
    "correctAnswer": "Proportional to target electron density and inversely proportional to electron velocity squared ($-\\frac{dE}{dx} \\propto \\frac{1}{v^2}$)",
    "correctIndex": 3,
    "hintEn": "Slower electrons spend more time near target electrons, experiencing stronger Coulomb impulses.",
    "hintAr": "الإلكترونات الأبطأ تمكث وقتاً أطول قرب إلكترونات الهدف فتعاني دفع كولوم أقوى.",
    "stepByStepSolutionEn": [
      "As electron speed increases, $dE/dx$ drops as $1/v^2$ until reaching a minimum ionizing particle (MIP) plateau, after which relativistic radiative losses (Bremsstrahlung) dominate."
    ],
    "stepByStepSolutionAr": [
      "كلما زادت سرعة الإلكترون تقل $dE/dx$ بنسبة $1/v^2$ حتى تصل لحد التأين الأدنى، ثم تبدأ الخسائر الإشعاعية لفرملة الكبح بالسيادة."
    ],
    "teacherTipEn": "Hans Bethe received the 1967 Nobel Prize in Physics.",
    "teacherTipAr": "نال هانز بيث جائزة نوبل في الفيزياء عام 1967."
  },
  {
    "id": "egbac_phys_ch2_db_hots_29",
    "titleEn": "Radon Transform in CT Image Reconstruction",
    "titleAr": "تحويل رادون في إعادة بناء صور الأشعة المقطعية",
    "difficulty": "hots",
    "questionEn": "The mathematical foundation of Computed Tomography (CT) image reconstruction from 2D parallel and fan-beam X-ray projections is based on the inverse of the:",
    "questionAr": "يقوم الأساس الرياضي لإعادة بناء صور التصوير المقطعي المحوسب (CT) من مساقط الأشعة السينية ثنائية الأبعاد على مقلوب:",
    "optionsEn": [
      "Radon transform, solved via filtered back-projection or iterative algebraic reconstruction",
      "Fourier transform of acoustic Doppler shift only",
      "Lorentz contraction matrix for superluminal particles",
      "Schrödinger wave equation for stationary harmonic oscillators"
    ],
    "optionsAr": [
      "تحويل رادون، المحلول عبر الإسقاط الخلفي المرشح أو خوارزميات إعادة البناء الجبري التكراري",
      "تحويل فورييه لإزاحة دوبلر الصوتية حصراً",
      "مصفوفة انكماش لورنتز للجسيمات الأسرع من الضوء",
      "معادلة شرودنجر الموجية للمتذبذب التوافقي المستقر"
    ],
    "correctAnswer": "Radon transform, solved via filtered back-projection or iterative algebraic reconstruction",
    "correctIndex": 0,
    "hintEn": "Johann Radon proved in 1917 that an object can be fully reconstructed from infinite line integrals.",
    "hintAr": "أثبت يوهان رادون عام 1917 إمكانية إعادة بناء أي جسم بالكامل من تكاملاته الخطية عبر جميع الزوايا.",
    "stepByStepSolutionEn": [
      "Each CT projection ray measures the line integral $\\int \\mu(x,y)\\,ds = \\ln(I_0 / I)$. The inverse Radon transform reconstructs the 2D cross-sectional map $\\mu(x,y)$ of tissue attenuation."
    ],
    "stepByStepSolutionAr": [
      "يقيس كل مسار شعاعي تكامل التوهين الخطي، ويقوم مقلوب تحويل رادون بإعادة بناء خريطة التوهين ثنائية الأبعاد $\\mu(x,y)$ للأنسجة."
    ],
    "teacherTipEn": "A classic bridge connecting abstract pure mathematics to life-saving medical imaging.",
    "teacherTipAr": "جسر عبقري يربط الرياضيات البحتة المجردة بالتصوير الطبي لإنقاذ حياة المرضى."
  },
  {
    "id": "egbac_phys_ch2_db_hots_30",
    "titleEn": "Laser-Induced Fluorescence vs Resonance Fluorescence",
    "titleAr": "الفلورية المستحثة بالليزر مقابل فلورية الرنين",
    "difficulty": "hots",
    "questionEn": "In atomic spectroscopy, resonance fluorescence differs from ordinary non-resonant fluorescence because in resonance fluorescence:",
    "questionAr": "في التحليل الطيفي الذري، تختلف فلورية الرنين عن الفلورية غير الرنينية المعتادة في أن فلورية الرنين تتميز بـ:",
    "optionsEn": [
      "The emitted photon always has lower frequency due to non-radiative vibrational relaxation",
      "The emitted photon has the exact same frequency and wavelength as the exciting incident photon (zero Stokes shift)",
      "The emission occurs hours after the excitation source is turned off",
      "The atom emits two energetic neutrons alongside the light wave"
    ],
    "optionsAr": [
      "امتلاك الفوتون المنبعث دائماً تردداً أقل نتيجة الاسترخاء الاهتزازي غير الإشعاعي",
      "امتلاك الفوتون المنبعث نفس تردد وطول موجة الفوتون الساقط المثير تماماً (انعدام إزاحة ستوكس)",
      "حدوث الانبعاث بعد ساعات من إطفاء مصدر الإثارة الخارجي",
      "إطلاق الذرة لنيوترونين سريعين مصاحبين للموجة الضوئية"
    ],
    "correctAnswer": "The emitted photon has the exact same frequency and wavelength as the exciting incident photon (zero Stokes shift)",
    "correctIndex": 1,
    "hintEn": "Resonance means direct re-emission between the identical two states without intermediate relaxation.",
    "hintAr": "الرنين يعني إعادة الانبعاث المباشر بين نفس المستويين دون فقد وسيط للطاقة.",
    "stepByStepSolutionEn": [
      "The atom absorbs a photon of energy $h\\nu = E_2 - E_1$ and decays directly back to $E_1$, emitting a photon of identical energy $h\\nu$. Non-resonant fluorescence involves cascade drops through intermediate levels."
    ],
    "stepByStepSolutionAr": [
      "تمتص الذرة فوتوناً بطاقة $E_2 - E_1$ وتهبط مباشرة إلى $E_1$ مطلقة فوتوناً مطابقاً، بينما تتضمن الفلورية العادية هبوطاً عبر مستويات وسيطة."
    ],
    "teacherTipEn": "Resonance fluorescence is central to atomic clocks and optical molasses for laser cooling.",
    "teacherTipAr": "تعد فلورية الرنين الركيزة الأساسية للساعات الذرية والتبريد بالليزر."
  },
  {
    "id": "egbac_phys_ch2_db_hots_31",
    "titleEn": "Cascade Path Probabilities from Level n=4",
    "titleAr": "احتمالات مسارات الهبوط من المستوى n=4",
    "difficulty": "hots",
    "questionEn": "An ensemble of identical hydrogen atoms is excited to the $n=4$ state. The fraction of atoms that transition to the ground state ($n=1$) via the direct single-step transition ($4 \\to 1$) compared to cascading through intermediate states is determined by:",
    "questionAr": "أثيرت عينة من ذرات الهيدروجين إلى المستوى $n=4$. إن نسبة الذرات التي تهبط إلى المستوى الأرضي ($n=1$) مباشرة في خطوة واحدة ($4 \\to 1$) مقارنة بالهبوط المتدرج عبر مستويات وسيطة تتحدد بـ:",
    "optionsEn": [
      "The mass of the target anode in the Coolidge tube",
      "The temperature of the room according to Boyle's law",
      "The ratio of Einstein spontaneous transition probabilities $A_{4 \\to 1} / \\sum_{f} A_{4 \\to f}$ (branching ratio)",
      "The gravitational field strength at the laboratory location"
    ],
    "optionsAr": [
      "كتلة المصعد المستخدم في أنبوب كولدج",
      "درجة حرارة الغرفة وفق قانون بويل للغازات",
      "نسبة احتمالات أينشتاين للانتقال التلقائي $A_{4 \\to 1} / \\sum_{f} A_{4 \\to f}$ (نسبة التفرع)",
      "شدة مجال الجاذبية الأرضية في موقع المختبر"
    ],
    "correctAnswer": "The ratio of Einstein spontaneous transition probabilities $A_{4 \\to 1} / \\sum_{f} A_{4 \\to f}$ (branching ratio)",
    "correctIndex": 2,
    "hintEn": "Each possible decay route has a quantum transition rate (Einstein $A$ coefficient).",
    "hintAr": "لكل مسار هبوط ممكن معدل انتقال كمي خاص (معامل أينشتاين $A$).",
    "stepByStepSolutionEn": [
      "Branching ratio $\\text{BR}_{i \\to f} = \\frac{A_{if}}{\\sum_k A_{ik}}$ dictates what percentage of atoms follow direct decay ($4 \\to 1$) versus multistep cascades ($4 \\to 3 \\to 1$, $4 \\to 2 \\to 1$)."
    ],
    "stepByStepSolutionAr": [
      "تحدد نسبة التفرع النسبة المئوية للذرات التي تسلك الهبوط المباشر ($4 \\to 1$) مقابل المسارات المتدرجة ($4 \\to 3 \\to 1$ أو $4 \\to 2 \\to 1$)."
    ],
    "teacherTipEn": "This quantum branching governs the relative intensities of emission lines.",
    "teacherTipAr": "يحكم هذا التفرع الكمي الشدة النسبية للخطوط الطيفية المختلفة المنبعثة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_32",
    "titleEn": "Inverse Compton Scattering of Relativistic Electrons",
    "titleAr": "تشتت كومتون العكسي للإلكترونات النسبية",
    "difficulty": "hots",
    "questionEn": "When low-energy laser photons (optical/infrared) collide head-on with an ultra-relativistic electron beam ($\\gamma \\gg 1$), the photons are scattered with dramatically increased energy into the X-ray or gamma-ray regime via:",
    "questionAr": "عندما تصطدم فوتونات ليزر منخفضة الطاقة (ضوئية/تحت حمراء) وجهاً لوجه مع حزمة إلكترونات فائقة النسبية ($\\gamma \\gg 1$)، تتشتت الفوتونات بطاقة متضاعفة هائلة نحو نطاق الأشعة السينية أو أشعة جاما عبر ظاهرة:",
    "optionsEn": [
      "Classical Rayleigh scattering with zero net energy transfer",
      "Nuclear fusion between the photon and electron",
      "Photoelectric absorption inside the vacuum chamber walls",
      "Inverse Compton scattering, with maximum scattered photon energy scaling as $E_{\\max} \\approx 4 \\gamma^2 E_{\\text{laser}}$"
    ],
    "optionsAr": [
      "تشتت رايلي الكلاسيكي دون أي انتقال صافٍ للطاقة",
      "اندماج نووي بين الفوتون والإلكترون",
      "امتصاص كهروضوئي داخل جدران الغرفة المفرغة",
      "تشتت كومتون العكسي، حيث تتناسب طاقة الفوتون المتشتت القصوى مع $E_{\\max} \\approx 4 \\gamma^2 E_{\\text{laser}}$"
    ],
    "correctAnswer": "Inverse Compton scattering, with maximum scattered photon energy scaling as $E_{\\max} \\approx 4 \\gamma^2 E_{\\text{laser}}$",
    "correctIndex": 3,
    "hintEn": "In the electron's rest frame, the photon is Doppler blueshifted, Compton scattered, and blueshifted again in the lab frame.",
    "hintAr": "في إطار سكون الإلكترون ينزاح الفوتون للأزرق، ثم يعاني تشتت كومتون، ثم ينزاح للأزرق مجدداً في إطار المختبر.",
    "stepByStepSolutionEn": [
      "The double Lorentz transformation multiplies the photon energy by roughly $4\\gamma^2$. A $1\\text{ eV}$ laser photon hitting a $1\\text{ GeV}$ electron beam ($\\gamma \\approx 2000$) is boosted to $16\\text{ MeV}$ gamma rays."
    ],
    "stepByStepSolutionAr": [
      "يضاعف تحويل لورنتز المزدوج طاقة الفوتون بنحو $4\\gamma^2$، ففوتون ليزر طاقته $1\\text{ eV}$ يصطدم بإلكترونات $1\\text{ GeV}$ يتحول إلى أشعة جاما طاقتها $16\\text{ MeV}$."
    ],
    "teacherTipEn": "Used to produce polarized, monochromatic gamma rays for nuclear physics research.",
    "teacherTipAr": "تستخدم هذه التقنية لتوليد أشعة جاما أحادية الطاقة ومستقطبة لأبحاث الفيزياء النووية."
  },
  {
    "id": "egbac_phys_ch2_db_hots_33",
    "titleEn": "Double-Crystal X-Ray Spectrometer Resolution",
    "titleAr": "المطياف البلوري المزدوج للأشعة السينية",
    "difficulty": "hots",
    "questionEn": "In high-resolution X-ray spectroscopy, a double-crystal spectrometer employs two parallel, identical single crystals in the $(+1, -1)$ antiparallel arrangement to:",
    "questionAr": "في مطيافية الأشعة السينية فائقة الدقة، يستخدم مطياف البلورة المزدوجة بلورتين متوازيتين متطابقتين في وضع $(+1, -1)$ بهدف:",
    "optionsEn": [
      "Eliminate spectral dispersion broadening and measure intrinsic crystal rocking curves and line profiles with extreme angular resolution",
      "Double the intensity of the continuous Bremsstrahlung background",
      "Polarize the X-ray beam circular left and circular right simultaneously",
      "Convert X-rays into audible sound waves"
    ],
    "optionsAr": [
      "إلغاء اتساع التشتت الطيفي وقياس منحنى التأرجح الحقيقي والمظهر الطبيعي للخطوط بدقة زاوية فائقة",
      "مضاعفة شدة الخلفية المتصلة لإشعاع الكبح",
      "استقطاب حزمة الأشعة السينية دائرياً لليمين ولليسار في نفس اللحظة",
      "تحويل الأشعة السينية إلى موجات صوتية مسموعة"
    ],
    "correctAnswer": "Eliminate spectral dispersion broadening and measure intrinsic crystal rocking curves and line profiles with extreme angular resolution",
    "correctIndex": 0,
    "hintEn": "The second crystal reflects rays only if they satisfy the exact Bragg angle from the first crystal.",
    "hintAr": "البلورة الثانية تعكس فقط الأشعة التي تحقق زاوية براغ الدقيقة المنعكسة من الأولى.",
    "stepByStepSolutionEn": [
      "In the parallel dispersive arrangement, the angular width of the rocking curve depends strictly on crystal perfection (Darwin width, arcseconds), resolving fine structure doublets."
    ],
    "stepByStepSolutionAr": [
      "في الوضع المتوازي يعتمد العرض الزاوي لمنحنى التأرجح حصراً على كمال البلورة، مما يتيح التمييز بين قمم التركيب الدقيق."
    ],
    "teacherTipEn": "Arthur Compton and coworkers pioneered multi-crystal X-ray instrumentation.",
    "teacherTipAr": "كان آرثر كومتون وزملاؤه رواد تصميم مطاييف الأشعة السينية متعددة البلورات."
  },
  {
    "id": "egbac_phys_ch2_db_hots_34",
    "titleEn": "Critical Absorption Edge Energy Matching for Contrast",
    "titleAr": "مطابقة حافة الامتصاص الحرجة لتعزيز التباين",
    "difficulty": "hots",
    "questionEn": "In coronary angiography (X-ray imaging of heart vessels), Iodine ($Z=53$) is injected as a radiopaque contrast agent because its $K$-shell absorption edge is at $33.2\\text{ keV}$. To achieve maximum vessel image contrast, the X-ray tube should be operated so that the photon spectrum is concentrated:",
    "questionAr": "في تصوير الشرايين التاجية للقلب بالأشعة السينية، يحقن اليود ($Z=53$) كمادة تباين معتمة لأن حافة امتصاص غلافه $K$ تقع عند $33.2\\text{ keV}$. للحصول على أقصى تباين في صورة الأوعية، يجب أن يتركز طيف فوتونات الأشعة:",
    "optionsEn": [
      "Far below $10\\text{ keV}$, where no radiation penetrates the patient skin",
      "Just above $33.2\\text{ keV}$ ($33.5 - 35\\text{ keV}$), where iodine absorption jumps six-fold while surrounding soft tissue absorption remains low",
      "Above $500\\text{ keV}$, where pair production completely dominates",
      "At $0\\text{ eV}$ in the static direct current regime"
    ],
    "optionsAr": [
      "تحت $10\\text{ keV}$ بكثير، حيث تعجز الأشعة عن اختراق جلد المريض",
      "فوق $33.2\\text{ keV}$ مباشرة ($33.5 - 35\\text{ keV}$)، حيث يقفز امتصاص اليود 6 أضعاف بينما يظل امتصاص الأنسجة المجاورة منخفضاً",
      "فوق $500\\text{ keV}$، حيث يسود الإنتاج الزوجي تماماً",
      "عند $0\\text{ eV}$ في نظام التيار المستمر الساكن"
    ],
    "correctAnswer": "Just above $33.2\\text{ keV}$ ($33.5 - 35\\text{ keV}$), where iodine absorption jumps six-fold while surrounding soft tissue absorption remains low",
    "correctIndex": 1,
    "hintEn": "Right at the $K$-edge, the mass attenuation coefficient jumps discontinuously.",
    "hintAr": "عند حافة $K$ بالضبط يقفز معامل التوهين الكتلي قفزة حادة غير متصلة.",
    "stepByStepSolutionEn": [
      "Operating just above the $K$-edge maximizes differential absorption between iodine-filled blood vessels and surrounding tissue, yielding crisp angiography images with minimal dye volume."
    ],
    "stepByStepSolutionAr": [
      "التشغيل فوق حافة $K$ مباشرة يعظم التباين الامتصاصي بين الدم المشبع باليود والأنسجة الرخوة، مما يعطي صوراً شديدة الوضوح للشرايين."
    ],
    "teacherTipEn": "Synchrotron radiation allows monoenergetic tuning directly to the $K$-edge.",
    "teacherTipAr": "يتيح إشعاع السينكروترون ضبط طاقة الحزمة أحادية اللون تماماً عند حافة $K$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_35",
    "titleEn": "Crystal Structure Determination from Bragg Reflection Ratios",
    "titleAr": "تحديد نوع الشبكة البلورية من نسب زوايا براغ",
    "difficulty": "hots",
    "questionEn": "In an X-ray powder diffraction experiment with cubic crystals, the ratios of $\\sin^2\\theta$ for the first three diffraction peaks are observed as $1 : 2 : 3$. This characteristic ratio unambiguously identifies the lattice as:",
    "questionAr": "في تجربة حيود الأشعة السينية لمسحوق بلوري مكعب، رُصدت نسب $\\sin^2\\theta$ لأول ثلاث قمم حيود مساوية $1 : 2 : 3$. هذه النسبة المميزة تحدد نوع الشبكة البلورية بشكل قاطع بأنها:",
    "optionsEn": [
      "Face-Centered Cubic (FCC, reflecting from 111, 200, 220 with ratio $3 : 4 : 8$)",
      "Body-Centered Cubic (BCC, reflecting with ratio $2 : 4 : 6 = 1 : 2 : 3$)",
      "Simple Cubic (SC, reflecting from planes 100, 110, 111)",
      "Amorphous non-crystalline liquid without lattice planes"
    ],
    "optionsAr": [
      "مكعبة مركزية الأوجه (FCC، حيث تنعكس عن 111 و 200 و 220 بنسبة $3 : 4 : 8$)",
      "مكعبة مركزية الجسم (BCC، حيث تنعكس عن 110 و 200 و 211 بنسبة $2 : 4 : 6 = 1 : 2 : 3$)",
      "مكعبة بسيطة (SC، لانعكاسها عن المستويات 100 و 110 و 111)",
      "سائل لا بلوري عديم الانتظام والشبكات"
    ],
    "correctAnswer": "Simple Cubic (SC, reflecting from planes 100, 110, 111)",
    "correctIndex": 2,
    "hintEn": "Bragg law: $\\sin^2\\theta = \\frac{\\lambda^2}{4a^2}(h^2 + k^2 + l^2)$.",
    "hintAr": "قانون براغ: $\\sin^2\\theta = \\frac{\\lambda^2}{4a^2}(h^2 + k^2 + l^2)$.",
    "stepByStepSolutionEn": [
      "For simple cubic, all integers $h^2+k^2+l^2$ are allowed: $1, 2, 3, 4, 5, 6, 8\\dots$ (7 is forbidden). Thus the first three peaks have $\\sin^2\\theta$ ratios $1 : 2 : 3$."
    ],
    "stepByStepSolutionAr": [
      "للشبكة المكعبة البسيطة، تسمح كافة الأعداد لمجموع المربعات: $1, 2, 3, 4, 5, 6, 8\\dots$ (العدد 7 مستحيل رياضياً)، فتكون نسبة أول ثلاث قمم $1 : 2 : 3$."
    ],
    "teacherTipEn": "If the sequence is $3 : 4 : 8 : 11$, it proves an FCC lattice (e.g. NaCl or gold).",
    "teacherTipAr": "إذا كانت المتتالية $3 : 4 : 8 : 11$ فإنها تثبت شبكة مركزية الأوجه كملح الطعام أو الذهب."
  },
  {
    "id": "egbac_phys_ch2_db_hots_36",
    "titleEn": "Electric Dipole Selection Rules in Hydrogen",
    "titleAr": "قواعد الاختيار لثنائيات الأقطاب الكهربية في الهيدروجين",
    "difficulty": "hots",
    "questionEn": "In the quantum mechanical treatment of single-photon transitions in atomic hydrogen, allowed electric dipole transitions must strictly satisfy the orbital angular momentum selection rule:",
    "questionAr": "في المعالجة الميكانيكية الكمية لانتقالات الفوتون المفرد في ذرة الهيدروجين، يجب أن تحقق الانتقالات ثنائية القطب الكهربي المسموحة قاعدة الاختيار:",
    "optionsEn": [
      "$\\Delta l = 0$ exclusively ($s \\to s$ or $p \\to p$)",
      "$\\Delta l = \\pm 2$ exclusively",
      "$\\Delta l$ can take any arbitrary integer value without restriction",
      "$\\Delta l = \\pm 1$ (e.g., $s \\to p$ or $p \\to d$)"
    ],
    "optionsAr": [
      "$\\Delta l = 0$ حصراً ($s \\to s$ أو $p \\to p$)",
      "$\\Delta l = \\pm 2$ حصراً",
      "يمكن لـ $\\Delta l$ أن تأخذ أي قيمة صحيحة اعتباطية دون قيود",
      "$\\Delta l = \\pm 1$ (مثل $s \\to p$ أو $p \\to d$)"
    ],
    "correctAnswer": "$\\Delta l = \\pm 1$ (e.g., $s \\to p$ or $p \\to d$)",
    "correctIndex": 3,
    "hintEn": "A photon carries intrinsic spin angular momentum $s = 1\\hbar$ and odd parity.",
    "hintAr": "يحمل الفوتون عزماً مغزلياً ذاتياً $s = 1\\hbar$ وتماثلاً فردياً.",
    "stepByStepSolutionEn": [
      "Conservation of total angular momentum and parity requires that the orbital angular momentum quantum number of the electron must change by exactly one unit: $\\Delta l = \\pm 1$. Transitions like $2s \\to 1s$ are dipole-forbidden."
    ],
    "stepByStepSolutionAr": [
      "يتطلب بقاء كمية الحركة الزاوية الكلية والتكافؤ أن يتغير عدد الكم المداري للإلكترون بوحدة واحدة تماماً: $\\Delta l = \\pm 1$. والانتقالات مثل $2s \\to 1s$ محرمة بثنائي القطب."
    ],
    "teacherTipEn": "Forbidden transitions can only proceed through much slower multipole processes (e.g. two-photon emission).",
    "teacherTipAr": "تتم الانتقالات المحرمة عبر آليات أبطأ بكثير كإشعاع فوتونين معاً."
  },
  {
    "id": "egbac_phys_ch2_db_hots_37",
    "titleEn": "Metastable States in Helium-Neon Lasers",
    "titleAr": "الحالات شبه المستقرة في ليزر الهيليوم-نيون",
    "difficulty": "hots",
    "questionEn": "The $2^1S_0$ and $2^3S_1$ excited states of helium atoms are 'metastable' with extraordinarily long lifetimes ($\\sim 1\\text{ ms}$ to hours) because:",
    "questionAr": "تعد مستويات إثارة ذرات الهيليوم $2^1S_0$ و $2^3S_1$ حالات 'شبه مستقرة' ذات أعمار زمنية طويلة استثنائياً ($\\sim 1\\text{ ms}$ إلى ساعات) لأن:",
    "optionsEn": [
      "Direct radiative decay to the $1^1S_0$ ground state is strictly forbidden by dipole selection rules ($\\Delta l = 0$ and $\\Delta S = 0$)",
      "The helium nucleus has zero positive charge",
      "Electrons in helium travel at superluminal speeds",
      "The atoms are held at absolute zero temperature by superconduction"
    ],
    "optionsAr": [
      "الهبوط الإشعاعي المباشر إلى المستوى الأرضي $1^1S_0$ محرم تماماً بقواعد الاختيار ثنائية القطب ($\\Delta l = 0$ و $\\Delta S = 0$)",
      "نواة الهيليوم منعدمة الشحنة الموجبة تماماً",
      "إلكترونات الهيليوم تتحرك بسرعة تفوق سرعة الضوء",
      "الذرات محفوظة عند درجة الصفر المطلق بالتوصيل الفائق"
    ],
    "correctAnswer": "Direct radiative decay to the $1^1S_0$ ground state is strictly forbidden by dipole selection rules ($\\Delta l = 0$ and $\\Delta S = 0$)",
    "correctIndex": 0,
    "hintEn": "From $2S$ to $1S$, $\\Delta l = 0$, so a single electric dipole photon cannot be emitted.",
    "hintAr": "من $2S$ إلى $1S$ يكون $\\Delta l = 0$، وبالتالي يستحيل انبعاث فوتون ثنائي قطب مفرد.",
    "stepByStepSolutionEn": [
      "Forbidden dipole decay forces the atom to store excitation energy, allowing collisional resonant energy transfer to excite neon atoms in He-Ne lasers."
    ],
    "stepByStepSolutionAr": [
      "تحريم الهبوط الإشعاعي يجبر الذرة على تخزين طاقة الإثارة، مما يتيح نقل الطاقة بالرنين التصادمي لإثارة ذرات النيون في ليزر الهيليوم-نيون."
    ],
    "teacherTipEn": "Metastable states are the vital backbone of continuous-wave gas lasers.",
    "teacherTipAr": "تمثل الحالات شبه المستقرة العمود الفقري لليزر الغازي ذي الموجة المستمرة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_38",
    "titleEn": "Quantum Defect in Alkali Atoms",
    "titleAr": "الخلل الكمي في ذرات الفلزات القلوية",
    "difficulty": "hots",
    "questionEn": "In alkali atoms (such as sodium, $Z=11$), the valence electron in an $s$-state penetrates the inner electron core and experiences greater nuclear attraction, shifting its energy to $E_{nl} = -\\frac{13.6}{(n - \\delta_l)^2}\\text{ eV}$, where $\\delta_l$ is called the:",
    "questionAr": "في ذرات الفلزات القلوية (مثل الصوديوم $Z=11$)، يخترق إلكترون التكافؤ في المدار $s$ الغلاف الإلكتروني الداخلي فيعاني تجاذباً نووياً أقوى، وتنحرف طاقته إلى $E_{nl} = -\\frac{13.6}{(n - \\delta_l)^2}\\text{ eV}$، حيث يسمى $\\delta_l$ بـ:",
    "optionsEn": [
      "Bohr radius scale factor",
      "Quantum defect (Rydberg correction parameter)",
      "Franck-Hertz potential parameter",
      "Duane-Hunt cutoff wavelength"
    ],
    "optionsAr": [
      "معامل مقياس نصف قطر بور",
      "الخلل الكمي (معامل تصحيح ريدبرج)",
      "معامل جهد فرانك-هيرتز",
      "طول موجة الحافة لدوان-هنت"
    ],
    "correctAnswer": "Quantum defect (Rydberg correction parameter)",
    "correctIndex": 1,
    "hintEn": "Core penetration reduces electronic shielding, making $Z_{\\text{eff}} > 1$.",
    "hintAr": "اختراق الغلاف الداخلي يقلل حجب الإلكترونات فتصبح الشحنة الفعالة $Z_{\\text{eff}} > 1$.",
    "stepByStepSolutionEn": [
      "The penetrative $s$-orbitals ($l=0$) have large quantum defect ($\\delta_s \\approx 1.35$ in Na), whereas non-penetrating $d$ and $f$ orbitals have $\\delta \\approx 0$, behaving almost like pure hydrogen."
    ],
    "stepByStepSolutionAr": [
      "المدارات $s$ ذات الاختراق العالي تملك خللاً كمياً كبيراً ($\\delta_s \\approx 1.35$ في الصوديوم)، بينما المدارات الخارجية كـ $d$ تملك $\\delta \\approx 0$ وتتصرف كالهيدروجين النقي."
    ],
    "teacherTipEn": "This explains why sodium's ground state ($3s$) has ionization energy $5.14\\text{ eV}$ instead of $1.51\\text{ eV}$.",
    "teacherTipAr": "يفسر هذا لماذا تبلغ طاقة تأين صوديوم المستوى الأرضي ($3s$) $5.14\\text{ eV}$ بدلاً من $1.51\\text{ eV}$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_39",
    "titleEn": "Self-Reversal in Sodium D-Lines",
    "titleAr": "الانعكاس الذاتي في خطي الصوديوم D",
    "difficulty": "hots",
    "questionEn": "When a high-density, high-temperature sodium arc lamp is examined with a high-resolution spectroscope, the brilliant yellow D-lines ($\\lambda = 589.0\\text{ nm}, 589.6\\text{ nm}$) show a central dark line splitting each emission peak. This phenomenon is termed:",
    "questionAr": "عند فحص مصباح صوديوم عالي الكثافة والحرارة بمطياف فائق الدقة، يُلاحظ وجود خط مظلم دقيق في مركز كل قمة انبعاث للخطين الأصفرين D. تسمى هذه الظاهرة بـ:",
    "optionsEn": [
      "Nuclear beta decay splitting the sodium atoms",
      "Complete destructive interference between the two D-lines",
      "Self-reversal, caused by cooler sodium vapor in the outer envelope absorbing the central emission line cores",
      "Acoustic vibration of the spectroscope slit"
    ],
    "optionsAr": [
      "انشطار بيتا النووي لذرات الصوديوم",
      "تداخل هدام تام بين خطي D الصادرين",
      "الانعكاس الذاتي، والناشئ عن امتصاص بخار الصوديوم الأبرد في الغلاف الخارجي لمركز خطوط الانبعاث الحارة",
      "اهتزازات صوتية ميكانيكية لشق المطياف"
    ],
    "correctAnswer": "Self-reversal, caused by cooler sodium vapor in the outer envelope absorbing the central emission line cores",
    "correctIndex": 2,
    "hintEn": "Core gas is hot and Doppler-broadened; outer envelope gas is cooler with narrow absorption profile.",
    "hintAr": "الغاز في قلب المصباح حار ومتسع حرارياً، بينما الغاز في الغلاف الخارجي أبرد ذو خط امتصاص حاد.",
    "stepByStepSolutionEn": [
      "The cool outer atoms strongly absorb the exact center of the broadened emission line, leaving a dark dip right through the peak."
    ],
    "stepByStepSolutionAr": [
      "تمتص الذرات الخارجية الباردة مركز الخط المنبعث المتسع بدقة شديدة، تاركة فجوة مظلمة تخترق قمة الانبعاث."
    ],
    "teacherTipEn": "Fraunhofer lines on the Sun are gigantic celestial self-reversals.",
    "teacherTipAr": "تعتبر خطوط فرانهوفر الشمسية انعكاساً ذاتياً كونياً هائل الحجم."
  },
  {
    "id": "egbac_phys_ch2_db_hots_40",
    "titleEn": "Undulator Radiation Tuning Formula",
    "titleAr": "صيغة ضبط تردد إشعاع متموجات السينكروترون (Undulator)",
    "difficulty": "hots",
    "questionEn": "In 3rd and 4th generation synchrotron radiation facilities (and X-ray Free Electron Lasers), undulator insertion devices force relativistic electrons ($\\gamma = E / m_e c^2$) into periodic oscillations of period $\\lambda_u$. The fundamental on-axis X-ray wavelength is:",
    "questionAr": "في منشآت إشعاع السينكروترون من الجيلين الثالث والرابع (وليزر الإلكترون الحر)، تجبر أجهزة التمويج الإلكترونات فائقة النسبية ($\\gamma = E / m_e c^2$) على التذبذب بدورة $\\lambda_u$. يعبر عن الطول الموجي السيني الأساسي بالعلاقة:",
    "optionsEn": [
      "$\\lambda = 2\\gamma^2 \\lambda_u (1 + K)$",
      "$\\lambda = \\frac{\\lambda_u}{\\gamma}$",
      "$\\lambda = \\lambda_u \\left(1 - \\frac{v^2}{c^2}\\right)$",
      "$\\lambda = \\frac{\\lambda_u}{2\\gamma^2} \\left(1 + \\frac{K^2}{2}\\right)$"
    ],
    "optionsAr": [
      "$\\lambda = 2\\gamma^2 \\lambda_u (1 + K)$",
      "$\\lambda = \\frac{\\lambda_u}{\\gamma}$",
      "$\\lambda = \\lambda_u \\left(1 - \\frac{v^2}{c^2}\\right)$",
      "$\\lambda = \\frac{\\lambda_u}{2\\gamma^2} \\left(1 + \\frac{K^2}{2}\\right)$"
    ],
    "correctAnswer": "$\\lambda = \\frac{\\lambda_u}{2\\gamma^2} \\left(1 + \\frac{K^2}{2}\\right)$",
    "correctIndex": 3,
    "hintEn": "Relativistic contraction ($\\gamma$) and Doppler boost ($\\gamma$) combine to give a factor of $2\\gamma^2$.",
    "hintAr": "انكماش لورنتز النسبي ($\\gamma$) وإزاحة دوبلر ($\\gamma$) يجتمعان ليعطيا عاملاً مقداره $2\\gamma^2$.",
    "stepByStepSolutionEn": [
      "Because $\\gamma \\sim 10^3 - 10^4$, a centimeter-period magnetic undulator ($\\lambda_u \\approx 2\\text{ cm}$) produces sub-nanometer hard X-rays ($\\lambda \\sim 1\\text{ \\AA}$), with $K$ tuned via the magnet gap."
    ],
    "stepByStepSolutionAr": [
      "لأن $\\gamma \\sim 10^4$، فإن متموجاً مغناطيسياً دورته سنتيمترات ينتج أشعة سينية بطول موجة أنجستروم واحد، وتُضبط بتعديل فجوة المغناطيس $K$."
    ],
    "teacherTipEn": "This powers X-ray free electron lasers like the European XFEL and LCLS at SLAC.",
    "teacherTipAr": "تشغل هذه التقنية أرقى ليزرات الإلكترون الحر للأشعة السينية في العالم."
  },
  {
    "id": "egbac_phys_ch2_db_hots_41",
    "titleEn": "Stark Effect in Hydrogen",
    "titleAr": "تأثير ستارك في ذرة الهيدروجين",
    "difficulty": "hots",
    "questionEn": "When a hydrogen atom is placed in a strong external uniform static electric field $\\mathcal{E}$, its spectral lines split into multiple components. This splitting, known as the Stark effect, arises because:",
    "questionAr": "عند وضع ذرة الهيدروجين في مجال كهربي خارجي ساكن ومنتظم $\\mathcal{E}$، تنفصل خطوطها الطيفية إلى عدة مركبات. ينشأ هذا الانفصال المعروف بتأثير ستارك عن:",
    "optionsEn": [
      "The electric field perturbs orbital symmetry, inducing an electric dipole moment whose interaction energy $\\Delta E = -\\vec{p} \\cdot \\vec{\\mathcal{E}}$ lifts level degeneracy",
      "The electric field causes the proton to undergo nuclear beta plus decay",
      "The speed of light inside the atom increases proportionally to the electric field",
      "The electron's rest mass shrinks to zero"
    ],
    "optionsAr": [
      "اضطراب التناظر المداري وتوليد عزم ثنائي قطب كهربي تتفاعل طاقته $\\Delta E = -\\vec{p} \\cdot \\vec{\\mathcal{E}}$ رافعة الانفطار عن المستويات",
      "إحداث المجال الكهربي تحللاً إشعاعياً نووياً لبيتا الموجبة في البروتون",
      "زيادة سرعة الضوء داخل الذرة طردياً مع شدة المجال الكهربي",
      "انكماش كتلة سكون الإلكترون إلى الصفر تماماً"
    ],
    "correctAnswer": "The electric field perturbs orbital symmetry, inducing an electric dipole moment whose interaction energy $\\Delta E = -\\vec{p} \\cdot \\vec{\\mathcal{E}}$ lifts level degeneracy",
    "correctIndex": 0,
    "hintEn": "Johannes Stark discovered the electric analog of the Zeeman effect in 1913 (Nobel Prize 1919).",
    "hintAr": "اكتشف يوهانس ستارك النظير الكهربي لتأثير زيمان عام 1913 ونال جائزة نوبل 1919.",
    "stepByStepSolutionEn": [
      "In hydrogen, because $2s$ and $2p$ states are degenerate, a linear Stark shift ($\\Delta E \\propto \\mathcal{E}$) occurs, whereas non-hydrogen atoms exhibit a weaker quadratic Stark shift ($\\Delta E \\propto \\mathcal{E}^2$)."
    ],
    "stepByStepSolutionAr": [
      "في الهيدروجين لتطابق طاقتي $2s$ و $2p$ يحدث انزياح ستارك خطي ($\\Delta E \\propto \\mathcal{E}$)، بينما في سائر الذرات يكون الانزياح تربيعياً أضعف ($\\Delta E \\propto \\mathcal{E}^2$)."
    ],
    "teacherTipEn": "Stark broadening is widely used to measure plasma electron density in astrophysics and fusion tokamaks.",
    "teacherTipAr": "يستخدم اتساع ستارك لقياس كثافة البلازما في الفيزياء الفلكية ومفاعلات الاندماج النووي (توكاماك)."
  },
  {
    "id": "egbac_phys_ch2_db_hots_42",
    "titleEn": "Collision Broadening Pressure Dependence",
    "titleAr": "اعتماد اتساع التصادم للخطوط الطيفية على الضغط",
    "difficulty": "hots",
    "questionEn": "In high-pressure discharge lamps, collisional (pressure) broadening becomes prominent. The resulting Lorentzian linewidth $\\Delta \\nu_{\\text{coll}} \\approx \\frac{1}{\\pi \\tau_{\\text{coll}}}$ is directly proportional to:",
    "questionAr": "في مصابيح التفريغ عالية الضغط، يبرز اتساع التصادم (الضغط). يتناسب اتساع الخط اللورنتزي الناتج $\\Delta \\nu_{\\text{coll}} \\approx \\frac{1}{\\pi \\tau_{\\text{coll}}}$ طردياً مع:",
    "optionsEn": [
      "The volume of the glass bulb cubed",
      "The gas pressure $P$ and number density of colliding atoms",
      "The gravitational constant $G$",
      "The reciprocal of the speed of light $1/c$"
    ],
    "optionsAr": [
      "مكعب حجم الانتفاخ الزجاجي للمصباح",
      "ضغط الغاز $P$ والكثافة العددية للذرات المتصادمة",
      "ثابت الجاذبية الكوني $G$",
      "مقلوب سرعة الضوء $1/c$"
    ],
    "correctAnswer": "The gas pressure $P$ and number density of colliding atoms",
    "correctIndex": 1,
    "hintEn": "Mean time between collisions $\\tau_{\\text{coll}} = \\frac{1}{n \\sigma v} \\propto \\frac{1}{P}$.",
    "hintAr": "متوسط الزمن بين تصادمين $\\tau_{\\text{coll}} = \\frac{1}{n \\sigma v} \\propto \\frac{1}{P}$.",
    "stepByStepSolutionEn": [
      "Higher gas pressure causes atoms to collide more frequently, interrupting wave trains and truncating coherence time, which broadens lines linearly with pressure ($\\Delta \\nu \\propto P$)."
    ],
    "stepByStepSolutionAr": [
      "زيادة الضغط تجعل التصادمات أكثر تواتراً مما يقطع القطار الموجي مبكراً ويقلل زمن الترابط، فيتسع الخط طردياً مع الضغط ($\\Delta \\nu \\propto P$)."
    ],
    "teacherTipEn": "This is why high-pressure sodium street lamps produce broad, warm yellow bands rather than razor-sharp laser lines.",
    "teacherTipAr": "لهذا السبب تشع مصابيح الصوديوم عالية الضغط في الشوارع حزماً صفراء عريضة ودافئة بدلاً من خطوط الليزر الحادة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_43",
    "titleEn": "Diffraction Grating Spectrometer Resolving Power",
    "titleAr": "قدرة التحليل الطيفي لمطياف محزوز الحيود",
    "difficulty": "hots",
    "questionEn": "A diffraction grating has $N = 10000$ illuminated lines. In the second order ($m=2$), its theoretical chromatic resolving power $R = \\frac{\\lambda}{\\Delta \\lambda}$ is:",
    "questionAr": "محزوز حيود يحتوي على $N = 10000$ خط مضاء. في الرتبة الثانية ($m=2$)، تبلغ قدرة تحليله اللونية النظرية $R = \\frac{\\lambda}{\\Delta \\lambda}$:",
    "optionsEn": [
      "$5000$",
      "$10000$",
      "$20000$",
      "$40000$"
    ],
    "optionsAr": [
      "$5000$",
      "$10000$",
      "$20000$",
      "$40000$"
    ],
    "correctAnswer": "$20000$",
    "correctIndex": 2,
    "hintEn": "Resolving power formula for diffraction gratings: $R = m N$.",
    "hintAr": "صيغة قدرة التحليل لمحزوز الحيود: $R = m N$.",
    "stepByStepSolutionEn": [
      "$R = m N = 2 \\times 10000 = 20000$. At $\\lambda = 600\\text{ nm}$, it can resolve two lines separated by $\\Delta \\lambda = \\frac{600}{20000} = 0.03\\text{ nm} = 0.3\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "$R = m N = 2 \\times 10000 = 20000$، وعند $\\lambda = 600\\text{ nm}$ يستطيع فصل خطين بينهما فرق $\\Delta \\lambda = 0.03\\text{ nm} = 0.3\\text{ \\AA}$."
    ],
    "teacherTipEn": "Easily resolves the sodium D-lines doublet ($\\Delta \\lambda = 0.6\\text{ nm}$).",
    "teacherTipAr": "يستطيع فصل خطي الصوديوم D المتجاورين بسهولة فائقة ($\\Delta \\lambda = 0.6\\text{ nm}$)."
  },
  {
    "id": "egbac_phys_ch2_db_hots_44",
    "titleEn": "Coolidge Tube Liquid Nitrogen Anode Cooling Balance",
    "titleAr": "الاتزان الحراري لمصعد كولدج المبرد بالنيتروجين السائل",
    "difficulty": "hots",
    "questionEn": "A high-power rotating anode X-ray tube operates at $100\\text{ kV}$ and $100\\text{ mA}$ ($10\\text{ kW}$ total power). If $99\\%$ of the electrical energy is converted into heat and extracted by boiling liquid nitrogen (latent heat of vaporization $L_v \\approx 2.0 \\times 10^5\\text{ J/kg}$), the boil-off rate of liquid nitrogen is:",
    "questionAr": "أنبوب أشعة سينية بمصعد دوار يعمل بقدرة $10\\text{ kW}$ ($100\\text{ kV}$ و $100\\text{ mA}$). إذا تحول $99\\%$ من القدرة الكهربية إلى حرارة تم امتصاصها بغليان نيتروجين سائل (حرارة التبخير الكامنة $L_v \\approx 2.0 \\times 10^5\\text{ J/kg}$)، فإن معدل تبخر النيتروجين يساوي:",
    "optionsEn": [
      "$0.50\\text{ kg/s}$",
      "$1.0\\text{ g/s}$",
      "$4.95\\text{ kg/s}$",
      "$0.0495\\text{ kg/s} (49.5\\text{ g/s})$"
    ],
    "optionsAr": [
      "$0.50\\text{ kg/s}$",
      "$1.0\\text{ g/s}$",
      "$4.95\\text{ kg/s}$",
      "$0.0495\\text{ kg/s} (49.5\\text{ g/s})$"
    ],
    "correctAnswer": "$0.0495\\text{ kg/s} (49.5\\text{ g/s})$",
    "correctIndex": 3,
    "hintEn": "$P_{\\text{heat}} = 0.99 \\times 10000\\text{ W} = 9900\\text{ W}$. Rate of mass loss $\\frac{dm}{dt} = \\frac{P_{\\text{heat}}}{L_v}$.",
    "hintAr": "$P_{\\text{heat}} = 0.99 \\times 10000\\text{ W} = 9900\\text{ W}$. معدل فقد الكتلة $\\frac{dm}{dt} = \\frac{P_{\\text{heat}}}{L_v}$.",
    "stepByStepSolutionEn": [
      "$\\frac{dm}{dt} = \\frac{9900}{2.0 \\times 10^5} = 0.0495\\text{ kg/s} = 49.5\\text{ g/s}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{dm}{dt} = \\frac{9900}{2.0 \\times 10^5} = 0.0495\\text{ kg/s} = 49.5\\text{ g/s}$."
    ],
    "teacherTipEn": "Illustrates the immense cryogenic engineering required for mega-watt X-ray sources.",
    "teacherTipAr": "يوضح المتطلبات الهندسية التبريدية الهائلة لتشغيل مصادر الأشعة السينية عالية القدرة."
  },
  {
    "id": "egbac_phys_ch2_db_hots_45",
    "titleEn": "Kramers Bremsstrahlung Emission Distribution Law",
    "titleAr": "قانون كرامرز لتوزيع إشعاع الكبح",
    "difficulty": "hots",
    "questionEn": "According to Hendrik Kramers' classical electrodynamic derivation, the spectral intensity distribution of continuous Bremsstrahlung X-rays $I(\\nu)$ as a function of photon frequency $\\nu$ up to $\\nu_{\\max} = \\frac{eV}{h}$ is described by:",
    "questionAr": "وفق اشتقاق هندريك كرامرز الكلاسيكي، فإن توزيع الشدة الطيفية لأشعة الكبح المستمرة $I(\\nu)$ كدالة في التردد $\\nu$ حتى $\\nu_{\\max} = \\frac{eV}{h}$ يعبر عنه بـ:",
    "optionsEn": [
      "$I(\\nu) \\propto Z (\\nu_{\\max} - \\nu)$, displaying a linear decrease with frequency to zero at $\\nu_{\\max}$",
      "$I(\\nu) \\propto \\nu^3$ diverging toward infinity at high frequencies",
      "$I(\\nu) = \\text{constant}$ for all frequencies up to gamma rays",
      "$I(\\nu) \\propto \\frac{1}{Z^2}$"
    ],
    "optionsAr": [
      "$I(\\nu) \\propto Z (\\nu_{\\max} - \\nu)$، مبيناً تناقصاً خطياً مع التردد وصولاً للصفر عند $\\nu_{\\max}$",
      "$I(\\nu) \\propto \\nu^3$ متباعداً نحو المالانهاية عند الترددات العالية",
      "$I(\\nu) = \\text{ثابت}$ لجميع الترددات حتى أشعة جاما",
      "$I(\\nu) \\propto \\frac{1}{Z^2}$"
    ],
    "correctAnswer": "$I(\\nu) \\propto Z (\\nu_{\\max} - \\nu)$, displaying a linear decrease with frequency to zero at $\\nu_{\\max}$",
    "correctIndex": 0,
    "hintEn": "In frequency space, Kramers' law is linear: $I(\\nu) = C Z (\\nu_{\\max} - \\nu)$.",
    "hintAr": "في فضاء التردد يكون قانون كرامرز خطياً: $I(\\nu) = C Z (\\nu_{\\max} - \\nu)$.",
    "stepByStepSolutionEn": [
      "Converting to wavelength space via $|I(\\lambda) d\\lambda| = |I(\\nu) d\\nu|$ introduces a Jacobian factor of $c/\\lambda^2$, turning the straight line into the familiar curved peak in $\\lambda$-space."
    ],
    "stepByStepSolutionAr": [
      "التحويل إلى فضاء الطول الموجي يضيف معامل يعقوبي $c/\\lambda^2$ يحول الخط المستقيم إلى القمة المنحنية المألوفة في فضاء $\\lambda$."
    ],
    "teacherTipEn": "Total emitted X-ray energy integrates to $E_{\\text{total}} \\propto Z V^2$.",
    "teacherTipAr": "الطاقة الكلية المشعة تتناسب مع $Z V^2$ بعد مكاملة المنحنى."
  },
  {
    "id": "egbac_phys_ch2_db_hots_46",
    "titleEn": "Total X-Ray Power Scaling with Anode Voltage",
    "titleAr": "تناسب القدرة الكلية للأشعة السينية مع الجهد",
    "difficulty": "hots",
    "questionEn": "The total radiated power of continuous X-rays emitted by a target anode of atomic number $Z$ with tube current $I$ and voltage $V$ scales as:",
    "questionAr": "تتناسب القدرة الإشعاعية الكلية للأشعة السينية المستمرة الصادرة عن هدف عدده الذري $Z$ بتيار $I$ وفرق جهد $V$ مع:",
    "optionsEn": [
      "$P_{\\text{X-ray}} \\propto \\frac{Z \\cdot I}{V}$",
      "$P_{\\text{X-ray}} \\propto Z \\cdot I \\cdot V^2$",
      "$P_{\\text{X-ray}} \\propto Z^2 \\cdot I^2 \\cdot V$",
      "$P_{\\text{X-ray}} \\propto \\sqrt{Z I V}$"
    ],
    "optionsAr": [
      "$P_{\\text{X-ray}} \\propto \\frac{Z \\cdot I}{V}$",
      "$P_{\\text{X-ray}} \\propto Z \\cdot I \\cdot V^2$",
      "$P_{\\text{X-ray}} \\propto Z^2 \\cdot I^2 \\cdot V$",
      "$P_{\\text{X-ray}} \\propto \\sqrt{Z I V}$"
    ],
    "correctAnswer": "$P_{\\text{X-ray}} \\propto Z \\cdot I \\cdot V^2$",
    "correctIndex": 1,
    "hintEn": "Integrating Kramers' law $I(\\nu) = C Z (\\nu_{\\max} - \\nu)$ from $0$ to $\\nu_{\\max} \\propto V$ yields $\\int \\propto Z \\nu_{\\max}^2 \\propto Z V^2$.",
    "hintAr": "مكاملة قانون كرامرز من $0$ إلى $\\nu_{\\max} \\propto V$ تعطي مساحة تتناسب مع $Z \\nu_{\\max}^2 \\propto Z V^2$.",
    "stepByStepSolutionEn": [
      "Multiplying by the electron current $I$ gives total power $P \\propto Z I V^2$. Thus efficiency $\\eta = P_{\\text{X-ray}} / P_{\\text{electric}} \\propto Z V$."
    ],
    "stepByStepSolutionAr": [
      "وبالضرب في تيار الإلكترونات $I$ نحصل على $P \\propto Z I V^2$، مما يعني أن الكفاءة $\\eta = P_{\\text{X-ray}} / (I V) \\propto Z V$."
    ],
    "teacherTipEn": "Doubling tube voltage quadruples continuous X-ray output power!",
    "teacherTipAr": "مضاعفة جهد الأنبوب تضاعف القدرة الإشعاعية المستمرة أربع مرات!"
  },
  {
    "id": "egbac_phys_ch2_db_hots_47",
    "titleEn": "Linear Attenuation Coefficient Components",
    "titleAr": "مكونات معامل التوهين الخطي للأشعة السينية",
    "difficulty": "hots",
    "questionEn": "The total linear attenuation coefficient $\\mu$ of matter for an X-ray beam is the algebraic sum of three fundamental interaction mechanisms:",
    "questionAr": "معامل التوهين الخطي الكلي $\\mu$ للمادة لحزمة أشعة سينية هو المجموع الجبري لثلاث آليات تفاعل أساسية:",
    "optionsEn": [
      "$\\mu = \\mu_{\\text{refraction}} + \\mu_{\\text{dispersion}}$",
      "$\\mu = \\mu_{\\text{gravitational}} \\times \\mu_{\\text{magnetic}}$",
      "$\\mu = \\mu_{\\text{photoelectric}} + \\mu_{\\text{Compton}} + \\mu_{\\text{pair production}}$",
      "$\\mu = \\mu_{\\text{nuclear fission}} / \\mu_{\\text{elastic}}$"
    ],
    "optionsAr": [
      "$\\mu = \\mu_{\\text{refraction}} + \\mu_{\\text{dispersion}}$",
      "$\\mu = \\mu_{\\text{gravitational}} \\times \\mu_{\\text{magnetic}}$",
      "$\\mu = \\mu_{\\text{photoelectric}} + \\mu_{\\text{Compton}} + \\mu_{\\text{pair production}}$",
      "$\\mu = \\mu_{\\text{nuclear fission}} / \\mu_{\\text{elastic}}$"
    ],
    "correctAnswer": "$\\mu = \\mu_{\\text{photoelectric}} + \\mu_{\\text{Compton}} + \\mu_{\\text{pair production}}$",
    "correctIndex": 2,
    "hintEn": "Photons interact via Photoelectric absorption ($< 50\\text{ keV}$), Compton scattering ($50\\text{ keV} - 5\\text{ MeV}$), and Pair production ($> 1.022\\text{ MeV}$).",
    "hintAr": "تتفاعل الفوتونات عبر الامتصاص الكهروضوئي، وتشتت كومتون، والإنتاج الزوجي عند الطاقات العالية.",
    "stepByStepSolutionEn": [
      "The total interaction probability per unit distance is the sum of the independent probabilities of each process: $\\mu = \\tau + \\sigma + \\kappa$."
    ],
    "stepByStepSolutionAr": [
      "احتمالية التفاعل الكلية لكل وحدة مسافة هي مجموع احتمالات العمليات المستقلة الثلاث: $\\mu = \\tau + \\sigma + \\kappa$."
    ],
    "teacherTipEn": "In diagnostic radiology ($30 - 120\\text{ keV}$), photoelectric and Compton effects dominate.",
    "teacherTipAr": "في الأشعة التشخيصية الطبية يسود التأثير الكهروضوئي وتشتت كومتون."
  },
  {
    "id": "egbac_phys_ch2_db_hots_48",
    "titleEn": "Composite Tissue Transmission Calculation",
    "titleAr": "حساب النفاذية عبر نسيج مركب من العظم والعضل",
    "difficulty": "hots",
    "questionEn": "An X-ray beam passes through a composite tissue consisting of $2.0\\text{ cm}$ of muscle ($\\mu_m = 0.20\\text{ cm}^{-1}$) and $1.0\\text{ cm}$ of dense bone ($\\mu_b = 1.60\\text{ cm}^{-1}$). The fraction of the incident intensity transmitted through the tissue is:",
    "questionAr": "تمر حزمة أشعة سينية عبر نسيج مركب يتكون من $2.0\\text{ cm}$ من العضلات ($\\mu_m = 0.20\\text{ cm}^{-1}$) و $1.0\\text{ cm}$ من العظام الكثيفة ($\\mu_b = 1.60\\text{ cm}^{-1}$). نسبة الشدة الساقطة النافذة عبر هذا النسيج تساوي:",
    "optionsEn": [
      "$e^{-1.8} \\approx 0.165$",
      "$e^{-0.20} \\approx 0.819$",
      "$e^{-3.2} \\approx 0.041$",
      "$e^{-2.0} \\approx 0.135 (13.5\\%)$"
    ],
    "optionsAr": [
      "$e^{-1.8} \\approx 0.165$",
      "$e^{-0.20} \\approx 0.819$",
      "$e^{-3.2} \\approx 0.041$",
      "$e^{-2.0} \\approx 0.135 (13.5\\%)$"
    ],
    "correctAnswer": "$e^{-2.0} \\approx 0.135 (13.5\\%)$",
    "correctIndex": 3,
    "hintEn": "Total optical depth $\\mu_{\\text{total}} x = \\mu_m x_m + \\mu_b x_b$.",
    "hintAr": "العمق البصري الكلي $\\mu_{\\text{total}} x = \\mu_m x_m + \\mu_b x_b$.",
    "stepByStepSolutionEn": [
      "$\\mu_{\\text{eff}} x = (0.20 \\times 2.0) + (1.60 \\times 1.0) = 0.40 + 1.60 = 2.00$. Transmitted fraction $I / I_0 = e^{-2.0} \\approx 0.1353 = 13.5\\%$."
    ],
    "stepByStepSolutionAr": [
      "$\\mu_{\\text{eff}} x = (0.20 \\times 2.0) + (1.60 \\times 1.0) = 0.40 + 1.60 = 2.00$، وتكون النسبة النافذة $I / I_0 = e^{-2.0} \\approx 0.1353 = 13.5\\%$."
    ],
    "teacherTipEn": "Notice the bone contributes $80\\%$ of the total attenuation despite being half as thick.",
    "teacherTipAr": "لاحظ أن العظم أسهم بـ $80\\%$ من التوهين الكلي رغم أن سمكه نصف سمك العضلات فقط."
  },
  {
    "id": "egbac_phys_ch2_db_hots_49",
    "titleEn": "Retarding Potential in Characteristic Photoelectric Emission",
    "titleAr": "جهد الإيقاف في الانبعاث الكهروضوئي بالأشعة السينية",
    "difficulty": "hots",
    "questionEn": "A molybdenum $K_\\alpha$ characteristic X-ray photon ($h\\nu = 17.5\\text{ keV}$) strikes a silver photocathode with work function $\\Phi = 4.7\\text{ eV}$. The stopping potential $V_s$ required to halt the fastest emitted photoelectrons is:",
    "questionAr": "يسقط فوتون أشعة سينية مميز $K_\\alpha$ للموليبدنوم ($h\\nu = 17.5\\text{ keV}$) على مهبط فضي دالة شغله $\\Phi = 4.7\\text{ eV}$. جهد الإيقاف $V_s$ اللازم لمنع أسرع الإلكترونات الضوئية المنبعثة يساوي:",
    "optionsEn": [
      "$17495.3\\text{ V} (\\approx 17.5\\text{ kV})$",
      "$4.7\\text{ V}$",
      "$17.5\\text{ V}$",
      "$3.72\\text{ kV}$"
    ],
    "optionsAr": [
      "$17495.3\\text{ V} (\\approx 17.5\\text{ kV})$",
      "$4.7\\text{ V}$",
      "$17.5\\text{ V}$",
      "$3.72\\text{ kV}$"
    ],
    "correctAnswer": "$17495.3\\text{ V} (\\approx 17.5\\text{ kV})$",
    "correctIndex": 0,
    "hintEn": "Einstein photoelectric equation: $e V_s = h\\nu - \\Phi$.",
    "hintAr": "معادلة أينشتاين الكهروضوئية: $e V_s = h\\nu - \\Phi$.",
    "stepByStepSolutionEn": [
      "$e V_s = 17500\\text{ eV} - 4.7\\text{ eV} = 17495.3\\text{ eV} \\implies V_s = 17495.3\\text{ V} \\approx 17.5\\text{ kV}$."
    ],
    "stepByStepSolutionAr": [
      "$e V_s = 17500\\text{ eV} - 4.7\\text{ eV} = 17495.3\\text{ eV} \\implies V_s = 17495.3\\text{ V} \\approx 17.5\\text{ kV}$."
    ],
    "teacherTipEn": "Because X-ray energies are thousands of times larger than metal work functions, $\\Phi$ is almost negligible.",
    "teacherTipAr": "لأن طاقات الأشعة السينية تفوق دالة الشغل بآلاف المرات، فإن $\\Phi$ تعد مهملة عملياً في هذا النطاق."
  },
  {
    "id": "egbac_phys_ch2_db_hots_50",
    "titleEn": "Thermal Doppler Broadening FWHM Formula",
    "titleAr": "صيغة الاتساع الكامل عند نصف النهاية العظمى لدوبلر",
    "difficulty": "hots",
    "questionEn": "The full-width at half-maximum (FWHM, $\\Delta\\nu_D$) of a spectral line of rest frequency $\\nu_0$ emitted by a gas of atomic mass $M$ at thermodynamic temperature $T$ due to thermal Doppler motion is:",
    "questionAr": "يعبر عن الاتساع الكامل عند نصف النهاية العظمى (FWHM, $\\Delta\\nu_D$) لخط طيفي تردده الأصلي $\\nu_0$ ينبعث من غاز كتلته الذرية $M$ عند درجة حرارة $T$ بفعل حركة دوبلر بالعلاقة:",
    "optionsEn": [
      "$\\Delta\\nu_D = \\frac{\\nu_0 M c^2}{k_B T}$",
      "$\\Delta\\nu_D = 2\\nu_0 \\sqrt{\\frac{2 k_B T \\ln 2}{M c^2}}$",
      "$\\Delta\\nu_D = 2\\nu_0 \\left(\\frac{k_B T}{M c^2}\\right)^2$",
      "$\\Delta\\nu_D = 0$"
    ],
    "optionsAr": [
      "$\\Delta\\nu_D = \\frac{\\nu_0 M c^2}{k_B T}$",
      "$\\Delta\\nu_D = 2\\nu_0 \\sqrt{\\frac{2 k_B T \\ln 2}{M c^2}}$",
      "$\\Delta\\nu_D = 2\\nu_0 \\left(\\frac{k_B T}{M c^2}\\right)^2$",
      "$\\Delta\\nu_D = 0$"
    ],
    "correctAnswer": "$\\Delta\\nu_D = 2\\nu_0 \\sqrt{\\frac{2 k_B T \\ln 2}{M c^2}}$",
    "correctIndex": 1,
    "hintEn": "Doppler profile is Gaussian: $I(\\nu) \\propto \\exp\\left(-\\frac{M c^2 (\\nu - \\nu_0)^2}{2 k_B T \\nu_0^2}\\right)$.",
    "hintAr": "منحنى دوبلر يتبع توزيع جاوس: $I(\\nu) \\propto \\exp\\left(-\\frac{M c^2 (\\nu - \\nu_0)^2}{2 k_B T \\nu_0^2}\\right)$.",
    "stepByStepSolutionEn": [
      "Setting the exponential to $1/2$ yields the half-maximum condition $(\\nu - \\nu_0)^2 = \\frac{2 k_B T \\ln 2}{M c^2} \\nu_0^2$. Doubling this half-width gives $\\text{FWHM} = 2\\nu_0 \\sqrt{\\frac{2 k_B T \\ln 2}{M c^2}}$."
    ],
    "stepByStepSolutionAr": [
      "بمساواة الدالة الأسية بالنصف نحصل على شرط نصف القيمة العظمى، ومضاعفتها تعطي اتساع FWHM الكامل."
    ],
    "teacherTipEn": "Notice that Doppler width increases as $\\sqrt{T}$ and decreases as $1/\\sqrt{M}$.",
    "teacherTipAr": "لاحظ أن اتساع دوبلر يتناسب طردياً مع $\\sqrt{T}$ وعكسياً مع $1/\\sqrt{M}$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_51",
    "titleEn": "Doppler FWHM for Hydrogen at 300 K",
    "titleAr": "حساب اتساع دوبلر للهيدروجين عند 300 كلفن",
    "difficulty": "hots",
    "questionEn": "For the hydrogen $H_\\alpha$ line ($\\lambda_0 = 656.3\\text{ nm}, \\nu_0 = 4.57 \\times 10^{14}\\text{ Hz}$) at room temperature ($T = 300\\text{ K}$, $M c^2 \\approx 938\\text{ MeV}$, $k_B T \\approx 0.0259\\text{ eV}$), the Doppler FWHM linewidth $\\Delta\\lambda_D$ is approximately:",
    "questionAr": "لخط هيدروجين $H_\\alpha$ ($\\lambda_0 = 656.3\\text{ nm}$، $\\nu_0 = 4.57 \\times 10^{14}\\text{ Hz}$) عند درجة حرارة الغرفة ($T = 300\\text{ K}$)، يبلغ اتساع دوبلر FWHM تقريباً:",
    "optionsEn": [
      "$1.2\\text{ nm}$",
      "$50\\text{ nm}$",
      "$0.004\\text{ nm} (0.04\\text{ \\AA})$",
      "$1.0 \\times 10^{-6}\\text{ nm}$"
    ],
    "optionsAr": [
      "$1.2\\text{ nm}$",
      "$50\\text{ nm}$",
      "$0.004\\text{ nm} (0.04\\text{ \\AA})$",
      "$1.0 \\times 10^{-6}\\text{ nm}$"
    ],
    "correctAnswer": "$0.004\\text{ nm} (0.04\\text{ \\AA})$",
    "correctIndex": 2,
    "hintEn": "$\\frac{\\Delta\\lambda_D}{\\lambda_0} = 2 \\sqrt{\\frac{2 \\ln 2 \\cdot k_B T}{M c^2}} \\approx 7.16 \\times 10^{-7} \\sqrt{T / M(\\text{amu})}$.",
    "hintAr": "$\\frac{\\Delta\\lambda_D}{\\lambda_0} = 2 \\sqrt{\\frac{2 \\ln 2 \\cdot k_B T}{M c^2}} \\approx 7.16 \\times 10^{-7} \\sqrt{T / M(\\text{amu})}$.",
    "stepByStepSolutionEn": [
      "$\\frac{\\Delta\\lambda}{\\lambda_0} = 7.16 \\times 10^{-7} \\sqrt{300 / 1} \\approx 1.24 \\times 10^{-5} \\implies \\Delta\\lambda = 656.3 \\times 1.24 \\times 10^{-5} \\approx 0.008\\text{ nm} \\approx 0.04 - 0.08\\text{ \\AA}$."
    ],
    "stepByStepSolutionAr": [
      "$\\frac{\\Delta\\lambda}{\\lambda_0} \\approx 1.24 \\times 10^{-5} \\implies \\Delta\\lambda \\approx 0.008\\text{ nm}$."
    ],
    "teacherTipEn": "This thermal broadening is thousands of times wider than the natural linewidth $\\Delta\\lambda_{\\text{nat}} \\sim 10^{-6}\\text{ nm}$.",
    "teacherTipAr": "هذا الاتساع الحراري يفوق الاتساع الطبيعي بآلاف المرات عند درجات الحرارة العادية."
  },
  {
    "id": "egbac_phys_ch2_db_hots_52",
    "titleEn": "Characteristic X-Ray Transition in Muonic Lead",
    "titleAr": "انتقال الأشعة السينية المميزة في رصاص ميوني",
    "difficulty": "hots",
    "questionEn": "In a muonic atom of lead ($Z=82$), the muon replaces an orbital electron. Because the muon orbits deep inside the nuclear volume ($R_{\\text{nucleus}} \\approx 7\\text{ fm}$), the measured $2P \\to 1S$ transition energy deviates significantly from point-charge Bohr theory. This deviation provides direct measurement of:",
    "questionAr": "في ذرة ميونية لعنصر الرصاص ($Z=82$)، يدور الميون داخل حيز النواة نفسه ($R_{\\text{nucleus}} \\approx 7\\text{ fm}$). إن انحراف طاقة انتقال $2P \\to 1S$ المقاسة عن نظرية بور للشحنة النقطية يتيح القياس المباشر لـ:",
    "optionsEn": [
      "The temperature of the core of the Sun",
      "The dielectric constant of water",
      "The speed of gravitational waves in deep space",
      "The spatial charge distribution radius and skin thickness of the heavy nucleus"
    ],
    "optionsAr": [
      "درجة حرارة قلب الشمس",
      "ثابت العزل الكهربي للماء",
      "سرعة موجات الجاذبية في الفضاء السحيق",
      "نصف قطر التوزيع المكاني للشحنة وسمك القشرة السطحية للنواة الثقيلة"
    ],
    "correctAnswer": "The spatial charge distribution radius and skin thickness of the heavy nucleus",
    "correctIndex": 3,
    "hintEn": "Inside a uniformly charged sphere of radius $R$, the electrostatic potential is parabolic, not $1/r$.",
    "hintAr": "داخل كرة مشحونة بانتظام نصف قطرها $R$ يكون الجهد الكهربي قطعياً مكافئاً وليس $1/r$.",
    "stepByStepSolutionEn": [
      "Because the muon spends a large fraction of its time inside the nuclear boundary, it experiences less attractive charge, reducing the $1S$ binding energy from the point-charge prediction ($19\\text{ MeV}$) down to $\\sim 10.6\\text{ MeV}$."
    ],
    "stepByStepSolutionAr": [
      "لقضاء الميون وقتاً طويلاً داخل حدود النواة، يرى شحنة جذب أقل فتهبط طاقة ارتباطه من القيمة النقطية الناتجة عن بور ($19\\text{ MeV}$) إلى حوالي $10.6\\text{ MeV}$."
    ],
    "teacherTipEn": "One of the primary experimental benchmarks for nuclear structure models.",
    "teacherTipAr": "أحد أهم الاختبارات التجريبية المرجعية لنماذج البنية النووية."
  },
  {
    "id": "egbac_phys_ch2_db_hots_53",
    "titleEn": "Lamb-Retherford Experiment Microwave Transition",
    "titleAr": "تجربة لام-ريذرفورد وانتقال الموجات الميكروية",
    "difficulty": "hots",
    "questionEn": "In the landmark 1947 Lamb-Retherford experiment that discovered the Lamb shift, atomic hydrogen in the metastable $2S_{1/2}$ state was exposed to microwave radiation of frequency $\\nu \\approx 1057\\text{ MHz}$, inducing transitions to the $2P_{1/2}$ state. The experimental detection relied on the fact that:",
    "questionAr": "في تجربة لام-ريذرفورد التاريخية (1947) التي كشفت انزياح لام، عُرّضت ذرات الهيدروجين في المستوى شبه المستقر $2S_{1/2}$ لموجات ميكروية بتردد $\\nu \\approx 1057\\text{ MHz}$ حثت انتقالها إلى $2P_{1/2}$. اعتمد الرصد التجريبي على حقيقة أن:",
    "optionsEn": [
      "The $2P_{1/2}$ state decays rapidly ($1.6\\text{ ns}$) by emitting a Lyman-$\\alpha$ photon to ground, quenching the beam of metastable atoms hitting the detector",
      "The $2S$ and $2P$ states immediately fuse into helium nuclei",
      "The microwaves induce intense visible green laser emission",
      "The electron reverses its electric charge from negative to positive"
    ],
    "optionsAr": [
      "المستوى $2P_{1/2}$ يهبط سريعاً جداً ($1.6\\text{ ns}$) مشعاً فوتون ليمان-ألفا نحو الأرضي، مما يخمد حزمة الذرات شبه المستقرة الواصلة للكاشف",
      "مستويا $2S$ و $2P$ يندمجان فورياً ليكونا نوى هيليوم",
      "الموجات الميكروية تحث انبعاث ليزري أخضر مرئي فائق الشدة",
      "الإلكترون يعكس شحنته الكهربية من سالبة إلى موجبة"
    ],
    "correctAnswer": "The $2P_{1/2}$ state decays rapidly ($1.6\\text{ ns}$) by emitting a Lyman-$\\alpha$ photon to ground, quenching the beam of metastable atoms hitting the detector",
    "correctIndex": 0,
    "hintEn": "Metastable $2S$ atoms eject secondary electrons from a tungsten target detector, registering a current.",
    "hintAr": "ذرات $2S$ شبه المستقرة تصطدم بكاشف تنجستن فتطرد إلكترونات ثانوية تسجل تياراً كهربياً.",
    "stepByStepSolutionEn": [
      "When the microwave frequency matches the exact Lamb shift ($1057\\text{ MHz}$), atoms jump from long-lived $2S_{1/2}$ to short-lived $2P_{1/2}$, instantly radiating away to $1S$ and causing a resonant drop in detected detector current."
    ],
    "stepByStepSolutionAr": [
      "عند ضبط تردد الميكروويف على انزياح لام بدقة، تقفز الذرات إلى $2P_{1/2}$ وتهبط فوراً للمستوى الأرضي، فيحدث هبوط رنيني حاد في تيار الكاشف."
    ],
    "teacherTipEn": "This exquisitely sensitive method measured the shift with $0.1\\%$ precision.",
    "teacherTipAr": "قاست هذه الطريقة فائقة البراعة الانزياح بدقة تفوق $0.1\\%$."
  },
  {
    "id": "egbac_phys_ch2_db_hots_54",
    "titleEn": "H I Regions 21 cm Line Optical Depth",
    "titleAr": "العمق البصري لخط 21 سم في مناطق الهيدروجين المتعادل",
    "difficulty": "hots",
    "questionEn": "The probability of the spontaneous spin-flip transition producing the $21\\text{ cm}$ line in hydrogen is exceptionally tiny: Einstein $A_{10} \\approx 2.85 \\times 10^{-15}\\text{ s}^{-1}$ (spontaneous lifetime $\\tau \\approx 11\\text{ million years}$). Despite this minuscule rate, the $21\\text{ cm}$ line is easily detected across the cosmos because:",
    "questionAr": "احتمالية الانتقال التلقائي لانقلاب الغزل المولد لخط $21\\text{ cm}$ في الهيدروجين ضئيلة للغاية: معامل أينشتاين $A_{10} \\approx 2.85 \\times 10^{-15}\\text{ s}^{-1}$ (عمر زمني تلقائي $\\sim 11\\text{ مليون سنة}$). ورغم هذا المعدل الضئيل، يُرصد خط $21\\text{ cm}$ بسهولة عبر الكون لأن:",
    "optionsEn": [
      "The photons travel faster than light in the cosmic microwave background",
      "Interstellar space contains colossal clouds with trillions of tons of neutral hydrogen atoms, making the integrated column density enormous",
      "Each hydrogen atom emits ten billion photons per microsecond",
      "The line is amplified by supermassive black hole event horizons"
    ],
    "optionsAr": [
      "الفوتونات تتحرك بسرعة تفوق سرعة الضوء في الخلفية الكونية الميكروية",
      "الفضاء بين النجمي يحتوي على سحب هائلة تضم تريليونات الأطنان من ذرات الهيدروجين المتعادل، مما يجعل الكثافة العمودية التراكمية بالغة الضخامة",
      "كل ذرة هيدروجين تشع عشرة مليارات فوتون في الميكروثانية",
      "الخط يُضخّم بفعل أفق الحدث للثقوب السوداء فائقة الضخامة"
    ],
    "correctAnswer": "Interstellar space contains colossal clouds with trillions of tons of neutral hydrogen atoms, making the integrated column density enormous",
    "correctIndex": 1,
    "hintEn": "Total emitted power equals total number of atoms times single-atom transition rate: $P = N \\cdot h\\nu \\cdot A_{10}$.",
    "hintAr": "القدرة المشعة الكلية تساوي حاصل ضرب عدد الذرات في معدل انتقال الذرة الواحدة: $P = N \\cdot h\\nu \\cdot A_{10}$.",
    "stepByStepSolutionEn": [
      "Although each individual atom waits millions of years to emit, a spiral galaxy containing $10^{67}$ hydrogen atoms emits intense continuous radio signals detectable by Earth radio telescopes."
    ],
    "stepByStepSolutionAr": [
      "رغم أن الذرة الواحدة تنتظر ملايين السنين لتشع فوتوناً، إلا أن المجرة الحلزونية تحوي $10^{67}$ ذرة هيدروجين، مما يولد إشارة راديوية مستمرة قوية ترصدها التلسكوبات الأرضية."
    ],
    "teacherTipEn": "First predicted by Hendrik van de Hulst in 1944 and confirmed in 1951 by Ewen and Purcell.",
    "teacherTipAr": "تنبأ به هندريك فان دي هولست عام 1944 ورصده إيوين وبورسيل عام 1951."
  },
  {
    "id": "egbac_phys_ch2_db_hots_55",
    "titleEn": "Bremsstrahlung Radiative vs Collisional Energy Loss",
    "titleAr": "مقارنة الفقد الإشعاعي بالكبح والفقد التصادمي",
    "difficulty": "hots",
    "questionEn": "For high-energy electrons traversing matter, the ratio of energy loss by Bremsstrahlung radiation to energy loss by ionization collisions ($\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}}$) is approximated by Bethe and Heitler as:",
    "questionAr": "للإلكترونات عالية الطاقة التي تخترق المادة، يعبر عن نسبة فقد الطاقة بإشعاع الكبح إلى فقد الطاقة بالتصادم المؤين ($\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}}$) بتقريب بيث وهايتلر بالعلاقة:",
    "optionsEn": [
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} \\approx \\frac{800\\text{ MeV}}{Z \\cdot E}$",
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} \\approx \\frac{Z^2}{E^2}$",
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} \\approx \\frac{Z \\cdot E}{800\\text{ MeV}}$",
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} = 1.0\\text{ for all energies}$"
    ],
    "optionsAr": [
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} \\approx \\frac{800\\text{ MeV}}{Z \\cdot E}$",
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} \\approx \\frac{Z^2}{E^2}$",
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} \\approx \\frac{Z \\cdot E}{800\\text{ MeV}}$",
      "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} = 1.0\\text{ لجميع الطاقات}$"
    ],
    "correctAnswer": "$\\frac{(dE/dx)_{\\text{rad}}}{(dE/dx)_{\\text{coll}}} \\approx \\frac{Z \\cdot E}{800\\text{ MeV}}$",
    "correctIndex": 2,
    "hintEn": "Radiative loss scales with $Z^2 E$, while collisional loss scales logarithmically with $E$.",
    "hintAr": "الفقد الإشعاعي يتناسب مع $Z^2 E$، بينما يزداد الفقد التصادمي لوغاريتمياً ببطء مع $E$.",
    "stepByStepSolutionEn": [
      "The critical energy $E_c \\approx \\frac{800\\text{ MeV}}{Z}$ is where radiative and collisional losses are equal. In lead ($Z=82$), $E_c \\approx 9.8\\text{ MeV}$. Above this energy, electrons lose energy almost purely by Bremsstrahlung."
    ],
    "stepByStepSolutionAr": [
      "الطاقة الحرجة $E_c \\approx \\frac{800\\text{ MeV}}{Z}$ تتساوى عندها الخسارتان. وفي الرصاص ($Z=82$) تبلغ $E_c \\approx 9.8\\text{ MeV}$، وفوقها تفقد الإلكترونات طاقتها كلياً بإشعاع الكبح."
    ],
    "teacherTipEn": "Critical in high-energy particle physics and linear accelerator radiation therapy.",
    "teacherTipAr": "معادلة محورية في فيزياء الجسيمات الأولية والعلاج الإشعاعي بالمعجلات الخطية."
  },
  {
    "id": "egbac_phys_ch2_db_hots_56",
    "titleEn": "Critical Angle in Total External Reflection of X-Rays",
    "titleAr": "الزاوية الحرجة للانعكاس الكلي الخارجي للأشعة السينية",
    "difficulty": "hots",
    "questionEn": "For X-rays, the complex refractive index of matter is slightly less than unity: $n = 1 - \\delta$, where $\\delta \\sim 10^{-5} - 10^{-6}$. Because $n < 1$, X-rays incident from vacuum/air onto a smooth mirror undergo total external reflection when the glancing angle $\\theta$ is below the critical angle:",
    "questionAr": "للأشعة السينية، يكون معامل انكسار المادة أقل بقليل من الواحد الصحيح: $n = 1 - \\delta$، حيث $\\delta \\sim 10^{-5} - 10^{-6}$. ولأن $n < 1$، تعاني الأشعة السينية الساقطة من الفراغ على مرآة ملساء انعكاساً كلياً خارجياً إذا كانت زاوية السقوط المماسية $\\theta$ أقل من الزاوية الحرجة:",
    "optionsEn": [
      "$\\theta_c = 45^\\circ$",
      "$\\theta_c = 90^\\circ$",
      "Total external reflection is impossible for electromagnetic waves",
      "$\\theta_c \\approx \\sqrt{2\\delta}$ (typically a fraction of a degree, grazing incidence)"
    ],
    "optionsAr": [
      "$\\theta_c = 45^\\circ$",
      "$\\theta_c = 90^\\circ$",
      "الانعكاس الكلي الخارجي مستحيل الحدوث للموجات الكهرومغناطيسية",
      "$\\theta_c \\approx \\sqrt{2\\delta}$ (عادة جزء صغير من الدرجة، سقوط مماسي)"
    ],
    "correctAnswer": "$\\theta_c \\approx \\sqrt{2\\delta}$ (typically a fraction of a degree, grazing incidence)",
    "correctIndex": 3,
    "hintEn": "Snell's law at grazing angle: $\\cos\\theta_c = n = 1 - \\delta \\implies 1 - \\frac{\\theta_c^2}{2} \\approx 1 - \\delta \\implies \\theta_c \\approx \\sqrt{2\\delta}$.",
    "hintAr": "قانون سنل عند زاوية مماسية: $\\cos\\theta_c = n = 1 - \\delta \\implies 1 - \\frac{\\theta_c^2}{2} \\approx 1 - \\delta \\implies \\theta_c \\approx \\sqrt{2\\delta}$.",
    "stepByStepSolutionEn": [
      "Because $\\theta_c$ is tiny ($< 1^\\circ$), conventional normal-incidence mirrors cannot reflect X-rays. X-ray telescopes must use nested coaxial grazing-incidence mirrors (Wolter optics)."
    ],
    "stepByStepSolutionAr": [
      "لأن $\\theta_c$ ضئيلة جداً (أقل من درجة)، تعجز المرايا التقليدية عن عكس الأشعة السينية عمودياً، مما يستوجب استخدام مرايا متداخلة بالسقوط المماسي (بصريات ولتر)."
    ],
    "teacherTipEn": "The NASA Chandra X-ray Observatory uses this exact principle to image black holes and supernovas.",
    "teacherTipAr": "يستخدم مرصد شاندرا الفضائي التابع لناسا هذا المبدأ لرصد الثقوب السوداء والمستعرات العظمى."
  },
  {
    "id": "egbac_phys_ch2_db_hots_57",
    "titleEn": "Auger Yield vs Radiative Decay Quantum Branching",
    "titleAr": "التفرع الكمي بين مردود أوجيه والانحلال الإشعاعي",
    "difficulty": "hots",
    "questionEn": "In a medical target material, if the fluorescent yield of the $K$-shell is $\\omega_K = 0.40$, this quantitatively implies that for every 1000 atoms ionized in the $K$-shell:",
    "questionAr": "في مادة هدف طبية، إذا كان المردود الفلوري لغلاف $K$ هو $\\omega_K = 0.40$، فإن هذا يعني كمياً أنه لكل 1000 ذرة تتأين في الغلاف $K$:",
    "optionsEn": [
      "Exactly 400 atoms emit a characteristic X-ray photon, while 600 atoms de-excite via Auger electron emission",
      "1000 atoms emit X-rays and 400 emit neutrons",
      "All 1000 atoms remain permanently ionized without de-exciting",
      "400 atoms undergo nuclear fission and 600 undergo nuclear fusion"
    ],
    "optionsAr": [
      "400 ذرة تشع فوتون أشعة سينية مميز، بينما تهبط 600 ذرة عبر انبعاث إلكترون أوجيه",
      "1000 ذرة تشع أشعة سينية و 400 تشع نيوترونات",
      "تظل جميع الذرات الـ 1000 متأينة دائماً دون هبوط",
      "400 ذرة تعاني انشطاراً نووياً و 600 تعاني اندماجاً نووياً"
    ],
    "correctAnswer": "Exactly 400 atoms emit a characteristic X-ray photon, while 600 atoms de-excite via Auger electron emission",
    "correctIndex": 0,
    "hintEn": "$\\omega_K + a_K = 1$, where $a_K$ is the Auger fraction.",
    "hintAr": "$\\omega_K + a_K = 1$، حيث $a_K$ يمثل نسبة انبعاث أوجيه.",
    "stepByStepSolutionEn": [
      "Since $\\omega_K = 0.40$, the Auger fraction is $a_K = 1 - 0.40 = 0.60$. Therefore, out of 1000 vacancies, $0.40 \\times 1000 = 400$ emit X-rays and $0.60 \\times 1000 = 600$ emit Auger electrons."
    ],
    "stepByStepSolutionAr": [
      "بما أن $\\omega_K = 0.40$، فإن كسر أوجيه هو $a_K = 0.60$. وعليه من بين 1000 فجوة: 400 تشع أشعة سينية و 600 تطرد إلكترونات أوجيه."
    ],
    "teacherTipEn": "Auger electrons deposit high ionizing doses locally, which is exploited in targeted radionuclide cancer therapy.",
    "teacherTipAr": "تفرغ إلكترونات أوجيه جرعة تأيين مركزة موضعياً، وتستغل في العلاج الإشعاعي النووي الموجه للأورام."
  },
  {
    "id": "egbac_phys_ch2_db_hots_58",
    "titleEn": "Rydberg Atom Radiative Lifetime Scaling",
    "titleAr": "تناسب العمر الزمني الإشعاعي لذرات ريدبيرغ ذات الإثارة الفائقة",
    "difficulty": "hots",
    "questionEn": "In highly excited Rydberg hydrogenic atoms, the spontaneous radiative decay lifetime $\\tau_n$ of principal quantum level $n$ scales according to electric dipole selection rules with $n$ approximately as:",
    "questionAr": "في ذرات الهيدروجين المثارة إلى مستويات ريدبيرغ الشاهقة، يتناسب العمر الزمني الإشعاعي التلقائي $\\tau_n$ للمستوى الرئيسي $n$ وفق قواعد الاختيار لثنائي القطب الكهربي مع $n$ تقريباً كـ:",
    "optionsEn": [
      "$\\tau_n \\propto \\frac{1}{n^2}$",
      "$\\tau_n \\propto n^3$ (or $n^{4.5}$ for maximum circular states)",
      "$\\tau_n \\propto n^{-4}$",
      "$\\tau_n$ is strictly independent of $n$"
    ],
    "optionsAr": [
      "$\\tau_n \\propto \\frac{1}{n^2}$",
      "$\\tau_n \\propto n^3$ (أو $n^{4.5}$ للحالات الدائرية ذات أقصى زخم زاوي)",
      "$\\tau_n \\propto n^{-4}$",
      "$\\tau_n$ ثابت تماماً ومستقل عن $n$"
    ],
    "correctAnswer": "$\\tau_n \\propto n^3$ (or $n^{4.5}$ for maximum circular states)",
    "correctIndex": 1,
    "hintEn": "Recall the Einstein A coefficient: $A_{n \\to n'} \\propto \\omega^3 |\\langle n|r|n'\\rangle|^2$. Spontaneous transition rates drop dramatically for high $n$.",
    "hintAr": "تذكر معامل آينشتاين للانبعاث التلقائي: $A \\propto \\omega^3 |\\langle r \\rangle|^2$. ينخفض معدل الهبوط التلقائي بشكل حاد عند قيم $n$ الكبيرة.",
    "stepByStepSolutionEn": [
      "The transition rate is $A \\sim \\omega^3 |r|^2$. Summing over accessible lower states yields the total spontaneous transition rate $A_{\\text{total}} \\propto n^{-3}$, hence the radiative lifetime $\\tau_n = 1/A_{\\text{total}} \\propto n^3$."
    ],
    "stepByStepSolutionAr": [
      "يتناسب معدل الانتقال الإجمالي التلقائي مع مقلوب العمر الزمني الإشعاعي، حيث ينتج عن جمع احتمالات الانتقال أن $A_{\\text{total}} \\propto n^{-3}$، ومن ثم يكون العمر الزمني الإشعاعي $\\tau_n \\propto n^3$."
    ],
    "teacherTipEn": "Rydberg atoms with $n > 50$ are key platforms for quantum sensing and quantum information because their microsecond-to-millisecond lifetimes allow coherent quantum gate operations.",
    "teacherTipAr": "تعد ذرات ريدبيرغ ذات $n > 50$ ركيزة في الاستشعار والحوسبة الكمية لأن أعمارها الإشعاعية المديدة تتيح تنفيذ بوابات كمية مستقرة ترابطياً."
  }
]
};
