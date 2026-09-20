import type { ChapterDatabank } from '../../../types/curriculum';

export const th_electronics_iot_ch4Databank: ChapterDatabank = {
  "easy": [
    {
      "id": "th_electronics_iot_ch4_easy_1",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 1",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 1",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 1)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 1)",
      "optionsEn": [
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_2",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 2",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 2",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 2)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_3",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 3",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 3",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 3)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 3)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_4",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 4",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 4",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 4)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 4)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_5",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 5",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 5",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 5)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 5)",
      "optionsEn": [
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_6",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 6",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 6",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 6)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 6)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_7",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 7",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 7",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 7)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 7)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_8",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 8",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 8",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 8)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 8)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_9",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 9",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 9",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 9)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 9)",
      "optionsEn": [
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_10",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 10",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 10",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 10)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 10)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_11",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 11",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 11",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 11)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 11)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_12",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 12",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 12",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 12)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 12)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_13",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 13",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 13",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 13)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 13)",
      "optionsEn": [
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_14",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 14",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 14",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 14)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 14)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_15",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 15",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 15",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 15)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 15)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_16",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 16",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 16",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 16)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 16)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_17",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 17",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 17",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 17)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 17)",
      "optionsEn": [
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_18",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 18",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 18",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 18)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 18)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_19",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 19",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 19",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 19)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 19)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_20",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 20",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 20",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 20)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 20)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_21",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 21",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 21",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 21)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 21)",
      "optionsEn": [
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_22",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 22",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 22",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 22)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 22)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_23",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 23",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 23",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 23)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 23)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_24",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 24",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 24",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 24)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 24)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_25",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 25",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 25",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 25)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 25)",
      "optionsEn": [
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_26",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 26",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 26",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 26)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 26)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_27",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 27",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 27",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 27)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 27)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_28",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 28",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 28",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 28)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 28)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_29",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 29",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 29",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 29)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 29)",
      "optionsEn": [
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_30",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 30",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 30",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 30)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 30)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_31",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 31",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 31",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 31)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 31)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_32",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 32",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 32",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 32)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 32)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_33",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 33",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 33",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 33)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 33)",
      "optionsEn": [
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_34",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 34",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 34",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 34)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 34)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_35",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 35",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 35",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 35)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 35)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_36",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 36",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 36",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 36)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 36)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_37",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 37",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 37",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 37)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 37)",
      "optionsEn": [
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_38",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 38",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 38",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 38)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 38)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_39",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 39",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 39",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 39)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 39)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_40",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 40",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 40",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 40)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 40)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_41",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 41",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 41",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 41)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 41)",
      "optionsEn": [
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_42",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 42",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 42",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 42)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 42)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_43",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 43",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 43",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 43)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 43)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_44",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 44",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 44",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 44)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 44)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_45",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 45",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 45",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 45)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 45)",
      "optionsEn": [
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_46",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 46",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 46",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 46)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 46)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_47",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 47",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 47",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 47)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_48",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 48",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 48",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 48)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 48)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_49",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 49",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 49",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 49)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 49)",
      "optionsEn": [
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_50",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 50",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 50",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 50)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 50)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_51",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 51",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 51",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 51)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 51)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_52",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 52",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 52",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 52)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 52)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_53",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 53",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 53",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 53)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 53)",
      "optionsEn": [
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_54",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 54",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 54",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 54)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 54)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_55",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 55",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 55",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 55)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 55)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 2,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_56",
      "titleEn": "[EASY] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Review 56",
      "titleAr": "[مستوى أساسي] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - سؤال 56",
      "questionEn": "[Electronics & IoT Core Concept] Regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), which of the following statements is physically and analytically correct? (Variant 56)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 56)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة."
      ],
      "correctAnswer": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerEn": "MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "correctAnswerAr": "يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "correctIndex": 3,
      "explanationEn": "Correct Analysis: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.",
      "explanationAr": "التحليل العلمي الصحيح: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: MQTT is a lightweight publish/subscribe messaging protocol operating over TCP/IP, where sensor clients publish telemetry to topics on a central broker without direct client-to-client connections.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: يعد بروتوكول MQTT بروتوكول تراسل خفيف الوزن بنمط النشر/الاشتراك عبر شبكات TCP/IP، حيث تنشر أجهزة الاستشعار بياناتها في مواضيع عبر وسيط مركزي دون اتصال مباشر بين الأجهزة.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_57",
      "titleEn": "[EASY] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Review 57",
      "titleAr": "[مستوى أساسي] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - سؤال 57",
      "questionEn": "[Electronics & IoT Core Concept] Regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, which of the following statements is physically and analytically correct? (Variant 57)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 57)",
      "optionsEn": [
        "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerEn": "LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "correctAnswerAr": "تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "correctIndex": 0,
      "explanationEn": "Correct Analysis: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.",
      "explanationAr": "التحليل العلمي الصحيح: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: LoRa uses Chirp Spread Spectrum (CSS) modulation in license-free Sub-GHz ISM bands (868MHz Europe/Egypt) to achieve communication ranges exceeding 15 km with multi-year battery life.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: تستخدم تقنية LoRa تعديل طيف الانتشار بالصفير (CSS) في نطاقات التردد دون الجيجاهرتز (868 ميجاهرتز في مصر) لتحقيق مدى يفوق 15 كم ببطاريات تدوم سنوات.."
      ],
      "difficulty": "easy"
    },
    {
      "id": "th_electronics_iot_ch4_easy_58",
      "titleEn": "[EASY] I2C vs. SPI Serial Sensor Interfacing Protocols - Review 58",
      "titleAr": "[مستوى أساسي] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - سؤال 58",
      "questionEn": "[Electronics & IoT Core Concept] Regarding I2C vs. SPI Serial Sensor Interfacing Protocols, which of the following statements is physically and analytically correct? (Variant 58)",
      "questionAr": "[مفاهيم الإلكترونيات وإنترنت الأشياء] بخصوص بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، أي العبارات التالية صحيحة فيزيائياً وتحليلياً؟ (نموذج 58)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerEn": "I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "correctAnswerAr": "بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "correctIndex": 1,
      "explanationEn": "Correct Analysis: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.",
      "explanationAr": "التحليل العلمي الصحيح: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.",
      "stepByStepSolutionEn": [
        "Identify fundamental electronics principles: I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Evaluate physical and circuit parameters according to national engineering standards.",
        "Arrive at the verified statement: I2C is a 2-wire serial protocol (SDA and SCL) supporting multi-master addressing with pull-up resistors, while SPI uses 4 wires (MOSI, MISO, SCK, CS) for full-duplex high-speed transfers.."
      ],
      "stepByStepSolutionAr": [
        "تحديد المبادئ الهندسية الأساسية الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل معاملات الدائرة والفيزياء وفق المعايير القومية المعتمدة.",
        "استنتاج العبارة الصحيحة المؤكدة: بروتوكول I2C هو ناقل ثنائي الأسلاك (SDA و SCL) يدعم عنونة أجهزة متعددة بمقاومات سحب، بينما يستخدم SPI أربعة أسلاك لنقل متزامن ومزدوج فائق السرعة.."
      ],
      "difficulty": "easy"
    }
  ],
  "medium": [
    {
      "id": "th_electronics_iot_ch4_med_1",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 1",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 1",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 1)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 1)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_2",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 2",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 2",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 2)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 2)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_3",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 3",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 3",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 3)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 3)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_4",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 4",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 4",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 4)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 4)",
      "optionsEn": [
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_5",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 5",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 5",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 5)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 5)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_6",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 6",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 6",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 6)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 6)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_7",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 7",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 7",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 7)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 7)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_8",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 8",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 8",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 8)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 8)",
      "optionsEn": [
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_9",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 9",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 9",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 9)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 9)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_10",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 10",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 10",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 10)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 10)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_11",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 11",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 11",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 11)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 11)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake)."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية)."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_12",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 12",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 12",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 12)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 12)",
      "optionsEn": [
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_13",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 13",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 13",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 13)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 13)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_14",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 14",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 14",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 14)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 14)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_15",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 15",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 15",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 15)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 15)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_16",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 16",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 16",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 16)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 16)",
      "optionsEn": [
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_17",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 17",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 17",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 17)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 17)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_18",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 18",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 18",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 18)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 18)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_19",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 19",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 19",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 19)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 19)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_20",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 20",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 20",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 20)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 20)",
      "optionsEn": [
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_21",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 21",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 21",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 21)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 21)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_22",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 22",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 22",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 22)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 22)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_23",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 23",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 23",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 23)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 23)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake)."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية)."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_24",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 24",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 24",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 24)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 24)",
      "optionsEn": [
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_25",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 25",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 25",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 25)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 25)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_26",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 26",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 26",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 26)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 26)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_27",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 27",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 27",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 27)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 27)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_28",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 28",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 28",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 28)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 28)",
      "optionsEn": [
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_29",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 29",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 29",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 29)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 29)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_30",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 30",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 30",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 30)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_31",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 31",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 31",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 31)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 31)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_32",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 32",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 32",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 32)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 32)",
      "optionsEn": [
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_33",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 33",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 33",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 33)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 33)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_34",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 34",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 34",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 34)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 34)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_35",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 35",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 35",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 35)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 35)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake)."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية)."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_36",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 36",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 36",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 36)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 36)",
      "optionsEn": [
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers."
      ],
      "optionsAr": [
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_37",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 37",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 37",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 37)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 37)",
      "optionsEn": [
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_38",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 38",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 38",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 38)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 38)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_39",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 39",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 39",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 39)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 39)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_40",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 40",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 40",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 40)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 40)",
      "optionsEn": [
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage."
      ],
      "optionsAr": [
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_41",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 41",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 41",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 41)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 41)",
      "optionsEn": [
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_42",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 42",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 42",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 42)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 42)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_43",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 43",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 43",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 43)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 43)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_44",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 44",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 44",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 44)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 44)",
      "optionsEn": [
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_45",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 45",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 45",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 45)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_46",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 46",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 46",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 46)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 46)",
      "optionsEn": [
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells."
      ],
      "optionsAr": [
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_47",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 47",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 47",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 47)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 47)",
      "optionsEn": [
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake)."
      ],
      "optionsAr": [
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية)."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_48",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 48",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 48",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 48)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 48)",
      "optionsEn": [
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency."
      ],
      "optionsAr": [
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_49",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 49",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 49",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 49)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 49)",
      "optionsEn": [
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals."
      ],
      "optionsAr": [
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_50",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 50",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 50",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 50)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 50)",
      "optionsEn": [
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_51",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 51",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 51",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 51)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 51)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_52",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 52",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 52",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 52)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 52)",
      "optionsEn": [
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor."
      ],
      "optionsAr": [
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_53",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 53",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 53",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 53)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 53)",
      "optionsEn": [
        "MOSFET gate oxide conducts continuous direct current (DC) because silicon dioxide is an intrinsic metallic conductor.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "توصل طبقة أكسيد بوابة ترانزستور MOSFET تياراً مستمراً دائماً لأن ثاني أكسيد السيليكون موصل معدني أصيل.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_54",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 54",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 54",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 54)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 54)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "Digital FPGA look-up tables (LUTs) store logical states using mechanical relays and vacuum tubes rather than SRAM configuration cells.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "تخزن جداول البحث (LUTs) في شرائح FPGA الحالات المنطقية باستخدام مرحلات ميكانيكية وصمامات مفرغة بدلاً من خلايا SRAM.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_55",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 55",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 55",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 55)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 55)",
      "optionsEn": [
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle."
      ],
      "optionsAr": [
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_56",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 56",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 56",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 56)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 56)",
      "optionsEn": [
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
        "The Early effect in BJTs describes a scenario where collector current is entirely independent of collector-emitter voltage.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
        "يصف تأثير إيرلي في ترانزستورات BJT حالة يكون فيها تيار المجمع مستقلاً تماماً عن جهد المجمع والمشع.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 0,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_57",
      "titleEn": "[MEDIUM] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Analysis 57",
      "titleAr": "[مستوى متوسط] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تحليل 57",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology, what is the precise analytical formulation or operative principle? (Item 57)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 57)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
        "A non-inverting operational amplifier configuration produces a 180-degree phase shift between input and output AC signals.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
        "يُحدث مكبر العمليات في نمط التكبير غير العاكس إزاحة طورية قدرها 180 درجة بين إشارتي الدخل والخرج المترددتين.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة."
      ],
      "correctAnswer": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerEn": "The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "correctAnswerAr": "يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "correctIndex": 1,
      "explanationEn": "Operational Principles & Derivation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_58",
      "titleEn": "[MEDIUM] I2C vs. SPI Serial Sensor Interfacing Protocols - Analysis 58",
      "titleAr": "[مستوى متوسط] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تحليل 58",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of I2C vs. SPI Serial Sensor Interfacing Protocols, what is the precise analytical formulation or operative principle? (Item 58)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 58)",
      "optionsEn": [
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins."
      ],
      "optionsAr": [
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد."
      ],
      "correctAnswer": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerEn": "In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "correctAnswerAr": "في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "correctIndex": 2,
      "explanationEn": "Operational Principles & Derivation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.."
      ],
      "difficulty": "medium"
    },
    {
      "id": "th_electronics_iot_ch4_med_59",
      "titleEn": "[MEDIUM] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Analysis 59",
      "titleAr": "[مستوى متوسط] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تحليل 59",
      "questionEn": "[Circuit Analysis & Synthesis] In the context of MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS), what is the precise analytical formulation or operative principle? (Item 59)",
      "questionAr": "[تحليل وتصميم الدوائر الإلكترونية] في سياق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS، ما هي الصياغة التحليلية الدقيقة أو مبدأ التشغيل المعتمد؟ (سؤال 59)",
      "optionsEn": [
        "FinFET transistors eliminate gate control by routing electric current through an unconstrained bulk silicon substrate without any 3D fins.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake)."
      ],
      "optionsAr": [
        "تلغي ترانزستورات FinFET التحكم بالبوابة عبر توجيه التيار الكهربائي خلال ركيزة سيليكونية ضخمة دون وجود زعانف ثلاثية الأبعاد.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية)."
      ],
      "correctAnswer": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerEn": "MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "correctAnswerAr": "يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "correctIndex": 3,
      "explanationEn": "Operational Principles & Derivation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "explanationAr": "المبادئ التشغيلية والاستنتاج الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "stepByStepSolutionEn": [
        "Formulate governing mathematical and circuit laws for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Analyze signal transitions and operating boundaries under standard load.",
        "Conclude the verified formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).."
      ],
      "stepByStepSolutionAr": [
        "صياغة القوانين الرياضية ومعادلات الدوائر الحاكمة لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "تحليل انتقالات الإشارات وحدود التشغيل في ظل الأحمال القياسية.",
        "استخلاص الصياغة الرياضية المؤكدة: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).."
      ],
      "difficulty": "medium"
    }
  ],
  "hots": [
    {
      "id": "th_electronics_iot_ch4_hots_1",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 1",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 1",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 1)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 1)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_2",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 2",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 2",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 2)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 2)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_3",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 3",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 3",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 3)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 3)",
      "optionsEn": [
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_4",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 4",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 4",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 4)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 4)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_5",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 5",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 5",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 5)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 5)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_6",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 6",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 6",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 6)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 6)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_7",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 7",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 7",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 7)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 7)",
      "optionsEn": [
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_8",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 8",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 8",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 8)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 8)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_9",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 9",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 9",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 9)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 9)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_10",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 10",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 10",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 10)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 10)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_11",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 11",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 11",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 11)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 11)",
      "optionsEn": [
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_12",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 12",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 12",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 12)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 12)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_13",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 13",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 13",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 13)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 13)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_14",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 14",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 14",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 14)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 14)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_15",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 15",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 15",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 15)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 15)",
      "optionsEn": [
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_16",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 16",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 16",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 16)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 16)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_17",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 17",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 17",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 17)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 17)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_18",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 18",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 18",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 18)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 18)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_19",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 19",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 19",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 19)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 19)",
      "optionsEn": [
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_20",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 20",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 20",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 20)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 20)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_21",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 21",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 21",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 21)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 21)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_22",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 22",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 22",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 22)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 22)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_23",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 23",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 23",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 23)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 23)",
      "optionsEn": [
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_24",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 24",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 24",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 24)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 24)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_25",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 25",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 25",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 25)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 25)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_26",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 26",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 26",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 26)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 26)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_27",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 27",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 27",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 27)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 27)",
      "optionsEn": [
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_28",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 28",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 28",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 28)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 28)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_29",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 29",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 29",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 29)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 29)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_30",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 30",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 30",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 30)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 30)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_31",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 31",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 31",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 31)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 31)",
      "optionsEn": [
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_32",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 32",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 32",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 32)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 32)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_33",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 33",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 33",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 33)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 33)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_34",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 34",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 34",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 34)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 34)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_35",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 35",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 35",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 35)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 35)",
      "optionsEn": [
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_36",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 36",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 36",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 36)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 36)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_37",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 37",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 37",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 37)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 37)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_38",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 38",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 38",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 38)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 38)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_39",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 39",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 39",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 39)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 39)",
      "optionsEn": [
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_40",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 40",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 40",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 40)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 40)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_41",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 41",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 41",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 41)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 41)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_42",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 42",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 42",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 42)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 42)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_43",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 43",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 43",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 43)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 43)",
      "optionsEn": [
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_44",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 44",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 44",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 44)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 44)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_45",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 45",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 45",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 45)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 45)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_46",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 46",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 46",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 46)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 46)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_47",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 47",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 47",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 47)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 47)",
      "optionsEn": [
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_48",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 48",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 48",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 48)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 48)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_49",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 49",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 49",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 49)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 49)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_50",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 50",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 50",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 50)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 50)",
      "optionsEn": [
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow."
      ],
      "optionsAr": [
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_51",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 51",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 51",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 51)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 51)",
      "optionsEn": [
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_52",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 52",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 52",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 52)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 52)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_53",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 53",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 53",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 53)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 53)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_54",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 54",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 54",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 54)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 54)",
      "optionsEn": [
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "LoRaWAN uses high-frequency optical laser beams to transmit high-definition video over distances up to 100 kilometers.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell."
      ],
      "optionsAr": [
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "تستخدم تقنية LoRaWAN حزم ليزر بصرية عالية التردد لنقل الفيديو عالي الدقة لمسافات تصل إلى 100 كيلومتر.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_55",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 55",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 55",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 55)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 55)",
      "optionsEn": [
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
        "TinyML neural network quantization from Float32 to INT8 increases microcontroller memory requirements by 400 percent.",
        "An ideal operational amplifier has zero input impedance, infinite output impedance, and unity open-loop voltage gain.",
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero."
      ],
      "optionsAr": [
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
        "يؤدي تكميم الشبكات العصبية في TinyML من Float32 إلى INT8 إلى مضاعفة متطلبات الذاكرة في المتحكم بنسبة 400 بالمائة.",
        "يمتلك مكبر العمليات المثالي مقاومة دخل تساوي صفراً، ومقاومة خرج لا نهائية، وكسب جهد حلقي مفتوح يساوي واحداً.",
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 0,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_56",
      "titleEn": "[HOTS] MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS) - Evaluation 56",
      "titleAr": "[تفكير عليا] معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS - تقييم 56",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS): (Problem 56)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS: (مسألة 56)",
      "optionsEn": [
        "Under the Shockley diode equation, reverse bias current increases exponentially toward infinity as voltage decreases below zero.",
        "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
        "The I2C serial bus uses five active data wires and operates in full-duplex mode without requiring any pull-up resistors.",
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current."
      ],
      "optionsAr": [
        "وفق معادلة شوكلي للدايود، يزداد تيار الانحياز العكسي أسياً إلى ما لا نهاية كلما انخفض الجهد إلى ما دون الصفر.",
        "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
        "يستخدم ناقل I2C التسلسلي خمسة أسلاك بيانات نشطة ويعمل بنمط الإرسال المزدوج الكامل دون الحاجة لمقاومات سحب.",
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون."
      ],
      "correctAnswer": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerEn": "In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "correctAnswerAr": "في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "correctIndex": 1,
      "explanationEn": "Engineering Calculation Step: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_57",
      "titleEn": "[HOTS] LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology - Evaluation 57",
      "titleAr": "[تفكير عليا] تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة - تقييم 57",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology: (Problem 57)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة: (مسألة 57)",
      "optionsEn": [
        "Class-A power amplifiers achieve 100% theoretical power conversion efficiency with zero quiescent collector current.",
        "Dynamic power dissipation in CMOS digital circuits is strictly proportional to temperature and zero clock frequency.",
        "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire."
      ],
      "optionsAr": [
        "تحقق مكبرات القدرة من الفئة A كفاءة تحويل طاقة نظرية تبلغ 100% مع انعدام تيار المجمع في حالة السكون.",
        "يتناسب استهلاك القدرة الديناميكية في دوائر CMOS الرقمية طردياً مع درجة الحرارة ومع تردد ساعة يساوي صفراً.",
        "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد."
      ],
      "correctAnswer": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerEn": "A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "correctAnswerAr": "عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "correctIndex": 2,
      "explanationEn": "Engineering Calculation Step: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.."
      ],
      "difficulty": "hots"
    },
    {
      "id": "th_electronics_iot_ch4_hots_58",
      "titleEn": "[HOTS] I2C vs. SPI Serial Sensor Interfacing Protocols - Evaluation 58",
      "titleAr": "[تفكير عليا] بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI - تقييم 58",
      "questionEn": "[High-Order Engineering Calculation] Solve the following design scenario regarding I2C vs. SPI Serial Sensor Interfacing Protocols: (Problem 58)",
      "questionAr": "[مسألة هندسية عليا للتحليل والتصميم] احسب المعاملات التصميمية بدقة للحالة الهندسية التالية المتعلقة بـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI: (مسألة 58)",
      "optionsEn": [
        "In SPI communication, multiple peripheral devices are addressed using 7-bit software addresses transmitted over a single wire.",
        "In static timing analysis (STA), positive slack indicates a catastrophic timing violation where signals fail to arrive before clock edges.",
        "MQTT is a synchronous peer-to-peer transport protocol that requires high-overhead XML payloads and permanent raw TCP connections.",
        "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both."
      ],
      "optionsAr": [
        "في بروتوكول SPI، تُعنون الأجهزة الطرفية المتعددة باستخدام عناوين برمجية من 7 بت تُرسل عبر سلك واحد.",
        "في التحليل الزمني الساكن (STA)، تشير الفجوة الزمنية الموجبة (Positive Slack) إلى فشل كارثي في استيفاء التوقيت قبل حافة الساعة.",
        "يعد بروتوكول MQTT بروتوكولاً تزامناً بين نقطتين يتطلب حمولات XML ضخمة واتصالات TCP خام دائمة.",
        "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة."
      ],
      "correctAnswer": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerEn": "For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "correctAnswerAr": "لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "correctIndex": 3,
      "explanationEn": "Engineering Calculation Step: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "explanationAr": "خطوات الحل الهندسي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "stepByStepSolutionEn": [
        "Define boundary conditions and component specifications for I2C vs. SPI Serial Sensor Interfacing Protocols.",
        "Execute precise numerical substitution into the governing equation.",
        "Confirm result and engineering tolerance: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.."
      ],
      "stepByStepSolutionAr": [
        "تحديد الشروط الحدية ومواصفات المكونات لـ بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
        "إجراء التعويض العددي الدقيق في المعادلة الحاكمة.",
        "التحقق من صحة الناتج والتفاوت الهندسي المسموح: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.."
      ],
      "difficulty": "hots"
    }
  ]
};
