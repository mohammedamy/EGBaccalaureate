import type { SolvedProblem } from '../../../types/curriculum';

export const th_electronics_iot_ch4SolvedExamples: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch4_solved_1",
    "titleEn": "Solved Example 1: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "مثال محلول 1: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 1] Design and evaluate an electronic circuit or IoT subsystem applying I2C vs. SPI Serial Sensor Interfacing Protocols. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 1] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\nStep 3: Execute numerical evaluation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\nالخطوة ٣: التعويض العددي وحساب النتائج: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Perform calculation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "الحساب العددي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI."
  },
  {
    "id": "th_electronics_iot_ch4_solved_2",
    "titleEn": "Solved Example 2: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "مثال محلول 2: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 2] Design and evaluate an electronic circuit or IoT subsystem applying MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 2] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\nStep 3: Execute numerical evaluation: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Perform calculation: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "الحساب العددي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS."
  },
  {
    "id": "th_electronics_iot_ch4_solved_3",
    "titleEn": "Solved Example 3: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "مثال محلول 3: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 3] Design and evaluate an electronic circuit or IoT subsystem applying LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 3] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\nStep 3: Execute numerical evaluation: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\nالخطوة ٣: التعويض العددي وحساب النتائج: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Perform calculation: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "الحساب العددي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة."
  },
  {
    "id": "th_electronics_iot_ch4_solved_4",
    "titleEn": "Solved Example 4: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "مثال محلول 4: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 4] Design and evaluate an electronic circuit or IoT subsystem applying I2C vs. SPI Serial Sensor Interfacing Protocols. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 4] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\nStep 3: Execute numerical evaluation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\nالخطوة ٣: التعويض العددي وحساب النتائج: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Perform calculation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "الحساب العددي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI."
  },
  {
    "id": "th_electronics_iot_ch4_solved_5",
    "titleEn": "Solved Example 5: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "مثال محلول 5: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 5] Design and evaluate an electronic circuit or IoT subsystem applying MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 5] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\nStep 3: Execute numerical evaluation: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Perform calculation: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "الحساب العددي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS."
  },
  {
    "id": "th_electronics_iot_ch4_solved_6",
    "titleEn": "Solved Example 6: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "مثال محلول 6: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 6] Design and evaluate an electronic circuit or IoT subsystem applying LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 6] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\nStep 3: Execute numerical evaluation: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\nالخطوة ٣: التعويض العددي وحساب النتائج: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Perform calculation: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "الحساب العددي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة."
  },
  {
    "id": "th_electronics_iot_ch4_solved_7",
    "titleEn": "Solved Example 7: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "مثال محلول 7: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 7] Design and evaluate an electronic circuit or IoT subsystem applying I2C vs. SPI Serial Sensor Interfacing Protocols. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 7] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\nStep 3: Execute numerical evaluation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\nالخطوة ٣: التعويض العددي وحساب النتائج: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Perform calculation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "الحساب العددي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI."
  },
  {
    "id": "th_electronics_iot_ch4_solved_8",
    "titleEn": "Solved Example 8: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "مثال محلول 8: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 8] Design and evaluate an electronic circuit or IoT subsystem applying MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 8] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\nStep 3: Execute numerical evaluation: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\nالخطوة ٣: التعويض العددي وحساب النتائج: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Perform calculation: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "الحساب العددي الدقيق: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS).",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS."
  },
  {
    "id": "th_electronics_iot_ch4_solved_9",
    "titleEn": "Solved Example 9: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "مثال محلول 9: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 9] Design and evaluate an electronic circuit or IoT subsystem applying LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 9] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\nStep 3: Execute numerical evaluation: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\nالخطوة ٣: التعويض العددي وحساب النتائج: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Perform calculation: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "الحساب العددي الدقيق: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة."
  },
  {
    "id": "th_electronics_iot_ch4_solved_10",
    "titleEn": "Solved Example 10: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "مثال محلول 10: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "medium",
    "questionEn": "[Official Solved Example 10] Design and evaluate an electronic circuit or IoT subsystem applying I2C vs. SPI Serial Sensor Interfacing Protocols. Specify the governing formulas, parameter calculations, and numerical solutions.",
    "questionAr": "[مثال محلول وزاري 10] صمم وقيم دائرة إلكترونية أو منظومة إنترنت أشياء فرعية بتطبيق بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. وضح القوانين المطبقة وخطوات الحساب العددي والنتائج بالتفصيل.",
    "explanationEn": "Step 1: Identify circuit specifications and parameters.\nStep 2: Apply governing analytical formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\nStep 3: Execute numerical evaluation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.\nStep 4: Verify stability margins, thermal dissipation, and signal integrity compliance.",
    "explanationAr": "الخطوة ١: تحديد مواصفات الدائرة ومعاملات المنظومة.\nالخطوة ٢: تطبيق القانون الرياضي الهندسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\nالخطوة ٣: التعويض العددي وحساب النتائج: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.\nالخطوة ٤: التحقق من هوامش الاستقرار، التبديد الحراري، وسلامة الإشارات.",
    "stepByStepSolutionEn": [
      "Identify system constraints and boundary conditions.",
      "Apply formulation: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Perform calculation: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Conclude operational compliance with IEEE and industrial standards."
    ],
    "stepByStepSolutionAr": [
      "تحديد القيود والشروط الحدية للنظام الإلكتروني.",
      "تطبيق المعادلة الهندسية: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "الحساب العددي الدقيق: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "التحقق من التوافق التشغيلي مع معايير IEEE والمواصفات القياسية."
    ],
    "hintEn": "Recall the governing relations for I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "hintAr": "تذكر القوانين الحاكمة لمنظومة بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI.",
    "teacherTipEn": "Verify units and sign conventions carefully when evaluating I2C vs. SPI Serial Sensor Interfacing Protocols.",
    "teacherTipAr": "تحقق من دقة الوحدات الهندسية واصطلاحات الإشارات عند حساب بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI."
  }
];

export const th_electronics_iot_ch4ExerciseProblems: SolvedProblem[] = [
  {
    "id": "th_electronics_iot_ch4_ex_1",
    "titleEn": "Exercise Problem 1: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "تمرين 1: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 1] An embedded hardware engineer is required to optimize a subsystem involving I2C vs. SPI Serial Sensor Interfacing Protocols. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 1] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\n- Calculation & Results: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\n- خطوات الحساب والنتيجة: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Calculate final values: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "حساب الناتج النهائي: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
    "hintAr": "طبق القانون الأساسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_2",
    "titleEn": "Exercise Problem 2: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "تمرين 2: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 2] An embedded hardware engineer is required to optimize a subsystem involving MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 2] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\n- Calculation & Results: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\n- خطوات الحساب والنتيجة: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Calculate final values: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "حساب الناتج النهائي: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
    "hintAr": "طبق القانون الأساسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_3",
    "titleEn": "Exercise Problem 3: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "تمرين 3: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 3] An embedded hardware engineer is required to optimize a subsystem involving LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 3] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\n- Calculation & Results: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\n- خطوات الحساب والنتيجة: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Calculate final values: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "حساب الناتج النهائي: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
    "hintAr": "طبق القانون الأساسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_4",
    "titleEn": "Exercise Problem 4: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "تمرين 4: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 4] An embedded hardware engineer is required to optimize a subsystem involving I2C vs. SPI Serial Sensor Interfacing Protocols. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 4] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\n- Calculation & Results: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\n- خطوات الحساب والنتيجة: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Calculate final values: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "حساب الناتج النهائي: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
    "hintAr": "طبق القانون الأساسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_5",
    "titleEn": "Exercise Problem 5: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "تمرين 5: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 5] An embedded hardware engineer is required to optimize a subsystem involving MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 5] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\n- Calculation & Results: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\n- خطوات الحساب والنتيجة: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Calculate final values: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "حساب الناتج النهائي: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
    "hintAr": "طبق القانون الأساسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_6",
    "titleEn": "Exercise Problem 6: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "تمرين 6: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 6] An embedded hardware engineer is required to optimize a subsystem involving LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 6] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\n- Calculation & Results: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\n- خطوات الحساب والنتيجة: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Calculate final values: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "حساب الناتج النهائي: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
    "hintAr": "طبق القانون الأساسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_7",
    "titleEn": "Exercise Problem 7: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "تمرين 7: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 7] An embedded hardware engineer is required to optimize a subsystem involving I2C vs. SPI Serial Sensor Interfacing Protocols. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 7] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\n- Calculation & Results: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\n- خطوات الحساب والنتيجة: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Calculate final values: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "حساب الناتج النهائي: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
    "hintAr": "طبق القانون الأساسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_8",
    "titleEn": "Exercise Problem 8: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "تمرين 8: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 8] An embedded hardware engineer is required to optimize a subsystem involving MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 8] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\n- Calculation & Results: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\n- خطوات الحساب والنتيجة: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Calculate final values: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "حساب الناتج النهائي: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
    "hintAr": "طبق القانون الأساسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_9",
    "titleEn": "Exercise Problem 9: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "تمرين 9: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 9] An embedded hardware engineer is required to optimize a subsystem involving LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 9] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\n- Calculation & Results: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\n- خطوات الحساب والنتيجة: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Calculate final values: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "حساب الناتج النهائي: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
    "hintAr": "طبق القانون الأساسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_10",
    "titleEn": "Exercise Problem 10: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "تمرين 10: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 10] An embedded hardware engineer is required to optimize a subsystem involving I2C vs. SPI Serial Sensor Interfacing Protocols. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 10] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\n- Calculation & Results: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\n- خطوات الحساب والنتيجة: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Calculate final values: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "حساب الناتج النهائي: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
    "hintAr": "طبق القانون الأساسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_11",
    "titleEn": "Exercise Problem 11: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "تمرين 11: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 11] An embedded hardware engineer is required to optimize a subsystem involving MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 11] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\n- Calculation & Results: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\n- خطوات الحساب والنتيجة: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Calculate final values: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "حساب الناتج النهائي: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
    "hintAr": "طبق القانون الأساسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_12",
    "titleEn": "Exercise Problem 12: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "تمرين 12: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 12] An embedded hardware engineer is required to optimize a subsystem involving LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 12] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\n- Calculation & Results: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\n- خطوات الحساب والنتيجة: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Calculate final values: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "حساب الناتج النهائي: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
    "hintAr": "طبق القانون الأساسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_13",
    "titleEn": "Exercise Problem 13: I2C vs. SPI Serial Sensor Interfacing Protocols",
    "titleAr": "تمرين 13: بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 13] An embedded hardware engineer is required to optimize a subsystem involving I2C vs. SPI Serial Sensor Interfacing Protocols. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 13] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن بروتوكولات ربط الحساسات التسلسلية: مقارنة I2C و SPI. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.\n- Calculation & Results: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.\n- خطوات الحساب والنتيجة: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
      "Calculate final values: For an I2C bus with total bus capacitance $C_b = 200\\text{ pF}$ operating in Fast Mode ($400\\text{ kHz}$, maximum rise time $t_r = 300\\text{ ns}$), minimum pull-up resistance is bounded by $I_{OL} = 3\\text{ mA}$ as $R_{p,min} = \\frac{V_{DD} - 0.4}{3\\text{ mA}} = \\frac{2.9}{0.003} \\approx 967\\,\\Omega$, and maximum is $R_{p,max} = \\frac{t_r}{0.8473 C_b} = \\frac{300 \\times 10^{-9}}{0.8473 \\times 200 \\times 10^{-12}} \\approx 1.77\\text{ k}\\Omega$; selecting $1.5\\text{ k}\\Omega$ satisfies both.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
      "حساب الناتج النهائي: لناقل I2C بسعة طفيلية $C_b = 200\\text{ pF}$ وتردد $400\\text{ kHz}$، تنحصر مقاومة السحب المسموحة بين $R_{p,min} = 967\\,\\Omega$ و $R_{p,max} = 1.77\\text{ k}\\Omega$؛ واختيار مقاومة قياسية $1.5\\text{ k}\\Omega$ يضمن استقرار الإشارة.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: In I2C, slave addressing uses a 7-bit address byte followed by a Read/Write bit ($R/\\bar{W}$), acknowledged by a low ACK bit from the slave on the 9th clock cycle.",
    "hintAr": "طبق القانون الأساسي: في بروتوكول I2C، تتم عنونة الأجهزة الطرفية عبر بايت مكون من عنوان 7-بت متبوعاً ببت القراءة/الكتابة، وتؤكد التوصيل بنبضة استجابة ACK منخفضة في دورة الساعة التاسعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_14",
    "titleEn": "Exercise Problem 14: MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS)",
    "titleAr": "تمرين 14: معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS",
    "difficulty": "hots",
    "questionEn": "[Ministerial Exercise Problem 14] An embedded hardware engineer is required to optimize a subsystem involving MQTT Publish/Subscribe Broker Architecture & Quality of Service (QoS). Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 14] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن معمارية بروتوكول MQTT بنمط النشر والاشتراك ومستويات جودة الخدمة QoS. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).\n- Calculation & Results: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).\n- خطوات الحساب والنتيجة: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
      "Calculate final values: In a critical Egyptian smart water metering grid transmitting billing data, deploying MQTT QoS 2 guarantees zero duplicate transactions across packet loss events through a 4-packet exchange: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP`, preventing double-counting of volumetric flow.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
      "حساب الناتج النهائي: في شبكة العدادات الذكية المصرية لنقل بيانات الفواتير، يضمن مستوى MQTT QoS 2 انعدام المعاملات المكررة عند فقد الحزم بمصافحة رباعية: `PUBLISH` $\\to$ `PUBREC` $\\to$ `PUBREL` $\\to$ `PUBCOMP` لمنع تكرار احتساب كميات المياه.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: MQTT supports three Quality of Service (QoS) levels: QoS 0 (At most once, fire-and-forget), QoS 1 (At least once with PUBACK confirmation), and QoS 2 (Exactly once via 4-way handshake).",
    "hintAr": "طبق القانون الأساسي: يدعم بروتوكول MQTT ثلاثة مستويات لجودة الخدمة: QoS 0 (مرة واحدة على الأكثر دون تأكيد)، وQoS 1 (مرة واحدة على الأقل بتأكيد PUBACK)، وQoS 2 (مرة واحدة بالضبط بمصافحة رباعية).",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  },
  {
    "id": "th_electronics_iot_ch4_ex_15",
    "titleEn": "Exercise Problem 15: LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology",
    "titleAr": "تمرين 15: تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة",
    "difficulty": "medium",
    "questionEn": "[Ministerial Exercise Problem 15] An embedded hardware engineer is required to optimize a subsystem involving LoRaWAN Long-Range Low-Power Wide-Area Wireless Technology. Formulate the governing expressions and compute the design parameters under standard operating constraints.",
    "questionAr": "[تمرين تطبيقي وزاري 15] يُطلب من مهندس العتاد المدمج تحسين منظومة فرعية تتضمن تقنية LoRaWAN للاتصالات اللاسلكية بعيدة المدى ومنخفضة استهلاك الطاقة. استنتج العلاقات الحاكمة واحسب المعاملات التصميمية بدقة في ظل ظروف التشغيل القياسية.",
    "explanationEn": "Analytical Solution:\n- Governing Law: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.\n- Calculation & Results: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
    "explanationAr": "الحل الهندسي التحليلي:\n- القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.\n- خطوات الحساب والنتيجة: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
    "stepByStepSolutionEn": [
      "Set up the circuit nodal and mesh equations or timing relations.",
      "Substitute component values into formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
      "Calculate final values: A smart agriculture node in Toshka transmits a 20-byte packet at $\\text{SF12}$ with $125\\text{ kHz}$ bandwidth ($T_{sym} = \\frac{2^{12}}{125000} = 32.77\\text{ ms}$). With time-on-air $t_{air} = 1.48\\text{ s}$ and transmit current $I_{tx} = 120\\text{ mA}$ at $3.3\\text{ V}$, total energy consumed per transmission is $E = 3.3\\text{ V} \\times 0.12\\text{ A} \\times 1.48\\text{ s} = 0.586\\text{ J}$, allowing $>18,000$ readings on a 3000mAh lithium cell.",
      "Perform sensitivity and tolerance analysis."
    ],
    "stepByStepSolutionAr": [
      "صياغة معادلات العقد والحلقات للدائرة أو العلاقات الزمنية.",
      "التعويض بالقيم في القانون الحاكم: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
      "حساب الناتج النهائي: عقدة زراعية ذكية في توشكى تبث حزمة 20 بايت عند SF12 بعرض نطاق $125\\text{ kHz}$ ($t_{air} = 1.48\\text{ s}$) وتيار $120\\text{ mA}$ بجهد $3.3\\text{ V}$، تستهلك طاقة $E = 0.586\\text{ J}$، مما يتيح $>18,000$ إرسال ببطارية 3000mAh.",
      "إجراء تحليل الحساسية والتفاوت المسموح للمكونات."
    ],
    "hintEn": "Apply the core formula: The Spreading Factor (SF7 to SF12) trades off data rate for sensitivity: higher spreading factors double the chirp duration with every step, increasing receiver sensitivity down to $-137\\text{ dBm}$ at lower transmission rates.",
    "hintAr": "طبق القانون الأساسي: يوازن معامل الانتشار (من SF7 إلى SF12) بين سرعة نقل البيانات وحساسية الاستقبال: فالمعامل الأكبر يضاعف مدة الإشارة، رافعاً حساسية الاستقبال حتى $-137\\text{ dBm}$ على حساب السرعة.",
    "teacherTipEn": "Check tolerances and boundary values under standard operating environments.",
    "teacherTipAr": "افحص التفاوت المسموح والقيم الحدية في ظل بيئات التشغيل القياسية."
  }
];
