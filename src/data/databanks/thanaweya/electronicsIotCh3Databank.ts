import type { ChapterDatabank } from '../../../types/curriculum';

export const th_electronics_iot_ch3Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "th_electronics_iot_ch3_easy_1",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 1",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 1",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 1)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 1)",
      "optionsEn": [
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_2",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 2",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 2",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 2)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_3",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 3",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 3",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 3)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 3)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_4",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 4",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 4",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 4)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 4)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_5",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 5",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 5",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 5)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 5)",
      "optionsEn": [
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_6",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 6",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 6",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 6)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 6)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_7",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 7",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 7",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 7)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 7)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_8",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 8",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 8",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 8)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 8)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_9",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 9",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 9",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 9)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 9)",
      "optionsEn": [
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_10",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 10",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 10",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 10)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 10)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_11",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 11",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 11",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 11)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 11)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_12",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 12",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 12",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 12)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 12)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$)."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$)."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_13",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 13",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 13",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 13)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 13)",
      "optionsEn": [
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_14",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 14",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 14",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 14)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 14)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_15",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 15",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 15",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 15)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 15)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_16",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 16",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 16",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 16)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 16)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_17",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 17",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 17",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 17)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 17)",
      "optionsEn": [
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_18",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 18",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 18",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 18)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 18)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_19",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 19",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 19",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 19)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 19)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_20",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 20",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 20",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 20)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 20)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_21",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 21",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 21",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 21)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 21)",
      "optionsEn": [
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_22",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 22",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 22",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 22)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 22)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_23",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 23",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 23",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 23)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 23)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_24",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 24",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 24",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 24)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 24)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$)."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$)."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_25",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 25",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 25",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 25)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 25)",
      "optionsEn": [
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_26",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 26",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 26",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 26)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 26)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_27",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 27",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 27",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 27)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 27)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_28",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 28",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 28",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 28)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 28)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_29",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 29",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 29",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 29)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 29)",
      "optionsEn": [
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_30",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 30",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 30",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 30)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 30)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_31",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 31",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 31",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 31)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 31)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_32",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 32",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 32",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 32)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 32)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_33",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 33",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 33",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 33)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 33)",
      "optionsEn": [
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_34",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 34",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 34",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 34)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 34)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_35",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 35",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 35",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 35)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 35)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_36",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 36",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 36",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 36)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 36)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$)."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$)."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_37",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 37",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 37",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 37)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 37)",
      "optionsEn": [
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_38",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 38",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 38",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 38)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 38)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_39",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 39",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 39",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 39)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 39)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_40",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 40",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 40",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 40)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 40)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_41",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 41",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 41",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 41)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 41)",
      "optionsEn": [
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_42",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 42",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 42",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 42)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 42)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_43",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 43",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 43",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 43)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 43)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_44",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 44",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 44",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 44)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 44)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_45",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 45",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 45",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 45)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 45)",
      "optionsEn": [
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_46",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 46",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 46",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 46)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 46)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_47",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 47",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 47",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 47)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_48",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 48",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 48",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 48)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 48)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$)."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$)."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_49",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 49",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 49",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 49)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 49)",
      "optionsEn": [
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_50",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 50",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 50",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 50)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 50)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_51",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 51",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 51",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 51)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 51)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_52",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 52",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 52",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 52)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 52)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_53",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 53",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 53",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 53)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 53)",
      "optionsEn": [
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_54",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 54",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 54",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 54)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 54)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_55",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 55",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 55",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 55)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 55)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_56",
      "titleEn": "[EASY] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Review 56",
      "titleAr": "[مستوى أساسي] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - سؤال 56",
      "questionEn": "[Electronics & IoT Core Concept] Regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping, which of the following statements is physically and analytically correct? (Variant 56)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 56)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت."
      ],
      "correctAnswer": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerEn": "The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "correctAnswerAr": "تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.",
      "explanationAr": "التحليل العلمي الصحيح: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: The ARM Cortex-M microcontroller core features a 32-bit RISC architecture, Harvard bus structure, Thumb-2 instruction set, and a 4GB linear memory address space.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تتميز معالجات ARM Cortex-M الدقيقة بمعمارية RISC ذات 32 بت، وناقل هارفارد، وطاقم تعليمات Thumb-2، ومساحة عنونة خطية موحدة بسعة 4 جيجابايت.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_57",
      "titleEn": "[EASY] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Review 57",
      "titleAr": "[مستوى أساسي] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - سؤال 57",
      "questionEn": "[Electronics & IoT Core Concept] Regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, which of the following statements is physically and analytically correct? (Variant 57)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 57)",
      "optionsEn": [
        "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerEn": "A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "correctAnswerAr": "يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).",
      "explanationAr": "التحليل العلمي الصحيح: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: A 12-bit Successive Approximation Register (SAR) ADC converts an analog voltage input into a discrete digital number between 0 and $4095$ ($2^{12} - 1$).."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يحول محول الإشارات التناظرية الرقمية (SAR) بدقة 12 بت جهد الدخل التناظري إلى قيمة رقمية بين 0 و 4095 ($2^{12} - 1$).."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch3_easy_58",
      "titleEn": "[EASY] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Review 58",
      "titleAr": "[مستوى أساسي] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - سؤال 58",
      "questionEn": "[Electronics & IoT Core Concept] Regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, which of the following statements is physically and analytically correct? (Variant 58)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 58)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerEn": "An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "correctAnswerAr": "ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.",
      "explanationAr": "التحليل العلمي الصحيح: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: An edge-triggered D flip-flop transfers the data input ($D$) to the output ($Q$) on the rising edge of the clock signal and holds the state stable until the next clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: ينقل قلاب D الحافيّ إشارة الدخل ($D$) إلى الخرج ($Q$) عند الحافة الصاعدة لنبضة الساعة، ويحتفظ بالحالة مستقرة حتى دورة الساعة التالية.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "th_electronics_iot_ch3_med_1",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 1",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 1",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 1)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 1)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_2",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 2",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 2",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 2)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_3",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 3",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 3",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 3)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 3)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_4",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 4",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 4",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 4)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 4)",
      "optionsEn": [
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_5",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 5",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 5",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 5)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 5)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_6",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 6",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 6",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 6)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 6)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_7",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 7",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 7",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 7)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 7)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_8",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 8",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 8",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 8)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 8)",
      "optionsEn": [
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_9",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 9",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 9",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 9)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 9)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_10",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 10",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 10",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 10)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 10)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_11",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 11",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 11",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 11)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 11)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_12",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 12",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 12",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 12)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 12)",
      "optionsEn": [
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_13",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 13",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 13",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 13)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 13)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_14",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 14",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 14",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 14)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 14)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_15",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 15",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 15",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 15)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 15)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_16",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 16",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 16",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 16)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 16)",
      "optionsEn": [
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_17",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 17",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 17",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 17)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 17)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_18",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 18",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 18",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 18)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 18)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_19",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 19",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 19",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 19)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 19)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_20",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 20",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 20",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 20)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 20)",
      "optionsEn": [
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_21",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 21",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 21",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 21)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 21)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_22",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 22",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 22",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 22)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 22)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_23",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 23",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 23",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 23)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 23)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_24",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 24",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 24",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 24)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 24)",
      "optionsEn": [
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_25",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 25",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 25",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 25)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 25)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_26",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 26",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 26",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 26)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 26)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_27",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 27",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 27",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 27)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 27)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_28",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 28",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 28",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 28)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 28)",
      "optionsEn": [
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_29",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 29",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 29",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 29)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 29)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_30",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 30",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 30",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 30)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_31",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 31",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 31",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 31)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 31)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_32",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 32",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 32",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 32)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 32)",
      "optionsEn": [
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_33",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 33",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 33",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 33)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 33)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_34",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 34",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 34",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 34)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 34)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_35",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 35",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 35",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 35)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 35)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_36",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 36",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 36",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 36)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 36)",
      "optionsEn": [
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_37",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 37",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 37",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 37)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 37)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_38",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 38",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 38",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 38)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 38)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_39",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 39",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 39",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 39)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 39)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_40",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 40",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 40",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 40)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 40)",
      "optionsEn": [
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_41",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 41",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 41",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 41)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 41)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_42",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 42",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 42",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 42)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 42)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_43",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 43",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 43",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 43)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 43)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_44",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 44",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 44",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 44)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 44)",
      "optionsEn": [
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_45",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 45",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 45",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 45)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_46",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 46",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 46",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 46)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 46)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_47",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 47",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 47",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 47)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_48",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 48",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 48",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 48)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 48)",
      "optionsEn": [
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_49",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 49",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 49",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 49)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 49)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_50",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 50",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 50",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 50)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 50)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_51",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 51",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 51",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 51)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 51)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_52",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 52",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 52",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 52)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 52)",
      "optionsEn": [
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_53",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 53",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 53",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 53)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 53)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_54",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 54",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 54",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 54)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 54)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_55",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 55",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 55",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 55)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 55)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_56",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 56",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 56",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 56)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 56)",
      "optionsEn": [
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_57",
      "titleEn": "[MEDIUM] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Analysis 57",
      "titleAr": "[مستوى متوسط] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تحليل 57",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization, what is the precise analytical formulation or operative principle? (Item 57)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 57)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerEn": "The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctAnswerAr": "تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The voltage resolution (Least Significant Bit, LSB) of an ADC with reference voltage $V_{ref}$ is $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُحسب دقة قياس الجهد (أقل بت دلالة LSB) لمحول بجهد مرجعي $V_{ref}$ بالعلاقة $\\text{LSB} = \\frac{V_{ref}}{2^N - 1} \\approx \\frac{V_{ref}}{4095}$.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_58",
      "titleEn": "[MEDIUM] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Analysis 58",
      "titleAr": "[مستوى متوسط] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تحليل 58",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters, what is the precise analytical formulation or operative principle? (Item 58)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 58)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerEn": "A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "correctAnswerAr": "يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: A 4-bit synchronous binary up-counter uses 4 flip-flops where each stage toggles when all preceding least-significant bits are 1 ($T_i = Q_0 Q_1 \\dots Q_{i-1}$), eliminating ripple delay.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يستخدم العداد الثنائي المتزامن المكون من 4 بتات قلابات تتبدل حالتها عندما تكون جميع البتات السابقة الأقل أهمية مساوية لـ 1، متفادياً تأخير العدادات التموجية.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch3_med_59",
      "titleEn": "[MEDIUM] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Analysis 59",
      "titleAr": "[مستوى متوسط] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تحليل 59",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of ARM Cortex-M Microcontroller Architecture & Memory Mapping, what is the precise analytical formulation or operative principle? (Item 59)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 59)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C."
      ],
      "correctAnswer": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerEn": "Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "correctAnswerAr": "تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: Peripherals are memory-mapped into the address range `0x40000000` to `0x5FFFFFFF`, allowing control of GPIO pins, timers, and serial buses via direct 32-bit pointer dereferencing in C.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: تُربط الملحقات بخريطة الذاكرة في المدى من `0x40000000` إلى `0x5FFFFFFF`، مما يتيح التحكم في منافذ GPIO والمؤقتات بالتعامل المباشر مع المؤشرات بلغة C.."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "th_electronics_iot_ch3_hots_1",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 1",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 1",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 1)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 1)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_2",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 2",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 2",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 2)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 2)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_3",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 3",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 3",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 3)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 3)",
      "optionsEn": [
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_4",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 4",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 4",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 4)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 4)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_5",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 5",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 5",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 5)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 5)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_6",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 6",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 6",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 6)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 6)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_7",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 7",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 7",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 7)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 7)",
      "optionsEn": [
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_8",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 8",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 8",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 8)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 8)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_9",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 9",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 9",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 9)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 9)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_10",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 10",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 10",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 10)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 10)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_11",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 11",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 11",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 11)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 11)",
      "optionsEn": [
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_12",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 12",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 12",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 12)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 12)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_13",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 13",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 13",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 13)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 13)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_14",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 14",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 14",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 14)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 14)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_15",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 15",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 15",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 15)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 15)",
      "optionsEn": [
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_16",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 16",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 16",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 16)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 16)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_17",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 17",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 17",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 17)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 17)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_18",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 18",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 18",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 18)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 18)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_19",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 19",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 19",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 19)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 19)",
      "optionsEn": [
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_20",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 20",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 20",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 20)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 20)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_21",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 21",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 21",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 21)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 21)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_22",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 22",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 22",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 22)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 22)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_23",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 23",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 23",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 23)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 23)",
      "optionsEn": [
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_24",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 24",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 24",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 24)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 24)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_25",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 25",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 25",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 25)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 25)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_26",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 26",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 26",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 26)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 26)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_27",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 27",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 27",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 27)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 27)",
      "optionsEn": [
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_28",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 28",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 28",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 28)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 28)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_29",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 29",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 29",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 29)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 29)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_30",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 30",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 30",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 30)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_31",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 31",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 31",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 31)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 31)",
      "optionsEn": [
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_32",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 32",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 32",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 32)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 32)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_33",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 33",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 33",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 33)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 33)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_34",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 34",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 34",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 34)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 34)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_35",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 35",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 35",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 35)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 35)",
      "optionsEn": [
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_36",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 36",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 36",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 36)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 36)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_37",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 37",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 37",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 37)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 37)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_38",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 38",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 38",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 38)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 38)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_39",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 39",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 39",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 39)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 39)",
      "optionsEn": [
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_40",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 40",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 40",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 40)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 40)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_41",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 41",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 41",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 41)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 41)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_42",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 42",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 42",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 42)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 42)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_43",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 43",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 43",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 43)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 43)",
      "optionsEn": [
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_44",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 44",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 44",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 44)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 44)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_45",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 45",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 45",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 45)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_46",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 46",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 46",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 46)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 46)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_47",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 47",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 47",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 47)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 47)",
      "optionsEn": [
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_48",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 48",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 48",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 48)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 48)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_49",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 49",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 49",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 49)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 49)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_50",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 50",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 50",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 50)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 50)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_51",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 51",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 51",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 51)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 51)",
      "optionsEn": [
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_52",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 52",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 52",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 52)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 52)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_53",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 53",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 53",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 53)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 53)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_54",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 54",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 54",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 54)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 54)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_55",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 55",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 55",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 55)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 55)",
      "optionsEn": [
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_56",
      "titleEn": "[HOTS] ARM Cortex-M Microcontroller Architecture & Memory Mapping - Evaluation 56",
      "titleAr": "[تفكير عليا] معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة - تقييم 56",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding ARM Cortex-M Microcontroller Architecture & Memory Mapping: (Problem 56)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة: (مسألة 56)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerEn": "In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctAnswerAr": "في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for ARM Cortex-M Microcontroller Architecture & Memory Mapping.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In embedded C, to configure GPIO Pin 5 as push-pull output with high speed on Port A, setting bits 10-11 of `GPIOA_MODER` (address `0x48000000`) to `01` is performed atomically using bitwise mask operations: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية متحكمات ARM Cortex-M الدقيقة وخريطة الذاكرة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في لغة C المدمجة، لتهيئة الطرف 5 كخرج دفع وجذب عالي السرعة على المنفذ A، يُضبط البتان 10-11 في مسجل `MODER` بالقيمة `01` باستخدام عمليات الأقنعة الثنائية: `GPIOA->MODER = (GPIOA->MODER & ~(3UL << 10)) | (1UL << 10);`.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_57",
      "titleEn": "[HOTS] 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization - Evaluation 57",
      "titleAr": "[تفكير عليا] محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات - تقييم 57",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization: (Problem 57)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات: (مسألة 57)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerEn": "With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "correctAnswerAr": "بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for 12-Bit Successive-Approximation (SAR) ADC & Sensor Voltage Quantization.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: With $V_{ref} = 3.30\\text{ V}$, each LSB represents $\\frac{3.30\\text{ V}}{4095} \\approx 0.80586\\text{ mV}$. If an industrial pressure sensor outputs $V_{in} = 1.650\\text{ V}$, the resulting raw digital reading is $\\text{round}\\left(\\frac{1.650}{3.30} \\times 4095\\right) = 2048$, with quantization noise $\\frac{\\text{LSB}}{\\sqrt{12}} \\approx 0.233\\text{ mV}$.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ محولات الإشارات التناظرية إلى رقمية SAR بدقة 12 بت وتكميم جهود الحساسات.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: بجهد مرجعي $V_{ref} = 3.30\\text{ V}$، يمثل كل بت $\\text{LSB} \\approx 0.8059\\text{ mV}$. فإذا خرج حساس ضغط صناعي جهداً قدره $1.650\\text{ V}$، فإن القراءة الرقمية الناتجة هي $\\text{round}(0.5 \\times 4095) = 2048$.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch3_hots_58",
      "titleEn": "[HOTS] Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters - Evaluation 58",
      "titleAr": "[تفكير عليا] المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة - تقييم 58",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters: (Problem 58)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة: (مسألة 58)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء."
      ],
      "correctAnswer": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerEn": "A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "correctAnswerAr": "لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for Sequential Logic: D Flip-Flops, Setup/Hold Times & Synchronous Counters.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A 4-bit synchronous counter clocked at $f_{clk} = 50\\text{ MHz}$ has period $T = 20\\text{ ns}$. If flip-flop clock-to-Q delay is $t_{cq} = 4\\text{ ns}$, AND gate delay is $t_{gate} = 2.5\\text{ ns}$, and setup time is $t_{su} = 3\\text{ ns}$, the timing margin (slack) is $20 - (4 + 2.5 + 3) = 10.5\\text{ ns}$, guaranteeing reliable counting.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ المنطق التتابعي: قلابات D، أزمنة التجهيز والتثبيت والعدادات المتزامنة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لعداد متزامن 4-بت بتردد $50\\text{ MHz}$ ($T = 20\\text{ ns}$)، بتأخير قلاب $4\\text{ ns}$ وبوابة $2.5\\text{ ns}$ وزمن تجهيز $3\\text{ ns}$، يبلغ الهامش الزمني $20 - 9.5 = 10.5\\text{ ns}$، مما يضمن دقة العد دون أخطاء.."
      ],
      "difficulty": "hots"
    }
  ]
};
