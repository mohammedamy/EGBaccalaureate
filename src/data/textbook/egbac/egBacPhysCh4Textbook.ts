import type { SolvedProblem } from '../../../types/curriculum';

export const egBacPhysCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch4_se_01",
    "titleEn": "Law of Mass Action in Extrinsic n-Type Silicon",
    "titleAr": "قانون فعل الكتلة في بلورة السيليكون من النوع السالب (n-type)",
    "difficulty": "easy",
    "questionEn": "A pure silicon crystal at room temperature ($T = 300\\text{ K}$) has an intrinsic carrier concentration of $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$. It is doped with phosphorus donor atoms at a concentration of $N_D = 1.0 \\times 10^{16}\\text{ atoms/cm}^3$. Assuming complete ionization of donors ($n \\approx N_D$), use the law of mass action ($n \\cdot p = n_i^2$) to determine the minority carrier hole concentration $p$.",
    "questionAr": "بلورة سيليكون نقية عند درجة حرارة الغرفة ($T = 300\\text{ كلفن}$) يبلغ تركيز حوامل الشحنة الذاتي فيها $n_i = 1.5 \\times 10^{10}\\text{ سم}^{-3}$. طُعمت بذرات فوسفور مانحة بتركيز $N_D = 1.0 \\times 10^{16}\\text{ ذرة/سم}^3$. بفرض التأين الكامل للمانحين ($n \\approx N_D$)، استخدم قانون فعل الكتلة ($n \\cdot p = n_i^2$) لإيجاد تركيز الفجوات الموجبة (حوامل الشحنة الأقلية) $p$.",
    "optionsEn": [
      "$p = 2.25 \\times 10^4\\text{ cm}^{-3}$",
      "$p = 1.50 \\times 10^6\\text{ cm}^{-3}$",
      "$p = 4.50 \\times 10^5\\text{ cm}^{-3}$",
      "$p = 1.00 \\times 10^4\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$p = 2.25 \\times 10^4\\text{ سم}^{-3}$",
      "$p = 1.50 \\times 10^6\\text{ سم}^{-3}$",
      "$p = 4.50 \\times 10^5\\text{ سم}^{-3}$",
      "$p = 1.00 \\times 10^4\\text{ سم}^{-3}$"
    ],
    "correctAnswer": "$p = 2.25 \\times 10^4\\text{ cm}^{-3}$",
    "correctIndex": 0,
    "hintEn": "Law of mass action: p = n_i^2 / n = n_i^2 / N_D.",
    "hintAr": "قانون فعل الكتلة: p = n_i^2 / n = n_i^2 / N_D.",
    "stepByStepSolutionEn": [
      "1. By the law of mass action in thermal equilibrium: $n \\cdot p = n_i^2$.",
      "2. In an n-type semiconductor where $N_D \\gg n_i$, electron concentration is dominated by donors: $n \\approx N_D = 1.0 \\times 10^{16}\\text{ cm}^{-3}$.",
      "3. Calculate hole concentration: $p = \\frac{n_i^2}{n} = \\frac{(1.5 \\times 10^{10})^2}{1.0 \\times 10^{16}} = \\frac{2.25 \\times 10^{20}}{1.0 \\times 10^{16}} = 2.25 \\times 10^4\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون فعل الكتلة في الاتزان الحراري: $n \\cdot p = n_i^2$.",
      "٢. في البلورة السالبة حيث $N_D \\gg n_i$: يكون تركيز الإلكترونات مساوياً تقريباً لتركيز الشوائب $n \\approx N_D = 1.0 \\times 10^{16}\\text{ سم}^{-3}$.",
      "٣. حساب تركيز الفجوات: $p = \\frac{n_i^2}{N_D} = \\frac{(1.5 \\times 10^{10})^2}{1.0 \\times 10^{16}} = 2.25 \\times 10^4\\text{ سم}^{-3}$."
    ],
    "teacherTipEn": "Doping with donor atoms drastically suppresses the minority hole concentration via rapid recombination.",
    "teacherTipAr": "إضافة شوائب مانحة يقلل تركيز الفجوات الأقلية بصورة هائلة بسبب زيادة معدل إعادة الالتحام."
  },
  {
    "id": "egbac_phys_ch4_se_02",
    "titleEn": "Majority and Minority Carrier Densities in Boron-Doped p-Type Silicon",
    "titleAr": "كثافات حوامل الشحنة السائدة والأقلية في سيليكون مطعم بالبورون (p-type)",
    "difficulty": "easy",
    "questionEn": "Silicon with intrinsic density $n_i = 1.5 \\times 10^{10}\\text{ cm}^{-3}$ is doped with trivalent Boron acceptor atoms at a density of $N_A = 2.0 \\times 10^{17}\\text{ cm}^{-3}$. Calculate the majority hole concentration $p$ and minority electron concentration $n$.",
    "questionAr": "بلورة سيليكون ذات تركيز ذاتي $n_i = 1.5 \\times 10^{10}\\text{ سم}^{-3}$ طُعمت بذرات بورون ثلاثي التكافؤ قابلة بتركيز $N_A = 2.0 \\times 10^{17}\\text{ سم}^{-3}$. احسب تركيز الفجوات السائدة $p$ وتركيز الإلكترونات الأقلية $n$.",
    "optionsEn": [
      "$p = 1.5 \\times 10^{10}\\text{ cm}^{-3}, \\quad n = 2.0 \\times 10^{17}\\text{ cm}^{-3}$",
      "$p = 2.0 \\times 10^{17}\\text{ cm}^{-3}, \\quad n = 1.125 \\times 10^3\\text{ cm}^{-3}$",
      "$p = 4.0 \\times 10^{17}\\text{ cm}^{-3}, \\quad n = 2.25 \\times 10^3\\text{ cm}^{-3}$",
      "$p = 2.0 \\times 10^{17}\\text{ cm}^{-3}, \\quad n = 3.0 \\times 10^3\\text{ cm}^{-3}$"
    ],
    "optionsAr": [
      "$p = 1.5 \\times 10^{10}\\text{ سم}^{-3}، \\quad n = 2.0 \\times 10^{17}\\text{ سم}^{-3}$",
      "$p = 2.0 \\times 10^{17}\\text{ سم}^{-3}، \\quad n = 1.125 \\times 10^3\\text{ سم}^{-3}$",
      "$p = 4.0 \\times 10^{17}\\text{ سم}^{-3}، \\quad n = 2.25 \\times 10^3\\text{ سم}^{-3}$",
      "$p = 2.0 \\times 10^{17}\\text{ سم}^{-3}، \\quad n = 3.0 \\times 10^3\\text{ سم}^{-3}$"
    ],
    "correctAnswer": "$p = 2.0 \\times 10^{17}\\text{ cm}^{-3}, \\quad n = 1.125 \\times 10^3\\text{ cm}^{-3}$",
    "correctIndex": 1,
    "hintEn": "In p-type, p approx N_A and n = n_i^2 / N_A.",
    "hintAr": "في البلورة الموجبة p تساوي تقريباً N_A و n = n_i^2 / N_A.",
    "stepByStepSolutionEn": [
      "1. For p-type silicon, majority holes equal acceptor concentration: $p \\approx N_A = 2.0 \\times 10^{17}\\text{ cm}^{-3}$.",
      "2. By the mass action law: $n = \\frac{n_i^2}{p} = \\frac{(1.5 \\times 10^{10})^2}{2.0 \\times 10^{17}} = \\frac{2.25 \\times 10^{20}}{2.0 \\times 10^{17}} = 1.125 \\times 10^3\\text{ cm}^{-3}$."
    ],
    "stepByStepSolutionAr": [
      "١. في البلورة الموجبة: تركيز الفجوات السائدة $p \\approx N_A = 2.0 \\times 10^{17}\\text{ سم}^{-3}$.",
      "٢. من قانون فعل الكتلة: $n = \\frac{n_i^2}{N_A} = \\frac{2.25 \\times 10^{20}}{2.0 \\times 10^{17}} = 1.125 \\times 10^3\\text{ سم}^{-3}$."
    ],
    "teacherTipEn": "Notice that the crystal remains electrically neutral overall because positive hole charges are balanced by negative stationary ionized acceptors (N_A^-).",
    "teacherTipAr": "تظل البلورة ككل متعادلة كهربائياً لأن شحنات الفجوات الموجبة تعادلها شحنات الأيونات السالبة الساكنة (N_A^-)."
  },
  {
    "id": "egbac_phys_ch4_se_03",
    "titleEn": "Dynamic AC Resistance of a Forward-Biased Semiconductor Diode",
    "titleAr": "المقاومة الديناميكية (التيار المتردد) لوصلة ثنائية في حالة انحياز أمامي",
    "difficulty": "medium",
    "questionEn": "At room temperature ($T = 300\\text{ K}$), the thermal voltage of a p-n junction diode is $V_T = \\frac{k_B T}{e} \\approx 26\\text{ mV}$. The forward dynamic (small-signal) resistance is given by $r_d = \\frac{\\eta V_T}{I_D}$. For an ideality factor $\\eta = 1.0$, calculate the dynamic resistance $r_d$ when the DC forward bias current is $I_D = 2.0\\text{ mA}$.",
    "questionAr": "عند درجة حرارة الغرفة ($T = 300\\text{ كلفن}$)، يبلغ الجهد الحراري لوصلة ثنائية $V_T = \\frac{k_B T}{e} \\approx 26\\text{ مللي فولت}$. تُعطى المقاومة الديناميكية الأمامية للإشارات الصغيرة بالعلاقة $r_d = \\frac{\\eta V_T}{I_D}$. لمعامل مثالية $\\eta = 1.0$، احسب المقاومة الديناميكية $r_d$ عندما يمر بالوصلة تيار أمامي مستمر $I_D = 2.0\\text{ مللي أمبير}$.",
    "optionsEn": [
      "$r_d = 26\\;\\Omega$",
      "$r_d = 6.5\\;\\Omega$",
      "$r_d = 13\\;\\Omega$",
      "$r_d = 52\\;\\Omega$"
    ],
    "optionsAr": [
      "$r_d = 26\\;\\text{أوم}$",
      "$r_d = 6.5\\;\\text{أوم}$",
      "$r_d = 13\\;\\text{أوم}$",
      "$r_d = 52\\;\\text{أوم}$"
    ],
    "correctAnswer": "$r_d = 13\\;\\Omega$",
    "correctIndex": 2,
    "hintEn": "Formula: r_d = (eta * V_T) / I_D = 26 mV / 2 mA.",
    "hintAr": "القانون: r_d = (eta * V_T) / I_D = 26 مللي فولت / 2 مللي أمبير.",
    "stepByStepSolutionEn": [
      "1. Dynamic resistance formula: $r_d = \\frac{\\eta V_T}{I_D}$.",
      "2. Substitute values: $r_d = \\frac{1.0 \\times 26\\text{ mV}}{2.0\\text{ mA}} = \\frac{26 \\times 10^{-3}\\text{ V}}{2.0 \\times 10^{-3}\\text{ A}} = 13\\;\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون المقاومة الديناميكية: $r_d = \\frac{\\eta V_T}{I_D}$.",
      "٢. الحساب: $r_d = \\frac{26\\text{ mV}}{2.0\\text{ mA}} = 13\\;\\text{أوم}$."
    ],
    "teacherTipEn": "As DC operating current increases, the dynamic AC resistance of the forward diode decreases inversely.",
    "teacherTipAr": "كلما زاد تيار الانحياز الأمامي المستمر، قلت المقاومة الديناميكية للتيار المتردد عكسياً."
  },
  {
    "id": "egbac_phys_ch4_se_04",
    "titleEn": "Zener Diode Voltage Regulator Circuit Design",
    "titleAr": "تصميم دائرة تثبيت الجهد الكهربائي باستخدام ثنائي زينر",
    "difficulty": "hots",
    "questionEn": "A Zener diode with breakdown voltage $V_Z = 6.0\\text{ V}$ and maximum power dissipation $P_{Z,\\max} = 600\\text{ mW}$ is used to regulate a variable DC input voltage $V_{\\text{in}} = 15\\text{ V}$ across a load resistor $R_L = 600\\;\\Omega$. Calculate the minimum series resistance $R_S$ required so that the Zener current never exceeds its maximum safe limit when the load is disconnected ($I_L = 0$).",
    "questionAr": "يُستخدم ثنائي زينر جهده التنظيمي $V_Z = 6.0\\text{ فولت}$ وأقصى قدرة تشتيت له $P_{Z,\\max} = 600\\text{ مللي واط}$ لتنظيم جهد دخل مستمر $V_{\\text{in}} = 15\\text{ فولت}$ يغذي مقاومة حمل $R_L = 600\\;\\text{أوم}$. احسب أقل قيمة لمقاومة التوالي $R_S$ تضمن عدم تجاوز تيار زينر لأقصى حد آمن له عند فصل الحمل تماماً ($I_L = 0$).",
    "optionsEn": [
      "$R_S = 45\\;\\Omega$",
      "$R_S = 180\\;\\Omega$",
      "$R_S = 150\\;\\Omega$",
      "$R_S = 90\\;\\Omega$"
    ],
    "optionsAr": [
      "$R_S = 45\\;\\text{أوم}$",
      "$R_S = 180\\;\\text{أوم}$",
      "$R_S = 150\\;\\text{أوم}$",
      "$R_S = 90\\;\\text{أوم}$"
    ],
    "correctAnswer": "$R_S = 90\\;\\Omega$",
    "correctIndex": 3,
    "hintEn": "Find I_Z,max = P_Z,max / V_Z = 600 mW / 6 V = 100 mA. Then R_S = (V_in - V_Z) / I_Z,max.",
    "hintAr": "احسب أقصى تيار لزينر I_Z,max = P_Z,max / V_Z = 600 / 6 = 100 مللي أمبير. ثم R_S = (V_in - V_Z) / I_Z,max.",
    "stepByStepSolutionEn": [
      "1. Maximum safe Zener current: $I_{Z,\\max} = \\frac{P_{Z,\\max}}{V_Z} = \\frac{600\\text{ mW}}{6.0\\text{ V}} = 100\\text{ mA} = 0.10\\text{ A}$.",
      "2. When load is disconnected ($I_L = 0$), all current passes through the Zener: $I_S = I_{Z,\\max} = 0.10\\text{ A}$.",
      "3. Voltage across series resistor: $V_{RS} = V_{\\text{in}} - V_Z = 15\\text{ V} - 6\\text{ V} = 9.0\\text{ V}$.",
      "4. Minimum safe series resistance: $R_S = \\frac{V_{RS}}{I_{Z,\\max}} = \\frac{9.0\\text{ V}}{0.10\\text{ A}} = 90\\;\\Omega$."
    ],
    "stepByStepSolutionAr": [
      "١. أقصى تيار آمن لزينر: $I_{Z,\\max} = \\frac{600\\text{ mW}}{6.0\\text{ V}} = 100\\text{ مللي أمبير} = 0.10\\text{ أمبير}$.",
      "٢. عند فصل الحمل، يمر كامل تيار الدائرة عبر ثنائي زينر: $I_S = I_Z = 0.10\\text{ أمبير}$.",
      "٣. فرق الجهد عبر مقاومة التوالي: $V_{RS} = 15 - 6 = 9.0\\text{ فولت}$.",
      "٤. أقل قيمة لمقاومة التوالي: $R_S = \\frac{9.0}{0.10} = 90\\;\\text{أوم}$."
    ],
    "teacherTipEn": "A Zener diode maintains an extraordinarily constant voltage in its reverse breakdown region, shedding excess energy as heat.",
    "teacherTipAr": "يحافظ ثنائي زينر على جهد ثابت للغاية عند تشغيله في منطقة الانهيار العكسي مع تصريف الطاقة الزائدة كحرارة."
  },
  {
    "id": "egbac_phys_ch4_se_05",
    "titleEn": "Common-Emitter Current Gain Factor Relations",
    "titleAr": "علاقات معاملي التكبير لتيار الترانزستور (ألفا وبيتا)",
    "difficulty": "easy",
    "questionEn": "In a bipolar junction transistor (BJT), the common-emitter DC current gain is $\\beta = 99$. Calculate the corresponding common-base current gain $\\alpha = \\frac{I_C}{I_E}$ using the relationship $\\alpha = \\frac{\\beta}{\\beta + 1}$.",
    "questionAr": "في ترانزستور ثنائي القطبية (BJT)، يبلغ معامل تكبير التيار في دائرة الباعث المشترك $\\beta = 99$. احسب معامل تكبير التيار في دائرة القاعدة المشتركة $\\alpha = \\frac{I_C}{I_E}$ باستخدام العلاقة $\\alpha = \\frac{\\beta}{\\beta + 1}$.",
    "optionsEn": [
      "$\\alpha = 0.99$",
      "$\\alpha = 0.98$",
      "$\\alpha = 0.90$",
      "$\\alpha = 1.01$"
    ],
    "optionsAr": [
      "$\\alpha = 0.99$",
      "$\\alpha = 0.98$",
      "$\\alpha = 0.90$",
      "$\\alpha = 1.01$"
    ],
    "correctAnswer": "$\\alpha = 0.99$",
    "correctIndex": 0,
    "hintEn": "Formula: alpha = beta / (beta + 1) = 99 / 100.",
    "hintAr": "القانون: alpha = beta / (beta + 1) = 99 / 100.",
    "stepByStepSolutionEn": [
      "1. Current conservation in a transistor: $I_E = I_B + I_C$.",
      "2. Divide by $I_C$: $\\frac{I_E}{I_C} = \\frac{I_B}{I_C} + 1 \\implies \\frac{1}{\\alpha} = \\frac{1}{\\beta} + 1 = \\frac{\\beta + 1}{\\beta}$.",
      "3. Invert: $\\alpha = \\frac{\\beta}{\\beta + 1} = \\frac{99}{99 + 1} = \\frac{99}{100} = 0.99$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون حفظ التيار في الترانزستور: $I_E = I_B + I_C$.",
      "٢. العلاقة الرياضية بين المعاملين: $\\alpha = \\frac{\\beta}{\\beta + 1}$.",
      "٣. التعويض: $\\alpha = \\frac{99}{100} = 0.99$."
    ],
    "teacherTipEn": "Alpha is always slightly less than 1.0 because a tiny fraction (~1%) of emitter electrons recombine in the thin base.",
    "teacherTipAr": "معامل ألفا يكون دائماً أقل قليلاً من الواحد الصحيح لأن نسبة ضئيلة (~1%) من الإلكترونات تلتحم في القاعدة الرقيقة."
  },
  {
    "id": "egbac_phys_ch4_se_06",
    "titleEn": "DC Load Line and Quiescent Operating Point (Q-Point) of a CE Transistor",
    "titleAr": "خط الحمل المستمر ونقطة التشغيل المستقرة (Q-Point) لترانزستور باعث مشترك",
    "difficulty": "medium",
    "questionEn": "An npn transistor in a common-emitter amplifier circuit is powered by a supply voltage of $V_{CC} = 12\\text{ V}$ with collector load resistor $R_C = 2.0\\text{ k}\\Omega$. If the base bias is adjusted so that the quiescent collector current is $I_C = 3.0\\text{ mA}$, what is the quiescent collector-to-emitter voltage $V_{CE}$?",
    "questionAr": "ترانزستور npn في دائرة مكبر باعث مشترك متصل بمصدر جهد مستمر $V_{CC} = 12\\text{ فولت}$ مع مقاومة حمل في المجمع $R_C = 2.0\\text{ كيلو أوم}$. إذا ضُبط انحياز القاعدة بحيث أصبح تيار المجمع المستقر $I_C = 3.0\\text{ مللي أمبير}$، فما جهد المجمع - باعث $V_{CE}$ عند نقطة التشغيل؟",
    "optionsEn": [
      "$V_{CE} = 3.0\\text{ V}$",
      "$V_{CE} = 6.0\\text{ V}$",
      "$V_{CE} = 9.0\\text{ V}$",
      "$V_{CE} = 12.0\\text{ V}$"
    ],
    "optionsAr": [
      "$V_{CE} = 3.0\\text{ فولت}$",
      "$V_{CE} = 6.0\\text{ فولت}$",
      "$V_{CE} = 9.0\\text{ فولت}$",
      "$V_{CE} = 12.0\\text{ فولت}$"
    ],
    "correctAnswer": "$V_{CE} = 6.0\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Kirchhoff's voltage law: V_CE = V_CC - I_C * R_C.",
    "hintAr": "قانون كيرشوف للجهد: V_CE = V_CC - I_C * R_C.",
    "stepByStepSolutionEn": [
      "1. Output loop equation (DC load line): $V_{CC} = V_{CE} + I_C R_C \\implies V_{CE} = V_{CC} - I_C R_C$.",
      "2. Calculate voltage drop across collector resistor: $V_{RC} = I_C R_C = (3.0 \\times 10^{-3}\\text{ A})(2.0 \\times 10^3\\;\\Omega) = 6.0\\text{ V}$.",
      "3. Find operating voltage: $V_{CE} = 12.0\\text{ V} - 6.0\\text{ V} = 6.0\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. معادلة خط الحمل لدائرة الخرج: $V_{CE} = V_{CC} - I_C R_C$.",
      "٢. هبوط الجهد عبر مقاومة المجمع: $V_{RC} = 3.0\\text{ mA} \\times 2.0\\text{ k}\\Omega = 6.0\\text{ فولت}$.",
      "٣. جهد المجمع - باعث: $V_{CE} = 12.0 - 6.0 = 6.0\\text{ فولت}$."
    ],
    "teacherTipEn": "Centering the Q-point at V_CE = V_CC / 2 = 6 V maximizes symmetrical output voltage swing without clipping.",
    "teacherTipAr": "ضبط نقطة التشغيل في منتصف خط الحمل ($V_{CE} = V_{CC}/2$) يتيح أقصى تكبير متماثل للإشارة دون تشويه."
  },
  {
    "id": "egbac_phys_ch4_se_07",
    "titleEn": "Voltage Gain and 180-Degree Phase Inversion in CE Amplifier",
    "titleAr": "تكبير الجهد والانقلاب في الطور بمقدار ١٨٠ درجة في مكبر الباعث المشترك",
    "difficulty": "medium",
    "questionEn": "In a common-emitter amplifier, small input signal voltage variations $\\Delta v_{\\text{in}} = 10\\text{ mV}$ cause collector voltage variations of $\\Delta v_{\\text{out}} = -1.50\\text{ V}$. Calculate the magnitude of the voltage gain $|A_v|$ and explain the physical meaning of the negative sign.",
    "questionAr": "في مكبر باعث مشترك، يؤدي تغير في إشارة الدخل $\\Delta v_{\\text{in}} = 10\\text{ مللي فولت}$ إلى تغير في جهد الخرج قدره $\\Delta v_{\\text{out}} = -1.50\\text{ فولت}$. احسب مقدار معامل تكبير الجهد $|A_v|$ وما الدلالة الفيزيائية للإشارة السالبة؟",
    "optionsEn": [
      "$|A_v| = 15$; the negative sign indicates signal attenuation.",
      "$|A_v| = 150$; the negative sign indicates current flowing backward through the base.",
      "$|A_v| = 150$; the negative sign indicates a $180^\\circ$ phase inversion between input and output.",
      "$|A_v| = 300$; the negative sign indicates thermal noise."
    ],
    "optionsAr": [
      "$|A_v| = 15$؛ والإشارة السالبة تعني اضمحلال الإشارة.",
      "$|A_v| = 150$؛ والإشارة السالبة تعني سريان التيار في الاتجاه المعاكس عبر القاعدة.",
      "$|A_v| = 150$؛ والإشارة السالبة تعني انقلاب طور إشارة الخرج بمقدار $180^\\circ$ عن إشارة الدخل.",
      "$|A_v| = 300$؛ والإشارة السالبة تعني وجود ضوضاء حرارية."
    ],
    "correctAnswer": "$|A_v| = 150$; the negative sign indicates a $180^\\circ$ phase inversion between input and output.",
    "correctIndex": 2,
    "hintEn": "Voltage gain A_v = Delta v_out / Delta v_in = -1.50 V / 0.010 V = -150.",
    "hintAr": "تكبير الجهد A_v = Delta v_out / Delta v_in = -1.50 / 0.010 = -150.",
    "stepByStepSolutionEn": [
      "1. Voltage amplification definition: $A_v = \\frac{\\Delta v_{\\text{out}}}{\\Delta v_{\\text{in}}} = \\frac{-1.50\\text{ V}}{10 \\times 10^{-3}\\text{ V}} = -150$.",
      "2. When input voltage rises, base and collector currents increase ($I_C \\uparrow$), which increases the voltage drop across $R_C$, causing collector potential $V_{CE} = V_{CC} - I_C R_C$ to drop ($V_{CE} \\downarrow$).",
      "3. This opposite response produces an exact $180^\\circ$ ($\\pi$ radians) phase shift between input and output AC signals."
    ],
    "stepByStepSolutionAr": [
      "١. تعريف معامل تكبير الجهد: $A_v = \\frac{\\Delta v_{\\text{out}}}{\\Delta v_{\\text{in}}} = \\frac{-1.50}{0.010} = -150$.",
      "٢. عند زيادة جهد الدخل يزداد تيار المجمع، مما يزيد هبوط الجهد عبر $R_C$ فينخفض جهد الخرج $V_{CE} = V_{CC} - I_C R_C$.",
      "٣. هذا التغير العكسي يُحدث فرق طور قدره $180^\\circ$ بين إشارتي الدخل والخرج."
    ],
    "teacherTipEn": "Common-emitter is the ONLY single-transistor configuration that produces a 180° phase inversion.",
    "teacherTipAr": "دائرة الباعث المشترك هي التوصيلة الوحيدة للترانزستور المنفرد التي تقلب طور الإشارة بمقدار 180 درجة."
  },
  {
    "id": "egbac_phys_ch4_se_08",
    "titleEn": "BJT Transistor Operating as an Electronic Digital Switch",
    "titleAr": "عمل الترانزستور كمفتاح إلكتروني رقمي (حالة القطع وحالة التشبع)",
    "difficulty": "easy",
    "questionEn": "When an npn transistor is operated as an electronic inverter / digital switch (common-emitter mode with $R_C$ to $V_{CC}$), what are the states of the switch when the input voltage is $V_{\\text{in}} = 0\\text{ V}$ (Logic 0) versus $V_{\\text{in}} = 5\\text{ V}$ (Logic 1)?",
    "questionAr": "عند تشغيل ترانزستور npn كمفتاح إلكتروني رقمي عاكس (دائرة باعث مشترك متصل بمصدر $V_{CC}$ عبر مقاومة $R_C$)، ما حالة المفتاح وجهد الخرج $V_{\\text{out}}$ عند تطبيق جهد دخل $V_{\\text{in}} = 0\\text{ فولت}$ (منطق 0) مقارنة بـ $V_{\\text{in}} = 5\\text{ فولت}$ (منطق 1)؟",
    "optionsEn": [
      "$V_{\\text{in}} = 0\\text{ V} \\implies \\text{Saturation (ON)}; V_{\\text{in}} = 5\\text{ V} \\implies \\text{Cutoff (OFF)}$.",
      "Both inputs produce $V_{\\text{out}} = V_{CC}/2$ in linear active mode.",
      "$V_{\\text{in}} = 0\\text{ V} \\implies V_{\\text{out}} = 0\\text{ V}$; $V_{\\text{in}} = 5\\text{ V} \\implies V_{\\text{out}} = 5\\text{ V}$.",
      "$V_{\\text{in}} = 0\\text{ V} \\implies \\text{Cutoff (OFF)}, V_{\\text{out}} = V_{CC}$; $V_{\\text{in}} = 5\\text{ V} \\implies \\text{Saturation (ON)}, V_{\\text{out}} \\approx 0\\text{ V}$."
    ],
    "optionsAr": [
      "$V_{\\text{in}} = 0\\text{ فولت} \\implies \\text{تشبع}؛ V_{\\text{in}} = 5\\text{ فولت} \\implies \\text{قطع}$.",
      "كلا المدخلين ينتجان $V_{\\text{out}} = V_{CC}/2$ في المنطقة الفعالة.",
      "$V_{\\text{in}} = 0\\text{ فولت} \\implies V_{\\text{out}} = 0\\text{ فولت}؛ V_{\\text{in}} = 5\\text{ فولت} \\implies V_{\\text{out}} = 5\\text{ فولت}$.",
      "$V_{\\text{in}} = 0\\text{ فولت} \\implies \\text{قطع (مفتاح مفتوح)}، V_{\\text{out}} = V_{CC}$؛ $V_{\\text{in}} = 5\\text{ فولت} \\implies \\text{تشبع (مفتاح مغلق)}، V_{\\text{out}} \\approx 0\\text{ فولت}$."
    ],
    "correctAnswer": "$V_{\\text{in}} = 0\\text{ V} \\implies \\text{Cutoff (OFF)}, V_{\\text{out}} = V_{CC}$; $V_{\\text{in}} = 5\\text{ V} \\implies \\text{Saturation (ON)}, V_{\\text{out}} \\approx 0\\text{ V}$.",
    "correctIndex": 3,
    "hintEn": "Zero input yields zero base current (cutoff, switch open, V_out = V_CC). High input saturates the transistor (switch closed, V_out = V_CE(sat) approx 0).",
    "hintAr": "دخل صفري يعني انعدام تيار القاعدة (قطع، مفتاح مفتوح، V_out = V_CC). دخل مرتفع يشبع الترانزستور (تشبع، مفتاح مغلق، V_out = 0).",
    "stepByStepSolutionEn": [
      "1. When $V_{\\text{in}} = 0\\text{ V}$, the base-emitter junction is not forward-biased ($I_B = 0$). The transistor is in **cutoff** ($I_C = 0$), so $V_{\\text{out}} = V_{CC} - I_C R_C = V_{CC}$ (Logic 1).",
      "2. When $V_{\\text{in}} = 5\\text{ V}$, large base current drives the transistor into **saturation** where $V_{\\text{out}} = V_{CE(\\text{sat})} \\approx 0.2\\text{ V} \\approx 0\\text{ V}$ (Logic 0)."
    ],
    "stepByStepSolutionAr": [
      "١. عندما يكون $V_{\\text{in}} = 0$: ينعدم تيار القاعدة ($I_B = 0$) فيكون الترانزستور في حالة **قطع** ($I_C = 0$) ويكون $V_{\\text{out}} = V_{CC}$ (منطق 1).",
      "٢. عندما يكون $V_{\\text{in}} = 5\\text{ فولت}$: يمر تيار قاعدة كافٍ لدفع الترانزستور لحالة **التشبع** فيصبح $V_{\\text{out}} = V_{CE(\\text{sat})} \\approx 0.2\\text{ فولت}$ (منطق 0)."
    ],
    "teacherTipEn": "This inverting switching behavior is the basis of the fundamental NOT logic gate and RTL/TTL inverter families.",
    "teacherTipAr": "يمثل هذا السلوك التبديلي العاكس أساس عمل بوابة النفي المنطقية (NOT) وعائلات الدوائر الرقمية."
  },
  {
    "id": "egbac_phys_ch4_se_09",
    "titleEn": "Truth Table and Logic Function of Universal NAND Gate",
    "titleAr": "جدول التحقيق والوظيفة المنطقية لبوابة NAND العامة",
    "difficulty": "easy",
    "questionEn": "A 2-input logic gate has inputs $A$ and $B$. Its output $Y$ is $0$ (LOW) ONLY when both inputs $A$ and $B$ are simultaneously $1$ (HIGH); in all other input combinations ($00, 01, 10$), the output $Y$ is $1$ (HIGH). Identify this gate and express its Boolean function.",
    "questionAr": "بوابة منطقية ذات مدخلين $A$ و $B$. يكون خرجها $Y$ مساوياً لـ $0$ فقط عندما يكون كلا المدخلين $A$ و $B$ معاً مساويين لـ $1$؛ وفي جميع الحالات الأخرى ($00, 01, 10$) يكون خرجها $1$. ما نوع هذه البوابة وما صيغتها البوليانية؟",
    "optionsEn": [
      "NAND gate, with Boolean expression $Y = \\overline{A \\cdot B}$.",
      "NOR gate, with Boolean expression $Y = \\overline{A + B}$.",
      "AND gate, with Boolean expression $Y = A \\cdot B$.",
      "XOR gate, with Boolean expression $Y = A \\oplus B$."
    ],
    "optionsAr": [
      "بوابة نفي العطف (NAND)، وصيغتها البوليانية $Y = \\overline{A \\cdot B}$.",
      "بوابة نفي الفصل (NOR)، وصيغتها البوليانية $Y = \\overline{A + B}$.",
      "بوابة العطف (AND)، وصيغتها البوليانية $Y = A \\cdot B$.",
      "بوابة الاختيار الحصري (XOR)، وصيغتها البوليانية $Y = A \\oplus B$."
    ],
    "correctAnswer": "NAND gate, with Boolean expression $Y = \\overline{A \\cdot B}$.",
    "correctIndex": 0,
    "hintEn": "The output is the exact logical complement (NOT) of an AND gate.",
    "hintAr": "الخرج يمثل النفي المنطقي (NOT) لخرج بوابة AND تماماً.",
    "stepByStepSolutionEn": [
      "1. An AND gate outputs 1 only when both $A=1$ and $B=1$.",
      "2. Inverting the AND output with a NOT gate produces: $Y = \\overline{A \\cdot B}$.",
      "3. Output truth table: $(0,0)\\to 1$, $(0,1)\\to 1$, $(1,0)\\to 1$, and $(1,1)\\to 0$, which is the universal NAND gate."
    ],
    "stepByStepSolutionAr": [
      "١. تعطي بوابة AND خرجاً 1 فقط عندما يكون $A=1$ و $B=1$.",
      "٢. نفي هذا الخرج ببوابة NOT يعطي: $Y = \\overline{A \\cdot B}$.",
      "٣. جدول التحقيق: $(0,0)\\to 1$، $(0,1)\\to 1$، $(1,0)\\to 1$، و $(1,1)\\to 0$ وهي بوابة NAND."
    ],
    "teacherTipEn": "NAND and NOR gates are termed universal gates because ANY digital logic circuit can be built exclusively from them.",
    "teacherTipAr": "تُسمى بوابتا NAND و NOR بالبوابات العامة لأنه يمكن بناء أي دائرة منطقية رقمية باستخدام أي منهما منفرداً."
  },
  {
    "id": "egbac_phys_ch4_se_10",
    "titleEn": "Semiconductor vs Metal Temperature Dependence of Electrical Conductivity",
    "titleAr": "أثر درجة الحرارة على التوصيلية الكهربية لأشباه الموصلات مقارنة بالمعادن",
    "difficulty": "medium",
    "questionEn": "How does increasing temperature affect the electrical conductivity of an intrinsic semiconductor compared to a metallic conductor?",
    "questionAr": "كيف تؤثر زيادة درجة الحرارة على التوصيلية الكهربية لشبه موصل نقي مقارنة بموصل فلزي؟",
    "optionsEn": [
      "Both metallic and semiconductor conductivities increase with temperature.",
      "Semiconductor conductivity increases (covalent bonds break, creating free e-h pairs); Metal conductivity decreases (lattice vibrations increase resistance).",
      "Both metallic and semiconductor conductivities decrease with temperature.",
      "Semiconductor conductivity decreases while metallic conductivity increases."
    ],
    "optionsAr": [
      "تزداد التوصيلية في كل من الفلزات وأشباه الموصلات بارتفاع الحرارة.",
      "تزداد توصيلية شبه الموصل (لكسر روابط تساهمية وتحرير إلكترونات وفجوات)؛ بينما تقل توصيلية الفلز (لزيادة سعة اهتزاز الذرات ومقاومتها للتيار).",
      "تقل التوصيلية في كل من الفلزات وأشباه الموصلات بارتفاع الحرارة.",
      "تقل توصيلية شبه الموصل بينما تزداد توصيلية الفلز."
    ],
    "correctAnswer": "Semiconductor conductivity increases (covalent bonds break, creating free e-h pairs); Metal conductivity decreases (lattice vibrations increase resistance).",
    "correctIndex": 1,
    "hintEn": "Semiconductors have a negative temperature coefficient of resistance (NTC); metals have a positive temperature coefficient (PTC).",
    "hintAr": "تمتلك أشباه الموصلات معاملاً حرارياً سالباً للمقاومة؛ بينما تمتلك الفلزات معاملاً حرارياً موجباً للمقاومة.",
    "stepByStepSolutionEn": [
      "1. In intrinsic semiconductors, thermal energy breaks covalent lattice bonds across the bandgap $E_g$, causing an exponential surge in free electron and hole carrier density ($n = p = n_i \\propto e^{-E_g / 2k_B T}$). Conductivity $\\sigma = e(n \\mu_n + p \\mu_p)$ surges.",
      "2. In metals, free electron density is fixed ($n \\approx 10^{28}\\text{ m}^{-3}$). Higher temperature increases the amplitude of thermal crystal lattice ion vibrations, increasing electron scattering collisions and decreasing conductivity."
    ],
    "stepByStepSolutionAr": [
      "١. في أشباه الموصلات النقية: تؤدي الطاقة الحرارية لكسر روابط تساهمية عبر الفجوة المحظورة، فيزداد تركيز حوامل الشحنة أسياً ($n_i$) وتزداد التوصيلية.",
      "٢. في الفلزات: تركيز الإلكترونات الحرة هائل وثابت بطبيعته، ولكن الحرارة تزيد سعة اهتزاز ذرات الشبكة فيزداد تشتت الإلكترونات وتزداد المقاومة وتقل التوصيلية."
    ],
    "teacherTipEn": "At absolute zero (T = 0 K), an intrinsic semiconductor behaves as a perfect insulator with zero electrical conductivity.",
    "teacherTipAr": "عند الصفر المطلق (0 كلفن)، يتصرف شبه الموصل النقي كعازل كهربي تام التوصيلية منعدمة تماماً."
  }
];

export const egBacPhysCh4Exercises: SolvedProblem[] = [
  {
    "id": "egbac_phys_ch4_ex_01",
    "titleEn": "Intrinsic Semiconductor Behavior at Absolute Zero Temperature",
    "titleAr": "سلوك شبه الموصل النقي عند درجة الصفر المطلق",
    "difficulty": "easy",
    "questionEn": "At absolute zero temperature ($T = 0\\text{ K}$ or $-273.15^\\circ\\text{C}$), what is the electrical conductivity of an intrinsic silicon crystal, and why?",
    "questionAr": "عند درجة الصفر المطلق ($T = 0\\text{ كلفن}$ أو $-273.15^\\circ\\text{م}$)، ما مقدار التوصيلية الكهربية لبلورة سيليكون نقية، وما التفسير الفيزيائي لذلك؟",
    "optionsEn": [
      "Infinite conductivity (superconductor), because resistance vanishes at zero Kelvin.",
      "Moderate conductivity, because electrons tunnel spontaneously without temperature.",
      "Zero conductivity (perfect electrical insulator), because all valence electrons are bound in covalent bonds with no thermal energy to cross the bandgap.",
      "High conductivity, because phosphorus atoms donate electrons without thermal activation."
    ],
    "optionsAr": [
      "توصيلية فائقة (مفرط التوصيل)، لأن المقاومة تنعدم عند الصفر المطلق.",
      "توصيلية متوسطة، لأن الإلكترونات تعبر بالنفق الكمي تلقائياً.",
      "صفر (عازل كهربي تام)، لأن جميع إلكترونات التكافؤ مقيدة بروابط تساهمية سليمة دون أي طاقة حرارية للعبور إلى حزمة التوصيل.",
      "توصيلية عالية، لأن ذرات الفوسفور تمنح إلكترونات دون الحاجة لحرارة."
    ],
    "correctAnswer": "Zero conductivity (perfect electrical insulator), because all valence electrons are bound in covalent bonds with no thermal energy to cross the bandgap.",
    "correctIndex": 2,
    "hintEn": "Bandgap requires thermal energy ~k_B T to promote electrons to conduction band.",
    "hintAr": "تتطلب الفجوة طاقة حرارية لتحرير الإلكترونات ونقلها لحزمة التوصيل.",
    "stepByStepSolutionEn": [
      "1. At $0\\text{ K}$, thermal energy is zero ($k_B T = 0$).",
      "2. The valence band is completely full and the conduction band is completely empty.",
      "3. With no free carriers, electrical conductivity is strictly zero."
    ],
    "stepByStepSolutionAr": [
      "١. عند الصفر المطلق تكون الطاقة الحرارية منعدمة تماماً.",
      "٢. تكون حزمة التكافؤ ممتلئة تماماً وحزمة التوصيل فارغة تماماً من أي إلكترونات حرة.",
      "٣. لانعدام حوامل الشحنة الحرة، تكون التوصيلية الكهربية صفراً تماماً."
    ],
    "teacherTipEn": "This contrasts sharply with metals, whose electrical conductivity remains exceptionally high as T approaches 0 K.",
    "teacherTipAr": "يختلف هذا جذرياً عن الفلزات التي تظل توصيليتها الكهربائية فائقة الارتفاع قرب الصفر المطلق."
  },
  {
    "id": "egbac_phys_ch4_ex_02",
    "titleEn": "Classification of Doping Impurities in Silicon",
    "titleAr": "تصنيف شوائب التطعيم في بلورة السيليكون",
    "difficulty": "easy",
    "questionEn": "Which of the following correctly classifies the doping elements added to silicon to produce n-type versus p-type semiconductors?",
    "questionAr": "أي من الخيارات التالية يصنف بدقة عناصر التطعيم المضافة للسيليكون لإنتاج بلورة سالبة (n-type) أو بلورة موجبة (p-type)؟",
    "optionsEn": [
      "n-type: Trivalent (Boron, Indium); p-type: Pentavalent (Phosphorus, Arsenic).",
      "n-type: Divalent (Magnesium, Zinc); p-type: Tetravalent (Germanium, Carbon).",
      "n-type: Noble gases (Helium, Neon); p-type: Transition metals (Iron, Copper).",
      "n-type: Pentavalent donor (Phosphorus, Arsenic, Antimony); p-type: Trivalent acceptor (Boron, Aluminum, Gallium)."
    ],
    "optionsAr": [
      "النوع السالب: عناصر ثلاثية (البورون، الإنديوم)؛ النوع الموجب: عناصر خماسية (الفوسفور، الزرنيخ).",
      "النوع السالب: عناصر ثنائية (الماغنسيوم، الخارصين)؛ النوع الموجب: عناصر رباعية (الجرمانيوم، الكربون).",
      "النوع السالب: غازات خاملة (الهيليوم، النيون)؛ النوع الموجب: فلزات انتقالية (الحديد، النحاس).",
      "النوع السالب: عناصر خماسية التكافؤ مانحة (الفوسفور، الزرنيخ، الأنتيمون)؛ النوع الموجب: عناصر ثلاثية التكافؤ قابلة (البورون، الألومنيوم، الجاليوم)."
    ],
    "correctAnswer": "n-type: Pentavalent donor (Phosphorus, Arsenic, Antimony); p-type: Trivalent acceptor (Boron, Aluminum, Gallium).",
    "correctIndex": 3,
    "hintEn": "Group V elements donate a 5th electron (n-type). Group III elements create a vacant bond/hole (p-type).",
    "hintAr": "عناصر المجموعة الخامسة تمنح إلكتروناً خامساً حراً (سالبة)، وعناصر المجموعة الثالثة تترك رابطة ناقصة/فجوة (موجبة).",
    "stepByStepSolutionEn": [
      "1. Silicon is Group IV with 4 valence electrons.",
      "2. Group V atoms share 4 electrons in covalent bonds and donate the 5th loosely bound electron, creating an n-type semiconductor.",
      "3. Group III atoms form 3 bonds and accept an electron to complete the 4th, creating a mobile positive hole (p-type)."
    ],
    "stepByStepSolutionAr": [
      "١. السيليكون عنصر رباعي التكافؤ يمتلك 4 إلكترونات تكافؤ.",
      "٢. ذرات المجموعة الخامسة تشارك بأربعة إلكترونات وتمنح الخامس حراً (بلورة سالبة).",
      "٣. ذرات المجموعة الثالثة تشارك بثلاثة إلكترونات وتترك فجوة موجبة شاغرة تقتنص إلكتروناً (بلورة موجبة)."
    ],
    "teacherTipEn": "Phosphorus (P) and Boron (B) are the industry standard dopants for silicon CMOS integrated circuits.",
    "teacherTipAr": "الفوسفور والبورون هما عنصرا التطعيم القياسيان في صناعة الدوائر المتكاملة والرقائق الحاسوبية."
  },
  {
    "id": "egbac_phys_ch4_ex_03",
    "titleEn": "Depletion Layer Formation and Built-In Potential Barrier",
    "titleAr": "تكون منطقة النضوب وحاجز الجهد الداخلي في الوصلة الثنائية",
    "difficulty": "medium",
    "questionEn": "When a p-type semiconductor and an n-type semiconductor join to form a p-n junction, why does carrier diffusion cease and reach equilibrium?",
    "questionAr": "عند تلامس بلورة موجبة مع بلورة سالبة لتكوين الوصلة الثنائية (p-n)، لماذا يتوقف انتشار حوامل الشحنة ويصل إلى حالة اتزان؟",
    "optionsEn": [
      "Diffusion leaves uncompensated fixed ions ($N_D^+$ on n-side, $N_A^-$ on p-side), creating an internal electric field that balances diffusion.",
      "All electrons and holes in the entire device annihilate permanently.",
      "The temperature drops to absolute zero at the junction interface.",
      "The bandgaps of the two materials repel each other magnetically."
    ],
    "optionsAr": [
      "يخلف الانتشار أيونات موجبة غير معوضة في الجانب السالب وأيونات سالبة في الجانب الموجب، فينشأ مجال كهربي داخلي يوازن تيار الانتشار.",
      "تتلاشى جميع الإلكترونات والفجوات في كامل الشريحة نهائياً.",
      "تهبط درجة الحرارة إلى الصفر المطلق عند السطح الفاصل.",
      "تتنافر فجوات الطاقة للمادتين مغناطيسياً."
    ],
    "correctAnswer": "Diffusion leaves uncompensated fixed ions ($N_D^+$ on n-side, $N_A^-$ on p-side), creating an internal electric field that balances diffusion.",
    "correctIndex": 0,
    "hintEn": "Equilibrium is reached when drift current driven by the built-in barrier exactly balances diffusion current.",
    "hintAr": "يحدث الاتزان عندما يتساوى تيار الانسياق الناتج عن المجال الكهربي الداخلي مع تيار الانتشار في المقدار ويعاكسه في الاتجاه.",
    "stepByStepSolutionEn": [
      "1. Electrons diffuse from n-side to p-side and holes diffuse from p-side to n-side down concentration gradients.",
      "2. Recombination near the junction creates a carrier-depleted zone (depletion layer) containing fixed positive donor ions on the n-side and fixed negative acceptor ions on the p-side.",
      "3. These unneutralized ions generate a built-in electric field pointing from n to p, creating a contact potential barrier ($V_0 \\approx 0.7\\text{ V}$ in Si) that halts net carrier diffusion."
    ],
    "stepByStepSolutionAr": [
      "١. تنتشر الإلكترونات من الجانب السالب إلى الموجب والفجوات من الموجب إلى السالب بفعل فرق التركيز.",
      "٢. يترك الانتشار منطقة خالية من حوامل الشحنة الحرة (منطقة القحط أو النضوب) تحتوي أيونات موجبة في n وأيونات سالبة في p.",
      "٣. ينشأ مجال كهربي داخلي من n إلى p وحاجز جهد داخلي ($V_0 \\approx 0.7\\text{ فولت}$) يولد تيار انسياق يعاكس تيار الانتشار حتى يتزنا."
    ],
    "teacherTipEn": "The built-in potential barrier (~0.7 V for Si, ~0.3 V for Ge) must be overcome by forward bias voltage to permit conduction.",
    "teacherTipAr": "يجب التغلب على حاجز الجهد الداخلي (0.7 فولت للسيليكون و 0.3 للجرمانيوم) بجهد انحياز أمامي خارجي لبدء التوصيل."
  },
  {
    "id": "egbac_phys_ch4_ex_04",
    "titleEn": "Diode Under Reverse Bias: Reverse Saturation Leakage Current",
    "titleAr": "سلوك الوصلة الثنائية تحت الانحياز العكسي وتيار التسريب المشبع",
    "difficulty": "easy",
    "questionEn": "When an external DC voltage is applied to a p-n diode with positive terminal connected to the n-region and negative terminal to the p-region (reverse bias), what happens to the depletion region width and current flow?",
    "questionAr": "عند توصيل القطب الموجب لمصدر خارجي بالمنطقة السالبة والقطب السالب بالمنطقة الموجبة لوصلة ثنائية (انحياز عكسي)، ماذا يحدث لسمك منطقة النضوب والتيار المار؟",
    "optionsEn": [
      "The depletion region collapses completely, and a massive forward current flows.",
      "The depletion region widens, the barrier increases, and only a tiny minority-carrier reverse saturation current ($I_s$) flows.",
      "The barrier potential drops to zero, producing alternating AC current.",
      "The diode turns into a superconductor."
    ],
    "optionsAr": [
      "تنهار منطقة النضوب تماماً، ويمر تيار أمامي هائل.",
      "يتسع سمك منطقة النضوب، ويزداد حاجز الجهد، ولا يمر سوى تيار تسريب عكسي ضئيل جداً ($I_s$) ناتج عن حوامل الشحنة الأقلية.",
      "يهبط حاجز الجهد للصفر، فيتولد تيار متردد.",
      "تتحول الوصلة إلى موصل فائق التوصيل."
    ],
    "correctAnswer": "The depletion region widens, the barrier increases, and only a tiny minority-carrier reverse saturation current ($I_s$) flows.",
    "correctIndex": 1,
    "hintEn": "Reverse bias pulls majority carriers away from the junction, expanding the depletion zone.",
    "hintAr": "يسحب الانحياز العكسي حوامل الشحنة السائدة بعيداً عن موضع الوصلة مما يوسع منطقة النضوب.",
    "stepByStepSolutionEn": [
      "1. The positive terminal attracts majority electrons from the n-side, and the negative terminal attracts majority holes from the p-side.",
      "2. This widens the depletion layer and raises the total potential barrier to $(V_0 + V_{\\text{rev}})$.",
      "3. Majority carrier conduction is blocked; only thermally generated minority carriers drift across, creating a minuscule reverse saturation current ($I_s \\sim 10^{-9}\\text{ A}$ in Si)."
    ],
    "stepByStepSolutionAr": [
      "١. يجذب القطب الموجب الإلكترونات السائدة من الجانب n، ويجذب القطب السالب الفجوات من الجانب p.",
      "٢. يتسع سمك منطقة النضوب ويزداد حاجز الجهد الكلي ليصبح $(V_0 + V_{\\text{rev}})$.",
      "٣. ينعدم تيار الأغلبية، وتنجرف فقط حوامل الشحنة الأقلية الناتجة حرارياً مكونة تيار تشبع عكسي ضئيل للغاية."
    ],
    "teacherTipEn": "This unilateral conduction property is the foundation of electrical rectification.",
    "teacherTipAr": "خاصية التوصيل في اتجاه واحد ومقاومة المرور في الاتجاه المعاكس هي أساس عمل التقويم الكهربي."
  },
  {
    "id": "egbac_phys_ch4_ex_05",
    "titleEn": "Ripple Frequency in Full-Wave Bridge Rectification",
    "titleAr": "تردد تموجات الجهد في دائرة التقويم الموجي الكامل",
    "difficulty": "easy",
    "questionEn": "A full-wave diode bridge rectifier is powered by standard mains sinusoidal AC voltage of frequency $f_{\\text{in}} = 50\\text{ Hz}$. What is the fundamental ripple frequency $f_{\\text{out}}$ of the rectified DC output voltage?",
    "questionAr": "دائرة تقويم موجي كامل باستخدام قنطرة ثنائيات تغذيها إشارة جهد متردد جيبي بتردد $f_{\\text{in}} = 50\\text{ هرتز}$. ما التردد الأساسي لتموجات جهد الخرج المقوم $f_{\\text{out}}$؟",
    "optionsEn": [
      "$f_{\\text{out}} = 50\\text{ Hz}$",
      "$f_{\\text{out}} = 25\\text{ Hz}$",
      "$f_{\\text{out}} = 100\\text{ Hz}$",
      "$f_{\\text{out}} = 200\\text{ Hz}$"
    ],
    "optionsAr": [
      "$f_{\\text{out}} = 50\\text{ هرتز}$",
      "$f_{\\text{out}} = 25\\text{ هرتز}$",
      "$f_{\\text{out}} = 100\\text{ هرتز}$",
      "$f_{\\text{out}} = 200\\text{ هرتز}$"
    ],
    "correctAnswer": "$f_{\\text{out}} = 100\\text{ Hz}$",
    "correctIndex": 2,
    "hintEn": "Full-wave rectifiers flip the negative half-cycle into positive, doubling the output pulse frequency: f_out = 2 * f_in.",
    "hintAr": "يقوم المقوم الموجي الكامل بعكس أنصاف الدورات السالبة لتصبح موجبة، فيتضاعف عدد النبضات في الثانية: f_out = 2 * f_in.",
    "stepByStepSolutionEn": [
      "1. In half-wave rectification, only positive half-cycles conduct, so output frequency equals input frequency ($f_{\\text{out}} = f_{\\text{in}} = 50\\text{ Hz}$).",
      "2. In full-wave bridge rectification, both positive and negative half-cycles are rectified into the same output polarity.",
      "3. The output waveform repeats every half-period ($T_{\\text{out}} = T_{\\text{in}} / 2$), so the output frequency is doubled: $f_{\\text{out}} = 2 f_{\\text{in}} = 2 \\times 50\\text{ Hz} = 100\\text{ Hz}$."
    ],
    "stepByStepSolutionAr": [
      "١. في التقويم نصف الموجي: يمر نصف الدورة الموجب فقط، فيظل تردد الخرج مساوياً لتردد الدخل ($50\\text{ هرتز}$).",
      "٢. في التقويم الموجي الكامل: يتم توحيد اتجاه نصفي الدورة الموجب والسالب في نفس الاتجاه.",
      "٣. يتكرر نمط الخرج كل نصف دورة ($T_{\\text{out}} = T_{\\text{in}} / 2$)، فيتضاعف التردد: $f_{\\text{out}} = 2 \\times 50 = 100\\text{ هرتز}$."
    ],
    "teacherTipEn": "Doubled ripple frequency makes filtering smoothing capacitors twice as effective in smoothing out DC ripple.",
    "teacherTipAr": "مضاعفة تردد التموج يسهل ترشيح وتنعيم الجهد باستخدام مكثفات أصغر حجماً وسعة."
  },
  {
    "id": "egbac_phys_ch4_ex_06",
    "titleEn": "Emitter Current Calculation from Base Current and Beta",
    "titleAr": "حساب تيار الباعث بمعلومية تيار القاعدة ومعامل التكبير",
    "difficulty": "medium",
    "questionEn": "An npn transistor has a DC current gain of $\\beta = 150$. If the base current is measured as $I_B = 20\\,\\mu\\text{A} = 2.0 \\times 10^{-5}\\text{ A}$, calculate the collector current $I_C$ and total emitter current $I_E$.",
    "questionAr": "ترانزستور npn معامل تكبير التيار له في الباعث المشترك $\\beta = 150$. إذا قيس تيار القاعدة فكان $I_B = 20\\text{ ميكرو أمبير} = 2.0 \\times 10^{-5}\\text{ أمبير}$، فاحسب تيار المجمع $I_C$ وتيار الباعث الكلي $I_E$.",
    "optionsEn": [
      "$I_C = 1.50\\text{ mA}, \\quad I_E = 1.52\\text{ mA}$",
      "$I_C = 30.0\\text{ mA}, \\quad I_E = 30.02\\text{ mA}$",
      "$I_C = 3.00\\text{ mA}, \\quad I_E = 3.00\\text{ mA}$",
      "$I_C = 3.00\\text{ mA}, \\quad I_E = 3.02\\text{ mA}$"
    ],
    "optionsAr": [
      "$I_C = 1.50\\text{ مللي أمبير}، \\quad I_E = 1.52\\text{ مللي أمبير}$",
      "$I_C = 30.0\\text{ مللي أمبير}، \\quad I_E = 30.02\\text{ مللي أمبير}$",
      "$I_C = 3.00\\text{ مللي أمبير}، \\quad I_E = 3.00\\text{ مللي أمبير}$",
      "$I_C = 3.00\\text{ مللي أمبير}، \\quad I_E = 3.02\\text{ مللي أمبير}$"
    ],
    "correctAnswer": "$I_C = 3.00\\text{ mA}, \\quad I_E = 3.02\\text{ mA}$",
    "correctIndex": 3,
    "hintEn": "Calculate I_C = beta * I_B, then I_E = I_B + I_C.",
    "hintAr": "احسب I_C = beta * I_B، ثم I_E = I_B + I_C.",
    "stepByStepSolutionEn": [
      "1. Collector current: $I_C = \\beta I_B = 150 \\times (20 \\times 10^{-6}\\text{ A}) = 3.0 \\times 10^{-3}\\text{ A} = 3.00\\text{ mA}$.",
      "2. Total emitter current: $I_E = I_C + I_B = 3.00\\text{ mA} + 0.02\\text{ mA} = 3.02\\text{ mA}$."
    ],
    "stepByStepSolutionAr": [
      "١. تيار المجمع: $I_C = \\beta I_B = 150 \\times 20\\,\\mu\\text{A} = 3000\\,\\mu\\text{A} = 3.00\\text{ مللي أمبير}$.",
      "٢. تيار الباعث: $I_E = I_C + I_B = 3.00 + 0.02 = 3.02\\text{ مللي أمبير}$."
    ],
    "teacherTipEn": "A small input base current controls a collector current that is 150 times larger (current amplification).",
    "teacherTipAr": "تيار قاعدة صغير جداً يتحكم في تيار مجمع أكبر منه بمئة وخمسين مرة (تكبير التيار)."
  },
  {
    "id": "egbac_phys_ch4_ex_07",
    "titleEn": "Maximum Load Current Before Zener Regulator Dropout",
    "titleAr": "أقصى تيار حمل قبل خروج منظم جهد زينر عن نطاق التثبيت",
    "difficulty": "hots",
    "questionEn": "A Zener voltage regulator has supply voltage $V_{\\text{in}} = 12\\text{ V}$, series resistance $R_S = 100\\;\\Omega$, and Zener voltage $V_Z = 5.0\\text{ V}$. To maintain regulation, the Zener diode requires a minimum knee current of $I_{Z,\\min} = 5.0\\text{ mA}$. What is the maximum load current $I_{L,\\max}$ that can be drawn by the load before regulation fails?",
    "questionAr": "دائرة تنظيم جهد بزينر تتغذى من مصدر $V_{\\text{in}} = 12\\text{ فولت}$ بمقاومة توالي $R_S = 100\\;\\text{أوم}$ وجهد زينر $V_Z = 5.0\\text{ فولت}$. للحفاظ على التثبيت، يتطلب ثنائي زينر حداً أدنى لتيار التشغيل $I_{Z,\\min} = 5.0\\text{ مللي أمبير}$. ما أقصى تيار حمل $I_{L,\\max}$ يمكن سحبه قبل أن يفقد المنظم قدرته على التثبيت؟",
    "optionsEn": [
      "$I_{L,\\max} = 65\\text{ mA}$",
      "$I_{L,\\max} = 70\\text{ mA}$",
      "$I_{L,\\max} = 50\\text{ mA}$",
      "$I_{L,\\max} = 120\\text{ mA}$"
    ],
    "optionsAr": [
      "$I_{L,\\max} = 65\\text{ مللي أمبير}$",
      "$I_{L,\\max} = 70\\text{ مللي أمبير}$",
      "$I_{L,\\max} = 50\\text{ مللي أمبير}$",
      "$I_{L,\\max} = 120\\text{ مللي أمبير}$"
    ],
    "correctAnswer": "$I_{L,\\max} = 65\\text{ mA}$",
    "correctIndex": 0,
    "hintEn": "Total source current I_S = (V_in - V_Z) / R_S. Then I_L,max = I_S - I_Z,min.",
    "hintAr": "تيار المصدر الكلي I_S = (V_in - V_Z) / R_S. ثم I_L,max = I_S - I_Z,min.",
    "stepByStepSolutionEn": [
      "1. Calculate total current through $R_S$: $I_S = \\frac{V_{\\text{in}} - V_Z}{R_S} = \\frac{12\\text{ V} - 5\\text{ V}}{100\\;\\Omega} = \\frac{7.0\\text{ V}}{100\\;\\Omega} = 70\\text{ mA}$.",
      "2. By Kirchhoff's current law: $I_S = I_Z + I_L \\implies I_L = I_S - I_Z$.",
      "3. For regulation to hold, $I_Z \\ge I_{Z,\\min} = 5\\text{ mA}$, so maximum load current is $I_{L,\\max} = 70\\text{ mA} - 5\\text{ mA} = 65\\text{ mA}$."
    ],
    "stepByStepSolutionAr": [
      "١. التيار المار عبر مقاومة التوالي: $I_S = \\frac{12 - 5}{100} = \\frac{7.0}{100} = 70\\text{ مللي أمبير}$.",
      "٢. قانون كيرشوف للتيار: $I_S = I_Z + I_L \\implies I_L = I_S - I_Z$.",
      "٣. أقصى تيار حمل قبل الخروج من التنظيم: $I_{L,\\max} = 70 - 5 = 65\\text{ مللي أمبير}$."
    ],
    "teacherTipEn": "If load current exceeds 65 mA, the Zener turns off completely and output voltage collapses below 5.0 V.",
    "teacherTipAr": "إذا زاد تيار الحمل عن 65 مللي أمبير، ينطفئ ثنائي زينر تماماً ويهبط جهد الخرج دون 5 فولت."
  },
  {
    "id": "egbac_phys_ch4_ex_08",
    "titleEn": "Collector Saturation Voltage in BJT Digital Logic Inverter",
    "titleAr": "جهد تشبع المجمع في عاكس المنطق الرقمي للترانزستور",
    "difficulty": "easy",
    "questionEn": "When an npn transistor is driven deep into saturation by a large base current ($I_B > I_C / \\beta$), what is the typical collector-to-emitter voltage $V_{CE(\\text{sat})}$?",
    "questionAr": "عند دفع ترانزستور npn بقوة إلى حالة التشبع بتيار قاعدة كبير ($I_B > I_C / \\beta$)، ما القيمة النموذجية لجهد المجمع - باعث عند التشبع $V_{CE(\\text{sat})}$؟",
    "optionsEn": [
      "$V_{CE(\\text{sat})} = V_{CC}$ (representing Logic 1).",
      "$V_{CE(\\text{sat})} \\approx 0.2\\text{ V}$ (representing Logic 0).",
      "$V_{CE(\\text{sat})} = 0.7\\text{ V}$.",
      "$V_{CE(\\text{sat})} = 5.0\\text{ V}$."
    ],
    "optionsAr": [
      "$V_{CE(\\text{sat})} = V_{CC}$ (تمثل المستوى المنطقي المرتفع Logic 1).",
      "$V_{CE(\\text{sat})} \\approx 0.2\\text{ فولت}$ (تمثل المستوى المنطقي المنخفض Logic 0).",
      "$V_{CE(\\text{sat})} = 0.7\\text{ فولت}$.",
      "$V_{CE(\\text{sat})} = 5.0\\text{ فولت}$."
    ],
    "correctAnswer": "$V_{CE(\\text{sat})} \\approx 0.2\\text{ V}$ (representing Logic 0).",
    "correctIndex": 1,
    "hintEn": "In saturation, both base-emitter and base-collector junctions become forward biased, resulting in V_CE = V_BE - V_BC approx 0.7 - 0.5 = 0.2 V.",
    "hintAr": "في التشبع تكون الوصلتان أماميتين، فيكون V_CE = V_BE - V_BC ≈ 0.7 - 0.5 = 0.2 فولت.",
    "stepByStepSolutionEn": [
      "1. When driven into saturation, the internal collector-base junction becomes forward-biased.",
      "2. The net voltage from collector to emitter is the difference of two forward diodes: $V_{CE(\\text{sat})} = V_{BE} - V_{BC} \\approx 0.7\\text{ V} - 0.5\\text{ V} \\approx 0.2\\text{ V}$.",
      "3. In digital circuits, this near-zero voltage is recognized as a valid binary LOW (Logic 0)."
    ],
    "stepByStepSolutionAr": [
      "١. عند الوصول لحالة التشبع، تصبح وصلة المجمع - قاعدة في انحياز أمامي داخلي.",
      "٢. يكون فرق الجهد الكلي هو الفرق بين جهدي انحيازين أماميين: $V_{CE(\\text{sat})} \\approx 0.7 - 0.5 = 0.2\\text{ فولت}$.",
      "٣. يُفسر هذا الجهد المنخفض جداً في الدوائر الرقمية كصفر منطقي (Logic 0)."
    ],
    "teacherTipEn": "This low saturation voltage ensures very low switch power dissipation: P = V_CE(sat) * I_C.",
    "teacherTipAr": "يضمن انخفاض جهد التشبع تقليل القدرة الحرارية المبددة في الترانزستور أثناء التوصيل."
  },
  {
    "id": "egbac_phys_ch4_ex_09",
    "titleEn": "De Morgan's Laws for Digital Logic Equivalence",
    "titleAr": "قوانين دي مورجان لمكافئات البوابات والدوائر المنطقية",
    "difficulty": "medium",
    "questionEn": "According to De Morgan's laws of Boolean algebra, what is the equivalent logic gate of an inverted-input OR gate (negative-OR): $Y = \\overline{A} + \\overline{B}$?",
    "questionAr": "وفق قانوني دي مورجان في الجبر البولياني، ما البوابة المنطقية المكافئة لبوابة OR ذات المداخل المنفية: $Y = \\overline{A} + \\overline{B}$؟",
    "optionsEn": [
      "A standard NOR gate: $Y = \\overline{A + B}$.",
      "A standard AND gate: $Y = A \\cdot B$.",
      "A standard NAND gate: $Y = \\overline{A \\cdot B}$.",
      "A standard XOR gate: $Y = A \\oplus B$."
    ],
    "optionsAr": [
      "بوابة NOR القياسية: $Y = \\overline{A + B}$.",
      "بوابة AND القياسية: $Y = A \\cdot B$.",
      "بوابة NAND القياسية: $Y = \\overline{A \\cdot B}$.",
      "بوابة XOR القياسية: $Y = A \\oplus B$."
    ],
    "correctAnswer": "A standard NAND gate: $Y = \\overline{A \\cdot B}$.",
    "correctIndex": 2,
    "hintEn": "De Morgan's first theorem: not(A) or not(B) = not(A and B).",
    "hintAr": "قانون دي مورجان الأول: not(A) or not(B) = not(A and B).",
    "stepByStepSolutionEn": [
      "1. De Morgan's theorem states: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$.",
      "2. Conversely: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.",
      "3. Therefore, an OR gate with bubbles (inverters) on both inputs is functionally identical to a NAND gate."
    ],
    "stepByStepSolutionAr": [
      "١. نص قانون دي مورجان: $\\overline{A \\cdot B} = \\overline{A} + \\overline{B}$.",
      "٢. وبالمثل: $\\overline{A + B} = \\overline{A} \\cdot \\overline{B}$.",
      "٣. ولذلك فإن بوابة OR ذات المداخل المنفية تطابق وظيفياً بوابة NAND تماماً."
    ],
    "teacherTipEn": "De Morgan's equivalence enables chip designers to transform active-LOW signals without adding extra inverters.",
    "teacherTipAr": "تتيح مبرهنات دي مورجان لمهندسي الرقائق تبسيط الدوائر المنطقية وتقليل عدد الترانزستورات المطلوبة."
  },
  {
    "id": "egbac_phys_ch4_ex_10",
    "titleEn": "Boolean Function and Truth Table of an XOR Gate",
    "titleAr": "الصيغة البوليانية وجدول التحقيق لبوابة الاختيار الحصري (XOR)",
    "difficulty": "medium",
    "questionEn": "An Exclusive-OR (XOR) gate has two inputs $A$ and $B$. Under which conditions is the output $Y = 1$?",
    "questionAr": "بوابة الاختيار الحصري (XOR) لها مدخلان $A$ و $B$. في أي من الحالات التالية يكون خرجها $Y = 1$؟",
    "optionsEn": [
      "When both inputs are identical: $(0,0)$ or $(1,1)$.",
      "Only when both inputs are simultaneously $1$: $(A=1, B=1)$.",
      "Only when both inputs are simultaneously $0$: $(A=0, B=0)$.",
      "When the inputs are different: $(A=1, B=0)$ or $(A=0, B=1)$."
    ],
    "optionsAr": [
      "عندما يكون المدخلان متطابقين: $(0,0)$ أو $(1,1)$.",
      "فقط عندما يكون كلا المدخلين معاً مساويين لـ $1$.",
      "فقط عندما يكون كلا المدخلين معاً مساويين لـ $0$.",
      "عندما يكون المدخلان مختلفين: $(A=1, B=0)$ أو $(A=0, B=1)$."
    ],
    "correctAnswer": "When the inputs are different: $(A=1, B=0)$ or $(A=0, B=1)$.",
    "correctIndex": 3,
    "hintEn": "XOR means one OR the other, but NOT both: Y = A * not(B) + not(A) * B.",
    "hintAr": "بوابة XOR تعني أحدهما أو الآخر حصرياً: Y = A * not(B) + not(A) * B.",
    "stepByStepSolutionEn": [
      "1. Boolean expression for XOR: $Y = A \\oplus B = A\\overline{B} + \\overline{A}B$.",
      "2. Truth table: $(0,0)\\to 0$, $(0,1)\\to 1$, $(1,0)\\to 1$, and $(1,1)\\to 0$.",
      "3. Output is HIGH if and only if the inputs differ."
    ],
    "stepByStepSolutionAr": [
      "١. الصيغة البوليانية لبوابة XOR: $Y = A \\oplus B = A\\overline{B} + \\overline{A}B$.",
      "٢. جدول التحقيق: $(0,0)\\to 0$، $(0,1)\\to 1$، $(1,0)\\to 1$، و $(1,1)\\to 0$.",
      "٣. الخرج يكون 1 فقط عند اختلاف قيمتي المدخلين."
    ],
    "teacherTipEn": "The XOR gate is the essential computing element of binary half-adders and parity checkers.",
    "teacherTipAr": "تعد بوابة XOR حجر الزاوية في دوائر الجمع الحسابي الثنائي وكواشف أخطاء البيانات الرقمية."
  },
  {
    "id": "egbac_phys_ch4_ex_11",
    "titleEn": "Bandgap Absorption Threshold Wavelength for Silicon Photodiode",
    "titleAr": "الطول الموجي الحرج لامتصاص فوتونات الضوء في ثنائي ضوئي من السيليكون",
    "difficulty": "medium",
    "questionEn": "The energy bandgap of silicon at room temperature is $E_g = 1.12\\text{ eV}$. What is the maximum threshold wavelength $\\lambda_{\\max}$ of light that can generate electron-hole pairs and trigger photocurrent in a silicon photodiode? (Given $hc \\approx 1240\\text{ eV}\\cdot\\text{nm}$).",
    "questionAr": "تبلغ فجوة الطاقة للسيليكون عند درجة حرارة الغرفة $E_g = 1.12\\text{ إلكترون فولت}$. ما أقصى طول موجي حرج $\\lambda_{\\max}$ للضوء يمكنه توليد أزواج (إلكترون - فجوة) وإمرار تيار في ثنائي ضوئي مصنوع من السيليكون؟",
    "optionsEn": [
      "$\\lambda_{\\max} \\approx 1107\\text{ nm} \\; (1.11\\text{ μm, near-infrared})$",
      "$\\lambda_{\\max} \\approx 550\\text{ nm}$",
      "$\\lambda_{\\max} \\approx 850\\text{ nm}$",
      "$\\lambda_{\\max} \\approx 2200\\text{ nm}$"
    ],
    "optionsAr": [
      "$\\lambda_{\\max} \\approx 1107\\text{ نانومتر} \\; (1.11\\text{ ميكرومتر، أشعة تحت حمراء})$",
      "$\\lambda_{\\max} \\approx 550\\text{ نانومتر}$",
      "$\\lambda_{\\max} \\approx 850\\text{ نانومتر}$",
      "$\\lambda_{\\max} \\approx 2200\\text{ نانومتر}$"
    ],
    "correctAnswer": "$\\lambda_{\\max} \\approx 1107\\text{ nm} \\; (1.11\\text{ μm, near-infrared})$",
    "correctIndex": 0,
    "hintEn": "Formula: lambda_max = hc / E_g = 1240 / 1.12 nm.",
    "hintAr": "القانون: lambda_max = hc / E_g = 1240 / 1.12 نانومتر.",
    "stepByStepSolutionEn": [
      "1. A photon must possess at least the bandgap energy: $E_{\\text{photon}} = \\frac{hc}{\\lambda} \\ge E_g$.",
      "2. The cutoff wavelength is: $\\lambda_{\\max} = \\frac{hc}{E_g} = \\frac{1240\\text{ eV}\\cdot\\text{nm}}{1.12\\text{ eV}} \\approx 1107.1\\text{ nm}$."
    ],
    "stepByStepSolutionAr": [
      "١. شرط تحرير إلكترون عبر الفجوة المحظورة: $E_{\\text{photon}} \\ge E_g$.",
      "٢. الطول الموجي الحرج: $\\lambda_{\\max} = \\frac{1240}{1.12} \\approx 1107\\text{ نانومتر}$."
    ],
    "teacherTipEn": "Photons with λ > 1107 nm pass straight through pure silicon without being absorbed.",
    "teacherTipAr": "الفوتونات ذات الطول الموجي الأكبر من 1107 نانومتر تنفذ عبر السيليكون النقي دون أي امتصاص."
  },
  {
    "id": "egbac_phys_ch4_ex_12",
    "titleEn": "Power Dissipation in a Common-Emitter BJT Transistor",
    "titleAr": "القدرة الكهربية المبددة كحرارة في ترانزستور الباعث المشترك",
    "difficulty": "easy",
    "questionEn": "In a common-emitter amplifier, the quiescent operating point is $V_{CE} = 5.0\\text{ V}$ and $I_C = 40\\text{ mA}$. Neglecting the negligible base power ($I_B V_{BE} \\ll I_C V_{CE}$), calculate the thermal power dissipation $P_D$ of the transistor.",
    "questionAr": "في مكبر باعث مشترك، نقطة التشغيل المستقرة هي $V_{CE} = 5.0\\text{ فولت}$ و $I_C = 40\\text{ مللي أمبير}$. بإهمال قدرة القاعدة الضئيلة جداً، احسب القدرة الحرارية المبددة $P_D$ داخل الترانزستور.",
    "optionsEn": [
      "$P_D = 100\\text{ mW}$",
      "$P_D = 200\\text{ mW} \\; (0.20\\text{ W})$",
      "$P_D = 400\\text{ mW}$",
      "$P_D = 800\\text{ mW}$"
    ],
    "optionsAr": [
      "$P_D = 100\\text{ مللي واط}$",
      "$P_D = 200\\text{ مللي واط} \\; (0.20\\text{ واط})$",
      "$P_D = 400\\text{ مللي واط}$",
      "$P_D = 800\\text{ مللي واط}$"
    ],
    "correctAnswer": "$P_D = 200\\text{ mW} \\; (0.20\\text{ W})$",
    "correctIndex": 1,
    "hintEn": "Formula: P_D = V_CE * I_C.",
    "hintAr": "القانون: P_D = V_CE * I_C.",
    "stepByStepSolutionEn": [
      "1. Transistor power dissipation formula: $P_D \\approx V_{CE} \\cdot I_C$.",
      "2. Calculate: $P_D = 5.0\\text{ V} \\times (40 \\times 10^{-3}\\text{ A}) = 0.20\\text{ W} = 200\\text{ mW}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون القدرة المبددة في الترانزستور: $P_D \\approx V_{CE} \\cdot I_C$.",
      "٢. الحساب: $P_D = 5.0 \\times 0.040 = 0.20\\text{ واط} = 200\\text{ مللي واط}$."
    ],
    "teacherTipEn": "This operating point must lie comfortably within the transistor's Safe Operating Area (SOA) to prevent thermal runaway.",
    "teacherTipAr": "يجب أن تقع نقطة التشغيل داخل منطقة الأمان المحددة للترانزستور منعاً للانهيار الحراري."
  },
  {
    "id": "egbac_phys_ch4_ex_13",
    "titleEn": "Binary Half-Adder Circuit Architecture",
    "titleAr": "تركيب دائرة الجامع النصفي الثنائي (Half-Adder)",
    "difficulty": "easy",
    "questionEn": "In digital electronics, a binary half-adder adds two 1-bit binary inputs $A$ and $B$. Which two logic gates generate the Sum ($S$) and Carry ($C$) outputs?",
    "questionAr": "في الإلكترونيات الرقمية، تقوم دائرة الجامع النصفي بجمع خانتين ثنائيتين $A$ و $B$. ما البوابتان المنطقيتان المستخدمتان لتوليد خانة المجموع ($S$) وخانة الحمل ($C$)؟",
    "optionsEn": [
      "Sum $S = A + B$ (OR gate); Carry $C = \\overline{A \\cdot B}$ (NAND gate).",
      "Sum $S = A \\cdot B$ (AND gate); Carry $S = A \\oplus B$ (XOR gate).",
      "Sum $S = A \\oplus B$ (XOR gate); Carry $C = A \\cdot B$ (AND gate).",
      "Sum $S = \\overline{A + B}$ (NOR gate); Carry $C = A + B$ (OR gate)."
    ],
    "optionsAr": [
      "المجموع $S = A + B$ (بوابة OR)؛ والحمل $C = \\overline{A \\cdot B}$ (بوابة NAND).",
      "المجموع $S = A \\cdot B$ (بوابة AND)؛ والحمل $S = A \\oplus B$ (بوابة XOR).",
      "المجموع $S = A \\oplus B$ (بوابة XOR)؛ والحمل $C = A \\cdot B$ (بوابة AND).",
      "المجموع $S = \\overline{A + B}$ (بوابة NOR)؛ والحمل $C = A + B$ (بوابة OR)."
    ],
    "correctAnswer": "Sum $S = A \\oplus B$ (XOR gate); Carry $C = A \\cdot B$ (AND gate).",
    "correctIndex": 2,
    "hintEn": "0+0=0 (S=0,C=0), 0+1=1 (S=1,C=0), 1+0=1 (S=1,C=0), 1+1=10 binary (S=0,C=1).",
    "hintAr": "0+0=0، 0+1=1، 1+0=1، 1+1=10 ثنائي (المجموع 0 والحمل 1).",
    "stepByStepSolutionEn": [
      "1. Binary addition rules: $0+0=0$, $0+1=1$, $1+0=1$, $1+1 = 10_2$ (Sum $0$, Carry $1$).",
      "2. The Sum column matches the XOR truth table ($S = A \\oplus B$).",
      "3. The Carry column is 1 only when $A=1$ and $B=1$, matching the AND gate ($C = A \\cdot B$)."
    ],
    "stepByStepSolutionAr": [
      "١. قواعد الجمع الثنائي: $0+0=0$، $0+1=1$، $1+0=1$، $1+1 = 10_2$ (المجموع 0 والحمل 1).",
      "٢. عمود المجموع يطابق جدول بوابة XOR تماماً ($S = A \\oplus B$).",
      "٣. عمود الحمل يكون 1 فقط عندما يكون كلا المدخلين 1، وهو ما يطابق بوابة AND ($C = A \\cdot B$)."
    ],
    "teacherTipEn": "Combining two half-adders with an OR gate forms a full-adder capable of adding previous carry bits.",
    "teacherTipAr": "دمج جامعين نصفيين مع بوابة OR يشكل دائرة جامع كامل قادرة على استقبال خانة الحمل السابقة."
  },
  {
    "id": "egbac_phys_ch4_ex_14",
    "titleEn": "Input vs Output Impedance of Common-Emitter Amplifier",
    "titleAr": "مقاومة الدخل والخرج لمكبر الباعث المشترك",
    "difficulty": "medium",
    "questionEn": "Why is the common-emitter (CE) configuration the most widely utilized transistor amplifier for multi-stage voltage amplification?",
    "questionAr": "لماذا تعد توصيلة الباعث المشترك الأكثر استخداماً وانتشاراً في دوائر تكبير الجهد متعددة المراحل؟",
    "optionsEn": [
      "It has zero output resistance and infinite input resistance.",
      "It operates completely without any DC biasing power supply.",
      "It does not generate any thermal heat under heavy loads.",
      "It provides high voltage gain, high current gain, and the highest overall power gain, with well-matched intermediate impedances."
    ],
    "optionsAr": [
      "تمتلك مقاومة خرج تساوي صفراً ومقاومة دخل لا نهائية.",
      "تعمل تماماً دون الحاجة لأي مصدر جهد مستمر للانحياز.",
      "لا تولد أي حرارة إطلاقاً تحت الأحمال الثقيلة.",
      "توفر تكبيراً كبيراً في الجهد، وتكبيراً كبيراً في التيار، وتحقق أعلى كسب في القدرة الكهربية مع ملاءمة جيدة لمعاوقات الربط."
    ],
    "correctAnswer": "It provides high voltage gain, high current gain, and the highest overall power gain, with well-matched intermediate impedances.",
    "correctIndex": 3,
    "hintEn": "Common-emitter offers the best combination of voltage gain A_v and current gain beta, maximizing power gain A_p = A_v * beta.",
    "hintAr": "تجمع توصيلة الباعث المشترك بين تكبير الجهد وتكبير التيار فتعطي أعلى كسب في القدرة A_p = A_v * beta.",
    "stepByStepSolutionEn": [
      "1. Common-Base provides voltage gain but current gain $< 1$.",
      "2. Common-Collector (emitter follower) provides current gain but voltage gain $< 1$.",
      "3. Common-Emitter provides both high voltage gain ($A_v > 100$) and high current gain ($\\beta > 100$), achieving total power gain exceeding $10,000$ ($40\\text{ dB}$)."
    ],
    "stepByStepSolutionAr": [
      "١. دائرة القاعدة المشتركة تكبر الجهد فقط بينما تكبير التيار أقل من واحد.",
      "٢. دائرة المجمع المشترك تكبر التيار فقط بينما تكبير الجهد أقل من واحد.",
      "٣. دائرة الباعث المشترك تكبر الجهد والتيار معاً، مما يمنحها أعلى كسب في القدرة الكهربية."
    ],
    "teacherTipEn": "This exceptional power gain makes the CE amplifier the workhorse of analog electronic signal processing.",
    "teacherTipAr": "هذا الكسب الفائق في القدرة يجعل مكبر الباعث المشترك العمود الفقري للإلكترونيات التناظرية."
  },
  {
    "id": "egbac_phys_ch4_ex_15",
    "titleEn": "Threshold Conduction Voltage of Silicon vs Germanium Diodes",
    "titleAr": "جهد عتبة التوصيل الأمامي لوصلات السيليكون مقارنة بالجرمانيوم",
    "difficulty": "easy",
    "questionEn": "In semiconductor electronics, what are the characteristic forward barrier threshold conduction voltages ($V_{\\text{barrier}}$) for silicon (Si) and germanium (Ge) diodes?",
    "questionAr": "في إلكترونيات أشباه الموصلات، ما قيم جهد عتبة التوصيل الأمامي (حاجز الجهد) لكل من ثنائي السيليكون وثنائي الجرمانيوم؟",
    "optionsEn": [
      "Silicon: $\\approx 0.7\\text{ V}$; Germanium: $\\approx 0.3\\text{ V}$.",
      "Silicon: $\\approx 0.3\\text{ V}$; Germanium: $\\approx 0.7\\text{ V}$.",
      "Silicon: $\\approx 1.5\\text{ V}$; Germanium: $\\approx 3.0\\text{ V}$.",
      "Both have identical threshold voltages of $\\approx 0.5\\text{ V}$."
    ],
    "optionsAr": [
      "السيليكون: $\\approx 0.7\\text{ فولت}$؛ الجرمانيوم: $\\approx 0.3\\text{ فولت}$.",
      "السيليكون: $\\approx 0.3\\text{ فولت}$؛ الجرمانيوم: $\\approx 0.7\\text{ فولت}$.",
      "السيليكون: $\\approx 1.5\\text{ فولت}$؛ الجرمانيوم: $\\approx 3.0\\text{ فولت}$.",
      "كلاهما لهما نفس جهد العتبة تماماً ويساوي $\\approx 0.5\\text{ فولت}$."
    ],
    "correctAnswer": "Silicon: $\\approx 0.7\\text{ V}$; Germanium: $\\approx 0.3\\text{ V}$.",
    "correctIndex": 0,
    "hintEn": "Silicon has a wider bandgap (1.12 eV vs 0.67 eV for Ge), creating a larger built-in barrier potential.",
    "hintAr": "فجوة الطاقة في السيليكون أكبر (1.12 إلكترون فولت مقابل 0.67 للجرمانيوم) فينشأ حاجز جهد داخلي أكبر.",
    "stepByStepSolutionEn": [
      "1. The built-in potential barrier depends directly on the semiconductor material's bandgap energy.",
      "2. Silicon's larger bandgap ($1.12\\text{ eV}$) yields a barrier of $\\approx 0.7\\text{ V}$.",
      "3. Germanium's smaller bandgap ($0.67\\text{ eV}$) yields a lower barrier of $\\approx 0.3\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. يرتبط حاجز الجهد الداخلي مباشرة باتساع فجوة الطاقة المحظورة للمادة.",
      "٢. اتساع فجوة السيليكون (1.12 إلكترون فولت) ينتج حاجز جهد يقارب 0.7 فولت.",
      "٣. بينما فجوة الجرمانيوم الأصغر (0.67 إلكترون فولت) تنتج حاجز جهد أقل يقارب 0.3 فولت."
    ],
    "teacherTipEn": "Silicon's higher barrier makes it vastly superior to germanium in suppressing reverse thermal leakage currents.",
    "teacherTipAr": "حاجز السيليكون الأعلى يجعله متفوقاً جداً على الجرمانيوم في كبت تيارات التسريب الحراري عند درجات الحرارة المرتفعة."
  }
];
