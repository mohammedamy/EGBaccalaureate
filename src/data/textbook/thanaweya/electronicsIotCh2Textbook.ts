import type { SolvedProblem } from '../../../types/curriculum';

export const th_electronics_iot_ch2SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch2_solved_1",
    "titleEn": "Solved Example 1: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "مثال محلول 1: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying Inverting & Non-Inverting Op-Amp Configurations. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مكبرات العمليات في النمط العاكس وغير العاكس. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\nStep 3: Execute numerical evaluation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\nالخطوة ٣: التعويض العددي وحساب النتائج: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Perform calculation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "الحساب العددي الدقيق: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Inverting & Non-Inverting Op-Amp Configurations.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مكبرات العمليات في النمط العاكس وغير العاكس.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Inverting & Non-Inverting Op-Amp Configurations.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مكبرات العمليات في النمط العاكس وغير العاكس."
  },
  {
    "id": "th_electronics_iot_ch2_solved_2",
    "titleEn": "Solved Example 2: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "مثال محلول 2: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\nStep 3: Execute numerical evaluation: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\nالخطوة ٣: التعويض العددي وحساب النتائج: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Perform calculation: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "الحساب العددي الدقيق: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR."
  },
  {
    "id": "th_electronics_iot_ch2_solved_3",
    "titleEn": "Solved Example 3: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "مثال محلول 3: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\nStep 3: Execute numerical evaluation: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Perform calculation: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "الحساب العددي الدقيق: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة."
  },
  {
    "id": "th_electronics_iot_ch2_solved_4",
    "titleEn": "Solved Example 4: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "مثال محلول 4: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying Inverting & Non-Inverting Op-Amp Configurations. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مكبرات العمليات في النمط العاكس وغير العاكس. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\nStep 3: Execute numerical evaluation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\nالخطوة ٣: التعويض العددي وحساب النتائج: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Perform calculation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "الحساب العددي الدقيق: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Inverting & Non-Inverting Op-Amp Configurations.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مكبرات العمليات في النمط العاكس وغير العاكس.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Inverting & Non-Inverting Op-Amp Configurations.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مكبرات العمليات في النمط العاكس وغير العاكس."
  },
  {
    "id": "th_electronics_iot_ch2_solved_5",
    "titleEn": "Solved Example 5: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "مثال محلول 5: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\nStep 3: Execute numerical evaluation: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\nالخطوة ٣: التعويض العددي وحساب النتائج: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Perform calculation: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "الحساب العددي الدقيق: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR."
  },
  {
    "id": "th_electronics_iot_ch2_solved_6",
    "titleEn": "Solved Example 6: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "مثال محلول 6: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\nStep 3: Execute numerical evaluation: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Perform calculation: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "الحساب العددي الدقيق: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة."
  },
  {
    "id": "th_electronics_iot_ch2_solved_7",
    "titleEn": "Solved Example 7: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "مثال محلول 7: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying Inverting & Non-Inverting Op-Amp Configurations. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مكبرات العمليات في النمط العاكس وغير العاكس. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\nStep 3: Execute numerical evaluation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\nالخطوة ٣: التعويض العددي وحساب النتائج: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Perform calculation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "الحساب العددي الدقيق: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Inverting & Non-Inverting Op-Amp Configurations.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مكبرات العمليات في النمط العاكس وغير العاكس.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Inverting & Non-Inverting Op-Amp Configurations.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مكبرات العمليات في النمط العاكس وغير العاكس."
  },
  {
    "id": "th_electronics_iot_ch2_solved_8",
    "titleEn": "Solved Example 8: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "مثال محلول 8: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\nStep 3: Execute numerical evaluation: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\nالخطوة ٣: التعويض العددي وحساب النتائج: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Perform calculation: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "الحساب العددي الدقيق: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR."
  },
  {
    "id": "th_electronics_iot_ch2_solved_9",
    "titleEn": "Solved Example 9: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "مثال محلول 9: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\nStep 3: Execute numerical evaluation: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\nالخطوة ٣: التعويض العددي وحساب النتائج: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Perform calculation: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "الحساب العددي الدقيق: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة."
  },
  {
    "id": "th_electronics_iot_ch2_solved_10",
    "titleEn": "Solved Example 10: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "مثال محلول 10: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying Inverting & Non-Inverting Op-Amp Configurations. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق مكبرات العمليات في النمط العاكس وغير العاكس. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\nStep 3: Execute numerical evaluation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\nالخطوة ٣: التعويض العددي وحساب النتائج: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Perform calculation: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "الحساب العددي الدقيق: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Inverting & Non-Inverting Op-Amp Configurations.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة مكبرات العمليات في النمط العاكس وغير العاكس.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Inverting & Non-Inverting Op-Amp Configurations.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب مكبرات العمليات في النمط العاكس وغير العاكس."
  }
];

export const th_electronics_iot_ch2ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch2_ex_1",
    "titleEn": "Exercise Problem 1: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "تمرين 1: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving Inverting & Non-Inverting Op-Amp Configurations. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات العمليات في النمط العاكس وغير العاكس. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\n- Calculation & Results: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\n- خطوات الحساب والنتيجة: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Calculate final values: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "حساب الناتج النهائي: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
    "hintAr": "طبق القانون الأساسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_2",
    "titleEn": "Exercise Problem 2: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "تمرين 2: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\n- Calculation & Results: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\n- خطوات الحساب والنتيجة: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Calculate final values: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "حساب الناتج النهائي: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
    "hintAr": "طبق القانون الأساسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_3",
    "titleEn": "Exercise Problem 3: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "تمرين 3: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\n- Calculation & Results: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\n- خطوات الحساب والنتيجة: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Calculate final values: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "حساب الناتج النهائي: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
    "hintAr": "طبق القانون الأساسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_4",
    "titleEn": "Exercise Problem 4: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "تمرين 4: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving Inverting & Non-Inverting Op-Amp Configurations. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات العمليات في النمط العاكس وغير العاكس. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\n- Calculation & Results: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\n- خطوات الحساب والنتيجة: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Calculate final values: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "حساب الناتج النهائي: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
    "hintAr": "طبق القانون الأساسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_5",
    "titleEn": "Exercise Problem 5: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "تمرين 5: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\n- Calculation & Results: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\n- خطوات الحساب والنتيجة: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Calculate final values: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "حساب الناتج النهائي: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
    "hintAr": "طبق القانون الأساسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_6",
    "titleEn": "Exercise Problem 6: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "تمرين 6: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\n- Calculation & Results: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\n- خطوات الحساب والنتيجة: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Calculate final values: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "حساب الناتج النهائي: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
    "hintAr": "طبق القانون الأساسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_7",
    "titleEn": "Exercise Problem 7: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "تمرين 7: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving Inverting & Non-Inverting Op-Amp Configurations. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات العمليات في النمط العاكس وغير العاكس. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\n- Calculation & Results: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\n- خطوات الحساب والنتيجة: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Calculate final values: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "حساب الناتج النهائي: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
    "hintAr": "طبق القانون الأساسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_8",
    "titleEn": "Exercise Problem 8: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "تمرين 8: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\n- Calculation & Results: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\n- خطوات الحساب والنتيجة: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Calculate final values: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "حساب الناتج النهائي: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
    "hintAr": "طبق القانون الأساسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_9",
    "titleEn": "Exercise Problem 9: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "تمرين 9: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\n- Calculation & Results: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\n- خطوات الحساب والنتيجة: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Calculate final values: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "حساب الناتج النهائي: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
    "hintAr": "طبق القانون الأساسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_10",
    "titleEn": "Exercise Problem 10: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "تمرين 10: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving Inverting & Non-Inverting Op-Amp Configurations. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات العمليات في النمط العاكس وغير العاكس. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\n- Calculation & Results: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\n- خطوات الحساب والنتيجة: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Calculate final values: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "حساب الناتج النهائي: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
    "hintAr": "طبق القانون الأساسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_11",
    "titleEn": "Exercise Problem 11: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "تمرين 11: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\n- Calculation & Results: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\n- خطوات الحساب والنتيجة: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Calculate final values: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "حساب الناتج النهائي: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
    "hintAr": "طبق القانون الأساسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_12",
    "titleEn": "Exercise Problem 12: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "تمرين 12: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\n- Calculation & Results: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\n- خطوات الحساب والنتيجة: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Calculate final values: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "حساب الناتج النهائي: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
    "hintAr": "طبق القانون الأساسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_13",
    "titleEn": "Exercise Problem 13: Inverting & Non-Inverting Op-Amp Configurations",
    "titleAr": "تمرين 13: مكبرات العمليات في النمط العاكس وغير العاكس",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving Inverting & Non-Inverting Op-Amp Configurations. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات العمليات في النمط العاكس وغير العاكس. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.\n- Calculation & Results: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.\n- خطوات الحساب والنتيجة: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
      "Calculate final values: To amplify a weak thermocouple signal ($V_{in} = 15\\text{ mV}$) to an ADC input range of $3.0\\text{ V}$ using a non-inverting op-amp with $R_1 = 2\\text{ k}\\Omega$, required gain is $A_v = \\frac{3.0}{0.015} = 200$, dictating feedback resistor $R_f = (A_v - 1) R_1 = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
      "حساب الناتج النهائي: لتكبير إشارة مزدوج حراري ($V_{in} = 15\\text{ mV}$) إلى مدى $3.0\\text{ V}$ بمكبر غير عاكس بمقاومة $R_1 = 2\\text{ k}\\Omega$، يلزم كسب $A_v = 200$، مما يحدد مقاومة التغذية $R_f = 199 \\times 2000 = 398\\text{ k}\\Omega$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In a non-inverting op-amp, closed-loop voltage gain is $A_v = 1 + \\frac{R_f}{R_1}$, providing near-infinite input impedance ($R_{in} \\to \\infty$) ideal for sensor buffering.",
    "hintAr": "طبق القانون الأساسي: في مكبر العمليات غير العاكس، يُحسب كسب الجهد بالعلاقة $A_v = 1 + \\frac{R_f}{R_1}$، مما يوفر مقاومة دخل فائقة الارتفاع تجعله عازلاً مثالياً للحساسات.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_14",
    "titleEn": "Exercise Problem 14: Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR)",
    "titleAr": "تمرين 14: مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving Three-Op-Amp Instrumentation Amplifiers & Common-Mode Rejection Ratio (CMRR). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مكبرات الأجهزة الدقيقة ثلاثية المكبرات ونسبة رفض النمط المشترك CMRR. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.\n- Calculation & Results: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.\n- خطوات الحساب والنتيجة: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
      "Calculate final values: An instrumentation amp with differential gain $A_d = 1000$ and common-mode gain $A_{cm} = 0.01$ has a CMRR of $20 \\log_{10}\\left(\\frac{1000}{0.01}\\right) = 20 \\log_{10}(10^5) = 100\\text{ dB}$, attenuating common-mode mains interference by a factor of 100,000.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
      "حساب الناتج النهائي: مكبر أجهزة بكسب تفاضلي $A_d = 1000$ وكسب نمط مشترك $A_{cm} = 0.01$ يمتلك نسبة رفض $\\text{CMRR} = 20 \\log_{10}(10^5) = 100\\text{ dB}$، مما يخمد تداخل شبكة الكهرباء بمقدار 100,000 مرة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The differential gain of a standard 3-op-amp instrumentation amplifier is $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$, with Common-Mode Rejection Ratio $\\text{CMRR} = 20 \\log_{10}\\left|\\frac{A_d}{A_{cm}}\\right|\\text{ dB}$.",
    "hintAr": "طبق القانون الأساسي: يُحسب الكسب التفاضلي لمكبر الأجهزة الدقيقة بالعلاقة $A_d = \\left(1 + \\frac{2 R_1}{R_G}\\right) \\left(\\frac{R_3}{R_2}\\right)$، ونسبة الرفض بالديسيبل $\\text{CMRR} = 20 \\log_{10}|A_d / A_{cm}|$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch2_ex_15",
    "titleEn": "Exercise Problem 15: Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response",
    "titleAr": "تمرين 15: مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving Sallen-Key Second-Order Active Low-Pass Filters & Butterworth Response. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن مرشحات سالين-كي الفعالة من الدرجة الثانية واستجابة بتروورث المسطحة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.\n- Calculation & Results: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.\n- خطوات الحساب والنتيجة: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
      "Calculate final values: Designing a Butterworth 2nd-order antialiasing filter with cutoff $f_c = 1.0\\text{ kHz}$ using $R_1 = R_2 = 10\\text{ k}\\Omega$ requires $C_1 C_2 = \\frac{1}{(2 \\pi f_c R)^2} = \\frac{1}{(2 \\pi \\times 1000 \\times 10000)^2} \\approx 2.533 \\times 10^{-16}\\text{ F}^2$, satisfied by standard capacitors $C_1 = 22.6\\text{ nF}$ and $C_2 = 11.3\\text{ nF}$ ($C_1 = 2 C_2$).",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
      "حساب الناتج النهائي: لتصميم مرشح منع التعرج (Antialiasing) بتردد قطع $f_c = 1.0\\text{ kHz}$ ومقاومتين $10\\text{ k}\\Omega$، تكون السعتان $C_1 = 22.6\\text{ nF}$ و $C_2 = 11.3\\text{ nF}$ لتحقيق استجابة بتروورث.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: For an equal-component Sallen-Key low-pass filter ($R_1 = R_2 = R$ and $C_1 = 2 C$, $C_2 = C$), cutoff frequency is $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}} = \\frac{1}{2 \\sqrt{2} \\pi R C}$ with maximally flat Butterworth damping $Q = \\frac{1}{\\sqrt{2}} \\approx 0.707$.",
    "hintAr": "طبق القانون الأساسي: لمرشح سالين-كي متطابق المقاومات، يُحسب تردد القطع بالعلاقة $f_c = \\frac{1}{2 \\pi R \\sqrt{C_1 C_2}}$ ويوفر استجابة بتروورث المسطحة عندما يكون معامل الجودة $Q \\approx 0.707$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
