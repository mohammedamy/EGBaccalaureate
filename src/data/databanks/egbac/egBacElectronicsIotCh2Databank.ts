import type { ChapterDatabank } from '../../../types/curriculum';

export const egbac_electronics_iot_ch2Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "egbac_electronics_iot_ch2_easy_1",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 1",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 1",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 1)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 1)",
      "optionsEn": [
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_2",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 2",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 2",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 2)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_3",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 3",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 3",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 3)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 3)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_4",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 4",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 4",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 4)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 4)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_5",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 5",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 5",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 5)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 5)",
      "optionsEn": [
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_6",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 6",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 6",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 6)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 6)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_7",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 7",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 7",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 7)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 7)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_8",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 8",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 8",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 8)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 8)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_9",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 9",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 9",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 9)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 9)",
      "optionsEn": [
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_10",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 10",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 10",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 10)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 10)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_11",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 11",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 11",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 11)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 11)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_12",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 12",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 12",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 12)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 12)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_13",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 13",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 13",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 13)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 13)",
      "optionsEn": [
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_14",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 14",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 14",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 14)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 14)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_15",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 15",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 15",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 15)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 15)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_16",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 16",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 16",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 16)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 16)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_17",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 17",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 17",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 17)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 17)",
      "optionsEn": [
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_18",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 18",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 18",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 18)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 18)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_19",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 19",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 19",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 19)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 19)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_20",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 20",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 20",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 20)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 20)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_21",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 21",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 21",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 21)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 21)",
      "optionsEn": [
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_22",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 22",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 22",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 22)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 22)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_23",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 23",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 23",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 23)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 23)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_24",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 24",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 24",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 24)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 24)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_25",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 25",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 25",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 25)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 25)",
      "optionsEn": [
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_26",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 26",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 26",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 26)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 26)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_27",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 27",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 27",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 27)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 27)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_28",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 28",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 28",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 28)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 28)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_29",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 29",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 29",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 29)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 29)",
      "optionsEn": [
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_30",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 30",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 30",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 30)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 30)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_31",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 31",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 31",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 31)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 31)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_32",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 32",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 32",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 32)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 32)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_33",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 33",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 33",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 33)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 33)",
      "optionsEn": [
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_34",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 34",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 34",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 34)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 34)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_35",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 35",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 35",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 35)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 35)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_36",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 36",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 36",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 36)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 36)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_37",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 37",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 37",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 37)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 37)",
      "optionsEn": [
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_38",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 38",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 38",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 38)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 38)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_39",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 39",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 39",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 39)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 39)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_40",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 40",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 40",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 40)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 40)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_41",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 41",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 41",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 41)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 41)",
      "optionsEn": [
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_42",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 42",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 42",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 42)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 42)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_43",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 43",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 43",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 43)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 43)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_44",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 44",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 44",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 44)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 44)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_45",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 45",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 45",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 45)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 45)",
      "optionsEn": [
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_46",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 46",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 46",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 46)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 46)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_47",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 47",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 47",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 47)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_48",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 48",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 48",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 48)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 48)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_49",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 49",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 49",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 49)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 49)",
      "optionsEn": [
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_50",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 50",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 50",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 50)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 50)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_51",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 51",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 51",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 51)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 51)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_52",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 52",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 52",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 52)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 52)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_53",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 53",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 53",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 53)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 53)",
      "optionsEn": [
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_54",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 54",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 54",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 54)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 54)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_55",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 55",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 55",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 55)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 55)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_56",
      "titleEn": "[EASY] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Review 56",
      "titleAr": "[مستوى أساسي] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - سؤال 56",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, which of the following statements is physically and analytically correct? (Variant 56)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 56)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة."
      ],
      "correctAnswer": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerEn": "Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "correctAnswerAr": "زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.",
      "explanationAr": "التحليل العلمي الصحيح: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Setup time ($t_{su}$) is the minimum time data must be stable before the clock edge, while hold time ($t_h$) is the minimum time data must remain stable after the clock edge.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: زمن التجهيز ($t_{su}$) هو أقل زمن يجب أن تستقر فيه البيانات قبل حافة الساعة، بينما زمن التثبيت ($t_h$) هو أقل زمن لبقائها مستقرة بعد حافة الساعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_57",
      "titleEn": "[EASY] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Review 57",
      "titleAr": "[مستوى أساسي] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - سؤال 57",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, which of the following statements is physically and analytically correct? (Variant 57)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 57)",
      "optionsEn": [
        "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerEn": "Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "correctAnswerAr": "تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.",
      "explanationAr": "التحليل العلمي الصحيح: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Pipelining divides a complex combinational processing pipeline into multiple clocked stages, dramatically increasing system throughput at the cost of slight latency.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تقسم تقنية خطوط الأنابيب (Pipelining) المعالجة التوافقية المعقدة إلى مراحل متزامنة بنبضات الساعة، مما يرفع معدل الإنتاجية الإجمالي بشكل كبير.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch2_easy_58",
      "titleEn": "[EASY] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Review 58",
      "titleAr": "[مستوى أساسي] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - سؤال 58",
      "questionEn": "[Electronics & IoT Core Concept] Regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, which of the following statements is physically and analytically correct? (Variant 58)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 58)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerEn": "FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "correctAnswerAr": "تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.",
      "explanationAr": "التحليل العلمي الصحيح: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: FPGAs implement arbitrary combinational logic functions using Look-Up Tables (LUTs), where an $n$-input LUT can implement any of the $2^{2^n}$ possible boolean functions.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تنفذ شرائح FPGA الدوال المنطقية التوافقية باستخدام جداول البحث (LUTs)، حيث يستطيع جدول بحث بـ $n$ مدخلات تنفيذ أي دالة منطقية من بين $2^{2^n}$ دالة ممكنة.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "egbac_electronics_iot_ch2_med_1",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 1",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 1",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 1)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 1)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_2",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 2",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 2",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 2)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_3",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 3",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 3",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 3)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 3)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling)."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_4",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 4",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 4",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 4)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 4)",
      "optionsEn": [
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_5",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 5",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 5",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 5)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 5)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_6",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 6",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 6",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 6)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 6)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_7",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 7",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 7",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 7)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 7)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_8",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 8",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 8",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 8)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 8)",
      "optionsEn": [
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_9",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 9",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 9",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 9)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 9)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_10",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 10",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 10",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 10)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 10)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_11",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 11",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 11",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 11)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 11)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_12",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 12",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 12",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 12)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 12)",
      "optionsEn": [
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_13",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 13",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 13",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 13)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 13)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_14",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 14",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 14",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 14)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 14)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_15",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 15",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 15",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 15)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 15)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling)."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_16",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 16",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 16",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 16)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 16)",
      "optionsEn": [
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_17",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 17",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 17",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 17)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 17)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_18",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 18",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 18",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 18)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 18)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_19",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 19",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 19",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 19)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 19)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_20",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 20",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 20",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 20)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 20)",
      "optionsEn": [
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_21",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 21",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 21",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 21)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 21)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_22",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 22",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 22",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 22)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 22)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_23",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 23",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 23",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 23)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 23)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_24",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 24",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 24",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 24)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 24)",
      "optionsEn": [
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_25",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 25",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 25",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 25)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 25)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_26",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 26",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 26",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 26)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 26)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_27",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 27",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 27",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 27)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 27)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling)."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_28",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 28",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 28",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 28)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 28)",
      "optionsEn": [
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_29",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 29",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 29",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 29)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 29)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_30",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 30",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 30",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 30)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_31",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 31",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 31",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 31)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 31)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_32",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 32",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 32",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 32)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 32)",
      "optionsEn": [
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_33",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 33",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 33",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 33)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 33)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_34",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 34",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 34",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 34)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 34)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_35",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 35",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 35",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 35)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 35)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_36",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 36",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 36",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 36)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 36)",
      "optionsEn": [
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_37",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 37",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 37",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 37)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 37)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_38",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 38",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 38",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 38)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 38)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_39",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 39",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 39",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 39)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 39)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling)."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_40",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 40",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 40",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 40)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 40)",
      "optionsEn": [
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_41",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 41",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 41",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 41)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 41)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_42",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 42",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 42",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 42)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 42)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_43",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 43",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 43",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 43)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 43)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_44",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 44",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 44",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 44)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 44)",
      "optionsEn": [
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_45",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 45",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 45",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 45)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_46",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 46",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 46",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 46)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 46)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_47",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 47",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 47",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 47)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_48",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 48",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 48",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 48)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 48)",
      "optionsEn": [
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_49",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 49",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 49",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 49)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 49)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_50",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 50",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 50",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 50)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 50)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_51",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 51",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 51",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 51)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 51)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling)."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_52",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 52",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 52",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 52)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 52)",
      "optionsEn": [
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_53",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 53",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 53",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 53)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 53)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_54",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 54",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 54",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 54)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 54)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_55",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 55",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 55",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 55)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 55)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_56",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 56",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 56",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 56)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 56)",
      "optionsEn": [
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_57",
      "titleEn": "[MEDIUM] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Analysis 57",
      "titleAr": "[مستوى متوسط] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تحليل 57",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination, what is the precise analytical formulation or operative principle? (Item 57)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 57)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerEn": "Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "correctAnswerAr": "تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Data hazards in pipelined execution are resolved using register operand forwarding (bypassing), pipeline stalling (inserting bubbles), or out-of-order reordering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُعالج مخاطر تعارض البيانات (Data Hazards) في المعالجات المتسلسلة باستخدام تمرير المعاملات (Forwarding)، أو تجميد خط المعالجة بنبضات خاملة (Stalling).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_58",
      "titleEn": "[MEDIUM] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Analysis 58",
      "titleAr": "[مستوى متوسط] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تحليل 58",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic, what is the precise analytical formulation or operative principle? (Item 58)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 58)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerEn": "Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "correctAnswerAr": "تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Modern 6-LUT architectures can either implement any single 6-input boolean function or fracture into two independent 5-input functions sharing common inputs, backed by dedicated fast lookahead carry chains.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تستطيع معمارية 6-LUT الحديثة تنفيذ دالة منطقية سداسية المداخل، أو الانقسام إلى دالتين خماسيتي المداخل بمداخل مشتركة، مدعومة بسلاسل حمل سريعة لعمليات الجمع الحسابية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch2_med_59",
      "titleEn": "[MEDIUM] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Analysis 59",
      "titleAr": "[مستوى متوسط] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تحليل 59",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints, what is the precise analytical formulation or operative principle? (Item 59)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 59)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$."
      ],
      "correctAnswer": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerEn": "The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctAnswerAr": "يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The setup timing constraint requires $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$, while the hold timing constraint requires $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يفرض قيد زمن التجهيز أن يكون $T_{clk} \\ge t_{cq} + t_{comb,max} + t_{su} - t_{skew}$، بينما يشترط قيد زمن التثبيت أن يتحقق $t_{cq} + t_{comb,min} \\ge t_h + t_{skew}$.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "egbac_electronics_iot_ch2_hots_1",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 1",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 1",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 1)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 1)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_2",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 2",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 2",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 2)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 2)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_3",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 3",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 3",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 3)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 3)",
      "optionsEn": [
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_4",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 4",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 4",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 4)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 4)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_5",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 5",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 5",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 5)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 5)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_6",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 6",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 6",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 6)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 6)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase)."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_7",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 7",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 7",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 7)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 7)",
      "optionsEn": [
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_8",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 8",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 8",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 8)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 8)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_9",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 9",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 9",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 9)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 9)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_10",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 10",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 10",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 10)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 10)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_11",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 11",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 11",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 11)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 11)",
      "optionsEn": [
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_12",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 12",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 12",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 12)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 12)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_13",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 13",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 13",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 13)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 13)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_14",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 14",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 14",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 14)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 14)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_15",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 15",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 15",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 15)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 15)",
      "optionsEn": [
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_16",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 16",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 16",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 16)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 16)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_17",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 17",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 17",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 17)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 17)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_18",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 18",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 18",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 18)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 18)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase)."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_19",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 19",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 19",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 19)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 19)",
      "optionsEn": [
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_20",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 20",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 20",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 20)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 20)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_21",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 21",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 21",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 21)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 21)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_22",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 22",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 22",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 22)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 22)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_23",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 23",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 23",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 23)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 23)",
      "optionsEn": [
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_24",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 24",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 24",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 24)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 24)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_25",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 25",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 25",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 25)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 25)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_26",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 26",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 26",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 26)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 26)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_27",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 27",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 27",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 27)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 27)",
      "optionsEn": [
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_28",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 28",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 28",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 28)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 28)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_29",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 29",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 29",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 29)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 29)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_30",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 30",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 30",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 30)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase)."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_31",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 31",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 31",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 31)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 31)",
      "optionsEn": [
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_32",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 32",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 32",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 32)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 32)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_33",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 33",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 33",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 33)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 33)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_34",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 34",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 34",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 34)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 34)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_35",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 35",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 35",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 35)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 35)",
      "optionsEn": [
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_36",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 36",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 36",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 36)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 36)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_37",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 37",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 37",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 37)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 37)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_38",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 38",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 38",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 38)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 38)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_39",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 39",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 39",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 39)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 39)",
      "optionsEn": [
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_40",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 40",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 40",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 40)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 40)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_41",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 41",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 41",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 41)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 41)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_42",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 42",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 42",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 42)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 42)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase)."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_43",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 43",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 43",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 43)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 43)",
      "optionsEn": [
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_44",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 44",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 44",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 44)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 44)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_45",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 45",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 45",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 45)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_46",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 46",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 46",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 46)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 46)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_47",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 47",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 47",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 47)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 47)",
      "optionsEn": [
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_48",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 48",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 48",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 48)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 48)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_49",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 49",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 49",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 49)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 49)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_50",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 50",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 50",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 50)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 50)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_51",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 51",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 51",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 51)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 51)",
      "optionsEn": [
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_52",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 52",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 52",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 52)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 52)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_53",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 53",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 53",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 53)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 53)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_54",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 54",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 54",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 54)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 54)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase)."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_55",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 55",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 55",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 55)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 55)",
      "optionsEn": [
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_56",
      "titleEn": "[HOTS] Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints - Evaluation 56",
      "titleAr": "[تفكير عليا] التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة - تقييم 56",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints: (Problem 56)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة: (مسألة 56)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerEn": "In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "correctAnswerAr": "في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Static Timing Analysis (STA): Setup, Hold & Clock Jitter Constraints.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a digital ASIC with clock-to-Q delay $t_{cq} = 0.35\\text{ ns}$, setup time $t_{su} = 0.20\\text{ ns}$, hold time $t_h = 0.10\\text{ ns}$, maximum clock skew $t_{skew} = 0.08\\text{ ns}$, and maximum combinational path $t_{comb} = 1.45\\text{ ns}$, the minimum clock period is $T_{clk,min} = 0.35 + 1.45 + 0.20 - 0.08 = 1.92\\text{ ns}$, corresponding to maximum frequency $f_{max} = \\frac{1}{1.92\\text{ ns}} \\approx 520.8\\text{ MHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التحليل الزمني الساكن (STA): قيود أزمنة التجهيز والتثبيت واضطراب الساعة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في دائرة ASIC بمعالم $t_{cq} = 0.35\\text{ ns}$، $t_{su} = 0.20\\text{ ns}$، $t_{skew} = 0.08\\text{ ns}$، وتأخير توافقي $1.45\\text{ ns}$، فإن أقل زمن دورة للساعة هو $1.92\\text{ ns}$، بأقصى تردد عمل $520.8\\text{ MHz}$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_57",
      "titleEn": "[HOTS] Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination - Evaluation 57",
      "titleAr": "[تفكير عليا] تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ - تقييم 57",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination: (Problem 57)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ: (مسألة 57)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerEn": "Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "correctAnswerAr": "إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Verilog/VHDL RTL Pipelined Datapath Design & Hazard Elimination.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Dividing an unpipelined 12ns cryptographic AES calculation block into a 4-stage balanced pipeline with 0.4ns register overhead per stage reduces stage delay to $\\frac{12}{4} + 0.4 = 3.4\\text{ ns}$, boosting operating frequency from $83.3\\text{ MHz}$ to $294.1\\text{ MHz}$ ($3.5\\times$ throughput increase).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تصميم مسارات البيانات المتسلسلة (Pipelines) بلغة Verilog وتفادي مخاطر التنفيذ.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: إن تقسيم كتلة تشفير AES تستغرق $12\\text{ ns}$ إلى خط أنابيب من 4 مراحل متوازنة بتأخير سجل $0.4\\text{ ns}$ يخفض زمن المرحلة إلى $3.4\\text{ ns}$، مما يرفع تردد العمل من $83.3\\text{ MHz}$ إلى $294.1\\text{ MHz}$ بمعدل إنتاجية $3.5$ أضعاف.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch2_hots_58",
      "titleEn": "[HOTS] FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic - Evaluation 58",
      "titleAr": "[تفكير عليا] الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT - تقييم 58",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic: (Problem 58)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT: (مسألة 58)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$."
      ],
      "correctAnswer": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerEn": "A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "correctAnswerAr": "مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for FPGA Configurable Logic Blocks (CLBs), 6-LUTs & Carry Logic.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 32-bit ripple-carry adder mapped to FPGA dedicated carry-lookahead logic (propagation delay $t_{carry} = 0.015\\text{ ns}$ per bit plus LUT setup $t_{LUT} = 0.25\\text{ ns}$) achieves total addition latency $t_{add} = 0.25 + (32 \\times 0.015) = 0.73\\text{ ns}$, supporting clock frequencies exceeding $1.3\\text{ GHz}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ الكتل المنطقية القابلة للبرمجة (CLBs) في شرائح FPGA وجداول البحث 6-LUT.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: مجمع ثنائي 32-بت على مسارات الحمل السريعة بشريحة FPGA بزمن انتشار $0.015\\text{ ns}$ للبت وتأخير جدول $0.25\\text{ ns}$ يحقق زمناً إجمالياً $t = 0.73\\text{ ns}$، مما يتيح ترددات ساعة تفوق $1.3\\text{ GHz}$.."
      ],
      "difficulty": "hots"
    }
  ]
};
