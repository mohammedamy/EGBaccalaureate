import type { ChapterDatabank } from '../../../types/curriculum';

export const egBacPhysCh4Databank: ChapterDatabank = {
  easy: [
  {
    "id": "egbac_phys_ch4_db_easy_01",
    "titleEn": "Law of Mass Action in Semiconductors (1)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (1)",
    "difficulty": "easy",
    "questionEn": "In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_02",
    "titleEn": "Shockley Ideal Diode Equation (2)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (2)",
    "difficulty": "easy",
    "questionEn": "The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_03",
    "titleEn": "Law of Mass Action in Semiconductors (3)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (3)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 3] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 3] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_04",
    "titleEn": "Shockley Ideal Diode Equation (4)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (4)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 4] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 4] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_05",
    "titleEn": "Law of Mass Action in Semiconductors (5)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (5)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 5] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 5] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_06",
    "titleEn": "Shockley Ideal Diode Equation (6)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (6)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 6] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 6] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_07",
    "titleEn": "Law of Mass Action in Semiconductors (7)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (7)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 7] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 7] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_08",
    "titleEn": "Shockley Ideal Diode Equation (8)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (8)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 8] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 8] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_09",
    "titleEn": "Law of Mass Action in Semiconductors (9)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (9)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 9] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 9] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_10",
    "titleEn": "Shockley Ideal Diode Equation (10)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (10)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 10] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 10] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_11",
    "titleEn": "Law of Mass Action in Semiconductors (11)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (11)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 11] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 11] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_12",
    "titleEn": "Shockley Ideal Diode Equation (12)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (12)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 12] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 12] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_13",
    "titleEn": "Law of Mass Action in Semiconductors (13)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (13)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 13] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 13] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_14",
    "titleEn": "Shockley Ideal Diode Equation (14)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (14)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 14] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 14] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_15",
    "titleEn": "Law of Mass Action in Semiconductors (15)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (15)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 15] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 15] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_16",
    "titleEn": "Shockley Ideal Diode Equation (16)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (16)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 16] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 16] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_17",
    "titleEn": "Law of Mass Action in Semiconductors (17)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (17)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 17] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 17] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_18",
    "titleEn": "Shockley Ideal Diode Equation (18)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (18)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 18] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 18] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_19",
    "titleEn": "Law of Mass Action in Semiconductors (19)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (19)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 19] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 19] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_20",
    "titleEn": "Shockley Ideal Diode Equation (20)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (20)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 20] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 20] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_21",
    "titleEn": "Law of Mass Action in Semiconductors (21)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (21)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 21] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 21] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_22",
    "titleEn": "Shockley Ideal Diode Equation (22)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (22)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 22] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 22] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_23",
    "titleEn": "Law of Mass Action in Semiconductors (23)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (23)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 23] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 23] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_24",
    "titleEn": "Shockley Ideal Diode Equation (24)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (24)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 24] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 24] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_25",
    "titleEn": "Law of Mass Action in Semiconductors (25)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (25)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 25] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 25] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_26",
    "titleEn": "Shockley Ideal Diode Equation (26)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (26)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 26] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 26] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_27",
    "titleEn": "Law of Mass Action in Semiconductors (27)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (27)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 27] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 27] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_28",
    "titleEn": "Shockley Ideal Diode Equation (28)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (28)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 28] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 28] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_29",
    "titleEn": "Law of Mass Action in Semiconductors (29)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (29)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 29] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 29] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_30",
    "titleEn": "Shockley Ideal Diode Equation (30)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (30)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 30] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 30] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_31",
    "titleEn": "Law of Mass Action in Semiconductors (31)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (31)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 31] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 31] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_32",
    "titleEn": "Shockley Ideal Diode Equation (32)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (32)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 32] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 32] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_33",
    "titleEn": "Law of Mass Action in Semiconductors (33)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (33)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 33] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 33] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_34",
    "titleEn": "Shockley Ideal Diode Equation (34)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (34)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 34] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 34] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_35",
    "titleEn": "Law of Mass Action in Semiconductors (35)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (35)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 35] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 35] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_36",
    "titleEn": "Shockley Ideal Diode Equation (36)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (36)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 36] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 36] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_37",
    "titleEn": "Law of Mass Action in Semiconductors (37)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (37)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 37] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 37] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_38",
    "titleEn": "Shockley Ideal Diode Equation (38)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (38)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 38] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 38] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_39",
    "titleEn": "Law of Mass Action in Semiconductors (39)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (39)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 39] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 39] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_40",
    "titleEn": "Shockley Ideal Diode Equation (40)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (40)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 40] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 40] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_41",
    "titleEn": "Law of Mass Action in Semiconductors (41)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (41)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 41] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 41] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_42",
    "titleEn": "Shockley Ideal Diode Equation (42)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (42)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 42] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 42] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_43",
    "titleEn": "Law of Mass Action in Semiconductors (43)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (43)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 43] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 43] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_44",
    "titleEn": "Shockley Ideal Diode Equation (44)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (44)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 44] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 44] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_45",
    "titleEn": "Law of Mass Action in Semiconductors (45)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (45)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 45] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 45] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_46",
    "titleEn": "Shockley Ideal Diode Equation (46)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (46)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 46] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 46] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_47",
    "titleEn": "Law of Mass Action in Semiconductors (47)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (47)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 47] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 47] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_48",
    "titleEn": "Shockley Ideal Diode Equation (48)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (48)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 48] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 48] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_49",
    "titleEn": "Law of Mass Action in Semiconductors (49)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (49)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 49] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 49] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_50",
    "titleEn": "Shockley Ideal Diode Equation (50)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (50)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 50] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 50] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_51",
    "titleEn": "Law of Mass Action in Semiconductors (51)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (51)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 51] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 51] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_52",
    "titleEn": "Shockley Ideal Diode Equation (52)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (52)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 52] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 52] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_53",
    "titleEn": "Law of Mass Action in Semiconductors (53)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (53)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 53] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 53] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_54",
    "titleEn": "Shockley Ideal Diode Equation (54)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (54)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 54] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 54] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_55",
    "titleEn": "Law of Mass Action in Semiconductors (55)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (55)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 55] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 55] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_56",
    "titleEn": "Shockley Ideal Diode Equation (56)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (56)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 56] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 56] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_57",
    "titleEn": "Law of Mass Action in Semiconductors (57)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (57)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 57] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 57] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_easy_58",
    "titleEn": "Shockley Ideal Diode Equation (58)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (58)",
    "difficulty": "easy",
    "questionEn": "[Problem Variant 58] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 58] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  }
],
  medium: [
  {
    "id": "egbac_phys_ch4_db_medium_01",
    "titleEn": "Law of Mass Action in Semiconductors (1)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (1)",
    "difficulty": "medium",
    "questionEn": "In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_02",
    "titleEn": "Shockley Ideal Diode Equation (2)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (2)",
    "difficulty": "medium",
    "questionEn": "The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_03",
    "titleEn": "Law of Mass Action in Semiconductors (3)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (3)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 3] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 3] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_04",
    "titleEn": "Shockley Ideal Diode Equation (4)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (4)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 4] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 4] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_05",
    "titleEn": "Law of Mass Action in Semiconductors (5)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (5)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 5] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 5] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_06",
    "titleEn": "Shockley Ideal Diode Equation (6)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (6)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 6] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 6] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_07",
    "titleEn": "Law of Mass Action in Semiconductors (7)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (7)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 7] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 7] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_08",
    "titleEn": "Shockley Ideal Diode Equation (8)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (8)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 8] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 8] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_09",
    "titleEn": "Law of Mass Action in Semiconductors (9)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (9)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 9] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 9] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_10",
    "titleEn": "Shockley Ideal Diode Equation (10)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (10)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 10] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 10] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_11",
    "titleEn": "Law of Mass Action in Semiconductors (11)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (11)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 11] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 11] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_12",
    "titleEn": "Shockley Ideal Diode Equation (12)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (12)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 12] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 12] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_13",
    "titleEn": "Law of Mass Action in Semiconductors (13)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (13)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 13] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 13] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_14",
    "titleEn": "Shockley Ideal Diode Equation (14)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (14)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 14] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 14] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_15",
    "titleEn": "Law of Mass Action in Semiconductors (15)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (15)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 15] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 15] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_16",
    "titleEn": "Shockley Ideal Diode Equation (16)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (16)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 16] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 16] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_17",
    "titleEn": "Law of Mass Action in Semiconductors (17)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (17)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 17] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 17] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_18",
    "titleEn": "Shockley Ideal Diode Equation (18)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (18)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 18] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 18] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_19",
    "titleEn": "Law of Mass Action in Semiconductors (19)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (19)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 19] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 19] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_20",
    "titleEn": "Shockley Ideal Diode Equation (20)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (20)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 20] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 20] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_21",
    "titleEn": "Law of Mass Action in Semiconductors (21)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (21)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 21] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 21] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_22",
    "titleEn": "Shockley Ideal Diode Equation (22)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (22)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 22] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 22] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_23",
    "titleEn": "Law of Mass Action in Semiconductors (23)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (23)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 23] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 23] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_24",
    "titleEn": "Shockley Ideal Diode Equation (24)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (24)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 24] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 24] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_25",
    "titleEn": "Law of Mass Action in Semiconductors (25)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (25)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 25] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 25] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_26",
    "titleEn": "Shockley Ideal Diode Equation (26)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (26)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 26] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 26] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_27",
    "titleEn": "Law of Mass Action in Semiconductors (27)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (27)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 27] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 27] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_28",
    "titleEn": "Shockley Ideal Diode Equation (28)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (28)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 28] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 28] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_29",
    "titleEn": "Law of Mass Action in Semiconductors (29)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (29)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 29] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 29] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_30",
    "titleEn": "Shockley Ideal Diode Equation (30)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (30)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 30] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 30] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_31",
    "titleEn": "Law of Mass Action in Semiconductors (31)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (31)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 31] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 31] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_32",
    "titleEn": "Shockley Ideal Diode Equation (32)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (32)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 32] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 32] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_33",
    "titleEn": "Law of Mass Action in Semiconductors (33)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (33)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 33] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 33] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_34",
    "titleEn": "Shockley Ideal Diode Equation (34)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (34)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 34] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 34] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_35",
    "titleEn": "Law of Mass Action in Semiconductors (35)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (35)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 35] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 35] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_36",
    "titleEn": "Shockley Ideal Diode Equation (36)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (36)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 36] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 36] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_37",
    "titleEn": "Law of Mass Action in Semiconductors (37)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (37)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 37] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 37] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_38",
    "titleEn": "Shockley Ideal Diode Equation (38)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (38)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 38] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 38] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_39",
    "titleEn": "Law of Mass Action in Semiconductors (39)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (39)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 39] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 39] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_40",
    "titleEn": "Shockley Ideal Diode Equation (40)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (40)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 40] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 40] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_41",
    "titleEn": "Law of Mass Action in Semiconductors (41)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (41)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 41] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 41] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_42",
    "titleEn": "Shockley Ideal Diode Equation (42)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (42)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 42] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 42] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_43",
    "titleEn": "Law of Mass Action in Semiconductors (43)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (43)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 43] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 43] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_44",
    "titleEn": "Shockley Ideal Diode Equation (44)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (44)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 44] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 44] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_45",
    "titleEn": "Law of Mass Action in Semiconductors (45)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (45)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 45] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 45] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_46",
    "titleEn": "Shockley Ideal Diode Equation (46)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (46)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 46] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 46] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_47",
    "titleEn": "Law of Mass Action in Semiconductors (47)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (47)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 47] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 47] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_48",
    "titleEn": "Shockley Ideal Diode Equation (48)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (48)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 48] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 48] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_49",
    "titleEn": "Law of Mass Action in Semiconductors (49)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (49)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 49] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 49] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_50",
    "titleEn": "Shockley Ideal Diode Equation (50)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (50)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 50] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 50] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_51",
    "titleEn": "Law of Mass Action in Semiconductors (51)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (51)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 51] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 51] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_52",
    "titleEn": "Shockley Ideal Diode Equation (52)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (52)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 52] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 52] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_53",
    "titleEn": "Law of Mass Action in Semiconductors (53)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (53)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 53] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 53] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_54",
    "titleEn": "Shockley Ideal Diode Equation (54)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (54)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 54] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 54] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_55",
    "titleEn": "Law of Mass Action in Semiconductors (55)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (55)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 55] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 55] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_56",
    "titleEn": "Shockley Ideal Diode Equation (56)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (56)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 56] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 56] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_57",
    "titleEn": "Law of Mass Action in Semiconductors (57)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (57)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 57] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 57] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_58",
    "titleEn": "Shockley Ideal Diode Equation (58)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (58)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 58] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 58] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_medium_59",
    "titleEn": "Law of Mass Action in Semiconductors (59)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (59)",
    "difficulty": "medium",
    "questionEn": "[Problem Variant 59] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 59] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  }
],
  hots: [
  {
    "id": "egbac_phys_ch4_db_hots_01",
    "titleEn": "Law of Mass Action in Semiconductors (1)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (1)",
    "difficulty": "hots",
    "questionEn": "In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_02",
    "titleEn": "Shockley Ideal Diode Equation (2)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (2)",
    "difficulty": "hots",
    "questionEn": "The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_03",
    "titleEn": "Law of Mass Action in Semiconductors (3)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (3)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 3] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 3] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_04",
    "titleEn": "Shockley Ideal Diode Equation (4)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (4)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 4] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 4] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_05",
    "titleEn": "Law of Mass Action in Semiconductors (5)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (5)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 5] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 5] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_06",
    "titleEn": "Shockley Ideal Diode Equation (6)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (6)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 6] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 6] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_07",
    "titleEn": "Law of Mass Action in Semiconductors (7)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (7)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 7] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 7] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_08",
    "titleEn": "Shockley Ideal Diode Equation (8)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (8)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 8] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 8] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_09",
    "titleEn": "Law of Mass Action in Semiconductors (9)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (9)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 9] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 9] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_10",
    "titleEn": "Shockley Ideal Diode Equation (10)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (10)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 10] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 10] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_11",
    "titleEn": "Law of Mass Action in Semiconductors (11)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (11)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 11] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 11] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_12",
    "titleEn": "Shockley Ideal Diode Equation (12)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (12)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 12] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 12] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_13",
    "titleEn": "Law of Mass Action in Semiconductors (13)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (13)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 13] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 13] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_14",
    "titleEn": "Shockley Ideal Diode Equation (14)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (14)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 14] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 14] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_15",
    "titleEn": "Law of Mass Action in Semiconductors (15)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (15)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 15] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 15] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_16",
    "titleEn": "Shockley Ideal Diode Equation (16)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (16)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 16] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 16] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_17",
    "titleEn": "Law of Mass Action in Semiconductors (17)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (17)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 17] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 17] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_18",
    "titleEn": "Shockley Ideal Diode Equation (18)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (18)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 18] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 18] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_19",
    "titleEn": "Law of Mass Action in Semiconductors (19)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (19)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 19] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 19] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_20",
    "titleEn": "Shockley Ideal Diode Equation (20)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (20)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 20] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 20] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_21",
    "titleEn": "Law of Mass Action in Semiconductors (21)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (21)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 21] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 21] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_22",
    "titleEn": "Shockley Ideal Diode Equation (22)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (22)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 22] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 22] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_23",
    "titleEn": "Law of Mass Action in Semiconductors (23)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (23)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 23] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 23] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_24",
    "titleEn": "Shockley Ideal Diode Equation (24)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (24)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 24] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 24] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_25",
    "titleEn": "Law of Mass Action in Semiconductors (25)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (25)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 25] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 25] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_26",
    "titleEn": "Shockley Ideal Diode Equation (26)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (26)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 26] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 26] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_27",
    "titleEn": "Law of Mass Action in Semiconductors (27)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (27)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 27] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 27] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_28",
    "titleEn": "Shockley Ideal Diode Equation (28)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (28)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 28] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 28] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_29",
    "titleEn": "Law of Mass Action in Semiconductors (29)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (29)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 29] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 29] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_30",
    "titleEn": "Shockley Ideal Diode Equation (30)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (30)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 30] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 30] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_31",
    "titleEn": "Law of Mass Action in Semiconductors (31)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (31)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 31] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 31] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_32",
    "titleEn": "Shockley Ideal Diode Equation (32)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (32)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 32] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 32] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_33",
    "titleEn": "Law of Mass Action in Semiconductors (33)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (33)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 33] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 33] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_34",
    "titleEn": "Shockley Ideal Diode Equation (34)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (34)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 34] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 34] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_35",
    "titleEn": "Law of Mass Action in Semiconductors (35)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (35)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 35] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 35] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_36",
    "titleEn": "Shockley Ideal Diode Equation (36)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (36)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 36] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 36] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_37",
    "titleEn": "Law of Mass Action in Semiconductors (37)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (37)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 37] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 37] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_38",
    "titleEn": "Shockley Ideal Diode Equation (38)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (38)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 38] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 38] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_39",
    "titleEn": "Law of Mass Action in Semiconductors (39)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (39)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 39] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 39] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_40",
    "titleEn": "Shockley Ideal Diode Equation (40)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (40)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 40] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 40] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_41",
    "titleEn": "Law of Mass Action in Semiconductors (41)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (41)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 41] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 41] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_42",
    "titleEn": "Shockley Ideal Diode Equation (42)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (42)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 42] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 42] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_43",
    "titleEn": "Law of Mass Action in Semiconductors (43)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (43)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 43] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 43] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_44",
    "titleEn": "Shockley Ideal Diode Equation (44)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (44)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 44] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 44] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_45",
    "titleEn": "Law of Mass Action in Semiconductors (45)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (45)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 45] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 45] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_46",
    "titleEn": "Shockley Ideal Diode Equation (46)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (46)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 46] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 46] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_47",
    "titleEn": "Law of Mass Action in Semiconductors (47)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (47)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 47] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 47] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_48",
    "titleEn": "Shockley Ideal Diode Equation (48)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (48)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 48] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 48] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_49",
    "titleEn": "Law of Mass Action in Semiconductors (49)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (49)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 49] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 49] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_50",
    "titleEn": "Shockley Ideal Diode Equation (50)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (50)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 50] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 50] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_51",
    "titleEn": "Law of Mass Action in Semiconductors (51)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (51)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 51] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 51] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_52",
    "titleEn": "Shockley Ideal Diode Equation (52)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (52)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 52] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 52] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_53",
    "titleEn": "Law of Mass Action in Semiconductors (53)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (53)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 53] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 53] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_54",
    "titleEn": "Shockley Ideal Diode Equation (54)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (54)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 54] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 54] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_55",
    "titleEn": "Law of Mass Action in Semiconductors (55)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (55)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 55] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 55] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_56",
    "titleEn": "Shockley Ideal Diode Equation (56)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (56)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 56] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 56] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_57",
    "titleEn": "Law of Mass Action in Semiconductors (57)",
    "titleAr": "قانون فعل الكتلة في أشباه الموصلات (57)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 57] In a non-degenerate semiconductor at thermal equilibrium, electron concentration $n$ and hole concentration $p$ satisfy:",
    "questionAr": "[مسألة متدرجة 57] في شبه موصل غير منحط في حالة اتزان حراري، يرتبط تركيز الإلكترونات $n$ والفجوات $p$ بالعلاقة:",
    "optionsEn": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "optionsAr": [
      "$n \\cdot p = n_i^2$",
      "$n + p = n_i$",
      "$\\frac{n}{p} = n_i^2$",
      "$n^2 + p^2 = n_i^2$"
    ],
    "correctAnswer": "$n \\cdot p = n_i^2$",
    "correctIndex": 0,
    "hintEn": "$n_i$ is the intrinsic carrier concentration depending on temperature and bandgap $E_g$.",
    "hintAr": "$n_i$ هو تركيز الحاملات في البلورة النقية ويعتمد فقط على درجة الحرارة وفجوة الطاقة.",
    "stepByStepSolutionEn": [
      "Law of mass action: $n p = n_i^2 = N_c N_v e^{-E_g / k_B T}$."
    ],
    "stepByStepSolutionAr": [
      "قانون فعل الكتلة في أشباه الموصلات: $n \\cdot p = n_i^2$."
    ],
    "teacherTipEn": "Doping with donors increases $n$ and suppresses $p$, keeping the product $n \\cdot p$ constant at constant temperature.",
    "teacherTipAr": "إضافة شوائب مانحة يزيد $n$ ويقلل $p$ بحيث يظل حاصل ضربهما ثابتاً عند نفس درجة الحرارة."
  },
  {
    "id": "egbac_phys_ch4_db_hots_58",
    "titleEn": "Shockley Ideal Diode Equation (58)",
    "titleAr": "معادلة شوكلي للوصلة الثنائية PN (58)",
    "difficulty": "hots",
    "questionEn": "[Problem Variant 58] The current $I$ passing through an ideal PN junction under applied voltage $V$ is given by Shockley's equation:",
    "questionAr": "[مسألة متدرجة 58] تعطى شدة التيار $I$ المار في الوصلة الثنائية PN تحت تأثير جهد خارجي $V$ بمعادلة شوكلي:",
    "optionsEn": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "optionsAr": [
      "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
      "$I = I_0 e^{\\frac{k_B T}{e V}}$",
      "$I = \\frac{V}{R_0} e^{\\frac{e V}{k_B T}}$",
      "$I = I_0 \\ln\\left(1 + \\frac{e V}{k_B T}\\right)$"
    ],
    "correctAnswer": "$I = I_0 \\left( e^{\\frac{e V}{k_B T}} - 1 \\right)$",
    "correctIndex": 0,
    "hintEn": "$I_0$ is the reverse saturation current, $k_B$ is Boltzmann's constant, and $T$ is temperature in Kelvin.",
    "hintAr": "$I_0$ هو تيار التشبع العكسي، و $k_B T / e \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة.",
    "stepByStepSolutionEn": [
      "Shockley equation: Under forward bias ($V > 0$), current rises exponentially; under reverse bias ($V < 0$), current saturates at $-I_0$."
    ],
    "stepByStepSolutionAr": [
      "معادلة شوكلي للدايود: في الانحياز الأمامي يزداد التيار أسياً، وفي العكسي يثبت عند $-I_0$."
    ],
    "teacherTipEn": "Thermal voltage $V_T = k_B T / e \\approx 25.9\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "teacherTipAr": "الجهد الحراري $V_T = k_B T / e$ يساوي نحو 26 ملي فولت عند درجة حرارة الغرفة."
  }
]
};
