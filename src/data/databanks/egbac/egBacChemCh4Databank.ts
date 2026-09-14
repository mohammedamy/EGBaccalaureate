import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacChemCh4Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_chem_ch4_db_easy_01",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (1)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (1)",
    "difficulty": "easy",
    "questionEn": "In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_02",
    "titleEn": "Spin-Only Magnetic Moment Formula (2)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (2)",
    "difficulty": "easy",
    "questionEn": "The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_03",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (3)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (3)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 3] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 3] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_04",
    "titleEn": "Spin-Only Magnetic Moment Formula (4)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (4)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 4] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 4] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_05",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (5)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 5] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_06",
    "titleEn": "Spin-Only Magnetic Moment Formula (6)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 6] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_07",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (7)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 7] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_08",
    "titleEn": "Spin-Only Magnetic Moment Formula (8)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 8] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_09",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (9)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 9] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_10",
    "titleEn": "Spin-Only Magnetic Moment Formula (10)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 10] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_11",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (11)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 11] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_12",
    "titleEn": "Spin-Only Magnetic Moment Formula (12)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 12] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_13",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (13)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 13] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_14",
    "titleEn": "Spin-Only Magnetic Moment Formula (14)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 14] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_15",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (15)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 15] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_16",
    "titleEn": "Spin-Only Magnetic Moment Formula (16)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 16] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_17",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (17)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 17] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_18",
    "titleEn": "Spin-Only Magnetic Moment Formula (18)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 18] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_19",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (19)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 19] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_20",
    "titleEn": "Spin-Only Magnetic Moment Formula (20)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 20] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_21",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (21)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 21] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_22",
    "titleEn": "Spin-Only Magnetic Moment Formula (22)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 22] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_23",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (23)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 23] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_24",
    "titleEn": "Spin-Only Magnetic Moment Formula (24)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 24] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_25",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (25)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 25] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_26",
    "titleEn": "Spin-Only Magnetic Moment Formula (26)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 26] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_27",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (27)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 27] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_28",
    "titleEn": "Spin-Only Magnetic Moment Formula (28)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 28] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_29",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (29)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 29] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_30",
    "titleEn": "Spin-Only Magnetic Moment Formula (30)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 30] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_31",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (31)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 31] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_32",
    "titleEn": "Spin-Only Magnetic Moment Formula (32)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 32] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_33",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (33)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 33] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_34",
    "titleEn": "Spin-Only Magnetic Moment Formula (34)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 34] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_35",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (35)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 35] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_36",
    "titleEn": "Spin-Only Magnetic Moment Formula (36)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 36] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_37",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (37)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 37] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_38",
    "titleEn": "Spin-Only Magnetic Moment Formula (38)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 38] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_39",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (39)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 39] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_40",
    "titleEn": "Spin-Only Magnetic Moment Formula (40)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 40] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_41",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (41)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 41] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_42",
    "titleEn": "Spin-Only Magnetic Moment Formula (42)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 42] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_43",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (43)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 43] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_44",
    "titleEn": "Spin-Only Magnetic Moment Formula (44)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 44] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_45",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (45)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 45] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_46",
    "titleEn": "Spin-Only Magnetic Moment Formula (46)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 46] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_47",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (47)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 47] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_48",
    "titleEn": "Spin-Only Magnetic Moment Formula (48)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 48] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_49",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (49)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 49] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_50",
    "titleEn": "Spin-Only Magnetic Moment Formula (50)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 50] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_51",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (51)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 51] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_52",
    "titleEn": "Spin-Only Magnetic Moment Formula (52)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 52] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_53",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (53)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 53] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_54",
    "titleEn": "Spin-Only Magnetic Moment Formula (54)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 54] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_55",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (55)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 55] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_56",
    "titleEn": "Spin-Only Magnetic Moment Formula (56)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 56] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_easy_57",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (57)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 57] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_easy_58",
    "titleEn": "Spin-Only Magnetic Moment Formula (58)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 58] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  }
],
  medium: [
  {
    "id": "egbac_chem_ch4_db_medium_01",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (1)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (1)",
    "difficulty": "medium",
    "questionEn": "In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_02",
    "titleEn": "Spin-Only Magnetic Moment Formula (2)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (2)",
    "difficulty": "medium",
    "questionEn": "The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_03",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (3)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 3] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_04",
    "titleEn": "Spin-Only Magnetic Moment Formula (4)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 4] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_05",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (5)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 5] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_06",
    "titleEn": "Spin-Only Magnetic Moment Formula (6)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 6] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_07",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (7)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 7] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_08",
    "titleEn": "Spin-Only Magnetic Moment Formula (8)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 8] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_09",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (9)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 9] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_10",
    "titleEn": "Spin-Only Magnetic Moment Formula (10)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 10] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_11",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (11)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 11] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_12",
    "titleEn": "Spin-Only Magnetic Moment Formula (12)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 12] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_13",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (13)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 13] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_14",
    "titleEn": "Spin-Only Magnetic Moment Formula (14)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 14] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_15",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (15)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 15] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_16",
    "titleEn": "Spin-Only Magnetic Moment Formula (16)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 16] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_17",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (17)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 17] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_18",
    "titleEn": "Spin-Only Magnetic Moment Formula (18)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 18] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_19",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (19)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 19] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_20",
    "titleEn": "Spin-Only Magnetic Moment Formula (20)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 20] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_21",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (21)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 21] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_22",
    "titleEn": "Spin-Only Magnetic Moment Formula (22)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 22] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_23",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (23)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 23] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_24",
    "titleEn": "Spin-Only Magnetic Moment Formula (24)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 24] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_25",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (25)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 25] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_26",
    "titleEn": "Spin-Only Magnetic Moment Formula (26)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 26] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_27",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (27)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 27] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_28",
    "titleEn": "Spin-Only Magnetic Moment Formula (28)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 28] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_29",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (29)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 29] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_30",
    "titleEn": "Spin-Only Magnetic Moment Formula (30)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 30] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_31",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (31)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 31] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_32",
    "titleEn": "Spin-Only Magnetic Moment Formula (32)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 32] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_33",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (33)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 33] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_34",
    "titleEn": "Spin-Only Magnetic Moment Formula (34)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 34] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_35",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (35)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 35] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_36",
    "titleEn": "Spin-Only Magnetic Moment Formula (36)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 36] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_37",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (37)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 37] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_38",
    "titleEn": "Spin-Only Magnetic Moment Formula (38)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 38] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_39",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (39)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 39] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_40",
    "titleEn": "Spin-Only Magnetic Moment Formula (40)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 40] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_41",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (41)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 41] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_42",
    "titleEn": "Spin-Only Magnetic Moment Formula (42)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 42] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_43",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (43)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 43] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_44",
    "titleEn": "Spin-Only Magnetic Moment Formula (44)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 44] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_45",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (45)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 45] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_46",
    "titleEn": "Spin-Only Magnetic Moment Formula (46)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 46] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_47",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (47)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 47] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_48",
    "titleEn": "Spin-Only Magnetic Moment Formula (48)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 48] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_49",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (49)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 49] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_50",
    "titleEn": "Spin-Only Magnetic Moment Formula (50)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 50] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_51",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (51)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 51] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_52",
    "titleEn": "Spin-Only Magnetic Moment Formula (52)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 52] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_53",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (53)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 53] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_54",
    "titleEn": "Spin-Only Magnetic Moment Formula (54)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 54] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_55",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (55)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 55] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_56",
    "titleEn": "Spin-Only Magnetic Moment Formula (56)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 56] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_57",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (57)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 57] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_medium_58",
    "titleEn": "Spin-Only Magnetic Moment Formula (58)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 58] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_medium_59",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (59)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 59] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  }
],
  hots: [
  {
    "id": "egbac_chem_ch4_db_hots_01",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (1)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (1)",
    "difficulty": "hots",
    "questionEn": "In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_02",
    "titleEn": "Spin-Only Magnetic Moment Formula (2)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (2)",
    "difficulty": "hots",
    "questionEn": "The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_03",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (3)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 3] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_04",
    "titleEn": "Spin-Only Magnetic Moment Formula (4)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 4] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_05",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (5)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 5] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_06",
    "titleEn": "Spin-Only Magnetic Moment Formula (6)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 6] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_07",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (7)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 7] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_08",
    "titleEn": "Spin-Only Magnetic Moment Formula (8)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 8] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_09",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (9)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 9] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_10",
    "titleEn": "Spin-Only Magnetic Moment Formula (10)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 10] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_11",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (11)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 11] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_12",
    "titleEn": "Spin-Only Magnetic Moment Formula (12)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 12] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_13",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (13)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 13] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_14",
    "titleEn": "Spin-Only Magnetic Moment Formula (14)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 14] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_15",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (15)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 15] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_16",
    "titleEn": "Spin-Only Magnetic Moment Formula (16)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 16] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_17",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (17)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 17] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_18",
    "titleEn": "Spin-Only Magnetic Moment Formula (18)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 18] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_19",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (19)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 19] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_20",
    "titleEn": "Spin-Only Magnetic Moment Formula (20)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 20] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_21",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (21)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 21] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_22",
    "titleEn": "Spin-Only Magnetic Moment Formula (22)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 22] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_23",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (23)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 23] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_24",
    "titleEn": "Spin-Only Magnetic Moment Formula (24)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 24] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_25",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (25)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 25] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_26",
    "titleEn": "Spin-Only Magnetic Moment Formula (26)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 26] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_27",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (27)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 27] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_28",
    "titleEn": "Spin-Only Magnetic Moment Formula (28)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 28] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_29",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (29)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 29] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_30",
    "titleEn": "Spin-Only Magnetic Moment Formula (30)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 30] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_31",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (31)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 31] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_32",
    "titleEn": "Spin-Only Magnetic Moment Formula (32)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 32] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_33",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (33)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 33] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_34",
    "titleEn": "Spin-Only Magnetic Moment Formula (34)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 34] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_35",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (35)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 35] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_36",
    "titleEn": "Spin-Only Magnetic Moment Formula (36)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 36] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_37",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (37)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 37] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_38",
    "titleEn": "Spin-Only Magnetic Moment Formula (38)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 38] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_39",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (39)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 39] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_40",
    "titleEn": "Spin-Only Magnetic Moment Formula (40)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 40] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_41",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (41)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 41] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_42",
    "titleEn": "Spin-Only Magnetic Moment Formula (42)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 42] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_43",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (43)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 43] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_44",
    "titleEn": "Spin-Only Magnetic Moment Formula (44)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 44] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_45",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (45)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 45] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_46",
    "titleEn": "Spin-Only Magnetic Moment Formula (46)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 46] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_47",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (47)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 47] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_48",
    "titleEn": "Spin-Only Magnetic Moment Formula (48)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 48] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_49",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (49)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 49] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_50",
    "titleEn": "Spin-Only Magnetic Moment Formula (50)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 50] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_51",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (51)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 51] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_52",
    "titleEn": "Spin-Only Magnetic Moment Formula (52)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 52] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_53",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (53)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 53] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_54",
    "titleEn": "Spin-Only Magnetic Moment Formula (54)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 54] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_55",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (55)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 55] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_56",
    "titleEn": "Spin-Only Magnetic Moment Formula (56)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 56] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  },
  {
    "id": "egbac_chem_ch4_db_hots_57",
    "titleEn": "Crystal Field Splitting in Octahedral Complexes (57)",
    "titleAr": "انفصام المجال البلوري في المعقدات ثمانية السطوح (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] In an octahedral coordination field, the five degenerate d-orbitals split into two sets separated by crystal field energy $\\Delta_o$:",
    "questionAr": "[مسألة متدرجة 57] تحت تأثير مجال تناسقي ثماني السطوح، تنقسم الأوربيتالات الخمسة للمستوى $d$ إلى مجموعتين بينهما طاقة انفصام $\\Delta_o$ هما:",
    "optionsEn": [
      "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
      "Lower-energy $e_g$ and higher-energy $t_{2g}$",
      "A single set of 5 orbitals with identical energy",
      "Three sets of non-interacting s-orbitals"
    ],
    "optionsAr": [
      "مجموعة $t_{2g}$ ثلاثية الانتكاس الأقل طاقة ($d_{xy}, d_{yz}, d_{xz}$) ومجموعة $e_g$ ثنائية الانتكاس الأعلى طاقة ($d_{z^2}, d_{x^2-y^2}$)",
      "مجموعة $e_g$ الأقل طاقة ومجموعة $t_{2g}$ الأعلى طاقة",
      "مجموعة واحدة موحدة تظل فيها الأوربيتالات الخمسة متساوية الطاقة",
      "ثلاث مجموعات من أوربيتالات s غير المتفاعلة"
    ],
    "correctAnswer": "Lower-energy triply degenerate $t_{2g}$ orbitals ($d_{xy}, d_{yz}, d_{xz}$) and higher-energy doubly degenerate $e_g$ orbitals ($d_{z^2}, d_{x^2-y^2}$)",
    "correctIndex": 0,
    "hintEn": "Ligands approach along the coordinate axes ($x, y, z$), repelling $d_{z^2}$ and $d_{x^2-y^2}$ into higher energy ($e_g$).",
    "hintAr": "تقترب الليجاندات على امتداد المحاور مما يرفع طاقة أوربيتالات $e_g$ المتعامدة على المحاور ويخفض $t_{2g}$ الواقعة بين المحاور.",
    "stepByStepSolutionEn": [
      "Crystal Field Theory (CFT) octahedral splitting: $t_{2g}$ lowered by $-0.4\\Delta_o$, $e_g$ raised by $+0.6\\Delta_o$ relative to barycenter."
    ],
    "stepByStepSolutionAr": [
      "في المجال ثماني السطوح تهبط أوربيتالات $t_{2g}$ بمقدار $-0.4\\Delta_o$ وترتفع أوربيتالات $e_g$ بمقدار $+0.6\\Delta_o$."
    ],
    "teacherTipEn": "Strong-field ligands (e.g. $\\text{CN}^-$, $\\text{CO}$) produce large $\\Delta_o > P$ giving low-spin complexes with maximum pairing.",
    "teacherTipAr": "الليجاندات قوية المجال مثل السيانيد والكلوروكربونيل تسبب انفصاماً كبيراً $\\Delta_o > P$ فتكون معقدات منخفضة الغزل بازدواج الإلكترونات."
  },
  {
    "id": "egbac_chem_ch4_db_hots_58",
    "titleEn": "Spin-Only Magnetic Moment Formula (58)",
    "titleAr": "حساب العزم المغناطيسي للغزل فقط (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] The spin-only magnetic moment $\\mu_s$ of a transition metal complex ion with $n$ unpaired electrons is given by:",
    "questionAr": "[مسألة متدرجة 58] يحسب العزم المغناطيسي الناتج عن الغزل فقط $\\mu_s$ لأيون فلز انتقالي يحتوي على $n$ إلكترون مفرد بالعلاقة:",
    "optionsEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "optionsAr": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
      "$\\mu_s = n^2 \\text{ BM}$",
      "$\\mu_s = \\sqrt{n+2}\\text{ BM}$",
      "$\\mu_s = \\frac{n}{n+2}\\text{ BM}$"
    ],
    "correctAnswer": "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$",
    "correctIndex": 0,
    "hintEn": "BM stands for Bohr Magneton ($e\\hbar / 2m_e$). For $n = 3$, $\\mu = \\sqrt{3 \\times 5} = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "hintAr": "وحدة القياس بور ماجنيتون (BM). إذا كان $n = 3$ مفرد فإن $\\mu = \\sqrt{15} \\approx 3.87\\text{ BM}$.",
    "stepByStepSolutionEn": [
      "$\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. When $n=0$ (diamagnetic), $\\mu = 0$."
    ],
    "stepByStepSolutionAr": [
      "قانون العزم المغناطيسي: $\\mu_s = \\sqrt{n(n+2)}\\text{ BM}$. إذا كانت كل الإلكترونات مزدوجة فإن العزم يساوي صفراً (مادة دايامغناطيسية)."
    ],
    "teacherTipEn": "Color in transition metal complexes arises from d-d electronic transitions absorbing complementary visible wavelengths.",
    "teacherTipAr": "تنشأ ألوان مركبات الفلزات الانتقالية عن انتقالات الإلكترونات بين مستويات d المنفصمة ممتصة اللون المتمم."
  }
]
};
