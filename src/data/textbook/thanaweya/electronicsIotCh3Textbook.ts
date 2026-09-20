import type { SolvedProblem } from '../../../types/curriculum';

export const th_electronics_iot_ch3SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch3_solved_1",
    "titleEn": "Solved Example 1: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "مثال محلول 1: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\nStep 3: Execute numerical evaluation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\nالخطوة ٣: التعويض العددي وحساب النتائج: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Perform calculation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "الحساب العددي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة."
  },
  {
    "id": "th_electronics_iot_ch3_solved_2",
    "titleEn": "Solved Example 2: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "مثال محلول 2: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying ARM Cortex-M Microcontroller Architecture & Memory Mapping. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\nStep 3: Execute numerical evaluation: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\nالخطوة ٣: التعويض العددي وحساب النتائج: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Perform calculation: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "الحساب العددي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة."
  },
  {
    "id": "th_electronics_iot_ch3_solved_3",
    "titleEn": "Solved Example 3: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "مثال محلول 3: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\nStep 3: Execute numerical evaluation: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Perform calculation: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "الحساب العددي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات."
  },
  {
    "id": "th_electronics_iot_ch3_solved_4",
    "titleEn": "Solved Example 4: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "مثال محلول 4: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\nStep 3: Execute numerical evaluation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\nالخطوة ٣: التعويض العددي وحساب النتائج: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Perform calculation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "الحساب العددي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة."
  },
  {
    "id": "th_electronics_iot_ch3_solved_5",
    "titleEn": "Solved Example 5: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "مثال محلول 5: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying ARM Cortex-M Microcontroller Architecture & Memory Mapping. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\nStep 3: Execute numerical evaluation: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\nالخطوة ٣: التعويض العددي وحساب النتائج: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Perform calculation: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "الحساب العددي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة."
  },
  {
    "id": "th_electronics_iot_ch3_solved_6",
    "titleEn": "Solved Example 6: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "مثال محلول 6: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\nStep 3: Execute numerical evaluation: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Perform calculation: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "الحساب العددي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات."
  },
  {
    "id": "th_electronics_iot_ch3_solved_7",
    "titleEn": "Solved Example 7: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "مثال محلول 7: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\nStep 3: Execute numerical evaluation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\nالخطوة ٣: التعويض العددي وحساب النتائج: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Perform calculation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "الحساب العددي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة."
  },
  {
    "id": "th_electronics_iot_ch3_solved_8",
    "titleEn": "Solved Example 8: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "مثال محلول 8: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying ARM Cortex-M Microcontroller Architecture & Memory Mapping. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\nStep 3: Execute numerical evaluation: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\nالخطوة ٣: التعويض العددي وحساب النتائج: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Perform calculation: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "الحساب العددي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة."
  },
  {
    "id": "th_electronics_iot_ch3_solved_9",
    "titleEn": "Solved Example 9: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "مثال محلول 9: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\nStep 3: Execute numerical evaluation: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\nالخطوة ٣: التعويض العددي وحساب النتائج: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Perform calculation: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "الحساب العددي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات."
  },
  {
    "id": "th_electronics_iot_ch3_solved_10",
    "titleEn": "Solved Example 10: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "مثال محلول 10: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\nStep 3: Execute numerical evaluation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\nالخطوة ٣: التعويض العددي وحساب النتائج: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Perform calculation: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "الحساب العددي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة."
  }
];

export const th_electronics_iot_ch3ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch3_ex_1",
    "titleEn": "Exercise Problem 1: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "تمرين 1: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\n- Calculation & Results: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\n- خطوات الحساب والنتيجة: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Calculate final values: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "حساب الناتج النهائي: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
    "hintAr": "طبق القانون الأساسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_2",
    "titleEn": "Exercise Problem 2: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "تمرين 2: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving ARM Cortex-M Microcontroller Architecture & Memory Mapping. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\n- Calculation & Results: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\n- خطوات الحساب والنتيجة: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Calculate final values: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "حساب الناتج النهائي: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
    "hintAr": "طبق القانون الأساسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_3",
    "titleEn": "Exercise Problem 3: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "تمرين 3: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- Calculation & Results: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- خطوات الحساب والنتيجة: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Calculate final values: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "حساب الناتج النهائي: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "hintAr": "طبق القانون الأساسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_4",
    "titleEn": "Exercise Problem 4: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "تمرين 4: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\n- Calculation & Results: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\n- خطوات الحساب والنتيجة: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Calculate final values: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "حساب الناتج النهائي: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
    "hintAr": "طبق القانون الأساسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_5",
    "titleEn": "Exercise Problem 5: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "تمرين 5: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving ARM Cortex-M Microcontroller Architecture & Memory Mapping. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\n- Calculation & Results: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\n- خطوات الحساب والنتيجة: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Calculate final values: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "حساب الناتج النهائي: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
    "hintAr": "طبق القانون الأساسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_6",
    "titleEn": "Exercise Problem 6: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "تمرين 6: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- Calculation & Results: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- خطوات الحساب والنتيجة: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Calculate final values: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "حساب الناتج النهائي: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "hintAr": "طبق القانون الأساسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_7",
    "titleEn": "Exercise Problem 7: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "تمرين 7: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\n- Calculation & Results: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\n- خطوات الحساب والنتيجة: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Calculate final values: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "حساب الناتج النهائي: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
    "hintAr": "طبق القانون الأساسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_8",
    "titleEn": "Exercise Problem 8: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "تمرين 8: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving ARM Cortex-M Microcontroller Architecture & Memory Mapping. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\n- Calculation & Results: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\n- خطوات الحساب والنتيجة: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Calculate final values: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "حساب الناتج النهائي: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
    "hintAr": "طبق القانون الأساسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_9",
    "titleEn": "Exercise Problem 9: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "تمرين 9: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- Calculation & Results: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- خطوات الحساب والنتيجة: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Calculate final values: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "حساب الناتج النهائي: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "hintAr": "طبق القانون الأساسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_10",
    "titleEn": "Exercise Problem 10: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "تمرين 10: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\n- Calculation & Results: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\n- خطوات الحساب والنتيجة: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Calculate final values: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "حساب الناتج النهائي: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
    "hintAr": "طبق القانون الأساسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_11",
    "titleEn": "Exercise Problem 11: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "تمرين 11: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving ARM Cortex-M Microcontroller Architecture & Memory Mapping. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\n- Calculation & Results: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\n- خطوات الحساب والنتيجة: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Calculate final values: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "حساب الناتج النهائي: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
    "hintAr": "طبق القانون الأساسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_12",
    "titleEn": "Exercise Problem 12: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "تمرين 12: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- Calculation & Results: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- خطوات الحساب والنتيجة: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Calculate final values: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "حساب الناتج النهائي: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "hintAr": "طبق القانون الأساسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_13",
    "titleEn": "Exercise Problem 13: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters",
    "titleAr": "تمرين 13: المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.\n- Calculation & Results: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.\n- خطوات الحساب والنتيجة: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "Calculate final values: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "حساب الناتج النهائي: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
    "hintAr": "طبق القانون الأساسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_14",
    "titleEn": "Exercise Problem 14: ARM Cortex-M Microcontroller Architecture & Memory Mapping",
    "titleAr": "تمرين 14: معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving ARM Cortex-M Microcontroller Architecture & Memory Mapping. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.\n- Calculation & Results: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.\n- خطوات الحساب والنتيجة: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "Calculate final values: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "حساب الناتج النهائي: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
    "hintAr": "طبق القانون الأساسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch3_ex_15",
    "titleEn": "Exercise Problem 15: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization",
    "titleAr": "تمرين 15: محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- Calculation & Results: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.\n- خطوات الحساب والنتيجة: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "Calculate final values: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "حساب الناتج النهائي: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "hintAr": "طبق القانون الأساسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
