import type { SolvedProblem } from '../../../types/curriculum';

export const egbac_electronics_iot_ch4SolvedExamples: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch4_solved_1",
    "titleEn": "Solved Example 1: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "مثال محلول 1: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\nStep 3: Execute numerical evaluation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Perform calculation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "الحساب العددي الدقيق: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_2",
    "titleEn": "Solved Example 2: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "مثال محلول 2: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\nStep 3: Execute numerical evaluation: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\nالخطوة ٣: التعويض العددي وحساب النتائج: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Perform calculation: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "الحساب العددي الدقيق: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_3",
    "titleEn": "Solved Example 3: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "مثال محلول 3: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\nStep 3: Execute numerical evaluation: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\nالخطوة ٣: التعويض العددي وحساب النتائج: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Perform calculation: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "الحساب العددي الدقيق: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_4",
    "titleEn": "Solved Example 4: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "مثال محلول 4: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\nStep 3: Execute numerical evaluation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Perform calculation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "الحساب العددي الدقيق: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_5",
    "titleEn": "Solved Example 5: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "مثال محلول 5: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\nStep 3: Execute numerical evaluation: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\nالخطوة ٣: التعويض العددي وحساب النتائج: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Perform calculation: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "الحساب العددي الدقيق: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_6",
    "titleEn": "Solved Example 6: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "مثال محلول 6: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\nStep 3: Execute numerical evaluation: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\nالخطوة ٣: التعويض العددي وحساب النتائج: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Perform calculation: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "الحساب العددي الدقيق: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_7",
    "titleEn": "Solved Example 7: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "مثال محلول 7: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\nStep 3: Execute numerical evaluation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Perform calculation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "الحساب العددي الدقيق: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_8",
    "titleEn": "Solved Example 8: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "مثال محلول 8: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\nStep 3: Execute numerical evaluation: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\nالخطوة ٣: التعويض العددي وحساب النتائج: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Perform calculation: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "الحساب العددي الدقيق: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_9",
    "titleEn": "Solved Example 9: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "مثال محلول 9: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\nStep 3: Execute numerical evaluation: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\nالخطوة ٣: التعويض العددي وحساب النتائج: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Perform calculation: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "الحساب العددي الدقيق: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF."
  },
  {
    "id": "egbac_electronics_iot_ch4_solved_10",
    "titleEn": "Solved Example 10: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "مثال محلول 10: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\nStep 3: Execute numerical evaluation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\nالخطوة ٣: التعويض العددي وحساب النتائج: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Perform calculation: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "الحساب العددي الدقيق: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية."
  }
];

export const egbac_electronics_iot_ch4ExerciseProblems: SolvedProblem[] = [
  {
    "id": "egbac_electronics_iot_ch4_ex_1",
    "titleEn": "Exercise Problem 1: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "تمرين 1: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\n- Calculation & Results: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\n- خطوات الحساب والنتيجة: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Calculate final values: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "حساب الناتج النهائي: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
    "hintAr": "طبق القانون الأساسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_2",
    "titleEn": "Exercise Problem 2: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "تمرين 2: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\n- Calculation & Results: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\n- خطوات الحساب والنتيجة: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Calculate final values: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "حساب الناتج النهائي: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
    "hintAr": "طبق القانون الأساسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_3",
    "titleEn": "Exercise Problem 3: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "تمرين 3: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\n- Calculation & Results: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\n- خطوات الحساب والنتيجة: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Calculate final values: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "حساب الناتج النهائي: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
    "hintAr": "طبق القانون الأساسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_4",
    "titleEn": "Exercise Problem 4: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "تمرين 4: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\n- Calculation & Results: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\n- خطوات الحساب والنتيجة: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Calculate final values: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "حساب الناتج النهائي: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
    "hintAr": "طبق القانون الأساسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_5",
    "titleEn": "Exercise Problem 5: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "تمرين 5: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\n- Calculation & Results: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\n- خطوات الحساب والنتيجة: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Calculate final values: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "حساب الناتج النهائي: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
    "hintAr": "طبق القانون الأساسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_6",
    "titleEn": "Exercise Problem 6: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "تمرين 6: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\n- Calculation & Results: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\n- خطوات الحساب والنتيجة: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Calculate final values: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "حساب الناتج النهائي: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
    "hintAr": "طبق القانون الأساسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_7",
    "titleEn": "Exercise Problem 7: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "تمرين 7: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\n- Calculation & Results: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\n- خطوات الحساب والنتيجة: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Calculate final values: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "حساب الناتج النهائي: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
    "hintAr": "طبق القانون الأساسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_8",
    "titleEn": "Exercise Problem 8: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "تمرين 8: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\n- Calculation & Results: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\n- خطوات الحساب والنتيجة: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Calculate final values: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "حساب الناتج النهائي: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
    "hintAr": "طبق القانون الأساسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_9",
    "titleEn": "Exercise Problem 9: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "تمرين 9: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\n- Calculation & Results: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\n- خطوات الحساب والنتيجة: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Calculate final values: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "حساب الناتج النهائي: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
    "hintAr": "طبق القانون الأساسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_10",
    "titleEn": "Exercise Problem 10: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "تمرين 10: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\n- Calculation & Results: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\n- خطوات الحساب والنتيجة: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Calculate final values: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "حساب الناتج النهائي: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
    "hintAr": "طبق القانون الأساسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_11",
    "titleEn": "Exercise Problem 11: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "تمرين 11: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\n- Calculation & Results: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\n- خطوات الحساب والنتيجة: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Calculate final values: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "حساب الناتج النهائي: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
    "hintAr": "طبق القانون الأساسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_12",
    "titleEn": "Exercise Problem 12: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "تمرين 12: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\n- Calculation & Results: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\n- خطوات الحساب والنتيجة: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Calculate final values: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "حساب الناتج النهائي: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
    "hintAr": "طبق القانون الأساسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_13",
    "titleEn": "Exercise Problem 13: Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism",
    "titleAr": "تمرين 13: بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving Industrial IoT (IIoT) Stacks: Modbus RTU, OPC UA & TSN Determinism. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات إنترنت الأشياء الصناعي IIoT: شبكات Modbus و OPC UA وشبكات TSN الحتمية. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.\n- Calculation & Results: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.\n- خطوات الحساب والنتيجة: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
      "Calculate final values: In a SCZone automated manufacturing plant operating Modbus RTU over RS-485 at 115,200 baud (10 bits per character: 1 start, 8 data, 1 stop), transmitting an 8-byte query requires $t_{query} = \\frac{8 \\times 10}{115200} = 0.694\\text{ ms}$ plus the mandatory $3.5$-character silent framing interval $t_{silent} = \\frac{3.5 \\times 10}{115200} = 0.304\\text{ ms}$, ensuring collision-free half-duplex bus arbitration.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
      "حساب الناتج النهائي: في مصنع مؤتمت بالمنطقة الاقتصادية لقناة السويس يعمل بشبكة Modbus RTU عبر RS-485 بسرعة 115,200 باود، يستغرق إرسال استعلام 8 بايت زمناً $0.694\\text{ ms}$ بالإضافة إلى الفاصل الصامت الإلزامي $0.304\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Time-Sensitive Networking (TSN, IEEE 802.1Qbv) adds time-aware traffic scheduling to standard Ethernet, guaranteeing sub-millisecond bounded latency for mission-critical robotic factory cells.",
    "hintAr": "طبق القانون الأساسي: تضيف تقنية الشبكات الحساسة للوقت (TSN) جدولة زمنية دقيقة لحزم الإيثرنت، مما يضمن زمناً حتمياً لنقل البيانات يقل عن مللي ثانية للخلايا الروبوتية الحساسة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_14",
    "titleEn": "Exercise Problem 14: TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers",
    "titleAr": "تمرين 14: الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving TinyML Edge AI: Quantized 8-Bit Neural Networks on Microcontrollers. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن الذكاء الاصطناعي الطرفي TinyML: تشغيل الشبكات العصبية المكممة بدقة 8 بت على المتحكمات. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.\n- Calculation & Results: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.\n- خطوات الحساب والنتيجة: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
      "Calculate final values: A vibration anomaly detection CNN for industrial turbines has 120,000 parameters. Unquantized FP32 weights consume $120000 \\times 4\\text{ B} = 480\\text{ KB}$ of Flash, exceeding an embedded MCU’s 256KB capacity; INT8 quantization shrinks weights to $120\\text{ KB}$, enabling on-device inference in $18.4\\text{ ms}$ using Cortex-M4 CMSIS-NN kernels.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
      "حساب الناتج النهائي: نموذج شبكة عصبية لكشف أعطال التوربينات يحتوي على 120,000 وزن. يستهلك النموذج بدقة FP32 مساحة $480\\text{ KB}$ متجاوزاً سعة المتحكم، بينما يقلصه تكميم INT8 إلى $120\\text{ KB}$، منفذاً التنبؤ في $18.4\\text{ ms}$.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Post-training quantization converts 32-bit floating-point weights and activations to 8-bit integers using affine mapping: $q = \\text{round}\\left(\\frac{r}{S}\\right) + Z$, reducing RAM/Flash memory footprint by $75\\%$ and utilizing DSP SIMD instructions.",
    "hintAr": "طبق القانون الأساسي: يحول التكميم بعد التدريب الأوزان من دقة 32 بت إلى أعداد صحيحة 8 بت بالعلاقة $q = \\text{round}(r / S) + Z$، مما يخفض متطلبات الذاكرة بنسبة $75\\%$ ويستغل تعليمات SIMD.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "egbac_electronics_iot_ch4_ex_15",
    "titleEn": "Exercise Problem 15: Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF)",
    "titleAr": "تمرين 15: جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving Hardware Root of Trust, Secure Boot & Physically Unclonable Functions (PUF). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن جذر الثقة العتادي، الإقلاع الآمن والوظائف الفيزيائية غير القابلة للاستنساخ PUF. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.\n- Calculation & Results: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).\n- خطوات الحساب والنتيجة: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
      "Calculate final values: SRAM-based Physically Unclonable Functions (PUF) leverage microscopic manufacturing variations in cross-coupled silicon inverter threshold voltages to generate unique 256-bit cryptographic keys on-demand at power-up without ever storing the secret key permanently in non-volatile memory.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
      "حساب الناتج النهائي: تستغل وظائف PUF في ذاكرة SRAM الفروق المجهرية الدقيقة الناتجة عن تصنيع رقائق السيليكون لتوليد مفاتيح تشفير فريدة سعة 256 بت عند بدء التشغيل دون تخزين المفتاح السري في الذاكرة الدائمة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: Secure Boot verifies the digital cryptographic signature (RSA-3072 or ECDSA-P256) of the firmware image stored in Flash against a public key hash permanently burned into one-time programmable (OTP) eFuses.",
    "hintAr": "طبق القانون الأساسي: يتحقق الإقلاع الآمن (Secure Boot) من التوقيع الرقمي للبرمجيات المخزنة في الذاكرة ومطابقته مع المفتاح العام المحروق نهائياً في فيوزات السيليكون غير القابلة لإعادة البرمجة (eFuses).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
