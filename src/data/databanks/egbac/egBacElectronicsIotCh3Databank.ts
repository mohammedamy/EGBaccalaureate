import type { ChapterDatabank } from '../../../types/curriculum';

export const egbac_electronics_iot_ch3Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "egbac_electronics_iot_ch3_easy_1",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 1",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 1",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 1)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 1)",
      "optionsEn": [
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_2",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 2",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 2",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 2)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_3",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 3",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 3",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 3)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 3)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_4",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 4",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 4",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 4)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 4)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_5",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 5",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 5",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 5)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 5)",
      "optionsEn": [
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_6",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 6",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 6",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 6)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 6)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_7",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 7",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 7",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 7)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 7)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_8",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 8",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 8",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 8)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 8)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور)."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_9",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 9",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 9",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 9)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 9)",
      "optionsEn": [
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_10",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 10",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 10",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 10)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 10)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_11",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 11",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 11",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 11)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 11)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_12",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 12",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 12",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 12)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 12)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_13",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 13",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 13",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 13)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 13)",
      "optionsEn": [
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_14",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 14",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 14",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 14)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 14)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_15",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 15",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 15",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 15)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 15)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_16",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 16",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 16",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 16)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 16)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_17",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 17",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 17",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 17)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 17)",
      "optionsEn": [
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_18",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 18",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 18",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 18)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 18)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_19",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 19",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 19",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 19)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 19)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_20",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 20",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 20",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 20)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 20)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور)."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_21",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 21",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 21",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 21)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 21)",
      "optionsEn": [
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_22",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 22",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 22",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 22)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 22)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_23",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 23",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 23",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 23)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 23)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_24",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 24",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 24",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 24)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 24)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_25",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 25",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 25",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 25)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 25)",
      "optionsEn": [
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_26",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 26",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 26",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 26)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 26)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_27",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 27",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 27",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 27)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 27)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_28",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 28",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 28",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 28)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 28)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_29",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 29",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 29",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 29)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 29)",
      "optionsEn": [
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_30",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 30",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 30",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 30)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 30)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_31",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 31",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 31",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 31)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 31)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_32",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 32",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 32",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 32)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 32)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور)."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_33",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 33",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 33",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 33)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 33)",
      "optionsEn": [
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_34",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 34",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 34",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 34)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 34)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_35",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 35",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 35",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 35)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 35)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_36",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 36",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 36",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 36)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 36)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_37",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 37",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 37",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 37)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 37)",
      "optionsEn": [
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_38",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 38",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 38",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 38)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 38)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_39",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 39",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 39",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 39)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 39)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_40",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 40",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 40",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 40)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 40)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_41",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 41",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 41",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 41)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 41)",
      "optionsEn": [
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_42",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 42",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 42",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 42)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 42)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_43",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 43",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 43",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 43)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 43)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_44",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 44",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 44",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 44)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 44)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور)."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_45",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 45",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 45",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 45)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 45)",
      "optionsEn": [
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_46",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 46",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 46",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 46)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 46)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_47",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 47",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 47",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 47)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_48",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 48",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 48",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 48)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 48)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_49",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 49",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 49",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 49)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 49)",
      "optionsEn": [
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_50",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 50",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 50",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 50)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 50)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_51",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 51",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 51",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 51)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 51)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_52",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 52",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 52",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 52)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 52)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_53",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 53",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 53",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 53)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 53)",
      "optionsEn": [
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_54",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 54",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 54",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 54)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 54)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_55",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 55",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 55",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 55)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 55)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_56",
      "titleEn": "[EASY] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Review 56",
      "titleAr": "[مستوى أساسي] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - سؤال 56",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, which of the following statements is physically and analytically correct? (Variant 56)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 56)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور)."
      ],
      "correctAnswer": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerEn": "Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "correctAnswerAr": "يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.",
      "explanationAr": "التحليل العلمي الصحيح: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: Q15 fixed-point representation encodes fractional real numbers in $[-1.0, +0.99997]$ using a 16-bit signed integer with 1 sign bit and 15 fractional bits.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يمثل التنسيق الكسري ذو النقطة الثابتة Q15 الأعداد الحقيقية في المدى $[-1.0, +0.99997]$ باستخدام عدد صحيح بإشارة من 16 بت (بت إشارة و15 بت كسور).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_57",
      "titleEn": "[EASY] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Review 57",
      "titleAr": "[مستوى أساسي] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - سؤال 57",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, which of the following statements is physically and analytically correct? (Variant 57)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 57)",
      "optionsEn": [
        "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerEn": "A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "correctAnswerAr": "ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A Direct Memory Access (DMA) controller transfers large data blocks between memory and peripherals directly across system buses without CPU intervention.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل متحكم النفاذ المباشر للذاكرة (DMA) كتل البيانات الضخمة بين الذاكرة والملحقات مباشرة عبر نواقل النظام دون استهلاك قدرة المعالجة المركزية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "egbac_electronics_iot_ch3_easy_58",
      "titleEn": "[EASY] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Review 58",
      "titleAr": "[مستوى أساسي] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - سؤال 58",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, which of the following statements is physically and analytically correct? (Variant 58)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 58)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerEn": "DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "correctAnswerAr": "تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.",
      "explanationAr": "التحليل العلمي الصحيح: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: DVFS dynamically reduces microcontroller supply voltage and clock frequency during periods of light computational workload to save battery power.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تخفض تقنية DVFS جهد التغذية وتردد ساعة المعالج تلقائياً أثناء فترات انخفاض عبء العمل الحوسبي لتوفير استهلاك طاقة البطارية.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "egbac_electronics_iot_ch3_med_1",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 1",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 1",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 1)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 1)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_2",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 2",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 2",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 2)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_3",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 3",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 3",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 3)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 3)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong)."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_4",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 4",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 4",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 4)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 4)",
      "optionsEn": [
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_5",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 5",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 5",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 5)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 5)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_6",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 6",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 6",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 6)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 6)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_7",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 7",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 7",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 7)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 7)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_8",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 8",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 8",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 8)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 8)",
      "optionsEn": [
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_9",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 9",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 9",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 9)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 9)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_10",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 10",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 10",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 10)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 10)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_11",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 11",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 11",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 11)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 11)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_12",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 12",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 12",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 12)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 12)",
      "optionsEn": [
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_13",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 13",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 13",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 13)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 13)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_14",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 14",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 14",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 14)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 14)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_15",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 15",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 15",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 15)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 15)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong)."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_16",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 16",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 16",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 16)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 16)",
      "optionsEn": [
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_17",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 17",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 17",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 17)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 17)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_18",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 18",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 18",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 18)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 18)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_19",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 19",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 19",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 19)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 19)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_20",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 20",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 20",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 20)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 20)",
      "optionsEn": [
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_21",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 21",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 21",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 21)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 21)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_22",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 22",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 22",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 22)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 22)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_23",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 23",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 23",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 23)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 23)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_24",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 24",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 24",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 24)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 24)",
      "optionsEn": [
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_25",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 25",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 25",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 25)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 25)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_26",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 26",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 26",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 26)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 26)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_27",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 27",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 27",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 27)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 27)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong)."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_28",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 28",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 28",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 28)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 28)",
      "optionsEn": [
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_29",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 29",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 29",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 29)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 29)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_30",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 30",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 30",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 30)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_31",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 31",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 31",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 31)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 31)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_32",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 32",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 32",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 32)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 32)",
      "optionsEn": [
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_33",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 33",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 33",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 33)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 33)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_34",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 34",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 34",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 34)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 34)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_35",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 35",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 35",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 35)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 35)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_36",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 36",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 36",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 36)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 36)",
      "optionsEn": [
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_37",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 37",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 37",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 37)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 37)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_38",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 38",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 38",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 38)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 38)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_39",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 39",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 39",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 39)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 39)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong)."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_40",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 40",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 40",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 40)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 40)",
      "optionsEn": [
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_41",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 41",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 41",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 41)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 41)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_42",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 42",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 42",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 42)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 42)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_43",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 43",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 43",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 43)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 43)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_44",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 44",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 44",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 44)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 44)",
      "optionsEn": [
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_45",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 45",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 45",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 45)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_46",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 46",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 46",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 46)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 46)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_47",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 47",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 47",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 47)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_48",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 48",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 48",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 48)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 48)",
      "optionsEn": [
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_49",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 49",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 49",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 49)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 49)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_50",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 50",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 50",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 50)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 50)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_51",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 51",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 51",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 51)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 51)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong)."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_52",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 52",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 52",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 52)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 52)",
      "optionsEn": [
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_53",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 53",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 53",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 53)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 53)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_54",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 54",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 54",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 54)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 54)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_55",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 55",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 55",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 55)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 55)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_56",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 56",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 56",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 56)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 56)",
      "optionsEn": [
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_57",
      "titleEn": "[MEDIUM] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Analysis 57",
      "titleAr": "[مستوى متوسط] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تحليل 57",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Direct Memory Access (DMA) Zero-CPU Peripheral Streaming, what is the precise analytical formulation or operative principle? (Item 57)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 57)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerEn": "Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "correctAnswerAr": "تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Circular DMA buffers enable continuous streaming of ADC samples and SPI sensor bursts, firing half-transfer and full-transfer interrupts to process data in ping-pong buffers.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تمكن المخازن الدائرية لـ DMA من التدفق المستمر لعينات ADC دون انقطاع، مطلقة مقاطعات نصف النقل والنقل الكامل لمعالجة البيانات بتقنية التخزين المزدوج (Ping-Pong).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_58",
      "titleEn": "[MEDIUM] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Analysis 58",
      "titleAr": "[مستوى متوسط] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تحليل 58",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs, what is the precise analytical formulation or operative principle? (Item 58)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 58)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerEn": "Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "correctAnswerAr": "نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Because CMOS dynamic power is proportional to $V_{DD}^2 f$, halving both voltage and frequency reduces dynamic energy consumption per task by a factor of 4.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: نظراً لأن القدرة الديناميكية تتناسب مع $V_{DD}^2 f$، فإن خفض الجهد والتردد إلى النصف يقلل استهلاك الطاقة للمهمة الواحدة بمقدار 4 أضعاف.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "egbac_electronics_iot_ch3_med_59",
      "titleEn": "[MEDIUM] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Analysis 59",
      "titleAr": "[مستوى متوسط] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تحليل 59",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers, what is the precise analytical formulation or operative principle? (Item 59)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 59)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP."
      ],
      "correctAnswer": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerEn": "Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "correctAnswerAr": "ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Multiplying two Q15 numbers produces a 30-bit fractional result that must be right-shifted by 15 bits and saturated to prevent arithmetic overflow in DSP filtering.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: ينتج عن ضرب عددين بتنسيق Q15 ناتج كسري من 30 بت يتطلب إزاحة لليمين بمقدار 15 خانة وتطبيق التشبع الحسابي لمنع الطفح الرقمي في خوارزميات DSP.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "egbac_electronics_iot_ch3_hots_1",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 1",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 1",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 1)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 1)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_2",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 2",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 2",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 2)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 2)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_3",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 3",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 3",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 3)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 3)",
      "optionsEn": [
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_4",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 4",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 4",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 4)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 4)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_5",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 5",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 5",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 5)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 5)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_6",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 6",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 6",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 6)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 6)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_7",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 7",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 7",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 7)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 7)",
      "optionsEn": [
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_8",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 8",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 8",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 8)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 8)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_9",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 9",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 9",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 9)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 9)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_10",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 10",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 10",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 10)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 10)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction)."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_11",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 11",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 11",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 11)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 11)",
      "optionsEn": [
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_12",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 12",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 12",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 12)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 12)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_13",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 13",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 13",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 13)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 13)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_14",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 14",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 14",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 14)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 14)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_15",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 15",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 15",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 15)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 15)",
      "optionsEn": [
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_16",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 16",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 16",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 16)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 16)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_17",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 17",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 17",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 17)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 17)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_18",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 18",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 18",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 18)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 18)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_19",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 19",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 19",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 19)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 19)",
      "optionsEn": [
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_20",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 20",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 20",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 20)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 20)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_21",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 21",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 21",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 21)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 21)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_22",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 22",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 22",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 22)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 22)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction)."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_23",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 23",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 23",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 23)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 23)",
      "optionsEn": [
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_24",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 24",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 24",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 24)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 24)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_25",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 25",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 25",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 25)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 25)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_26",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 26",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 26",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 26)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 26)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_27",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 27",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 27",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 27)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 27)",
      "optionsEn": [
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_28",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 28",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 28",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 28)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 28)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_29",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 29",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 29",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 29)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 29)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_30",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 30",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 30",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 30)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_31",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 31",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 31",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 31)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 31)",
      "optionsEn": [
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_32",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 32",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 32",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 32)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 32)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_33",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 33",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 33",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 33)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 33)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_34",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 34",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 34",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 34)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 34)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction)."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_35",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 35",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 35",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 35)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 35)",
      "optionsEn": [
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_36",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 36",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 36",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 36)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 36)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_37",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 37",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 37",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 37)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 37)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_38",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 38",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 38",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 38)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 38)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_39",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 39",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 39",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 39)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 39)",
      "optionsEn": [
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_40",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 40",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 40",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 40)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 40)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_41",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 41",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 41",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 41)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 41)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_42",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 42",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 42",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 42)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 42)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_43",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 43",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 43",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 43)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 43)",
      "optionsEn": [
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_44",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 44",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 44",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 44)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 44)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_45",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 45",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 45",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 45)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_46",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 46",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 46",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 46)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 46)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction)."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_47",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 47",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 47",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 47)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 47)",
      "optionsEn": [
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_48",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 48",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 48",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 48)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 48)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_49",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 49",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 49",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 49)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 49)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_50",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 50",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 50",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 50)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 50)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_51",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 51",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 51",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 51)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 51)",
      "optionsEn": [
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_52",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 52",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 52",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 52)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 52)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_53",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 53",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 53",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 53)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 53)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_54",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 54",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 54",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 54)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 54)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_55",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 55",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 55",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 55)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 55)",
      "optionsEn": [
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_56",
      "titleEn": "[HOTS] Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers - Evaluation 56",
      "titleAr": "[تفكير عليا] معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت - تقييم 56",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers: (Problem 56)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت: (مسألة 56)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerEn": "To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "correctAnswerAr": "لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Fixed-Point Q15 DSP Audio/Sensor Filtering on Microcontrollers.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: To multiply $x = 0.5$ (Q15: $0.5 \\times 32768 = 16384$) by filter coefficient $h = 0.75$ (Q15: $0.75 \\times 32768 = 24576$), integer product is $16384 \\times 24576 = 402,653,184$. Right-shifting by 15 gives $\\frac{402653184}{32768} = 12288$, exactly representing $12288 / 32768 = 0.375$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معالجة الإشارات الرقمية بالتمثيل الثابت Q15 لترشيح بيانات الحساسات والصوت.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لضرب $x = 0.5$ ($16384$ بتنسيق Q15) في معامل $h = 0.75$ ($24576$ بتنسيق Q15)، يبلغ حاصل الضرب الصحيح $402653184$. وبالإزاحة 15 بت ينتج $12288$، وهو ما يمثل بدقة $12288 / 32768 = 0.375$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_57",
      "titleEn": "[HOTS] Direct Memory Access (DMA) Zero-CPU Peripheral Streaming - Evaluation 57",
      "titleAr": "[تفكير عليا] النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج - تقييم 57",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Direct Memory Access (DMA) Zero-CPU Peripheral Streaming: (Problem 57)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج: (مسألة 57)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerEn": "Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "correctAnswerAr": "أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Direct Memory Access (DMA) Zero-CPU Peripheral Streaming.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: Sampling 4 ADC channels at $250\\text{ kS/s}$ with 16-bit resolution generates $4 \\times 250\\text{k} \\times 2\\text{ B} = 2.0\\text{ MB/s}$ of telemetry. Servicing each sample via CPU interrupt would require 1 million ISR calls/sec consuming $>80\\%$ of a 100MHz core, whereas DMA reduces CPU overhead to $<0.5\\%$ for block-level processing.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ النفاذ المباشر للذاكرة DMA لتدفق بيانات الحساسات دون إشغال المعالج.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: أخذ عينات من 4 قنوات ADC بمعدل $250\\text{ kS/s}$ بدقة 16-بت يولد تدفق بيانات $2.0\\text{ MB/s}$. وتتطلب معالجة كل عينة بمقاطعة عادية مليون استدعاء/ثانية مستهلكة $>80\\%$ من المعالج، بينما يخفضها DMA إلى أقل من $0.5\\%$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "egbac_electronics_iot_ch3_hots_58",
      "titleEn": "[HOTS] Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs - Evaluation 58",
      "titleAr": "[تفكير عليا] التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة - تقييم 58",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs: (Problem 58)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة: (مسألة 58)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction)."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$."
      ],
      "correctAnswer": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerEn": "A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "correctAnswerAr": "عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Dynamic Voltage and Frequency Scaling (DVFS) in Low-Power IoT SoCs.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A sensor node running at $V_1 = 3.3\\text{ V}, f_1 = 80\\text{ MHz}$ consumes $P_1 = 50\\text{ mW}$. Scaling down to $V_2 = 1.8\\text{ V}, f_2 = 20\\text{ MHz}$ reduces power to $P_2 = P_1 \\left(\\frac{V_2}{V_1}\\right)^2 \\left(\\frac{f_2}{f_1}\\right) = 50 \\times \\left(\\frac{1.8}{3.3}\\right)^2 \\times \\left(\\frac{20}{80}\\right) = 50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ ($92.6\\%$ power reduction).."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ التدريج الديناميكي للجهد والتردد (DVFS) في معالجات إنترنت الأشياء منخفضة الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة استشعار تستهلك $50\\text{ mW}$ عند $3.3\\text{ V}$ و$80\\text{ MHz}$. بخفض التشغيل إلى $1.8\\text{ V}$ و$20\\text{ MHz}$ تنخفض القدرة إلى $50 \\times 0.2975 \\times 0.25 \\approx 3.72\\text{ mW}$ بتوفير في الطاقة قدره $92.6\\%$.."
      ],
      "difficulty": "hots"
    }
  ]
};
