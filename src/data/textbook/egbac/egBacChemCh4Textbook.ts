import type { SolvedProblem } from '../../../types/curriculum';

export const egBacChemCh4SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch4_se_01",
    "titleEn": "Gibbs Free Energy and Temperature-Dependent Spontaneity",
    "titleAr": "طاقة جيبس الحرة والتلقائية المعتمدة على درجة الحرارة",
    "difficulty": "easy",
    "questionEn": "A chemical reaction has standard enthalpy change $\\Delta H^\\circ = +60.0\\text{ kJ/mol}$ and standard entropy change $\\Delta S^\\circ = +150.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$. Calculate $\\Delta G^\\circ$ at $298\\text{ K}$ and find the threshold temperature $T$ above which the reaction becomes spontaneous.",
    "questionAr": "تفاعل كيميائي يمتلك تغيراً في الإنثالبي القياسي $\\Delta H^\\circ = +60.0\\text{ kJ/mol}$ وتغيراً في الإنتروبيا القياسية $\\Delta S^\\circ = +150.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$. احسب طاقة جيبس الحرة $\\Delta G^\\circ$ عند $298\\text{ K}$، وأوجد درجة الحرارة الحدية $T$ التي يصبح التفاعل فوقها تلقائياً.",
    "optionsEn": [
      "$\\Delta G^\\circ_{298} = +15.3\\text{ kJ/mol}$ (non-spontaneous); spontaneous above $T > 400\\text{ K} \\; (127^\\circ\\text{C})$",
      "$\\Delta G^\\circ_{298} = -15.3\\text{ kJ/mol}$; spontaneous at all temperatures",
      "$\\Delta G^\\circ_{298} = +45.0\\text{ kJ/mol}$; spontaneous above $T > 250\\text{ K}$",
      "$\\Delta G^\\circ_{298} = +60.0\\text{ kJ/mol}$; never spontaneous at any temperature"
    ],
    "optionsAr": [
      "$\\Delta G^\\circ_{298} = +15.3\\text{ kJ/mol}$ (غير تلقائي)؛ ويصبح تلقائياً عند درجات حرارة $T > 400\\text{ K} \\; (127^\\circ\\text{م})$",
      "$\\Delta G^\\circ_{298} = -15.3\\text{ kJ/mol}$؛ تلقائي عند جميع درجات الحرارة",
      "$\\Delta G^\\circ_{298} = +45.0\\text{ kJ/mol}$؛ يصبح تلقائياً فوق $T > 250\\text{ K}$",
      "$\\Delta G^\\circ_{298} = +60.0\\text{ kJ/mol}$؛ غير تلقائي عند أي درجة حرارة"
    ],
    "correctAnswer": "$\\Delta G^\\circ_{298} = +15.3\\text{ kJ/mol}$ (non-spontaneous); spontaneous above $T > 400\\text{ K} \\; (127^\\circ\\text{C})$",
    "correctIndex": 0,
    "hintEn": "Delta G = Delta H - T * Delta S. Convert Delta S to kJ: 0.150 kJ/(mol*K). Threshold temperature when Delta G = 0 is T = Delta H / Delta S.",
    "hintAr": "Delta G = Delta H - T * Delta S. حول الإنتروبيا إلى كيلوجول: 0.150. درجة الحرارة الانتقالية عند Delta G = 0 هي T = Delta H / Delta S.",
    "stepByStepSolutionEn": [
      "1. Standard Gibbs equation: $\\Delta G^\\circ = \\Delta H^\\circ - T \\Delta S^\\circ$.",
      "2. At $298\\text{ K}$: $\\Delta G^\\circ = 60.0\\text{ kJ/mol} - (298\\text{ K})(0.150\\text{ kJ}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}) = 60.0 - 44.7 = +15.3\\text{ kJ/mol}$ (positive, so non-spontaneous at room temperature).",
      "3. Threshold temperature for spontaneity (where $\\Delta G^\\circ = 0$): $T_{\\text{eq}} = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{60,000\\text{ J/mol}}{150.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}} = 400\\text{ K}$ ($127^\\circ\\text{C}$).",
      "4. Because both $\\Delta H^\\circ > 0$ and $\\Delta S^\\circ > 0$, the $T\\Delta S^\\circ$ term dominates at high temperatures, making $\\Delta G^\\circ < 0$ whenever $T > 400\\text{ K}$."
    ],
    "stepByStepSolutionAr": [
      "١. علاقة جيبس: $\\Delta G^\\circ = \\Delta H^\\circ - T \\Delta S^\\circ$.",
      "٢. عند $298\\text{ K}$: $\\Delta G^\\circ = 60.0 - (298 \\times 0.150) = 60.0 - 44.7 = +15.3\\text{ kJ/mol}$ (موجبة، إذن غير تلقائي عند درجة حرارة الغرفة).",
      "٣. درجة الحرارة الانتقالية لبدء التلقائية (عند $\\Delta G = 0$): $T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{60000}{150.0} = 400\\text{ K} = 127^\\circ\\text{C}$.",
      "٤. بما أن $\\Delta H > 0$ و $\\Delta S > 0$، فإن الحد $T\\Delta S$ يتغلب عند درجات الحرارة المرتفعة وتصبح $\\Delta G < 0$ تلقائية عند أي حرارة تتجاوز $400\\text{ K}$."
    ],
    "teacherTipEn": "Remember to convert Delta S from J to kJ (or Delta H from kJ to J) before computing Delta G = Delta H - T * Delta S.",
    "teacherTipAr": "تأكد دائماً من مطابقة الوحدات بتحويل الإنتروبيا إلى كيلوجول قبل تطبيق معادلة جيبس."
  },
  {
    "id": "egbac_chem_ch4_se_02",
    "titleEn": "Standard Galvanic Cell Potential and Spontaneity",
    "titleAr": "جهد الخلية الجلفانية القياسي ومعيار التلقائية الكهروكيميائية",
    "difficulty": "easy",
    "questionEn": "A standard Daniell cell operates with the overall reaction: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$. Given standard reduction potentials $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$ and $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$ at $25^\\circ\\text{C}$, calculate the standard cell potential $E^\\circ_{\\text{cell}}$ and the standard Gibbs free energy change $\\Delta G^\\circ$. ($F = 96,485\\text{ C/mol}$).",
    "questionAr": "خلية دانيال الجلفانية القياسية تعمل وفق التفاعل الكلي: $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\to \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$. بمعلومية جهود الاختزال القياسية $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$ و $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$ عند $25^\\circ\\text{C}$، احسب القوة الدافعة الكهربية القياسية للخلية $E^\\circ_{\\text{cell}}$ والتغير في طاقة جيبس الحرة $\\Delta G^\\circ$. ($F = 96,485\\text{ C/mol}$).",
    "optionsEn": [
      "$E^\\circ_{\\text{cell}} = -0.42\\text{ V}, \\quad \\Delta G^\\circ = +81.1\\text{ kJ/mol}$",
      "$E^\\circ_{\\text{cell}} = +1.10\\text{ V}, \\quad \\Delta G^\\circ = -212.3\\text{ kJ/mol}$",
      "$E^\\circ_{\\text{cell}} = +0.42\\text{ V}, \\quad \\Delta G^\\circ = -81.1\\text{ kJ/mol}$",
      "$E^\\circ_{\\text{cell}} = +1.10\\text{ V}, \\quad \\Delta G^\\circ = -106.1\\text{ kJ/mol}$"
    ],
    "optionsAr": [
      "$E^\\circ_{\\text{cell}} = -0.42\\text{ V}, \\quad \\Delta G^\\circ = +81.1\\text{ kJ/mol}$",
      "$E^\\circ_{\\text{cell}} = +1.10\\text{ V}, \\quad \\Delta G^\\circ = -212.3\\text{ kJ/mol}$",
      "$E^\\circ_{\\text{cell}} = +0.42\\text{ V}, \\quad \\Delta G^\\circ = -81.1\\text{ kJ/mol}$",
      "$E^\\circ_{\\text{cell}} = +1.10\\text{ V}, \\quad \\Delta G^\\circ = -106.1\\text{ kJ/mol}$"
    ],
    "correctAnswer": "$E^\\circ_{\\text{cell}} = +1.10\\text{ V}, \\quad \\Delta G^\\circ = -212.3\\text{ kJ/mol}$",
    "correctIndex": 1,
    "hintEn": "Anode is Zn (oxidized, E_red = -0.76 V), cathode is Cu (reduced, E_red = +0.34 V). E_cell = E_cathode - E_anode = +0.34 - (-0.76) = +1.10 V. Delta G = -n * F * E_cell with n = 2.",
    "hintAr": "المهبط (الكاثود) هو النحاس، والمصعد (الآنود) هو الخارصين. E_cell = 0.34 - (-0.76) = 1.10 V. طاقة جيبس: Delta G = -n * F * E_cell حيث n = 2.",
    "stepByStepSolutionEn": [
      "1. Half-cell reactions:\n   - Anode (oxidation): $\\text{Zn}(s) \\to \\text{Zn}^{2+}(aq) + 2e^-, \\quad E^\\circ_{\\text{anode}} = -0.76\\text{ V}$\n   - Cathode (reduction): $\\text{Cu}^{2+}(aq) + 2e^- \\to \\text{Cu}(s), \\quad E^\\circ_{\\text{cathode}} = +0.34\\text{ V}$.",
      "2. Standard cell potential: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = +0.34 - (-0.76) = +1.10\\text{ V}$.",
      "3. Number of electrons transferred: $n = 2$.",
      "4. Free energy change: $\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}} = -2(96485\\text{ C/mol})(1.10\\text{ V}) = -212,267\\text{ J/mol} \\approx -212.3\\text{ kJ/mol}$.",
      "5. Because $E^\\circ_{\\text{cell}} > 0$ and $\\Delta G^\\circ < 0$, the galvanic cell reaction is strongly spontaneous."
    ],
    "stepByStepSolutionAr": [
      "١. تفاعلا نصفي الخلية:\n   - المصعد (أكسدة): $\\text{Zn} \\to \\text{Zn}^{2+} + 2e^-$.\n   - المهبط (اختزال): $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$.",
      "٢. القوة الدافعة الكهربية القياسية: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = 0.34 - (-0.76) = +1.10\\text{ V}$.",
      "٣. عدد الإلكترونات المنقولة: $n = 2$.",
      "٤. حساب طاقة جيبس الحرة: $\\Delta G^\\circ = -n F E^\\circ_{\\text{cell}} = -2 \\times 96485 \\times 1.10 = -212.3\\text{ kJ/mol}$.",
      "٥. بما أن $E^\\circ_{\\text{cell}} > 0$ و $\\Delta G^\\circ < 0$، فالتفاعل تلقائي ويولد تياراً كهربياً مستمراً."
    ],
    "teacherTipEn": "A positive standard cell potential E_cell > 0 always corresponds directly to a negative Delta G < 0, signifying spontaneous galvanic discharge.",
    "teacherTipAr": "القوة الدافعة الكهربية الموجبة للخلية E > 0 تناظر دائماً قيمة سالبة لطاقة جيبس الحرة Delta G < 0 وتدل على تلقائية الخلية الجلفانية."
  },
  {
    "id": "egbac_chem_ch4_se_03",
    "titleEn": "Equilibrium Constant K from Standard Cell Potential",
    "titleAr": "حساب ثابت الاتزان الكيميائي K من الجهد القياسي للخلية",
    "difficulty": "medium",
    "questionEn": "Using the standard potential of the Daniell cell, $E^\\circ_{\\text{cell}} = +1.10\\text{ V}$ at $T = 298\\text{ K}$ with $n = 2$ electrons transferred, calculate the thermodynamic equilibrium constant $K$ for the displacement reaction $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$. (Use $\\frac{2.303 R T}{F} = 0.0592\\text{ V}$).",
    "questionAr": "باستخدام الجهد القياسي لخلية دانيال $E^\\circ_{\\text{cell}} = +1.10\\text{ V}$ عند $298\\text{ K}$ مع انتقال $n = 2$ من الإلكترونات، احسب ثابت الاتزان الديناميكي الحراري $K$ لتفاعل الإزاحة $\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s)$. (استخدم $\\frac{2.303 R T}{F} = 0.0592\\text{ V}$).",
    "optionsEn": [
      "$K = 3.72 \\times 10^{18}$",
      "$K = 1.10 \\times 10^2$",
      "$K = 1.54 \\times 10^{37}$",
      "$K = 5.85 \\times 10^{14}$"
    ],
    "optionsAr": [
      "$K = 3.72 \\times 10^{18}$",
      "$K = 1.10 \\times 10^2$",
      "$K = 1.54 \\times 10^{37}$",
      "$K = 5.85 \\times 10^{14}$"
    ],
    "correctAnswer": "$K = 1.54 \\times 10^{37}$",
    "correctIndex": 2,
    "hintEn": "Formula at 298 K: E_cell^circ = (0.0592 / n) * log(K) => log(K) = n * E_cell^circ / 0.0592 = 2 * 1.10 / 0.0592 = 37.162.",
    "hintAr": "العلاقة عند 298 كلفن: E_cell = (0.0592 / n) * log(K) => log(K) = 2 * 1.10 / 0.0592 = 37.162. إذن K = 10^(37.162).",
    "stepByStepSolutionEn": [
      "1. Relation between $E^\\circ_{\\text{cell}}$ and $K$ at $298\\text{ K}$: $E^\\circ_{\\text{cell}} = \\frac{0.0592\\text{ V}}{n} \\log K$.",
      "2. Rearrange for $\\log K$: $\\log K = \\frac{n \\cdot E^\\circ_{\\text{cell}}}{0.0592} = \\frac{2 \\times 1.10}{0.0592} = \\frac{2.20}{0.0592} \\approx 37.1622$.",
      "3. Calculate $K$: $K = 10^{37.1622} = 10^{0.1622} \\times 10^{37} \\approx 1.45 - 1.54 \\times 10^{37}$.",
      "4. This colossal equilibrium constant proves that zinc displaces copper quantitatively to $100\\%$ completion."
    ],
    "stepByStepSolutionAr": [
      "١. العلاقة الكهروكيميائية لثابت الاتزان: $E^\\circ_{\\text{cell}} = \\frac{0.0592}{n} \\log K$.",
      "٢. عزل $\\log K$: $\\log K = \\frac{2 \\times 1.10}{0.0592} = 37.162$.",
      "٣. رفع الأساس 10: $K = 10^{37.162} = 1.54 \\times 10^{37}$.",
      "٤. تشير هذه القيمة الفلكية لثابت الاتزان إلى أن التفاعل تام كمياً ولا يمكن عكسه في الظروف القياسية."
    ],
    "teacherTipEn": "Even a modest cell potential (around 1 V) translates into astronomical equilibrium constants due to the logarithmic scale.",
    "teacherTipAr": "حتى الجهد الكهربي المتواضع (في حدود 1 فولت) يناظر ثوابت اتزان فلكية وضخمة بسبب المقياس اللوغاريتمي."
  },
  {
    "id": "egbac_chem_ch4_se_04",
    "titleEn": "Nernst Equation: Non-Standard Cell Potential Under Concentration Shifts",
    "titleAr": "معادلة نيرنست: حساب جهد الخلية في الظروف غير القياسية",
    "difficulty": "medium",
    "questionEn": "Consider a Daniell cell operating at $298\\text{ K}$:\n$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s), \\quad E^\\circ_{\\text{cell}} = 1.10\\text{ V}$.\nIf $[\\text{Zn}^{2+}] = 2.00\\text{ M}$ and $[\\text{Cu}^{2+}] = 0.010\\text{ M}$, calculate the non-standard cell potential $E_{\\text{cell}}$ using the Nernst equation.",
    "questionAr": "لخلية دانيال عند $298\\text{ K}$:\n$\\text{Zn}(s) + \\text{Cu}^{2+}(aq) \\rightleftharpoons \\text{Zn}^{2+}(aq) + \\text{Cu}(s), \\quad E^\\circ_{\\text{cell}} = 1.10\\text{ V}$.\nإذا كان تركيز الأيونات هو $[\\text{Zn}^{2+}] = 2.00\\text{ M}$ و $[\\text{Cu}^{2+}] = 0.010\\text{ M}$، فما جهد الخلية غير القياسي $E_{\\text{cell}}$ بمعادلة نيرنست؟",
    "optionsEn": [
      "$E_{\\text{cell}} = 1.168\\text{ V}$",
      "$E_{\\text{cell}} = 1.100\\text{ V}$",
      "$E_{\\text{cell}} = 0.865\\text{ V}$",
      "$E_{\\text{cell}} = 1.032\\text{ V} \\approx 1.03\\text{ V}$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = 1.168\\text{ V}$",
      "$E_{\\text{cell}} = 1.100\\text{ V}$",
      "$E_{\\text{cell}} = 0.865\\text{ V}$",
      "$E_{\\text{cell}} = 1.032\\text{ V} \\approx 1.03\\text{ V}$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = 1.032\\text{ V} \\approx 1.03\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "Nernst: E = E_cell^circ - (0.0592 / n) * log(Q). Q = [Zn2+] / [Cu2+] = 2.00 / 0.010 = 200. log(200) = 2.301. Correction = (0.0592 / 2) * 2.301 = 0.0681 V.",
    "hintAr": "معادلة نيرنست: E = E^circ - (0.0592 / 2) * log(Q). حاصل التفاعل Q = 2.00 / 0.010 = 200. احسب: 1.10 - 0.0296 * 2.301 = 1.032 V.",
    "stepByStepSolutionEn": [
      "1. Reaction quotient expression: $Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$ (pure solid metals have activity $1$).",
      "2. Evaluate $Q$: $Q = \\frac{2.00\\text{ M}}{0.010\\text{ M}} = 200$.",
      "3. Apply Nernst equation at $298\\text{ K}$ with $n = 2$:\n   $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0592\\text{ V}}{n} \\log Q = 1.10 - \\frac{0.0592}{2} \\log(200)$.",
      "4. Calculate: $\\log(200) \\approx 2.3010$.\n   $\\frac{0.0592}{2} \\times 2.3010 = 0.0296 \\times 2.3010 \\approx 0.0681\\text{ V}$.",
      "5. Cell potential: $E_{\\text{cell}} = 1.10 - 0.0681 = 1.0319\\text{ V} \\approx 1.03\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. حاصل التفاعل الكهروكيميائي: $Q = \\frac{[\\text{Zn}^{2+}]}{[\\text{Cu}^{2+}]}$.",
      "٢. حساب $Q$: $Q = 2.00 / 0.010 = 200$.",
      "٣. تطبيق معادلة نيرنست: $E = E^\\circ - \\frac{0.0592}{2} \\log(200)$.",
      "٤. قيمة التصحيح: $0.0296 \\times 2.301 = 0.0681\\text{ V}$.",
      "٥. جهد الخلية غير القياسي: $E = 1.10 - 0.0681 = 1.032\\text{ V}$."
    ],
    "teacherTipEn": "As a battery discharges, products accumulate ([Zn2+] rises) and reactants are depleted ([Cu2+] falls), causing Q to rise and cell potential E to decline steadily.",
    "teacherTipAr": "مع استمرار تفريغ البطارية، تتراكم النواتج وتستهلك المتفاعلات، فتزداد قيمة Q ويهبط جهد الخلية تدريجياً حتى ينعدم عند نفاد الشحن."
  },
  {
    "id": "egbac_chem_ch4_se_05",
    "titleEn": "Concentration Cell Potential Driven by Concentration Gradient",
    "titleAr": "خلية التركيز وفرق الجهد الناتج عن اختلاف تراكيز المحاليل",
    "difficulty": "medium",
    "questionEn": "A silver concentration cell consists of two identical silver electrodes dipped into two separate $\\text{AgNO}_3$ solutions connected by a salt bridge at $298\\text{ K}$:\n- Anode compartment: $[\\text{Ag}^+] = 0.0010\\text{ M}$\n- Cathode compartment: $[\\text{Ag}^+] = 1.00\\text{ M}$\nWhat is the standard potential $E^\\circ_{\\text{cell}}$ of this concentration cell, and what is its non-standard cell potential $E_{\\text{cell}}$?",
    "questionAr": "تتكون خلية تركيز للفضة من قطبين متماثلين من الفضة مغمورين في محلولين لنترات الفضة متصلين بقنطرة ملحية عند $298\\text{ K}$:\n- نصف خلية المصعد (الآنود): $[\\text{Ag}^+] = 0.0010\\text{ M}$\n- نصف خلية المهبط (الكاثود): $[\\text{Ag}^+] = 1.00\\text{ M}$\nما هو الجهد القياسي $E^\\circ_{\\text{cell}}$ لخلية التركيز هذه، وما هو جهدها الفعلي $E_{\\text{cell}}$؟",
    "optionsEn": [
      "$E^\\circ_{\\text{cell}} = 0.000\\text{ V}, \\quad E_{\\text{cell}} = +0.178\\text{ V}$",
      "$E^\\circ_{\\text{cell}} = +0.800\\text{ V}, \\quad E_{\\text{cell}} = +0.800\\text{ V}$",
      "$E^\\circ_{\\text{cell}} = 0.000\\text{ V}, \\quad E_{\\text{cell}} = -0.178\\text{ V}$",
      "$E^\\circ_{\\text{cell}} = +0.059\\text{ V}, \\quad E_{\\text{cell}} = +0.059\\text{ V}$"
    ],
    "optionsAr": [
      "$E^\\circ_{\\text{cell}} = 0.000\\text{ V}, \\quad E_{\\text{cell}} = +0.178\\text{ V}$",
      "$E^\\circ_{\\text{cell}} = +0.800\\text{ V}, \\quad E_{\\text{cell}} = +0.800\\text{ V}$",
      "$E^\\circ_{\\text{cell}} = 0.000\\text{ V}, \\quad E_{\\text{cell}} = -0.178\\text{ V}$",
      "$E^\\circ_{\\text{cell}} = +0.059\\text{ V}, \\quad E_{\\text{cell}} = +0.059\\text{ V}$"
    ],
    "correctAnswer": "$E^\\circ_{\\text{cell}} = 0.000\\text{ V}, \\quad E_{\\text{cell}} = +0.178\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Because electrodes are identical, E^circ = 0.00 V. Overall: Ag+(dilute) <- Ag+(conc). E = - (0.0592 / 1) * log([Ag+]_anode / [Ag+]_cathode).",
    "hintAr": "لتماثل القطبين: E^circ = 0.00 V. معادلة نيرنست لخلية التركيز: E = -0.0592 * log(0.0010 / 1.00) = -0.0592 * (-3) = +0.178 V.",
    "stepByStepSolutionEn": [
      "1. Because both half-cells utilize the same metal and ion ($\\text{Ag}/\\text{Ag}^+$), standard reduction potentials are equal: $E^\\circ_{\\text{cell}} = E^\\circ(\\text{Ag}^+/\\text{Ag}) - E^\\circ(\\text{Ag}^+/\\text{Ag}) = 0.000\\text{ V}$.",
      "2. Oxidation occurs at the lower concentration compartment (anode, to produce $\\text{Ag}^+$), while reduction occurs at the higher concentration compartment (cathode, to consume $\\text{Ag}^+$):\n   $\\text{Ag}^+(1.00\\text{ M}) \\to \\text{Ag}^+(0.0010\\text{ M})$.",
      "3. Number of electrons transferred: $n = 1$.",
      "4. Reaction quotient: $Q = \\frac{[\\text{Ag}^+]_{\\text{anode}}}{[\\text{Ag}^+]_{\\text{cathode}}} = \\frac{0.0010}{1.00} = 10^{-3}$.",
      "5. Apply Nernst equation: $E_{\\text{cell}} = 0.000 - \\frac{0.0592\\text{ V}}{1} \\log(10^{-3}) = -0.0592 (-3) = +0.1776\\text{ V} \\approx +0.178\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. بما أن القطبين متطابقان، فإن فرق الجهد القياسي ينعدم: $E^\\circ_{\\text{cell}} = 0.00\\text{ V}$.",
      "٢. تحدث الأكسدة في المحلول المخفف (المصعد لزيادة تركيز الأيونات)، ويحدث الاختزال في المحلول المركز (المهبط): $\\text{Ag}^+(1.00\\text{ M}) \\to \\text{Ag}^+(10^{-3}\\text{ M})$.",
      "٣. حاصل التفاعل: $Q = 10^{-3} / 1 = 10^{-3}$، وعدد الإلكترونات $n = 1$.",
      "٤. معادلة نيرنست: $E = 0 - 0.0592 \\times \\log(10^{-3}) = -0.0592 \\times (-3) = +0.178\\text{ V}$."
    ],
    "teacherTipEn": "Concentration cells operate entirely on the entropy of mixing: spontaneous current flows until both half-cell concentrations equalize (at which point E = 0).",
    "teacherTipAr": "تعمل خلايا التركيز بالكامل على طاقة الخلط الإنتروبية: يتدفق التيار تلقائياً حتى يتساوى تركيزا المحلولين وعندها ينعدم الجهد (E = 0)."
  },
  {
    "id": "egbac_chem_ch4_se_06",
    "titleEn": "Faraday's Law: Quantitative Mass of Metal Deposited by Electrolysis",
    "titleAr": "قانون فاراداي: حساب كتلة الفلز المترسبة بالتحليل الكهربي",
    "difficulty": "easy",
    "questionEn": "A steady electric current of $I = 5.00\\text{ A}$ is passed through an aqueous solution of copper(II) sulfate ($\\text{CuSO}_4$) for a duration of $t = 96.5\\text{ minutes}$. Calculate the mass of pure copper metal deposited onto the cathode. (Given $M(\\text{Cu}) = 63.55\\text{ g/mol}$ and Faraday constant $F = 96,485\\text{ C/mol}$).",
    "questionAr": "مُرِّر تيار كهربي شدته $I = 5.00\\text{ A}$ في محلول مائي من كبريتات النحاس $\\text{CuSO}_4$ لمدة $t = 96.5\\text{ دقيقة}$. احسب كتلة فلز النحاس النقي المترسبة على المهبط (الكاثود). (الكتلة المولية للنحاس $63.55\\text{ جم/مول}$ وثابت فاراداي $F = 96,485\\text{ كولوم/مول}$).",
    "optionsEn": [
      "$m_{\\text{Cu}} = 19.06\\text{ g}$",
      "$m_{\\text{Cu}} = 9.53\\text{ g}$",
      "$m_{\\text{Cu}} = 4.77\\text{ g}$",
      "$m_{\\text{Cu}} = 30.65\\text{ g}$"
    ],
    "optionsAr": [
      "$m_{\\text{Cu}} = 19.06\\text{ جم}$",
      "$m_{\\text{Cu}} = 9.53\\text{ جم}$",
      "$m_{\\text{Cu}} = 4.77\\text{ جم}$",
      "$m_{\\text{Cu}} = 30.65\\text{ جم}$"
    ],
    "correctAnswer": "$m_{\\text{Cu}} = 9.53\\text{ g}$",
    "correctIndex": 1,
    "hintEn": "Convert time to seconds: t = 96.5 * 60 = 5790 s. Q = I * t = 5 * 5790 = 28950 C. moles e- = 28950 / 96485 = 0.300 mol. Cu2+ + 2e- -> Cu, so moles Cu = 0.300 / 2 = 0.150 mol. m = 0.150 * 63.55.",
    "hintAr": "حول الزمن إلى ثوانٍ: 96.5 * 60 = 5790 s. كمية الشحنة Q = 5 * 5790 = 28950 C. مولات الإلكترونات = 28950 / 96485 = 0.300 mol. كتلة النحاس = (0.300 / 2) * 63.55 = 9.53 جم.",
    "stepByStepSolutionEn": [
      "1. Time in seconds: $t = 96.5\\text{ min} \\times 60\\text{ s/min} = 5790\\text{ s}$.",
      "2. Total charge passed: $Q = I \\times t = (5.00\\text{ A})(5790\\text{ s}) = 28,950\\text{ C}$.",
      "3. Moles of electrons transferred: $n_e = \\frac{Q}{F} = \\frac{28950\\text{ C}}{96485\\text{ C/mol}} \\approx 0.3000\\text{ mol } e^-$.",
      "4. Cathodic reduction: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}(s)$ ($z = 2$ electrons per copper atom).",
      "5. Moles of copper deposited: $n_{\\text{Cu}} = \\frac{n_e}{2} = \\frac{0.3000}{2} = 0.1500\\text{ mol}$.",
      "6. Mass deposited: $m = n_{\\text{Cu}} \\times M = (0.1500\\text{ mol})(63.55\\text{ g/mol}) = 9.5325\\text{ g} \\approx 9.53\\text{ g}$."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الزمن إلى ثوانٍ: $t = 96.5 \\times 60 = 5790\\text{ ثانية}$.",
      "٢. كمية الكهرباء بالكولوم: $Q = I \\times t = 5.00 \\times 5790 = 28950\\text{ C}$.",
      "٣. عدد مولات الإلكترونات: $n_e = \\frac{28950}{96485} = 0.300\\text{ mol } e^-$.",
      "٤. تفاعل الاختزال المهبطي: $\\text{Cu}^{2+} + 2e^- \\to \\text{Cu}$، ويلزم 2 مول إلكترونات لكل مول نحاس.",
      "٥. مولات النحاس المترسب: $n = 0.300 / 2 = 0.150\\text{ mol}$.",
      "٦. الكتلة المترسبة: $m = 0.150 \\times 63.55 = 9.53\\text{ جم}$."
    ],
    "teacherTipEn": "Do not forget to convert time from minutes to SI seconds, and divide by the valence z = 2 for divalent cations.",
    "teacherTipAr": "تذكر دائماً تحويل الزمن إلى ثوانٍ والقسمة على عدد تأكسد الكاتيون z = 2 للنحاس الثنائي."
  },
  {
    "id": "egbac_chem_ch4_se_07",
    "titleEn": "Electrolysis of Aqueous Sodium Chloride (Chlor-Alkali Process)",
    "titleAr": "التحليل الكهربي لمحلول كلوريد الصوديوم (صناعة الكلور والقلوي)",
    "difficulty": "medium",
    "questionEn": "In the industrial electrolysis of concentrated aqueous brine ($\\text{NaCl}(aq)$), what chemical substances are produced at: (1) the anode, (2) the cathode, and (3) in the remaining solution?",
    "questionAr": "في التحليل الكهربي الصناعي لمحلول ملح الطعام المركز (المحلول الملحي $\\text{NaCl}(aq)$)، ما هي المواد الناتجة عند: (١) المصعد (الآنود)، (٢) المهبط (الكاثود)، و (٣) المتبقية في المحلول؟",
    "optionsEn": [
      "Anode: Oxygen gas ($\\text{O}_2$); Cathode: Sodium metal ($\\text{Na}$); Solution: Hydrochloric acid.",
      "Anode: Chlorine gas ($\\text{Cl}_2$); Cathode: Sodium metal ($\\text{Na}$); Solution: Pure water.",
      "Anode: Chlorine gas ($\\text{Cl}_2$); Cathode: Hydrogen gas ($\\text{H}_2$); Solution: Sodium hydroxide ($\\text{NaOH}$).",
      "Anode: Hydrogen gas ($\\text{H}_2$); Cathode: Chlorine gas ($\\text{Cl}_2$); Solution: Sodium chlorate."
    ],
    "optionsAr": [
      "عند المصعد: غاز الأكسجين ($\\text{O}_2$)؛ عند المهبط: فلز الصوديوم ($\\text{Na}$)؛ وفي المحلول: حمض الهيدروكلوريك.",
      "عند المصعد: غاز الكلور ($\\text{Cl}_2$)؛ عند المهبط: فلز الصوديوم ($\\text{Na}$)؛ وفي المحلول: ماء نقي.",
      "عند المصعد: غاز الكلور ($\\text{Cl}_2$)؛ عند المهبط: غاز الهيدروجين ($\\text{H}_2$)؛ وفي المحلول: هيدروكسيد الصوديوم ($\\text{NaOH}$).",
      "عند المصعد: غاز الهيدروجين ($\\text{H}_2$)؛ عند المهبط: غاز الكلور ($\\text{Cl}_2$)؛ وفي المحلول: كلورات الصوديوم."
    ],
    "correctAnswer": "Anode: Chlorine gas ($\\text{Cl}_2$); Cathode: Hydrogen gas ($\\text{H}_2$); Solution: Sodium hydroxide ($\\text{NaOH}$).",
    "correctIndex": 2,
    "hintEn": "Water has higher reduction potential than Na+ (-0.83 V vs -2.71 V), so H2 is produced at cathode. Cl- is oxidized at anode due to overpotential. Remaining ions are Na+ and OH-.",
    "hintAr": "اختزال الماء أسهل بكثير من اختزال Na+، فيتصاعد غاز H2 عند الكاثود. ويتأكسد الكلوريد عند الآنود بفعل الجهد الفائق، ويتبقى NaOH في المحلول.",
    "stepByStepSolutionEn": [
      "1. At the cathode (reduction): Two species can potentially reduce:\n   - $\\text{Na}^+ + e^- \\to \\text{Na}(s), \\quad E^\\circ = -2.71\\text{ V}$\n   - $2\\text{H}_2\\text{O}(l) + 2e^- \\to \\text{H}_2(g) + 2\\text{OH}^-(aq), \\quad E = -0.41\\text{ V}$ (at pH 7).\n   Because water reduction has a far more positive potential, water is reduced, producing $\\text{H}_2(g)$ gas and generating $\\text{OH}^-$ ions.",
      "2. At the anode (oxidation): In concentrated brine, oxidation of $\\text{Cl}^-$ ($2\\text{Cl}^- \\to \\text{Cl}_2 + 2e^-$) occurs preferentially over water oxidation to $\\text{O}_2$ due to the high kinetic overpotential of oxygen on carbon/titanium electrodes.",
      "3. Overall reaction: $2\\text{NaCl}(aq) + 2\\text{H}_2\\text{O}(l) \\xrightarrow{\\text{electrolysis}} \\text{Cl}_2(g) + \\text{H}_2(g) + 2\\text{NaOH}(aq)$."
    ],
    "stepByStepSolutionAr": [
      "١. عند المهبط (اختزال): جهد اختزال الماء ($-0.41\\text{ V}$) أعلى بكثير من جهد اختزال أيون الصوديوم ($-2.71\\text{ V}$)، فيختزل الماء ويتصاعد غاز الهيدروجين $\\text{H}_2$ وتتولد أيونات الهيدروكسيد $\\text{OH}^-$.",
      "٢. عند المصعد (أكسدة): يتأكسد أيون الكلوريد ويتصاعد غاز الكلور $\\text{Cl}_2$ مفضلاً على أكسدة الماء نظراً لظاهرة الجهد الفائق لغاز الأكسجين.",
      "٣. المعادلة الكلية للصناعة: $2\\text{NaCl} + 2\\text{H}_2\\text{O} \\to \\text{Cl}_2 + \\text{H}_2 + 2\\text{NaOH}$."
    ],
    "teacherTipEn": "To obtain metallic sodium (rather than H2 gas), one must electrolyze MOLTEN NaCl (Downs cell) in the total absence of water.",
    "teacherTipAr": "للحصول على فلز الصوديوم يجب تحليل مصهور كلوريد الصوديوم الجاف (خلية داونز) في غياب تام لجزيئات الماء."
  },
  {
    "id": "egbac_chem_ch4_se_08",
    "titleEn": "Cathodic Protection and Sacrificial Anodes in Pipeline Corrosion",
    "titleAr": "الحماية المهبطية والقطب المضحي في حماية الأنابيب الفولاذية من التآكل",
    "difficulty": "easy",
    "questionEn": "Underground iron petroleum pipelines ($\\text{Fe}, E^\\circ(\\text{Fe}^{2+}/\\text{Fe}) = -0.44\\text{ V}$) are protected against electrochemical rust corrosion by connecting them electrically to buried blocks of magnesium ($\\text{Mg}, E^\\circ(\\text{Mg}^{2+}/\\text{Mg}) = -2.37\\text{ V}$). In this sacrificial anode system, what is the role of magnesium?",
    "questionAr": "تُحمى خطوط أنابيب النفط الحديدية المدفونة تحت الأرض ($\\text{Fe}, E^\\circ = -0.44\\text{ V}$) من الصدأ الكهروكيميائي بتوصيلها كهربياً بكتل مدفونة من المغنيسيوم ($\\text{Mg}, E^\\circ = -2.37\\text{ V}$). في منظومة القطب المضحي هذه، ما الدور الذي يؤديه المغنيسيوم؟",
    "optionsEn": [
      "Magnesium coats the iron pipe with an impermeable layer of magnesium oxide.",
      "Magnesium absorbs water from the surrounding damp soil.",
      "Magnesium acts as the cathode and reduces atmospheric oxygen to harmless nitrogen.",
      "Magnesium has a much more negative reduction potential, acting as the sacrificial anode that oxidizes preferentially to supply electrons, forcing the iron pipeline to function as a protected cathode."
    ],
    "optionsAr": [
      "يطلي المغنيسيوم الأنابيب بطبقة عازلة غير منفذة من أكسيد المغنيسيوم.",
      "يمتص المغنيسيوم المياه الجوفية والرطوبة من التربة المحيطة بالأنابيب.",
      "يعمل المغنيسيوم كمهبط ويختزل أكسجين الهواء الجوي إلى غاز نيتروجين خامل.",
      "يمتلك المغنيسيوم جهد اختزال أكثر سلبية بكثير، فيسلك كقطب مضحي (مصعد) يتأكسد ويفقد الإلكترونات مفضلاً، مجبراً شبكة الحديد على العمل كمهبط محمي من التآكل."
    ],
    "correctAnswer": "Magnesium has a much more negative reduction potential, acting as the sacrificial anode that oxidizes preferentially to supply electrons, forcing the iron pipeline to function as a protected cathode.",
    "correctIndex": 3,
    "hintEn": "A metal with more negative reduction potential oxidizes more readily. Mg oxidizes (anode), donating electrons to Fe to prevent Fe -> Fe2+.",
    "hintAr": "الفلز ذو جهد الاختزال الأكثر سالبية يتأكسد بسهولة أكبر. يتأكسد المغنيسيوم أولاً ويغذي الحديد بالإلكترونات لمنع تأكسده.",
    "stepByStepSolutionEn": [
      "1. Corrosion of iron is an electrochemical oxidation: $\\text{Fe}(s) \\to \\text{Fe}^{2+}(aq) + 2e^-, \\quad E^\\circ = -0.44\\text{ V}$.",
      "2. Magnesium has a far more negative standard reduction potential: $E^\\circ(\\text{Mg}^{2+}/\\text{Mg}) = -2.37\\text{ V}$ (hence a vastly higher oxidation potential: $+2.37\\text{ V}$ vs $+0.44\\text{ V}$).",
      "3. In a galvanic couple, magnesium preferentially oxidizes: $\\text{Mg}(s) \\to \\text{Mg}^{2+}(aq) + 2e^-$, pumping electrons through the connecting cable into the iron pipe.",
      "4. Because electrons flow onto the iron structure, iron remains cathodic, suppressing any oxidation of $\\text{Fe}$. The magnesium block is sacrificed and periodically replaced."
    ],
    "stepByStepSolutionAr": [
      "١. صدأ وتآكل الحديد عملية أكسدة كهروكيميائية تفقد فيها ذرات الحديد إلكتروناتها.",
      "٢. جهد تأكسد المغنيسيوم ($+2.37\\text{ V}$) أكبر بكثير من جهد تأكسد الحديد ($+0.44\\text{ V}$).",
      "٣. عند توصيلهما، يسبق المغنيسيوم الحديد في الأكسدة ويفقد إلكتروناته مفضلاً (قطب مضحي)، مضخاً الإلكترونات إلى الحديد لمنعه من التحول إلى أيونات.",
      "٤. يتحول خط الأنابيب إلى مهبط (كاثود) محمي تماماً من التآكل، ويتآكل المغنيسيوم ويتم استبداله دورياً."
    ],
    "teacherTipEn": "Zinc (galvanizing) and magnesium are the two classic sacrificial anodes used worldwide to protect steel ships, pipelines, and underground storage tanks.",
    "teacherTipAr": "يُعد الخارصين (في الجلفنة) والمغنيسيوم القطبين المضحيين الأساسيين عالمياً لحماية هياكل السفن وأنابيب البترول."
  },
  {
    "id": "egbac_chem_ch4_se_09",
    "titleEn": "Absolute Third Law Entropies and Standard Reaction Entropy Calculation",
    "titleAr": "الإنتروبيا المطلقة والقانون الثالث وحساب التغير في إنتروبيا التفاعل",
    "difficulty": "medium",
    "questionEn": "For the water-gas shift reaction, $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\to \\text{CO}_2(g) + \\text{H}_2(g)$, standard absolute molar entropies at $298\\text{ K}$ are:\n$S^\\circ(\\text{CO}) = 197.6\\text{ J/mol}\\cdot\\text{K}, \\quad S^\\circ(\\text{H}_2\\text{O}(g)) = 188.8\\text{ J/mol}\\cdot\\text{K}$\n$S^\\circ(\\text{CO}_2) = 213.7\\text{ J/mol}\\cdot\\text{K}, \\quad S^\\circ(\\text{H}_2) = 130.7\\text{ J/mol}\\cdot\\text{K}$.\nCalculate the standard entropy change of the reaction $\\Delta S^\\circ_{\\text{rxn}}$ at $298\\text{ K}$.",
    "questionAr": "لتفاعل غاز الماء: $\\text{CO}(g) + \\text{H}_2\\text{O}(g) \\to \\text{CO}_2(g) + \\text{H}_2(g)$، تبلغ قيم الإنتروبيا المطلقة القياسية عند $298\\text{ K}$:\n$S^\\circ(\\text{CO}) = 197.6, \\quad S^\\circ(\\text{H}_2\\text{O}(g)) = 188.8$\n$S^\\circ(\\text{CO}_2) = 213.7, \\quad S^\\circ(\\text{H}_2) = 130.7$ بوحدة $\\text{J/mol}\\cdot\\text{K}$.\nاحسب التغير في الإنتروبيا القياسية لهذا التفاعل $\\Delta S^\\circ_{\\text{rxn}}$ عند $298\\text{ K}$.",
    "optionsEn": [
      "$\\Delta S^\\circ_{\\text{rxn}} = -42.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$",
      "$\\Delta S^\\circ_{\\text{rxn}} = +42.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$",
      "$\\Delta S^\\circ_{\\text{rxn}} = -344.4\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$",
      "$\\Delta S^\\circ_{\\text{rxn}} = 0.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$"
    ],
    "optionsAr": [
      "$\\Delta S^\\circ_{\\text{rxn}} = -42.0\\text{ جول}\\cdot\\text{مول}^{-1}\\cdot\\text{كلفن}^{-1}$",
      "$\\Delta S^\\circ_{\\text{rxn}} = +42.0\\text{ جول}\\cdot\\text{مول}^{-1}\\cdot\\text{كلفن}^{-1}$",
      "$\\Delta S^\\circ_{\\text{rxn}} = -344.4\\text{ جول}\\cdot\\text{مول}^{-1}\\cdot\\text{كلفن}^{-1}$",
      "$\\Delta S^\\circ_{\\text{rxn}} = 0.0\\text{ جول}\\cdot\\text{مول}^{-1}\\cdot\\text{كلفن}^{-1}$"
    ],
    "correctAnswer": "$\\Delta S^\\circ_{\\text{rxn}} = -42.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$",
    "correctIndex": 0,
    "hintEn": "Delta S = Sum(S_products) - Sum(S_reactants) = (213.7 + 130.7) - (197.6 + 188.8) = 344.4 - 386.4 = -42.0 J/(mol*K).",
    "hintAr": "Delta S = مجموع إنتروبيا النواتج - مجموع إنتروبيا المتفاعلات = (213.7 + 130.7) - (197.6 + 188.8) = 344.4 - 386.4 = -42.0.",
    "stepByStepSolutionEn": [
      "1. Third Law entropy relation: $\\Delta S^\\circ_{\\text{rxn}} = \\sum n S^\\circ(\\text{products}) - \\sum m S^\\circ(\\text{reactants})$.",
      "2. Sum for products: $S^\\circ(\\text{CO}_2) + S^\\circ(\\text{H}_2) = 213.7 + 130.7 = 344.4\\text{ J/mol}\\cdot\\text{K}$.",
      "3. Sum for reactants: $S^\\circ(\\text{CO}) + S^\\circ(\\text{H}_2\\text{O}) = 197.6 + 188.8 = 386.4\\text{ J/mol}\\cdot\\text{K}$.",
      "4. Calculate $\\Delta S^\\circ_{\\text{rxn}} = 344.4 - 386.4 = -42.0\\text{ J}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التغير في الإنتروبيا: $\\Delta S^\\circ = \\sum S^\\circ(\\text{النواتج}) - \\sum S^\\circ(\\text{المتفاعلات})$.",
      "٢. مجموع إنتروبيا النواتج: $213.7 + 130.7 = 344.4\\text{ J/mol}\\cdot\\text{K}$.",
      "٣. مجموع إنتروبيا المتفاعلات: $197.6 + 188.8 = 386.4\\text{ J/mol}\\cdot\\text{K}$.",
      "٤. التغير الصافي في الإنتروبيا: $344.4 - 386.4 = -42.0\\text{ J/mol}\\cdot\\text{K}$."
    ],
    "teacherTipEn": "Unlike enthalpy of formation (which is defined as zero for pure elements), absolute entropy S is NEVER zero for elements at 298 K (Third Law).",
    "teacherTipAr": "بخلاف حرارة التكوين التي تساوي صفراً للعناصر الأولية، فإن الإنتروبيا المطلقة S لا تساوي صفراً لأي عنصر عند 298 كلفن وفق القانون الثالث."
  },
  {
    "id": "egbac_chem_ch4_se_10",
    "titleEn": "Thermodynamic Efficiency of Hydrogen Fuel Cells",
    "titleAr": "الكفاءة الديناميكية الحرارية لخلايا وقود الهيدروجين",
    "difficulty": "hots",
    "questionEn": "In an alkaline hydrogen-oxygen fuel cell: $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l)$, the standard enthalpy of combustion is $\\Delta H^\\circ = -571.6\\text{ kJ/mol}$, and the standard free energy change is $\\Delta G^\\circ = -474.4\\text{ kJ/mol}$. What is the theoretical thermodynamic efficiency $\\eta = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} \\times 100\\%$ of this fuel cell, and what is its standard open-circuit potential $E^\\circ_{\\text{cell}}$? ($n = 4$).",
    "questionAr": "في خلية وقود الهيدروجين والأكسجين القلوية: $2\\text{H}_2(g) + \\text{O}_2(g) \\to 2\\text{H}_2\\text{O}(l)$، يبلغ إنثالبي الاحتراق القياسي $\\Delta H^\\circ = -571.6\\text{ kJ/mol}$ وطاقة جيبس الحرة القياسية $\\Delta G^\\circ = -474.4\\text{ kJ/mol}$. ما هي الكفاءة الديناميكية الحرارية النظرية القصوى $\\eta = \\frac{\\Delta G^\\circ}{\\Delta H^\\circ} \\times 100\\%$ للخلية، وما هو جهدها القياسي $E^\\circ_{\\text{cell}}$؟ ($n = 4$).",
    "optionsEn": [
      "$\\eta = 100.0\\%, \\quad E^\\circ_{\\text{cell}} = +1.48\\text{ V}$",
      "$\\eta = 83.0\\%, \\quad E^\\circ_{\\text{cell}} = +1.23\\text{ V}$",
      "$\\eta = 40.0\\%, \\quad E^\\circ_{\\text{cell}} = +0.615\\text{ V}$",
      "$\\eta = 60.5\\%, \\quad E^\\circ_{\\text{cell}} = +2.46\\text{ V}$"
    ],
    "optionsAr": [
      "$\\eta = 100.0\\%, \\quad E^\\circ_{\\text{cell}} = +1.48\\text{ V}$",
      "$\\eta = 83.0\\%, \\quad E^\\circ_{\\text{cell}} = +1.23\\text{ V}$",
      "$\\eta = 40.0\\%, \\quad E^\\circ_{\\text{cell}} = +0.615\\text{ V}$",
      "$\\eta = 60.5\\%, \\quad E^\\circ_{\\text{cell}} = +2.46\\text{ V}$"
    ],
    "correctAnswer": "$\\eta = 83.0\\%, \\quad E^\\circ_{\\text{cell}} = +1.23\\text{ V}$",
    "correctIndex": 1,
    "hintEn": "Efficiency eta = Delta G / Delta H = 474.4 / 571.6 = 0.830 = 83.0%. Cell potential: E_cell = -Delta G / (n * F) = 474,400 / (4 * 96485) = 1.229 V.",
    "hintAr": "الكفاءة النظرية: 474.4 / 571.6 = 83.0%. الجهد القياسي: E_cell = -Delta G / (n * F) = 474400 / (4 * 96485) = 1.23 V.",
    "stepByStepSolutionEn": [
      "1. Theoretical efficiency of an electrochemical cell: $\\eta = \\frac{|\\Delta G^\\circ|}{|\\Delta H^\\circ|} = \\frac{474.4\\text{ kJ/mol}}{571.6\\text{ kJ/mol}} = 0.8299 \\approx 83.0\\%$.",
      "2. Unlike heat engines limited by the Carnot limit ($\\eta_{\\text{Carnot}} = 1 - T_C/T_H \\approx 35-40\\%$), fuel cells directly convert chemical bond energy into electricity without thermal combustion.",
      "3. Cell potential: Total electrons transferred for $2\\text{H}_2$ is $n = 4$.\n   $E^\\circ_{\\text{cell}} = -\\frac{\\Delta G^\\circ}{n F} = -\\frac{-474,400\\text{ J/mol}}{4 \\times 96485\\text{ C/mol}} = \\frac{474400}{385940} \\approx 1.2292\\text{ V} \\approx 1.23\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. الكفاءة الديناميكية الحرارية للخلية الكهروكيميائية: $\\eta = \\frac{|\\Delta G^\\circ|}{|\\Delta H^\\circ|} = \\frac{474.4}{571.6} = 83.0\\%$.",
      "٢. بخلاف المحركات الحرارية المحكومة بحدود كارنو الحرارية ($35-40\\%$)، تحول خلايا الوقود الطاقة الكيميائية مباشرة إلى طاقة كهربية دون حرق وسيط.",
      "٣. حساب الجهد القياسي: عدد الإلكترونات المنقولة لمولي الهيدروجين هو $n = 4$.\n   $E^\\circ_{\\text{cell}} = \\frac{474400}{4 \\times 96485} = 1.23\\text{ V}$."
    ],
    "teacherTipEn": "Fuel cells produce non-polluting water as their only byproduct while delivering more than double the thermal efficiency of conventional combustion engines.",
    "teacherTipAr": "تنتج خلايا الوقود الماء النقي كعادم وحيد وتوفر كفاءة طاقة تفوق ضعف كفاءة محركات الاحتراق الداخلي التقليدية."
  }
];

export const egBacChemCh4Exercises: SolvedProblem[] = [
  {
    "id": "egbac_chem_ch4_ex_01",
    "titleEn": "Predicting the Sign of Entropy Change Delta S",
    "titleAr": "التنبؤ بإشارة التغير في الإنتروبيا لتفاعلات كيميائية متنوعة",
    "difficulty": "easy",
    "questionEn": "For which of the following processes is the standard entropy change strictly positive ($\\Delta S^\\circ > 0$)?",
    "questionAr": "في أي من العمليات الكيميائية والفيزيائية التالية يكون التغير في الإنتروبيا القياسية موجباً قطعاً ($\\Delta S^\\circ > 0$)؟",
    "optionsEn": [
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$",
      "$\\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{O}(s)$ (freezing)",
      "$\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\to 2\\text{SO}_3(g)$"
    ],
    "optionsAr": [
      "$\\text{N}_2(g) + 3\\text{H}_2(g) \\to 2\\text{NH}_3(g)$",
      "$\\text{H}_2\\text{O}(l) \\to \\text{H}_2\\text{O}(s)$ (التجمد)",
      "$\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$",
      "$2\\text{SO}_2(g) + \\text{O}_2(g) \\to 2\\text{SO}_3(g)$"
    ],
    "correctAnswer": "$\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$",
    "correctIndex": 2,
    "hintEn": "Production of gas from a solid increases molecular disorder dramatically: Delta n_g = +1 > 0 => Delta S > 0.",
    "hintAr": "تكوين غاز من مادة صلبة يزيد العشوائية بدرجة كبيرة: Delta n_g = +1 > 0 إذن Delta S > 0.",
    "stepByStepSolutionEn": [
      "1. Entropy measures statistical disorder and accessible microstates ($S_{\\text{gas}} \\gg S_{\\text{liquid}} > S_{\\text{solid}}$).",
      "2. In $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$, a gaseous product is generated from a crystalline solid ($\\Delta n_g = +1$), causing a massive increase in entropy ($\\Delta S^\\circ > 0$).",
      "3. In the other three processes, the number of gas moles decreases ($4 \\to 2$ in ammonia, $3 \\to 2$ in $\\text{SO}_3$) or a liquid freezes to an ordered solid crystal, all of which decrease entropy ($\\Delta S^\\circ < 0$)."
    ],
    "stepByStepSolutionAr": [
      "١. الإنتروبيا مقياس للعشوائية الميكروسكوبية: إنتروبيا الغازات تفوق بكثير إنتروبيا السوائل والمواد الصلبة.",
      "٢. في تفكك كربونات الكالسيوم: تتكون مادة غازية من مادة صلبة بلورية ($\\Delta n_g = +1$)، فتزداد العشوائية ويكون $\\Delta S > 0$.",
      "٣. في باقي التفاعلات: ينخفض عدد مولات الغازات أو يتجمد السائل ليتحول لبلورات صلبة منتظمة فتكون $\\Delta S < 0$."
    ],
    "teacherTipEn": "General rule: Whenever a reaction generates more moles of gas than it consumes (Delta n_g > 0), Delta S is almost always positive.",
    "teacherTipAr": "قاعدة عامة: كلما زاد عدد مولات الغازات في النواتج عن المتفاعلات (Delta n_g > 0)، كان التغير في الإنتروبيا موجباً."
  },
  {
    "id": "egbac_chem_ch4_ex_02",
    "titleEn": "Standard Free Energy of Formation Calculation",
    "titleAr": "حساب التغير في طاقة جيبس القياسية من طاقات التكوين الحرة",
    "difficulty": "easy",
    "questionEn": "Calculate $\\Delta G^\\circ_{\\text{rxn}}$ for the combustion of methane: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$, given standard Gibbs free energies of formation at $298\\text{ K}$:\n$\\Delta G^\\circ_f(\\text{CH}_4) = -50.8\\text{ kJ/mol}, \\quad \\Delta G^\\circ_f(\\text{CO}_2) = -394.4\\text{ kJ/mol}, \\quad \\Delta G^\\circ_f(\\text{H}_2\\text{O}(l)) = -237.1\\text{ kJ/mol}$.",
    "questionAr": "احسب $\\Delta G^\\circ_{\\text{rxn}}$ لاحتراق غاز الميثان: $\\text{CH}_4(g) + 2\\text{O}_2(g) \\to \\text{CO}_2(g) + 2\\text{H}_2\\text{O}(l)$، بمعلومية طاقات التكوين الحرة القياسية عند $298\\text{ K}$:\n$\\Delta G^\\circ_f(\\text{CH}_4) = -50.8, \\, \\Delta G^\\circ_f(\\text{CO}_2) = -394.4, \\, \\Delta G^\\circ_f(\\text{H}_2\\text{O}(l)) = -237.1\\text{ kJ/mol}$.",
    "optionsEn": [
      "$\\Delta G^\\circ_{\\text{rxn}} = -580.7\\text{ kJ/mol}$",
      "$\\Delta G^\\circ_{\\text{rxn}} = +817.8\\text{ kJ/mol}$",
      "$\\Delta G^\\circ_{\\text{rxn}} = -868.6\\text{ kJ/mol}$",
      "$\\Delta G^\\circ_{\\text{rxn}} = -817.8\\text{ kJ/mol}$"
    ],
    "optionsAr": [
      "$\\Delta G^\\circ_{\\text{rxn}} = -580.7\\text{ كيلوجول/مول}$",
      "$\\Delta G^\\circ_{\\text{rxn}} = +817.8\\text{ كيلوجول/مول}$",
      "$\\Delta G^\\circ_{\\text{rxn}} = -868.6\\text{ كيلوجول/مول}$",
      "$\\Delta G^\\circ_{\\text{rxn}} = -817.8\\text{ كيلوجول/مول}$"
    ],
    "correctAnswer": "$\\Delta G^\\circ_{\\text{rxn}} = -817.8\\text{ kJ/mol}$",
    "correctIndex": 3,
    "hintEn": "Delta G_rxn = [Delta G_f(CO2) + 2 * Delta G_f(H2O)] - [Delta G_f(CH4) + 2 * Delta G_f(O2)]. Note Delta G_f(O2) = 0 for pure element.",
    "hintAr": "طاقة جيبس للتفاعل = طاقات تكوين النواتج - المتفاعلات: [-394.4 + 2(-237.1)] - [-50.8 + 0] = -868.6 - (-50.8) = -817.8.",
    "stepByStepSolutionEn": [
      "1. Free energy relation: $\\Delta G^\\circ_{\\text{rxn}} = \\sum n \\Delta G^\\circ_f(\\text{products}) - \\sum m \\Delta G^\\circ_f(\\text{reactants})$.",
      "2. Note that for pure elements in standard state, $\\Delta G^\\circ_f(\\text{O}_2(g)) = 0$.",
      "3. Sum for products: $-394.4 + 2(-237.1) = -394.4 - 474.2 = -868.6\\text{ kJ/mol}$.",
      "4. Sum for reactants: $-50.8 + 2(0) = -50.8\\text{ kJ/mol}$.",
      "5. Calculate: $\\Delta G^\\circ_{\\text{rxn}} = -868.6 - (-50.8) = -868.6 + 50.8 = -817.8\\text{ kJ/mol}$."
    ],
    "stepByStepSolutionAr": [
      "١. قانون التغير في طاقة جيبس الحرة للتفاعل من طاقات التكوين القياسية.",
      "٢. طاقة التكوين الحرة للعنصر النقي في حالته القياسية تساوي صفراً: $\\Delta G^\\circ_f(\\text{O}_2) = 0$.",
      "٣. مجموع النواتج: $-394.4 + 2(-237.1) = -868.6\\text{ kJ/mol}$.",
      "٤. مجموع المتفاعلات: $-50.8\\text{ kJ/mol}$.",
      "٥. طاقة التفاعل: $-868.6 - (-50.8) = -817.8\\text{ كيلوجول/مول}$."
    ],
    "teacherTipEn": "Remember that standard free energy of formation Delta G_f is defined as zero for all pure elements in their most stable reference state.",
    "teacherTipAr": "تذكر دائماً أن طاقة التكوين القياسية الحرة Delta G_f تساوي صفراً لجميع العناصر الأولية في حالتها القياسية الأكثر استقراراً."
  },
  {
    "id": "egbac_chem_ch4_ex_03",
    "titleEn": "Spontaneity at High vs Low Temperature Four-Quadrant Table",
    "titleAr": "جدول التلقائية رباعي الأرباع ومحددات الإشارات",
    "difficulty": "easy",
    "questionEn": "A chemical process has an endothermic enthalpy change ($\\Delta H > 0$) and a negative entropy change ($\\Delta S < 0$). Under what temperature conditions is this process spontaneous?",
    "questionAr": "عملية كيميائية تمتلك تغيراً ماصاً في الإنثالبي ($\\Delta H > 0$) وتغيراً سالباً في الإنتروبيا ($\\Delta S < 0$). تحت أي ظروف من درجات الحرارة تكون هذه العملية تلقائية؟",
    "optionsEn": [
      "It is non-spontaneous at all temperatures (impossible spontaneously).",
      "It is spontaneous at all temperatures.",
      "It is spontaneous only at very high temperatures.",
      "It is spontaneous only at very low temperatures."
    ],
    "optionsAr": [
      "تكون غير تلقائية على الإطلاق عند جميع درجات الحرارة (مستحيلة الحدوث تلقائياً).",
      "تكون تلقائية عند جميع درجات الحرارة.",
      "تكون تلقائية فقط عند درجات الحرارة العالية جداً.",
      "تكون تلقائية فقط عند درجات الحرارة المنخفضة جداً."
    ],
    "correctAnswer": "It is non-spontaneous at all temperatures (impossible spontaneously).",
    "correctIndex": 0,
    "hintEn": "Delta G = Delta H - T * Delta S. If Delta H > 0 and Delta S < 0, then -T * Delta S > 0, so Delta G is always strictly positive (> 0).",
    "hintAr": "Delta G = Delta H - T * Delta S. إذا كان Delta H موجباً و Delta S سالباً، يكون الحد الثاني موجباً أيضاً، فتكون Delta G موجبة دائماً.",
    "stepByStepSolutionEn": [
      "1. Gibbs free energy equation: $\\Delta G = \\Delta H - T \\Delta S$.",
      "2. Here $\\Delta H > 0$ (positive term) and $\\Delta S < 0$ (meaning $-T \\Delta S > 0$, also positive at all absolute $T > 0\\text{ K}$).",
      "3. The sum of two strictly positive numbers is unconditionally positive: $\\Delta G > 0$ for all temperatures.",
      "4. Therefore, an endothermic process with decreasing entropy is never spontaneous under any thermodynamic conditions."
    ],
    "stepByStepSolutionAr": [
      "١. من معادلة طاقة جيبس: $\\Delta G = \\Delta H - T \\Delta S$.",
      "٢. بما أن $\\Delta H > 0$ (قيمة موجبة)، و $\\Delta S < 0$ (مما يجعل الحد $-T\\Delta S > 0$ موجباً أيضاً عند كل $T > 0$).",
      "٣. حاصل جمع قيمتين موجبتين هو قيمة موجبة دائماً: $\\Delta G > 0$ عند كافة درجات الحرارة دون استثناء.",
      "٤. إذن التفاعل الماص المصحوب بنقصان في العشوائية مستحيل الحدوث تلقائياً."
    ],
    "teacherTipEn": "Four-quadrant mnemonic: (-H, +S) = always spontaneous; (+H, -S) = never spontaneous; (-H, -S) = spontaneous at low T; (+H, +S) = spontaneous at high T.",
    "teacherTipAr": "ملخص الأرباع الأربعة: (-H, +S) تلقائي دائماً؛ (+H, -S) غير تلقائي أبداً؛ (-H, -S) تلقائي بالتبريد؛ (+H, +S) تلقائي بالتسخين."
  },
  {
    "id": "egbac_chem_ch4_ex_04",
    "titleEn": "Half-Cell Potentials and Cell Notation",
    "titleAr": "جهود نصفي الخلية والترميز الاصطلاحي للخلية الجلفانية",
    "difficulty": "medium",
    "questionEn": "Given the standard reduction potentials at $25^\\circ\\text{C}$:\n- $\\text{Al}^{3+} + 3e^- \\to \\text{Al}(s), \\quad E^\\circ = -1.66\\text{ V}$\n- $\\text{Fe}^{2+} + 2e^- \\to \\text{Fe}(s), \\quad E^\\circ = -0.44\\text{ V}$\nWhat is the spontaneous cell notation, the balanced overall equation, and the standard cell potential $E^\\circ_{\\text{cell}}$?",
    "questionAr": "بمعلومية جهود الاختزال القياسية عند $25^\\circ\\text{C}$:\n- $\\text{Al}^{3+} + 3e^- \\to \\text{Al}(s), \\quad E^\\circ = -1.66\\text{ V}$\n- $\\text{Fe}^{2+} + 2e^- \\to \\text{Fe}(s), \\quad E^\\circ = -0.44\\text{ V}$\nما هو الرمز الاصطلاحي للخلية التلقائية، والمعادلة الكلية الموزونة، وجهد الخلية القياسي $E^\\circ_{\\text{cell}}$؟",
    "optionsEn": [
      "$\\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s); \\quad 2\\text{Al} + 3\\text{Fe}^{2+} \\to 2\\text{Al}^{3+} + 3\\text{Fe}; \\quad E^\\circ_{\\text{cell}} = +1.22\\text{ V}$",
      "$\\text{Fe}(s)|\\text{Fe}^{2+}(aq)\\|\\text{Al}^{3+}(aq)|\\text{Al}(s); \\quad 3\\text{Fe} + 2\\text{Al}^{3+} \\to 3\\text{Fe}^{2+} + 2\\text{Al}; \\quad E^\\circ_{\\text{cell}} = -1.22\\text{ V}$",
      "$\\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s); \\quad \\text{Al} + \\text{Fe}^{2+} \\to \\text{Al}^{3+} + \\text{Fe}; \\quad E^\\circ_{\\text{cell}} = +2.10\\text{ V}$",
      "$\\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s); \\quad 2\\text{Al} + 3\\text{Fe}^{2+} \\to 2\\text{Al}^{3+} + 3\\text{Fe}; \\quad E^\\circ_{\\text{cell}} = +0.78\\text{ V}$"
    ],
    "optionsAr": [
      "$\\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s)؛ \\quad 2\\text{Al} + 3\\text{Fe}^{2+} \\to 2\\text{Al}^{3+} + 3\\text{Fe}؛ \\quad E^\\circ_{\\text{cell}} = +1.22\\text{ V}$",
      "$\\text{Fe}(s)|\\text{Fe}^{2+}(aq)\\|\\text{Al}^{3+}(aq)|\\text{Al}(s)؛ \\quad 3\\text{Fe} + 2\\text{Al}^{3+} \\to 3\\text{Fe}^{2+} + 2\\text{Al}؛ \\quad E^\\circ_{\\text{cell}} = -1.22\\text{ V}$",
      "$\\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s)؛ \\quad \\text{Al} + \\text{Fe}^{2+} \\to \\text{Al}^{3+} + \\text{Fe}؛ \\quad E^\\circ_{\\text{cell}} = +2.10\\text{ V}$",
      "$\\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s)؛ \\quad 2\\text{Al} + 3\\text{Fe}^{2+} \\to 2\\text{Al}^{3+} + 3\\text{Fe}؛ \\quad E^\\circ_{\\text{cell}} = +0.78\\text{ V}$"
    ],
    "correctAnswer": "$\\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s); \\quad 2\\text{Al} + 3\\text{Fe}^{2+} \\to 2\\text{Al}^{3+} + 3\\text{Fe}; \\quad E^\\circ_{\\text{cell}} = +1.22\\text{ V}$",
    "correctIndex": 0,
    "hintEn": "Al has more negative E_red (-1.66 V), so it oxidizes at the anode. Fe2+ reduces at the cathode (-0.44 V). E_cell = -0.44 - (-1.66) = +1.22 V.",
    "hintAr": "الألومنيوم أكثر سالبية في جهد الاختزال فيسلك كمصعد ويتأكسد. الحديد كمهبط. E_cell = -0.44 - (-1.66) = +1.22 V.",
    "stepByStepSolutionEn": [
      "1. Identify electrodes: The half-reaction with the more negative potential is oxidized (Anode: $\\text{Al} \\to \\text{Al}^{3+} + 3e^-, E^\\circ = -1.66\\text{ V}$).",
      "2. The half-reaction with the more positive potential is reduced (Cathode: $\\text{Fe}^{2+} + 2e^- \\to \\text{Fe}, E^\\circ = -0.44\\text{ V}$).",
      "3. Cell potential: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = -0.44 - (-1.66) = +1.22\\text{ V}$.",
      "4. Balance electrons: Multiply Al half-reaction by 2 and Fe half-reaction by 3 ($n = 6$ electrons):\n   $2\\text{Al}(s) + 3\\text{Fe}^{2+}(aq) \\to 2\\text{Al}^{3+}(aq) + 3\\text{Fe}(s)$.",
      "5. Cell diagram notation: $\\text{Anode}|\\text{Anode ion}\\|\\text{Cathode ion}|\\text{Cathode} = \\text{Al}(s)|\\text{Al}^{3+}(aq)\\|\\text{Fe}^{2+}(aq)|\\text{Fe}(s)$."
    ],
    "stepByStepSolutionAr": [
      "١. تحديد القطبين: القطب الأكثر سالبية في جهد الاختزال هو المصعد (الألومنيوم)، والأعلى جهداً هو المهبط (الحديد).",
      "٢. القوة الدافعة الكهربية للخلية: $E^\\circ = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = -0.44 - (-1.66) = +1.22\\text{ V}$.",
      "٣. وزن الإلكترونات: مضاعفة معادلة الألومنيوم في 2 ومعادلة الحديد في 3 لتبادل 6 إلكترونات.",
      "٤. الرمز الاصطلاحي: مصعد على اليسار ثم القنطرة الملحية ثم المهبط على اليمين: $\\text{Al}|\\text{Al}^{3+}\\|\\text{Fe}^{2+}|\\text{Fe}$."
    ],
    "teacherTipEn": "Never multiply the standard half-cell potential E^circ by stoichiometric integers: potential is an intensive thermodynamic property.",
    "teacherTipAr": "لا تضرب أبداً جهد القطب القياسي E في المعاملات الستوكيومترية؛ فالجهد خاصية حرارية مكثفة لا تتغير بتغير عدد المولات."
  },
  {
    "id": "egbac_chem_ch4_ex_05",
    "titleEn": "Lead-Acid Battery Discharge and Recharge Chemistry",
    "titleAr": "كيمياء بطارية الرصاص الحامضية: دورتا التفريغ وإعادة الشحن",
    "difficulty": "medium",
    "questionEn": "In an automotive lead-acid storage battery, what chemical reactions occur at the anode and cathode during discharge, and what happens to the density of the sulfuric acid electrolyte?",
    "questionAr": "في بطارية الرصاص الحامضية (مركم الرصاص) للسيارات، ما هي التفاعلات الكيميائية التي تحدث عند المصعد والمهبط أثناء التفريغ، وماذا يحدث لكثافة محلول حمض الكبريتيك؟",
    "optionsEn": [
      "Anode: $\\text{Pb}(s) + \\text{SO}_4^{2-} \\to \\text{PbSO}_4(s) + 2e^-$; Cathode: $\\text{PbO}_2(s) + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}$; the acid density decreases.",
      "Anode: $\\text{PbO}_2 \\to \\text{Pb}$; Cathode: $\\text{Pb} \\to \\text{PbO}_2$; acid density increases.",
      "Anode: $2\\text{H}_2\\text{O} \\to \\text{O}_2 + 4e^-$; Cathode: $2\\text{H}^+ + 2e^- \\to \\text{H}_2$; acid density remains constant.",
      "Both electrodes dissolve completely into lead nitrate; acid density drops to zero."
    ],
    "optionsAr": [
      "عند المصعد: $\\text{Pb} + \\text{SO}_4^{2-} \\to \\text{PbSO}_4 + 2e^-$؛ عند المهبط: $\\text{PbO}_2 + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4 + 2\\text{H}_2\\text{O}$؛ وتنخفض كثافة الحمض.",
      "عند المصعد: $\\text{PbO}_2 \\to \\text{Pb}$؛ عند المهبط: $\\text{Pb} \\to \\text{PbO}_2$؛ وتزداد كثافة الحمض.",
      "عند المصعد: $2\\text{H}_2\\text{O} \\to \\text{O}_2 + 4e^-$؛ عند المهبط: $2\\text{H}^+ + 2e^- \\to \\text{H}_2$؛ وكثافة الحمض ثابتة.",
      "يذوب كلا القطبين بالكامل مكونين نترات الرصاص؛ وتنعدم كثافة الحمض."
    ],
    "correctAnswer": "Anode: $\\text{Pb}(s) + \\text{SO}_4^{2-} \\to \\text{PbSO}_4(s) + 2e^-$; Cathode: $\\text{PbO}_2(s) + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}$; the acid density decreases.",
    "correctIndex": 0,
    "hintEn": "During discharge, both Pb (anode) and PbO2 (cathode) are converted to PbSO4, consuming H2SO4 and producing H2O, which decreases acid density.",
    "hintAr": "أثناء التفريغ يتحول كلا القطبين إلى كبريتات الرصاص PbSO4 ويُستهلك حمض الكبريتيك وينتج ماء، مما يخفض كثافة الإلكتروليت.",
    "stepByStepSolutionEn": [
      "1. Anode oxidation: Spongy lead oxidizes to lead(II) sulfate: $\\text{Pb}(s) + \\text{SO}_4^{2-}(aq) \\to \\text{PbSO}_4(s) + 2e^-$.",
      "2. Cathode reduction: Lead dioxide reduces to lead(II) sulfate: $\\text{PbO}_2(s) + 4\\text{H}^+(aq) + \\text{SO}_4^{2-}(aq) + 2e^- \\to \\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l)$.",
      "3. Overall discharge: $\\text{Pb}(s) + \\text{PbO}_2(s) + 2\\text{H}_2\\text{SO}_4(aq) \\to 2\\text{PbSO}_4(s) + 2\\text{H}_2\\text{O}(l), \\quad E_{\\text{cell}} \\approx 2.05\\text{ V}$ per cell (six cells in series yield $\\approx 12.6\\text{ V}$).",
      "4. Because sulfuric acid is consumed and water is produced, measuring electrolyte density using a hydrometer provides a direct gauge of the battery's state of charge."
    ],
    "stepByStepSolutionAr": [
      "١. تفاعل المصعد: يتأكسد الرصاص الإسفنجي: $\\text{Pb} + \\text{SO}_4^{2-} \\to \\text{PbSO}_4 + 2e^-$.",
      "٢. تفاعل المهبط: يختزل ثاني أكسيد الرصاص: $\\text{PbO}_2 + 4\\text{H}^+ + \\text{SO}_4^{2-} + 2e^- \\to \\text{PbSO}_4 + 2\\text{H}_2\\text{O}$.",
      "٣. التفاعل الكلي للتفريغ: $\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\to 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$.",
      "٤. استهلاك حمض الكبريتيك وتكوّن الماء يؤديان إلى انخفاض كثافة المحلول الإلكتروليتي، والتي تُقاس بالهيدروميتر لمعرفة حالة شحن البطارية."
    ],
    "teacherTipEn": "A fully charged car battery has an acid density around 1.28 g/cm^3; when discharged, it drops below 1.15 g/cm^3.",
    "teacherTipAr": "تبلغ كثافة حمض بطارية السيارة المشحونة تماماً حوالي 1.28 جم/سم مكعب، وتنخفض بالاستهلاك إلى أقل من 1.15 جم/سم مكعب."
  },
  {
    "id": "egbac_chem_ch4_ex_06",
    "titleEn": "Electrochemical Cell at Dynamic Equilibrium (Dead Battery Condition)",
    "titleAr": "الخلية الكهروكيميائية عند حالة الاتزان الديناميكي (حالة نفاد البطارية)",
    "difficulty": "easy",
    "questionEn": "When a galvanic cell discharges completely until it reaches dynamic chemical equilibrium, what are the values of its cell potential $E_{\\text{cell}}$, the reaction quotient $Q$, and the free energy change $\\Delta G$?",
    "questionAr": "عندما تفرغ الخلية الجلفانية بالكامل حتى تبلغ حالة الاتزان الكيميائي الديناميكي، كم تبلغ قيم جهد الخلية $E_{\\text{cell}}$، وحاصل التفاعل $Q$، والتغير في طاقة جيبس $\\Delta G$؟",
    "optionsEn": [
      "$E_{\\text{cell}} = 0.00\\text{ V}, \\quad Q = K, \\quad \\Delta G = 0$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}}, \\quad Q = 1, \\quad \\Delta G = \\Delta G^\\circ$",
      "$E_{\\text{cell}} = 0.00\\text{ V}, \\quad Q = 0, \\quad \\Delta G = -\\infty$",
      "$E_{\\text{cell}} = -E^\\circ_{\\text{cell}}, \\quad Q = K, \\quad \\Delta G > 0$"
    ],
    "optionsAr": [
      "$E_{\\text{cell}} = 0.00\\text{ V}, \\quad Q = K, \\quad \\Delta G = 0$",
      "$E_{\\text{cell}} = E^\\circ_{\\text{cell}}, \\quad Q = 1, \\quad \\Delta G = \\Delta G^\\circ$",
      "$E_{\\text{cell}} = 0.00\\text{ V}, \\quad Q = 0, \\quad \\Delta G = -\\infty$",
      "$E_{\\text{cell}} = -E^\\circ_{\\text{cell}}, \\quad Q = K, \\quad \\Delta G > 0$"
    ],
    "correctAnswer": "$E_{\\text{cell}} = 0.00\\text{ V}, \\quad Q = K, \\quad \\Delta G = 0$",
    "correctIndex": 0,
    "hintEn": "At dynamic equilibrium, no net work can be performed: Delta G = 0, so E_cell = 0. By definition, Q has reached K.",
    "hintAr": "عند الاتزان الديناميكي ينعدم الشغل القابل للبذل: Delta G = 0، إذن جهد الخلية ينعدم E = 0 وحاصل التفاعل Q يصل لقيمة ثابت الاتزان K.",
    "stepByStepSolutionEn": [
      "1. By the Nernst equation: $E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{R T}{n F} \\ln Q$.",
      "2. At chemical equilibrium, the system is at a state of minimum free energy: $\\Delta G = 0$.",
      "3. Because $\\Delta G = -n F E_{\\text{cell}}$, this requires $E_{\\text{cell}} = 0.00\\text{ V}$ (the cell cannot drive current, battery is 'dead').",
      "4. Setting $E_{\\text{cell}} = 0$ yields $E^\\circ_{\\text{cell}} = \\frac{R T}{n F} \\ln K$, showing that the reaction quotient has become exactly equal to the thermodynamic equilibrium constant: $Q = K$."
    ],
    "stepByStepSolutionAr": [
      "١. من معادلة نيرنست: $E = E^\\circ - \\frac{RT}{nF} \\ln Q$.",
      "٢. عند بلوغ حالة الاتزان الكيميائي، تكون طاقة جيبس الحرة عند أدنى قيمة ممكنة: $\\Delta G = 0$.",
      "٣. بما أن $\\Delta G = -nFE$، فإن انعدام طاقة جيبس يستلزم انعدام جهد الخلية: $E = 0.00\\text{ V}$ (نفاد شحنة البطارية وتوقف تدفق التيار).",
      "٤. عندما يصبح $E = 0$، يتساوى حاصل التفاعل مع ثابت الاتزان: $Q = K$."
    ],
    "teacherTipEn": "Remember that while E_cell drops to zero when a battery dies, E^circ_cell is a thermodynamic constant that never equals zero.",
    "teacherTipAr": "ميز بين جهد الخلية اللحظي E الذي يهبط للصفر عند نفاد البطارية، وبين الجهد القياسي E^circ الذي يظل ثابتاً لا يتغير."
  },
  {
    "id": "egbac_chem_ch4_ex_07",
    "titleEn": "Volume of Gas Liberated in Quantitative Water Electrolysis",
    "titleAr": "حساب حجم الغازات المتصاعدة في التحليل الكهربي للماء",
    "difficulty": "medium",
    "questionEn": "During the electrolysis of acidified water, a constant current of $I = 2.00\\text{ A}$ is passed for $t = 30.0\\text{ minutes}$. What volume of dry oxygen gas ($\\text{O}_2$) measured at standard temperature and pressure (STP: $0^\\circ\\text{C}, 1.00\\text{ atm}$, where molar gas volume $V_m = 22.4\\text{ L/mol}$) is evolved at the anode? ($F = 96,485\\text{ C/mol}$).",
    "questionAr": "أثناء التحليل الكهربي للماء المحمض، مُرر تيار كهربي ثابت شدته $I = 2.00\\text{ A}$ لمدة $t = 30.0\\text{ دقيقة}$. ما حجم غاز الأكسجين الجاف ($\\text{O}_2$) المتصاعد عند المصعد (الآنود) مقاساً في الظروف القياسية من الضغط ودرجة الحرارة (STP: الحجم المولي $22.4\\text{ L/mol}$)؟ ($F = 96,485\\text{ C/mol}$).",
    "optionsEn": [
      "$V_{\\text{O}_2} = 0.209\\text{ L} \\; (209\\text{ mL})$",
      "$V_{\\text{O}_2} = 0.418\\text{ L} \\; (418\\text{ mL})$",
      "$V_{\\text{O}_2} = 0.836\\text{ L} \\; (836\\text{ mL})$",
      "$V_{\\text{O}_2} = 0.104\\text{ L} \\; (104\\text{ mL})$"
    ],
    "optionsAr": [
      "$V_{\\text{O}_2} = 0.209\\text{ L} \\; (209\\text{ mL})$",
      "$V_{\\text{O}_2} = 0.418\\text{ L} \\; (418\\text{ mL})$",
      "$V_{\\text{O}_2} = 0.836\\text{ L} \\; (836\\text{ mL})$",
      "$V_{\\text{O}_2} = 0.104\\text{ L} \\; (104\\text{ mL})$"
    ],
    "correctAnswer": "$V_{\\text{O}_2} = 0.209\\text{ L} \\; (209\\text{ mL})$",
    "correctIndex": 0,
    "hintEn": "Anode: 2H2O -> O2 + 4H+ + 4e- (z = 4 electrons per O2 molecule). Q = 2.00 * 1800 = 3600 C. n_e = 3600 / 96485 = 0.03731 mol. Moles O2 = 0.03731 / 4. V = n * 22.4.",
    "hintAr": "تأكسد الماء عند المصعد: يتطلب تكوين مول أكسجين 4 مولات إلكترونات (z = 4). كمية الشحنة Q = 2 * 1800 = 3600 C. احسب مولات O2 = (3600 / 96485) / 4 ثم اضرب في 22.4.",
    "stepByStepSolutionEn": [
      "1. Time in seconds: $t = 30.0 \\times 60 = 1800\\text{ s}$.",
      "2. Total charge: $Q = I \\times t = (2.00\\text{ A})(1800\\text{ s}) = 3600\\text{ C}$.",
      "3. Total moles of electrons: $n_e = \\frac{3600\\text{ C}}{96485\\text{ C/mol}} \\approx 0.03731\\text{ mol } e^-$.",
      "4. Anode oxidation of water: $2\\text{H}_2\\text{O}(l) \\to \\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^-$.\n   Each mole of evolved $\\text{O}_2$ gas requires $z = 4\\text{ moles of } e^-$.",
      "5. Moles of oxygen: $n_{\\text{O}_2} = \\frac{n_e}{4} = \\frac{0.03731}{4} \\approx 9.328 \\times 10^{-3}\\text{ mol}$.",
      "6. Volume at STP: $V = n_{\\text{O}_2} \\times 22.4\\text{ L/mol} = (9.328 \\times 10^{-3})(22.4) \\approx 0.2089\\text{ L} \\approx 209\\text{ mL}$."
    ],
    "stepByStepSolutionAr": [
      "١. تحويل الزمن إلى ثوانٍ: $t = 30 \\times 60 = 1800\\text{ ثانية}$.",
      "٢. كمية الكهرباء: $Q = 2.00 \\times 1800 = 3600\\text{ كولوم}$.",
      "٣. مولات الإلكترونات: $n_e = 3600 / 96485 = 0.03731\\text{ mol}$.",
      "٤. معادلة أكسدة الماء عند المصعد: $2\\text{H}_2\\text{O} \\to \\text{O}_2 + 4\\text{H}^+ + 4e^-$. (يلزم 4 مولات إلكترونات لتكوين مول أكسجين).",
      "٥. مولات الأكسجين: $n = 0.03731 / 4 = 9.328 \\times 10^{-3}\\text{ mol}$.",
      "٦. الحجم في م.ض.د: $V = 9.328 \\times 10^{-3} \\times 22.4 = 0.209\\text{ L} = 209\\text{ mL}$."
    ],
    "teacherTipEn": "Remember that evolving oxygen requires 4 electrons per mole of O2, whereas hydrogen requires only 2 electrons per mole of H2 (producing twice the volume of H2).",
    "teacherTipAr": "تذكر أن تصاعد الأكسجين يتطلب 4 إلكترونات لكل جزيء O2، بينما يتطلب الهيدروجين إلكترونين فقط لكل جزيء H2 (حجم الهيدروجين المتصاعد ضعف حجم الأكسجين)."
  },
  {
    "id": "egbac_chem_ch4_ex_08",
    "titleEn": "Electro-Refining of Blister Copper and Anode Sludge Impurities",
    "titleAr": "التنقية الكهروكيميائية للنحاس غير النقي وشوائب وحل المصعد",
    "difficulty": "easy",
    "questionEn": "During the commercial electrolytic refining of impure blister copper ($98\\%$ pure) to produce electrolytic copper ($99.99\\%$ pure), what happens to the precious metal impurities (gold and silver) present in the anode?",
    "questionAr": "أثناء التنقية الكهروكيميائية الصناعية لخام النحاس الفقاعي غير النقي ($98\\%$) للحصول على نحاس نقي فائق الجودة ($99.99\\%$)، ماذا يحدث لشوائب الفلزات النفيسة (الذهب والفضة) الموجودة في المصعد؟",
    "optionsEn": [
      "They oxidize and deposit alongside copper onto the cathode, forming an alloy.",
      "They do not oxidize because their oxidation potentials are lower than copper; they detach and settle beneath the anode as valuable anode sludge (slime).",
      "They dissolve into the sulfuric acid electrolyte and evaporate as poisonous gas.",
      "They react violently with water to liberate explosive hydrogen gas."
    ],
    "optionsAr": [
      "تتأكسد وتترسب مع النحاس على المهبط مكونة سبيكة معدنية متجانسة.",
      "لا تتأكسد لأن جهود تأكسدها أقل بكثير من النحاس، وتسقط وتترسب أسفل المصعد على هيئة وحل المصعد النفيس.",
      "تذوب في حمض الكبريتيك وتتبخر في صورة غازات سامة.",
      "تتفاعل بشدة مع الماء مطلقاً غاز الهيدروجين القابل للانفجار."
    ],
    "correctAnswer": "They do not oxidize because their oxidation potentials are lower than copper; they detach and settle beneath the anode as valuable anode sludge (slime).",
    "correctIndex": 1,
    "hintEn": "Au and Ag have higher reduction potentials (+1.50 V, +0.80 V) than Cu (+0.34 V). At the operating voltage (0.15-0.30 V), they cannot oxidize and drop as sludge.",
    "hintAr": "الذهب والفضة جهود اختزالهما أعلى من النحاس وجهود تأكسدهما منخفضة، فلا يتأكسدان عند جهد الخلية ويسقطان أسفل الآنود كراسب ثمين.",
    "stepByStepSolutionEn": [
      "1. Standard reduction potentials: $E^\\circ(\\text{Au}^{3+}/\\text{Au}) = +1.50\\text{ V}$, $E^\\circ(\\text{Ag}^+/\\text{Ag}) = +0.80\\text{ V}$, $E^\\circ(\\text{Cu}^{2+}/\\text{Cu}) = +0.34\\text{ V}$, $E^\\circ(\\text{Zn}^{2+}/\\text{Zn}) = -0.76\\text{ V}$.",
      "2. At the controlled cell potential ($\\approx 0.2-0.3\\text{ V}$), more electropositive impurities (Zn, Fe, Ni) oxidize into solution but cannot reduce at the cathode.",
      "3. Noble metals (Ag, Au, Pt) have much lower oxidation potentials than Cu and cannot be oxidized; as the copper around them dissolves, they fall by gravity to the bottom of the cell as **anode slime**.",
      "4. Recovering gold and silver from the anode slime often pays for the entire operational cost of the copper refining plant."
    ],
    "stepByStepSolutionAr": [
      "١. جهود الاختزال: الذهب ($+1.50\\text{ V}$) والفضة ($+0.80\\text{ V}$) أعلى بكثير من النحاس ($+0.34\\text{ V}$).",
      "٢. عند ضبط جهد الخلية، تتأكسد الفلزات الأكثر نشاطاً مثل الخارصين والحديد وتظل ذائبة في المحلول دون أن تترسب.",
      "٣. الفلزات النفيسة (الذهب والفضة والبلاتين) لا تتأكسد لارتفاع جهد اختزالها وصعوبة تأكسدها، فتتساقط بالجاذبية في قاع الحوض على هيئة وحل المصعد.",
      "٤. استخلاص الذهب والفضة من وحل المصعد يغطي غالباً التكاليف التشغيلية لمصنع تنقية النحاس بالكامل."
    ],
    "teacherTipEn": "The refining of blister copper is an ingenious application where electrochemical voltage tuning achieves 99.99% purity while recovering valuable precious metals.",
    "teacherTipAr": "تعد تنقية النحاس تطبيقاً عبقرياً للتحكم الدقيق في الجهد الكهروكيميائي لتحقيق نقاوة 99.99% مع استخلاص المعادن الثمينة كمنتج ثانوي."
  },
  {
    "id": "egbac_chem_ch4_ex_09",
    "titleEn": "Nernst Cell Potential of Hydrogen Half-Cell vs pH",
    "titleAr": "اعتماد جهد نصف خلية الهيدروجين على الرقم الهيدروجيني pH",
    "difficulty": "medium",
    "questionEn": "A standard hydrogen half-cell, $\\text{H}_2(g, 1\\text{ atm}) \\to 2\\text{H}^+(aq) + 2e^-$, operates at $298\\text{ K}$. According to the Nernst equation, what is the reduction potential $E_{\\text{red}}$ of this hydrogen electrode as a direct function of the solution $\\text{pH}$?",
    "questionAr": "يعمل نصف خلية الهيدروجين القياسي: $2\\text{H}^+(aq) + 2e^- \\to \\text{H}_2(g, 1\\text{ atm})$ عند $298\\text{ K}$. وفق معادلة نيرنست، ما هي العلاقة الرياضية المباشرة التي تربط جهد اختزال قطب الهيدروجين بالرقم الهيدروجيني $\\text{pH}$ للمحلول؟",
    "optionsEn": [
      "$E_{\\text{red}} = -0.0592 \\times \\text{pH} \\text{ V}$",
      "$E_{\\text{red}} = +0.0592 \\times \\text{pH} \\text{ V}$",
      "$E_{\\text{red}} = -0.0296 \\times \\text{pH} \\text{ V}$",
      "$E_{\\text{red}} = 0.000\\text{ V} \\text{ (independent of pH)}$"
    ],
    "optionsAr": [
      "$E_{\\text{red}} = -0.0592 \\times \\text{pH} \\text{ فولت}$",
      "$E_{\\text{red}} = +0.0592 \\times \\text{pH} \\text{ فولت}$",
      "$E_{\\text{red}} = -0.0296 \\times \\text{pH} \\text{ فولت}$",
      "$E_{\\text{red}} = 0.000\\text{ V} \\text{ (لا يتأثر بالرقم الهيدروجيني)}$"
    ],
    "correctAnswer": "$E_{\\text{red}} = -0.0592 \\times \\text{pH} \\text{ V}$",
    "correctIndex": 0,
    "hintEn": "E = E^circ - (0.0592 / 2) * log(P_H2 / [H+]^2) = 0 - 0.0296 * (-2 log[H+]) = -0.0592 * (-log[H+]) = -0.0592 * pH.",
    "hintAr": "معادلة نيرنست لنصف خلية الهيدروجين: E = 0 - (0.0592 / 2) * log(1 / [H+]^2) = -0.0592 * pH.",
    "stepByStepSolutionEn": [
      "1. Reduction half-reaction: $2\\text{H}^+(aq) + 2e^- \\rightleftharpoons \\text{H}_2(g), \\quad E^\\circ = 0.000\\text{ V}$.",
      "2. Reaction quotient at $P_{\\text{H}_2} = 1\\text{ atm}$: $Q = \\frac{P_{\\text{H}_2}}{[\\text{H}^+]^2} = \\frac{1}{[\\text{H}^+]^2} = [\\text{H}^+]^{-2}$.",
      "3. Apply Nernst equation ($n = 2$):\n   $E = E^\\circ - \\frac{0.0592}{2} \\log([\\text{H}^+]^{-2}) = 0.000 - 0.0296 (-2 \\log[\\text{H}^+]) = -0.0592 (-\\log[\\text{H}^+])$.",
      "4. Since by definition $\\text{pH} = -\\log[\\text{H}^+]$, we obtain the universal linear relation: $E_{\\text{red}} = -0.0592 \\times \\text{pH}$."
    ],
    "stepByStepSolutionAr": [
      "١. تفاعل الاختزال: $2\\text{H}^+ + 2e^- \\rightleftharpoons \\text{H}_2$، والجهد القياسي $E^\\circ = 0.00\\text{ V}$.",
      "٢. حاصل التفاعل عند ضغط 1 ضغط جوي: $Q = 1 / [\\text{H}^+]^2 = [\\text{H}^+]^{-2}$.",
      "٣. تطبيق معادلة نيرنست: $E = 0 - \\frac{0.0592}{2} \\log([\\text{H}^+]^{-2}) = -0.0592 (-\\log[\\text{H}^+])$.",
      "٤. بالتعويض عن التعريف $-\\log[\\text{H}^+] = \\text{pH}$ نجد العلاقة: $E = -0.0592 \\times \\text{pH}$."
    ],
    "teacherTipEn": "This fundamental Nernst relation is the operational principle underlying electronic glass-electrode pH meters.",
    "teacherTipAr": "هذه العلاقة الخطية المباشرة هي المبدأ الفيزيائي الذي تعمل به أجهزة قياس الأس الهيدروجيني الرقمية (pH meters)."
  },
  {
    "id": "egbac_chem_ch4_ex_10",
    "titleEn": "Thermodynamic Work and Maximum Non-Expansion Useful Work",
    "titleAr": "الشغل الديناميكي الحراري وأقصى شغل كهربائي مفيد",
    "difficulty": "medium",
    "questionEn": "According to classical thermodynamics, what is the exact physical significance of the standard Gibbs free energy change $\\Delta G^\\circ$ for a chemical process occurring at constant temperature and pressure?",
    "questionAr": "وفق الديناميكا الحرارية الكلاسيكية، ما هو المعنى الفيزيائي الدقيق للتغير في طاقة جيبس الحرة $\\Delta G^\\circ$ لعملية تحدث عند ثبوت درجة الحرارة والضغط؟",
    "optionsEn": [
      "It represents the total heat energy released into the surroundings during combustion.",
      "It represents the maximum useful non-expansion work ($w_{\\text{max, useful}}$, such as electrical work) that the system can perform on the surroundings.",
      "It represents the minimum mechanical work required to expand the system volume against atmospheric pressure.",
      "It represents the kinetic energy of reactant particles colliding at the activation threshold."
    ],
    "optionsAr": [
      "تمثل الطاقة الحرارية الكلية المنطلقة إلى المحيط أثناء الاحتراق.",
      "تمثل أقصى شغل مفيد غير شغل التمدد الحجمي ($w_{\\text{max, useful}}$، مثل الشغل الكهربي) يمكن للنظام بذله على المحيط.",
      "تمثل الحد الأدنى للشغل الميكانيكي اللازم لتمدد حجم النظام ضد الضغط الجوي.",
      "تمثل طاقة حركة جسيمات المواد المتفاعلة المتصادمة عند حاجز التنشيط."
    ],
    "correctAnswer": "It represents the maximum useful non-expansion work ($w_{\\text{max, useful}}$, such as electrical work) that the system can perform on the surroundings.",
    "correctIndex": 1,
    "hintEn": "By 2nd Law thermodynamics, -Delta G = w_max, useful = n * F * E_cell (maximum non-PV work).",
    "hintAr": "وفق القانون الثاني للديناميكا: -Delta G تمثل أقصى شغل مفيد غير تمددي (كالطاقة الكهربية) w_max = n * F * E_cell.",
    "stepByStepSolutionEn": [
      "1. In thermodynamics, total work is divided into expansion work ($P\\Delta V$) and non-expansion (useful) work ($w_{\\text{useful}}$).",
      "2. At constant $T$ and $P$, combining the First and Second Laws gives: $\\Delta G \\le w_{\\text{useful}}$. For a reversible process, $-\\Delta G = w_{\\text{max, useful}}$.",
      "3. In electrochemical systems, this maximum useful work is delivered as electrical work: $w_{\\text{elec}} = q \\cdot E = n F E_{\\text{cell}} = -\\Delta G$.",
      "4. Therefore, $\\Delta G$ measures the net chemical potential energy 'free' and available to be transformed into electrical energy without thermal dissipation."
    ],
    "stepByStepSolutionAr": [
      "١. في الديناميكا الحرارية، ينقسم الشغل إلى شغل تمدد ميكانيكي ($P\\Delta V$) وشغل مفيد غير تمددي ($w_{\\text{useful}}$).",
      "٢. عند ثبوت الحرارة والضغط، يبرهن القانونان الأول والثاني على أن: $-\\Delta G = w_{\\text{max, useful}}$.",
      "٣. في الخلايا الكهروكيميائية، يظهر هذا الشغل الأقصى في صورة طاقة كهربية: $w_{\\text{elec}} = nFE = -\\Delta G$.",
      "٤. ولهذا سميت طاقة جيبس بـ 'الحرة' لأنها الجزء الطليق من الطاقة القابل للتحول إلى شغل نافع دون أن يتبدد كحرارة."
    ],
    "teacherTipEn": "Enthalpy Delta H includes energy lost inevitably as entropic heat (T Delta S); only Delta G is available for useful work.",
    "teacherTipAr": "يشمل الإنثالبي طاقة تتبدد حتماً في صورة حرارة إنتروبية ($T\\Delta S$)، وطاقة جيبس وحدها هي المتاحة لأداء الشغل المفيد."
  },
  {
    "id": "egbac_chem_ch4_ex_11",
    "titleEn": "Universal Criteria for Spontaneity: Universe Entropy",
    "titleAr": "المعيار الكوني للتلقائية وإنتروبيا الكون",
    "difficulty": "easy",
    "questionEn": "According to the Second Law of Thermodynamics, what is the necessary and sufficient condition for any real process in nature to proceed spontaneously?",
    "questionAr": "وفق القانون الثاني للديناميكا الحرارية، ما هو الشرط اللازم والكافي لحدوث أي عملية حقيقية في الطبيعة تلقائياً؟",
    "optionsEn": [
      "The total entropy change of the universe must strictly increase: $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$.",
      "The entropy of the reacting system alone must increase: $\\Delta S_{\\text{sys}} > 0$.",
      "The reaction must be strictly exothermic with $\\Delta H_{\\text{sys}} < 0$.",
      "The temperature of the universe must decrease to absolute zero Kelvin."
    ],
    "optionsAr": [
      "يجب أن يزداد التغير في إنتروبيا الكون الكلية بشكل قاطع: $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$.",
      "يجب أن تزداد إنتروبيا نظام التفاعل وحده: $\\Delta S_{\\text{sys}} > 0$.",
      "يجب أن يكون التفاعل طارداً للحرارة حتماً ($\\Delta H_{\\text{sys}} < 0$).",
      "يجب أن تنخفض درجة حرارة الكون إلى الصفر المطلق."
    ],
    "correctAnswer": "The total entropy change of the universe must strictly increase: $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} + \\Delta S_{\\text{surr}} > 0$.",
    "correctIndex": 0,
    "hintEn": "Second Law of Thermodynamics: The entropy of an isolated system (the universe) always increases for spontaneous processes.",
    "hintAr": "القانون الثاني للديناميكا: إنتروبيا النظام المعزول (الكون = النظام + الوسط المحيط) تتزايد دائماً في أي عملية تلقائية.",
    "stepByStepSolutionEn": [
      "1. The Second Law states that in any spontaneous natural process, the total entropy of the universe increases: $\\Delta S_{\\text{universe}} > 0$.",
      "2. A system can undergo a local decrease in entropy ($\\Delta S_{\\text{sys}} < 0$, such as water freezing into ice) spontaneously provided that it transfers heat to the surroundings such that $\\Delta S_{\\text{surr}} = -\\frac{\\Delta H_{\\text{sys}}}{T} > |\\Delta S_{\\text{sys}}|$.",
      "3. Because $\\Delta S_{\\text{univ}} = \\Delta S_{\\text{sys}} - \\frac{\\Delta H_{\\text{sys}}}{T} = -\\frac{\\Delta G_{\\text{sys}}}{T}$, the requirement $\\Delta S_{\\text{univ}} > 0$ is mathematically identical to $\\Delta G_{\\text{sys}} < 0$ at constant $T$ and $P$."
    ],
    "stepByStepSolutionAr": [
      "١. ينص القانون الثاني للديناميكا على أن إنتروبيا الكون الكلية تتزايد في جميع العمليات التلقائية: $\\Delta S_{\\text{univ}} > 0$.",
      "٢. يمكن للنظام أن تقل إنتروبيته محلياً (تجمد الماء لجليد) تلقائياً، بشرط أن يطلق حرارة تزيد إنتروبيا الوسط المحيط بدرجة أكبر تعوض النقص.",
      "٣. بما أن $\\Delta S_{\\text{univ}} = -\\frac{\\Delta G_{\\text{sys}}}{T}$، فإن شرط زيادة إنتروبيا الكون يماثل تماماً شرط نقصان طاقة جيبس الحرة للنظام $\\Delta G < 0$."
    ],
    "teacherTipEn": "Notice the profound connection: Delta G < 0 is simply the Second Law of Thermodynamics (Delta S_univ > 0) adapted specifically for a system at constant T and P.",
    "teacherTipAr": "لاحظ الربط البديع: معيار نقصان طاقة جيبس ما هو إلا صياغة للقانون الثاني لإنتروبيا الكون في إطار نظام ثابت الحرارة والضغط."
  },
  {
    "id": "egbac_chem_ch4_ex_12",
    "titleEn": "Fuel Cell Anode and Cathode Half-Reactions in Acidic Medium",
    "titleAr": "تفاعلا نصفي خلية وقود الهيدروجين في الوسط الحمضي",
    "difficulty": "medium",
    "questionEn": "In a Proton Exchange Membrane Fuel Cell (PEMFC) operating with an acidic polymer electrolyte at $80^\\circ\\text{C}$, what are the oxidation half-reaction at the anode and the reduction half-reaction at the cathode?",
    "questionAr": "في خلية وقود غشاء التبادل البروتوني (PEMFC) التي تعمل بإلكتروليت بوليمري حمضي عند $80^\\circ\\text{C}$، ما هما نصف تفاعل الأكسدة عند المصعد ونصف تفاعل الاختزال عند المهبط؟",
    "optionsEn": [
      "Anode: $\\text{H}_2 + 2\\text{OH}^- \\to 2\\text{H}_2\\text{O} + 2e^-$; Cathode: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$.",
      "Anode: $\\text{O}_2 + 4e^- \\to 2\\text{O}^{2-}$; Cathode: $2\\text{H}_2 \\to 4\\text{H}^+ + 4e^-$.",
      "Anode: $2\\text{H}_2(g) \\to 4\\text{H}^+(aq) + 4e^-$; Cathode: $\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\to 2\\text{H}_2\\text{O}(l)$.",
      "Anode: $\\text{CH}_4 + 2\\text{H}_2\\text{O} \\to \\text{CO}_2 + 8\\text{H}^+ + 8e^-$; Cathode: $\\text{O}_2 \\to 2\\text{O} + 4e^-$."
    ],
    "optionsAr": [
      "عند المصعد: $\\text{H}_2 + 2\\text{OH}^- \\to 2\\text{H}_2\\text{O} + 2e^-$؛ عند المهبط: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$.",
      "عند المصعد: $\\text{O}_2 + 4e^- \\to 2\\text{O}^{2-}$؛ عند المهبط: $2\\text{H}_2 \\to 4\\text{H}^+ + 4e^-$.",
      "عند المصعد: $2\\text{H}_2(g) \\to 4\\text{H}^+(aq) + 4e^-$؛ عند المهبط: $\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\to 2\\text{H}_2\\text{O}(l)$.",
      "عند المصعد: $\\text{CH}_4 + 2\\text{H}_2\\text{O} \\to \\text{CO}_2 + 8\\text{H}^+ + 8e^-$؛ عند المهبط: $\\text{O}_2 \\to 2\\text{O} + 4e^-$."
    ],
    "correctAnswer": "Anode: $2\\text{H}_2(g) \\to 4\\text{H}^+(aq) + 4e^-$; Cathode: $\\text{O}_2(g) + 4\\text{H}^+(aq) + 4e^- \\to 2\\text{H}_2\\text{O}(l)$.",
    "correctIndex": 2,
    "hintEn": "In acidic medium, H2 oxidizes to H+ and e-. H+ ions migrate through the polymer membrane to cathode, where O2 reduces with H+ and e- to H2O.",
    "hintAr": "في الوسط الحمضي يتأكسد H2 إلى بروتونات وإلكترونات، وتعبر البروتونات الغشاء نحو المهبط حيث يختزل الأكسجين إلى ماء نقي.",
    "stepByStepSolutionEn": [
      "1. Anode compartment: Molecular hydrogen fuel is delivered across a porous carbon flow field containing platinum nanoparticles: $\\text{H}_2 \\to 2\\text{H}^+ + 2e^-$ (or $2\\text{H}_2 \\to 4\\text{H}^+ + 4e^-$).",
      "2. Protons ($\\text{H}^+$) selectively permeate through the hydrated Nafion polymer electrolyte membrane toward the cathode.",
      "3. Electrons cannot cross the insulating membrane and travel through the external electrical circuit, powering the electric motor.",
      "4. Cathode compartment: Oxygen gas combines with incoming protons and returning electrons to form water: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$."
    ],
    "stepByStepSolutionAr": [
      "١. عند المصعد: يتأكسد وقود غاز الهيدروجين على جسيمات البلاتين النانوية: $2\\text{H}_2 \\to 4\\text{H}^+ + 4e^-$.",
      "٢. تعبر البروتونات الناتجة عبر غشاء التبادل البوليمري الحمضي العازل نحو المهبط.",
      "٣. تتدفق الإلكترونات عبر الدائرة الخارجية لتوليد التيار الكهربي وتشغيل المحركات.",
      "٤. عند المهبط: يتحد غاز الأكسجين مع البروتونات القادمة والإلكترونات لإنتاج الماء النقي: $\\text{O}_2 + 4\\text{H}^+ + 4e^- \\to 2\\text{H}_2\\text{O}$."
    ],
    "teacherTipEn": "Contrast acidic PEM cells (which conduct H+) with alkaline fuel cells (which conduct OH- through aqueous KOH).",
    "teacherTipAr": "قارن بين خلايا الغشاء الحمضية (التي تنقل بروتونات H+) وخلايا الوقود القلوية (التي تنقل أيونات OH- في محلول KOH)."
  },
  {
    "id": "egbac_chem_ch4_ex_13",
    "titleEn": "Nernst Potential for Gas Electrodes Under Non-Standard Pressures",
    "titleAr": "جهد نيرنست للأقطاب الغازية تحت ضغوط غير قياسية",
    "difficulty": "hots",
    "questionEn": "Consider a chlorine half-cell: $\\text{Cl}_2(g) + 2e^- \\rightleftharpoons 2\\text{Cl}^-(aq), \\, E^\\circ = +1.36\\text{ V}$ at $298\\text{ K}$. If the chlorine gas pressure is increased to $P_{\\text{Cl}_2} = 10.0\\text{ atm}$ while chloride ion concentration is kept at $[\\text{Cl}^-] = 0.010\\text{ M}$, calculate the non-standard reduction potential $E_{\\text{red}}$.",
    "questionAr": "لنصف خلية الكلور: $\\text{Cl}_2(g) + 2e^- \\rightleftharpoons 2\\text{Cl}^-(aq), \\, E^\\circ = +1.36\\text{ V}$ عند $298\\text{ K}$. إذا رُفع ضغط غاز الكلور إلى $P_{\\text{Cl}_2} = 10.0\\text{ atm}$ مع بقاء تركيز أيونات الكلوريد $[\\text{Cl}^-] = 0.010\\text{ M}$، فما جهد الاختزال غير القياسي $E_{\\text{red}}$؟",
    "optionsEn": [
      "$E_{\\text{red}} = +1.360\\text{ V}$",
      "$E_{\\text{red}} = +1.212\\text{ V}$",
      "$E_{\\text{red}} = +1.419\\text{ V}$",
      "$E_{\\text{red}} = +1.508\\text{ V} \\approx +1.51\\text{ V}$"
    ],
    "optionsAr": [
      "$E_{\\text{red}} = +1.360\\text{ V}$",
      "$E_{\\text{red}} = +1.212\\text{ V}$",
      "$E_{\\text{red}} = +1.419\\text{ V}$",
      "$E_{\\text{red}} = +1.508\\text{ V} \\approx +1.51\\text{ V}$"
    ],
    "correctAnswer": "$E_{\\text{red}} = +1.508\\text{ V} \\approx +1.51\\text{ V}$",
    "correctIndex": 3,
    "hintEn": "Q = [Cl-]^2 / P_Cl2 = (0.010)^2 / 10.0 = 10^-4 / 10 = 10^-5. E = 1.36 - (0.0592 / 2) * log(10^-5) = 1.36 - 0.0296 * (-5) = 1.36 + 0.148 = 1.508 V.",
    "hintAr": "حاصل التفاعل: Q = (0.010)^2 / 10.0 = 10^-5. احسب E = 1.36 - (0.0592 / 2) * log(10^-5) = 1.36 + 0.148 = 1.508 V.",
    "stepByStepSolutionEn": [
      "1. Reduction equation: $\\text{Cl}_2(g) + 2e^- \\rightleftharpoons 2\\text{Cl}^-(aq), \\quad n = 2, \\quad E^\\circ = +1.36\\text{ V}$.",
      "2. Reaction quotient: $Q = \\frac{[\\text{Cl}^-]^2}{P_{\\text{Cl}_2}} = \\frac{(0.010)^2}{10.0} = \\frac{1.0 \\times 10^{-4}}{10.0} = 1.0 \\times 10^{-5}$.",
      "3. Apply Nernst equation:\n   $E = E^\\circ - \\frac{0.0592\\text{ V}}{n} \\log Q = 1.36 - \\frac{0.0592}{2} \\log(10^{-5})$.",
      "4. Calculate: $\\log(10^{-5}) = -5.000$.\n   $E = 1.36 - (0.0296)(-5) = 1.36 + 0.148 = +1.508\\text{ V} \\approx +1.51\\text{ V}$."
    ],
    "stepByStepSolutionAr": [
      "١. تفاعل الاختزال: $\\text{Cl}_2 + 2e^- \\rightleftharpoons 2\\text{Cl}^-$، وعدد الإلكترونات $n = 2$.",
      "٢. حاصل التفاعل: $Q = \\frac{[\\text{Cl}^-]^2}{P_{\\text{Cl}_2}} = \\frac{(0.010)^2}{10.0} = 10^{-5}$.",
      "٣. تطبيق معادلة نيرنست: $E = 1.36 - \\frac{0.0592}{2} \\log(10^{-5})$.",
      "٤. الحساب: $E = 1.36 - (0.0296 \\times -5) = 1.36 + 0.148 = +1.508\\text{ V}$."
    ],
    "teacherTipEn": "Increasing reactant pressure (P_Cl2) and decreasing product concentration ([Cl-]) both shift the equilibrium forward, making reduction potential substantially more positive.",
    "teacherTipAr": "زيادة ضغط المتفاعل الغازي وخفض تركيز النواتج يزيحان الاتزان طردياً مما يزيد من ميل القطب للاختزال ويرفع جهده بشكل ملحوظ."
  },
  {
    "id": "egbac_chem_ch4_ex_14",
    "titleEn": "Corrosion Mechanism of Iron: Electrochemical Rusting Cycle",
    "titleAr": "ميكانيكية صدأ وتآكل الحديد: الدورة الكهروكيميائية لتكون الصدأ",
    "difficulty": "medium",
    "questionEn": "In the atmospheric electrochemical rusting of iron, what are the primary chemical reactions occurring at the anodic site, the cathodic site, and the formation of hydrated iron(III) oxide rust?",
    "questionAr": "في الصدأ الكهروكيميائي للحديد في الهواء الجوي الرطب، ما هي التفاعلات الكيميائية الأساسية عند المصعد، وعند المهبط، وكيف يتكون راسب صدأ الحديد المائي؟",
    "optionsEn": [
      "Anode: $\\text{Fe} \\to \\text{Fe}^{2+} + 2e^-$; Cathode: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$; Rust: oxidation of $\\text{Fe(OH)}_2$ to $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$.",
      "Anode: $\\text{Fe} \\to \\text{Fe}^{3+} + 3e^-$; Cathode: $2\\text{H}^+ + 2e^- \\to \\text{H}_2$; Rust: $\\text{FeCl}_3$.",
      "Anode: $\\text{O}_2 \\to 2\\text{O} + 4e^-$; Cathode: $\\text{Fe}^{2+} + 2e^- \\to \\text{Fe}$; Rust: $\\text{FeO}$.",
      "Anode: $\\text{Fe} \\to \\text{Fe}^{2+} + 2e^-$; Cathode: $\\text{CO}_2 + e^- \\to \\text{CO}$; Rust: $\\text{FeCO}_3$."
    ],
    "optionsAr": [
      "عند المصعد: $\\text{Fe} \\to \\text{Fe}^{2+} + 2e^-$؛ عند المهبط: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$؛ وتتأكسد $\\text{Fe(OH)}_2$ مكونة الصدأ $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$.",
      "عند المصعد: $\\text{Fe} \\to \\text{Fe}^{3+} + 3e^-$؛ عند المهبط: $2\\text{H}^+ + 2e^- \\to \\text{H}_2$؛ ويتكون صدأ من $\\text{FeCl}_3$.",
      "عند المصعد: $\\text{O}_2 \\to 2\\text{O} + 4e^-$؛ عند المهبط: $\\text{Fe}^{2+} + 2e^- \\to \\text{Fe}$؛ ويتكون صدأ من $\\text{FeO}$.",
      "عند المصعد: $\\text{Fe} \\to \\text{Fe}^{2+} + 2e^-$؛ عند المهبط: $\\text{CO}_2 + e^- \\to \\text{CO}$؛ ويتكون صدأ من $\\text{FeCO}_3$."
    ],
    "correctAnswer": "Anode: $\\text{Fe} \\to \\text{Fe}^{2+} + 2e^-$; Cathode: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$; Rust: oxidation of $\\text{Fe(OH)}_2$ to $\\text{Fe}_2\\text{O}_3 \\cdot x\\text{H}_2\\text{O}$.",
    "correctIndex": 0,
    "hintEn": "Rusting is an electrochemical cell: Fe acts as anode (Fe -> Fe2+ + 2e-), water droplet surface acts as cathode (O2 reduction to OH-), forming Fe(OH)2 which oxidizes to Fe2O3.xH2O.",
    "hintAr": "الصدأ خلية جلفانية موضعية: الحديد مصعد (أكسدة إلى Fe2+)، وسطح قطرة الماء مهبط (اختزال O2 إلى OH-)، ويتكون Fe(OH)2 ثم يتأكسد لأكسيد الحديد الثلاثي المائي.",
    "stepByStepSolutionEn": [
      "1. Anodic site (strained area, scratch, or pit): Metallic iron oxidizes: $2\\text{Fe}(s) \\to 2\\text{Fe}^{2+}(aq) + 4e^-, \\quad E^\\circ = -0.44\\text{ V}$.",
      "2. Cathodic site (periphery of water droplet with high $\\text{O}_2$ exposure): Dissolved oxygen reduces: $\\text{O}_2(g) + 2\\text{H}_2\\text{O}(l) + 4e^- \\to 4\\text{OH}^-(aq), \\quad E^\\circ = +0.40\\text{ V}$.",
      "3. Precipitation of iron(II) hydroxide: $\\text{Fe}^{2+}(aq) + 2\\text{OH}^-(aq) \\to \\text{Fe(OH)}_2(s)$ (greenish-white precipitate).",
      "4. Further aerial oxidation: $\\text{Fe(OH)}_2$ is rapidly oxidized by atmospheric oxygen to form reddish-brown hydrated iron(III) oxide rust: $4\\text{Fe(OH)}_2(s) + \\text{O}_2(g) + 2x\\text{H}_2\\text{O} \\to 2\\text{Fe}_2\\text{O}_3 \\cdot (x+4)\\text{H}_2\\text{O}(s)$."
    ],
    "stepByStepSolutionAr": [
      "١. منطقة المصعد (منطقة الخدش أو الإجهاد الميكانيكي): يتأكسد الحديد: $\\text{Fe} \\to \\text{Fe}^{2+} + 2e^-$.",
      "٢. منطقة المهبط (أطراف قطرة الماء الغنية بالأكسجين): يختزل الأكسجين الذائب: $\\text{O}_2 + 2\\text{H}_2\\text{O} + 4e^- \\to 4\\text{OH}^-$.",
      "٣. تكوين هيدروكسيد الحديد الثنائي: $\\text{Fe}^{2+} + 2\\text{OH}^- \\to \\text{Fe(OH)}_2$.",
      "٤. الأكسدة الهوائية المتتابعة: يتأكسد هيدروكسيد الحديد الثنائي سريعاً بأكسجين الهواء ليتحول إلى أكسيد الحديد الثلاثي المتهدرت البني المحمر (الصدأ)."
    ],
    "teacherTipEn": "Both moisture (H2O electrolyte) and oxygen (O2 electron acceptor) are strictly required for electrochemical iron rusting to occur.",
    "teacherTipAr": "وجود الماء كإلكتروليت والأكسجين كمستقبل للإلكترونات شرطان متلازمان معاً لحدوث الصدأ والتآكل الكهروكيميائي للحديد."
  },
  {
    "id": "egbac_chem_ch4_ex_15",
    "titleEn": "Electrolytic Refining vs Galvanic Energy Output Comparison",
    "titleAr": "مقارنة استهلاك الطاقة في الخلايا الإلكتروليتية وإنتاجها في الخلايا الجلفانية",
    "difficulty": "easy",
    "questionEn": "What fundamental thermodynamic distinction separates a Galvanic (Voltaic) cell from an Electrolytic cell?",
    "questionAr": "ما الفارق الديناميكي الحراري الجوهري الذي يفصل بين الخلية الجلفانية والخلية الإلكتروليتية (خلية التحليل الكهربي)؟",
    "optionsEn": [
      "Galvanic cells convert spontaneous chemical energy into electrical work ($\\Delta G < 0, E_{\\text{cell}} > 0$); electrolytic cells consume external electrical work to drive a non-spontaneous reaction ($\\Delta G > 0, E_{\\text{cell}} < 0$).",
      "Galvanic cells consume electrical energy, while electrolytic cells generate electricity.",
      "Galvanic cells operate without electrodes, while electrolytic cells require four electrodes.",
      "Galvanic cells only occur at absolute zero, while electrolytic cells require high vacuum."
    ],
    "optionsAr": [
      "الخلايا الجلفانية تحول الطاقة الكيميائية التلقائية إلى شغل كهربي ($\\Delta G < 0, E > 0$)؛ بينما الخلايا الإلكتروليتية تستهلك طاقة كهربية لإجبار تفاعل غير تلقائي على الحدوث ($\\Delta G > 0, E < 0$).",
      "الخلايا الجلفانية تستهلك طاقة كهربية، بينما الخلايا الإلكتروليتية تولد تياراً كهربياً.",
      "الخلايا الجلفانية تعمل بدون أقطاب معدنية، بينما تتطلب الخلايا الإلكتروليتية أربعة أقطاب.",
      "الخلايا الجلفانية تحدث فقط عند الصفر المطلق، بينما تتطلب الخلايا الإلكتروليتية تفريغاً هوائياً."
    ],
    "correctAnswer": "Galvanic cells convert spontaneous chemical energy into electrical work ($\\Delta G < 0, E_{\\text{cell}} > 0$); electrolytic cells consume external electrical work to drive a non-spontaneous reaction ($\\Delta G > 0, E_{\\text{cell}} < 0$).",
    "correctIndex": 0,
    "hintEn": "Galvanic: spontaneous, Delta G < 0, produces electricity. Electrolytic: non-spontaneous, Delta G > 0, requires external DC power source.",
    "hintAr": "الجلفانية: تلقائية، Delta G سالبة، تنتج كهرباء. الإلكتروليتية: غير تلقائية، Delta G موجبة، تستهلك كهرباء من مصدر تيار مستمر خارجي.",
    "stepByStepSolutionEn": [
      "1. In a Galvanic cell, a thermodynamically favorable redox reaction proceeds spontaneously ($\\Delta G^\\circ < 0, E^\\circ_{\text{cell}} > 0$), converting chemical bond energy into useful electrical current (e.g., batteries, fuel cells).",
      "2. In an Electrolytic cell, a thermodynamically non-spontaneous process ($\\Delta G^\\circ > 0, E^\\circ_{\text{cell}} < 0$) is forced to occur by connecting an external direct-current (DC) power source with voltage $V_{\text{applied}} > |E_{\text{cell}}|$.",
      "3. In both cells, oxidation strictly occurs at the anode and reduction strictly occurs at the cathode, but electrode polarities are inverted (anode is negative in galvanic, positive in electrolytic)."
    ],
    "stepByStepSolutionAr": [
      "١. في الخلية الجلفانية: يحدث تفاعل أكسدة واختزال تلقائي ($\\Delta G < 0, E > 0$) يحول الطاقة الكيميائية إلى تيار كهربي مفيد (مثل البطاريات).",
      "٢. في خلية التحليل الكهربي: يُجبر تفاعل غير تلقائي ($\\Delta G > 0, E < 0$) على الحدوث بتطبيق جهد خارجي مستمر أكبر من جهد الخلية العكسي.",
      "٣. في كلا النوعين تحدث الأكسدة دائماً عند المصعد والاختزال عند المهبط، ولكن شحنة الأقطاب تنعكس (المصعد سالب في الجلفانية وموجب في الإلكتروليتية)."
    ],
    "teacherTipEn": "Remember the universal mnemonic: Anode = Oxidation, Cathode = Reduction (An Ox and Red Cat) in EVERY electrochemical cell without exception.",
    "teacherTipAr": "تذكر القاعدة الكونية الشاملة: المصعد يشهد دائماً الأكسدة والمهبط يشهد الاختزال في جميع الخلايا الكهروكيميائية بلا أي استثناء."
  }
];
