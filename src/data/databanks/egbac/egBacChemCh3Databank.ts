import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacChemCh3Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_chem_ch3_db_easy_01",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (1)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (1)",
    "difficulty": "easy",
    "questionEn": "At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_02",
    "titleEn": "Faraday First and Second Laws of Electrolysis (2)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (2)",
    "difficulty": "easy",
    "questionEn": "The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_03",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (3)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (3)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 3] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 3] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_04",
    "titleEn": "Faraday First and Second Laws of Electrolysis (4)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (4)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 4] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 4] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_05",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (5)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 5] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_06",
    "titleEn": "Faraday First and Second Laws of Electrolysis (6)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 6] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_07",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (7)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 7] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_08",
    "titleEn": "Faraday First and Second Laws of Electrolysis (8)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 8] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_09",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (9)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 9] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_10",
    "titleEn": "Faraday First and Second Laws of Electrolysis (10)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 10] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_11",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (11)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 11] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_12",
    "titleEn": "Faraday First and Second Laws of Electrolysis (12)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 12] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_13",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (13)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 13] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_14",
    "titleEn": "Faraday First and Second Laws of Electrolysis (14)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 14] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_15",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (15)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 15] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_16",
    "titleEn": "Faraday First and Second Laws of Electrolysis (16)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 16] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_17",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (17)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 17] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_18",
    "titleEn": "Faraday First and Second Laws of Electrolysis (18)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 18] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_19",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (19)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 19] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_20",
    "titleEn": "Faraday First and Second Laws of Electrolysis (20)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 20] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_21",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (21)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 21] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_22",
    "titleEn": "Faraday First and Second Laws of Electrolysis (22)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 22] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_23",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (23)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 23] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_24",
    "titleEn": "Faraday First and Second Laws of Electrolysis (24)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 24] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_25",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (25)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 25] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_26",
    "titleEn": "Faraday First and Second Laws of Electrolysis (26)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 26] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_27",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (27)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 27] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_28",
    "titleEn": "Faraday First and Second Laws of Electrolysis (28)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 28] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_29",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (29)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 29] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_30",
    "titleEn": "Faraday First and Second Laws of Electrolysis (30)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 30] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_31",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (31)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 31] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_32",
    "titleEn": "Faraday First and Second Laws of Electrolysis (32)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 32] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_33",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (33)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 33] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_34",
    "titleEn": "Faraday First and Second Laws of Electrolysis (34)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 34] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_35",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (35)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 35] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_36",
    "titleEn": "Faraday First and Second Laws of Electrolysis (36)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 36] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_37",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (37)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 37] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_38",
    "titleEn": "Faraday First and Second Laws of Electrolysis (38)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 38] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_39",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (39)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 39] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_40",
    "titleEn": "Faraday First and Second Laws of Electrolysis (40)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 40] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_41",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (41)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 41] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_42",
    "titleEn": "Faraday First and Second Laws of Electrolysis (42)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 42] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_43",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (43)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 43] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_44",
    "titleEn": "Faraday First and Second Laws of Electrolysis (44)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 44] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_45",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (45)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 45] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_46",
    "titleEn": "Faraday First and Second Laws of Electrolysis (46)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 46] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_47",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (47)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 47] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_48",
    "titleEn": "Faraday First and Second Laws of Electrolysis (48)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 48] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_49",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (49)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 49] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_50",
    "titleEn": "Faraday First and Second Laws of Electrolysis (50)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 50] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_51",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (51)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 51] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_52",
    "titleEn": "Faraday First and Second Laws of Electrolysis (52)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 52] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_53",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (53)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 53] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_54",
    "titleEn": "Faraday First and Second Laws of Electrolysis (54)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 54] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_55",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (55)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 55] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_56",
    "titleEn": "Faraday First and Second Laws of Electrolysis (56)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 56] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_easy_57",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (57)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 57] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_easy_58",
    "titleEn": "Faraday First and Second Laws of Electrolysis (58)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 58] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  }
],
  medium: [
  {
    "id": "egbac_chem_ch3_db_medium_01",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (1)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (1)",
    "difficulty": "medium",
    "questionEn": "At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_02",
    "titleEn": "Faraday First and Second Laws of Electrolysis (2)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (2)",
    "difficulty": "medium",
    "questionEn": "The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_03",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (3)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 3] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_04",
    "titleEn": "Faraday First and Second Laws of Electrolysis (4)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 4] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_05",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (5)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 5] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_06",
    "titleEn": "Faraday First and Second Laws of Electrolysis (6)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 6] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_07",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (7)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 7] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_08",
    "titleEn": "Faraday First and Second Laws of Electrolysis (8)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 8] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_09",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (9)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 9] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_10",
    "titleEn": "Faraday First and Second Laws of Electrolysis (10)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 10] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_11",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (11)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 11] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_12",
    "titleEn": "Faraday First and Second Laws of Electrolysis (12)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 12] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_13",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (13)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 13] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_14",
    "titleEn": "Faraday First and Second Laws of Electrolysis (14)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 14] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_15",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (15)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 15] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_16",
    "titleEn": "Faraday First and Second Laws of Electrolysis (16)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 16] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_17",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (17)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 17] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_18",
    "titleEn": "Faraday First and Second Laws of Electrolysis (18)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 18] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_19",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (19)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 19] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_20",
    "titleEn": "Faraday First and Second Laws of Electrolysis (20)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 20] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_21",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (21)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 21] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_22",
    "titleEn": "Faraday First and Second Laws of Electrolysis (22)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 22] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_23",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (23)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 23] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_24",
    "titleEn": "Faraday First and Second Laws of Electrolysis (24)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 24] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_25",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (25)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 25] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_26",
    "titleEn": "Faraday First and Second Laws of Electrolysis (26)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 26] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_27",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (27)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 27] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_28",
    "titleEn": "Faraday First and Second Laws of Electrolysis (28)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 28] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_29",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (29)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 29] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_30",
    "titleEn": "Faraday First and Second Laws of Electrolysis (30)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 30] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_31",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (31)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 31] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_32",
    "titleEn": "Faraday First and Second Laws of Electrolysis (32)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 32] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_33",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (33)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 33] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_34",
    "titleEn": "Faraday First and Second Laws of Electrolysis (34)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 34] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_35",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (35)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 35] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_36",
    "titleEn": "Faraday First and Second Laws of Electrolysis (36)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 36] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_37",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (37)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 37] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_38",
    "titleEn": "Faraday First and Second Laws of Electrolysis (38)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 38] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_39",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (39)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 39] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_40",
    "titleEn": "Faraday First and Second Laws of Electrolysis (40)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 40] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_41",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (41)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 41] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_42",
    "titleEn": "Faraday First and Second Laws of Electrolysis (42)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 42] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_43",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (43)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 43] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_44",
    "titleEn": "Faraday First and Second Laws of Electrolysis (44)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 44] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_45",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (45)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 45] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_46",
    "titleEn": "Faraday First and Second Laws of Electrolysis (46)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 46] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_47",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (47)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 47] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_48",
    "titleEn": "Faraday First and Second Laws of Electrolysis (48)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 48] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_49",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (49)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 49] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_50",
    "titleEn": "Faraday First and Second Laws of Electrolysis (50)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 50] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_51",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (51)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 51] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_52",
    "titleEn": "Faraday First and Second Laws of Electrolysis (52)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 52] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_53",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (53)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 53] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_54",
    "titleEn": "Faraday First and Second Laws of Electrolysis (54)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 54] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_55",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (55)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 55] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_56",
    "titleEn": "Faraday First and Second Laws of Electrolysis (56)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 56] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_57",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (57)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 57] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_medium_58",
    "titleEn": "Faraday First and Second Laws of Electrolysis (58)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 58] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_medium_59",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (59)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 59] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  }
],
  hots: [
  {
    "id": "egbac_chem_ch3_db_hots_01",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (1)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (1)",
    "difficulty": "hots",
    "questionEn": "At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_02",
    "titleEn": "Faraday First and Second Laws of Electrolysis (2)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (2)",
    "difficulty": "hots",
    "questionEn": "The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_03",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (3)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 3] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_04",
    "titleEn": "Faraday First and Second Laws of Electrolysis (4)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 4] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_05",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (5)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 5] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_06",
    "titleEn": "Faraday First and Second Laws of Electrolysis (6)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 6] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_07",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (7)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 7] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_08",
    "titleEn": "Faraday First and Second Laws of Electrolysis (8)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 8] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_09",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (9)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 9] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_10",
    "titleEn": "Faraday First and Second Laws of Electrolysis (10)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 10] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_11",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (11)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 11] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_12",
    "titleEn": "Faraday First and Second Laws of Electrolysis (12)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 12] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_13",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (13)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 13] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_14",
    "titleEn": "Faraday First and Second Laws of Electrolysis (14)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 14] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_15",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (15)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 15] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_16",
    "titleEn": "Faraday First and Second Laws of Electrolysis (16)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 16] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_17",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (17)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 17] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_18",
    "titleEn": "Faraday First and Second Laws of Electrolysis (18)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 18] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_19",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (19)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 19] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_20",
    "titleEn": "Faraday First and Second Laws of Electrolysis (20)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 20] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_21",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (21)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 21] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_22",
    "titleEn": "Faraday First and Second Laws of Electrolysis (22)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 22] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_23",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (23)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 23] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_24",
    "titleEn": "Faraday First and Second Laws of Electrolysis (24)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 24] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_25",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (25)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 25] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_26",
    "titleEn": "Faraday First and Second Laws of Electrolysis (26)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 26] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_27",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (27)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 27] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_28",
    "titleEn": "Faraday First and Second Laws of Electrolysis (28)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 28] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_29",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (29)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 29] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_30",
    "titleEn": "Faraday First and Second Laws of Electrolysis (30)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 30] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_31",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (31)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 31] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_32",
    "titleEn": "Faraday First and Second Laws of Electrolysis (32)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 32] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_33",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (33)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 33] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_34",
    "titleEn": "Faraday First and Second Laws of Electrolysis (34)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 34] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_35",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (35)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 35] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_36",
    "titleEn": "Faraday First and Second Laws of Electrolysis (36)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 36] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_37",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (37)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 37] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_38",
    "titleEn": "Faraday First and Second Laws of Electrolysis (38)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 38] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_39",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (39)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 39] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_40",
    "titleEn": "Faraday First and Second Laws of Electrolysis (40)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 40] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_41",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (41)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 41] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_42",
    "titleEn": "Faraday First and Second Laws of Electrolysis (42)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 42] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_43",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (43)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 43] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_44",
    "titleEn": "Faraday First and Second Laws of Electrolysis (44)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 44] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_45",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (45)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 45] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_46",
    "titleEn": "Faraday First and Second Laws of Electrolysis (46)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 46] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_47",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (47)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 47] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_48",
    "titleEn": "Faraday First and Second Laws of Electrolysis (48)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 48] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_49",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (49)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 49] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_50",
    "titleEn": "Faraday First and Second Laws of Electrolysis (50)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 50] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_51",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (51)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 51] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_52",
    "titleEn": "Faraday First and Second Laws of Electrolysis (52)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 52] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_53",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (53)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 53] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_54",
    "titleEn": "Faraday First and Second Laws of Electrolysis (54)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 54] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_55",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (55)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 55] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_56",
    "titleEn": "Faraday First and Second Laws of Electrolysis (56)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 56] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  },
  {
    "id": "egbac_chem_ch3_db_hots_57",
    "titleEn": "Nernst Equation for Non-Standard Electrode Potential (57)",
    "titleAr": "معادلة نيرنست للجهد في الظروف غير القياسية (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] At temperature $T = 298\\text{ K}$, the Nernst equation for a galvanic cell potential $E_{\\text{cell}}$ with reaction quotient $Q$ is:",
    "questionAr": "[مسألة متدرجة 57] عند درجة حرارة $298\\text{ K}$، تعطى معادلة نيرنست لحساب جهد الخلية الكهروكيميائية بدلالة حاصل التفاعل $Q$ بالعلاقة:",
    "optionsEn": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} + \\frac{0.0592}{n} Q$",
      "$E_{\\text{cell}} = n E^\\circ_{\\text{cell}} \\ln Q$",
      "$E_{\\text{cell}} = \\frac{E^\\circ_{\\text{cell}}}{1 + n Q}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592}{n} \\log_{10} Q$",
    "correctIndex": 0,
    "hintEn": "$\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ at $25^\\circ\\text{C}$.",
    "hintAr": "قيمة $\\frac{2.303 R T}{F} \\approx 0.0592\\text{ V}$ عند درجة حرارة 25 مئوية.",
    "stepByStepSolutionEn": [
      "Nernst Equation: $E = E^\\circ - \\frac{RT}{nF} \\ln Q = E^\\circ - \\frac{0.0592}{n} \\log Q$ at $25^\\circ\\text{C}$."
    ],
    "stepByStepSolutionAr": [
      "معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{n} \\log Q$ حيث $n$ عدد مولات الإلكترونات المنتقلة."
    ],
    "teacherTipEn": "In concentration cells ($E^\\circ_{\\text{cell}} = 0$), electricity is generated solely by the concentration gradient until $Q = 1$.",
    "teacherTipAr": "في خلايا التركيز ($E^\\circ = 0$) ينشأ التيار نتيجة اختلاف تركيز المحاليل في نصفي الخلية."
  },
  {
    "id": "egbac_chem_ch3_db_hots_58",
    "titleEn": "Faraday First and Second Laws of Electrolysis (58)",
    "titleAr": "قوانين فاراداي للتحليل الكهربي (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] The mass of substance $m$ liberated or deposited at an electrode during electrolysis is directly proportional to:",
    "questionAr": "[مسألة متدرجة 58] تتناسب كتلة المادة المترسبة أو المتصاعدة $m$ عند أي قطب أثناء التحليل الكهربي طردياً مع:",
    "optionsEn": [
      "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
      "The volume of the electrolyte solution squared",
      "The atmospheric pressure above the electrolytic tank",
      "The resistance of the glass containment cell"
    ],
    "optionsAr": [
      "كمية الكهربية المارة ($Q = I \\cdot t$) والكتلة المكافئة الجرامية للعنصر ($e_m = M / z$)",
      "مربع حجم المحلول الإلكتروليتي في الحوض",
      "الضغط الجوي المؤثر فوق حوض التحليل",
      "المقاومة الأومية للوعاء الزجاجي"
    ],
    "correctAnswer": "The electric charge quantity $Q = I \\cdot t$ and its gram equivalent mass ($e_m = M / z$)",
    "correctIndex": 0,
    "hintEn": "1 Faraday ($96500\\text{ C}$) liberates or deposits one gram equivalent mass of any element.",
    "hintAr": "1 فاراداي ($96500\\text{ C}$) يرسب أو يحرر كتلة مكافئة جرامية واحدة من أي عنصر.",
    "stepByStepSolutionEn": [
      "General electrolysis law: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$, where $e_m = \\frac{\\text{Atomic Mass}}{\\text{Valence}}$."
    ],
    "stepByStepSolutionAr": [
      "القانون العام للتحليل الكهربي: $m = \\frac{I \\cdot t \\cdot e_m}{96500}$ جرام."
    ],
    "teacherTipEn": "To deposit 1 mole of an element of valence $z$, the required charge quantity is $z \\times 1\\text{ Faraday}$.",
    "teacherTipAr": "لترسيب مول واحد من عنصر تكافؤه $z$ يلزم إمرار كمية كهربية مقدارها $z$ فاراداي."
  }
]
};
