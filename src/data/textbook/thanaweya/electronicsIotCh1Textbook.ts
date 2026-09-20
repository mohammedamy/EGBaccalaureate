import type { SolvedProblem } from '../../../types/curriculum';

export const th_electronics_iot_ch1SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch1_solved_1",
    "titleEn": "Solved Example 1: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "مثال محلول 1: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying P-N Junction Physics, Depletion Region & Shockley Diode Equation. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\nStep 3: Execute numerical evaluation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\nالخطوة ٣: التعويض العددي وحساب النتائج: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Perform calculation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "الحساب العددي الدقيق: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود."
  },
  {
    "id": "th_electronics_iot_ch1_solved_2",
    "titleEn": "Solved Example 2: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "مثال محلول 2: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\nStep 3: Execute numerical evaluation: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Perform calculation: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "الحساب العددي الدقيق: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد."
  },
  {
    "id": "th_electronics_iot_ch1_solved_3",
    "titleEn": "Solved Example 3: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "مثال محلول 3: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying MOSFET Saturation Region, Transconductance & Switching Speed. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\nStep 3: Execute numerical evaluation: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Perform calculation: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "الحساب العددي الدقيق: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for MOSFET Saturation Region, Transconductance & Switching Speed.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating MOSFET Saturation Region, Transconductance & Switching Speed.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل."
  },
  {
    "id": "th_electronics_iot_ch1_solved_4",
    "titleEn": "Solved Example 4: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "مثال محلول 4: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying P-N Junction Physics, Depletion Region & Shockley Diode Equation. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\nStep 3: Execute numerical evaluation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\nالخطوة ٣: التعويض العددي وحساب النتائج: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Perform calculation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "الحساب العددي الدقيق: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود."
  },
  {
    "id": "th_electronics_iot_ch1_solved_5",
    "titleEn": "Solved Example 5: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "مثال محلول 5: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\nStep 3: Execute numerical evaluation: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Perform calculation: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "الحساب العددي الدقيق: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد."
  },
  {
    "id": "th_electronics_iot_ch1_solved_6",
    "titleEn": "Solved Example 6: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "مثال محلول 6: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying MOSFET Saturation Region, Transconductance & Switching Speed. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\nStep 3: Execute numerical evaluation: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Perform calculation: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "الحساب العددي الدقيق: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for MOSFET Saturation Region, Transconductance & Switching Speed.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating MOSFET Saturation Region, Transconductance & Switching Speed.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل."
  },
  {
    "id": "th_electronics_iot_ch1_solved_7",
    "titleEn": "Solved Example 7: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "مثال محلول 7: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying P-N Junction Physics, Depletion Region & Shockley Diode Equation. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\nStep 3: Execute numerical evaluation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\nالخطوة ٣: التعويض العددي وحساب النتائج: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Perform calculation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "الحساب العددي الدقيق: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود."
  },
  {
    "id": "th_electronics_iot_ch1_solved_8",
    "titleEn": "Solved Example 8: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "مثال محلول 8: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\nStep 3: Execute numerical evaluation: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Perform calculation: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "الحساب العددي الدقيق: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد."
  },
  {
    "id": "th_electronics_iot_ch1_solved_9",
    "titleEn": "Solved Example 9: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "مثال محلول 9: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying MOSFET Saturation Region, Transconductance & Switching Speed. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\nStep 3: Execute numerical evaluation: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Perform calculation: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "الحساب العددي الدقيق: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for MOSFET Saturation Region, Transconductance & Switching Speed.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating MOSFET Saturation Region, Transconductance & Switching Speed.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل."
  },
  {
    "id": "th_electronics_iot_ch1_solved_10",
    "titleEn": "Solved Example 10: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "مثال محلول 10: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying P-N Junction Physics, Depletion Region & Shockley Diode Equation. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\nStep 3: Execute numerical evaluation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\nالخطوة ٣: التعويض العددي وحساب النتائج: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Perform calculation: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "الحساب العددي الدقيق: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating P-N Junction Physics, Depletion Region & Shockley Diode Equation.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود."
  }
];

export const th_electronics_iot_ch1ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch1_ex_1",
    "titleEn": "Exercise Problem 1: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "تمرين 1: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving P-N Junction Physics, Depletion Region & Shockley Diode Equation. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\n- Calculation & Results: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\n- خطوات الحساب والنتيجة: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Calculate final values: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "حساب الناتج النهائي: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "hintAr": "طبق القانون الأساسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_2",
    "titleEn": "Exercise Problem 2: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "تمرين 2: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- Calculation & Results: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- خطوات الحساب والنتيجة: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Calculate final values: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "حساب الناتج النهائي: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "hintAr": "طبق القانون الأساسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_3",
    "titleEn": "Exercise Problem 3: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "تمرين 3: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving MOSFET Saturation Region, Transconductance & Switching Speed. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- Calculation & Results: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- خطوات الحساب والنتيجة: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Calculate final values: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "حساب الناتج النهائي: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "hintAr": "طبق القانون الأساسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_4",
    "titleEn": "Exercise Problem 4: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "تمرين 4: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving P-N Junction Physics, Depletion Region & Shockley Diode Equation. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\n- Calculation & Results: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\n- خطوات الحساب والنتيجة: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Calculate final values: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "حساب الناتج النهائي: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "hintAr": "طبق القانون الأساسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_5",
    "titleEn": "Exercise Problem 5: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "تمرين 5: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- Calculation & Results: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- خطوات الحساب والنتيجة: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Calculate final values: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "حساب الناتج النهائي: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "hintAr": "طبق القانون الأساسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_6",
    "titleEn": "Exercise Problem 6: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "تمرين 6: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving MOSFET Saturation Region, Transconductance & Switching Speed. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- Calculation & Results: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- خطوات الحساب والنتيجة: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Calculate final values: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "حساب الناتج النهائي: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "hintAr": "طبق القانون الأساسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_7",
    "titleEn": "Exercise Problem 7: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "تمرين 7: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving P-N Junction Physics, Depletion Region & Shockley Diode Equation. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\n- Calculation & Results: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\n- خطوات الحساب والنتيجة: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Calculate final values: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "حساب الناتج النهائي: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "hintAr": "طبق القانون الأساسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_8",
    "titleEn": "Exercise Problem 8: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "تمرين 8: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- Calculation & Results: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- خطوات الحساب والنتيجة: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Calculate final values: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "حساب الناتج النهائي: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "hintAr": "طبق القانون الأساسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_9",
    "titleEn": "Exercise Problem 9: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "تمرين 9: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving MOSFET Saturation Region, Transconductance & Switching Speed. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- Calculation & Results: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- خطوات الحساب والنتيجة: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Calculate final values: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "حساب الناتج النهائي: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "hintAr": "طبق القانون الأساسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_10",
    "titleEn": "Exercise Problem 10: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "تمرين 10: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving P-N Junction Physics, Depletion Region & Shockley Diode Equation. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\n- Calculation & Results: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\n- خطوات الحساب والنتيجة: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Calculate final values: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "حساب الناتج النهائي: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "hintAr": "طبق القانون الأساسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_11",
    "titleEn": "Exercise Problem 11: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "تمرين 11: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- Calculation & Results: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- خطوات الحساب والنتيجة: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Calculate final values: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "حساب الناتج النهائي: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "hintAr": "طبق القانون الأساسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_12",
    "titleEn": "Exercise Problem 12: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "تمرين 12: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving MOSFET Saturation Region, Transconductance & Switching Speed. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- Calculation & Results: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- خطوات الحساب والنتيجة: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Calculate final values: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "حساب الناتج النهائي: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "hintAr": "طبق القانون الأساسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_13",
    "titleEn": "Exercise Problem 13: P-N Junction Physics, Depletion Region & Shockley Diode Equation",
    "titleAr": "تمرين 13: فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving P-N Junction Physics, Depletion Region & Shockley Diode Equation. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن فيزياء وصلة P-N، منطقة النضوب ومعادلة شوكلي للدايود. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).\n- Calculation & Results: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).\n- خطوات الحساب والنتيجة: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
      "Calculate final values: If a silicon diode has reverse saturation current $I_S = 10\\text{ pA}$ and ideality factor $n = 1$, the forward voltage drop required to conduct $I_D = 5.2\\text{ mA}$ at $T = 300\\text{ K}$ is $V_D = V_T \\ln\\left(\\frac{I_D}{I_S} + 1\\right) = 0.026 \\times \\ln\\left(\\frac{5.2 \\times 10^{-3}}{10^{-11}}\\right) \\approx 0.026 \\times 20.07 = 0.522\\text{ V}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
      "حساب الناتج النهائي: إذا كان لدايود سيليكوني تيار تشبع عكسي $I_S = 10\\text{ pA}$ ومعامل مثالية $n = 1$، فإن هبوط الجهد الأمامي اللازم لتمرير $I_D = 5.2\\text{ mA}$ عند $300\\text{ K}$ هو $V_D = 0.026 \\times \\ln(5.2 \\times 10^8) \\approx 0.522\\text{ V}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The forward diode current is governed by the Shockley diode equation: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$, where thermal voltage $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ at room temperature ($300\\text{ K}$).",
    "hintAr": "طبق القانون الأساسي: يُحسب تيار الدايود الأمامي بمعادلة شوكلي: $I_D = I_S \\left(e^{\\frac{V_D}{n V_T}} - 1\\right)$، حيث الجهد الحراري $V_T = \\frac{k T}{q} \\approx 26\\text{ mV}$ عند درجة حرارة الغرفة ($300\\text{ K}$).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_14",
    "titleEn": "Exercise Problem 14: BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain",
    "titleAr": "تمرين 14: انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving BJT Biasing, Small-Signal Hybrid-Pi Model & Voltage Gain. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن انحياز ترانزستور BJT، نموذج باي الهجين للإشارة الصغيرة وكسب الجهد. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- Calculation & Results: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.\n- خطوات الحساب والنتيجة: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "Calculate final values: A Common-Emitter BJT amplifier with $I_C = 2.6\\text{ mA}$, $\\beta = 100$, and collector load $R_C = 2\\text{ k}\\Omega$ has transconductance $g_m = \\frac{2.6\\text{ mA}}{26\\text{ mV}} = 0.1\\text{ A/V} = 100\\text{ mS}$, yielding unloaded voltage gain $|A_v| = g_m R_C = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
      "حساب الناتج النهائي: مكبر باعث مشترك BJT بتيار $I_C = 2.6\\text{ mA}$ و$\\beta = 100$ وحمل مجمع $R_C = 2\\text{ k}\\Omega$، يمتلك توصيلية $g_m = 0.1\\text{ S}$ وكسب جهد غير محمل $|A_v| = 0.1 \\times 2000 = 200\\text{ V/V}$ ($46\\text{ dB}$).",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In the small-signal hybrid-pi model, transconductance is $g_m = \\frac{I_C}{V_T}$ and small-signal input resistance is $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "hintAr": "طبق القانون الأساسي: في نموذج باي الهجين للإشارة الصغيرة، تُحسب التوصيلية التبادلية بالعلاقة $g_m = \\frac{I_C}{V_T}$ ومقاومة الدخل $r_\\pi = \\frac{\\beta}{g_m} = \\frac{\\beta V_T}{I_C}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch1_ex_15",
    "titleEn": "Exercise Problem 15: MOSFET Saturation Region, Transconductance & Switching Speed",
    "titleAr": "تمرين 15: منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving MOSFET Saturation Region, Transconductance & Switching Speed. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن منطقة تشبع ترانزستور MOSFET، التوصيلية التبادلية وسرعة التبديل. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- Calculation & Results: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.\n- خطوات الحساب والنتيجة: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "Calculate final values: For a power MOSFET with process parameter $k_n' = 120\\ \\mu\\text{A/V}^2$, aspect ratio $W/L = 500$, and threshold $V_{TH} = 1.2\\text{ V}$, applying $V_{GS} = 3.2\\text{ V}$ produces overdrive voltage $V_{OV} = 2.0\\text{ V}$ and saturation current $I_D = \\frac{1}{2}(120 \\times 10^{-6})(500)(2.0)^2 = 0.12\\text{ A} = 120\\text{ mA}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
      "حساب الناتج النهائي: لترانزستور MOSFET بقدرة بمعامل $k_n' = 120\\ \\mu\\text{A/V}^2$ ونسبة أبعاد $W/L = 500$ وعتبة $V_{TH} = 1.2\\text{ V}$، فإن تطبيق $V_{GS} = 3.2\\text{ V}$ يعطي جهد تجاوز $V_{OV} = 2.0\\text{ V}$ وتيار تشبع $I_D = 120\\text{ mA}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In saturation, ideal drain current follows the square-law equation: $I_D = \\frac{1}{2} \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$, yielding transconductance $g_m = \\mu_n C_{ox} \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "hintAr": "طبق القانون الأساسي: في منطقة التشبع، يتبع تيار الصرف المثالي علاقة التربيع: $I_D = \\frac{1}{2} k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})^2$، وتكون التوصيلية التبادلية $g_m = k_n' \\left(\\frac{W}{L}\\right) (V_{GS} - V_{TH})$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
