import type { QuestionBank } from '../../../types/curriculum';

export const roboticsCh4Databank: QuestionBank = {
  easy: [
  {
    "id": "th_robotics_ch4_easy_1",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 1",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 1",
    "questionEn": "[Question 1] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 1] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_2",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 2",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 2",
    "questionEn": "[Question 2] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 2] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_3",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 3",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 3",
    "questionEn": "[Question 3] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 3] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_4",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 4",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 4",
    "questionEn": "[Question 4] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 4] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_5",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 5",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 5",
    "questionEn": "[Question 5] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 5] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_6",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 6",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 6",
    "questionEn": "[Question 6] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 6] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_7",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 7",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 7",
    "questionEn": "[Question 7] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 7] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_8",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 8",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 8",
    "questionEn": "[Question 8] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 8] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_9",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 9",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 9",
    "questionEn": "[Question 9] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 9] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_10",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 10",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 10",
    "questionEn": "[Question 10] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 10] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_11",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 11",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 11",
    "questionEn": "[Question 11] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 11] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_12",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 12",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 12",
    "questionEn": "[Question 12] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 12] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_13",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 13",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 13",
    "questionEn": "[Question 13] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 13] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_14",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 14",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 14",
    "questionEn": "[Question 14] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 14] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_15",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 15",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 15",
    "questionEn": "[Question 15] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 15] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_16",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 16",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 16",
    "questionEn": "[Question 16] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 16] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_17",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 17",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 17",
    "questionEn": "[Question 17] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 17] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_18",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 18",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 18",
    "questionEn": "[Question 18] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 18] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_19",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 19",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 19",
    "questionEn": "[Question 19] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 19] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_20",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 20",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 20",
    "questionEn": "[Question 20] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 20] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_21",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 21",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 21",
    "questionEn": "[Question 21] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 21] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_22",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 22",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 22",
    "questionEn": "[Question 22] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 22] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_23",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 23",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 23",
    "questionEn": "[Question 23] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 23] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_24",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 24",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 24",
    "questionEn": "[Question 24] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 24] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_25",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 25",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 25",
    "questionEn": "[Question 25] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 25] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_26",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 26",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 26",
    "questionEn": "[Question 26] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 26] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_27",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 27",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 27",
    "questionEn": "[Question 27] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 27] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_28",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 28",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 28",
    "questionEn": "[Question 28] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 28] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_29",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 29",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 29",
    "questionEn": "[Question 29] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 29] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_30",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 30",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 30",
    "questionEn": "[Question 30] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 30] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_31",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 31",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 31",
    "questionEn": "[Question 31] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 31] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_32",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 32",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 32",
    "questionEn": "[Question 32] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 32] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_33",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 33",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 33",
    "questionEn": "[Question 33] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 33] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_34",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 34",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 34",
    "questionEn": "[Question 34] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 34] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_35",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 35",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 35",
    "questionEn": "[Question 35] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 35] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_36",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 36",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 36",
    "questionEn": "[Question 36] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 36] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_37",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 37",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 37",
    "questionEn": "[Question 37] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 37] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_38",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 38",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 38",
    "questionEn": "[Question 38] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 38] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_39",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 39",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 39",
    "questionEn": "[Question 39] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 39] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_40",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 40",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 40",
    "questionEn": "[Question 40] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 40] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_41",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 41",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 41",
    "questionEn": "[Question 41] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 41] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_42",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 42",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 42",
    "questionEn": "[Question 42] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 42] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_43",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 43",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 43",
    "questionEn": "[Question 43] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 43] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_44",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 44",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 44",
    "questionEn": "[Question 44] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 44] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_45",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 45",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 45",
    "questionEn": "[Question 45] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 45] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_46",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 46",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 46",
    "questionEn": "[Question 46] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 46] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_47",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 47",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 47",
    "questionEn": "[Question 47] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 47] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_48",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 48",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 48",
    "questionEn": "[Question 48] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 48] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_49",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 49",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 49",
    "questionEn": "[Question 49] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 49] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_50",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 50",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 50",
    "questionEn": "[Question 50] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 50] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_51",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 51",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 51",
    "questionEn": "[Question 51] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 51] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_52",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 52",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 52",
    "questionEn": "[Question 52] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 52] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_53",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 53",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 53",
    "questionEn": "[Question 53] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 53] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_54",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 54",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 54",
    "questionEn": "[Question 54] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 54] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_55",
    "titleEn": "[EASY] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Review 55",
    "titleAr": "[مستوى أساسي] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - سؤال 55",
    "questionEn": "[Question 55] In the context of Egyptian STEM robotics and mechatronics regarding 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 55] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "correctAnswerAr": "يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "explanationEn": "Correct Principle: SLAM solves the chicken-and-egg problem of building a map of an unknown environment while simultaneously localizing the robot within that map using sensor odometry and laser scans.",
    "explanationAr": "المبدأ العلمي الصحيح: يحل نظام SLAM مسألة بناء خريطة لبيئة مجهولة مع تحديد موقع الروبوت بداخلها في نفس الوقت باستخدام قياس المسافات والمسح الليزري.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_56",
    "titleEn": "[EASY] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Review 56",
    "titleAr": "[مستوى أساسي] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - سؤال 56",
    "questionEn": "[Question 56] In the context of Egyptian STEM robotics and mechatronics regarding Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 56] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "correctAnswerAr": "تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "explanationEn": "Correct Principle: Programmable Logic Controllers (PLCs) are hardened industrial digital computers designed to operate reliably under extreme electrical noise, vibration, and temperature conditions in automated manufacturing.",
    "explanationAr": "المبدأ العلمي الصحيح: تعتبر وحدات التحكم المنطقي القابلة للبرمجة (PLC) حواسيب صناعية قوية مصممة للعمل بكفاءة وسط الضوضاء الكهرومغناطيسية والاهتزازات في خطوط الإنتاج.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_57",
    "titleEn": "[EASY] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Review 57",
    "titleAr": "[مستوى أساسي] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - سؤال 57",
    "questionEn": "[Question 57] In the context of Egyptian STEM robotics and mechatronics regarding ROS2 Computational Graph Architecture: Nodes, Topics & Services, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 57] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "correctAnswerAr": "ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "explanationEn": "Correct Principle: Robot Operating System 2 (ROS2) organizes robotic software into modular executable programs called Nodes that communicate over a distributed publish-subscribe messaging topology.",
    "explanationAr": "المبدأ العلمي الصحيح: ينظم نظام تشغيل الروبوت ROS2 البرمجيات في برامج تنفيذية مستقلة تسمى العقد (Nodes) تتواصل عبر طوبولوجيا نشر واشتراك موزعة.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  },
  {
    "id": "th_robotics_ch4_easy_58",
    "titleEn": "[EASY] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Review 58",
    "titleAr": "[مستوى أساسي] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - سؤال 58",
    "questionEn": "[Question 58] In the context of Egyptian STEM robotics and mechatronics regarding Nav2 Mobile Navigation Stack, Costmaps & Path Planners, which of the following scientific statements is valid?",
    "questionAr": "[السؤال 58] في سياق هندسة الروبوتات والميكاترونكس لمدارس STEM المصرية المتعلقة بـ حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، أي من العبارات العلمية التالية صحيحة ومعتمدة؟",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "correctAnswerAr": "تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "explanationEn": "Correct Principle: The ROS2 Navigation Stack (Nav2) guides mobile robots from an initial pose to a goal pose while dynamically avoiding static and moving obstacles.",
    "explanationAr": "المبدأ العلمي الصحيح: تقود حزمة الملاحة Nav2 الروبوتات المتنقلة من نقطة البداية إلى الهدف المحدد مع تفادي العوائق الثابتة والمتحركة ديناميكياً.",
    "stepByStepSolutionEn": [
      "Identify the robotics engineering domain: Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Analyze physical kinematics, embedded signals, and actuators according to Egyptian STEM ministerial standards.",
      "Select the validated engineering answer."
    ],
    "stepByStepSolutionAr": [
      "تحديد المجال الهندسي للروبوتات والميكاترونكس: حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تحليل المعايير الحركية والدوائر المدمجة والمحركات وفق المعايير الوزارية لمدارس STEM.",
      "اختيار الإجابة الهندسية المعتمدة المطابقة للمنهج."
    ],
    "difficulty": "easy",
    "bloomLevel": "Remembering"
  }
],
  medium: [
  {
    "id": "th_robotics_ch4_med_1",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 1",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 1",
    "questionEn": "[Question 1] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 1] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_2",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 2",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 2",
    "questionEn": "[Question 2] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 2] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_3",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 3",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 3",
    "questionEn": "[Question 3] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 3] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_4",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 4",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 4",
    "questionEn": "[Question 4] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 4] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_5",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 5",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 5",
    "questionEn": "[Question 5] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 5] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_6",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 6",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 6",
    "questionEn": "[Question 6] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 6] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_7",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 7",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 7",
    "questionEn": "[Question 7] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 7] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_8",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 8",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 8",
    "questionEn": "[Question 8] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 8] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_9",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 9",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 9",
    "questionEn": "[Question 9] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 9] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_10",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 10",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 10",
    "questionEn": "[Question 10] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 10] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_11",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 11",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 11",
    "questionEn": "[Question 11] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 11] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_12",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 12",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 12",
    "questionEn": "[Question 12] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 12] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_13",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 13",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 13",
    "questionEn": "[Question 13] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 13] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_14",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 14",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 14",
    "questionEn": "[Question 14] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 14] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_15",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 15",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 15",
    "questionEn": "[Question 15] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 15] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_16",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 16",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 16",
    "questionEn": "[Question 16] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 16] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_17",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 17",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 17",
    "questionEn": "[Question 17] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 17] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_18",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 18",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 18",
    "questionEn": "[Question 18] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 18] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_19",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 19",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 19",
    "questionEn": "[Question 19] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 19] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_20",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 20",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 20",
    "questionEn": "[Question 20] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 20] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_21",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 21",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 21",
    "questionEn": "[Question 21] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 21] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_22",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 22",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 22",
    "questionEn": "[Question 22] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 22] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_23",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 23",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 23",
    "questionEn": "[Question 23] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 23] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_24",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 24",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 24",
    "questionEn": "[Question 24] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 24] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_25",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 25",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 25",
    "questionEn": "[Question 25] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 25] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_26",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 26",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 26",
    "questionEn": "[Question 26] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 26] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_27",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 27",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 27",
    "questionEn": "[Question 27] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 27] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_28",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 28",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 28",
    "questionEn": "[Question 28] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 28] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_29",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 29",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 29",
    "questionEn": "[Question 29] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 29] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_30",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 30",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 30",
    "questionEn": "[Question 30] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 30] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_31",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 31",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 31",
    "questionEn": "[Question 31] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 31] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_32",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 32",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 32",
    "questionEn": "[Question 32] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 32] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_33",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 33",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 33",
    "questionEn": "[Question 33] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 33] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_34",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 34",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 34",
    "questionEn": "[Question 34] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 34] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_35",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 35",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 35",
    "questionEn": "[Question 35] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 35] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_36",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 36",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 36",
    "questionEn": "[Question 36] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 36] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_37",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 37",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 37",
    "questionEn": "[Question 37] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 37] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_38",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 38",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 38",
    "questionEn": "[Question 38] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 38] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_39",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 39",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 39",
    "questionEn": "[Question 39] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 39] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_40",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 40",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 40",
    "questionEn": "[Question 40] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 40] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_41",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 41",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 41",
    "questionEn": "[Question 41] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 41] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_42",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 42",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 42",
    "questionEn": "[Question 42] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 42] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_43",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 43",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 43",
    "questionEn": "[Question 43] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 43] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_44",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 44",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 44",
    "questionEn": "[Question 44] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 44] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_45",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 45",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 45",
    "questionEn": "[Question 45] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 45] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_46",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 46",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 46",
    "questionEn": "[Question 46] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 46] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_47",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 47",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 47",
    "questionEn": "[Question 47] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 47] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_48",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 48",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 48",
    "questionEn": "[Question 48] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 48] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_49",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 49",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 49",
    "questionEn": "[Question 49] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 49] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_50",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 50",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 50",
    "questionEn": "[Question 50] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 50] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_51",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 51",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 51",
    "questionEn": "[Question 51] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 51] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_52",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 52",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 52",
    "questionEn": "[Question 52] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 52] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_53",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 53",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 53",
    "questionEn": "[Question 53] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 53] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_54",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 54",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 54",
    "questionEn": "[Question 54] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 54] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_55",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 55",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 55",
    "questionEn": "[Question 55] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 55] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_56",
    "titleEn": "[MEDIUM] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Analysis 56",
    "titleAr": "[مستوى متوسط] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تحليل 56",
    "questionEn": "[Question 56] When analyzing hardware-software integration and operational control for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic, identify the correct engineering relationship:",
    "questionAr": "[السؤال 56] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "correctAnswerAr": "تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "explanationEn": "Engineering Analysis: PLCs execute a continuous deterministic scan cycle: Read Inputs -> Execute User Logic Program -> Update Physical Outputs -> Perform Diagnostics and Communication.",
    "explanationAr": "التحليل الهندسي المعتمد: تنفذ وحدات PLC دورة مسح حتمية مستمرة: قراءة الدخل -> تنفيذ برنامج المنطق -> تحديث الخرج الفيزيائي -> إجراء الفحص الذاتي والاتصالات.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_57",
    "titleEn": "[MEDIUM] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Analysis 57",
    "titleAr": "[مستوى متوسط] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تحليل 57",
    "questionEn": "[Question 57] When analyzing hardware-software integration and operational control for ROS2 Computational Graph Architecture: Nodes, Topics & Services, identify the correct engineering relationship:",
    "questionAr": "[السؤال 57] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "correctAnswerAr": "توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "explanationEn": "Engineering Analysis: ROS2 Topics provide unidirectional asynchronous many-to-many streaming data, while Services offer synchronous two-way request-response communication, and Actions handle long-duration preemptible goal execution.",
    "explanationAr": "التحليل الهندسي المعتمد: توفر مواضيع ROS2 دفق بيانات غير متزامن في اتجاه واحد، وتوفر الخدمات تواصلاً ثنائياً متزامناً (طلب/استجابة)، بينما تدير الأفعال (Actions) الأهداف طويلة الأمد القابلة للإلغاء.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_58",
    "titleEn": "[MEDIUM] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Analysis 58",
    "titleAr": "[مستوى متوسط] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تحليل 58",
    "questionEn": "[Question 58] When analyzing hardware-software integration and operational control for Nav2 Mobile Navigation Stack, Costmaps & Path Planners, identify the correct engineering relationship:",
    "questionAr": "[السؤال 58] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers)."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB)."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "correctAnswerAr": "تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "explanationEn": "Engineering Analysis: Nav2 maintains a 2D global costmap (for static long-range path planning using Dijkstra or A* algorithms) and a local costmap (for real-time dynamic obstacle avoidance using TEB or DWA controllers).",
    "explanationAr": "التحليل الهندسي المعتمد: تحافظ Nav2 على خريطة تكلفة عامة (لتخطيط المسار الاستراتيجي بخوارزمية A*) وخريطة تكلفة محلية (لتفادي العوائق الآنية باستخدام متحكمات DWA أو TEB).",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  },
  {
    "id": "th_robotics_ch4_med_59",
    "titleEn": "[MEDIUM] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Analysis 59",
    "titleAr": "[مستوى متوسط] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تحليل 59",
    "questionEn": "[Question 59] When analyzing hardware-software integration and operational control for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer, identify the correct engineering relationship:",
    "questionAr": "[السؤال 59] عند تحليل التكامل بين العتاد والبرمجيات والتحكم التشغيلي لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer، حدد العلاقة الهندسية الصحيحة:",
    "optionsEn": [
      "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "correctAnswerAr": "يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "explanationEn": "Engineering Analysis: Google Cartographer constructs localized submaps through real-time scan-to-submap matching, and performs global loop closure optimization via Branch-and-Bound algorithms when revisiting known areas.",
    "explanationAr": "التحليل الهندسي المعتمد: يبني نظام Cartographer خرائط فرعية بمطابقة مسح الليزر مع الخريطة آنياً، ويجري تحسين إغلاق الحلقات (Loop Closure) بخوارزمية التفرع والتقييد عند العودة لمكان سابق.",
    "stepByStepSolutionEn": [
      "Formulate mathematical equations governing 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Evaluate quantitative trade-offs, sensor noise, or actuator bandwidth.",
      "Confirm the verified design solution."
    ],
    "stepByStepSolutionAr": [
      "صياغة المعادلات الهندسية الحاكمة لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "تقييم المفاضلات الكمية وضوضاء الحساسات وعرض نطاق استجابة المحركات.",
      "تأكيد الحل الهندسي المعتمد."
    ],
    "difficulty": "medium",
    "bloomLevel": "Understanding"
  }
],
  hots: [
  {
    "id": "th_robotics_ch4_hots_1",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 1",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 1",
    "questionEn": "[Question 1 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 1 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_2",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 2",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 2",
    "questionEn": "[Question 2 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 2 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_3",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 3",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 3",
    "questionEn": "[Question 3 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 3 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_4",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 4",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 4",
    "questionEn": "[Question 4 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 4 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_5",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 5",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 5",
    "questionEn": "[Question 5 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 5 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_6",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 6",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 6",
    "questionEn": "[Question 6 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 6 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_7",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 7",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 7",
    "questionEn": "[Question 7 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 7 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_8",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 8",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 8",
    "questionEn": "[Question 8 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 8 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_9",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 9",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 9",
    "questionEn": "[Question 9 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 9 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_10",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 10",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 10",
    "questionEn": "[Question 10 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 10 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_11",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 11",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 11",
    "questionEn": "[Question 11 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 11 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_12",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 12",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 12",
    "questionEn": "[Question 12 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 12 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_13",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 13",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 13",
    "questionEn": "[Question 13 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 13 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_14",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 14",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 14",
    "questionEn": "[Question 14 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 14 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_15",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 15",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 15",
    "questionEn": "[Question 15 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 15 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_16",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 16",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 16",
    "questionEn": "[Question 16 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 16 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_17",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 17",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 17",
    "questionEn": "[Question 17 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 17 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_18",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 18",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 18",
    "questionEn": "[Question 18 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 18 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_19",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 19",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 19",
    "questionEn": "[Question 19 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 19 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_20",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 20",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 20",
    "questionEn": "[Question 20 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 20 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_21",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 21",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 21",
    "questionEn": "[Question 21 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 21 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_22",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 22",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 22",
    "questionEn": "[Question 22 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 22 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_23",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 23",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 23",
    "questionEn": "[Question 23 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 23 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_24",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 24",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 24",
    "questionEn": "[Question 24 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 24 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_25",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 25",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 25",
    "questionEn": "[Question 25 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 25 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_26",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 26",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 26",
    "questionEn": "[Question 26 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 26 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_27",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 27",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 27",
    "questionEn": "[Question 27 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 27 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_28",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 28",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 28",
    "questionEn": "[Question 28 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 28 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_29",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 29",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 29",
    "questionEn": "[Question 29 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 29 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_30",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 30",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 30",
    "questionEn": "[Question 30 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 30 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_31",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 31",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 31",
    "questionEn": "[Question 31 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 31 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_32",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 32",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 32",
    "questionEn": "[Question 32 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 32 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_33",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 33",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 33",
    "questionEn": "[Question 33 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 33 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_34",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 34",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 34",
    "questionEn": "[Question 34 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 34 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_35",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 35",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 35",
    "questionEn": "[Question 35 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 35 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_36",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 36",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 36",
    "questionEn": "[Question 36 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 36 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_37",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 37",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 37",
    "questionEn": "[Question 37 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 37 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_38",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 38",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 38",
    "questionEn": "[Question 38 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 38 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_39",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 39",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 39",
    "questionEn": "[Question 39 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 39 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_40",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 40",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 40",
    "questionEn": "[Question 40 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 40 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_41",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 41",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 41",
    "questionEn": "[Question 41 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 41 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_42",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 42",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 42",
    "questionEn": "[Question 42 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 42 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS)."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_43",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 43",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 43",
    "questionEn": "[Question 43 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 43 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_44",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 44",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 44",
    "questionEn": "[Question 44 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 44 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends."
    ],
    "optionsAr": [
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_45",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 45",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 45",
    "questionEn": "[Question 45 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 45 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_46",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 46",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 46",
    "questionEn": "[Question 46 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 46 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order.",
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي.",
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_47",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 47",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 47",
    "questionEn": "[Question 47 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 47 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only."
    ],
    "optionsAr": [
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_48",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 48",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 48",
    "questionEn": "[Question 48 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 48 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "The ARM Cortex-M Nested Vectored Interrupt Controller (NVIC) does not support priority levels and executes all ISRs in random order."
    ],
    "optionsAr": [
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "لا يدعم متحكم المقاطعات المتجهية المتداخلة (NVIC) في معالجات ARM مستويات الأولوية وينفذ جميع مقاطعات ISR بترتيب عشوائي."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_49",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 49",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 49",
    "questionEn": "[Question 49 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 49 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066.",
      "Forward kinematics of a 6-DOF robotic arm can be solved using simple scalar subtraction without any coordinate rotation matrices.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066.",
      "يمكن حل الحركيات الأمامية لذراع روبوت بست درجات حرية بطرح جبري بسيط دون استخدام مصفوفات دوران الإحداثيات.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_50",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 50",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 50",
    "questionEn": "[Question 50 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 50 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light.",
      "The Canny edge detection algorithm skips gradient calculation and relies solely on random thresholding across raw pixels."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس.",
      "تتجاهل خوارزمية كاني لكشف الحواف حساب تدرج الصورة وتعتمد فقط على عتبات عشوائية عبر البكسلات الأصلية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_51",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 51",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 51",
    "questionEn": "[Question 51 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 51 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "Collaborative robots (cobots) operate with unlimited kinetic energy and zero emergency force-limiting thresholds under ISO/TS 15066."
    ],
    "optionsAr": [
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "تعمل الروبوتات التعاونية (Cobots) بطاقة حركية غير محدودة ودون أي عتبات لتحديد القوة وعزم الاصطدام وفق معيار ISO/TS 15066."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_52",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 52",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 52",
    "questionEn": "[Question 52 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 52 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "LiDAR sensors determine target distance by measuring the chemical temperature change of air molecules caused by reflected light."
    ],
    "optionsAr": [
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تقيس حساسات الليزر LiDAR المسافة بحساب التغير الكيميائي في درجة حرارة الهواء الناتج عن الضوء المنعكس."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_53",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 53",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 53",
    "questionEn": "[Question 53 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 53 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates.",
      "Field-Oriented Control (FOC) eliminates the need for park and clarke transformations by treating 3-phase AC currents as DC voltages.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة.",
      "يلغي التحكم بالفيض (FOC) الحاجة لتحويلات بارك وكلارك بمعاملة تيارات التيار المتردد ثلاثية الطور كجهود مستمرة.",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_54",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 54",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 54",
    "questionEn": "[Question 54 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 54 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction.",
      "Inertial Measurement Units (IMUs) are completely immune to drift and bias over time when integrating gyroscope angular velocity."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود.",
      "تعتبر وحدات قياس القصور الذاتي (IMU) محصنة تماماً ضد الانحراف والتراكم الزمني للخطأ عند تكامل السرعة الزاوية."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_55",
    "titleEn": "[HOTS] 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer - Advanced Synthesis 55",
    "titleAr": "[تفكير عليا] رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer - تركيب متقدم 55",
    "questionEn": "[Question 55 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer. Determine the mathematically validated result:",
    "questionAr": "[السؤال 55 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "A standard occupancy grid map stores robot locations as continuous infinite-dimensional differential manifold coordinates."
    ],
    "optionsAr": [
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "تخزن خرائط شبكة الإشغال مواقع الروبوت كإحداثيات متشعبة تفاضلية لا نهائية الأبعاد وغير متقطعة."
    ],
    "correctIndex": 1,
    "correctAnswerEn": "An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "correctAnswerAr": "خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "explanationEn": "Detailed Quantitative Solution: An occupancy grid map discretized at resolution $r = 0.05\\ m$ ($5\\ cm/cell$) covering a warehouse of $50\\ m \\times 30\\ m$ consists of: $\\frac{50}{0.05} \\times \\frac{30}{0.05} = 1,000 \\times 600 = 600,000\\ cells$, requiring $600\\ kB$ of RAM as an `int8` array.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: خريطة شبكة إشغال بدقة $5\\ cm$ لخلية تغطي مستودعاً بمساحة $50 \\times 30\\ m$ تتكون من $1,000 \\times 600 = 600,000$ خلية، وتتطلب ٦٠٠ كيلوبايت فقط من الذاكرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for 2D LiDAR Simultaneous Localization and Mapping (SLAM) with Cartographer.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة رسم الخرائط وتحديد الموقع الآني ثنائي الأبعاد (SLAM) باستخدام Cartographer.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_56",
    "titleEn": "[HOTS] Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic - Advanced Synthesis 56",
    "titleAr": "[تفكير عليا] الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية - تركيب متقدم 56",
    "questionEn": "[Question 56 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic. Determine the mathematically validated result:",
    "questionAr": "[السؤال 56 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting.",
      "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
      "Optical quadrature encoders output purely analog sine waves with zero square pulses and cannot determine shaft direction."
    ],
    "optionsAr": [
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي.",
      "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
      "تخرج المشفرات البصرية التربيعية إشارات جيبية تناظرية نقية دون نبضات رقمية ولا يمكنها تحديد اتجاه دوران العمود."
    ],
    "correctIndex": 2,
    "correctAnswerEn": "In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "correctAnswerAr": "في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "explanationEn": "Detailed Quantitative Solution: In IEC 61131-3 Ladder Diagram (LD), an electrical seal-in (latching) circuit connects a normally-open Start pushbutton in parallel with an internal auxiliary contact `RUN_COIL`, keeping the motor energized until a normally-closed Stop button breaks the rung.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في مخطط السلم القياسي (LD)، توصل دائرة التثبيت زر تشغيل مفتوحاً طبيعياً بالتوازي مع ملامس مساعد للملف `RUN_COIL`، مبقية المحرك يعمل حتى يفصل زر الإيقاف المغلق طبيعياً التيار.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Industrial Automation, PLC Architecture & IEC 61131-3 Ladder Logic.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة الأتمتة الصناعية ومعمارية متحكمات PLC ومخططات السلم القياسية.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_57",
    "titleEn": "[HOTS] ROS2 Computational Graph Architecture: Nodes, Topics & Services - Advanced Synthesis 57",
    "titleAr": "[تفكير عليا] بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات - تركيب متقدم 57",
    "questionEn": "[Question 57 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for ROS2 Computational Graph Architecture: Nodes, Topics & Services. Determine the mathematically validated result:",
    "questionAr": "[السؤال 57 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "In FreeRTOS, a binary semaphore and a mutex are identical and both feature automatic priority inheritance to eliminate priority inversion.",
      "The Controller Area Network (CAN bus) requires star topology wiring with zero terminating resistors at the transmission ends.",
      "In ROS2, topics and service requests use raw unbuffered TCP sockets without any underlying Data Distribution Service (DDS) middleware.",
      "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message."
    ],
    "optionsAr": [
      "في نظام FreeRTOS، تتطابق إشارة السيمافور الثنائية مع الميوتكس تماماً ويحتوي كلاهما على خاصية توريث الأولوية التلقائية.",
      "تتطلب شبكة CAN Bus توصيلاً على شكل نجمة دون الحاجة لأي مقاومات نهاية طرفية عند أطراف خط النقل.",
      "في نظام ROS2، تستخدم المواضيع وطلبات الخدمة مقابس TCP عادية غير مخزنة دون وجود وسيط Data Distribution Service (DDS).",
      "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها."
    ],
    "correctIndex": 3,
    "correctAnswerEn": "In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "correctAnswerAr": "في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "explanationEn": "Detailed Quantitative Solution: In ROS2 DDS QoS policies, setting Reliability to `RELIABLE`, Durability to `TRANSIENT_LOCAL`, and History Depth to `1` ensures that late-joining subscriber nodes immediately receive the most recent `/map` message.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: في سياسات جودة الخدمة (QoS) بـ ROS2، يضمن ضبط الموثوقية إلى `RELIABLE` والمتانة إلى `TRANSIENT_LOCAL` وعمق التاريخ إلى `1` استلام العقد الجديدة لآخر خريطة `/map` فور اشتراكها.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for ROS2 Computational Graph Architecture: Nodes, Topics & Services.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة بنية مخطط الحوسبة في ROS2: العقد والمواضيع والخدمات.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  },
  {
    "id": "th_robotics_ch4_hots_58",
    "titleEn": "[HOTS] Nav2 Mobile Navigation Stack, Costmaps & Path Planners - Advanced Synthesis 58",
    "titleAr": "[تفكير عليا] حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار - تركيب متقدم 58",
    "questionEn": "[Question 58 - HOTS] Case Study & Numerical Evaluation: Evaluate the quantitative robotics and mechatronics parameters for Nav2 Mobile Navigation Stack, Costmaps & Path Planners. Determine the mathematically validated result:",
    "questionAr": "[السؤال 58 - مهارات تفكير عليا] دراسة حالة وحسابات كمية: قم بتقييم المعايير الهندسية والحسابية لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار. احسب الناتج الرياضي الدقيق:",
    "optionsEn": [
      "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
      "Under the Denavit-Hartenberg convention, link twist angle alpha is measured perpendicular to both joint axes along the z-axis only.",
      "Brushless DC (BLDC) motors require mechanical carbon brushes and copper commutators to continuously switch rotor polarity.",
      "An H-bridge motor driver allows current to flow in both directions simultaneously through all four MOSFETs without short-circuiting."
    ],
    "optionsAr": [
      "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
      "وفق اصطلاح دينافيت-هارتنبرغ، تُقاس زاوية التواء الوصلة ألفا عمودياً على كلا المحورين على امتداد محور z فقط.",
      "تتطلب المحركات عديمة المسفرات (BLDC) وجود فرش كربونية ميكانيكية ومبدل نحاسي لعكس قطبية العضو الدوار.",
      "تسمح قنطرة H-Bridge بمرور التيار في كلا الاتجاهين في وقت واحد عبر ترانزستورات MOSFET الأربعة دون حدوث قصر كهربائي."
    ],
    "correctIndex": 0,
    "correctAnswerEn": "Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "correctAnswerAr": "تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "explanationEn": "Detailed Quantitative Solution: Costmap inflation layers assign obstacle inflation costs using exponential decay: $\\text{cost} = e^{-k(d - r_i)}$, preventing robot footprints from planning paths too close to lethal obstacle borders.",
    "explanationAr": "الحل الحسابي والخطوات الدقيقة: تحدد طبقات تضخيم خريطة التكلفة مناطق الأمان حول العوائق بتضاؤل أسي: $\\text{cost} = e^{-k(d - r_i)}$، مانعة تخطيط مسار الروبوت بالقرب من حواف العوائق الخطرة.",
    "stepByStepSolutionEn": [
      "Perform deep mathematical, kinematic, or embedded timing analysis for Nav2 Mobile Navigation Stack, Costmaps & Path Planners.",
      "Calculate precise numerical metrics and system bounds.",
      "Select the optimal ministerial engineering specification."
    ],
    "stepByStepSolutionAr": [
      "إجراء تحليل كينماتيكي أو رياضي أو توقيتي مدمج متقدم لمنظومة حزمة الملاحة Nav2 للروبوتات المتنقلة وخرائط التكلفة ومخططات المسار.",
      "حساب المؤشرات الكمية الدقيقة والحدود التشغيلية للنظام.",
      "اختيار المواصفة الهندسية الوزارية المثلى."
    ],
    "difficulty": "hots",
    "bloomLevel": "Analyzing"
  }
]
};
